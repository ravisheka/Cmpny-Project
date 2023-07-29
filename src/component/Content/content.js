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
        style={{ backgroundColor: "#0063b2", display: "flex", height: "500px" }}
      >
        <div class="content container-mw-lg container-fluid" style={{paddingLeft:"10rem"}}>
          <h2
            class="h2 vision-heading mb-4"
            style={{
              color: " #FFF",
              textAlign: "justify",
              fontFamily: " Allerta Stencil",
              fontSize: "24px",
              fontStyle: " normal",
              fontWeight: " 400",
              lineHeight: "30px",
            }}
          >
           <span style={{borderBottom:"3px solid #ffdd55"}}> Our</span> vision
          </h2>
          <p
            class="h1 text-white col-lg-7 p-0 mb-5"
            style={{
              fontFamily: " Inter",
              fontSize: "27px",
              fontStyle: "normal",
              fontWeight: " 600",
              lineHeight: " 30px",
              letterSpacing: "-0.66px",
              width:'650px'
            }}
          >
            Embracing the Wisdom of the{" "}
            <span className="gita"   
            style={{
             
              fontSize: "28px",
             
            }}>Bhagavad Gita</span>: Nurturing Success with
            LORD Krishna’s Teachings
            <br/><br/>
            <p className="right" style={{width:"1200px",fontSize: "23px",}}>
              “RIGHT<span style={{color:"#91e500"}}> KNOWLEDGE</span> IS THE ULTIMATE SOLUTION TO ALL OUR<span  style={{color:"#ffdd55"}}> PROBLEMS</span>.”
            </p>
          </p>
          <div
          className="more"
            
          >
            <a class="learns" href="/about-us" __tracked="true" >
              Learn more
            </a>
          </div>
        </div>
        <div style={{ marginTop: "-12.4rem", height: "auto" }} >
          <img
            src="feather 3.svg"
            alt=""
            style={{ height: "850px", width: " 850px" }}
          />
        </div>
      </div>
      
     <br/>
     <br/>
     <br/>
  
     
      <Company style={{backgroundColor:"#fcfcfc"}}  />
      <section class="css-dqu6o5-SectionWrapper edss7f20" >
        <div class="contant" style={{marginTop:'4rem'}}>
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
              <div class="css-1jjf8c-StoreImage-AppStoreImage edss7f27 zoom">
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
              <div class="css-xkbt8r-StoreImage-PlayStoreImage edss7f28 zoom">
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
      <img alt="phone" src="get app 1.svg"  style={{ width:"940px",height:"940px",marginLeft:'3rem',paddingBottom:'3rem'}}/>
          
    
      </section>
      <section style={{width:'100%',height:"160px",backgroundColor:"rgba(24,15,32,0.1)",marginTop:"-19rem"}}></section>
    </div>
    
  );
}

export default content;
