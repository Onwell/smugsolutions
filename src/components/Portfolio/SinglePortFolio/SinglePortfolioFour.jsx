import React, { useEffect, useState } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import SingleServicesMainImg from "../../../assets/images/single-services-main-img.jpg";
import VimeoBtn from "../../../assets/images/vimeo-btn.png";
import OtherServices from "../OtherServices";
import LatestProjectImages from "../../Services/LatestProjectImges";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import ProgressCircle from "../../../common/ProgressCircle";

const SinglePortfolioFour = () => {
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
export default SinglePortfolioFour;
