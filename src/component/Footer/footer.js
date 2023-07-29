import React from "react";
import "./footer.css";

const Footer = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div id="footer">
      <div className="container mx-auto">
        <div
          className="row pb-5 footer-data"
          style={{ marginLeft: "8rem", fontSize: "20px",paddingTop:"1rem",}}
        >
          <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <h5 style={{ marginTop: "60px", color: "white",marginLeft:"-4rem" }}>
              <img
                src="Company Logo.svg"
                width="229px"
                height="73px"
                alt="logo"
              />
            </h5>
          </div>

          <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-xs-12" style={{paddingLeft:'5rem',width:"230px"}}>
            <h5 style={{ marginTop: "32px" }}>CAREER DOSE</h5>
            <ul className="list-none">
              <li>
                <span
                  className="pack"
                  style={{
                    width: "104px",

                    color: "#DEDEDE",
                    fontFamily: "Inter",
                    fontSize: " 13px",
                    fontStyle: "normal",
                    fontWeight: " 400",
                    lineHeight: " normal",
                  }}
                >
                  ABOUT US
                </span>
              </li>
              <li>
                <span
                  className="pack"
                  style={{
                    width: "104px",

                    color: "#DEDEDE",
                    fontFamily: "Inter",
                    fontSize: " 13px",
                    fontStyle: "normal",
                    fontWeight: " 400",
                    lineHeight: " normal",
                  }}
                >
                  CAREERS
                </span>
              </li>
              <li>
                <span
                  className="pack"
                  style={{
                    width: "104px",

                    color: "#DEDEDE",
                    fontFamily: "Inter",
                    fontSize: " 13px",
                    fontStyle: "normal",
                    fontWeight: " 400",
                    lineHeight: " normal",
                  }}
                >
                  FAQs
                </span>
              </li>
              <li>
                <a href="/contact_us">
                  <span
                    className="pack"
                    style={{
                      width: "104px",

                      color: "#DEDEDE",
                      fontFamily: "Inter",
                      fontSize: " 13px",
                      fontStyle: "normal",
                      fontWeight: " 400",
                      lineHeight: " normal",
                    }}
                  >
                    CONTACT US
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-xs-12" style={{paddingLeft:'3rem',width:"230px"}}>
            <h5 style={{ marginTop: "32px" }}>OUR BRANCHES</h5>
            <ul className="list-none">
              <li>
                <a href="/our_branches/darbhanga">
                  <span
                    className="pack"
                    style={{
                      width: "104px",

                      color: "#DEDEDE",
                      fontFamily: "Inter",
                      fontSize: " 13px",
                      fontStyle: "normal",
                      fontWeight: " 400",
                      lineHeight: " normal",
                    }}
                  >
                    DARBHANGA
                  </span>
                </a>
              </li>
              <li>
                <a href="/our_branches/saharanpur">
                  <span
                    className="pack"
                    style={{
                      width: "104px",

                      color: "#DEDEDE",
                      fontFamily: "Inter",
                      fontSize: " 13px",
                      fontStyle: "normal",
                      fontWeight: " 400",
                      lineHeight: " normal",
                    }}
                  >
                    SAHARANPUR
                  </span>
                </a>
              </li>
              <li>
                <a href="/our_branches/meerut">
                  <span
                    className="pack"
                    style={{
                      width: "104px",

                      color: "#DEDEDE",
                      fontFamily: "Inter",
                      fontSize: " 13px",
                      fontStyle: "normal",
                      fontWeight: " 400",
                      lineHeight: " normal",
                    }}
                  >
                    MEERUT
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-xs-12" style={{paddingLeft:'1.5rem',width:"230px"}}>
            <h5 style={{ marginTop: "32px" }}>WHAT WE DO</h5>
            <ul className="list-none">
              <li>
                <span
                  className="pack"
                  style={{
                    width: "104px",

                    color: "#DEDEDE",
                    fontFamily: "Inter",
                    fontSize: " 13px",
                    fontStyle: "normal",
                    fontWeight: " 400",
                    lineHeight: " normal",
                  }}
                >
                  ISO CERTIFICATION
                </span>
              </li>
              <li>
                <span
                  className="pack"
                  style={{
                    width: "104px",

                    color: "#DEDEDE",
                    fontFamily: "Inter",
                    fontSize: " 13px",
                    fontStyle: "normal",
                    fontWeight: " 400",
                    lineHeight: " normal",
                  }}
                >
                  TERMS &amp; CONDITIONS
                </span>
              </li>
              <li>
                <a href="/privacy_policy">
                  <span
                    className="pack"
                    style={{
                      width: "104px",

                      color: "#DEDEDE",
                      fontFamily: "Inter",
                      fontSize: " 13px",
                      fontStyle: "normal",
                      fontWeight: " 400",
                      lineHeight: " normal",
                    }}
                  >
                    PRIVACY POLICY
                  </span>
                </a>
              </li>
              <li>
                <span
                  className="pack"
                  style={{
                    width: "104px",

                    color: "#DEDEDE",
                    fontFamily: "Inter",
                    fontSize: " 13px",
                    fontStyle: "normal",
                    fontWeight: " 400",
                    lineHeight: " normal",
                  }}
                >
                  PARTNER WITH US
                </span>
              </li>
            </ul>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12" style={{paddingLeft:'8.3rem',}}>
            <h5 className="mb-4" style={{ marginTop: "32px" }}>
              GET SOCIAL
            </h5>
            <div className="mb-4 flex " style={{ gap: "8px" }}>
              <div className="icon-space bg-primary">
                <a
                  href="https://www.facebook.com/careerdose/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
              <div className="icon-space bg-success">
                <a
                  href="https://wa.me/919999155443?text=I'm%20interested"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
              <div className="icon-space bg-danger">
                <a
                  href="https://www.instagram.com/careerdose_india"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div className="icon-space bg-info">
                <a
                  href="https://twitter.com/CareerDose"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <div className="icon-space bg-danger">
                <a
                  href="https://careerdoseindia.tumblr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-tumblr"></i>
                </a>
              </div>
              <div className="icon-space bg-secondary">
                <a
                  href="https://t.me/careerdose_india"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-telegram-plane"></i>
                </a>
              </div>
            </div>
            <form className="cd-form">
              <input
                style={{
                  width: "295px",
                  height:"40px",
                  borderRadius: "7px",
                  border: "1px solid white",
                  fontSize:"14px"
                }}
                type="email"
                name="email"
                id="email"
                className="mb-2"
                placeholder="Enter Your Email"
              />
              <button
                type="submit"
                className="btn btn-sm cd-btn-primary text-uppercase m-0 cd-pill letter-space"
              >
                <i className="fas fa-paperclip mr-2"></i>SUBSCRIBE
              </button>
            </form>
            <div className="mt-2" onClick={goToBtn}>
              <img src="icon.svg" alt="icon" style={{ marginLeft: "20rem" }} />
            </div>
          </div>
        </div>
        <div className="text-center py-3">
          <div className="app-download-link mb-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.careerdose.learning"
              className="btn p-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                loading="lazy"
                src="https://www.careerdose.com/static/media/icon_playstore.0932621b77a366ea1bee0a13fc9aa525.svg"
                className="img-fluid"
                alt="android_app_link"
              />
            </a>
            <a className="btn p-0" href="" download="">
              <img
                loading="lazy"
                src="https://www.careerdose.com/static/media/icon_windowsos.461e33923d5f9beb3b2a83171a344a8f.svg"
                className="img-fluid"
                alt="windows_app_link"
              />
            </a>
          </div>
          <div className="app-download-link"></div>
          <p className="m-0 small mt-2">
            Copyright © 2020 All Rights Reserved&nbsp;|
            <a
              href="http://careerdose.com/"
              target="_blank"
              className="text-white"
              rel="noopener noreferrer"
            >
              Career Dose Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
