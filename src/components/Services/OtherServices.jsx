import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import CreativeImg1 from "../../assets/images/creative-img1.svg";
import CreativeImg2 from "../../assets/images/creative-img2.svg";
import CreativeImg3 from "../../assets/images/creative-img3.svg";
import CreativeImg4 from "../../assets/images/creative-img4.svg";

const OtherServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const accordionData = [
    {
      title: "How to learn digital marketing?",
      content:
        "Felis ac sem aliquet egestas lacus suspendisse sed. Imperdiet placerat sed et urna non. Aliquam dolor augue in enim ultrices placerat iaculis. Eleifend viverra lorem ut leo egestas orci odio lorem odio. Amet nulla ac dignissim nulla gravida. Sed placerat maecenas cras vitae cursus.",
    },
    {
      title: "Unique brand identity and strategy",
      content:
        "Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque. Morbi felis pellentesque ligula sed dictumst. Imperdiet nunc vulputate metus pellentesque.Felis ac sem aliquet egestas lacus suspendisse sed. Imperdiet placerat sed et urna non. Aliquam dolor augue in enim ultrices placerat iaculis. Eleifend viverra lorem ut leo egestas orci odio lorem odio. Amet nulla ac dignissim nulla gravida. Sed placerat maecenas cras vitae cursus.",
    },
    {
      title: "Why didn’t you showcase my submission?",
      content:
        "Imperdiet placerat sed et urna non. Aliquam dolor augue in enim ultrices placerat iaculis. Eleifend viverra lorem ut leo egestas orci odio lorem odio. Amet nulla ac dignissim nulla gravida. Sed placerat maecenas cras vitae cursus. Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque. Morbi felis pellentesque ligula sed dictumst. Imperdiet nunc vulputate metus pellentesque.",
    },
    {
      title: "What everybody ought to know about digital marketing?",
      content:
        "Imperdiet placerat sed et urna non. Aliquam dolor augue in enim ultrices placerat iaculis. Eleifend viverra lorem ut leo egestas orci odio lorem odio. Amet nulla ac dignissim nulla gravida. Sed placerat maecenas cras vitae cursus. Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque. Morbi felis pellentesque ligula sed dictumst. Imperdiet nunc vulputate metus pellentesque.",
    },
    {
      title: "Scelerisque turpis purus sit enim.",
      content:
        "Felis ac sem aliquet egestas lacus suspendisse sed. Imperdiet placerat sed et urna non. Aliquam dolor augue in enim ultrices placerat iaculis. Eleifend viverra lorem ut leo egestas orci odio lorem odio. Amet nulla ac dignissim nulla gravida. Sed placerat maecenas cras vitae cursus.",
    },
  ];
  return (
    <>
      <div className="row overflow-hidden">
        <div className="col-xxl-8 col-xl-8 col-lg-8 ">
          <h2 className="build" data-aos="fade-up">
            Build A Unique Website With biogi HTML Template
          </h2>
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
            Sed ut perspiciatis unde omnis iste natus et
          </h2>
          <p className="nunc-text" data-aos="fade-up">
            Ullamcorper nunc mattis volutpat volutpat sed natoque eget
            fermentum. Tortor rhoncus nisl purus cras pharetra sit adipiscing.
            Amet vel blandit dolor neque malesuada venenatis morbi tincidunt
            lorem. Lorem vulputate id in risus adipiscing lectus enim. Semper et
            velit risus arcu in dapibus turpis scelerisque. Et nunc id tristique
            a pharetra accumsan magna.
          </p>
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
          <h2 className="sed" data-aos="fade-up">
            My Process for Creative Features
          </h2>
          <div className="cerative-box-main" data-aos="fade-up">
            <div className="creative-box">
              <img
                className="creative-img"
                src={CreativeImg1}
                alt="creative-img1"
              />
              <p className="creative-ideas-text">Creative ideas</p>
              <p className="nuncmattis">
                Ullamcorper nunc mattis volutpat volutpat sed natoque eget
                fermentum. Tortor rhoncus nisl purus cras pharetra sit
                adipiscing.
              </p>
            </div>
            <div className="creative-box" data-aos="fade-up">
              <img
                className="creative-img"
                src={CreativeImg2}
                alt="creative-img2"
              />
              <p className="creative-ideas-text">Support clients</p>
              <p className="nuncmattis">
                Diam tellus turpis ullamcorper vel faucibus morbi faucibus quam.
                In accumsan consequat ut venenatis Sed quam feugiat diam.
              </p>
            </div>
            <div className="creative-box" data-aos="fade-up">
              <img
                className="creative-img"
                src={CreativeImg3}
                alt="creative-img3"
              />
              <p className="creative-ideas-text">The best development</p>
              <p className="nuncmattis">
                Quis cursus sodales cras feugiat tempus ornare. Nunc adipiscing
                at semper dolor vestibulum sit molestie Dictum consequat risus.
              </p>
            </div>
            <div className="creative-box" data-aos="fade-up">
              <img
                className="creative-img"
                src={CreativeImg4}
                alt="creative-img4"
              />
              <p className="creative-ideas-text">Solve problems</p>
              <p className="nuncmattis">
                Bibendum urna magna arcu cursus in sed amet risus. Magna odio
                lectus aliquet nisl aliquet. Felis et eget gravida a.
              </p>
            </div>
          </div>
          <h2 className="sed" data-aos="fade-up">
            Frequently Ask Question
          </h2>
          <div id="faq-sec">
            {accordionData.map((item, index) => (
              <div
                className="nested-accordion nested-accordion2"
                data-aos="fade-up"
                key={index}
              >
                <h3
                  className={`boder-top boder-top-single-services ${
                    activeIndex === index ? "selected" : ""
                  }`}
                  onClick={() => handleToggle(index)}
                >
                  {item.title}
                </h3>
                <div
                  className="comment"
                  style={{
                    display: activeIndex === index ? "block" : "none",
                  }}
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 overflow-hidden">
          <div
            className="other-services-main other-services-main-spacer"
            data-aos="fade-left"
          >
            <p className="other-services">Other Services</p>
            <p className="other-services-sub-text current-page-active">
              <Link to="/single_service">UI/UX Experience</Link>
            </p>
            <p className="other-services-sub-text">
              <Link to="#">Web Development</Link>
            </p>
            <p className="other-services-sub-text">
              <Link to="#">Digital Marketing</Link>
            </p>
            <p className="other-services-sub-text">
              <Link to="#">Product Design</Link>
            </p>
            <p className="other-services-sub-text">
              <Link to="#">Branding & Illustration</Link>
            </p>
            <p className="other-services-sub-text border-0 ">
              <Link to="#">Mobile Solutions</Link>
            </p>
          </div>
          <div
            className="other-services-main other-services-main2"
            data-aos="fade-left"
          >
            <div className="call-svg-main">
              <Link to="tel:+(1)2345678899">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <g clipPath="url(#clip0_233_43)">
                    <path
                      d="M10 8H18L22 18L17 21C19.1419 25.3431 22.6569 28.8581 27 31L30 26L40 30V38C40 39.0609 39.5786 40.0783 38.8284 40.8284C38.0783 41.5786 37.0609 42 36 42C28.1985 41.5259 20.8403 38.213 15.3137 32.6863C9.78701 27.1597 6.4741 19.8015 6 12C6 10.9391 6.42143 9.92172 7.17157 9.17157C7.92172 8.42143 8.93913 8 10 8Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30 14C31.0609 14 32.0783 14.4214 32.8284 15.1716C33.5786 15.9217 34 16.9391 34 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30 6C33.1826 6 36.2348 7.26428 38.4853 9.51472C40.7357 11.7652 42 14.8174 42 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_233_43">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
            <div className="call-anytime-box-main" data-aos="fade-left">
              <p className="other-services service_provider">
                Looking for Ui/Ux Design Service Provider?
              </p>
              <p className="call-anytime">CALL ANYTIME</p>
              <div className="call-anytime-btn">
                <Link to="tel:+(1)2345678899">+(1) 234 567 8899</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OtherServices;
