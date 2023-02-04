import React, { useState, useEffect } from "react";

// Bootstrap imports
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container.js";
import Row from "react-bootstrap/esm/Row.js";
import Col from "react-bootstrap/esm/Col.js";
import PathicNavbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

// Image imports
//import terrain from "../assets/img/cesiumTerrain.jpg";
import interactive from "../assets/img/interactive.jpg";
import empathy from "../assets/img/empathy.png";
//import keyboard from "../assets/img/keyboard.jpg";
import pathicLogo from "../assets/img/pathicLogo.png";

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [displayCollect, setDisplayCollect] = useState(false);
  const [displayInteract, setDisplayInteract] = useState(false);
  const [displayConnect, setDisplayConnect] = useState(false);

  useEffect(() => {
    const handleScroll = e => {
      setScrollPosition(window.scrollY);
      //console.log(window.scrollY);

      if(window.scrollY >= 350) {
        setDisplayCollect(true);
      }

      if(window.scrollY >= 750) {
        setDisplayInteract(true);
      }

      if(window.scrollY >=1600) {
        setDisplayConnect(true);
      }
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

        <Row id="pathicHeader">
            <Col>
                <Row id="pathicLogoRow"><img id="pathicLogo" src={pathicLogo} alt="brain to brain logo" /></Row>
                <Row id="pathicTitleRow"><h1>Pathic</h1></Row>
            </Col>
            <Col id="headerCol2">
                <Row><h2>Connect a Story</h2></Row>
                <Row></Row>
                <Row id="throughTimeRow"><h2>Through Time</h2></Row>
            </Col>
        </Row>

        {/*Home content: Collect data, interact with data, connect data and people */}
        <Container id="homeContent">
            <Row id="collectContent" {...(displayCollect?{class: "row revealContent"}:{})}>
                <Col id="collectContentCol">
                    <Row><h2>Collect Historical Data</h2></Row>
                    <Row><p>Use free and open-source software like Obsidian, Zotero, and Memex</p></Row>
                    <Row id="collectButtonRow"><Button id="homeToBlogButton" as={Link} to={"/blog"} variant="secondary">Learn More</Button></Row>

                </Col>
                <Col></Col>
            </Row>

            <Row id="interactContent" {...(displayInteract?{class: "row revealContent"}:{})}>
                <Col><img src={interactive} alt="interactive" /></Col>
                <Col id="interactContentCol">
                    <Row><h2>Interact in a 3D Environment</h2></Row>
                    <Row><p>The Pathic Map is powered by Cesium.js</p></Row>
                    <Row id="interactButtonRow"><Button id="homeToBlogButton" as={Link} to={"/blog"} variant="secondary">Learn More</Button></Row>
                </Col>
            </Row>

            <Row id="connectContent" {...(displayConnect?{class: "row revealContent"}:{})}>
                <Col id="connectContentCol">
                    <Row><h2>Connect Models to People</h2></Row>
                    <Row><p>Enjoy lively, data driven debates with the greatest thinkers, alive or otherwise</p></Row>
                    <Row id="collectButtonRow"><Button id="homeToBlogButton" as={Link} to={"/blog"} variant="secondary">Learn More</Button></Row>
                </Col>
                <Col><img src={empathy} alt="connection" /></Col>
            </Row>
        </Container>

        <Footer />

    </div>
  );
}

export default Home;
