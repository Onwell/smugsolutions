import React, { useEffect } from "react";
import AOS from "aos";
import GirlImg2 from "../../assets/images/girl-img2.png";
import YearsImg from "../../assets/images/years-img.png";
import TrophyImg from "../../assets/images/trophy.png";
import { Link } from "react-router-dom";

const SectionTwo = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/* <!-- ====================================== Section Two ===================================== --> */}
      <section className="section-two overflow-hidden" id="section-two">
        <div className="container">
          <div className="row section-two-row">
            <div
              className="col-xxl-6 col-xl-6 col-lg-6 position-relative section-two-col-one"
              data-aos="fade-up"
            >
              <img
                className="girl-img2"
                src={GirlImg2}
                alt="girl-img2"
                data-aos="fade-left"
              />
              <div className="hwlo">
                <img className="years-img" src={YearsImg} alt="years-img" />
                <div className="digit">6</div>
                <div className="circle-text">
                  YEARS OF
                  <br /> WORKING EXPERICE
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="award-circle-main" data-aos="zoom-in">
                <div className="award-circle">
                  <img src={TrophyImg} alt="trophy" />
                </div>
                <div className="">
                  <h3 className="independent">Independent Of The Year</h3>
                  <p className="annual">Annual Awards 2025</p>
                </div>
              </div>
              <h3 className="self-taught" data-aos="fade-up">
                Hello! I’m <span>Jessica</span> a self-taught & award-winning
                <span> Web Designer & Developer</span> with over{" "}
                <span>fifteen years of work experience</span>. I started in my
                children’s room and got pro at renowned <span>Ren Tech</span>{" "}
                Agencies.
              </h3>
              <p className="odio" data-aos="fade-up">
                Urna neque sollicitudin odio tempus eleifend est. Vestibulum
                dictum turpis diam arcu rutrum interdum aliquet iaculis.
              </p>
              <p className="explore-me" data-aos="fade-right">
                <Link to="about.html#explore-me">
                  EXPLORE ME
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
                      />
                      <path
                        d="M20 21.3333L25.3333 16"
                        stroke="#FFDB59"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 10.6666L25.3333 16"
                        stroke="#FFDB59"
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
        </div>
      </section>
      {/* <!-- ====================================== Section Two End ===================================== --> */}
    </>
  );
};
export default SectionTwo;
