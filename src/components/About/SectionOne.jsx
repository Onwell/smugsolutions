import React, { useEffect } from "react";
import AOS from "aos";
import FlowerImg from "../../assets/images/flower.png";
import AboutImgMain from "../../assets/images/about-img-main.png";
import AboutArrowMain from "../../assets/images/about-arrow-main.png";
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
                Onwell
              </h1>
              <p className="Freelance about-freelance" data-aos="fade-down">
                A <span>Website Designer</span> and Graphic Designer{" "}
                <span>based in Zimbabwe</span>. I strives to build immersive and
                beautiful web applications through carefully crafted
                used-centric design.
              </p>
              <div className="about-main-buttons">
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
