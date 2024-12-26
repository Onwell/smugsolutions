import React, { useEffect, useState } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import SingleServiceCommon from "../SingleServiceCommon";
import OtherServices from "../OtherServices";
import SingleServicesMainImg from "../../../assets/images/single-services-main-img.jpg";
import VimeoBtn from "../../../assets/images/vimeo-btn.png";
import LatestProjectImages from "../LatestProjectImges";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import ProgressCircle from "../../../common/ProgressCircle";

const SingleServicesThree = () => {
  const [videoStarted, setVideoStarted] = useState(false);

  const playVimeoVideo = () => {
    setVideoStarted(true);
  };

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
            <div className="single-services-img-main" data-aos="fade-up">
              <div
                className="video-container single-services-main-img"
                onClick={playVimeoVideo}
              >
                {!videoStarted && (
                  <>
                    <img
                      className="cover"
                      src={SingleServicesMainImg}
                      alt="Cover Image"
                    />
                    <img
                      className="play-button"
                      src={VimeoBtn}
                      alt="Play Button"
                    />
                  </>
                )}
                {videoStarted && (
                  <iframe
                    id="vimeo-video"
                    src="https://player.vimeo.com/video/76979871?autoplay=1"
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
export default SingleServicesThree;
