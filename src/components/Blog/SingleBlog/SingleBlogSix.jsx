import React, { useEffect } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import SingleMainImg from "../../../assets/images/single-services-main-img.jpg";
import SoundCloudBtn from "../../../assets/images/sound-cloud-logo-btn.png";
import SectionTwo from "../SectionTwo";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import ProgressCircle from "../../../common/ProgressCircle";
import Cursor from "../../../common/Cursor";

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

const SingleBlogSix = () => {
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
                onClick={playSoundCloudMusic}
              >
                <img className="cover" src={SingleMainImg} alt="Cover Image" />
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
export default SingleBlogSix;
