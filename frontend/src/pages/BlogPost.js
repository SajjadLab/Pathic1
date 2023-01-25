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
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  useEffect(() => {
    if(blogData == null) {
      fetch(`http://165.232.156.241/Blog/${blogId}`)
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
        <div className='content' dangerouslySetInnerHTML={{__html: blogData.content}}></div>
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
  ):
  (
    <div id="blogContent">
      <h1>This post is still in progress</h1>
    </div>
  )
}

export default BlogPost