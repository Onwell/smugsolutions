import React, { useEffect } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import { Link } from "react-router-dom";
import SingleBlogImg1 from "../../../assets/images/single-portfolio2-img1.jpg";
import SingleBlogImg2 from "../../../assets/images/single-portfolio2-img2.jpg";
import SingleBlogImg3 from "../../../assets/images/single-portfolio2-img3.jpg";
import SingleBlogImg4 from "../../../assets/images/single-portfolio2-img4.jpg";
import SingleBlogImg5 from "../../../assets/images/single-portfolio2-img5.jpg";
import BrandsMarqueSection from "../../../common/BrandsMarqueSection";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import ProgressCircle from "../../../common/ProgressCircle";
import Cursor from "../../../common/Cursor";

const BlogEight = () => {
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
        {/* <!-- ====================================== single blog Section One ===================================== --> */}
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
            <nav aria-label="breadcrumb" id="breadcrumb" data-aos="fade-up">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/blog2">Blog</Link>
                </li>
                <li className="breadcrumb-item active">
                  <Link to="/single_blog2">Blog Details</Link>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        {/* <!-- ====================================== single blog Section One End===================================== --> */}
        {/* <!-- ====================================== single blog Section Two ===================================== --> */}
        <section className="list-blog">
          <div className="container">
            <h2 className="d-none">hidden</h2>
            <div className="row blog8-row-main">
              <div className="col-xxl-6 col-xl-6 col-lg-6" data-aos="fade-up">
                <div className="blog8-col-main">
                  <img
                    className="blog-img-blog8"
                    src={SingleBlogImg3}
                    alt="single-portfolio2-img1"
                  />
                  <div className="blog-text-section">
                    <p className="blog8-dates">August 5, 2020</p>
                    <p className="blog8-heding">
                      <Link to="/single_blog3">
                        Does My Website Need a Blog?
                      </Link>
                    </p>
                    <div className="blog8-tag-main">
                      <p className="blog8-tag">Digital</p>
                      <p className="blog8-tag">Marketing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6" data-aos="fade-up">
                <div className="blog8-col-main">
                  <img
                    className="blog-img-blog8"
                    src={SingleBlogImg4}
                    alt="single-portfolio2-img1"
                  />
                  <div className="blog-text-section">
                    <p className="blog8-dates">August 30, 2020</p>
                    <p className="blog8-heding">
                      <Link to="/single_blog3">
                        Best 10 App for Digital Transformation
                      </Link>
                    </p>
                    <div className="blog8-tag-main">
                      <p className="blog8-tag">Digital</p>
                      <p className="blog8-tag">Marketing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6" data-aos="fade-up">
                <div className="blog8-col-main">
                  <img
                    className="blog-img-blog8"
                    src={SingleBlogImg1}
                    alt="single-portfolio2-img1"
                  />
                  <div className="blog-text-section">
                    <p className="blog8-dates">August 5, 2020</p>
                    <p className="blog8-heding">
                      <Link to="/single_blog3">
                        A Simple Social Media Checklist
                      </Link>
                    </p>
                    <div className="blog8-tag-main">
                      <p className="blog8-tag">Digital</p>
                      <p className="blog8-tag">Marketing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6" data-aos="fade-up">
                <div className="blog8-col-main">
                  <img
                    className="blog-img-blog8"
                    src={SingleBlogImg5}
                    alt="single-portfolio2-img1"
                  />
                  <div className="blog-text-section">
                    <p className="blog8-dates">August 5, 2020</p>
                    <p className="blog8-heding">
                      <Link to="/single_blog3">SEO implements in website</Link>
                    </p>
                    <div className="blog8-tag-main">
                      <p className="blog8-tag">Digital</p>
                      <p className="blog8-tag">Marketing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6" data-aos="fade-up">
                <div className="blog8-col-main">
                  <img
                    className="blog-img-blog8"
                    src={SingleBlogImg2}
                    alt="single-portfolio2-img1"
                  />
                  <div className="blog-text-section">
                    <p className="blog8-dates">August 5, 2020</p>
                    <p className="blog8-heding">
                      <Link to="/single_blog3">
                        You're Still Not Using Digital Tools?
                      </Link>
                    </p>
                    <div className="blog8-tag-main">
                      <p className="blog8-tag">Digital</p>
                      <p className="blog8-tag">Marketing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6" data-aos="fade-up">
                <div className="blog8-col-main">
                  <img
                    className="blog-img-blog8"
                    src={SingleBlogImg3}
                    alt="single-portfolio2-img1"
                  />
                  <div className="blog-text-section">
                    <p className="blog8-dates">August 5, 2020</p>
                    <p className="blog8-heding">
                      <Link to="/single_blog3">
                        Digital Marketing for Online Business
                      </Link>
                    </p>
                    <div className="blog8-tag-main">
                      <p className="blog8-tag">Digital</p>
                      <p className="blog8-tag">Marketing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6" data-aos="fade-up">
                <div className="blog8-col-main">
                  <img
                    className="blog-img-blog8"
                    src={SingleBlogImg5}
                    alt="single-portfolio2-img1"
                  />
                  <div className="blog-text-section">
                    <p className="blog8-dates">August 12, 2020</p>
                    <p className="blog8-heding">
                      <Link to="/single_blog3">
                        Transforming Challenges into Opportunities
                      </Link>
                    </p>
                    <div className="blog8-tag-main">
                      <p className="blog8-tag">Digital</p>
                      <p className="blog8-tag">Marketing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6" data-aos="fade-up">
                <div className="blog8-col-main">
                  <img
                    className="blog-img-blog8"
                    src={SingleBlogImg1}
                    alt="single-portfolio2-img1"
                  />
                  <div className="blog-text-section">
                    <p className="blog8-dates">August 5, 2020</p>
                    <p className="blog8-heding">
                      <Link to="/single_blog3">
                        5 Web Design Tools & Software Apps
                      </Link>
                    </p>
                    <div className="blog8-tag-main">
                      <p className="blog8-tag">Digital</p>
                      <p className="blog8-tag">Marketing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="pagination-main"
              id="pagination-main"
              data-aos="fade-up"
            >
              <ul className="pagination-main-ul">
                <li>
                  <Link to="#">«</Link>
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
                  <Link to="#">»</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* <!-- ====================================== Brands Marquee Section ===================================== --> */}
        <BrandsMarqueSection />
        {/* <!-- ====================================== Brands Marquee Section ===================================== --> */}
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
export default BlogEight;
