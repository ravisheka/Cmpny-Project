import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div style={{ width: "100%", height: "466px",background:" #1D79C2"}}>
      <div className=" text-white  flex flex-row  py-8 justify-around ">
        <div className=" py-16 basis-1/3 ml-30" style={{marginLeft:"175px"}}>
          <img src="Company Logo.svg" width="229px" height="73px" alt="logo" />
        </div>
        <div className="ml-70 basis-1/4 ">
          <h className="text-white car" style={{lineHeight:"60px",fontSize:"18px"}}>CAREER DOSE</h>
          <ul className="out">
            <li > ABOUT US</li>
            <li > CAREERS</li>
            <li > FAQs</li>
            <li > CONTACT US</li>
          </ul>
        </div>
        <div className="basis-1/4 ">
          <h className=" text-white car" style={{lineHeight:"60px",fontSize:"18px"}}>OUR BRANCHES</h>
          <ul className="out">
            <li> DARBHANGA</li>
            <li> SAHARANPUR</li>
            <li> MEERUT</li>
          </ul>
        </div>
        <div className="basis-1/4 ">
          <h className="text-white car" style={{lineHeight:"60px",fontSize:"18px"}}>WHAT WE DO</h>
          <ul className="out">
            <li> ISO CERTIFICATION</li>
            <li> TERMS & CONDITIONS</li>
            <li> PRIVACY POLICY</li>
            <li> PARTNER WITH US</li>
          </ul>
        </div>
        <div className="px-14 basis-1/4 mr-15" style={{marginRight:"140px",}}>
          <h className="text-white car" style={{lineHeight:"60px",fontSize:"18px"}} > GET SOCIAL</h>
          <div className="flex flex-row mb-2 " >
            <img
              className="basis-1/5"
              src="logos_facebook.svg"
              alt="ram"
              style={{ width: "28px", height: "28px" }}
            />
            <img
              className="basis-1/5"
              src="logos_whatsapp-icon.svg"
              alt="ram"
              style={{ width: "28px", height: "28px" }}
            />
            <img
              className="basis-1/6"
              src="skill-icons_instagram.svg"
              alt="ram"
              style={{ width: "28px", height: "28px" }}
            />
            <img
              className="basis-1/6"
              src="Twitter Icon.svg"
              alt="ram"
              style={{ width: "28px", height: "28px" }}
            />
            <img
              className="basis-1/6"
              src="entypo.svg"
              alt="ram"
              style={{ width: "28px", height: "28px" }}
            />
            <img
              className="basis-1/6"
              src="logos_telegram.svg"
              alt="ram"
              style={{ width: "28px", height: "28px" }}
            />
          </div>
          <form className="cd-form">
            <input
              style={{
                width: "300px",
                height: "39px",
                borderRadius: "7px",
                border: "1px solid white",
                fontSize: "14px",
              }}
              type="email"
              name="email"
              id="email"
              className="mb-2"
              placeholder="Enter Your Email"
            />
            <button
              type="submit"
              className="btn btn-sm cd-btn-primary text-uppercase m-0 cd-pill letter-space sub"
              style={{backgroundColor:"#3E92FF",height:"37px",fontSize:"14px",width:"144px"}}
            >
             <img src="subc.svg" alt=""/>&nbsp;&nbsp;SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-9 mr-20">
        <a
          href="https://play.google.com/store/apps/details?id=com.careerdose.learning"
          className="btn p-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            loading="lazy"
            src="GOOGLE PLAY LOGO 1.svg"
            className="img-fluid"
            alt="android_app_link"
          />
        </a>
        <a className="btn p-0" href="" download="">
          <img
            loading="lazy"
            src="WINDOWS LOGO 1.svg"
            className="img-fluid"
            alt="windows_app_link"
          />
        </a>
      </div>
      <br/>
      
      <p className="m-0 small mt-45 text-white text-center copy " style={{paddingRight:"4.8rem"}}>
        Copyright © 2020 All Rights Reserved&nbsp;|&nbsp;
        <a
          href="http://careerdose.com/"
          target="_blank"
          className="text-white"
          rel="noopener noreferrer"
        >
          Career Dose Pvt. Ltd.
        </a>
      </p>
      <div className="flex justify-end mx-16 my-17 " style={{marginTop:"-4rem"}}>
        <div
          className="ram"
          style={{
            border: "1px solid white",
            width: " 270px",
            height: " 50px",
            borderRadius: "20px",
            background: "#FFF",
            boxShadow: " 0px -4px 5px 0px rgba(0, 0, 0, 0.18) inset",
            textAlign: "center",
          }}
        >
          How can I help you today?
        </div>&nbsp;&nbsp;&nbsp;&nbsp;
       <a href="/chat"> <img src="tiny.svg"/></a>
      </div>
    </div>
  );
};

export default Footer;
