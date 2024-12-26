import React, { useEffect } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import SectionHeadingContent from "../SectionHedingContent";
import SingleSectionTwo from "../SingleSectionTwo";
import LatestProjectImages from "../../Services/LatestProjectImges";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import ProgressCircle from "../../../common/ProgressCircle";

const SinglePortfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Loader />
      <div className="site_contain">
        {/* <!-- ====================================== Header Menu ===================================== --> */}
        <Header />
        {/* <!-- ====================================== Header Menu End===================================== --> */}
        {/* <!-- ====================================== single portfolio Section Heading Content ===================================== --> */}
        <SectionHeadingContent />
        {/* <!-- ====================================== single portfolio Section Heading Content ===================================== --> */}
        {/* <!-- ================== Single Portfolio Section Two ===============================--> */}
        <SingleSectionTwo />
        {/* <!-- ================== Single Portfolio Section Two End ===============================--> */}
        {/* <!-- ================== Latest Project Section  ===============================--> */}
        <LatestProjectImages />
        {/* <!-- ================== Latest Project Section End ===============================--> */}
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
export default SinglePortfolio;
