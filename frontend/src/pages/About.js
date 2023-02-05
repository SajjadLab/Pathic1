import React, { useState, useEffect } from "react";
import PathicNavbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Row from "react-bootstrap/esm/Row.js";
import Col from "react-bootstrap/esm/Col.js";

// Bootstrap
import Carousel from "react-bootstrap/Carousel";

// Images
import headshot from "../assets/img/headshot.jpg";
import ubcsigil from "../assets/img/UBCsigil.png";
import sajjadPropbot from "../assets/img/sajjadPropbot.png";
import propbotLayout from "../assets/img/propbotLayout.png";
import propbotTeam from "../assets/img/propbotTeam.png";
import pathicConnection from "../assets/img/pathicConnection.gif";
import keyboard from "../assets/img/keyboard.jpg";

function About() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [displayEducation, setDisplayEducation] = useState(false);
  const [displayPropbot, setDisplayPropbot] = useState(false);
  const [displayPathic, setDisplayPathic] = useState(false);

  useEffect(() => {
    const handleScroll = e => {
      setScrollPosition(window.scrollY);
      console.log(scrollPosition);

      if(window.scrollY >= 400) {
        setDisplayEducation(true);
      }
      if(window.scrollY >= 1600) {
        setDisplayPropbot(true);
      }
      if(window.scrollY >= 5100) {
        setDisplayPathic(true);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
      <div id="aboutContainer">
        <PathicNavbar scrollPosition={scrollPosition}/>

        <Row id="aboutHeader">
          <h1>Hi, I'm Sajjad</h1>
          <a className="btn btn-primary" id="headshot-button" href="#about">
            <img id="headshot-button-img" src={headshot} alt="headshot" />
          </a>
        </Row>

        <Row id="educationRow" {...(displayEducation?{class: "row revealContent"}:{})}>
          <Col id="educationCol"><h2>Electrical Engineering Graduate from</h2></Col>
          <Col><img src={ubcsigil} alt="ubc" /></Col>
          <Row id="coursesRow">
            <Carousel variant="dark">
              <Carousel.Item>
                <div id="powerElectronics">
                  <h3>Power Electronics</h3>
                  <p>I studied rectifiers and tested their harmonic histortion in a lab. I also covered buck, boost, and buck-boost converter technologies. Various inverter topologies were theoretically covered in class and further evaluated in labs.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div id="vlsi">
                  <h3>Very Large Scale Integration</h3>
                  <p>Furthered my experience using System Verilog and Quartus to make a state machine for a room automation device. Studied the hardware level design and the modern principles of finfet devices using Cadence. Layed out then analyzed and plotted the behaviour of a NAND3 gate using Cadence which received first place in a class of 60; the metric was delay x area.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div id="internationalRelations">
                  <h3>Introduction to IR</h3>
                  <p>Applied knowledge I had accumulated during personal reading in a formal academic environment. Sharpened my essay writing abilities while writing on topics that straddle the line between politics and engineering with regard to climate change.</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div id="conversionTransmission">
                  <h3>Energy Conversion and Transmission</h3>
                  <p>Studied 3-phase power in depth in a theoretical setting. Evaluated DC machines and brushless DC motors in a lab. Analyzed the generation, transformation, and transmission power in a grid network.</p>
                </div>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Row>

        <Row id="propbotRow" {...(displayPropbot?{class: "row revealContent"}:{})}>
          <Row><h2>Propbot</h2></Row>
          <Row><p>Propbot is a Capstone Project I worked on for the UBC Radio Science Lab along with my colleagues. Propbot is a semi-autonomous robot capable of carrying measurement equipment around to data collection points of interest.</p></Row>
          <Row id="propbotVideoRow"><iframe width="1066" height="600" src="https://www.youtube.com/embed/8sedLmPvChM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Row>
          <Row id="postPropbotFrameRow">
            <Row>
              <Col><h4>I led the Power Team</h4></Col>
              <Col><img width={650} src={sajjadPropbot} alt="Sajjad with Propbot" /></Col>
            </Row>
            <Row>
              <Col><h4>Re-designed the legacy power system and control writing. Added a new modular power storage component.</h4></Col>
              <Col><img src={propbotLayout} alt="Propbot schematic" /></Col>
            </Row>
            <Row>
              <Col><img src={propbotTeam} alt="Propbot Team" /></Col>
              <Col><h4>Collaborated with team-members to achieve ambitious goals with outstanding results!</h4></Col>
            </Row>
          </Row>
        </Row>

        <Row id="pathicRow" {...(displayPathic?{class: "row revealContent"}:{})}>
          <Row><h2>Developing Pathic</h2></Row>
          <Row><p>Pathic is a long term personal research project I have been working on. I am interested in modelling the historical world and creating an interactive and intuitive environment for those models.</p></Row>
          <Row><img width={650} src={pathicConnection} alt="connection" /></Row>
          <Row><h2>Pathic Keyboard</h2></Row>
          <Row><p>I researched, purchased, soldered, and built a customer wireless split keyboard for advanced human-computer interfacing. <a href="/blog/6387c89fcfe4d7470cfda911">Learn more here</a></p></Row>
          <Row><img width={650} src={keyboard} alt="keyboard" /></Row>
          <Row><h2>Some Things I've Learned on the Way</h2></Row>
          <Row>
            <Col><h3>Software</h3></Col>
            <Col>
              <Row><h5>HTML and CSS</h5></Row>
              <Row><h5>React</h5></Row>
              <Row><h5>MongoDB</h5></Row>
              <Row><h5>Python</h5></Row>
            </Col>
          </Row>

          <Row>
            <Col><h3>Hardware</h3></Col>
            <Col>
              <Row><h5>SolidWorks</h5></Row>
              <Row><h5>3D Printing</h5></Row>
              <Row><h5>Soldering</h5></Row>
              <Row><h5>PCB Layout</h5></Row>
            </Col>
          </Row>

          <Row>
            <Col><h3>Design</h3></Col>
            <Col>
              <Row><h5>Complex Models</h5></Row>
              <Row><h5>UX/UI</h5></Row>
              <Row><h5>Photo Editing</h5></Row>
              <Row><h5>Video Editing</h5></Row>
            </Col>
          </Row>

          <Row>
            <Col><h3>History</h3></Col>
            <Col>
              <Row><h5>Ancient Rome</h5></Row>
              <Row><h5>Medieval Europe</h5></Row>
              <Row><h5>Medieval England</h5></Row>
              <Row><h5>Renaissance and Reformation</h5></Row>
            </Col>
          </Row>

          <Row id="booksRow">
            <Col><h3>Books</h3></Col>
            <Col>
              <Row><Col><h5>Guns, Germs and Steel</h5></Col><Col><h5>- Jared Diamond</h5></Col></Row>
              <Row><Col><h5>The Republic</h5></Col><Col><h5>- Plato</h5></Col></Row>
              <Row><Col><h5>The Prince</h5></Col><Col><h5>- Niccolo Machiavelli</h5></Col></Row>
              <Row><Col><h5>Gödel Escher Bach</h5></Col><Col><h5>- Douglas Hofstadter</h5></Col></Row>
            </Col>
          </Row>
        </Row>
      
        <Footer />
      </div>
  );
}

export default About;
