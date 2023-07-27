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
     
      <div >
     
        <Carousel breakPoints={breakPoints}>
          <Item><img src="2 9389.png"/></Item>
          <Item><img src="4 7.png"/></Item>
          <Item><img src="Hinduja Tech logo 1.png"/></Item>
          <Item><img src="Capgemini.png"/></Item>
          <Item><img src="Sasken.png"/></Item>
          <Item><img src="3 341.png"/></Item>
          <Item><img src="2 9389.png"/></Item>
          <Item><img src="2 9389.png"/></Item>
        </Carousel>
        <h1 style={{ textAlign: "center",color:" #000",

fontFamily: "Inter",
fontSize:" 25px",
fontStyle:" normal",
fontWeight: "500",
lineHeight: "normal" }}>Our Partners & Universities</h1>
      </div>

    </>
  );
}
export default Company;