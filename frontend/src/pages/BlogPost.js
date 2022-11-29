import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// Components
import PathicNavbar from "../components/Navbar.js";

function BlogPost() {
  const { blogId } = useParams()
  const [scrollPosition, setScrollPosition] = useState(0);
  const [blogData, setBlogData] = useState(null);
  const [isReady, setIsReady] = useState(false);

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
    if(blogData == null) {
      fetch(`http://localhost:5050/Blog/${blogId}`)
        .then(results => results.json())
        .then(data => {
          setBlogData(data);
          setIsReady(true);
        })
    }
  })


  return isReady ? (
    <div id='blogPostContainer'>
      {/*add navbar and pass scrollPosition */}
      <PathicNavbar scrollPosition={scrollPosition}/>

      <div id="blogContent">
        <h1>{blogData.title}</h1>
        <h6>Author: {blogData.author}</h6>
        <h6>Date: {blogData.publicationDate}</h6>
        <p>{blogData.content}</p>
      </div>
    </div>
  ):
  (
    <div>
      <h1>This post is still in progress</h1>
    </div>
  )
}

export default BlogPost