import React, { useEffect } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import { Link } from "react-router-dom";
import NewsImg2 from "../../../assets/images/news-img2.jpg";
import SeoImplement from "../../../assets/images/seo-implemnts.jpg";
import EffectiveImg from "../../../assets/images/effective-img.jpg";
import DigitalMarketingImg from "../../../assets/images/digital-marketing-img.jpg";
import SingleServicesImg1 from "../../../assets/images/single-services-project-img1.jpg";
import SingleServicesImg3 from "../../../assets/images/single-services-project-img3.jpg";
import BlogImg1 from "../../../assets/images/blog-uo-ux-img1.jpg";
import BlogImg2 from "../../../assets/images/blog-uo-ux-img2.jpg";
import BrandsMarqueSection from "../../../common/BrandsMarqueSection";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import ProgressCircle from "../../../common/ProgressCircle";
import Cursor from "../../../common/Cursor";

const BlogTwo = () => {
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
        {/* <!-- ====================================== Blog Section One ===================================== --> */}
        <section
          className="single-blog2-section-main overflow-hidden"
          id="main"
        >
          <div className="container">
            <p className="main-text" data-aos="fade-down">
              NEWS
            </p>
            <h1 className="JessicaBiogi blog2-main-text" data-aos="fade-down">
              Latest Blog
            </h1>
            <h2 className="d-none">hidden</h2>
            <nav aria-label="breadcrumb" id="breadcrumb" data-aos="fade-up">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <Link to="/blog2">Blog</Link>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        {/* <!-- ====================================== Blog Section One End ===================================== --> */}
        {/* <!-- ======================================= Blog Section Two ================================== --> */}
        <section className="section-seven overflow-hidden">
          <div className="container">
            <h2 className="d-none">hidden</h2>
            <div className="row">
              <div
                className="col-xxl-6 col-xl-6 col-md-6 blog-group-main"
                data-aos="fade-up"
              >
                <div className="item">
                  <div className="blog-post">
                    <Link to="/single_blog2" className="blog-img banner-hover">
                      <img
                        className="img-fluid"
                        src={SingleServicesImg1}
                        alt="single-services-project-img"
                      />
                      <span className="date-time">
                        <span className="date">15 Jul 2021</span>
                      </span>
                    </Link>
                    <div className="blog-post-content">
                      <Link to="/single_blog" className="blog-title">
                        Does My Website Need a Blog?
                      </Link>
                      <p className="blog-desc">
                        Senectus et netus et malesuada fames ac. Eu augue ut
                        lect...
                      </p>
                      <Link to="/single_blog" className="btn btn-style2">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-6 col-xl-6 col-md-6 blog-group-main"
                data-aos="fade-up"
              >
                <div className="item">
                  <div className="blog-post">
                    <Link to="/single_blog2" className="blog-img banner-hover">
                      <img
                        className="img-fluid"
                        src={SingleServicesImg3}
                        alt="single-services-project-img3"
                      />
                      <span className="date-time">
                        <span className="date">26 Jul 2021</span>
                      </span>
                    </Link>
                    <div className="blog-post-content">
                      <Link to="/single_blog" className="blog-title">
                        Best 10 App for Digital Transformation
                      </Link>
                      <p className="blog-desc">
                        Senectus et netus et malesuada fames ac. Eu augue ut
                        lect...
                      </p>
                      <Link to="/single_blog" className="btn btn-style2">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-6 col-xl-6 col-md-6 blog-group-main"
                data-aos="fade-up"
              >
                <div className="item">
                  <div className="blog-post">
                    <Link to="/single_blog2" className="blog-img banner-hover">
                      <img
                        className="img-fluid"
                        src={NewsImg2}
                        alt="news-img2"
                      />
                      <span className="date-time">
                        <span className="date">18 Jul 2020</span>
                      </span>
                    </Link>
                    <div className="blog-post-content">
                      <Link to="/single_blog" className="blog-title">
                        A Simple Social Media Checklist
                      </Link>
                      <p className="blog-desc">
                        Senectus et netus et malesuada fames ac. Eu augue ut
                        lect...
                      </p>
                      <Link to="/single_blog" className="btn btn-style2">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-6 col-xl-6 col-md-6 blog-group-main"
                data-aos="fade-up"
              >
                <div className="item">
                  <div className="blog-post">
                    <Link to="/single_blog2" className="blog-img banner-hover">
                      <img
                        className="img-fluid"
                        src={EffectiveImg}
                        alt="effective-img"
                      />
                      <span className="date-time">
                        <span className="date">15 Jul 2021</span>
                      </span>
                    </Link>
                    <div className="blog-post-content">
                      <Link to="/single_blog" className="blog-title">
                        SEO implements in website & tools{" "}
                      </Link>
                      <p className="blog-desc">
                        Senectus et netus et malesuada fames ac. Eu augue ut
                        lect...
                      </p>
                      <Link to="/single_blog" className="btn btn-style2">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-6 col-xl-6 col-md-6 blog-group-main"
                data-aos="fade-up"
              >
                <div className="item">
                  <div className="blog-post">
                    <Link to="/single_blog2" className="blog-img banner-hover">
                      <img
                        className="img-fluid"
                        src={SeoImplement}
                        alt="seo-implemnts"
                      />
                      <span className="date-time">
                        <span className="date">15 May 2021</span>
                      </span>
                    </Link>
                    <div className="blog-post-content">
                      <Link to="/single_blog" className="blog-title">
                        You're Still Not Using Digital Tools?
                      </Link>
                      <p className="blog-desc">
                        Senectus et netus et malesuada fames ac. Eu augue ut
                        lect...
                      </p>
                      <Link to="/single_blog" className="btn btn-style2">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-6 col-xl-6 col-md-6 blog-group-main"
                data-aos="fade-up"
              >
                <div className="item">
                  <div className="blog-post">
                    <Link to="/single_blog2" className="blog-img banner-hover">
                      <img
                        className="img-fluid"
                        src={DigitalMarketingImg}
                        alt="digital-marketing-img"
                      />
                      <span className="date-time">
                        <span className="date">15 Jul 2021</span>
                      </span>
                    </Link>
                    <div className="blog-post-content">
                      <Link to="/single_blog" className="blog-title">
                        Digital Marketing for Online Business
                      </Link>
                      <p className="blog-desc">
                        Senectus et netus et malesuada fames ac. Eu augue ut
                        lect...
                      </p>
                      <Link to="/single_blog" className="btn btn-style2">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-6 col-xl-6 col-md-6 blog-group-main"
                data-aos="fade-up"
              >
                <div className="item">
                  <div className="blog-post">
                    <Link to="/single_blog2" className="blog-img banner-hover">
                      <img
                        className="img-fluid"
                        src={BlogImg1}
                        alt="effective-img"
                      />
                      <span className="date-time">
                        <span className="date">18 Aug 2021</span>
                      </span>
                    </Link>
                    <div className="blog-post-content">
                      <Link to="/single_blog" className="blog-title">
                        Transforming Challenges into Opportunities
                      </Link>
                      <p className="blog-desc">
                        Senectus et netus et malesuada fames ac. Eu augue ut
                        lect...
                      </p>
                      <Link to="/single_blog" className="btn btn-style2">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-6 col-xl-6 col-md-6 blog-group-main"
                data-aos="fade-up"
              >
                <div className="item">
                  <div className="blog-post">
                    <Link to="/single_blog2" className="blog-img banner-hover">
                      <img
                        className="img-fluid"
                        src={BlogImg2}
                        alt="effective-img"
                      />
                      <span className="date-time">
                        <span className="date">26 Aug 2021</span>
                      </span>
                    </Link>
                    <div className="blog-post-content">
                      <Link to="/single_blog" className="blog-title">
                        8 Effective Inbound Marketing Examples
                      </Link>
                      <p className="blog-desc">
                        Senectus et netus et malesuada fames ac. Eu augue ut
                        lect...
                      </p>
                      <Link to="/single_blog" className="btn btn-style2">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination-main" data-aos="fade-up">
              <ul className="pagination-main-ul">
                <li>
                  <Link to="#">&laquo;</Link>
                </li>
                <li className="page-active">
                  <Link to="#">1</Link>
                </li>
                <li>
                  <Link to="#">2</Link>
                </li>
                <li>
                  <Link to="#">3</Link>
                </li>
                <li>
                  <Link to="#">4</Link>
                </li>
                <li>
                  <Link to="#">&raquo;</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!-- ======================================= Blog Section Two End ================================== --> */}
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
export default BlogTwo;
