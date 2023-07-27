import React from "react";
import "./main.css";
import Content from "../Content/content";
function main() {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <section
        id="feautredArticles"
        class="featured-atricles-section is-visible-viewport"
      >
        <div
          class="container"
          style={{ backgroundColor: "rgba(217,217,217,0)" }}
        >
          <h2
            class="section-heading"
            style={{
              color: " #000",
              textAlign: "center",
              marginLeft: "24rem",
              fontFamily: "Inter",
              fontSize: "30px",
              fontStyle: " normal",
              fontWeight: " 700",
              lineHeight: "113%",
              width: "800px " /* 39px */,
              marginTop: "8rem",
            }}
          >
            Discover all-encompassing learning programs & classes tailored for
            every students
          </h2>
          <p
            style={{
              marginLeft: "34.2rem",
              color: "#656565",
              fontFamily: "Inter",
              fontSize: "17px",
              fontStyle: " normal",
              fontWeight: " 500",
              lineHeight: "130%",
              width: "600px ",
            }}
          >
            Embark on a journey of lifelong learning with India's finest
          </p>
          <span
            style={{
              marginLeft: "31rem",
              color: "#656565",
              fontFamily: "Inter",
              fontSize: "18px",
              fontStyle: " normal",
              fontWeight: " 500",
              lineHeight: "130%",
              width: "647px ",
            }}
          >
            {" "}
            educators, engaging video lessons, and personalized learning paths
          </span>
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
              <div class="hideoverflow-image">
                <img
                  src="Rectangle 51.png"
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                marginTop: "1rem",
                textAlign: "center",
                color: "#656565",
                fontFamily: "Inter",
                fontSize: "110px",
                fontStyle: " normal",
                fontWeight: " 500",
                lineHeight: " normal",
                marginLeft: "5rem",
              }}
            >
              <h6>DATA SCIENCE</h6>
            </div>
          </div>
          <div class="featured-card">
            <div
              class="col-lg-5 col-md-12 col-sm-12 zoom"
              style={{ height: "359px", width: "606px" }}
            >
              <div class="hideoverflow-image">
                <img
                  src="Rectangle 53.png"
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                marginTop: "1rem",
                textAlign: "center",
                color: "#656565",
                fontFamily: "Inter",
                fontSize: "110px",
                fontStyle: " normal",
                fontWeight: " 500",
                lineHeight: " normal",
                marginLeft: "5rem",
              }}
            >
              <h6>FULL STACK DEVELOPMENT</h6>
            </div>
          </div>
          <div class="featured-card">
            <div
              class="col-lg-5 col-md-12 col-sm-12 zoom"
              style={{ height: "359px", width: "606px" }}
            >
              <div class="hideoverflow-image">
                <img
                  src="Rectangle 54.png"
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                marginTop: "1rem",
                textAlign: "center",
                color: "#656565",
                fontFamily: "Inter",
                fontSize: "110px",
                fontStyle: " normal",
                fontWeight: " 500",
                lineHeight: " normal",
                marginLeft: "10rem",
              }}
            >
              <h6>CLASSES 6 - 1O</h6>
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
            <div
              style={{
                marginTop: "1rem",
                textAlign: "center",
                color: "#656565",
                fontFamily: "Inter",
                fontSize: "110px",
                fontStyle: " normal",
                fontWeight: " 500",
                lineHeight: " normal",
                marginLeft: "10rem",
              }}
            >
              <h6>Learn French</h6>
            </div>
          </div>
          <div class="featured-card">
            <div
              class="col-lg-5 col-md-12 col-sm-12 zoom"
              style={{ height: "359px", width: "606px" }}
            >
              <div class="hideoverflow-image">
                <img
                  src="Rectangle 58.png"
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                marginTop: "1rem",
                textAlign: "center",
                color: "#656565",
                fontFamily: "Inter",
                fontSize: "110px",
                fontStyle: " normal",
                fontWeight: " 500",
                lineHeight: " normal",
              }}
            >
              <h6>Medical Coding</h6>
            </div>
          </div>
          <div class="featured-card">
            <div
              class="col-lg-5 col-md-12 col-sm-12 zoom"
              style={{ height: "359px", width: "606px" }}
            >
              <div class="hideoverflow-image">
                <img
                  src="Rectangle 55.png"
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                marginTop: "1rem",
                textAlign: "center",
                color: "#656565",
                fontFamily: "Inter",
                fontSize: "110px",
                fontStyle: " normal",
                fontWeight: " 500",
                lineHeight: " normal",
                marginLeft: "10rem",
              }}
            >
              <h6>Personality Development</h6>
            </div>
          </div>
          <div class="featured-card">
            <div
              class="col-lg-5 col-md-12 col-sm-12 zoom"
              style={{ height: "359px", width: "606px" }}
            >
              <div class="hideoverflow-image">
                <img
                  src="Rectangle 56.png"
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                marginTop: "1rem",
                textAlign: "center",
                color: "#656565",
                fontFamily: "Inter",
                fontSize: "110px",
                fontStyle: " normal",
                fontWeight: " 500",
                lineHeight: " normal",
              }}
            >
              <h6>HR Analytics</h6>
            </div>
          </div>
          <div class="featured-card">
            <div
              class="featured-image-wrapper zoom"
              style={{ height: "359px", width: "606px" }}
            >
              <div class="hideoverflow-image">
                <img
                  src="Rectangle 57.png"
                  alt="featured-articles"
                  class="card-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
                color: "#656565",
                fontFamily: "Inter",
                fontSize: "30px",
                fontStyle: " normal",
                fontWeight: " 500",
                lineHeight: " normal",
              }}
            >
              <h6>MERN STACK</h6>
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
          }}
        >
          Get the{" "}
          <span
            style={{
              color: " #000",
              borderBottom: "3px dashed #1D79C2",
              fontFamily: "Inter",
              fontSize: " 50px",
              fontStyle: " normal",
              fontWeight: " 700",
              lineHeight: " normal",
            }}
          >
            advantage
          </span>
        </h2>
        <img src="Group 118.png" alt="" style={{width:"140px",height:"120px",marginLeft:"30rem",marginTop:"-5rem"}} />
      </section>
      <section style={{ marginTop: "-14rem" }}>
        <div style={{ backgroundColor: "#f5f5f5", height: "auto" }}>
          <div class="container"></div>
          <section class="css-te3fh4-SectionWrapper e15j23t0" style={{padding:"3rem"}}>
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
                    borderBottom: "3px solid red",
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
                  fontSize: " 17px",
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
                  }}
                  class="e15j23t5 e10nf3mz0 aquilla-button button css-160bjjb-LearningButton-Learning"
                >
                  <span class="button--label-content css-0">
                    Start learning
                  </span>
                </button>
              </a>
            </div>
            <div
              class="css-1bk9s6h-StatsContainer e15j23t4"
              style={{ paddingRight: "7rem" }}
            >
              <div class="css-14h8cqt-Left e15j23t6" >
                <div class="css-1fuyrwz-CardWrapper e991mst0" style={{backgroundColor:"white"}}>
                  <div class="css-gytqqx-Left e991mst3">
                    <span class="css-16zmcy3-SecText e991mst7">
                      Students enrolled
                    </span>
                    <div class="css-1r6zuyg-Row e991mst4">
                      <span class="css-1yb456-Label e991mst5">60</span>
                      <span class="css-9c73z1-Label-GreenLabel e991mst6">
                        +
                      </span>
                    </div>
                  </div>
                  <div
                    class="css-ds2g6j-CardImageWrapper e991mst1"
                    style={{
                      position: " absolute",
                      right: "20px",
                      bottom: " 27.5px",
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
                <div class="css-1fuyrwz-CardWrapper e991mst0"  style={{backgroundColor:"white"}}>
                  <div class="css-gytqqx-Left e991mst3">
                    <span class="css-16zmcy3-SecText e991mst7">Counselled</span>
                    <div class="css-1r6zuyg-Row e991mst4">
                      <span class="css-1yb456-Label e991mst5">1.5k</span>
                      <span class="css-9c73z1-Label-GreenLabel e991mst6">
                        +
                      </span>
                    </div>
                  </div>
                  <div
                    class="css-ds2g6j-CardImageWrapper e991mst1"
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
                <div class="css-1fuyrwz-CardWrapper e991mst0"  style={{backgroundColor:"white"}}>
                  <div class="css-gytqqx-Left e991mst3">
                    <span class="css-16zmcy3-SecText e991mst7">
                      Partner with us
                    </span>
                    <div class="css-1r6zuyg-Row e991mst4">
                      <span class="css-1yb456-Label e991mst5">3.2B</span>
                      <span class="css-9c73z1-Label-GreenLabel e991mst6">
                        +
                      </span>
                    </div>
                  </div>
                  <div
                    class="css-ds2g6j-CardImageWrapper e991mst1"
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
                <div class="css-1fuyrwz-CardWrapper e991mst0"  style={{backgroundColor:"white"}}>
                  <div class="css-gytqqx-Left e991mst3">
                    <span class="css-16zmcy3-SecText e991mst7">Placements</span>
                    <div class="css-1r6zuyg-Row e991mst4">
                      <span class="css-1yb456-Label e991mst5">14k</span>
                      <span class="css-9c73z1-Label-GreenLabel e991mst6">
                        +
                      </span>
                    </div>
                  </div>
                  <div
                    class="css-ds2g6j-CardImageWrapper e991mst1"
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
                <div class="css-1fuyrwz-CardWrapper e991mst0"  style={{backgroundColor:"white"}}>
                  <div class="css-gytqqx-Left e991mst3">
                    <span class="css-16zmcy3-SecText e991mst7">Upskilled</span>
                    <div class="css-1r6zuyg-Row e991mst4">
                      <span class="css-1yb456-Label e991mst5">1M</span>
                      <span class="css-9c73z1-Label-GreenLabel e991mst6">
                        +
                      </span>
                    </div>
                  </div>
                  <div
                    class="css-ds2g6j-CardImageWrapper e991mst1"
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
      >
        <div class="container">
          <h2 class="section-heading">What Our Students Say</h2>
        </div>
        <div class="pb-40 marquee flex">
          <div class="featured-card">
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
              <h6>Shreya Kathare - Age 11 , Class 5</h6>
              <div class="description">
                Shreya developed a school website which effectively communicated
                the school's vision and mission.
              </div>
            </div>
          </div>
          <div class="featured-card">
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
              <h6>Roy Nunez</h6>
              <div class="description">
                Roy built an Air Hockey Battle app that allows you to play Air
                Hockey on your phone.
              </div>
            </div>
          </div>
          <div class="featured-card">
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
              <h6>Dhruva Shah - Age 13 , Class 8</h6>
              <div class="description">
                Dhruva created a Space Shooter Game which resembles outer space
              </div>
            </div>
          </div>
          <div class="featured-card">
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
              <h6>Anthony Watkins</h6>
              <div class="description">
                Anthony built Control the Drone app that allows him to maneuver
                his own drone
              </div>
            </div>
          </div>
          <div class="featured-card">
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
          <div class="featured-card">
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
          <div class="featured-card">
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
              <h6>Christian Sheeder</h6>
              <div class="description">
                Christian developed Polio Vaccine Calculator app to keep a tab
                on vaccines required for kids
              </div>
            </div>
          </div>
          <div class="featured-card">
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
              <h6>Kiara Bhandari - Age 8 , Class 3</h6>
              <div class="description">
                Kiara built a Restaurant application which allows restaurants to
                take online orders
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <Content/> 
    </div>
  );
}

export default main;
