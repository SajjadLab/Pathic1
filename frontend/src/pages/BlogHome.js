import React, { useState, useEffect } from "react";

// Components
import PathicNavbar from "../components/Navbar.js";

function BlogHome() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [blogPosts, setBlogPosts] = useState(null);
  const [content, setContent] = useState(null);

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

  useEffect(() => {
    if(blogPosts == null) {
    fetch("http://localhost:5050/Blog")
      .then(results => results.json())
      .then(data => {
        setBlogPosts(data);

        const contentProcessing = data.map((post) =>
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>)
        setContent(contentProcessing)
      })
    }
  })

  return (
    <div className='blogContainer'>
      {/*add navbar and pass scrollPosition */}
      <PathicNavbar scrollPosition={scrollPosition}/>

      {content}
    </div>
  )
}

export default BlogHome