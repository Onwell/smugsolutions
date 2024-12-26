import React, { useEffect } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import { Link } from "react-router-dom";
import SinglePortfolioImg1 from "../../../assets/images/single-portfolio2-img1.jpg";
import SinglePortfolioImg2 from "../../../assets/images/single-portfolio2-img2.jpg";
import SinglePortfolioImg3 from "../../../assets/images/single-portfolio2-img3.jpg";
import SinglePortfolioImg4 from "../../../assets/images/single-portfolio2-img4.jpg";
import SinglePortfolioImg5 from "../../../assets/images/single-portfolio2-img5.jpg";
import SinglePortfolioImg6 from "../../../assets/images/single-portfolio2-img6.jpg";
import SinglePortfolioImg7 from "../../../assets/images/single-portfolio2-img7.jpg";
import LatestProjectImages from "../../Services/LatestProjectImges";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import ProgressCircle from "../../../common/ProgressCircle";

const SinglePortfolioTwo = () => {
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
        {/* <!-- ====================================== single portfolio Section One ===================================== --> */}
        <section
          className="single-blog2-section-main overflow-hidden"
          id="main"
        >
          <div className="container">
            <p className="main-text" data-aos="fade-down">
              MY WORK
            </p>
            <h1 className="JessicaBiogi blog2-main-text" data-aos="fade-down">
              Unique Product Design
            </h1>
            <nav aria-label="breadcrumb" id="breadcrumb">
              <ol className="breadcrumb" data-aos="fade-up">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <Link to="/single_portfolio2">Single Portfolio</Link>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        {/* <!-- ================== Single Portfolio Section One End ===============================--> */}
        {/* <!-- ================== Single Portfolio Section Two ===============================--> */}
        <section className="section-two-my-services">
          <div className="container">
            <div className="row single-portfolio2-row-main overflow-hidden">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <img
                  className="single-portfolio2-img1"
                  src={SinglePortfolioImg1}
                  alt="single-portfolio2-img1"
                  data-aos="fade-up"
                />
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div
                  className="dough-main"
                  id="dough-main"
                  data-aos="fade-left"
                >
                  <h2 className="dough">Product Design</h2>
                  <p className="dive ">
                    Lorem ipsum, dolor sit amet adipisicing elit. Assumenda
                    accusantium possimus provident culpa officiis ducimus
                    explicabo?.Doughp wasn't your average cookie dough company.
                  </p>
                </div>
                <div
                  className="portfolio-text-box-right-sub"
                  data-aos="fade-up"
                >
                  <div>
                    <div className="client-detail-portfolio">
                      <p>CLIENT:</p>
                      <h2>Eunice Mills</h2>
                    </div>
                    <div className="client-detail-portfolio">
                      <p>SERVICE:</p>
                      <h2>Development</h2>
                    </div>
                    <div>
                      <p>DATE:</p>
                      <h2>October 6, 2024</h2>
                    </div>
                  </div>
                  <img
                    className="single-portfolio2-img1"
                    src={SinglePortfolioImg2}
                    alt="single-portfolio2-img2"
                    data-aos="fade-up"
                  />
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8 challenge-box">
                <div className="dough-main" data-aos="fade-right">
                  <h2 className="dough">The Challenge</h2>
                  <p className="dive">
                    Doughp wasn't your average cookie dough company. They
                    crafted edible cookie dough - a tantalizing treat that
                    promised the deliciousness of raw dough minus the food
                    poisoning fear. Yet, the "edible" aspect was a double-edged
                    sword. Parents hesitated, wary of the safety claims, while
                    adults questioned the indulgence without the baking payoff.
                  </p>
                  <p className="dive ">
                    your average cookie dough company. They crafted edible
                    cookie dough - a tantalizing treat that promised the
                    indulgence without the baking payoff
                  </p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 challenge-box">
                <img
                  className="single-portfolio2-img1"
                  src={SinglePortfolioImg3}
                  alt="single-portfolio2-img3"
                  data-aos="fade-right"
                />
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 challenge-box">
                <img
                  className="single-portfolio2-img1"
                  src={SinglePortfolioImg4}
                  alt="single-portfolio2-img4"
                  data-aos="fade-left"
                />
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8  challenge-box">
                <div className="dough-main" data-aos="fade-up">
                  <h2 className="dough">Our Approach</h2>
                  <p className="dive">
                    Doughp wasn't your average cookie dough company. They
                    crafted edible cookie dough - a tantalizing treat that
                    promised the deliciousness of raw dough minus the food
                    poisoning fear. Yet, the "edible" aspect was a double-edged
                    sword. Parents hesitated, wary of the safety claims, while
                    adults questioned the indulgence without the baking payoff.
                  </p>
                  <p className="dive ">
                    your average cookie dough company. They crafted edible
                    cookie dough - a tantalizing treat that promised the
                    indulgence without the baking payoff
                  </p>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 challenge-box">
                <img
                  className="single-portfolio2-img1"
                  src={SinglePortfolioImg5}
                  alt="single-portfolio2-img5"
                  data-aos="fade-right"
                />
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 challenge-box">
                <div className="dough-main" data-aos="fade-up">
                  <h2 className="dough">The Solution</h2>
                  <p className="dive ">
                    Lorem ipsum, dolor sit amet adipisicing elit. Assumenda
                    accusantium possimus provident culpa officiis ducimus
                    explicabo?.Doughp wasn't your average cookie dough company.
                  </p>
                </div>
                <div className="portfolio-text-box-right-sub">
                  <img
                    className="single-portfolio2-img1"
                    src={SinglePortfolioImg6}
                    alt="single-portfolio2-img6"
                    data-aos="fade-right"
                  />
                  <img
                    className="single-portfolio2-img1"
                    src={SinglePortfolioImg7}
                    alt="single-portfolio2-img7"
                    data-aos="fade-left"
                  />
                </div>
              </div>
            </div>
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
export default SinglePortfolioTwo;
