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
          className="header zoom"
          style={{
            color: "#F00",
            fontFamily: "Eraser",
            fontSize: "4xl sm:text-6xl md:text-7xl",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            textAlign: "center",
           marginTop:"9rem",
            display: "flex",
            alignItems:"center",
            justifyContent: "center",
          
          }}
        >
          <img src="hindi text.svg" alt="" />
        </div>
        <div
          className="example zoom"
          style={{
            color: "#F00",
            fontSize: "4xl sm:text-6xl md:text-7xl",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            textAlign: "center",
            marginTop: "2.5rem",
            display: "flex",
            justifyContent: "center",
           
          }}
        >
          <img src="Group 162.svg" alt="" />
        </div>
      </div>
      <div className="accup " style={{marginTop:"-5rem"}}>
        <img
          src="Group 62.png"
          alt="ravi"
          className="ml-auto md:ml-90"
        />
        <img
          src="ACCUP (1).svg"
          alt="acc"
          className="mt-[-10rem]"
          style={{height:"52rem",marginLeft:"5.1rem",}}
        />
        <div className="mt-[-30rem] zoom" style={{width:" 192px",
height:" 200px",
flexShrink:" 0"}}>
          <img src="Group 61.png" alt="ravi" />
        </div>
      </div>
    
      <Main/> 
     
    </div>
   
      
  );
}

export default Accup;
