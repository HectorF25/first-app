import React from "react";
import logo from '../../logo.svg';
import { Navbar, Nav, Container } from "react-bootstrap";
const HeaderComponent = () => {
  return (
    <header className="p-3 bg-dark text-white">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            First-APP
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/estudiantes">Estudiantes</Nav.Link>
              <Nav.Link href="/personajes">Personajes</Nav.Link>
              <Nav.Link href="/personajesForm">Personajes Form</Nav.Link>
              <Nav.Link href="/contact">Contacto</Nav.Link>
              <Nav.Link href="/posts">Posts API</Nav.Link>
              <Nav.Link href="https://github.com/hectorf25" target="_blank">GitHub</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default HeaderComponent;
