import React, { useEffect, useState } from "react";
import AOS from "aos";
import TabContentImg from "../../assets/images/tab-content-img.jpg";
import TabContentImg2 from "../../assets/images/tab-content-img2.jpg";
import HtmlVideoImg from "../../assets/images/html-video-img.jpg";
import GalleryTabImg from "../../assets/images/gallery-tab-img.jpg";
import YtVideoImg from "../../assets/images/yt-video-img.jpg";
import VimeoVideoImg from "../../assets/images/vimeo-video.jpg";
import SoundCloudImg from "../../assets/images/sound-cloud-img.jpg";
import { Link, useNavigate } from "react-router-dom";

const SectionFive = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/portfolio");
  };
  return (
    <>
      {/* <!-- ====================================== Section Five ===================================== --> */}
      <section className="section-five overflow-hidden">
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
            >
              <div className="tab-imgs-main">
                <div className="tab1sub grid">
                  <Link to="/portfolio">
                    <div className="effect-milo">
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
                  </Link>
                  <Link to="/portfolio">
                    <div className="effect-milo">
                      <img
                        className="tab-imgs"
                        src={HtmlVideoImg}
                        alt="html-video-img"
                      />
                      <p className="tab-content-text">HTML VIDEO</p>
                      <h2 className="tab-product-design">
                        Ecommerce Website UI
                      </h2>
                    </div>
                  </Link>
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
                  <Link to="/portfolio">
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
                  <Link to="/portfolio">
                    <div className="effect-milo">
                      <img
                        className="tab-imgs"
                        src={YtVideoImg}
                        alt="yt-video-img"
                      />
                      <p className="tab-content-text">YT VIDEO</p>
                      <h2 className="tab-product-design">
                        Product Development
                      </h2>
                    </div>
                  </Link>
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
                <Link to="/portfolio">
                  <div className="tab1sub grid">
                    <div className="effect-milo">
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
                </Link>
                <Link to="/portfolio">
                  <div className="tab1sub grid">
                    <div className="effect-milo">
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
                </Link>
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
                  <Link to="/portfolio">
                    <div className="effect-milo">
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
                  </Link>
                </div>
                <div className="tab1sub grid">
                  <Link to="/portfolio">
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
                  <Link to="/portfolio">
                    <div className="effect-milo">
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
                  </Link>
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
                  <Link to="/portfolio">
                    <div className="effect-milo">
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
                  </Link>
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
                  <Link to="/portfolio">
                    <div className="effect-milo">
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
                  </Link>
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
                  <Link to="/portfolio">
                    <div className="effect-milo">
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Five End ===================================== --> */}
    </>
  );
};
export default SectionFive;
