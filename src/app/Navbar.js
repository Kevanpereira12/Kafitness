import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const BlueNavbar = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Brand href="#home">Kafitness</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <a className="nav-link" href="/iniciosesion">
            Iniciar sesión
          </a>
          <a className="nav-link" href="/horario">
            Horario
          </a>
          <a className="nav-link" href="/acercade">
            Acerca de
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BlueNavbar;

