import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import SingleServicesImg1 from "../../assets/images/single-services-project-img1.jpg";
import SingleServicesImg2 from "../../assets/images/single-services-project-img2.jpg";
import SingleServicesImg3 from "../../assets/images/single-services-project-img3.jpg";

const LatestProjectImages = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="section-seven section-seven-single-service overflow-hidden">
        <div className="container">
          <p className="our-services" data-aos="fade-up">
            DISCOVER OUR CASES
          </p>
          <div className="news-header">
            <div>
              <h2 className="our-solution latest_project" data-aos="fade-down">
                Latest Projects.
              </h2>
            </div>
            <div>
              <button className="explore-btn hover-slide-right see-more-btn">
                <span>
                  SEE MORE WORKS
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
          </div>
          <div className="row">
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 new-img-box-main"
              data-aos="fade-up"
            >
              <Link to="/single_portfolio">
                <img
                  className="news-img"
                  src={SingleServicesImg1}
                  alt="single-services-project-img1"
                />
                <p className="date-dev">CONTENT</p>
                <h2 className="need-blog Unique">Unique Product Design</h2>
              </Link>
            </div>
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 new-img-box-main"
              data-aos="fade-down"
            >
              <Link to="/single_portfolio">
                <img
                  className="news-img"
                  src={SingleServicesImg2}
                  alt="single-services-project-img2"
                />
                <p className="date-dev">GALLERY</p>
                <h2 className="need-blog Unique">Mobile App for Car Rental</h2>
              </Link>
            </div>
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 new-img-box-main new-img-box-main2"
              data-aos="fade-down mb-0"
            >
              <Link to="/single_portfolio">
                <img
                  className="news-img"
                  src={SingleServicesImg3}
                  alt="single-services-project-img3"
                />
                <p className="date-dev">HTML VIDEO</p>
                <h2 className="need-blog Unique">Ecommerce Website UI</h2>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LatestProjectImages;
