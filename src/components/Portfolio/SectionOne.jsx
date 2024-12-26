import React from "react";
import FlowerImg from "../../assets/images/flower.png";
import PortfolioImgMain from "../../assets/images/portfolio-main-img.png";
import PortfolioArrow from "../../assets/images/arrow-main.png";

const SectionOne = () => {
  return (
    <>
      {/* <!-- ====================================== Portfolio Section One ===================================== --> */}
      <section className="section-main overflow-hidden" id="main">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <p className="main-text about-hello" data-aos="fade-down">
                My Portfolio
              </p>
              <h1 className="JessicaBiogi" data-aos="fade-down">
                Selected Work
              </h1>
              <p className="Freelance about-freelance" data-aos="fade-down">
                Metus montes facilisis nulla eros nascetur accumsan nibh
                facilisi. Euismod amet amet pharetra turpis eleifend sed.
                Volutpat turpis ut amet nec feugiat orci.
              </p>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 about-main-img-sec">
              <img className="about-flower-img" src={FlowerImg} alt="flower" />
              <img
                className="about-img-main"
                src={PortfolioImgMain}
                alt="portfolio-main-img"
                data-aos="fade-left"
              />
              <img
                className="about-arrow-main"
                id="arrow"
                src={PortfolioArrow}
                alt="about-arrow-main"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Portfolio Section One End ===================================== --> */}
    </>
  );
};
export default SectionOne;
