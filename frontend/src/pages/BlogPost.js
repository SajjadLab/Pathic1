import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function BlogPost() {
  const { blogPost } = useParams()
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    if(blogData == null) {
    fetch(`http://localhost:5050/Blog/${blogPost}`)
      .then(results => results.json())
      .then(data => {
        setBlogData(data);
      })
    }
  })


  return (
    <div className='blogPostContainer'>
        <h1>{blogData.title}</h1>
        <p>{blogData.article}</p>
    </div>
  )
}

export default BlogPost