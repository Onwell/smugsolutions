import React, { useEffect } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import SingleServicesMainImg from "../../../assets/images/single-services-main-img.jpg";
import SingleBlogImg from "../../../assets/images/single-blog-main-img.jpg";
import LatestProjectImages from "../../Services/LatestProjectImges";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import RightArrow from "../../../assets/images/slider-right-arrow.svg";
import LeftArrow from "../../../assets/images/slider-left-arrow.svg";
import OtherServices from "../OtherServices";
import ProgressCircle from "../../../common/ProgressCircle";

const SinglePortfolioFive = () => {
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
        {/* <!-- ====================================== Header Menu ===================================== --> */}
        <Header />
        {/* <!-- ====================================== Header Menu End===================================== --> */}
        {/* <!-- ====================================== single portfolio Section One ===================================== --> */}
        <section className="section-main overflow-hidden" id="section-main-id">
          <div className="container">
            <p className="main-text my-services" data-aos="fade-down">
              MY WORK
            </p>
            <h1 className="ui-ux" data-aos="fade-down">
              Unique Product Design
            </h1>
            <p className="Freelance freelance-text2" data-aos="fade-down">
              Ullamcorper nunc mattis volutpat volutpat sed natoque eget
              fermentum. Tortor rhoncus nisl purus cras pharetra sit adipiscing.
              Amet vel blandit dolor neque malesuada venenatis morbi tincidunt
              lorem. Lorem vulputate id in risus adipiscing lectus enim. Semper
              et velit risus arcu in dapibus turpis scelerisque. Et nunc id
              tristique a pharetra accumsan magna. Nibh quis tellus sit integer
              luctus.
            </p>
          </div>
        </section>
        {/* <!-- ================== Single Portfolio Section One End ===============================--> */}
        {/* <!-- ================== Single Portfolio Section Two ===============================--> */}
        <section className="section-two-my-services">
          <div className="container">
            <div className="single-services-img-main bike" data-aos="fade-up">
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
export default SinglePortfolioFive;
