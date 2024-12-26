import React, { useEffect } from "react";
import AOS from "aos";
import Loader from "../../common/Loader";
import Header from "../../common/Header";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import CounterSection from "./CounterSection";
import MarqueSection from "../../common/MarqueSection";
import SectionFour from "./SectionFour";
import TestimonialSlider from "../../common/TestimonialSlider";
import BrandsMarqueSection from "../../common/BrandsMarqueSection";
import Footer from "../../common/Footer";
import TextMarqueAboutSection from "./TextMarqueAboutSection";
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
        {/* <!-- ====================================== About Section Three Start ===================================== --> */}
        <SectionThree />
        {/* <!-- ====================================== About Section Three End ===================================== --> */}
        {/* <!-- ====================================== User Branding Marquee Section ===================================== --> */}
        <MarqueSection />
        {/* <!-- ====================================== User Branding Marquee Section ===================================== --> */}
        {/* <!-- ====================================== About Section Four ===================================== --> */}
        <SectionFour />
        {/* <!-- ====================================== About Section Four End ===================================== --> */}
        {/* <!-- ====================================== Testimonial Slider ===================================== --> */}
        <TestimonialSlider />
        {/* <!-- ====================================== Testimonial Slider End ===================================== --> */}
        {/* <!-- ====================================== Brands Marquee Section Start ===================================== --> */}
        <BrandsMarqueSection />
        {/* <!-- ====================================== Brands Marquee Section End ===================================== --> */}
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
export default About;
