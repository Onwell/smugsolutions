import React, { useEffect } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import SectionTwo from "../SectionTwo";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import SingleBlogImg from "../../../assets/images/single-blog-main-img.jpg";
import SingleMainImg from "../../../assets/images/single-services-main-img.jpg";
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import RightArrow from "../../../assets/images/slider-right-arrow.svg";
import LeftArrow from "../../../assets/images/slider-left-arrow.svg";
import ProgressCircle from "../../../common/ProgressCircle";
import Cursor from "../../../common/Cursor";

const SingleBlogFive = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dots: false,
    speed: 1600,
    prevArrow: (
      <button type="button" className="services-gallery-main-prev">
        <img src={LeftArrow} alt="slider-right-arrow" />
      </button>
    ),
    nextArrow: (
      <button type="button" className="services-gallery-main-next">
        <img src={RightArrow} alt="slider-left-arrow" />
      </button>
    ),
  };
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
            <div className="single-services-img-main" data-aos="fade-up">
              <Slider
                {...settings}
                className="services-gallery-main single-services-main-img"
              >
                <div>
                  <img src={SingleMainImg} alt="gallery-img1" />
                </div>
                <div>
                  <img src={SingleBlogImg} alt="gallery-img2" />
                </div>
                <div>
                  <img src={SingleMainImg} alt="gallery-img3" />
                </div>
                <div>
                  <img src={SingleBlogImg} alt="gallery-img4" />
                </div>
              </Slider>
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
export default SingleBlogFive;
