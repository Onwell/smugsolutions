import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import TabContentImg from "../../assets/images/tab-content-img.jpg";
import TabContentImg2 from "../../assets/images/tab-content-img2.jpg";
import HtmlVideoImg from "../../assets/images/html-video-img.jpg";
import GalleryTabImg from "../../assets/images/gallery-tab-img.jpg";
import YtVideoImg from "../../assets/images/yt-video-img.jpg";
import VimeoVideoImg from "../../assets/images/vimeo-video.jpg";
import SoundCloudImg from "../../assets/images/sound-cloud-img.jpg";
import ProductImg from "../../assets/images/product-img.jpg";
import videoSrc from "../../assets/video/waterfall.mp4";
import $ from "jquery";
import "magnific-popup";
import "../../../node_modules/magnific-popup/dist/magnific-popup.css";

const SectionThree = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isOpen, setIsOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const handleClick = () => {
    window.location.to = "/portfolio";
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("blur");
  };

  const openModal = () => {
    setIsModelOpen(true);
  };

  const closeModal = () => {
    setIsModelOpen(false);
  };

  useEffect(() => {
    $(".youtube").magnificPopup({
      items: {
        src: "https://www.youtube.com/watch?v=IMxDeACOWCE",
      },
      type: "iframe",
    });
  }, []);

  useEffect(() => {
    $("#vimeo").magnificPopup({
      items: {
        src: "https://vimeo.com/259411563",
      },
      type: "iframe",
    });
  }, []);

  useEffect(() => {
    $(".link").magnificPopup({
      type: "soundcloud",
      items: {
        src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163522130&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      },
      type: "iframe",
    });
  }, []);
  return (
    <>
      {/* <!-- ====================================== Services Section Three ===================================== --> */}
      <section className="section-five section-five-services overflow-hidden">
        <div className="container">
          <p className="our-services discover-our-cases" data-aos="fade-up">
            DISCOVER OUR CASES
          </p>
          <div className="tab-header">
            <div>
              <h2 className="our-solution latest_project" data-aos="fade-down">
                Latest Projects.
              </h2>
            </div>
            <div className="tab-bar" data-aos="fade-up">
              <button
                className={`tab-button ${activeTab === "tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("tab1")}
                data-tab="tab1"
              >
                <span>8</span>ALL
              </button>
              <button
                className={`tab-button ${activeTab === "tab2" ? "active" : ""}`}
                onClick={() => handleTabClick("tab2")}
                data-tab="tab2"
              >
                <span>2</span>CONTENT
              </button>
              <button
                className={`tab-button ${activeTab === "tab3" ? "active" : ""}`}
                onClick={() => handleTabClick("tab3")}
                data-tab="tab3"
              >
                <span>2</span>GALLERY
              </button>
              <button
                className={`tab-button ${activeTab === "tab4" ? "active" : ""}`}
                onClick={() => handleTabClick("tab4")}
                data-tab="tab4"
              >
                <span>1</span>HTML VIDEO
              </button>
              <button
                className={`tab-button ${activeTab === "tab5" ? "active" : ""}`}
                onClick={() => handleTabClick("tab5")}
                data-tab="tab5"
              >
                <span>1</span>YT VIDEO
              </button>
              <button
                className={`tab-button ${activeTab === "tab6" ? "active" : ""}`}
                onClick={() => handleTabClick("tab6")}
                data-tab="tab6"
              >
                <span>1</span>VIMEO VIDEO
              </button>
              <button
                className={`tab-button ${activeTab === "tab7" ? "active" : ""}`}
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
              <div className="tab-imgs-main">
                <div className="tab1sub grid">
                  <div className="effect-milo trigger" onClick={toggleModal}>
                    <img
                      className="tab-imgs"
                      src={TabContentImg}
                      alt="tab-content-img"
                    />
                    <p className="tab-content-text">CONTENT</p>
                    <h2 className="tab-product-design">
                      Unique Product Design
                    </h2>
                  </div>
                  <div className="effect-milo html-popup" onClick={openModal}>
                    <img
                      className="tab-imgs"
                      src={HtmlVideoImg}
                      alt="html-video-img"
                    />
                    <p className="tab-content-text">HTML VIDEO</p>
                    <h2 className="tab-product-design">Ecommerce Website UI</h2>
                  </div>
                  <div>
                    <button
                      className="explore-btn hover-slide-right see-more-btn"
                      onClick={handleClick}
                    >
                      <span>
                        SEE MORE WORKS
                        <svg
                          className="expo-arrow2"
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
                      </span>
                    </button>
                  </div>
                </div>
                <div className="tab1sub grid" id="pop">
                  <Link to="#popup2">
                    <div className="effect-milo">
                      <img
                        className="tab-imgs"
                        src={GalleryTabImg}
                        alt="gallery-tab-img"
                      />
                      <p className="tab-content-text">GALLERY</p>
                      <h2 className="tab-product-design">
                        Mobile App for Car Rental
                      </h2>
                    </div>
                  </Link>
                  <div className="effect-milo youtube">
                    <img
                      className="tab-imgs"
                      src={YtVideoImg}
                      alt="yt-video-img"
                    />
                    <p className="tab-content-text">YT VIDEO</p>
                    <h2 className="tab-product-design">Product Development</h2>
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
              <div className="tab-imgs-main">
                <div className="tab1sub grid">
                  <div className="effect-milo trigger" onClick={toggleModal}>
                    <img
                      className="tab-imgs"
                      src={TabContentImg}
                      alt="tab-content-img"
                    />
                    <p className="tab-content-text">CONTENT</p>
                    <h2 className="tab-product-design p-0">
                      Unique Product Design
                    </h2>
                  </div>
                </div>
                <div className="tab1sub grid">
                  <div className="effect-milo trigger" onClick={toggleModal}>
                    <img
                      className="tab-imgs"
                      src={TabContentImg2}
                      alt="tab-content-img2"
                    />
                    <p className="tab-content-text">CONTENT</p>
                    <h2 className="tab-product-design p-0">
                      Ecommerce Website UI
                    </h2>
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
              <div className="tab-imgs-main">
                <div className="tab1sub grid">
                  <div className="effect-milo" onClick={toggleModal}>
                    <img
                      className="tab-imgs"
                      src={TabContentImg2}
                      alt="tab-content-img"
                    />
                    <p className="tab-content-text">GALLERY</p>
                    <h2 className="tab-product-design p-0">
                      Unique Product Design
                    </h2>
                  </div>
                </div>
                <div className="tab1sub grid">
                  <Link to="#popup2">
                    <div className="effect-milo">
                      <img
                        className="tab-imgs"
                        src={HtmlVideoImg}
                        alt="html-video-img"
                      />
                      <p className="tab-content-text">GALLERY</p>
                      <h2 className="tab-product-design p-0">
                        Ecommerce Website UI
                      </h2>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div
              id="tab4"
              className={`tab-pane tab-pane2 ${
                activeTab === "tab4" ? "active" : ""
              }`}
            >
              <div className="tab-imgs-main">
                <div className="tab1sub grid">
                  <div className="effect-milo html-popup" onClick={openModal}>
                    <img
                      className="tab-imgs"
                      src={HtmlVideoImg}
                      alt="html-video-img"
                    />
                    <p className="tab-content-text">HTML VIDEO</p>
                    <h2 className="tab-product-design p-0">
                      Ecommerce Website UI
                    </h2>
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
              <div className="tab-imgs-main">
                <div className="tab1sub grid">
                  <div className="effect-milo youtube">
                    <img
                      className="tab-imgs"
                      src={YtVideoImg}
                      alt="yt-video-img"
                    />
                    <p className="tab-content-text">YT VIDEO</p>
                    <h2 className="tab-product-design p-0">
                      Product Development
                    </h2>
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
              <div className="tab-imgs-main">
                <div className="tab1sub grid">
                  <div className="effect-milo" id="vimeo">
                    <img
                      className="tab-imgs"
                      src={VimeoVideoImg}
                      alt="vimeo-video"
                    />
                    <p className="tab-content-text">VIMEO VIDEO</p>
                    <h2 className="tab-product-design p-0">
                      Product Development
                    </h2>
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
              <div className="tab-imgs-main">
                <div className="tab1sub grid">
                  <div className="effect-milo link">
                    <img
                      className="tab-imgs"
                      src={SoundCloudImg}
                      alt="sound-cloud-img"
                    />
                    <p className="tab-content-text">SOUND CLOUD</p>
                    <h2 className="tab-product-design p-0">
                      Product Development
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Services Section Three End===================================== --> */}

      {/* <!-- ======================================= CONTENT PopUp  ================================== --> */}
      {isOpen && (
        <div className="modal-wrapper open">
          <div className="modal">
            <div className="content3">
              <h3 className="logo_design">Unique Product Design</h3>
              <div className="blog_pop_up_main">
                <img
                  className="blog_pop_up"
                  src={ProductImg}
                  alt="product-img"
                />
              </div>
              <h4 className="nunc">
                Mi fames nunc donec diam mi arcu. Vitae justo consequat blandit
                proin tellus feugiat dignissim. Nibh fames cursus amet tempor
                pharetra. Sit nulla aliquam adipiscing auctor non id adipiscing
                dictum non. Augue id eleifend facilisi ac egestas dui quis. Sit
                a viverra tristique volutpat amet odio. Molestie blandit et
                donec convallis rhoncus.
              </h4>
              <h4 className="nunc">
                Non tincidunt pulvinar nunc enim pulvinar purus pellentesque est
                felis. Et quam rhoncus egestas in sed at pellentesque faucibus.
                Diam sollicitudin non et placerat odio sed nunc. Faucibus tempor
                nunc eu volutpat auctor cursus quis. Scelerisque nisi turpis in
                lorem magna ultrices.
              </h4>
              <div className="blog-pop-up-list-main">
                <ul className="blog-pop-up-list">
                  <li>
                    Mi fames nunc donec diam mi arcu. Vitae justo consequat
                    blandit proin tellus feugiat dignissim.
                  </li>
                  <li>Nibh fames cursus amet tempor pharetra.</li>
                  <li>
                    Sit nulla aliquam adipiscing auctor non id adipiscing dictum
                    non.
                  </li>
                  <li>
                    Augue id eleifend facilisi ac egestas dui quis. Sit a
                    viverra tristique volutpat amet odio.
                  </li>
                  <li>Molestie blandit et donec convallis rhoncus.</li>
                  <li>
                    Non tincidunt pulvinar nunc enim pulvinar purus pellentesque
                    est felis.
                  </li>
                  <li>
                    Et quam rhoncus egestas in sed at pellentesque faucibus.
                    Diam sollicitudin non et placerat odio sed nunc.
                  </li>
                </ul>
              </div>
              <h5 className="nunc">
                Non vel eget pharetra vestibulum orci amet feugiat mi cras.
                Neque ac duis sed viverra volutpat. Natoque habitasse sit in
                interdum ut in pharetra proin amet. Non id egestas tellus enim
                nisi proin. Vel neque gravida sed nunc. Scelerisque vulputate
                sit tellus dui. Sollicitudin id nec amet porttitor id. In
                condimentum id id phasellus eu lobortis quis porta nisi.
              </h5>
              <div className="page-wrapper trigger">
                <div className="circle-wrapper" onClick={toggleModal}>
                  <div className="warning circle_close"></div>
                  <div className="close-btn-text">CLOSE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <!-- ======================================= Html video Pop Up ================================== --> */}
      {isModelOpen && (
        <div className="custom-model-main model-open">
          <div className="custom-model-inner">
            <div className="custom-model-wrap">
              <div className="pop-up-content-wrap">
                <div className="close-btn" onClick={closeModal}>
                  ×
                </div>
                <video src={videoSrc} loop controls autoPlay></video>
              </div>
            </div>
          </div>
          <div className="bg-overlay" onClick={closeModal}></div>
        </div>
      )}
    </>
  );
};
export default SectionThree;
