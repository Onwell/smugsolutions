import React, { useEffect } from "react";
import AOS from "aos";
import BiogiLogo from "../assets/images/logo.svg";
import PhoneSvg from "../assets/images/phone_svg.svg";
import EmailSvg from "../assets/images/email_svg.svg";
import LocationSvg from "../assets/images/location_svg.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/* <!-- ====================================== Footer ===================================== --> */}
      <footer>
        <div className="mobile-itemright-footer" data-aos="fade-down">
          <div className="footer-box-right">
            <p className="mind-project">Have a project in your mind?</p>
            <div className="view-work-circle btn btn1">
              <Link to="/contact" className="a1">
                CONTACT ME
              </Link>
            </div>
            <div>
              <p className="contact_time">09 : 00 AM - 10 : 30 PM</p>
              <p className="monday">Monday to Saturday</p>
            </div>
          </div>
        </div>
        <div className="footer-bg">
          <div className="container footer-containe">
            <div className="hekl">
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5">
                  <Link to="/" className="biogi-logo">
                    <img src={BiogiLogo} alt="logo" />
                  </Link>
                  <p className="work_well">
                    When do they work well, and when do they on us and finally,
                    when do we actually need how can we avoid them.
                  </p>
                  <div className="contact-footer">
                    <img src={PhoneSvg} alt="phone_svg" />
                    <Link to="tel:+1451356888">+1 451 356 888</Link>
                  </div>
                  <div className="contact-footer">
                    <img src={EmailSvg} alt="email_svg" />
                    <Link to="mailto:biogi@mail.com">biogi@mail.com</Link>
                  </div>
                  <div className="contact-footer">
                    <img src={LocationSvg} alt="location_svg" />
                    <p>121 Parkview St. California, USA</p>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3">
                  <p className="useful-link">USEFUL LINKS</p>
                  <div className="contact-footer">
                    <Link to="/about">About</Link>
                  </div>
                  <div className="contact-footer">
                    <Link to="/services">Services</Link>
                  </div>
                  <div className="contact-footer">
                    <Link to="/portfolio">Portfolio</Link>
                  </div>
                  <div className="contact-footer">
                    <Link to="/blog">Blog</Link>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-4">
                  <p className="useful-link">USEFUL LINKS</p>
                  <div className="contact-footer">
                    <Link to="/contact">Contact</Link>
                  </div>
                  <div className="contact-footer">
                    <Link to="#">Privacy Policy</Link>
                  </div>
                  <div className="contact-footer">
                    <Link to="#">Terms & Conditions</Link>
                  </div>
                </div>
              </div>
              <div className="copyright_main">
                <p className="copyright">
                  © 2024 | All rights reserved by
                  <Link
                    to="https://1.envato.market/website-portfolio"
                    target="_blank"
                  >
                    The_Krishna
                  </Link>
                </p>
                <div className="input-main">
                  <input
                    type="text"
                    name="text"
                    placeholder="Enter your email"
                    autoComplete="off"
                  />
                  <svg
                    className="send-svg-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_147_85)">
                      <path
                        d="M10 14L21 3"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 3L14.5 21C14.4561 21.0957 14.3857 21.1769 14.2971 21.2338C14.2084 21.2906 14.1053 21.3209 14 21.3209C13.8947 21.3209 13.7916 21.2906 13.703 21.2338C13.6143 21.1769 13.5439 21.0957 13.5 21L10 14L3.00001 10.5C2.90427 10.4561 2.82314 10.3857 2.76626 10.2971C2.70938 10.2084 2.67914 10.1053 2.67914 10C2.67914 9.89468 2.70938 9.79158 2.76626 9.70295C2.82314 9.61431 2.90427 9.54387 3.00001 9.5L21 3Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_147_85">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="desktop-itemright-footer">
              <div className="footer-box-right">
                <p className="mind-project">Have a project in your mind?</p>
                <div className="view-work-circle btn btn1">
                  <Link to="/contact" className="a1">
                    CONTACT ME
                  </Link>
                </div>
                <div>
                  <p className="contact_time">09 : 00 AM - 10 : 30 PM</p>
                  <p className="monday">Monday to Saturday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- ====================================== Footer End ===================================== --> */}
    </>
  );
};
export default Footer;
