import { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class PathicNavbar extends Component {

  render () {
   return (
    <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">Sajjad Al-Kazzaz</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/pathic"}>Pathic</Nav.Link>
                <Nav.Link as={Link} to={"/blog"}>Blog</Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
  }

}

export default PathicNavbar;
