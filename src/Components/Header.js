import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">
              <span>
                <b>FRANK BANDITI</b>
              </span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-space-between"
          >
            <Nav className="me-auto">
              <LinkContainer to="/store">
                <Nav.Link href="#store">Mağaza</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/blog">
                <Nav.Link href="#blog">Blog</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
