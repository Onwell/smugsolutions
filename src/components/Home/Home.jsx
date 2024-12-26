import React, { useEffect } from "react";
import AOS from "aos";
import SectionOne from "./SectionOne";
import Loader from "../../common/Loader";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSeven from "./SectionSeven";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import TestimonialSlider from "../../common/TestimonialSlider";
import BrandsMarqueSection from "../../common/BrandsMarqueSection";
import ProgressCircle from "../../common/ProgressCircle";
import Cursor from "../../common/Cursor";

const Home = () => {
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
        {/* <!-- ====================================== Section One Start ===================================== --> */}
        <SectionOne />
        {/* <!-- ====================================== Section One End ===================================== --> */}
        {/* <!-- ====================================== Section Two Start===================================== --> */}
        <SectionTwo />
        {/* <!-- ====================================== Section Two End ===================================== --> */}
        {/* <!-- ====================================== Brands Marquee Section Start ===================================== --> */}
        <BrandsMarqueSection />
        {/* <!-- ====================================== Brands Marquee Section End ===================================== --> */}
        {/* <!-- ====================================== Section Three Start===================================== --> */}
        <SectionThree />
        {/* <!-- ====================================== Section Three End===================================== --> */}
        {/* <!-- ====================================== Section Four Start===================================== --> */}
        <SectionFour />
        {/* <!-- ====================================== Section Four End===================================== --> */}
        {/* <!-- ====================================== Section Five ===================================== --> */}
        <SectionFive />
        {/* <!-- ====================================== Section Five ===================================== --> */}
        {/* <!-- ====================================== Section Six ===================================== --> */}
        <TestimonialSlider />
        {/* <!-- ====================================== Section Six ===================================== --> */}
        {/* <!-- ====================================== Section Seven ===================================== --> */}
        <SectionSeven />
        {/* <!-- ====================================== Section Seven ===================================== --> */}
        {/* <!-- ====================================== Footer ===================================== --> */}
        <Footer />
        {/* <!-- ====================================== Progress Scroll Bottom To Top ===================================== --> */}
        <ProgressCircle />
        {/* <!-- ====================================== Progress Scroll Bottom To Top End ===================================== --> */}
      </div>
    </>
  );
};
export default Home;
