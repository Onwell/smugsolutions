import React, { useEffect } from "react";
import AOS from "aos";
import NewsImg1 from "../../assets/images/news-img1.jpg";
import NewsImg2 from "../../assets/images/news-img2.jpg";
import NewsImg3 from "../../assets/images/news-img3.jpg";
import TextMarqueSection from "../../common/TextMarqueSection";
import { Link } from "react-router-dom";

const SectionSeven = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/* <!-- ======================================= Section Seven ================================== --> */}
      <section className="section-seven overflow-hidden">
        <div className="container">
          <p className="our-services" data-aos="fade-up">
            NEWS & LATEST UPDATES
          </p>
          <div className="news-header">
            <div>
              <h2 className="our-solution latest_project" data-aos="fade-down">
                Check Inside Story.
              </h2>
            </div>
            <div>
              <button
                className="explore-btn hover-slide-right see-more-btn"
                onClick="window.location.to='blog';"
              >
                <span>
                  SEE MORE NEWS
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
              <img
                className="news-img"
                src={NewsImg1}
                alt="news-img1"
                onClick="window.location.to='blog'"
              />
              <p className=" date-dev">APRIL 25, 2024 _ DEVELOPMENT</p>
              <h2 className="need-blog" onClick="window.location.to='blog';">
                Does My Website Need a Blog?
              </h2>
              <p className="explore-me read-more-btn">
                <Link to="/blog">
                  READ MORE
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
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 new-img-box-main"
              data-aos="fade-down"
            >
              <img
                className="news-img"
                src={NewsImg2}
                alt="news-img2"
                onClick="window.location.to='blog';"
              />
              <p className="date-dev">APRIL 26, 2024 _ DESIGN</p>
              <h2 className="need-blog" onClick="window.location.to='blog';">
                Best 10 App for Digital Transformation
              </h2>
              <p className="explore-me read-more-btn">
                <Link to="/blog">
                  READ MORE
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
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 new-img-box-main"
              data-aos="fade-up"
            >
              <img
                className="news-img"
                src={NewsImg3}
                alt="news-img3"
                onClick="window.location.to='blog';"
              />
              <p className="date-dev">APRIL 28, 2024 _ MARKETING</p>
              <h2 className="need-blog" onClick="window.location.to='blog';">
                A Simple Social Media Checklist
              </h2>
              <p className="explore-me read-more-btn">
                <Link to="/blog">
                  READ MORE
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
        <TextMarqueSection />
      </section>
      {/* <!-- ====================================== Section Seven End ===================================== --></img> */}
    </>
  );
};
export default SectionSeven;
