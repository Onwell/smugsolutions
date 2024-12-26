import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import BrandsMarqueSection from "../../../common/BrandsMarqueSection";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import $ from "jquery";
import "magnific-popup";
import "../../../../node_modules/magnific-popup/dist/magnific-popup.css";
import ProgressCircle from "../../../common/ProgressCircle";

const ServicesPageThree = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    $(".youtube").magnificPopup({
      items: {
        src: "https://www.youtube.com/watch?v=IMxDeACOWCE",
      },
      type: "iframe",
    });
  }, []);
  return (
    <>
      <Loader />
      <div className="site_contain">
        {/* <!-- ====================================== Header Menu ===================================== --> */}
        <Header />
        {/* <!-- ====================================== Header Menu End===================================== --> */}
        {/* <!-- ====================================== Services Section One ===================================== --> */}
        <section
          className="single-blog2-section-main overflow-hidden"
          id="main"
        >
          <div className="container">
            <p className="main-text" data-aos="fade-down">
              Experienced Freelancer
            </p>
            <h1 className="JessicaBiogi blog2-main-text" data-aos="fade-down">
              My Services
            </h1>
            <nav aria-label="breadcrumb" id="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  <Link to="/services2">Services</Link>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        {/* <!-- ====================================== Services Section One End===================================== --> */}
        {/* <!-- ====================================== Services Section Two ===================================== --> */}
        <section className="section-three overflow-hidden">
          <div className="container">
            <div className="row services-row-main">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div
                  className="services-grid-main"
                  id="services-grid-main"
                  data-aos="fade-up"
                >
                  <p className="number-services">01</p>
                  <h2 className="branding-design-text">Branding Design</h2>
                  <p className="fule">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur fugit numquam saepe fugiat, temporibus vel ab
                    vitae eveniet dicta sit!
                  </p>
                  <p className="explore-me aos-init aos-animate">
                    <Link to="/single_services">
                      Read More
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
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div
                  className="services-grid-main"
                  id="services-grid-main2"
                  data-aos="fade-up"
                >
                  <p className="number-services">02</p>
                  <h2 className="branding-design-text">Web Development</h2>
                  <p className="fule">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur fugit numquam saepe fugiat, temporibus vel ab
                    vitae eveniet dicta sit!
                  </p>
                  <p className="explore-me aos-init aos-animate">
                    <Link to="/single_services">
                      Read More
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
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div
                  className="services-grid-main"
                  id="services-grid-main3"
                  data-aos="fade-up"
                >
                  <p className="number-services">03</p>
                  <h2 className="branding-design-text">Content Marketing</h2>
                  <p className="fule">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur fugit numquam saepe fugiat, temporibus vel ab
                    vitae eveniet dicta sit!
                  </p>
                  <p className="explore-me aos-init aos-animate">
                    <Link to="/single_services">
                      Read More
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
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div
                  className="services-grid-main"
                  id="services-grid-main4"
                  data-aos="fade-up"
                >
                  <p className="number-services">04</p>
                  <h2 className="branding-design-text">Digital Marketing</h2>
                  <p className="fule">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur fugit numquam saepe fugiat, temporibus vel ab
                    vitae eveniet dicta sit!
                  </p>
                  <p className="explore-me aos-init aos-animate">
                    <Link to="/single_services">
                      Read More
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
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div
                  className="services-grid-main"
                  id="services-grid-main5"
                  data-aos="fade-up"
                >
                  <p className="number-services">05</p>
                  <h2 className="branding-design-text">Social Advertising</h2>
                  <p className="fule">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur fugit numquam saepe fugiat, temporibus vel ab
                    vitae eveniet dicta sit!
                  </p>
                  <p className="explore-me aos-init aos-animate">
                    <Link to="/single_services">
                      Read More
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
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div
                  className="services-grid-main"
                  id="services-grid-main6"
                  data-aos="fade-up"
                >
                  <p className="number-services">06</p>
                  <h2 className="branding-design-text">
                    Illustration Modelling
                  </h2>
                  <p className="fule">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur fugit numquam saepe fugiat, temporibus vel ab
                    vitae eveniet dicta sit!
                  </p>
                  <p className="explore-me aos-init aos-animate">
                    <Link to="/single_services">
                      Read More
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
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div
                  className="services-grid-main"
                  id="services-grid-main7"
                  data-aos="fade-up"
                >
                  <p className="number-services">07</p>
                  <h2 className="branding-design-text">Mobile Solution</h2>
                  <p className="fule">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur fugit numquam saepe fugiat, temporibus vel ab
                    vitae eveniet dicta sit!
                  </p>
                  <p className="explore-me aos-init aos-animate">
                    <Link to="/single_services">
                      Read More
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
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div
                  className="services-grid-main"
                  id="services-grid-main8"
                  data-aos="fade-up"
                >
                  <p className="number-services">08</p>
                  <h2 className="branding-design-text">Product Design</h2>
                  <p className="fule">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur fugit numquam saepe fugiat, temporibus vel ab
                    vitae eveniet dicta sit!
                  </p>
                  <p className="explore-me aos-init aos-animate">
                    <Link to="/single_services">
                      Read More
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
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div
                  className="services-grid-main"
                  id="services-grid-main9"
                  data-aos="fade-up"
                >
                  <p className="number-services">09</p>
                  <h2 className="branding-design-text">UI/UX Experience </h2>
                  <p className="fule">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aspernatur fugit numquam saepe fugiat, temporibus vel ab
                    vitae eveniet dicta sit!
                  </p>
                  <p className="explore-me aos-init aos-animate">
                    <Link to="/single_services">
                      Read More
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
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="services-video">
          <div className="container">
            <div className="view-work-circle btn play-video youtube">
              <Link to="/contact" className="a1">
                PLAY VIDEO
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ====================================== Brands Marquee Section Start ===================================== --> */}
      <BrandsMarqueSection />
      {/* <!-- ====================================== Brands Marquee Section End ===================================== --> */}
      {/* <!-- ====================================== text Marquee Section Start ===================================== --> */}
      <TextMarqueAboutSection />
      {/* <!-- ====================================== text Marquee Section End ===================================== --> */}
      {/* <!-- ====================================== Footer ===================================== --> */}
      <Footer />
      {/* <!-- ====================================== Progress Scroll Bottom To Top ===================================== --> */}
      <ProgressCircle />
      {/* <!-- ====================================== Progress Scroll Bottom To Top End ===================================== --> */}
    </>
  );
};
export default ServicesPageThree;
