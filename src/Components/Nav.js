import React from "react";
import "./Nav.css";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="white-text">
      <LinkContainer to="/">
        <Navbar.Brand className="white-text">Panoply Of Words</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link className="white-text">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/dictionary">
            <Nav.Link className="white-text">Dictionary</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/notes">
            <Nav.Link className="white-text">Notes</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/translator">
            <Nav.Link className="white-text">Translator</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/about">
            <Nav.Link className="white-text">About Us</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
