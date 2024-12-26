import React, { useEffect } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import SingleServiceCommon from "../SingleServiceCommon";
import OtherServices from "../OtherServices";
import LatestProjectImages from "../LatestProjectImges";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import SingleServicesMainImg from "../../../assets/images/single-services-main-img.jpg";
import SingleBlogImg from "../../../assets/images/single-blog-main-img.jpg";
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import RightArrow from "../../../assets/images/slider-right-arrow.svg";
import LeftArrow from "../../../assets/images/slider-left-arrow.svg";
import ProgressCircle from "../../../common/ProgressCircle";

const SingleServicesFour = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
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
            <div className="single-services-img-main" data-aos="fade-up">
              <Slider
                {...settings}
                className="services-gallery-main single-services-main-img"
              >
                <div>
                  <img src={SingleServicesMainImg} alt="gallery-img1" />
                </div>
                <div>
                  <img src={SingleBlogImg} alt="gallery-img2" />
                </div>
                <div>
                  <img src={SingleServicesMainImg} alt="gallery-img3" />
                </div>
                <div>
                  <img src={SingleBlogImg} alt="gallery-img4" />
                </div>
              </Slider>
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
export default SingleServicesFour;
