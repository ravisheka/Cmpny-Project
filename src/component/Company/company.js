import React from "react";

import Carousel from "react-elastic-carousel";
import Item from "../../Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Company() {
  return (
    <>
      <div>
        <Carousel breakPoints={breakPoints} >
          <Item className="zoom">
            <img src="2 9389.png" />
          </Item>
          <Item className="zoom">
            <img src="4 7.png" />
          </Item>
          <Item className="zoom">
            <img src="Hinduja Tech logo 1.png" />
          </Item>
          <Item className="zoom" style={{margin:'6rem 0 0 3rem',width:"300px",height:"63px"}}>
            <img src="northwood.jpg" />
          </Item>
          <Item className="zoom" style={{margin:'2rem 0 0 5rem'}}>
            <img src="Capgemini.png" />
          </Item>
          <Item className="zoom">
            <img src="Sasken.png" />
          </Item>
          <Item className="zoom" >
            <img src="3 341.png" />
          </Item>
          <Item className="zoom">
            <img src="KPMG.svg" />
          </Item>
          <Item className="zoom">
            <img src="L&T.SVG" />
          </Item>
        </Carousel>
        
      </div>
      <h1
          style={{
            
            textAlign: "center",
            color: " #000",
            marginTop: "3rem",
            fontFamily: "Inter",
            fontSize: " 36px",
            fontStyle: " normal",
            fontWeight: "300",
            lineHeight: "normal",
            borderBottom:"3px solid rgba(255,48,73,0.3)",
            display:"inline",
           marginLeft:"37.5%"
          }}
        >
         Our Partners & Universities
        </h1>
    </>
  );
}
export default Company;
