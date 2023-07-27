import React from "react";
import "./content.css";
import "./content1.css";
import Company from "../Company/company";
//import Main from "../../Main/main";
function content() {
  return (
    <div>
      <div
        class="edx-vision border text-white"
        style={{ backgroundColor: "#180F20", display: "flex", height: "604px" }}
      >
        <div class="content container-mw-lg container-fluid" style={{paddingLeft:"10rem"}}>
          <h2
            class="h2 vision-heading mb-4"
            style={{
              color: " #FF3049",
              textAlign: "justify",
              fontFamily: " Kurale",
              fontSize: "35px",
              fontStyle: " normal",
              fontWeight: " 400",
              lineHeight: "30px",
            }}
          >
            Our vision
          </h2>
          <p
            class="h1 text-white col-lg-7 p-0 mb-5"
            style={{
              fontFamily: " Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: " 600",
              lineHeight: " 25px",
              letterSpacing: "-0.66px",
            }}
          >
            Embracing the Wisdom of the{" "}
            <span className="gita"   
            style={{
             
              fontSize: "28px",
             
            }}>Bhagavad Gita</span>: Nurturing Success with
            LORD Krishna’s Teachings
            <p className="right" style={{width:"900px",fontSize: "25px"}}>
              “RIGHT KNOWLEDGE IS THE ULTIMATE SOLUTION TO ALL OUR PROBLEMS.”
            </p>
          </p>
          <div
            style={{ width: "192px", height: "54px", backgroundColor: "white" }}
          >
            <a class="learn" href="/about-us" __tracked="true" style={{display:"flex",justifyItems:"center",padding:"6px 0 0 6px"}}>
              Learn more
            </a>
          </div>
        </div>
        <div style={{ marginTop: "-5rem", height: "auto" }}>
          <img
            src="feather 1.png"
            alt=""
            style={{ height: "43rem", width: " rem" }}
          />
        </div>
      </div>
      
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     
      <Company   />
      <section class="css-dqu6o5-SectionWrapper edss7f20">
        <div class="contant">
          <h4 class="get">Get the learning app</h4>
          <h4 class="join">
            Join our vibrant community and unleash the full potential of our
            platform. Get started today!
          </h4>
          <div class="app-links css-v0iu7o-AppContainer edss7f25">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://apps.apple.com/in/app/unacademy-learning-app/id1342565069?referrer%3Dutm_source%253DFooter%2526utm_medium%253DWebApp%2526utm_campaign%253DFooter%2526"
            >
              <div class="css-1jjf8c-StoreImage-AppStoreImage edss7f27">
                <img
                  alt="appStore"
                  srcset="
                  https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&amp;auto=format%2Ccompress&amp;w=128 1x,
                  https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&amp;auto=format%2Ccompress&amp;w=256 2x
                "
                  src="https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&amp;auto=format%2Ccompress&amp;w=256"
                  width="128"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  class="css-fz77qc-StyledNextImage e1n3w55p0"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.unacademyapp&amp;referrer=utm_source%3DFooter%26utm_medium%3DWebApp%26utm_campaign%3DFooter%26"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="css-xkbt8r-StoreImage-PlayStoreImage edss7f28">
                <img
                  alt="playStore"
                  srcset="
                  https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&amp;auto=format%2Ccompress&amp;w=128 1x,
                  https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&amp;auto=format%2Ccompress&amp;w=256 2x
                "
                  src="https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&amp;auto=format%2Ccompress&amp;w=256"
                  width="128"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  class="css-fz77qc-StyledNextImage e1n3w55p0"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
              </div>
            </a>
          </div>
        </div>
        <div class="" >
          <img alt="phone" src="get app.svg"  style={{ width:"900px",height:"700px",marginLeft:'14rem' }}/>
        </div>
      </section>
    </div>
  );
}

export default content;
