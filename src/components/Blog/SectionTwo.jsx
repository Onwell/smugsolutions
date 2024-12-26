import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import RecentPostImg1 from "../../assets/images/recent-post-img1.jpg";
import RecentPostImg2 from "../../assets/images/recent-post-img2.jpg";
import RecentPostImg3 from "../../assets/images/recent-post-img3.jpg";
import BlogImg1 from "../../assets/images/blog-uo-ux-img1.jpg";
import BlogImg2 from "../../assets/images/blog-uo-ux-img2.jpg";
import CloseSvg from "../../assets/images/icons8-close.svg";
import Facebook from "../../assets/images/icons8-facebook.svg";
import Whatsapp from "../../assets/images/icons8-whatsapp.svg";
import Twitter from "../../assets/images/icons8-twitter.svg";
import Instagram from "../../assets/images/icons8-instagram.svg";
import LinkedIn from "../../assets/images/icons8-linkedin.svg";

const SectionTwo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseButtonClick = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/* <!-- ====================================== single blog Section Two ===================================== --> */}

      <div className="row overflow-hidden">
        <div className="col-xxl-8 col-xl-8 col-lg-8 ">
          <p className="nunc-text mattis" data-aos="fade-up">
            Ullamcorper nunc mattis volutpat volutpat sed natoque eget
            fermentum. Tortor rhoncus nisl purus cras pharetra sit adipiscing.
            Amet vel blandit dolor neque malesuada venenatis morbi tincidunt
            lorem. Lorem vulputate id in risus adipiscing lectus enim. Semper et
            velit risus arcu in dapibus turpis scelerisque. Et nunc id tristique
            a pharetra accumsan magna. Nibh quis tellus sit integer luctus.
          </p>
          <p className="nunc-text" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            qui ducimus illum modi? perspiciatis sit amet accusamus soluta
            perferendis, ad illum, nesciunt, reiciendis iusto et cupidit
            Repudiandae provident to odio nisi consectetur, sapiente, libero
            iure necessitatibus corporis nulla voluptate, quisquam aut
            perspiciatis? quis lor Fugiat labore aspernatur eius, perspiciatis
            ut molestiae, delectus rem quis lor Fugiat labore aspernatur eius.
          </p>
          <h2 className="sed" data-aos="fade-up">
            What’s up with UX and UI?
          </h2>
          <p className="nunc-text" data-aos="fade-up">
            Ullamcorper nunc mattis volutpat volutpat sed natoque eget
            fermentum. Tortor rhoncus nisl purus cras pharetra sit adipiscing.
            Amet vel blandit dolor neque malesuada venenatis morbi tincidunt
            lorem. Lorem vulputate id in risus adipiscing lectus enim. Semper et
            velit risus arcu in dapibus turpis scelerisque. Et nunc id tristique
            a pharetra accumsan magna.
          </p>
          <div className="small_blog" data-aos="fade-up">
            <h3 className="integer font_w_font_s1">
              Mattis facilisis quam amet blandit faucibus. Sed in vitae montes
              sem quis faucibus bibendum massa. Eget volutpat molestie eget non
              netus nisl eleifend. Sit pellentesque posuere vitae scelerisque
              vel aliquet vulputate purus. Ac risus neque sed at pellentesque
              ultrices.
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
            <li>Tortor rhoncus nisl purus cras pharetra sit adipiscing.</li>
            <li>
              Amet vel blandit dolor neque malesuada venenatis morbi tincidunt
              lorem.
            </li>
            <li>Lorem vulputate id in risus adipiscing lectus enim.</li>
            <li>Semper et velit risus arcu in dapibus turpis scelerisque.</li>
            <li>Et nunc id tristique a pharetra accumsan magna.</li>
          </ul>
          <div className="overview-imgs-main">
            <img
              className="overview-imgs-main-img"
              src={BlogImg1}
              alt="blog-uo-ux-img1"
              data-aos="fade-right"
            />
            <img
              className="overview-imgs-main-img"
              src={BlogImg2}
              alt="blog-uo-ux-img2"
              data-aos="fade-left"
            />
          </div>
          <p className="nunc-text nunc-text-blog" data-aos="fade-up">
            Ullamcorper nunc mattis volutpat volutpat sed natoque eget
            fermentum. Tortor rhoncus nisl purus cras pharetra sit adipiscing.
            Amet vel blandit dolor neque malesuada venenatis morbi tincidunt
            lorem. Lorem vulputate id in risus adipiscing lectus enim. Semper et
            velit risus arcu in dapibus turpis scelerisque. Et nunc id tristique
            a pharetra accumsan magna.
          </p>
          <div className="tags-main" data-aos="fade-up">
            <p className="PostTags">Post Tags:</p>
            <div>
              <p className="design">DESIGN</p>
              <p className="design">CREATIVE</p>
            </div>
          </div>
          <div className="button-container" data-aos="fade-up">
            <button>
              <svg
                className="prev-arrow-blog"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_282_13)">
                  <path
                    d="M5 12H19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12L9 16"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12L9 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_282_13">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Prev
            </button>
            <div
              className="share-button view-modal"
              onClick={handleViewButtonClick}
            >
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_282_25)">
                    <path
                      d="M3 12C3 12.7956 3.31607 13.5587 3.87868 14.1213C4.44129 14.6839 5.20435 15 6 15C6.79565 15 7.55871 14.6839 8.12132 14.1213C8.68393 13.5587 9 12.7956 9 12C9 11.2044 8.68393 10.4413 8.12132 9.87868C7.55871 9.31607 6.79565 9 6 9C5.20435 9 4.44129 9.31607 3.87868 9.87868C3.31607 10.4413 3 11.2044 3 12Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 6C15 6.79565 15.3161 7.55871 15.8787 8.12132C16.4413 8.68393 17.2044 9 18 9C18.7956 9 19.5587 8.68393 20.1213 8.12132C20.6839 7.55871 21 6.79565 21 6C21 5.20435 20.6839 4.44129 20.1213 3.87868C19.5587 3.31607 18.7956 3 18 3C17.2044 3 16.4413 3.31607 15.8787 3.87868C15.3161 4.44129 15 5.20435 15 6Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 18C15 18.7956 15.3161 19.5587 15.8787 20.1213C16.4413 20.6839 17.2044 21 18 21C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 17.2044 20.6839 16.4413 20.1213 15.8787C19.5587 15.3161 18.7956 15 18 15C17.2044 15 16.4413 15.3161 15.8787 15.8787C15.3161 16.4413 15 17.2044 15 18Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.69922 10.7L15.2992 7.30005"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.69922 13.3L15.2992 16.7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_282_25">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <button>
              Next
              <svg
                className="next-arrow-blog"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clipPath="url(#clip0_282_20)">
                  <path
                    d="M5 12H19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 16L19 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 8L19 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_282_20">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
        {/* <!-- ====================================== Share Pop Up ===================================== --> */}
        <div className={`overlay2 ${isModalOpen ? "show" : ""}`}></div>
        <div className={`popup ${isModalOpen ? "show" : ""}`}>
          <header>
            <span>Share Link</span>
            <div className="close" onClick={handleCloseButtonClick}>
              <img src={CloseSvg} alt="icons8-close" />
            </div>
          </header>
          <div className="content-share">
            <p>Share this link via</p>
            <ul className="icons">
              <li>
                <Link to="https://www.facebook.com/">
                  <img src={Facebook} alt="icons8-facebook" />
                </Link>
              </li>
              <li>
                <Link to="https://twitter.com/">
                  <img src={Twitter} alt="icons8-twitter" />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/">
                  <img src={Instagram} alt="icons8-instagram" />
                </Link>
              </li>
              <li>
                <Link to="https://wa.me/+1451356888">
                  <img src={Whatsapp} alt="icons8-whatsapp" />
                </Link>
              </li>
              <li>
                <Link to="https://in.linkedin.com/">
                  <img src={LinkedIn} alt="icons8-linkedin" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- ====================================== Share Pop Up ===================================== --> */}
        <div className="col-xxl-4 col-xl-4 col-lg-4 overflow-hidden">
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
                  <p className="implements-date">APRIL 25, 2024 _ DESIGN</p>
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
                  <p className="implements-date">APRIL 25, 2024 _ DESIGN</p>
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
                  <p className="implements-date">APRIL 25, 2024 _ DESIGN</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== single blog Section Two End ===================================== --> */}
    </>
  );
};
export default SectionTwo;
