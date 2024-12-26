import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import HelloImg1 from "../../../assets/images/portfolio-slider/hello1.jpg";
import HelloImg2 from "../../../assets/images/portfolio-slider/hello2.jpg";
import HelloImg3 from "../../../assets/images/portfolio-slider/hello3.jpg";
import HelloImg4 from "../../../assets/images/portfolio-slider/hello4.jpg";
import SliderImg1 from "../../../assets/images/portfolio-slider/slider-img1.jpg";
import SliderImg2 from "../../../assets/images/portfolio-slider/slider-img2.jpg";
import SliderImg3 from "../../../assets/images/portfolio-slider/slider-img3.jpg";
import SliderImg4 from "../../../assets/images/portfolio-slider/slider-img4.jpg";
import SliderImg5 from "../../../assets/images/portfolio-slider/slider-img5.jpg";
import Video from "../../../assets/video/waterfall.mp4";
import ProgressCircle from "../../../common/ProgressCircle";

const PortfolioPageFour = () => {
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
        <section className=" fixed-sideimg">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 position-relative">
              <video
                autoPlay
                muted
                loop
                className="fix-side-video aos-init aos-animate"
                data-aos="fade-right"
              >
                <source src={Video} type="video/mp4" />
              </video>
              <div className="gradient-overlay"></div>
              <div className="text-overlay">
                <h1>My Portfolio</h1>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="fix-page-grid-images">
                <div className="view view-tenth">
                  <img src={HelloImg3} alt="hello3" />
                  <div className="mask">
                    <h2>Ecommerce Website UI</h2>
                    <Link className="info" to="/single_portfolio3">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="view view-tenth">
                  <img src={HelloImg4} alt="hello4" />
                  <div className="mask">
                    <h2>Product Development</h2>
                    <Link className="info" to="/single_portfolio3">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="view view-tenth">
                  <img src={SliderImg1} alt="slider-img1" />
                  <div className="mask">
                    <h2>Next Generation</h2>
                    <Link className="info" to="/single_portfolio3">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="view view-tenth">
                  <img src={SliderImg2} alt="slider-img2" />
                  <div className="mask">
                    <h2>Avtar Yoga Space</h2>
                    <Link className="info" to="/single_portfolio3">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="view view-tenth">
                  <img src={SliderImg3} alt="slider-img3" />
                  <div className="mask">
                    <h2>Mobile App for Car Rental</h2>
                    <Link className="info" to="/single_portfolio3">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="view view-tenth">
                  <img src={SliderImg4} alt="slider-img4" />
                  <div className="mask">
                    <h2>Unique Product Design</h2>
                    <Link className="info" to="/single_portfolio3">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="view view-tenth">
                  <img src={SliderImg5} alt="slider-img5" />
                  <div className="mask">
                    <h2>Product Development</h2>
                    <Link className="info" to="/single_portfolio3">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="view view-tenth">
                  <img src={HelloImg1} alt="hello1" />
                  <div className="mask">
                    <h2>Unique Product Design</h2>
                    <Link className="info" to="/single_portfolio3">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="view view-tenth">
                  <img src={SliderImg1} alt="slider-img1" />
                  <div className="mask">
                    <h2>Unique Product Design</h2>
                    <Link className="info" to="/single_portfolio3">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="view view-tenth">
                  <img src={HelloImg2} alt="hello2" />
                  <div className="mask">
                    <h2>Mobile App for Car Rental</h2>
                    <Link className="info" to="/single_portfolio3">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ====================================== Progress Scroll Bottom To Top ===================================== --> */}
        <ProgressCircle />
        {/* <!-- ====================================== Progress Scroll Bottom To Top End ===================================== --> */}
      </div>
    </>
  );
};
export default PortfolioPageFour;
