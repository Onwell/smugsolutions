import React, { useEffect } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import OtherServices from "../OtherServices";
import LatestProjectImages from "../../Services/LatestProjectImges";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import SingleServicesMainImg from "../../../assets/images/single-services-main-img.jpg";
import SoundCloudBtn from "../../../assets/images/sound-cloud-logo-btn.png";
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

const SinglePortfolioSix = () => {
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
export default SinglePortfolioSix;
