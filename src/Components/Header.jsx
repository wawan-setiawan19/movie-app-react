import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../logo.svg";
function Header({ theme }) {
  const [navbar, setNavbar] = useState(false);
  const url = useLocation().pathname;
  const changeBackground = () => {
    window.scrollY > 20 ? setNavbar(true) : setNavbar(false);
  };
  window.addEventListener("scroll", changeBackground);
  useEffect(() => {
    (url === "/about" || url === "/fitur") ? setNavbar(true) : setNavbar(false);
  }, [url])


  return (
    <Navbar
      bg={navbar ? "gradient" : "transparent"}
      variant={theme}
      fixed={url === "/about" || url === "/fitur" ? "" : "top"}
      collapseOnSelect
      expand="lg"
    >
      <Container>
        <Link to="/" className="link">
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            One Movie
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto navbar-dark">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/fitur">
              <Nav.Link>Fitur</Nav.Link>
            </LinkContainer>
            <LinkContainer to="about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
