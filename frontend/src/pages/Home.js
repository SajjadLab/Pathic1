import React, { useState, useEffect } from "react";

// Bootstrap imports
// import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container.js";
import Row from "react-bootstrap/esm/Row.js";
import Col from "react-bootstrap/esm/Col.js";
// import Card from "react-bootstrap/esm/Card.js";
import PathicNavbar from "../components/Navbar.js";

// Image imports
import terrain from "../assets/img/cesiumTerrain.jpg";
import interactive from "../assets/img/interactive.jpg";
import empathy from "../assets/img/empathy.png";
import keyboard from "../assets/img/keyboard.jpg";

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = e => {
      setScrollPosition(window.scrollY);
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

      {/*Header with gif(?) demoing pathic 
      <header className="homeMasthead">

      </header>*/}

      {/*Section explaining what pathic is*/}
      <section className="pathic-about-section text-center">
        <Container>
          <Row className="justify-content-md-center">
            <Col>
              <h2 className="mb-4">What is Pathic?</h2>
              <p className="pathic-about-paragraph">
                Some people believe that the invention of writing marked the beginning of civilization.
                It's easy to see why, so much of human life is defined by our communication technologies.
                The fundamental means of day to day communication have changed for billions of people in recent decades.
                However, the way we study and view human history hasn't changed much to make
                use of that ability. Pathic is an interactive tool for understanding human history. The goal 
                is to leverage the power of big data to make computational historical knowledge. Pathic uses unique
                data structures to model the dynamic nature of human history and a robust MERN framework for an enjoyable
                and powerful interaction environment.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section class="projects-section bg-light" id="projects">
            <div class="container px-4 px-lg-5">
                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid py-5" src={empathy} alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-white text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-black">Empathy</h4>
                                    <p class="mb-0 text-black-50">
                Fuzzy logic integration for uncertainty in historical knowledge and to account for
                human bias. An upgraded way of handling sitations and sources to be able to show human expression
                and discrepancies between sources by means of an Empath (Stay tooned for the blog post on Empaths!).
                 A dynamic way of handling historical relationships between objects that expands on traditional methods by
                taking advantage of established data processing innovations and by adding qualitative attributes to make
                it more understandable to humans.
</p>
                                    <hr class="d-none d-lg-block mb-0 me-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid py-5" src={interactive} alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Interactivity</h4>
                                    <p class="mb-0 text-white-50">
                Interacting with Pathic is made to feel like a natural extension of ones own conciousness and allows
                users to feel immersed in the history they are researching. At the heart is CesiumJS, a robust JavaScript
                library for 3D geospatial visualization. Along Cesium is custom software for
                timeline management and a tooltip for reading more details about the objects being rendered. 
</p>
                                    <hr class="d-none d-lg-block mb-0 ms-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid py-5" src={keyboard} alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-white text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-black">Human-Computer Interface</h4>
                                    <p class="mb-0 text-black-50">
                Careful consideration
                was also put into the physical human to computer interaction tools needed to take Pathic to the next level.
                The Pathic Keyboard was designed alongside Pathic to blend the transition from desktop to VR (Blog post coming soon!).
</p>
                                    <hr class="d-none d-lg-block mb-0 me-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid py-5" src={terrain} alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">In Development</h4>
                                    <p class="mb-0 text-white-50">
                This project is still in its early stages. Check out the Pathic Blog to keep update as components get implemented
                and deployed. There are alot more features that are still to early in development to mention but that get us here 
                at Pathic super excited!
                                    </p>
                                    <hr class="d-none d-lg-block mb-0 ms-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

export default Home;
