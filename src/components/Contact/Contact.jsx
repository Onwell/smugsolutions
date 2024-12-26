import React, { useEffect } from "react";
import AOS from "aos";
import Loader from "../../common/Loader";
import Header from "../../common/Header";
import PhoneSvg from "../../assets/images/phone_svg.svg";
import EmailSvg from "../../assets/images/email_svg.svg";
import LocationSvg from "../../assets/images/location_svg.svg";
import TextMarqueAboutSection from "../About/TextMarqueAboutSection";
import Footer from "../../common/Footer";
import Cursor from "../../common/Cursor";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Loader />
      <div className="site_contain">
        {/* <!-- ====================================== Cusrsor ===================================== --> */}
        <Cursor />
        {/* <!-- ====================================== Cursor End ===================================== --> */}
        {/* <!-- ====================================== Header Menu ===================================== --> */}
        <Header />
        {/* <!-- ====================================== Header Menu End===================================== --> */}
        {/* <!-- ====================================== Conatct Section One ===================================== --> */}
        <section
          className="section-main contact-section-main overflow-hidden"
          id="section-main-id"
        >
          <div className="container">
            <p className="main-text my-services" data-aos="fade-down">
              CONTACT ME
            </p>
            <h1 className="ui-ux" data-aos="fade-down">
              Let's make something awesome together!
            </h1>
          </div>
        </section>
        {/* <!-- ====================================== Conatct Section One End===================================== --> */}
        {/* <!-- ====================================== Conatct Section two ===================================== --> */}
        <section className="section-two-my-services">
          <div className="container" id="form-conatiner">
            <div className="row" id="form">
              <div className="col-xxl-8 col-xl-8 col-lg-8 ">
                <form className="form-main">
                  <div className="form-main-sub">
                    <div className="input-main-form">
                      <p className="name">Name:</p>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        autoComplete="off"
                      />
                    </div>
                    <div className="input-main-form">
                      <p className="name">Email:</p>
                      <input
                        type="email"
                        name="name"
                        placeholder="Your email"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="form-main-sub">
                    <div className="input-main-form">
                      <p className="name">Phone (optional):</p>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your phone"
                        autoComplete="off"
                      />
                    </div>
                    <div className="input-main-form">
                      <p className="name">Subject:</p>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your subject"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="input-main-form">
                    <p className="name">Message:</p>
                    <textarea placeholder="Type your message..."></textarea>
                  </div>
                  <div className="form-submit-btn-main">
                    <button className="explore-btn hover-slide-right form-submit-btn">
                      <span id="toggle">
                        SUBMIT
                        <svg
                          className="expo-arrow2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <g>
                            <path
                              d="M6.66669 16H25.3334"
                              stroke="#FFDB59"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M20 21.3333L25.3333 16"
                              stroke="#FFDB59"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M20 10.6666L25.3333 16"
                              stroke="#FFDB59"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 overflow-hidden">
                <div className="get-touch-box-main">
                  <h2>Get In Touch</h2>
                  <p className="well">
                    When do they work well, and when do they on us and finally,
                    when do we actually need how can we avoid them.
                  </p>
                  <div className="contact-footer contact-footer2">
                    <img src={PhoneSvg} alt="phone_svg" />
                    <Link to="tel:+1451356888">+1 451 356 888</Link>
                  </div>
                  <div className="contact-footer contact-footer2">
                    <img src={EmailSvg} alt="email_svg" />
                    <Link to="mailto:biogi@mail.com">biogi@mail.com</Link>
                  </div>
                  <div className="contact-footer contact-footer2">
                    <img src={LocationSvg} alt="location_svg" />
                    <p>121 Parkview St. California, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ====================================== Conatct Section Two End===================================== --> */}
        {/* <!-- ====================================== text Marquee Section  ===================================== --> */}

        <TextMarqueAboutSection />
        {/* <!-- ====================================== text Marquee Section End ===================================== --> */}
        {/* <!-- ====================================== Footer ===================================== --> */}
        <Footer />
      </div>
    </>
  );
};
export default Contact;
