import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/esm/Row.js";
import Col from "react-bootstrap/esm/Col.js";

// Components
import PathicNavbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

function BlogHome() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [blogPosts, setBlogPosts] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

      <Row id="blogHomeRow">
        <Col>
          <Row><h1>Pathic Blog</h1></Row>
          <Row><h2>A Collection of Thoughts</h2></Row>
        </Col>
        <Col>
          <div id="blogList">
            {content}
          </div>
        </Col>
      </Row>
      
      <Footer />
    </div>
  )
}

export default BlogHome