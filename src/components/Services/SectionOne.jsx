import React from "react";
import FlowerImg from "../../assets/images/flower.png";
import ServiceImgMain from "../../assets/images/services-main-img.png";
import AboutArrowMain from "../../assets/images/about-arrow-main.png";
import { Link } from "react-router-dom";

const SectionOne = () => {
  return (
    <>
      {/* <!-- ====================================== Services Section One ===================================== --> */}
      <section className="section-main overflow-hidden" id="main">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <p className="main-text about-hello" data-aos="fade-down">
                Experienced Freelancer
              </p>
              <h1 className="JessicaBiogi" data-aos="fade-down">
                My Services
              </h1>
              <h2 className="d-none">hidden</h2>
              <p className="Freelance about-freelance" data-aos="fade-down">
                Metus montes facilisis nulla eros nascetur accumsan nibh
                facilisi. Euismod amet amet pharetra turpis eleifend sed.
                Volutpat turpis ut amet nec feugiat orci.
              </p>
              <div className="about-main-buttons">
                <Link
                  to=""
                  className="explore-btn hover-slide-right explore-services"
                >
                  <span>
                    EXPLORE SERVICES
                    <svg
                      className="expo-arrow2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_191_463)">
                        <path
                          d="M10.6667 21.3333L13.3334 13.3333L21.3334 10.6667L18.6667 18.6667L10.6667 21.3333Z"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 16C4 17.5759 4.31039 19.1363 4.91345 20.5922C5.5165 22.0481 6.40042 23.371 7.51472 24.4853C8.62902 25.5996 9.95189 26.4835 11.4078 27.0866C12.8637 27.6896 14.4241 28 16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 14.4241 27.6896 12.8637 27.0866 11.4078C26.4835 9.95189 25.5996 8.62902 24.4853 7.51472C23.371 6.40042 22.0481 5.5165 20.5922 4.91345C19.1363 4.31039 17.5759 4 16 4C14.4241 4 12.8637 4.31039 11.4078 4.91345C9.95189 5.5165 8.62902 6.40042 7.51472 7.51472C6.40042 8.62902 5.5165 9.95189 4.91345 11.4078C4.31039 12.8637 4 14.4241 4 16Z"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 4V6.66667"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 25.3333V28"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 16H6.66667"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M25.3333 16H27.9999"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_191_463">
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
            <div className="col-xxl-6 col-xl-6 col-lg-6 about-main-img-sec">
              <img className="about-flower-img" src={FlowerImg} alt="flower" />
              <img
                className="about-img-main"
                src={ServiceImgMain}
                alt="services-main-img"
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
      {/* <!-- ====================================== Services Section One End===================================== --></div> */}
    </>
  );
};
export default SectionOne;
