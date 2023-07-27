import React from "react";
import "./contact.css";
function Contact() {
  return (
    <section className="ftco-section" >
      <div className="container" >
        <div className="row justify-content-center" >
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section et" style={{width:"100%"}}>Get in</h2><h2 className="us"> <span className="ouch">touch</span> with us</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="wrapper">
              <div className="row no-gutters mb-5">
                <div className="col-md-7">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4 act" >Contact Us</h3>
                    <div id="form-message-warning" className="mb-4"></div>
                    <div id="form-message-success" className="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <form
                      method="POST"
                      id="contactForm"
                      name="contactForm"
                      className="contactForm"
                      style={{marginTop:"3rem"}}
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" for="name">
                              Full Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" for="NUMBER">
                            CONTACT NUMBER
                            </label>
                            <input
                              type="NUMBER"
                              className="form-control"
                              name="NUMBER"
                              id="email"
                              placeholder="Number"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" for="email">
                             EMAIL
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Email ID"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" for="#">
                              Message
                            </label>
                            <textarea
                              name="message"
                              className="form-control"
                              id="message"
                              cols="50"
                              rows="10"
                              placeholder="Write your text here..."
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              className="btn btn-primary send"
                            />
                            <div className="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-stretch">
                  <div id="map">
                  <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=career dose&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co">2yu</a><br/><a href="https://embedgooglemap.2yu.co/">html embed google map</a></div></div>

                  </div>
                
                </div>
              </div>
              <div className="row" style={{display:"flex",justifyContent:"space-evenly"}}>
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-map-marker"></span>
                    </div>
                    <div className="text">
                      <p>
                        <span>Address:</span> Address H-21, Sector-63, Noida Uttar Pradesh, India - 201301
                       
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="text">
                      <p>
                        <span>Phone:</span>{" "}
                        <a href="tel://85058 30856">+91-85058 30856</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-paper-plane"></span>
                    </div>
                    <div className="text">
                      <p>
                        <span>Email:</span>{" "}
                        <a href="/cdn-cgi/l/email-protection#71181f171e31081e0403021805145f121e1c">
                          <span
                            className="__cf_email__"
                            data-cfemail="523b3c343d122b3d2720213b26377c313d3f"
                          >
                            [ contact@careerdose.com]
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-globe"></span>
                    </div>
                    <div className="text">
                      <p>
                        <span>Website</span> <a href="#">yoursite.com</a>
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
