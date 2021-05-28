import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../logo.svg";
function Header({ theme }) {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    window.scrollY > 20 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Navbar
      bg={navbar === true ? "dark" : "transparent"}
      variant={theme}
      fixed="top"
      collapseOnSelect
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          React Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto navbar-dark">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#fitur">Fitur</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
