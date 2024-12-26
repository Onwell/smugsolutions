import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../common/Header";
import Loader from "../../../common/Loader";
import HelloImg1 from "../../../assets/images/portfolio-slider/hello1.jpg";
import HelloImg2 from "../../../assets/images/portfolio-slider/hello2.jpg";
import HelloImg3 from "../../../assets/images/portfolio-slider/hello3.jpg";
import HelloImg4 from "../../../assets/images/portfolio-slider/hello4.jpg";
import SliderImg1 from "../../../assets/images/portfolio-slider/slider-img1.jpg";
import SliderImg2 from "../../../assets/images/portfolio-slider/slider-img2.jpg";
import SliderImg3 from "../../../assets/images/portfolio-slider/slider-img3.jpg";
import SliderImg4 from "../../../assets/images/portfolio-slider/slider-img4.jpg";
import SliderImg5 from "../../../assets/images/portfolio-slider/slider-img5.jpg";
import ProgressCircle from "../../../common/ProgressCircle";

const PortfolioPageSeven = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [mainImageSrc, setMainImageSrc] = useState("");

  const handleThumbnailHover = (src) => {
    setMainImageSrc(src);
  };

  const handleMainImageClick = (src) => {
    setOverlayVisible(true);
    setMainImageSrc(src);
  };

  const handleOverlayClick = () => {
    setOverlayVisible(false);
  };

  return (
    <>
      <Loader />
      <div className="site_contain">
        {/* <!-- ====================================== Header Menu ===================================== --> */}
        <Header />
        {/* <!-- ====================================== Header Menu End===================================== --> */}

        {/* <!-- ====================================== Portfolio Section One ===================================== --> */}
        <section className="fixed-sideimg">
          <h1 className="d-none">hidden</h1>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 position-relative">
              <div className="fix-side-image" id="main-img">
                <img
                  src={mainImageSrc}
                  alt="Main Image"
                  onClick={() => handleMainImageClick(mainImageSrc)}
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="fix-page-grid-images">
                {[
                  { src: HelloImg3, text: "Serene Sunset" },
                  { src: HelloImg4, text: "Urban Exploration" },
                  { src: SliderImg1, text: "Tranquil Waters" },
                  { src: SliderImg2, text: "Majestic Mountains" },
                  { src: SliderImg3, text: "Vibrant Cityscape" },
                  { src: SliderImg4, text: "Dynamic Architecture" },
                  { src: SliderImg5, text: "Coastal Charm" },
                  { src: HelloImg1, text: "Rustic Elegance" },
                  { src: SliderImg1, text: "Vintage Vibes" },
                  { src: HelloImg2, text: "Enchanted Forest" },
                ].map((item, index) => (
                  <div className="thumb" key={index}>
                    <Link to="/single_portfolio">
                      <img
                        src={item.src}
                        alt={item.text}
                        onMouseEnter={() => handleThumbnailHover(item.src)}
                      />
                      <div className="overlay-imgs">
                        <p>{item.text}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Overlay section */}
            {overlayVisible && (
              <div
                id="overlay"
                className="overlay"
                onClick={handleOverlayClick}
              >
                <img src={mainImageSrc} alt="Overlay Image" />
              </div>
            )}
          </div>
        </section>
        {/* <!-- ====================================== Progress Scroll Bottom To Top ===================================== --> */}
        <ProgressCircle />
        {/* <!-- ====================================== Progress Scroll Bottom To Top End ===================================== --> */}
      </div>
    </>
  );
};
export default PortfolioPageSeven;
