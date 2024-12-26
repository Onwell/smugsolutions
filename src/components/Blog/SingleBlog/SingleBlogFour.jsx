import React, { useEffect, useState } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import SectionTwo from "../SectionTwo";
import SingleBlogImg from "../../../assets/images/single-blog-main-img.jpg";
import VimeoBtn from "../../../assets/images/vimeo-btn.png";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import ProgressCircle from "../../../common/ProgressCircle";
import Cursor from "../../../common/Cursor";

const SingleBlogFour = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [videoStarted, setVideoStarted] = useState(false);

  const playVimeoVideo = () => {
    setVideoStarted(true);
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
              <div
                className="video-container single-services-main-img"
                onClick={playVimeoVideo}
              >
                {!videoStarted && (
                  <>
                    <img
                      className="cover"
                      src={SingleBlogImg}
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
export default SingleBlogFour;
