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
                alt="Onwell"
                data-aos="fade-left"
              />
              <div className="hwlo">
                <img className="years-img" src={YearsImg} alt="years-img" />
                <div className="digit">4</div>
                <div className="circle-text">
                  YEARS OF
                  <br /> WORKING EXPERICE
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <h3 className="self-taught" data-aos="fade-up">
                Hello! I’m <span>Onwell</span> a self-taught & award-winning
                <span> Web & Graphic Designer</span> with over{" "}
                <span>fifteen years of work experience</span>. I started in my
                children’s room and got pro at renowned <span>Ren Tech</span>{" "}
                Agencies.
              </h3>
              <p className="odio" data-aos="fade-up">
                Urna neque sollicitudin odio tempus eleifend est. Vestibulum
                dictum turpis diam arcu rutrum interdum aliquet iaculis.
              </p>
              <p className="explore-me" data-aos="fade-right">
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
