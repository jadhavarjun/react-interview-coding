import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import "./LightDarkMode.css";

function LightDarkMode() {
  const [modes, setModes] = useState(false);
  //   const handleModes =()=>{

  //   }
  return (
    <div className={modes ? "dark" : "light"}>
      <h1>Mode</h1>
      <button onClick={() => setModes(!modes)}>
        {modes ? <CiLight /> : <MdDarkMode />}
      </button>
    </div>
  );
}

export default LightDarkMode;
