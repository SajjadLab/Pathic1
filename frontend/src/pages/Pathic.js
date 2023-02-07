import React, { useState, useEffect, useCallback, useRef } from "react";
import Map from "../components/Map.js";
import PathicNavbar from "../components/Navbar.js";
import DataBox from "../components/DataBox.js";


function Pathic () {
  // all currently displayed tgjs
  const [tgjs, setTgjs] = useState(null);
  // search box open boolean
  const [searchBox, setSearchBox] = useState(false);
  // searchData state
  const [searchInput, setSearchInput] = useState("");
  // hook to searchbar
  const searchRef = useRef(null);
  // current year state
  const [currentYear, setCurrentYear] = useState(2000);
  // databox info to display
  const [data, setData] = useState({"title": "test title"});

  // handle keypress
  const handleKeyPress = useCallback(
    event => {
      const {key, keyCode} = event;
      if(key && searchBox === false) {
        setSearchInput("");
        setSearchBox(true);
      }
      if(keyCode === 27 ) {
        setSearchBox(false);
      }
      else if(keyCode === 13 ) {
        if(searchBox) {
          setCurrentYear(searchInput);
          setSearchBox(false);
          setSearchInput("");
          fetch("http://165.232.156.241/Pathic/" + currentYear)
                .then(results => results.json())
                .then(data => {
                  setTgjs(data);
                })
        }

        console.log(currentYear);
      }
    }, [searchInput, searchBox, currentYear, setCurrentYear]
  )

  // handle search input
  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  useEffect(() => {
    if(searchBox) {
      searchRef.current.focus();
    }
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [searchBox, handleKeyPress]);
  

  useEffect(() => {
    if(tgjs == null) {
    fetch("http://165.232.156.241/pathic")
      .then(results => results.json())
      .then(data => {
        setTgjs(data);
      })
    }
  })

  


  return (
    <div id="pathicMap">
      <PathicNavbar id="pathicNavbar" />

      <input ref={searchRef} id="searchBox" className={searchBox ? undefined : 'hidden'} autoFocus type="search" placeholder="Search" onChange={handleSearchChange} value={searchInput} />

      {data.length > 0 && <DataBox data={data} />}

      <Map data={data} setData={setData} tgjs={tgjs} />

    </div>
  )
}

export default Pathic;
