import React, { useEffect } from "react";
import AOS from "aos";
import WinnerAward1 from "../../assets/images/winner-award.png";
import WinnerAward2 from "../../assets/images/winner-award2.png";
import WinnerAward3 from "../../assets/images/winner-award3.png";
import WinnerAward4 from "../../assets/images/winner-award4.png";

const SectionFour = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/* <!-- ====================================== About Section Four ===================================== --> */}
      <section className="section-awards overflow-hidden">
        <div className="container">
          <p className="our-services about-awards" data-aos="fade-up">
            AWARDS
          </p>
          <h2 className="our-solution award-achievement" data-aos="fade-up">
            Achievement.
          </h2>
          <div className="row awards-row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="box-item" data-aos="flip-up">
                <div className="flip-box">
                  <div className="flip-box-front">
                    <div className="inner">
                      <p className="award-yer">2025</p>
                      <img
                        className="winner-award"
                        src={WinnerAward1}
                        alt="winner-award4"
                      />
                      <p className="award-interior">Awwwards Interior</p>
                      <p className="award-winner-text">Winner</p>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="inner">
                      <p className="flip-back-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Sit, perferendis!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="box-item" data-aos="flip-up">
                <div className="flip-box">
                  <div className="flip-box-front">
                    <div className="inner">
                      <p className="award-yer">2024</p>
                      <img
                        className="winner-award"
                        src={WinnerAward2}
                        alt="winner-award2"
                      />
                      <p className="award-interior">The Webby Awards</p>
                      <p className="award-winner-text">Nominee</p>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="inner">
                      <p className="flip-back-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Sit, perferendis!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="box-item" data-aos="flip-up">
                <div className="flip-box">
                  <div className="flip-box-front">
                    <div className="inner">
                      <p className="award-yer">2023</p>
                      <img
                        className="winner-award"
                        src={WinnerAward3}
                        alt="winner-award3"
                      />
                      <p className="award-interior">EWA Design</p>
                      <p className="award-winner-text">Winner</p>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="inner">
                      <p className="flip-back-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Sit, perferendis!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="box-item" data-aos="flip-up">
                <div className="flip-box">
                  <div className="flip-box-front">
                    <div className="inner">
                      <p className="award-yer">2022</p>
                      <img
                        className="winner-award"
                        src={WinnerAward4}
                        alt="winner-award4"
                      />
                      <p className="award-interior">BEST Star</p>
                      <p className="award-winner-text">Winner</p>
                    </div>
                  </div>
                  <div className="flip-box-back">
                    <div className="inner">
                      <p className="flip-back-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Sit, perferendis!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== About Section Four End ===================================== --> */}
    </>
  );
};
export default SectionFour;
