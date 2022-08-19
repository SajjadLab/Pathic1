import React, { useState, useEffect } from "react";
import Map from "../components/Map.js";


function Pathic () {
  const [tgjs, setTgjs] = useState(null);

  useEffect(() => {
    if(tgjs == null) {
    fetch("http://192.168.0.99:5050/Pathic")
      .then(results => results.json())
      .then(data => {
        setTgjs(data);
      })
    }
  })

  return (
    <Map tgjs={tgjs} />
  )
}

export default Pathic;
