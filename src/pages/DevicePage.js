import React, {useEffect, useState} from 'react';
import {Card, Col, Container,  Image, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() =>{
        fetchOneDevice(id).then(data => setDevice(data))
    },[])
    return (
        <Container className={"mt-5"}>
            <Row>
                <Col md={10}>
                    <Image width={1000} height={500} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={1}>
                    <Card
                    className="ml-auto d-flex flex-column align-items-center justify-content-around"
                    style={{width:200,height:150, fontSize: 16, border: '5px solid lightcoral'}}
                    >
                        <h4>От {device.price} руб.</h4>
                        <button variant = {"outline-dark"}>Оставить заявку</button>
                    </Card>
                </Col>
            </Row>
            <Row className={"d-flex flex-column m-3"}>
                <h2>Характеристики</h2>
                {device.info.map((info) =>
                    <Row key={info.id} style={{background:'lightcoral', padding:5 }}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>

        </Container>
    );
};

export default DevicePage;