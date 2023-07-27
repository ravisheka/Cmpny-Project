import React from "react";
import "./accup.css";
//import Content from './component/Content/content';
// import Main from './Main/main';

import Main from "../Main/main";


function Accup() {
  return (
  
    <div className="homepage-data">
      <div>
        <div
          className="header"
          style={{
            color: "#F00",
            fontFamily: "Eraser",
            fontSize: "4xl sm:text-6xl md:text-7xl",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            textAlign: "center",
           marginTop:"6rem",
            display: "flex",
            alignItems:"center",
            justifyContent: "center",
          
          }}
        >
          <img src="hindi text.svg" alt="" />
        </div>
        <div
          className="example"
          style={{
            color: "#F00",
            fontSize: "4xl sm:text-6xl md:text-7xl",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            textAlign: "center",
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
           
          }}
        >
          <img src="hunar.png" alt="" />
        </div>
      </div>
      <div className="accup">
        <img
          src="Group 62.png"
          alt="ravi"
          className="ml-auto md:ml-90"
        />
        <img
          src="ACCUP (1).svg"
          alt="acc"
          className="mt-[-16rem]"
          style={{height:"45rem",marginLeft:"11rem",}}
        />
        <div className="mt-[-27rem]">
          <img src="Group 61.png" alt="ravi" />
        </div>
      </div>
    
      <Main/> 
     
    </div>
   
      
  );
}

export default Accup;
