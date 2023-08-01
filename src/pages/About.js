import React from "react";
import "./about.css";
import Company from "../component/Company/company";
function About() {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <section>
        <div
          class=""
          style={{
            backgroundColor: "#1d79c2",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "488px",
            color: "#e1dddb",
            display: "flex",
          }}
        >
          <div style={{ margin: "-8rem 0 0 5rem" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="284"
              viewBox="0 0 103 284"
              fill="none"
            >
              <g filter="url(#filter0_i_528_7)">
                <path
                  d="M14.3698 3.84495L12.2148 0.475121L5.47512 4.78521L7.63017 8.15505L14.3698 3.84495ZM7.04948 283.664L38.9504 276.664L31.9505 244.763L0.0496035 251.763L7.04948 283.664ZM97.8524 141.811L101.221 143.967L102.601 141.812L101.222 139.656L97.8524 141.811ZM7.63017 8.15505L94.4825 143.966L101.222 139.656L14.3698 3.84495L7.63017 8.15505ZM94.4835 139.654L16.1311 262.057L22.8689 266.37L101.221 143.967L94.4835 139.654Z"
                  fill="#FF3049"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_528_7"
                  x="0.0496216"
                  y="0.475586"
                  width="102.551"
                  height="283.188"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_528_7"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div
            class=""
            style={{
              display: "flex",
              justifyItems: "center",
              textAlign: "center",
              marginTop: "6rem",
              marginLeft: "-21rem",
            }}
          >
            {/* <h class="heading" style={{marginLeft:"8rem"}}>ABOUT US</h> */}
            <h1 class="dis" style={{ fontSize: "80px", lineHeight: "80px" }}>
              <p class="heading">
                {" "}
                <span
                  style={{
                    fontFamily: "Allerta Stencil",
                    borderBottom: "4px solid red",
                    fontSize: "26px",
                  }}
                >
                  ABO
                </span>
                <span
                  style={{ fontFamily: "Allerta Stencil", fontSize: "26px" }}
                >
                  UT US
                </span>
              </p>
              Empowering your{" "}
              <span class="emphasized" style={{ fontSize: "80px" }}>
                aspirations
              </span>
            </h1>
          </div>
          <div style={{ height: " 100%", width: " auto" }}>
            <img
              style={{
                verticalAlign: "middle",
                borderStyle: "none",
                width: "450px",
                height: " 488px",
                flexShrink: " 0",
              }}
              data-ot-ignore=""
              class="hero-image optanon-category-C0001"
              src="Group 138.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <div
        className="container-fluid"
        style={{ background: "#F5F5F5", minHeight: "400px" }}
      >
        <div className="row">
          <div
            className="col-md-12 co-lg-12 col-sm-12"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "5rem",
            }}
          >
            <p
              className="future"
              style={{
                fontFamily: "Allerta Stencil",
                fontWeight: "400",
                marginTop: "2rem",
                maxWidth: "1000px",
                fontSize: "24px",
                color: "black",
              }}
            >
              "Building bridges to your future -
              <span
                className="portfolio"
                style={{ fontFamily: "Allerta Stencil" }}
              >
                Your portfolio
              </span>{" "}
              ,
              <span
                className="priority"
                style={{ fontFamily: "Allerta Stencil" }}
              >
                our priority
              </span>{" "}
              ."
            </p>
            <div style={{ maxWidth: "1300px", margin: "2rem auto" }}>
              <p
                className="student"
                style={{
                  color: " #656565",
                  fontFamily: " Inter",
                  fontSize: "20px",
                  fontStyle: " normal",
                  fontWeight: " 400",
                  lineHeight: "30px",
                  letterSpacing: "0.6px",
                }}
              >
                <span className="text-black"> Career Dose</span> is a Student
                Portfolio Management Company that helps students manage their
                academic and professional portfolios, providing them with the
                tools and guidance to showcase their achievements and skills
                effectively. Our mentors hold your hands right from the
                beginning of your academic journey and work individually on
                every single portfolio to craft their success stories. We offer
                tailored solutions for every student to lead their journey from
                academics to placements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section style={{ width: "100%", height: "auto" }}>
        <div
          className="management "
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="Group 139.svg"
            alt=""
            style={{ width: "70%", maxWidth: "900px", marginTop: "5%" }}
          />
          <div
            className="col-lg-5 col-md-12 col-sm-12"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                color: " #000",
                textAlign: "center",
                fontFamily: " Inter",
                fontSize: " 60px",
                fontStyle: " normal",
                fontWeight: " 700",
                lineHeight: " normal",

                marginTop: "7%",
                maxWidth: "1085px",
              }}
            >
              <span
                style={{
                  color: " #000",
                  textAlign: "center",
                  fontFamily: " Inter",
                  fontSize: " 60px",
                  fontStyle: " normal",
                  fontWeight: " 900",
                  lineHeight: " normal",
                  borderTop: "5PX solid #1d79c2",
                }}
              >
                Our{" "}
              </span>{" "}
              <span
                style={{
                  color: " #FF3049",
                  textAlign: "center",
                  fontFamily: " Inter",
                  fontSize: " 60px",
                  fontStyle: " normal",
                  fontWeight: " 900",
                  lineHeight: " normal",
                }}
              >
                MOTO{" "}
              </span>
              is to nurture success with Lord Krishna’s teachings.
            </p>
            {/* <img
                src="moto.svg"
                alt=""
                style={{ marginLeft: "26%", marginTop: "4%", width: "900px" }}
              /> */}
            <img
              src="Group 140.svg"
              alt=""
              style={{
                width: "81%",
                maxWidth: "1800px",
                marginTop: "-14.1%",
                paddingLeft: "25.3rem",
              }}
            />
          </div>
        </div>
      </section>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "5rem",
        }}
      >
        <div style={{ marginTop: "7rem" }}>
          <h1 className="mission" style={{ fontFamily: "Inter" }}>
            Our Mission
          </h1>
          <div
            style={{
              width: "406px",
              height: "20px",
              backgroundColor: "rgba(255,48,73,0.15)",
              marginTop: "-2.5rem",
            }}
          ></div>
          <h5
            className="way"
            style={{ marginTop: "2rem", fontFamily: "Inter" }}
          >
            Empowering Futures, Every Step of the Way
          </h5>
          <p className="dedication" style={{ marginTop: "2rem" }}>
            At Career Dose, our unwavering dedication is to provide steadfast
            support to students throughout their educational journey. We firmly
            believe that each step a student takes is pivotal in shaping their
            future, and we are committed to making a positive contribution at
            every juncture.
          </p>
        </div>
        <div class=" zoom">
          <img
            src="Group 133.svg"
            alt=""
            style={{ width: "733px", height: "642px" }}
          />
        </div>
      </div>

      <section
        style={{ backgroundColor: "#FFF4E8", width: "100%", height: "355px" }}
      >
        <Company />
      </section>
      <div style={{ width: "100%", height: "1019px", background: "#fcfcfc" }}>
        <h1
          className="vision"
          style={{ paddingLeft: "11.8rem", color: "#000", paddingTop: "9rem" }}
        >
          Founder’s<span className="vision"> Vision</span>
        </h1>
        <div
          style={{
            width: "560px",
            height: "20px",
            backgroundColor: "rgba(5,182,122,0.10)",
            paddingTop: "-3rem",
            marginLeft: "11.8rem",
            marginTop: "-2.3rem",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "5rem 0",
          }}
        >
          <div className="zoom">
            <img
              src="Rectangle 82.png"
              alt=""
              style={{ width: "698px", height: "530px" }}
            />
          </div>
          <div>
            <img
              src="vistars.png"
              alt=""
              style={{ width: "686px", height: "400px", marginTop: "4rem" }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "700px",
          backgroundColor: "#F6F7FF",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <h1 className="story" style={{ marginBottom: "1rem" }}>
          Our Story
        </h1>
        <div
          style={{
            width: "330px",
            height: "20px",
            backgroundColor: "rgba(255, 48, 73, 0.15)",
            marginTop: "-3rem",
          }}
        ></div>
        <div
          className="excel"
          style={{
            width: "90%",
            maxWidth: "1200px",
            marginTop: "5rem",
            textAlign: "center",
          }}
        >
          <p className="confident">
            <span style={{ color: "#000" }} className="car">
              Career Dose
            </span>{" "}
            was founded in 2016 to empower students by providing them with the
            resources, guidance, and opportunities they need to excel
            academically and personally. We strive to offer personalized
            solutions that cater to students' specific needs and help them
            unlock their full potential. Through our comprehensive range of
            services and programs, we aim to create well-rounded individuals who
            are ready to thrive in a dynamic and ever-changing world. Our
            ultimate goal is to witness each student’s growth and success, not
            just academically but as confident, compassionate, and responsible
            individuals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
