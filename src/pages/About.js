import React from "react";
import "./about.css";
import Company from "../component/Company/company";
function About() {
  return (
    <div style={{ width: "100%", height: "auto" }}>
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
        <div style={{ margin: "-8rem 0 0 8rem" }}>
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
            marginLeft: "14rem",
          }}
        >
          {/* <h class="heading" style={{marginLeft:"8rem"}}>ABOUT US</h> */}
          <h1 class="dis">
            <span class="heading">ABOUT US</span>
            Empowering your <span class="emphasized">aspirations</span>
          </h1>
        </div>
        <div style={{ height: " 100%", width: " auto" }}>
          <img
            style={{
              verticalAlign: "middle",
              borderStyle: "none",
              width: "386px",
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
      <section>
        <div
          style={{
            width: " 1920px",
            height: "300px",
            flexShrink: "0",
            backgroundColor: "#F5F5F5",
            marginTop:"6rem"
          }}
        >
          <p className="future" style={{marginLeft:"23%"}}>
            "Building bridges to your future -
            <span className="portfolio">Your portfolio</span> ,
            <span className="priority">our priority</span> ."
          </p>
          <div style={{  marginTop:"5rem",marginLeft:"15%"}}>
            <p className="student" style={{width:"1220px"}}>
              <span style={{ color: "#000",textAlign:"center" }}>Career Dose</span> is a Student
              Portfolio Management Company that help students manage their
              academic and professional portfolios, providing them with the
              tools and guidance to showcase their achievements and skills
              effectively. Our mentors hold your hands right from the beginning
              of your academic journey and work individually on every single
              portfolio to craft their success stories. We offer tailored
              solutions for every student to lead their journey from academics
              to placements.
            </p>
          </div>
        </div>
        <section style={{ width: "100%", height: "auto" }}>
          <div className="management">
            <img
              src="Group 139.svg"
              alt=""
              style={{ marginLeft: "26%", marginTop: "8%", width: "900px" }}
            />
            <div style={{ display: "flex",marginBottom:"9rem" }}>
              <img
                src="moto.svg"
                alt=""
                style={{ marginLeft: "26%", marginTop: "10%", width: "900px" }}
              />
              <img
                src="Group 140.svg"
                alt=""
                style={{
                  marginLeft: "-45%",
                  display: "block",
                  marginTop: "7%",
                  width: "1000px",
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "5rem",
            }}
          >
            <div style={{ marginTop: "7rem" }}>
              <h1 className="mission">Our Mission</h1>
              <h5 className="way">Empowering Futures, Every Step of the Way</h5>
              <p className="dedication">
                At Career Dose, our unwavering dedication is to provide
                steadfast support to students throughout their educational
                journey. We firmly believe that each step a student takes is
                pivotal in shaping their future, and we are committed to making
                a positive contribution at every juncture.
              </p>
            </div>
            <div>
              <img
                src="Group 133.svg"
                alt=""
                style={{ width: "500px", height: "500px" }}
              />
            </div>
          </div>
        </section>
        <section
          style={{ backgroundColor: "#FFF4E8", width: "100%", height: "355px" }}
        >
          <Company />
        </section>
        <section style={{backgroundColor:"#fcfcfc"}}>
          <div>
            <h1 className="founder" style={{display:"flex",margin:"3rem 0 0 9rem"}}>
              Founder’s<span className="vision"> Vision</span>
            </h1>
            <div style={{ display: "flex",justifyContent:"space-evenly",margin:"5rem 0" }}>
              <div>
                <img src="Rectangle 82.png" alt="" style={{width:"698px",height:"530px"}} />
              </div>
              <div>
                <img src="vistars.png" alt="" style={{width:"698px",height:"440px",marginTop:"4rem"}} />
              </div>
            </div>
          </div>
        </section>
        <section style={{width:"100%",height:"auto",marginBottom:"8rem",backgroundColor:"#f6f7ff"}}>
          <h1 className="story">Our Story</h1>
          <div className="excel">
          <p className="empower">
            Career Dose was founded in 2016 to empower students by providing
            them with the resources, guidance, and opportunities they need to
            excel academically and personally. We strive to offer personalized
            solutions that cater to student’s specific needs and help them
            unlock their full potential. Through our comprehensive range of
            services and programs, we aim to create well-rounded individuals who
            are ready to thrive in a dynamic and ever-changing world. Our
            ultimate goal is to witness each student’s growth and success, not
            just academically, but as confident, compassionate, and responsible
            individuals.
          </p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default About;
