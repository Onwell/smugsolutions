import React, { useEffect } from "react";
import AOS from "aos";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import { Link } from "react-router-dom";
import SingleBlogImg from "../../../assets/images/single-blog-main-img.jpg";
import SingleServicesImg from "../../../assets/images/single_services2-img.png";
import HoverSliderImg1 from "../../../assets/images/portfolio-slider/hover-slider-img1.jpg";
import HoverSliderImg2 from "../../../assets/images/portfolio-slider/hover-slider-img2.jpg";
import RecentPostImg1 from "../../../assets/images/recent-post-img1.jpg";
import RecentPostImg2 from "../../../assets/images/recent-post-img2.jpg";
import RecentPostImg3 from "../../../assets/images/recent-post-img3.jpg";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import ProgressCircle from "../../../common/ProgressCircle";
import Cursor from "../../../common/Cursor";

const BlogFive = () => {
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
        <section className="section-two-my-services">
          <div className="container">
            <div
              className="row overflow-hidden single_blog2_main_row"
              id="blog-sidebar-left"
            >
              <div className="col-xxl-4 col-xl-4 col-lg-4 overflow-hidden">
                <div
                  className="other-services-main"
                  data-aos="fade-left"
                  id="other-services-main-blog"
                >
                  <div className="blog-form" id="blog-form">
                    <input type="text" placeholder="Search" />
                    <svg
                      className="search-svg"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                          stroke="#FFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div
                  className="other-services-main other-services-main-spacer"
                  data-aos="fade-left"
                >
                  <p className="other-services">Categories</p>
                  <div className="categories-details-main pt-0">
                    <p className="dev-blog-text">Development</p>
                    <p className="total-blogs">(05)</p>
                  </div>
                  <div className="categories-details-main">
                    <p className="dev-blog-text">Design</p>
                    <p className="total-blogs">(03)</p>
                  </div>
                  <div className="categories-details-main">
                    <p className="dev-blog-text">UI/UX</p>
                    <p className="total-blogs">(02)</p>
                  </div>
                  <div className="categories-details-main">
                    <p className="dev-blog-text">Marketing</p>
                    <p className="total-blogs">(04)</p>
                  </div>
                  <div className="categories-details-main border-0">
                    <p className="dev-blog-text">Ideas</p>
                    <p className="total-blogs">(05)</p>
                  </div>
                </div>
                <div
                  className="other-services-main"
                  id="recent-post"
                  data-aos="fade-left"
                >
                  <p className="other-services">Recent Posts</p>
                  <Link to="/single_blog">
                    <div className="recent-posts-main">
                      <img
                        className="recent-post-img"
                        src={RecentPostImg1}
                        alt="recent-post-img1"
                      />
                      <div>
                        <p className="implements">SEO implements in website</p>
                        <p className="implements-date">
                          APRIL 25, 2024 _ DESIGN
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/single_blog">
                    <div className="recent-posts-main">
                      <img
                        className="recent-post-img"
                        src={RecentPostImg2}
                        alt="recent-post-img2"
                      />
                      <div>
                        <p className="implements">
                          Digital Marketing for Online Business
                        </p>
                        <p className="implements-date">
                          APRIL 25, 2024 _ DESIGN
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/single_blog">
                    <div className="recent-posts-main border-0">
                      <img
                        className="recent-post-img"
                        src={RecentPostImg3}
                        alt="recent-post-img3"
                      />
                      <div>
                        <p className="implements">
                          8 Effective Inbound Marketing Examples
                        </p>
                        <p className="implements-date">
                          APRIL 25, 2024 _ DESIGN
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div
                  className="other-services-main"
                  id="product-tag-blog"
                  data-aos="fade-left"
                >
                  <p className="other-services">Product Tag</p>
                  <ul className="product-tags">
                    <li>
                      <Link to="#">Design</Link>
                    </li>
                    <li>
                      <Link to="#">Art</Link>
                    </li>
                    <li>
                      <Link to="#">Graphicdesigner</Link>
                    </li>
                    <li>
                      <Link to="#">illustrator</Link>
                    </li>
                    <li>
                      <Link to="#">Freelancing</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <h2 className="sed sed2 p-0" data-aos="fade-up">
                  Best 10 App for Digital Transformation
                </h2>
                <div className="bloger-date-view-details2" data-aos="fade-up">
                  <p className="bloger-name">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                          stroke="#FFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                    <Link to="#">Marina Willums</Link>
                  </p>
                  <p className="bloger-name">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                          stroke="#FFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                    25 July 2021
                  </p>
                  <p className="bloger-name">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="-0.5 0 32 32"
                      version="1.1"
                      fill="#ffffff"
                    >
                      <g
                        transform="translate(-257.000000, -255.000000)"
                        fill="#FFF"
                      >
                        <path d="M259,266.5 C259,261.254 263.753,257 270,257 C274.973,257 280,261.254 280,266.5 C280,271.747 276.075,276 270,276 C269.107,276 267.244,275.898 266.413,275.725 L263,278 L263,274.456 C260.561,272.477 259,269.834 259,266.5 L259,266.5 Z M266.637,277.736 C267.414,277.863 269.181,278 270,278 C277.18,278 282,272.657 282,266.375 C282,260.093 275.977,255 270,255 C262.811,255 257,260.093 257,266.375 C257,270.015 258.387,273.104 261,275.329 L261,281 L266.637,277.736 L266.637,277.736 Z M283.949,264.139 C283.968,264.425 284,264.709 284,265 C284,265.636 283.938,266.259 283.849,266.874 C285.195,268.45 286,270.392 286,272.5 C286,275.834 284.008,278.761 281,280.456 L281,284 L277.587,281.725 C276.756,281.898 275.893,282 275,282 C272.41,282 271.034,281.222 269.154,279.929 C268.609,279.973 268.059,280 267.5,280 C267.102,280 266.712,279.972 266.32,279.949 C268.701,282.276 271.149,283.75 275,283.75 C275.819,283.75 276.618,283.676 277.395,283.549 L283,287 L283,281.329 C286.04,279.246 288,276.015 288,272.375 C288,269.131 286.439,266.211 283.949,264.139 L283.949,264.139 Z M275.5,268 C276.329,268 277,267.329 277,266.5 C277,265.672 276.329,265 275.5,265 C274.671,265 274,265.672 274,266.5 C274,267.329 274.671,268 275.5,268 L275.5,268 Z M263.5,268 C264.329,268 265,267.329 265,266.5 C265,265.672 264.329,265 263.5,265 C262.671,265 262,265.672 262,266.5 C262,267.329 262.671,268 263.5,268 L263.5,268 Z M269.5,268 C270.329,268 271,267.329 271,266.5 C271,265.672 270.329,265 269.5,265 C268.671,265 268,265.672 268,266.5 C268,267.329 268.671,268 269.5,268 L269.5,268 Z"></path>
                      </g>
                    </svg>
                    2K
                  </p>
                  <p className="bloger-name">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                          stroke="#FFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                          stroke="#FFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                    1.48K
                  </p>
                </div>
                <p className="nunc-text nunc-text2 mattis" data-aos="fade-up">
                  Ullamcorper nunc mattis volutpat volutpat sed natoque eget
                  fermentum. Tortor rhoncus nisl purus cras pharetra sit
                  adipiscing. Amet vel blandit dolor neque malesuada venenatis
                  morbi tincidunt lorem. Lorem vulputate id in risus adipiscing
                  lectus enim. Semper et velit risus arcu in dapibus turpis
                  scelerisque. Et nunc id tristique a pharetra accumsan magna.
                  Nibh quis tellus sit integer luctus.
                </p>
                <p className="continue-reading" data-aos="fade-right">
                  <Link to="/single_blog">Continue Reading</Link>
                </p>
                <img
                  className="soluta-img"
                  src={SingleBlogImg}
                  alt="single-blog-main-img"
                  data-aos="fade-right"
                />
                <h2 className="sed sed2 pb-0" data-aos="fade-up">
                  What's up with UX and UI?
                </h2>
                <div className="bloger-date-view-details2" data-aos="fade-up">
                  <p className="bloger-name">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                          stroke="#FFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                    <Link to="#">Willums Marina</Link>
                  </p>
                  <p className="bloger-name">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                          stroke="#FFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                    02 July 2022
                  </p>
                  <p className="bloger-name">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="-0.5 0 32 32"
                      version="1.1"
                      fill="#ffffff"
                    >
                      <g
                        transform="translate(-257.000000, -255.000000)"
                        fill="#FFF"
                      >
                        <path d="M259,266.5 C259,261.254 263.753,257 270,257 C274.973,257 280,261.254 280,266.5 C280,271.747 276.075,276 270,276 C269.107,276 267.244,275.898 266.413,275.725 L263,278 L263,274.456 C260.561,272.477 259,269.834 259,266.5 L259,266.5 Z M266.637,277.736 C267.414,277.863 269.181,278 270,278 C277.18,278 282,272.657 282,266.375 C282,260.093 275.977,255 270,255 C262.811,255 257,260.093 257,266.375 C257,270.015 258.387,273.104 261,275.329 L261,281 L266.637,277.736 L266.637,277.736 Z M283.949,264.139 C283.968,264.425 284,264.709 284,265 C284,265.636 283.938,266.259 283.849,266.874 C285.195,268.45 286,270.392 286,272.5 C286,275.834 284.008,278.761 281,280.456 L281,284 L277.587,281.725 C276.756,281.898 275.893,282 275,282 C272.41,282 271.034,281.222 269.154,279.929 C268.609,279.973 268.059,280 267.5,280 C267.102,280 266.712,279.972 266.32,279.949 C268.701,282.276 271.149,283.75 275,283.75 C275.819,283.75 276.618,283.676 277.395,283.549 L283,287 L283,281.329 C286.04,279.246 288,276.015 288,272.375 C288,269.131 286.439,266.211 283.949,264.139 L283.949,264.139 Z M275.5,268 C276.329,268 277,267.329 277,266.5 C277,265.672 276.329,265 275.5,265 C274.671,265 274,265.672 274,266.5 C274,267.329 274.671,268 275.5,268 L275.5,268 Z M263.5,268 C264.329,268 265,267.329 265,266.5 C265,265.672 264.329,265 263.5,265 C262.671,265 262,265.672 262,266.5 C262,267.329 262.671,268 263.5,268 L263.5,268 Z M269.5,268 C270.329,268 271,267.329 271,266.5 C271,265.672 270.329,265 269.5,265 C268.671,265 268,265.672 268,266.5 C268,267.329 268.671,268 269.5,268 L269.5,268 Z"></path>
                      </g>
                    </svg>
                    1K
                  </p>
                  <p className="bloger-name">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                          stroke="#FFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                          stroke="#FFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                    1.50K
                  </p>
                </div>
                <p className="nunc-text nunc-text2" data-aos="fade-up">
                  Ullamcorper nunc mattis volutpat volutpat sed natoque eget
                  fermentum. Tortor rhoncus nisl purus cras pharetra sit
                  adipiscing. Amet vel blandit dolor neque malesuada venenatis
                  morbi tincidunt lorem. Lorem vulputate id in risus adipiscing
                  lectus enim. Semper et velit risus arcu in dapibus turpis
                  scelerisque. Et nunc id tristique a pharetra accumsan magna.
                </p>
                <p className="continue-reading" data-aos="fade-right">
                  <Link to="/single_blog">Continue Reading</Link>
                </p>
                <div className="overview-imgs-main">
                  <img
                    src={SingleServicesImg}
                    alt="blog-uo-ux-img1"
                    data-aos="fade-right"
                  />
                </div>
                <h2 className="sed sed2 pb-0" data-aos="fade-up">
                  Overcoming creativity blocks
                </h2>
                <div className="bloger-date-view-details2" data-aos="fade-up">
                  <p className="bloger-name">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                          stroke="#FFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                    <Link to="#">Alex Regan</Link>
                  </p>
                  <p className="bloger-name">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                          stroke="#FFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                    25 June 2020
                  </p>
                  <p className="bloger-name">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="-0.5 0 32 32"
                      version="1.1"
                      fill="#ffffff"
                    >
                      <g
                        transform="translate(-257.000000, -255.000000)"
                        fill="#FFF"
                      >
                        <path d="M259,266.5 C259,261.254 263.753,257 270,257 C274.973,257 280,261.254 280,266.5 C280,271.747 276.075,276 270,276 C269.107,276 267.244,275.898 266.413,275.725 L263,278 L263,274.456 C260.561,272.477 259,269.834 259,266.5 L259,266.5 Z M266.637,277.736 C267.414,277.863 269.181,278 270,278 C277.18,278 282,272.657 282,266.375 C282,260.093 275.977,255 270,255 C262.811,255 257,260.093 257,266.375 C257,270.015 258.387,273.104 261,275.329 L261,281 L266.637,277.736 L266.637,277.736 Z M283.949,264.139 C283.968,264.425 284,264.709 284,265 C284,265.636 283.938,266.259 283.849,266.874 C285.195,268.45 286,270.392 286,272.5 C286,275.834 284.008,278.761 281,280.456 L281,284 L277.587,281.725 C276.756,281.898 275.893,282 275,282 C272.41,282 271.034,281.222 269.154,279.929 C268.609,279.973 268.059,280 267.5,280 C267.102,280 266.712,279.972 266.32,279.949 C268.701,282.276 271.149,283.75 275,283.75 C275.819,283.75 276.618,283.676 277.395,283.549 L283,287 L283,281.329 C286.04,279.246 288,276.015 288,272.375 C288,269.131 286.439,266.211 283.949,264.139 L283.949,264.139 Z M275.5,268 C276.329,268 277,267.329 277,266.5 C277,265.672 276.329,265 275.5,265 C274.671,265 274,265.672 274,266.5 C274,267.329 274.671,268 275.5,268 L275.5,268 Z M263.5,268 C264.329,268 265,267.329 265,266.5 C265,265.672 264.329,265 263.5,265 C262.671,265 262,265.672 262,266.5 C262,267.329 262.671,268 263.5,268 L263.5,268 Z M269.5,268 C270.329,268 271,267.329 271,266.5 C271,265.672 270.329,265 269.5,265 C268.671,265 268,265.672 268,266.5 C268,267.329 268.671,268 269.5,268 L269.5,268 Z"></path>
                      </g>
                    </svg>
                    1.2K
                  </p>
                  <p className="bloger-name">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                          stroke="#FFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                          stroke="#FFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                    1K
                  </p>
                </div>
                <p className="nunc-text nunc-text2" data-aos="fade-up">
                  Ullamcorper nunc mattis volutpat volutpat sed natoque eget
                  fermentum. Tortor rhoncus nisl purus cras pharetra sit
                  adipiscing. Amet vel blandit dolor neque malesuada venenatis
                  morbi tincidunt lorem. Lorem vulputate id in risus adipiscing
                  lectus enim. Semper et velit risus arcu in dapibus turpis
                  scelerisque. Et nunc id tristique a pharetra accumsan magna.
                </p>
                <p className="continue-reading" data-aos="fade-right">
                  <Link to="/single_blog">Continue Reading</Link>
                </p>
                <div className="overview-imgs-main">
                  <img
                    src={HoverSliderImg2}
                    alt="slider-img1"
                    data-aos="fade-right"
                  />
                </div>
                <h2 className="sed sed2 pb-0" data-aos="fade-up">
                  Overcoming creativity blocks
                </h2>
                <div className="bloger-date-view-details2" data-aos="fade-up">
                  <p className="bloger-name">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                          stroke="#FFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                    <Link to="#">Mark Daly</Link>
                  </p>
                  <p className="bloger-name">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                          stroke="#FFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                    30 July 2022
                  </p>
                  <p className="bloger-name">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="-0.5 0 32 32"
                      version="1.1"
                      fill="#ffffff"
                    >
                      <g
                        transform="translate(-257.000000, -255.000000)"
                        fill="#FFF"
                      >
                        <path d="M259,266.5 C259,261.254 263.753,257 270,257 C274.973,257 280,261.254 280,266.5 C280,271.747 276.075,276 270,276 C269.107,276 267.244,275.898 266.413,275.725 L263,278 L263,274.456 C260.561,272.477 259,269.834 259,266.5 L259,266.5 Z M266.637,277.736 C267.414,277.863 269.181,278 270,278 C277.18,278 282,272.657 282,266.375 C282,260.093 275.977,255 270,255 C262.811,255 257,260.093 257,266.375 C257,270.015 258.387,273.104 261,275.329 L261,281 L266.637,277.736 L266.637,277.736 Z M283.949,264.139 C283.968,264.425 284,264.709 284,265 C284,265.636 283.938,266.259 283.849,266.874 C285.195,268.45 286,270.392 286,272.5 C286,275.834 284.008,278.761 281,280.456 L281,284 L277.587,281.725 C276.756,281.898 275.893,282 275,282 C272.41,282 271.034,281.222 269.154,279.929 C268.609,279.973 268.059,280 267.5,280 C267.102,280 266.712,279.972 266.32,279.949 C268.701,282.276 271.149,283.75 275,283.75 C275.819,283.75 276.618,283.676 277.395,283.549 L283,287 L283,281.329 C286.04,279.246 288,276.015 288,272.375 C288,269.131 286.439,266.211 283.949,264.139 L283.949,264.139 Z M275.5,268 C276.329,268 277,267.329 277,266.5 C277,265.672 276.329,265 275.5,265 C274.671,265 274,265.672 274,266.5 C274,267.329 274.671,268 275.5,268 L275.5,268 Z M263.5,268 C264.329,268 265,267.329 265,266.5 C265,265.672 264.329,265 263.5,265 C262.671,265 262,265.672 262,266.5 C262,267.329 262.671,268 263.5,268 L263.5,268 Z M269.5,268 C270.329,268 271,267.329 271,266.5 C271,265.672 270.329,265 269.5,265 C268.671,265 268,265.672 268,266.5 C268,267.329 268.671,268 269.5,268 L269.5,268 Z"></path>
                      </g>
                    </svg>
                    2K
                  </p>
                  <p className="bloger-name">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                          stroke="#FFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                          stroke="#FFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                    1.48K
                  </p>
                </div>
                <p className="nunc-text nunc-text2" data-aos="fade-up">
                  Ullamcorper nunc mattis volutpat volutpat sed natoque eget
                  fermentum. Tortor rhoncus nisl purus cras pharetra sit
                  adipiscing. Amet vel blandit dolor neque malesuada venenatis
                  morbi tincidunt lorem. Lorem vulputate id in risus adipiscing
                  lectus enim. Semper et velit risus arcu in dapibus turpis
                  scelerisque. Et nunc id tristique a pharetra accumsan magna.
                </p>
                <p className="continue-reading" data-aos="fade-right">
                  <Link to="/single_blog">Continue Reading</Link>
                </p>
                <div className="overview-imgs-main">
                  <img
                    src={HoverSliderImg1}
                    alt="hover-slider-img1"
                    data-aos="fade-right"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ====================================== single blog Section Two End ===================================== -->  */}
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
export default BlogFive;
