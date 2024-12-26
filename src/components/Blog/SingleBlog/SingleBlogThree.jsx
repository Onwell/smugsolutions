import React, { useEffect, useState } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import SectionTwo from "../SectionTwo";
import SingleBlogImg from "../../../assets/images/single-blog-main-img.jpg";
import Youtube from "../../../assets/images/youtube-logo.png";
import ProgressCircle from "../../../common/ProgressCircle";
import Cursor from "../../../common/Cursor";

const SingleBlogThree = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
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
            <div className="single-services-img-main bike" data-aos="fade-up">
              <div
                className="video-container single-services-main-img"
                onClick={playVideo}
              >
                {!isPlaying && (
                  <>
                    <img
                      className="cover"
                      src={SingleBlogImg}
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
export default SingleBlogThree;
