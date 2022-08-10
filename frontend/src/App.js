import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Map from "./components/Map.js";
import PathicNavbar from "./components/Navbar.js";

class App extends Component {
  render () {
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PathicNavbar />}/>
            <Route path="pathic" element={<Map />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
