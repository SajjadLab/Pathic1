import React, { useState, useEffect } from "react";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container.js";
import Row from "react-bootstrap/esm/Row.js";
import Col from "react-bootstrap/esm/Col.js";
import PathicNavbar from "../components/Navbar.js";

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = e => {
      setScrollPosition(window.scrollY);
      console.log(scrollPosition);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <div className="homeContainer">
      {/*add navbar and pass scrollPosition */}
      <PathicNavbar scrollPosition={scrollPosition}/>

      {/*Header with gif(?) demoing pathic */}
      <header className="homeMasthead">

      </header>

      {/*Section explaining what pathic is*/}
      <section className="pathic-about-section text-center">
        <Container>
          <Row className="justify-content-md-center">
            <Col>
              <h2 className="text-white mb-4">What is Pathic?</h2>
              <p className="text-white-50">Pathic is an interactive tool for understanding human history.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
