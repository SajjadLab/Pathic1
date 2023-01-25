import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//import Form from "react-bootstrap/Form";

class PathicNavbar extends Component {

  render () {
   return (
    <Navbar className={(this.props.scrollPosition === 0) ? "navbar-shrink":"navbar-shrink"} fixed="top" expand="lg" id="mainNav">
      <Container className="px-4 px-lg-5">
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end ms-auto">
            <Nav.Item>
              {/*
              <Form>
                <Form.Control placeholder="search" />
              </Form>
               */}
            </Nav.Item>
            <Nav.Link as={Link} to={"/pathic"}>Pathic</Nav.Link>
            <Nav.Link as={Link} to={"/blog"}>Blog</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About the Creator</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }

}

export default PathicNavbar;
