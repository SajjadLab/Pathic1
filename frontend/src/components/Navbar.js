import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class PathicNavbar extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {topOfPageBool: false};
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState({topOfPageBool: window.scrollTop === 0 ? true : false});
    console.log("beep");
  }

  render () {
   return (
    <Navbar ref={this.myRef} onScroll={this.handleScroll} className={this.topOfPageBool ? "navbar-shrink" : ""} fixed="top" variant="light" expand="lg" id="mainNav">
          <Container className="px-4 px-lg-5">
            <Navbar.Brand as={Link} to="/">Sajjad Al-Kazzaz</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end ms-auto">
                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
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
