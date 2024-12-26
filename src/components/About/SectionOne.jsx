import React, { useEffect } from "react";
import AOS from "aos";
import FlowerImg from "../../assets/images/flower.png";
import AboutImgMain from "../../assets/images/about-img-main.png";
import AboutArrowMain from "../../assets/images/about-arrow-main.png";
import Resume from "../../assets/pdf/olivia_resume.pdf";
import { Link } from "react-router-dom";
const SectionOne = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      {/* <!-- ====================================== About Section One ===================================== --> */}
      <section className="section-main overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <p className="main-text about-hello" data-aos="fade-down">
                Hello, I am <span>👋</span>
              </p>
              <h1 className="JessicaBiogi" data-aos="fade-down">
                Jessica Biogi
              </h1>
              <p className="Freelance about-freelance" data-aos="fade-down">
                A <span>Freelance Designer</span> and Developer{" "}
                <span>based in USA</span>. I strives to build immersive and
                beautiful web applications through carefully crafted
                used-centric design.
              </p>
              <div className="about-main-buttons">
                <Link
                  to={Resume}
                  rel="noreferrer"
                  target="_blank"
                  className="explore-btn hover-slide-right download-cv-about"
                >
                  <span>
                    DOWNLOAD CV
                    <svg
                      className="expo-arrow2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_158_583)">
                        <path
                          d="M5.33337 22.6667V25.3333C5.33337 26.0406 5.61433 26.7189 6.11442 27.219C6.61452 27.7191 7.2928 28 8.00004 28H24C24.7073 28 25.3856 27.7191 25.8857 27.219C26.3858 26.7189 26.6667 26.0406 26.6667 25.3333V22.6667"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.33337 14.6667L16 21.3333L22.6667 14.6667"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 5.33333V21.3333"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_158_583">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </Link>
                <p
                  className="explore-me about-contact-btn"
                  data-aos="fade-right"
                >
                  <Link to="/contact">
                    CONTACT ME
                    <svg
                      className="expo-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M6.66669 16H25.3334"
                          stroke="#FFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20 21.3333L25.3333 16"
                          stroke="#FFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20 10.6666L25.3333 16"
                          stroke="#FFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </Link>
                </p>
              </div>
            </div>
            <div
              className="col-xxl-6 col-xl-6 col-lg-6 about-main-img-sec"
              id="main"
            >
              <img className="about-flower-img" src={FlowerImg} alt="flower" />
              <img
                className="about-img-main"
                src={AboutImgMain}
                alt="about-img-main"
                data-aos="fade-left"
              />
              <img
                className="about-arrow-main"
                id="arrow"
                src={AboutArrowMain}
                alt="about-arrow-main"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== About Section One End===================================== --></div> */}
    </>
  );
};
export default SectionOne;
