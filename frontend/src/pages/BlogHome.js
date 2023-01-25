import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Components
import PathicNavbar from "../components/Navbar.js";

function BlogHome() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [blogPosts, setBlogPosts] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    const handleScroll = e => {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  useEffect(() => {
    if(blogPosts == null) {
      try {
        fetch("http://165.232.156.241/Blog")
          .then(results => results.json())
          .then(data => {
            setBlogPosts(data);

            const contentProcessing = data.map((post) =>
                <Card className={post._id}>
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.summary}</Card.Text>
                    <Button as={Link} to={"/blog/" + post._id}variant="primary">See more</Button>
                  </Card.Body>
                </Card>
                )
            setContent(contentProcessing)
          })
      }
      catch (error) {
        console.log(error);
      }
    }
  })

  return (
    <div id="blogHomeContainer">
      {/*add navbar and pass scrollPosition */}
      <PathicNavbar scrollPosition={scrollPosition}/>

      <h1>Pathic Blog</h1>
      <div id="blogList">
        {content}
      </div>

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
  )
}

export default BlogHome