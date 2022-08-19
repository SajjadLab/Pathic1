import React, { useState, useEffect } from "react";

import Carousel from "react-bootstrap/Carousel";

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = e => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <div className="homeContainer">
      {/*Header with gif(?) demoing pathic */}
      <header className="homeMasthead">

      </header>

      {/*Section explaining what pathic is*/}
      <section className="pathic-about-section text-center">
        <div className="container">
          <div className="row gx-lg-5 justify-content-center">
            <div className="col col-lg-8 mt-5 mb-5">
              <h2 className="text-white mb-4">What is Pathic?</h2>
              <p className="text-white-50">Pathic is an interactive tool for understanding human history.</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Home;
