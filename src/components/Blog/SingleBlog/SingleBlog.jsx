import React, { useEffect, useState } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import SectionTwo from "../SectionTwo";
import SingleBlogImg from "../../../assets/images/single-blog-main-img.jpg";
import ProgressCircle from "../../../common/ProgressCircle";
import Cursor from "../../../common/Cursor";

const SingleBlog = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Loader />
      <div className="site_contain">
        {/* <!-- ====================================== Cusrsor ===================================== --> */}
        <Cursor />
        {/* <!-- ====================================== Cursor End ===================================== --> */}
        {/* <!-- ====================================== Header Menu ===================================== --> */}
        <Header />
        {/* <!-- ====================================== Header Menu End===================================== --> */}
        {/* <!-- ====================================== single blog Section One ===================================== --> */}
        <section className="section-main overflow-hidden" id="section-main-id">
          <div className="container">
            <p className="main-text my-services" data-aos="fade-down">
              LATEST BLOGS
            </p>
            <h1 className="ui-ux" data-aos="fade-down">
              Best 10 App for Digital Transformation
            </h1>
          </div>
        </section>
        {/* <!-- ====================================== single blog Section One End===================================== --> */}
        {/* <!-- ====================================== single blog Section Two ===================================== --> */}
        <section className="section-two-my-services">
          <div className="container">
            <div className="single-services-img-main bike" data-aos="fade-up">
              <img
                className="single-services-main-img move-img"
                src={SingleBlogImg}
                alt="single-blog-main-img"
              />
            </div>
            <SectionTwo />
          </div>
        </section>
        {/* <!-- ====================================== single blog Section Two End ===================================== --> */}
        {/* <!-- ====================================== text Marquee Section  ===================================== --> */}

        <TextMarqueAboutSection />
        {/* <!-- ====================================== text Marquee Section End ===================================== --> */}
        {/* <!-- ====================================== Footer ===================================== --> */}
        <Footer />
        {/* <!-- ====================================== Progress Scroll Bottom To Top ===================================== --> */}
        <ProgressCircle />
        {/* <!-- ====================================== Progress Scroll Bottom To Top End ===================================== --> */}
      </div>
    </>
  );
};
export default SingleBlog;
