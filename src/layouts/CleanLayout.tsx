import { Outlet, NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import "../styles/layout.scss";

export default function CleanLayout() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Container>
          <Navbar.Brand>Guía</Navbar.Brand>
          <Navbar.Toggle aria-controls="nav" />
          <Navbar.Collapse id="nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" end>
                Inicio
              </Nav.Link>
              <Nav.Link as={NavLink} to="/faq">
                FAQ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
