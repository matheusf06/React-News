import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#/">React News</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#/">Inicio</Nav.Link>
                    <Nav.Link href="#/business">Negócios</Nav.Link>
                    <Nav.Link href="#/entertainment">Entretenimento</Nav.Link>
                    <Nav.Link href="#/health">Saúde</Nav.Link>
                    <Nav.Link href="#/sport">Esportes</Nav.Link>
                    <Nav.Link href="#/science">Ciências</Nav.Link>
                    <Nav.Link href="#/technology">Tecnologia</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#/sobre" disabled>Sobre nós</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
