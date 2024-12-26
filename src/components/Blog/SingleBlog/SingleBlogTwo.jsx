import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import Loader from "../../../common/Loader";
import Header from "../../../common/Header";
import SingleBlogImg from "../../../assets/images/single-blog-main-img.jpg";
import RecentPostImg1 from "../../../assets/images/recent-post-img1.jpg";
import RecentPostImg2 from "../../../assets/images/recent-post-img2.jpg";
import RecentPostImg3 from "../../../assets/images/recent-post-img3.jpg";
import SingleServicesImg from "../../../assets/images/single_services2-img.png";
import TestimonialClient1 from "../../../assets/images/testimonial_client_img1.jpg";
import TestimonialClient2 from "../../../assets/images/testimonial_client_img2.jpg";
import TestimonialClient3 from "../../../assets/images/testimonial_client_img3.jpg";
import TestimonialClient4 from "../../../assets/images/testimonial_client_img4.jpg";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import ProgressCircle from "../../../common/ProgressCircle";
import Cursor from "../../../common/Cursor";

const SingleBlogTwo = () => {
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
              Best 10 App for Digital Transformation
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
                <h2 className="sed p-0" data-aos="fade-up">
                  Best 10 App for Digital Transformation
                </h2>
                <div className="bloger-date-view-details" data-aos="fade-up">
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
                        id="Icon-Set"
                        transform="translate(-257.000000, -255.000000)"
                        fill="#FFF"
                      >
                        <path
                          d="M259,266.5 C259,261.254 263.753,257 270,257 C274.973,257 280,261.254 280,266.5 C280,271.747 276.075,276 270,276 C269.107,276 267.244,275.898 266.413,275.725 L263,278 L263,274.456 C260.561,272.477 259,269.834 259,266.5 L259,266.5 Z M266.637,277.736 C267.414,277.863 269.181,278 270,278 C277.18,278 282,272.657 282,266.375 C282,260.093 275.977,255 270,255 C262.811,255 257,260.093 257,266.375 C257,270.015 258.387,273.104 261,275.329 L261,281 L266.637,277.736 L266.637,277.736 Z M283.949,264.139 C283.968,264.425 284,264.709 284,265 C284,265.636 283.938,266.259 283.849,266.874 C285.195,268.45 286,270.392 286,272.5 C286,275.834 284.008,278.761 281,280.456 L281,284 L277.587,281.725 C276.756,281.898 275.893,282 275,282 C272.41,282 271.034,281.222 269.154,279.929 C268.609,279.973 268.059,280 267.5,280 C267.102,280 266.712,279.972 266.32,279.949 C268.701,282.276 271.149,283.75 275,283.75 C275.819,283.75 276.618,283.676 277.395,283.549 L283,287 L283,281.329 C286.04,279.246 288,276.015 288,272.375 C288,269.131 286.439,266.211 283.949,264.139 L283.949,264.139 Z M275.5,268 C276.329,268 277,267.329 277,266.5 C277,265.672 276.329,265 275.5,265 C274.671,265 274,265.672 274,266.5 C274,267.329 274.671,268 275.5,268 L275.5,268 Z M263.5,268 C264.329,268 265,267.329 265,266.5 C265,265.672 264.329,265 263.5,265 C262.671,265 262,265.672 262,266.5 C262,267.329 262.671,268 263.5,268 L263.5,268 Z M269.5,268 C270.329,268 271,267.329 271,266.5 C271,265.672 270.329,265 269.5,265 C268.671,265 268,265.672 268,266.5 C268,267.329 268.671,268 269.5,268 L269.5,268 Z"
                          id="comments"
                        ></path>
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
                <p className="nunc-text mattis" data-aos="fade-up">
                  Ullamcorper nunc mattis volutpat volutpat sed natoque eget
                  fermentum. Tortor rhoncus nisl purus cras pharetra sit
                  adipiscing. Amet vel blandit dolor neque malesuada venenatis
                  morbi tincidunt lorem. Lorem vulputate id in risus adipiscing
                  lectus enim. Semper et velit risus arcu in dapibus turpis
                  scelerisque. Et nunc id tristique a pharetra accumsan magna.
                  Nibh quis tellus sit integer luctus.
                </p>
                <p className="nunc-text" data-aos="fade-up">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Placeat qui ducimus illum modi? perspiciatis sit amet
                  accusamus soluta perferendis, ad illum, nesciunt, reiciendis
                  iusto et cupidit Repudiandae provident to odio nisi
                  consectetur, sapiente, libero iure necessitatibus corporis
                  nulla voluptate, quisquam aut perspiciatis? quis lor Fugiat
                  labore aspernatur eius, perspiciatis ut molestiae, delectus
                  rem quis lor Fugiat labore aspernatur eius.
                  <img
                    className="soluta-img"
                    src={SingleBlogImg}
                    alt="single-blog-main-img"
                    data-aos="fade-right"
                  />
                </p>
                <h2 className="sed" data-aos="fade-up">
                  What’s up with UX and UI?
                </h2>
                <p className="nunc-text" data-aos="fade-up">
                  Ullamcorper nunc mattis volutpat volutpat sed natoque eget
                  fermentum. Tortor rhoncus nisl purus cras pharetra sit
                  adipiscing. Amet vel blandit dolor neque malesuada venenatis
                  morbi tincidunt lorem. Lorem vulputate id in risus adipiscing
                  lectus enim. Semper et velit risus arcu in dapibus turpis
                  scelerisque. Et nunc id tristique a pharetra accumsan magna.
                </p>
                <div className="small_blog" data-aos="fade-up">
                  <h3 className="integer font_w_font_s1">
                    Mattis facilisis quam amet blandit faucibus. Sed in vitae
                    montes sem quis faucibus bibendum massa. Eget volutpat
                    molestie eget non netus nisl eleifend. Sit pellentesque
                    posuere vitae scelerisque vel aliquet vulputate purus. Ac
                    risus neque sed at pellentesque ultrices.
                  </h3>
                  <div className="line_client">
                    <div className="line"></div>
                    <h4 className="jordon font_w_font_s">By Jordon Smith</h4>
                  </div>
                </div>
                <ul className="single-service-list" data-aos="fade-up">
                  <li>
                    Ullamcorper nunc mattis volutpat volutpat sed natoque eget
                    fermentum.
                  </li>
                  <li>
                    Tortor rhoncus nisl purus cras pharetra sit adipiscing.
                  </li>
                  <li>
                    Amet vel blandit dolor neque malesuada venenatis morbi
                    tincidunt lorem.
                  </li>
                  <li>Lorem vulputate id in risus adipiscing lectus enim.</li>
                  <li>
                    Semper et velit risus arcu in dapibus turpis scelerisque.
                  </li>
                  <li>Et nunc id tristique a pharetra accumsan magna.</li>
                </ul>
                <div className="overview-imgs-main">
                  <img
                    src={SingleServicesImg}
                    alt="blog-uo-ux-img1"
                    data-aos="fade-right"
                  />
                </div>
                <p className="nunc-text nunc-text-blog" data-aos="fade-up">
                  Ullamcorper nunc mattis volutpat volutpat sed natoque eget
                  fermentum. Tortor rhoncus nisl purus cras pharetra sit
                  adipiscing. Amet vel blandit dolor neque malesuada venenatis
                  morbi tincidunt lorem. Lorem vulputate id in risus adipiscing
                  lectus enim. Semper et velit risus arcu in dapibus turpis
                  scelerisque. Et nunc id tristique a pharetra accumsan magna.
                </p>
                <div className="tags-main" data-aos="fade-up" id="tags-main">
                  <p className="ShareTags">Share:</p>
                  <div className="share-social-main">
                    <p className="share-social">
                      <Link to="/https://www.facebook.com/">Facebook</Link>
                    </p>
                    <p className="share-social">
                      <Link to="/https://www.instagram.com/">Instagram</Link>
                    </p>
                    <p className="share-social">
                      <Link to="/https://twitter.com/">Twitter</Link>
                    </p>
                    <p className="share-social">
                      <Link to="/https://www.linkedin.com/">Linkedin</Link>
                    </p>
                  </div>
                </div>
                <p className="blog-comments" data-aos="fade-up">
                  Comments
                </p>
                <div className="blog-comments-main" data-aos="fade-up">
                  <img
                    className="blog-replay-img"
                    src={TestimonialClient1}
                    alt="testimonial_client_img1"
                  />
                  <div>
                    <div className="blog-name-date-group">
                      <p className="blog-replay-client">Parker Ballinger</p>
                      <p className="blog-replay-date">25 May 2022</p>
                    </div>
                    <p className="blog-replay-message">
                      Lorem ipsum dolor sit amet, consectetur. Ut enim ad minima
                      veniam quis nostrum exercitationem mosequatu autem.
                    </p>
                    <p className="blog-replay-text">
                      <Link to="#">Reply</Link>
                    </p>
                  </div>
                </div>
                <div className="blog-comments-main" data-aos="fade-up">
                  <img
                    className="blog-replay-img"
                    src={TestimonialClient2}
                    alt="testimonial_client_img2"
                  />
                  <div>
                    <div className="blog-name-date-group">
                      <p className="blog-replay-client">Alex Regan</p>
                      <p className="blog-replay-date">05 May 2022</p>
                    </div>
                    <p className="blog-replay-message">
                      Lorem ipsum dolor sit amet, consectetur. Ut enim ad minima
                      veniam quis nostrum exercitationem mosequatu autem.
                    </p>
                    <p className="blog-replay-text">
                      <Link to="#">Reply</Link>
                    </p>
                  </div>
                </div>
                <div className="blog-comments-main" data-aos="fade-up">
                  <img
                    className="blog-replay-img"
                    src={TestimonialClient3}
                    alt="testimonial_client_img3"
                  />
                  <div>
                    <div className="blog-name-date-group">
                      <p className="blog-replay-client">Andrew Lewis</p>
                      <p className="blog-replay-date">25 April 2022</p>
                    </div>
                    <p className="blog-replay-message">
                      Lorem ipsum dolor sit amet, consectetur. Ut enim ad minima
                      veniam quis nostrum exercitationem mosequatu autem.
                    </p>
                    <p className="blog-replay-text">
                      <Link to="#">Reply</Link>
                    </p>
                  </div>
                </div>
                <div className="blog-comments-main" data-aos="fade-up">
                  <img
                    className="blog-replay-img"
                    src={TestimonialClient4}
                    alt="testimonial_client_img4"
                  />
                  <div>
                    <div className="blog-name-date-group">
                      <p className="blog-replay-client">Mark Daly</p>
                      <p className="blog-replay-date">1 May 2022</p>
                    </div>
                    <p className="blog-replay-message">
                      Lorem ipsum dolor sit amet, consectetur. Ut enim ad minima
                      veniam quis nostrum exercitationem mosequatu autem.
                    </p>
                    <p className="blog-replay-text">
                      <Link to="#">Reply</Link>
                    </p>
                  </div>
                </div>
                <p className="blog-comments" data-aos="fade-up">
                  Make A Comment
                </p>
                <p className="published" data-aos="fade-up">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form className="blog-form-main" data-aos="fade-up">
                  <div className="blog-form">
                    <input type="text" placeholder="Enter Name" />
                    <input type="email" placeholder="Enter Email" />
                  </div>
                  <div className="blog-textarea">
                    <textarea placeholder="Type your message..."></textarea>
                  </div>
                  <button className="explore-btn hover-slide-right post-comment">
                    <span>Post Comment</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ====================================== single blog Section Two End ===================================== --> */}
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
export default SingleBlogTwo;
