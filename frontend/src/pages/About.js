import { Component } from "react";
import headshot from "../assets/img/headshot.jpg";
import terrain from "../assets/img/cesiumTerrain.jpg";
import ubcsigil from "../assets/img/UBCsigil.png";
import sabis from "../assets/img/sabis.png";

import Carousel from "react-bootstrap/Carousel";

class About extends Component {
  render () {
    return (
      <div className="aboutContainer">
        {/*Masthead*/}
        <header className="masthead">
            <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Hi, I'm Sajjad</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">I am an Electrical Engineering student at UBC with an interest in programming, web-design, computational knowledge, and history</h2>
                        <a className="btn btn-primary" id="headshot-button" href="#about">
                          <img id="headshot-button-img" src={headshot} alt="headshot" />
                        </a>
                    </div>
                </div>
            </div>
        </header>

        {/*About section*/}
        <section className="about-section text-center">
            <div className="container px-4 px-lg-5" id="about">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 mt-5">
                        <h2 className="text-white mb-4">What I Do</h2>
                        <p className="text-white-50">
                          I am an Electrical Engineering undergraduate at UBC finishing up my last semester. I have always been facinated by computers, but my exposure to hardware and software design during my undergrad has changed the way I view computers. Since being introduced to programming through C during a 2nd year course I went on to learn about data structures and algorithms using C. Various courses and group projects implored me to dive deeper and use Assembly with custom wired microcontrollers. This journey caused me to stumble on microcontroller design and component level design using verilog hardware description language. The blend between software and hardware at this level is truley facinating and useful, the principles of design used on the hardware level can be used at all levels of the stack to improve functionality. All this inspired me to study higher level programming languages. I started with python and made a few, though unsuccessful, educational games like TetrisAI. I quickly found an interest in web-development though and decided to learn Django, HTML, and CSS. I made a practice website called PriorityCalculator which was meant to help me juggle my interests with my classes and assignments; suffice to say, I'm always itching to be coding rather than studying for a class. I then learned Javascript so that I could use D3.js in a new website idea I had with a friend called CourseOracle. It was meant to be a visually interactive website for UBC students to manage courses, requirements, and registration availability. We managed to get a skeleton of the project up before classes started and we were whisked away. Accompanying this Linux fueled rabbit hole dive was an equally fierce curiosity with human history. Accompanying this Linux fueled rabbit hole dive was an equally fierce curiosity with human history. Accompanying this Linux fueled rabbit hole dive was an equally fierce curiosity with human history.
                        </p>
                    </div>
                </div>
            </div>

          <Carousel>
            <Carousel.Item>
              <div id="carouselEducation">
                <img className="img-fluid" id="carouselImage" src={ubcsigil} alt="ubc" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div id="carouselEducation">
                <img className="img-fluid" id="carouselImage" src={sabis} alt="sabis erbil" />
              </div>
            </Carousel.Item>

          </Carousel>
        </section>
      </div>
    );
  }
}

export default About;
