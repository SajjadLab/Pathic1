import { Component } from "react";
import React, { useState, useEffect } from "react";
import PathicNavbar from "../components/Navbar.js";

// Bootstrap
import Carousel from "react-bootstrap/Carousel";

// Images
import headshot from "../assets/img/headshot.jpg";
import ubcsigil from "../assets/img/UBCsigil.png";
import sabis from "../assets/img/sabis.png";

function About() {
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
      <div className="aboutContainer">
      <PathicNavbar scrollPosition={scrollPosition}/>
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
                        Hello, my name is Sajjad and I'm an Electrical Engineering graduate from UBC.
                        I have spent years cultivating a broad range of skills over a number of fields.
                        My experience working on Propbot as Power Systems lead facilitated application 
                        of core electrical engineering theory such as circuit design, modelling, and testing, power 
                        conversion, power storage, and efficiency. Working collaboratively with my capstone
                        teammates we were able to get Propbot up and running with full remote control. I also
                        have experience with system level design and coding as I bolstered electrical courses with
                        computer hardware courses during my degree at UBC. Outside of academic settings I have
                        diversified my knowledge with programming skills in Python and Wolfram as well as 
                        web development skills using React and MongoDB. My work experience in customer services
                        has allowed me to merge my strong communication skills with my diverse skillset into a 
                        versatile package that I can leverage in any setting.
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

      <section class="contact-section bg-black pt-4 pb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fab fa-github text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Github</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50"><a href="https://github.com/SajjadLab">SajjadLab</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-envelope text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Email</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50"><a href="mailto:alkazzazsajjad@gmail.com">alkazzazsajjad@gmail.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fab fa-linkedin text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">LinkedIn</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50"><a href="https://www.linkedin.com/in/sajjadalkazzaz">Chat with me</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
  );
}

export default About;
