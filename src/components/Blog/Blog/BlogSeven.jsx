import React, { useEffect } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import { Link } from "react-router-dom";
import BlogImg1 from "../../../assets/images/portfolio-slider/blog-img1.jpg";
import BlogImg2 from "../../../assets/images/portfolio-slider/blog-img2.jpg";
import BlogImg3 from "../../../assets/images/portfolio-slider/blog-img3.jpg";
import BlogImg4 from "../../../assets/images/portfolio-slider/blog-img4.jpg";
import BlogImg5 from "../../../assets/images/portfolio-slider/blog-img5.jpg";
import BrandsMarqueSection from "../../../common/BrandsMarqueSection";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import ProgressCircle from "../../../common/ProgressCircle";
import Cursor from "../../../common/Cursor";

const BlogSeven = () => {
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
            <div className="list-blog-main" data-aos="fade-up">
              <img src={BlogImg1} alt="blog-img1" />
              <div>
                <div className="design-date">
                  <p>Content</p>
                  <p>December 2, 2023</p>
                </div>
                <p className="steps">
                  {" "}
                  How to Become a Graphic Designer in 10 Simple Steps
                </p>
                <p className="pursuing">
                  Are you passionate about design and interested in pursuing a
                  career as a graphic designer? about design and interested in
                  pursuing a career as a graphic designer Graphic design is a
                  design and interested in pursuing a career as a graphic
                  designer Graphic design is a dynamic..
                </p>
                <p className="explore-me p-0">
                  <Link to="/single_blog">
                    Read More
                    <svg
                      className="expo-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M6.66669 16H25.3334"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M20 21.3333L25.3333 16"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M20 10.6666L25.3333 16"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </Link>
                </p>
              </div>
            </div>
            <div className="list-blog-main" data-aos="fade-up">
              <img src={BlogImg2} alt="blog-img2" />
              <div>
                <div className="design-date">
                  <p>Gallery</p>
                  <p>December 20, 2023</p>
                </div>
                <p className="steps">
                  {" "}
                  Play to Your Strengths and Supercharge Your Business
                </p>
                <p className="pursuing">
                  Are you passionate about design and interested in pursuing a
                  career as a graphic designer? about design and interested in
                  pursuing a career as a graphic designer Graphic design is a
                  design and interested in pursuing a career as a graphic
                  designer Graphic design is a dynamic..
                </p>
                <p className="explore-me p-0">
                  <Link to="/single_blog">
                    Read More
                    <svg
                      className="expo-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M6.66669 16H25.3334"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M20 21.3333L25.3333 16"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M20 10.6666L25.3333 16"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </Link>
                </p>
              </div>
            </div>
            <div className="list-blog-main" data-aos="fade-up">
              <img src={BlogImg3} alt="blog-img3" />
              <div>
                <div className="design-date">
                  <p>Youtube Video</p>
                  <p>December 15, 2023</p>
                </div>
                <p className="steps">
                  {" "}
                  16 Best Graphic Design Online and Offline Courses
                </p>
                <p className="pursuing">
                  Are you passionate about design and interested in pursuing a
                  career as a graphic designer? about design and interested in
                  pursuing a career as a graphic designer Graphic design is a
                  design and interested in pursuing a career as a graphic
                  designer Graphic design is a dynamic..
                </p>
                <p className="explore-me p-0">
                  <Link to="/single_blog">
                    Read More
                    <svg
                      className="expo-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M6.66669 16H25.3334"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M20 21.3333L25.3333 16"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M20 10.6666L25.3333 16"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </Link>
                </p>
              </div>
            </div>
            <div className="list-blog-main" data-aos="fade-up">
              <img src={BlogImg4} alt="blog-img4" />
              <div>
                <div className="design-date">
                  <p>Vimeo Video</p>
                  <p>December 2, 2023</p>
                </div>
                <p className="steps">
                  5 Steps to Create an Outstanding Marketing Plan
                </p>
                <p className="pursuing">
                  Are you passionate about design and interested in pursuing a
                  career as a graphic designer? about design and interested in
                  pursuing a career as a graphic designer Graphic design is a
                  design and interested in pursuing a career as a graphic
                  designer Graphic design is a dynamic..
                </p>
                <p className="explore-me p-0">
                  <Link to="/single_blog">
                    Read More
                    <svg
                      className="expo-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M6.66669 16H25.3334"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M20 21.3333L25.3333 16"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M20 10.6666L25.3333 16"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </Link>
                </p>
              </div>
            </div>
            <div className="list-blog-main" data-aos="fade-up">
              <img src={BlogImg5} alt="blog-img5" />
              <div>
                <div className="design-date">
                  <p>Content</p>
                  <p>December 2, 2023</p>
                </div>
                <p className="steps">
                  {" "}
                  10 Content Proofreading Tips to Catch More Avoidable Goofs
                </p>
                <p className="pursuing">
                  Are you passionate about design and interested in pursuing a
                  career as a graphic designer? about design and interested in
                  pursuing a career as a graphic designer Graphic design is a
                  design and interested in pursuing a career as a graphic
                  designer Graphic design is a dynamic..
                </p>
                <p className="explore-me p-0">
                  <Link to="/single_blog">
                    Read More
                    <svg
                      className="expo-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M6.66669 16H25.3334"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M20 21.3333L25.3333 16"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M20 10.6666L25.3333 16"
                          stroke="#FFDB59"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </Link>
                </p>
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
export default BlogSeven;
