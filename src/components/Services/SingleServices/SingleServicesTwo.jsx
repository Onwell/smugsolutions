import React, { useEffect, useState } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import SingleServiceCommon from "../SingleServiceCommon";
import SingleServicesMainImg from "../../../assets/images/single-services-main-img.jpg";
import Youtube from "../../../assets/images/youtube-logo.png";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import LatestProjectImages from "../LatestProjectImges";
import OtherServices from "../OtherServices";
import ProgressCircle from "../../../common/ProgressCircle";

const SingleServicesTwo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
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
              <div
                className="video-container single-services-main-img"
                onClick={playVideo}
              >
                {!isPlaying && (
                  <>
                    <img
                      className="cover"
                      src={SingleServicesMainImg}
                      alt="Cover Image"
                    />
                    <img
                      className="play-button"
                      src={Youtube}
                      alt="Play Button"
                    />
                  </>
                )}
                {isPlaying && (
                  <iframe
                    id="youtube-video"
                    src="https://www.youtube.com/embed/f7sIhhjIBzc?autoplay=1"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
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
export default SingleServicesTwo;
