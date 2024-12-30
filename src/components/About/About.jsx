import React, { useEffect } from "react";
import AOS from "aos";
import Loader from "../../common/Loader";
import Header from "../../common/Header";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import CounterSection from "./CounterSection";
import TestimonialSlider from "../../common/TestimonialSlider";
import BrandsMarqueSection from "../../common/BrandsMarqueSection";
import Footer from "../../common/Footer";
import ProgressCircle from "../../common/ProgressCircle";
import Cursor from "../../common/Cursor";

const About = () => {
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
        {/* <!-- ====================================== About Section One Start ===================================== --> */}
        <SectionOne />
        {/* <!-- ====================================== About Section One End ===================================== --> */}
        {/* <!-- ====================================== About Section Two Start ===================================== --> */}
        <SectionTwo />
        {/* <!-- ====================================== About Section Two End ===================================== --> */}
        {/* <!-- ====================================== About Section Counter ===================================== --> */}
        <CounterSection />
        {/* <!-- ====================================== About Section Counter ===================================== --> */}
        {/* <!-- ====================================== Testimonial Slider ===================================== --> */}
        <TestimonialSlider />
        {/* <!-- ====================================== Testimonial Slider End ===================================== --> */}
        {/* <!-- ====================================== Brands Marquee Section Start ===================================== --> */}
        <BrandsMarqueSection />
        {/* <!-- ====================================== Brands Marquee Section End ===================================== --> */}
        {/* <!-- ====================================== Footer ===================================== --> */}
        <Footer />
        {/* <!-- ====================================== Progress Scroll Bottom To Top ===================================== --> */}
        <ProgressCircle />
        {/* <!-- ====================================== Progress Scroll Bottom To Top End ===================================== --> */}
      </div>
    </>
  );
};
export default About;
