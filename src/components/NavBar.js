import React, {useContext} from 'react';
import {Context} from "../index";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import {SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/const";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom"

const NavBar = observer(( ) => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logout = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style ={{color : 'white'}} to={SHOP_ROUTE}>AutoSale</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() =>
                            logout()} className="m-lg-1">Выйти</Button>
                        <Button variant={"outline-danger"} onClick={() =>
                            navigate(ADMIN_ROUTE)} className="m-lg-1">Админ панель</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;