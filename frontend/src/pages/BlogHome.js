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
        fetch("http://localhost:5050/Blog")
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
    </div>
  )
}

export default BlogHome