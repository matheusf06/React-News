import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#/inicio">React News</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#/inicio">Inicio</Nav.Link>
          <Nav.Link href="#/negocios">Negócios</Nav.Link>
          <Nav.Link href="#/entretenimento">Entretenimento</Nav.Link>
          <Nav.Link href="#/saude">Saúde</Nav.Link>
          <Nav.Link href="#/esporte">Esportes</Nav.Link>
          <Nav.Link href="#/ciencias">Ciências</Nav.Link>
          <Nav.Link href="#/tecnologia">Tecnologia</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#/sobre" disabled>
            Sobre nós
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
