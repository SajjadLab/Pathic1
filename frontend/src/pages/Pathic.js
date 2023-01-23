import React, { useState, useEffect, useCallback, useRef } from "react";
import Map from "../components/Map.js";


function Pathic () {
  const [tgjs, setTgjs] = useState(null);
  // search box open boolean
  const [searchBox, setSearchBox] = useState(false);
  // searchData state
  const [searchInput, setSearchInput] = useState("");
  //
  const searchRef = useRef(null);
  // current year state
  const [currentYear, setCurrentYear] = useState(2000);

  // handle keypress
  const handleKeyPress = useCallback(
    event => {
      const {key, keyCode} = event;
      if(key === "/") {
        setSearchBox(true);
        searchRef.current.focus();
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
    }
  )

  // handle search input
  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  useEffect(() => {

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [handleKeyPress]);
  

  useEffect(() => {
    if(tgjs == null) {
    fetch("http://165.232.156.241/Pathic")
      .then(results => results.json())
      .then(data => {
        setTgjs(data);
      })
    }
  })

  return (
    <div className="Pathic">
      <input ref={searchRef} id="searchBox" className={searchBox ? undefined : 'hidden'} autoFocus type="search" placeholder="Search" onChange={handleSearchChange} value={searchInput} />

      <Map tgjs={tgjs} />

    </div>
  )
}

export default Pathic;
