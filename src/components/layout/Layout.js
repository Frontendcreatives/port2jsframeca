import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../../sass/styles.scss";
import { BrowserRouter as Router, Switch, Route, NavLink } 
from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import GameDetail from "../game/GameDetail";
import Footer from "./Footer";

function Layout() {
    return (
        <>
<Router>
        <Navbar bg="transparent" variant="dark" expand="lg">
            <NavLink to="/" exact>
                <Navbar.Brand className="logo">RAWG</Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/" exact className="nav-link">HOME</NavLink>
                        <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        
        <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/game/:id" component={GameDetail} />
                </Switch>
        </Container>
</Router>
        <Footer/>
        </>
    );
}

export default Layout;