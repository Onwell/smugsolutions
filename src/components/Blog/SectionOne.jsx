import React, { useEffect } from "react";
import AOS from "aos";
import FlowerImg from "../../assets/images/flower.png";
import BlogImgMain from "../../assets/images/blog-main-img.png";
import AboutArrow from "../../assets/images/about-arrow-main.png";

const SectionOne = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/* <!-- ====================================== Blog Section One ===================================== --> */}
      <section className="section-main overflow-hidden" id="main">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <p className="main-text about-hello" data-aos="fade-down">
                NEWS
              </p>
              <h1 className="JessicaBiogi" data-aos="fade-down">
                Latest Blog
              </h1>
              <p className="Freelance about-freelance" data-aos="fade-down">
                Metus montes facilisis nulla eros nascetur accumsan nibh
                facilisi. Euismod amet amet pharetra turpis eleifend sed.
                Volutpat turpis ut amet nec feugiat orci.
              </p>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 about-main-img-sec">
              <img className=" blog-flower-img" src={FlowerImg} alt="flower" />
              <img
                className="about-img-main"
                src={BlogImgMain}
                alt="blog-main-img"
                data-aos="fade-left"
              />
              <img
                className="about-arrow-main"
                id="arrow"
                src={AboutArrow}
                alt="about-arrow-main"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Blog Section One End ===================================== --> */}
    </>
  );
};
export default SectionOne;
