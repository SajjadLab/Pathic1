import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

// Import pages
import Home from "./components/Home.js"
import Map from "./components/Map.js";

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
              - projects
              - blog
              - contact
            - Pathic
              - Map
              - Timeline
              - infobox
          */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="pathic" element={<Map />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
