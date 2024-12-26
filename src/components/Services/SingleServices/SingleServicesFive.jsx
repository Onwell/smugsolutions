import React, { useEffect } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import SingleServiceCommon from "../SingleServiceCommon";
import OtherServices from "../OtherServices";
import SingleServicesMainImg from "../../../assets/images/single-services-main-img.jpg";
import SoundCloudBtn from "../../../assets/images/sound-cloud-logo-btn.png";
import LatestProjectImages from "../LatestProjectImges";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import ProgressCircle from "../../../common/ProgressCircle";

const playSoundCloudMusic = (event) => {
  const container = event.currentTarget;
  const cover = container.querySelector(".cover");
  const playButton = container.querySelector(".play-button");
  const iframe = container.querySelector(".sc-player");

  cover.style.display = "none";
  playButton.style.display = "none";
  iframe.src =
    "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/alanwalker/faded-slushii-remix-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
  iframe.style.display = "block";
};

const SingleServicesFive = () => {
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
                onClick={playSoundCloudMusic}
              >
                <img
                  className="cover"
                  src={SingleServicesMainImg}
                  alt="Cover Image"
                />
                <img
                  className="play-button sound-cloud-btn"
                  src={SoundCloudBtn}
                  alt="Play Button"
                />
                <iframe
                  id="soundcloud-music"
                  className="sc-player"
                  style={{ display: "none" }}
                ></iframe>
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
export default SingleServicesFive;
