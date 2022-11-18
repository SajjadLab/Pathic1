import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

// Import pages
import Home from "./pages/Home.js"
import Pathic from "./pages/Pathic.js";
import About from "./pages/About.js";
import BlogHome from "./pages/BlogHome.js";
//import Map from "./components/Map.js";

// Import global components
//import PathicNavbar from "./components/Navbar.js";


class App extends Component {
  render () {
    return (
      <div className="app">
        {/*Route main pages:
            - Home page
              - header
              - about
              - blog
            - About Sajjad page
              - about
              - contact
            - Pathic
              - Map
              - Timeline
              - infobox
            - Blog
              - /blog post
              <Route path=":blogPost" element={<BlogPost />} />
          */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About /> } />
            <Route path="pathic" element={<Pathic />} />
            <Route path="blog" element={<BlogHome />} >
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
