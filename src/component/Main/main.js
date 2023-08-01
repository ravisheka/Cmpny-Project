import React from "react";
import "./main.css";
import Content from "../Content/content";
function main() {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <section
        id="feautredArticles"
        class="featured-atricles-section is-visible-viewport"
        style={{ marginTop: "8rem" }}
      >
        <div
          class="container"
          style={{ backgroundColor: "rgba(217,217,217,0)" }}
        >
          <div className="zoom">
            <img src="Group 110.svg" alt="" style={{ marginLeft: "43rem",marginTop:"3rem" }} />
          </div>
          <h2
            class=""
            style={{
              color: " #000",
              textAlign: "center",
              marginLeft: "24rem",
              fontFamily: "Inter",
              fontSize: "29px",
              fontStyle: " normal",
              fontWeight: "900",
              lineHeight: "130%",
              width: "700px " /* 39px */,
              marginTop: "4rem",
            }}
          >
            Discover all-encompassing learning programs & classes tailored for
            every students
          </h2>
          <h2
            style={{
              textAlign: "center",
              marginLeft: "24.8rem",
              color: "#656565",
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: " normal",
              fontWeight: " 500",
              lineHeight: "130%",
              width: "670px ",
            }}
          >
            Embark on a journey of lifelong learning with India's finest
            educators, engaging video lessons, and personalized learning paths
          </h2>
        </div>
        <div
          class="pb-40 marquee flex"
          style={{ marginTop: "5rem", gap: "300px" }}
        >
          <div class="featured-card">
            <div
              class="col-lg-5 col-md-12 col-sm-12 zoom"
              style={{ height: "359px", width: "606px" }}
            >
              <div class="hideoverflow-image zoom">
                <img
                  src="Rectangle 54.png"
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h6
                style={{
                  marginTop: "1rem",
                  textAlign: "center",
                  color: "#656565",
                  fontFamily: "Inter",
                  fontSize: "28px",
                  fontStyle: " normal",
                  fontWeight: " 500",
                  lineHeight: " normal",
               
                position:"absolute",
                marginLeft:"13.6%"
                }}
              >
                Classes 6-10
              </h6>
            </div>
          </div>
          <div class="featured-card">
            <div
              class="col-lg-5 col-md-12 col-sm-12 zoom"
              style={{ height: "359px", width: "606px" }}
            >
              <div class="hideoverflow-image">
                <img
                  src="Rectangle 52.png"
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h6
                style={{
                  marginTop: "1rem",
                  textAlign: "center",
                  color: "#656565",
                  fontFamily: "Inter",
                  fontSize: "28px",
                  fontStyle: " normal",
                  fontWeight: " 500",
                  lineHeight: " normal",
                     
                position:"absolute",
                marginLeft:"16.8%"
                }}
              >
                Learn French
              </h6>
            </div>
          </div>
          <div class="featured-card">
            <div
              class="col-lg-5 col-md-12 col-sm-12 zoom"
              style={{ height: "359px", width: "606px" }}
            >
              <div class="hideoverflow-image zoom">
                <img
                  src="PD.png"
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h6
                style={{
                  marginTop: "1rem",
                  textAlign: "center",
                  color: "#656565",
                  fontFamily: "Inter",
                  fontSize: "28px",
                  fontStyle: " normal",
                  fontWeight: " 500",
                  lineHeight: " normal",
                position:"absolute",
                marginLeft:"5rem",
                  width: "500px",
                }}
              >
                Personality Development
              </h6>
            </div>
          </div>
          <div class="featured-card">
            <div
              class="col-lg-5 col-md-12 col-sm-12 zoom"
              style={{ height: "359px", width: "606px" }}
            >
              <div class="hideoverflow-image zoom">
                <img
                  src="HR .png"
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h6
                style={{
                  marginTop: "1rem",
                  textAlign: "center",
                  color: "#656565",
                  fontFamily: "Inter",
                  fontSize: "28px",
                  fontStyle: " normal",
                  fontWeight: " 500",
                  lineHeight: " normal",
                position:"absolute",
                marginLeft:"5.8%",
                width:"500px"
                }}
              >
                HR Analytics
              </h6>
            </div>
          </div>
          <div class="featured-card">
            <div
              class="col-lg-5 col-md-12 col-sm-12 zoom"
              style={{ height: "359px", width: "606px" }}
            >
              <div class="hideoverflow-image zoom">
                <img
                  src="Rectangle 57.png"
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h6
                style={{
                  marginTop: "1rem",
                  textAlign: "center",
                  color: "#656565",
                  fontFamily: "Inter",
                  fontSize: "28px",
                  fontStyle: " normal",
                  fontWeight: " 500",
                  lineHeight: " normal",
                position:"absolute",
                marginLeft:"5.8%",
                width:"500px"
                }}
              >
                MERN Stack
              </h6>
            </div>
          </div>
          <div class="featured-card">
            <div
              class="col-lg-5 col-md-12 col-sm-12 zoom"
              style={{ height: "359px", width: "606px" }}
            >
              <div class="hideoverflow-image zoom">
                <img
                  src="Rectangle 51.png"
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h6
                style={{
                  marginTop: "1rem",
                  textAlign: "center",
                  color: "#656565",
                  fontFamily: "Inter",
                  fontSize: "28px",
                  fontStyle: " normal",
                  fontWeight: " 500",
                  lineHeight: " normal",
                position:"absolute",
                marginLeft:"5.8%",
                width:"500px"
                }}
              >
                Data Science
              </h6>
            </div>
          </div>
          <div class="featured-card">
            <div
              class="col-lg-5 col-md-12 col-sm-12 zoom"
              style={{ height: "359px", width: "606px" }}
            >
              <div class="hideoverflow-image zoom">
                <img
                  src="Rectangle 53.png"
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h6
                style={{
                  marginTop: "1rem",
                  textAlign: "center",
                  color: "#656565",
                  fontFamily: "Inter",
                  fontSize: "28px",
                  fontStyle: " normal",
                  fontWeight: " 500",
                  lineHeight: " normal",
                position:"absolute",
                marginLeft:"5.8%",
                width:"500px"
                }}
              >
                FULL Stack Development
              </h6>
            </div>
          </div>
          <div class="featured-card">
            <div
              class="featured-image-wrapper zoom"
              style={{ height: "359px", width: "606px" }}
            >
              <div class="hideoverflow-image zoom">
                <img
                  src="Rectangle 58.png"
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h6
                style={{
                  marginTop: "1rem",
                  textAlign: "center",
                  color: "#656565",
                  fontFamily: "Inter",
                  fontSize: "30px",
                  fontStyle: " normal",
                  fontWeight: " 500",
                  lineHeight: " normal",
                position:"absolute",
                marginLeft:"5.8%",
                width:"500px"
                }}
              >
                Medical Coding
              </h6>
            </div>
          </div>
          <div class="featured-card">
            <div
              class="featured-image-wrapper zoom"
              style={{ height: "359px", width: "606px" }}
            >
              <div class="hideoverflow-image zoom">
                <img
                  src="Rectangle 59.png"
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h6
                style={{
                  marginTop: "1rem",
                  textAlign: "center",
                  color: "#656565",
                  fontFamily: "Inter",
                  fontSize: "30px",
                  fontStyle: " normal",
                  fontWeight: " 500",
                  lineHeight: " normal",
                position:"absolute",
                marginLeft:"5.8%",
                width:"500px"
                }}
              >
                IELTS & TOEFL
              </h6>
            </div>
          </div>
        </div>

        <h2
          class="section-heading"
          style={{
            color: " #000",

            fontFamily: "Inter",
            fontSize: " 50px",
            fontStyle: " normal",
            fontWeight: " 700",
            lineHeight: " normal",
            marginTop:"5rem"
          }}
        >
          Get the{" "}
          <span
            style={{
              color: " #000",
              borderBottom: "6px dashed #1D79C2",
              fontFamily: "Inter",
              fontSize: " 50px",
              fontStyle: " normal",
              fontWeight: " 700",
              lineHeight: " normal",
            
            }}
          >
            advanta
          </span>
          ge
        </h2>
        <img
          src="Group 118.png"
          alt=""
          style={{
            width: "140px",
            height: "120px",
            marginLeft: "39rem",
            marginTop: "-1rem",
          }}
        />
      </section>
      <section style={{ marginTop: "-15rem" }}>
        <div style={{ backgroundColor: "#f5f5f5", height: "auto",boxShadow:"0px 4px 10px 0px rgba(0,0,0,0.05)" }}>
          <div class="container"></div>
          <section
            class="css-te3fh4-SectionWrapper e15j23t0"
            style={{ padding: "6rem" }}
          >
            <div
              class="css-asdm4n-TextContainer e15j23t3"
              style={{ paddingLeft: "8rem" }}
            >
              <h2
                class="h2_variant aquilla-typography typography e15j23t1 css-1xzhf9o-Label"
                style={{
                  color: "#000",
                  fontFamily: "Inter",
                  fontSize: " 60px",
                  fontStyle: "normal",
                  fontWeight: " 600",
                  lineHeight: "30px",
                }}
              >
                Impact. At{" "}
                <span
                  style={{
                    color: "#1D79C2",
                    fontFamily: "Inter",
                    fontSize: " 60px",
                    fontStyle: "normal",
                    fontWeight: " 600",
                    lineHeight: "70px",
                    borderBottom: "5px solid red",
                  }}
                >
                  scale
                </span>
              </h2>
              <h3
                class="h3_variant aquilla-typography typography e15j23t2 css-1w3bdtt-SecLabel"
                style={{
                  color: "#656565",
                  fontFamily: "Inter",
                  fontSize: " 20px",
                  fontStyle: "normal",
                  fontWeight: " 400",
                  lineHeight: "30px",
                  width: "600px",
                }}
              >
                Empowering learners worlwide through technology
              </h3>
              <a class="css-cdl1hr-Link e1l00lnb0" role="" href="/explore">
                <button
                  type="button"
                  style={{
                    backgroundColor: "#7A9D54",
                    width: "237px",
                    height: "59px",
                    borderRadius: " 10px",
                    color:"white",
                    marginTop:"32px"
                  }}
                  class=""
                >
                  <span class="button--label-content css-0" style={{fontSize:"22px"}}>
                    Start learning
                  </span>
                </button>
              </a>
            </div>
            <div
              class="css-1bk9s6h-StatsContainer e15j23t4"
              style={{ paddingRight: "7rem" }}
            >
              <div class="css-14h8cqt-Left e15j23t6">
                <div
                  class="css-1fuyrwz-CardWrapper e991mst0"
                  style={{
                    borderRadius: " 10px",
                    border: " 0px solid rgba(0, 0, 0, 0.10)",
                    background: " rgba(255, 255, 255, 0.30)",
                    boxShadow: "0px 5px 20px 0px rgba(0, 0, 0, 0.05)",
                    width:"355px",height:"184px"
                  }}
                >
                  <div class="css-gytqqx-Left e991mst3">
                    <span class="css-16zmcy3-SecText e991mst7" style={{fontFamily:"inter"}}>
                      Students enrolled
                    </span>
                    <div class="css-1r6zuyg-Row e991mst4">
                      <span class="css-1yb456-Label e991mst5" style={{color:"black"}}>60</span>
                      <span class="css-9c73z1-Label-GreenLabel e991mst6"  style={{color:"#A7C957"}}>
                        +
                      </span>
                    </div>
                  </div>
                  <div
                    class="css-ds2g6j-CardImageWrapper e991mst1 zoom"
                    style={{
                      position: " absolute",
                      right: "20px",
                      bottom: " 10.5px",
                      zIndex: " 1",
                      
                    }}
                  >
                    <img
                      alt="Exam categories"
                      src="3 User.png"
                      width="280"
                      height="185"
                      decoding="async"
                      data-nimg="1"
                      class="e991mst2 css-ihqmaw-StyledNextImage-CardImage e1n3w55p0"
                      loading="lazy"
                      style={{
                        color: " transparent",
                        width: " 100px",
                        height: "108px",
                      }}
                    />
                  </div>
                </div>
                <div
                  class="css-1fuyrwz-CardWrapper e991mst0"
                  style={{
                    borderRadius: " 10px",
                    border: " 0px solid rgba(0, 0, 0, 0.10)",
                    background: " rgba(255, 255, 255, 0.30)",
                    boxShadow: "0px 5px 20px 0px rgba(0, 0, 0, 0.05)",
                    width:"355px",height:"184px"
                  }}
                >
                  <div class="css-gytqqx-Left e991mst3">
                    <span class="css-16zmcy3-SecText e991mst7" style={{fontFamily:"inter"}}>Counselled</span>
                    <div class="css-1r6zuyg-Row e991mst4">
                      <span class="css-1yb456-Label e991mst5" style={{color:"black"}}>1.5k</span>
                      <span class="css-9c73z1-Label-GreenLabel e991mst6"  style={{color:"#A7C957"}}>
                        +
                      </span>
                    </div>
                  </div>
                  <div
                    class="css-ds2g6j-CardImageWrapper e991mst1 zoom"
                    style={{
                      position: " absolute",
                      right: "20px",
                      bottom: " 27.5px",
                      zIndex: " 1",
                    }}
                  >
                    <img
                      src="ep_checked.png"
                      alt="Daily live classes"
                      width="280"
                      height="185"
                      decoding="async"
                      data-nimg="1"
                      class="e991mst2 css-ihqmaw-StyledNextImage-CardImage e1n3w55p0"
                      loading="lazy"
                      style={{
                        color: " transparent",
                        width: " 100px",
                        height: "108px",
                      }}
                    />
                  </div>
                </div>
                <div
                  class="css-1fuyrwz-CardWrapper e991mst0"
                  style={{
                    borderRadius: " 10px",
                    border: " 0px solid rgba(0, 0, 0, 0.10)",
                    background: " rgba(255, 255, 255, 0.30)",
                    boxShadow: "0px 5px 20px 0px rgba(0, 0, 0, 0.05)",
                    width:"355px",height:"184px"
                  }}
                >
                  <div class="css-gytqqx-Left e991mst3">
                    <span class="css-16zmcy3-SecText e991mst7" style={{fontFamily:"inter"}}>
                      Partner with us
                    </span>
                    <div class="css-1r6zuyg-Row e991mst4">
                      <span class="css-1yb456-Label e991mst5" style={{color:"black"}}>3.2B</span>
                      <span class="css-9c73z1-Label-GreenLabel e991mst6"  style={{color:"#A7C957"}}>
                        +
                      </span>
                    </div>
                  </div>
                  <div
                    class="css-ds2g6j-CardImageWrapper e991mst1 zoom"
                    style={{
                      position: " absolute",
                      right: "20px",
                      bottom: " 27.5px",
                      zIndex: " 1",
                    }}
                  >
                    <img
                      alt="Mins. watched"
                      src="mdi_partnership.png"
                      width="280"
                      height="185"
                      decoding="async"
                      data-nimg="1"
                      class="e991mst2 css-ihqmaw-StyledNextImage-CardImage e1n3w55p0"
                      loading="lazy"
                      style={{
                        color: " transparent",
                        width: "108px",
                        height: "108px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div class="css-1xkc73q-Left-Right e15j23t7">
                <div
                  class="css-1fuyrwz-CardWrapper e991mst0"
                  style={{
                    borderRadius: " 10px",
                    border: " 0px solid rgba(0, 0, 0, 0.10)",
                    background: " rgba(255, 255, 255, 0.30)",
                    boxShadow: "0px 5px 20px 0px rgba(0, 0, 0, 0.05)",
                    width:"355px",height:"184px"
                  }}
                >
                  <div class="css-gytqqx-Left e991mst3">
                    <span class="css-16zmcy3-SecText e991mst7" style={{fontFamily:"inter"}}>Placements</span>
                    <div class="css-1r6zuyg-Row e991mst4">
                      <span class="css-1yb456-Label e991mst5" style={{color:"black"}}>14k</span>
                      <span class="css-9c73z1-Label-GreenLabel e991mst6"  style={{color:"#A7C957"}}>
                        +
                      </span>
                    </div>
                  </div>
                  <div
                    class="css-ds2g6j-CardImageWrapper e991mst1 zoom"
                    style={{
                      position: " absolute",
                      right: "20px",
                      bottom: " 27.5px",
                      zIndex: " 1",
                    }}
                  >
                    <img
                      src="maki_college.png"
                      alt="Educators"
                      width="280"
                      height="185"
                      decoding="async"
                      data-nimg="1"
                      class="e991mst2 css-ihqmaw-StyledNextImage-CardImage e1n3w55p0"
                      loading="lazy"
                      style={{
                        color: " transparent",
                        width: "106px",
                        height: "106px",
                      }}
                    />
                  </div>
                </div>
                <div
                  class="css-1fuyrwz-CardWrapper e991mst0"
                  style={{
                    borderRadius: " 10px",
                    border: " 0px solid rgba(0, 0, 0, 0.10)",
                    background: " rgba(255, 255, 255, 0.30)",
                    boxShadow: "0px 5px 20px 0px rgba(0, 0, 0, 0.05)",
                    width:"355px",height:"184px"
                  }}
                >
                  <div class="css-gytqqx-Left e991mst3">
                    <span class="css-16zmcy3-SecText e991mst7" style={{fontFamily:"Inter"}}>Upskilled</span>
                    <div class="css-1r6zuyg-Row e991mst4">
                      <span class="css-1yb456-Label e991mst5" style={{color:"black"}}>1k</span>
                      <span class="css-9c73z1-Label-GreenLabel e991mst6" style={{color:"#A7C957"}}>
                        +
                      </span>
                    </div>
                  </div>
                  <div
                    class="css-ds2g6j-CardImageWrapper e991mst1 zoom"
                    style={{
                      position: " absolute",
                      right: "20px",
                      bottom: " 27.5px",
                      zIndex: " 1",
                    }}
                  >
                    <img
                      src="mdi_account-cog.png"
                      alt="Video lessons"
                      width="280"
                      height="185"
                      decoding="async"
                      data-nimg="1"
                      class="e991mst2 css-ihqmaw-StyledNextImage-CardImage e1n3w55p0"
                      loading="lazy"
                      style={{
                        color: " transparent",
                        width: "107px",
                        height: "107px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section
        id="feautredArticles"
        class="featured-atricles-section is-visible-viewport"
        style={{marginTop:"5rem",height:'600px'}}
      >
        <div class="container" style={{marginTop:"" ,height:"140px"}}>
          <h1
            class=""
            style={{ fontSize: "50px", fontWeight: "bold",color:"black",textAlign:"center",fontFamily:"Inter" }}
          >
            What Our{" "}
            <span
              style={{
                borderBottom: " 4px dashed red",
                fontSize: "50px",
                fontWeight: "bold",
              }}
            >
              Students
            </span>{" "}
            Say
          </h1>
        </div>
        <div class="pb-40 marquee flex" style={{gap:"3rem"}}>
          <div class="featured-card" style={{width:"515px",height:"703px"}}>
            <div class="featured-image-wrapper">
              <div class="hideoverflow-image">
                <img
                  srcset="
                https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/shreya-1x.png 1x,
                https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/shreya-2x.png 2x
              "
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="featured-contents">
              <h6>Shridhar Shrivastav - Age 13 , Class 8</h6>
              <div class="description">
                Shridhar built a Bubble Shooting Game which allows players to
                shoot and win over enemies
              </div>
            </div>
          </div>
          <div class="featured-card" style={{width:"515px",height:"703px"}}>
            <div class="featured-image-wrapper">
              <div class="hideoverflow-image">
                <img
                  srcset="
                https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/roy-jr-1x.jpg 1x,
                https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/roy-jr-2x.jpg 2x
              "
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="featured-contents">
              <h6>Shridhar Shrivastav - Age 13 , Class 8</h6>
              <div class="description">
                Shridhar built a Bubble Shooting Game which allows players to
                shoot and win over enemies
              </div>
            </div>
          </div>
          <div class="featured-card" style={{width:"515px",height:"703px"}}>
            <div class="featured-image-wrapper">
              <div class="hideoverflow-image">
                <img
                  srcset="
                https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/dhruva-1x.png 1x,
                https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/dhruva-2x.png 2x
              "
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="featured-contents">
              <h6>Shridhar Shrivastav - Age 13 , Class 8</h6>
              <div class="description">
                Shridhar built a Bubble Shooting Game which allows players to
                shoot and win over enemies
              </div>
            </div>
          </div>
          <div class="featured-card" style={{width:"515px",height:"703px"}}>
            <div class="featured-image-wrapper">
              <div class="hideoverflow-image">
                <img
                  srcset="
                https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/anthony-watkins-1x.jpg 1x,
                https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/anthony-watkins-2x.jpg 2x
              "
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="featured-contents">
              <h6>Shridhar Shrivastav - Age 13 , Class 8</h6>
              <div class="description">
                Shridhar built a Bubble Shooting Game which allows players to
                shoot and win over enemies
              </div>
            </div>
          </div>
          <div class="featured-card" style={{width:"515px",height:"703px"}}>
            <div class="featured-image-wrapper">
              <div class="hideoverflow-image">
                <img
                  srcset="
                https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/shridhar-1x.png 1x,
                https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/shridhar-2x.png 2x
              "
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="featured-contents">
              <h6>Shridhar Shrivastav - Age 13 , Class 8</h6>
              <div class="description">
                Shridhar built a Bubble Shooting Game which allows players to
                shoot and win over enemies
              </div>
            </div>
          </div>
          <div class="featured-card" style={{width:"515px",height:"703px"}}>
            <div class="featured-image-wrapper">
              <div class="hideoverflow-image">
                <img
                  srcset="
                https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/skandini-1x.png 1x,
                https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/skandini-2x.png 2x
              "
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="featured-contents">
              <h6>Skandini Nandan - Age 13 , Class 8</h6>
              <div class="description">
                Skandini B built an Origami Website which explains step by step
                method to create
              </div>
            </div>
          </div>
          <div class="featured-card" style={{width:"515px",height:"703px"}}>
            <div class="featured-image-wrapper">
              <div class="hideoverflow-image">
                <img
                  srcset="
                https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/christian-sheeder-1x.jpg 1x,
                https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/christian-sheeder-2x.jpg 2x
              "
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="featured-contents">
              <h6>Shridhar Shrivastav - Age 13 , Class 8</h6>
              <div class="description">
                Shridhar built a Bubble Shooting Game which allows players to
                shoot and win over enemies
              </div>
            </div>
          </div>
          <div class="featured-card" style={{width:"515px",height:"703px"}}>
            <div class="featured-image-wrapper">
              <div class="hideoverflow-image">
                <img
                  srcset="
                https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/kiara-1x.png 1x,
                https://s3-cdnwhjr.whjr.online/website/desktop/social-cards/kiara-2x.png 2x
              "
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="featured-contents">
              <h6>Shridhar Shrivastav - Age 13 , Class 8</h6>
              <div class="description">
                Shridhar built a Bubble Shooting Game which allows players to
                shoot and win over enemies
              </div>
            </div>
          </div>
        </div>
      </section>

      <Content />
    </div>
  );
}

export default main;