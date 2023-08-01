import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate 'name' field (required)
    if (!form.current.name.value.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    // Validate 'NUMBER' field (required)
    if (!form.current.NUMBER.value.trim()) {
      newErrors.NUMBER = "Contact number is required.";
      isValid = false;
    }

    // Validate 'email' field (required and valid email format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.current.email.value.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(form.current.email.value)) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }

    // Validate 'message' field (required)
    if (!form.current.message.value.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // If the form is valid, send the email
      emailjs
        .sendForm(
          "service_9dlotsj",
          "template_qtnkdm9",
          form.current,
          "E5O5Xl4Z_u_Bm2KAu"
        )
        .then((response) => {
          console.log("Email sent successfully!", response);
          e.target.reset();
          // You can show a success message here if needed
        })
        .catch((error) => {
          console.error("Failed to send email:", error);
          // You can show an error message here if needed
        });
    }
  };

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section et" style={{ width: "100%" }}>
              Get in
            </h2>
            <h2 className="us">
              {" "}
              <span className="ouch">touch</span> with us
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="wrapper">
              <div className="row no-gutters mb-5">
                <div className="col-md-7">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4 act">Contact Us</h3>
                    <div id="form-message-warning" className="mb-4"></div>
                    <div id="form-message-success" className="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <form
                      method="POST"
                      id="contactForm"
                      name="contactForm"
                      className="contactForm"
                      style={{ marginTop: "3rem" }}
                      ref={form}
                      onSubmit={sendEmail}
                      onsubmit="return validateForm()"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="label"
                              for="name"
                              style={{
                                color: "#000",
                                fontFamily: " Inter",
                                fontSize: "15px",
                                fontStyle: " normal",
                                fontWeight: " 600",
                                lineHeight: " 40px",
                              }}
                            >
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
                            <label
                              className="label"
                              for="NUMBER"
                              style={{
                                color: "#000",
                                fontFamily: " Inter",
                                fontSize: "15px",
                                fontStyle: " normal",
                                fontWeight: " 600",
                                lineHeight: " 40px",
                              }}
                            >
                              CONTACT NUMBER
                            </label>
                            <input
                              type="NUMBER"
                              className="form-control"
                              name="NUMBER"
                              id="email"
                              placeholder="Number"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label
                              className="label"
                              for="email"
                              style={{
                                color: "#000",
                                fontFamily: " Inter",
                                fontSize: "15px",
                                fontStyle: " normal",
                                fontWeight: " 600",
                                lineHeight: " 40px",
                              }}
                            >
                              EMAIL
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Email ID"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label
                              className="label"
                              for="#"
                              style={{
                                color: "#000",
                                fontFamily: " Inter",
                                fontSize: "15px",
                                fontStyle: " normal",
                                fontWeight: " 600",
                                lineHeight: " 40px",
                              }}
                            >
                              Message
                            </label>
                            <textarea
                              name="message"
                              className="form-control"
                              id="message"
                              cols="50"
                              rows="10"
                              placeholder="Write your text here..."
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              className="btn btn-primary send"
                              style={{width:"194px",height:"63px",marginTop:"1.8rem",fontFamily:"inter",fontWeight:"600",fontSize:"20px"}}
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
                    <div className="mapouter">
                      <div className="gmap_canvas">
                        <iframe
                          width="100%"
                          height="100%"
                          id="gmap_canvas"
                          src="https://maps.google.com/maps?q=career dose&t=&z=15&ie=UTF8&iwloc=&output=embed"
                          frameborder="0"
                          scrolling="no"
                          marginheight="0"
                          marginwidth="0"
                        ></iframe>
                        <a href="https://2yu.co">2yu</a>
                        <br />
                        <a href="https://embedgooglemap.2yu.co/">
                          html embed google map
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="row"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <a href="https://www.google.com/maps/dir//Career+Dose,+H-21,+H+Block,+Sector+63,+Noida,+Uttar+Pradesh+201301/@28.6260606,77.3668853,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cef5cd4e8c3ab:0xa28bc289bfcb06bd!2m2!1d77.377174!2d28.630391?entry=ttu">
                        {" "}
                        <span className="fa fa-map-marker"></span>
                      </a>
                    </div>
                    <div className="text">
                      <p>
                        <span>Address:</span> H-21, Sector-63, Noida
                        Uttar Pradesh, India - 201301
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <a href="tel://85058 30856">
                        <span className="fa fa-phone"></span>
                      </a>
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
                      <a
                        href="mailto:admissions@careerdose.com"
                        target="_blank"
                      >
                        {" "}
                        <span className="fa fa-paper-plane"></span>
                      </a>
                    </div>
                    <div className="text">
                      <p>
                        <span>Email:</span>{" "}
                        <a
                          href="mailto:admissions@careerdose.com"
                          target="_blank"
                        >
                          <span
                            className="__cf_email__"
                            data-cfemail="523b3c343d122b3d2720213b26377c313d3f"
                          >
                            [ admissions@careerdose.com]
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
