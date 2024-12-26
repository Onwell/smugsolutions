import React, { useEffect, useState } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import SingleServicesMainImg from "../../../assets/images/single-services-main-img.jpg";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import SingleServiceCommon from "../SingleServiceCommon";
import LatestProjectImages from "../LatestProjectImges";
import OtherServices from "../OtherServices";
import ProgressCircle from "../../../common/ProgressCircle";
const SingleServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Loader />
      <div className="site_contain">
        {/* <!-- ====================================== Header Menu ===================================== --> */}
        <Header />
        {/* <!-- ====================================== Header Menu End===================================== --> */}
        {/* <!-- ====================================== single Services Section  ===================================== --> */}
        <SingleServiceCommon />
        {/* <!-- ====================================== single Services Section ===================================== --> */}
        {/* <!-- ====================================== single Services Section Two ===================================== --> */}
        <section className="section-two-my-services">
          <div className="container">
            <div className="single-services-img-main bike" data-aos="fade-up">
              <img
                className="single-services-main-img move-img"
                src={SingleServicesMainImg}
                alt="single-services-main-img"
              />
            </div>
            <OtherServices />
          </div>
        </section>
        {/* <!-- ====================================== single Services Section Two End===================================== --> */}
        {/* <!-- ====================================== single Services Section Three ===================================== --> */}
        <LatestProjectImages />
        {/* <!-- ====================================== single Services Section Three End ===================================== --> */}
        {/* <!-- ====================================== text Marquee Section Start ===================================== --> */}
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
export default SingleServices;
