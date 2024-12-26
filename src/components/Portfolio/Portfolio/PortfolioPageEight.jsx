import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import GalleryImg1 from "../../../assets/images/gallery/gallery-img1.jpg";
import GalleryImg2 from "../../../assets/images/gallery/gallery-img2.jpg";
import GalleryImg3 from "../../../assets/images/gallery/gallery-img3.jpg";
import GalleryImg4 from "../../../assets/images/gallery/gallery-img4.jpg";
import GalleryImg5 from "../../../assets/images/gallery/gallery-img5.jpg";
import GalleryImg6 from "../../../assets/images/gallery/gallery-img6.jpg";
import GalleryImg7 from "../../../assets/images/gallery/gallery-img7.jpg";
import GalleryImg8 from "../../../assets/images/gallery/gallery-img8.jpg";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import Fancybox from "./FancyBox";
import ProgressCircle from "../../../common/ProgressCircle";

const PortfolioPageEight = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Loader />
      <div className="site_contain">
        {/* <!-- ====================================== Header Menu ===================================== --> */}
        <Header />
        {/* <!-- ====================================== Header Menu End===================================== --> */}
        {/* <!-- ====================================== Portfolio Section One ===================================== --> */}
        <section className="gems-gallery">
          <h1 className="gems">Gallery Gems</h1>
          <div className="main">
            <Fancybox
              options={{
                Carousel: {
                  infinite: false,
                },
              }}
            >
              <div className="container main-container2">
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg1}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg1} alt="gallery-img1" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg2}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg2} alt="gallery-img2" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg3}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg3} alt="gallery-img3" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg4}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg4} alt="gallery-img4" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg5}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg5} alt="gallery-img5" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg6}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg6} alt="gallery-img6" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg7}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg7} alt="gallery-img7" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg8}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg8} alt="gallery-img8" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg3}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg3} alt="gallery-img3" />
                    </Link>
                  </div>
                </div>
              </div>
            </Fancybox>
          </div>
        </section>

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
export default PortfolioPageEight;
