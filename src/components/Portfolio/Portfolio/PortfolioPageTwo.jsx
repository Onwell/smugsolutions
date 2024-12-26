import React, { useEffect, useState } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import { Link } from "react-router-dom";
import SingleServicesImg1 from "../../../assets/images/single-services-project-img1.jpg";
import SingleServicesImg2 from "../../../assets/images/single-services-project-img2.jpg";
import SingleServicesImg3 from "../../../assets/images/single-services-project-img3.jpg";
import SinglePortfolioImg1 from "../../../assets/images/single-portfolio-over-img1.jpg";
import SinglePortfolioImg2 from "../../../assets/images/single-portfolio-over-img2.jpg";
import SeoImplement from "../../../assets/images/seo-implemnts.jpg";
import EffectiveImg from "../../../assets/images/effective-img.jpg";
import DigitalMarketingImg from "../../../assets/images/digital-marketing-img.jpg";
import NewsImg2 from "../../../assets/images/news-img2.jpg";
import BrandsMarqueSection from "../../../common/BrandsMarqueSection";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import ProgressCircle from "../../../common/ProgressCircle";

const PortfolioPageTwo = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <Loader />
      <div className="site_contain">
        {/* <!-- ====================================== Header Menu ===================================== --> */}
        <Header />
        {/* <!-- ====================================== Header Menu End===================================== --> */}
        {/* <!-- ====================================== Portfolio Section One ===================================== --> */}
        <section
          className="single-blog2-section-main overflow-hidden"
          id="main"
        >
          <div className="container">
            <p className="main-text" data-aos="fade-down">
              My Portfolio
            </p>
            <h1 className="JessicaBiogi blog2-main-text" data-aos="fade-down">
              Selected Work
            </h1>
            <nav aria-label="breadcrumb" id="breadcrumb" data-aos="fade-up">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <Link to="/portfolio2">Portfolio</Link>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        {/* <!-- ====================================== Portfolio Section One End ===================================== --> */}
        {/* <!-- ================== Portfolio Section Two ===============================--> */}
        <section className="section-five section-five-portfolio overflow-hidden">
          <div className="container">
            <p className="our-services discover-our-cases" data-aos="fade-up">
              DISCOVER OUR CASES
            </p>
            <div className="tab-header">
              <div>
                <h2
                  className="our-solution latest_project"
                  data-aos="fade-down"
                >
                  Latest Projects.
                </h2>
              </div>
              <div className="tab-bar" data-aos="fade-up">
                <button
                  className={`tab-button ${
                    activeTab === "tab1" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab1")}
                  data-tab="tab1"
                >
                  <span>9</span>ALL
                </button>
                <button
                  className={`tab-button ${
                    activeTab === "tab2" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab2")}
                  data-tab="tab2"
                >
                  <span>2</span>CONTENT
                </button>
                <button
                  className={`tab-button ${
                    activeTab === "tab3" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab3")}
                  data-tab="tab3"
                >
                  <span>2</span>GALLERY
                </button>
                <button
                  className={`tab-button ${
                    activeTab === "tab4" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab4")}
                  data-tab="tab4"
                >
                  <span>1</span>HTML VIDEO
                </button>
                <button
                  className={`tab-button ${
                    activeTab === "tab5" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab5")}
                  data-tab="tab5"
                >
                  <span>1</span>YT VIDEO
                </button>
                <button
                  className={`tab-button ${
                    activeTab === "tab6" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab6")}
                  data-tab="tab6"
                >
                  <span>1</span>VIMEO VIDEO
                </button>
                <button
                  className={`tab-button ${
                    activeTab === "tab7" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab7")}
                  data-tab="tab7"
                >
                  <span>1</span>SOUND CLOUD
                </button>
              </div>
            </div>
            <div className="tab-content">
              <div
                id="tab1"
                className={`tab-pane tab-pane2 ${
                  activeTab === "tab1" ? "active" : ""
                }`}
                data-aos="zoom-in"
              >
                <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 portfolio-hover-box-main">
                    <div className="portfolio-hover-box">
                      <Link to="/single_portfolio">
                        <img
                          src={SingleServicesImg1}
                          alt="single-services-project-img1"
                        />
                        <div className="figcaption">
                          <h3>Unique Product Design</h3>
                          <h4>CONTENT</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 portfolio-hover-box-main">
                    <div className="portfolio-hover-box">
                      <Link to="/single_portfolio">
                        <img
                          src={SingleServicesImg2}
                          alt="single-services-project-img2"
                        />
                        <div className="figcaption">
                          <h3>Mobile App Car Rental</h3>
                          <h4>GALLERY</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 portfolio-hover-box-main">
                    <div className="portfolio-hover-box">
                      <Link to="/single_portfolio">
                        <img
                          src={SingleServicesImg3}
                          alt="single-services-project-img3"
                        />
                        <div className="figcaption">
                          <h3>Ecommerce Website UI</h3>
                          <h4>HTML Video</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 portfolio-hover-box-main">
                    <div className="portfolio-hover-box">
                      <Link to="/single_portfolio">
                        <img
                          src={SinglePortfolioImg1}
                          alt="single-portfolio-over-img1"
                        />
                        <div className="figcaption">
                          <h3>Product Development</h3>
                          <h4>YT Video</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 portfolio-hover-box-main">
                    <div className="portfolio-hover-box">
                      <Link to="/single_portfolio">
                        <img
                          src={SinglePortfolioImg2}
                          alt="single-portfolio-over-img2"
                        />
                        <div className="figcaption">
                          <h3>SOUND CLOUD</h3>
                          <h4>Next Generation</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 portfolio-hover-box-main">
                    <div className="portfolio-hover-box">
                      <Link to="/single_portfolio">
                        <img src={NewsImg2} alt="news-img2" />
                        <div className="figcaption">
                          <h3>Avtar Yoga Space</h3>
                          <h4>YT Video</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 portfolio-hover-box-main">
                    <div className="portfolio-hover-box">
                      <Link to="/single_portfolio">
                        <img src={SeoImplement} alt="seo-implemnts" />
                        <div className="figcaption">
                          <h3>Product Design</h3>
                          <h4>HTML Video</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 portfolio-hover-box-main">
                    <div className="portfolio-hover-box">
                      <Link to="/single_portfolio">
                        <img src={EffectiveImg} alt="effective-img" />
                        <div className="figcaption">
                          <h3>UI-UX Design</h3>
                          <h4>Content</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 portfolio-hover-box-main mb-0">
                    <div className="portfolio-hover-box">
                      <Link to="/single_portfolio">
                        <img
                          src={DigitalMarketingImg}
                          alt="digital-marketing-img"
                        />
                        <div className="figcaption">
                          <h3>Seo Ranking</h3>
                          <h4>Sound Cloud</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="tab2"
                className={`tab-pane tab-pane2 ${
                  activeTab === "tab2" ? "active" : ""
                }`}
              >
                <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 portfolio-hover-box-main">
                    <div className="portfolio-hover-box">
                      <Link to="/single_portfolio">
                        <img src={EffectiveImg} alt="effective-img" />
                        <div className="figcaption">
                          <h3>UI-UX Design</h3>
                          <h4>Content</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 portfolio-hover-box-main">
                    <div className="portfolio-hover-box">
                      <Link to="/single_portfolio">
                        <img
                          src={SingleServicesImg1}
                          alt="single-services-project-img1"
                        />
                        <div className="figcaption">
                          <h3>Unique Product Design</h3>
                          <h4>CONTENT</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="tab3"
                className={`tab-pane tab-pane2 ${
                  activeTab === "tab3" ? "active" : ""
                }`}
              >
                <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 portfolio-hover-box-main">
                    <div className="portfolio-hover-box">
                      <Link to="/single_portfolio">
                        <img
                          src={SingleServicesImg2}
                          alt="single-services-project-img2"
                        />
                        <div className="figcaption">
                          <h3>Mobile App Car Rental</h3>
                          <h4>GALLERY</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 portfolio-hover-box-main">
                    <div className="portfolio-hover-box">
                      <Link to="/single_portfolio">
                        <img
                          src={SingleServicesImg1}
                          alt="single-services-project-img2"
                        />
                        <div className="figcaption">
                          <h3>Mobile App Car Rental</h3>
                          <h4>GALLERY</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="tab4"
                className={`tab-pane tab-pane2 ${
                  activeTab === "tab4" ? "active" : ""
                }`}
              >
                <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 portfolio-hover-box-main">
                    <div className="portfolio-hover-box">
                      <Link to="/single_portfolio">
                        <img
                          src={SingleServicesImg1}
                          alt="single-services-project-img3"
                        />
                        <div className="figcaption">
                          <h3>Ecommerce Website UI</h3>
                          <h4>HTML Video</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="tab5"
                className={`tab-pane tab-pane2 ${
                  activeTab === "tab5" ? "active" : ""
                }`}
              >
                <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 portfolio-hover-box-main">
                    <div className="portfolio-hover-box">
                      <Link to="/single_portfolio">
                        <img src={NewsImg2} alt="news-img2" />
                        <div className="figcaption">
                          <h3>Avtar Yoga Space</h3>
                          <h4>YT Video</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="tab6"
                className={`tab-pane tab-pane2 ${
                  activeTab === "tab6" ? "active" : ""
                }`}
              >
                <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 portfolio-hover-box-main">
                    <div className="portfolio-hover-box">
                      <Link to="/single_portfolio">
                        <img
                          src={SingleServicesImg1}
                          alt="single-services-project-img1"
                        />
                        <div className="figcaption">
                          <h3>Avtar Yoga Space</h3>
                          <h4>YT Video</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="tab7"
                className={`tab-pane tab-pane2 ${
                  activeTab === "tab7" ? "active" : ""
                }`}
              >
                <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 portfolio-hover-box-main">
                    <div className="portfolio-hover-box">
                      <Link to="/single_portfolio">
                        <img
                          src={SinglePortfolioImg2}
                          alt="single-portfolio-over-img2"
                        />
                        <div className="figcaption">
                          <h3>SOUND CLOUD</h3>
                          <h4>Next Generation</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ================== Portfolio Section Two End ===============================--> */}
        {/* <!-- ====================================== Brands Marquee Section Start ===================================== --> */}
        <BrandsMarqueSection />
        {/* <!-- ====================================== Brands Marquee Section End ===================================== --> */}
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
export default PortfolioPageTwo;
