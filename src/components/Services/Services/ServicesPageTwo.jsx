import React, { useEffect, useState } from "react";
import AOS from "aos";
import Header from "../../../common/Header";
import Loader from "../../../common/Loader";
import { Link, useNavigate } from "react-router-dom";
import StarCircle from "../../../assets/images/star-circle-svg.svg";
import MarqueSection from "../../../common/MarqueSection";
import FlowerHoverImg1 from "../../../assets/images/flower-hover-img1.jpg";
import FlowerHoverImg2 from "../../../assets/images/flower-hover-img2.jpg";
import FlowerHoverImg3 from "../../../assets/images/flower-hover-img3.jpg";
import FlowerHoverImg4 from "../../../assets/images/flower-hover-img4.jpg";
import FlowerHoverImg5 from "../../../assets/images/flower-hover-img5.jpg";
import FlowerHoverImg6 from "../../../assets/images/flower-hover-img6.jpg";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import ProgressCircle from "../../../common/ProgressCircle";

const ServicesPageTwo = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/single_services2");
  };
  const services = [
    {
      id: 1,
      heading: "Unique Product Design.",
      strategy:
        "Strategy that involves creating and sharing content on social a website's media platforms.Strategy that involves creating and sharing content on social a website's media platforms.",
      imgSrc: FlowerHoverImg1,
      link: "/single_services2",
      tags: ["Typography", "Usability", "Hierarchy"],
    },
    {
      id: 2,
      heading: "Mobile App for Car Rental.",
      strategy:
        "Strategy that involves creating and sharing content on social a website's media platforms.Strategy that involves creating and sharing content on social a website's media platforms.",
      imgSrc: FlowerHoverImg2,
      link: "/single_services2",
      tags: ["Typography", "Usability", "Hierarchy"],
    },
    {
      id: 3,
      heading: "Ecommerce Website UI.",
      strategy:
        "Strategy that involves creating and sharing content on social a website's media platforms.Strategy that involves creating and sharing content on social a website's media platforms.",
      imgSrc: FlowerHoverImg3,
      link: "/single_services2",
      tags: ["Typography", "Usability", "Hierarchy"],
    },
    {
      id: 4,
      heading: "Product Developement.",
      strategy:
        "Strategy that involves creating and sharing content on social a website's media platforms.Strategy that involves creating and sharing content on social a website's media platforms.",
      imgSrc: FlowerHoverImg2,
      link: "/single_services2",
      tags: ["Typography", "Usability", "Hierarchy"],
    },
    {
      id: 5,
      heading: "Next Generation.",
      strategy:
        "Strategy that involves creating and sharing content on social a website's media platforms.Strategy that involves creating and sharing content on social a website's media platforms.",
      imgSrc: FlowerHoverImg5,
      link: "/single_services2",
      tags: ["Typography", "Usability", "Hierarchy"],
    },
    {
      id: 6,
      heading: "Avtar Yoga Space.",
      strategy:
        "Strategy that involves creating and sharing content on social a website's media platforms.Strategy that involves creating and sharing content on social a website's media platforms.",
      imgSrc: FlowerHoverImg2,
      link: "/single_services2",
      tags: ["Typography", "Usability", "Hierarchy"],
    },
  ];
  return (
    <>
      <Loader />
      <div className="site_contain">
        {/* <!-- ====================================== Header Menu ===================================== --> */}
        <Header />
        {/* <!-- ====================================== Header Menu End===================================== --> */}
        {/* <!-- ====================================== Services Section One ===================================== --> */}
        <section
          className="single-blog2-section-main overflow-hidden"
          id="main"
        >
          <div className="container">
            <p className="main-text" data-aos="fade-down">
              Experienced Freelancer
            </p>
            <h1 className="JessicaBiogi blog2-main-text" data-aos="fade-down">
              My Services
            </h1>
            <nav aria-label="breadcrumb" id="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  <Link to="/services2">Services</Link>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        {/* <!-- ====================================== Services Section One End===================================== --> */}
        {/* <!-- ====================================== Services Section Two ===================================== --> */}
        <section className="section-three overflow-hidden">
          <div className="container">
            <h2 className="our-solution methodology" data-aos="fade-up">
              Explore Me.
            </h2>
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 methodology-box-main-col">
                <div className="methodology-box-main">
                  <img
                    className="star-circle-svg"
                    src={StarCircle}
                    alt="star-circle-svg"
                  />
                  <svg
                    className="services-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                  >
                    <path d="M58.75 43.0312C63.2969 43.0312 67.8594 42.5312 72.2812 41.5156L78.9062 40L72.2969 38.4844C64.0781 36.6094 55.4375 36.4688 47.1562 38.0781C46.8438 36.9062 46.25 35.8594 45.4531 35L66.25 14.2031L65.8125 13.7656L45 34.5469C44.1406 33.75 43.0781 33.1562 41.9219 32.8438C43.5312 24.5625 43.3906 15.9219 41.5156 7.70312L40 1.09375L38.4844 7.70312C36.6094 15.9219 36.4688 24.5625 38.0781 32.8438C36.9062 33.1562 35.8594 33.75 35 34.5469L14.2031 13.75L13.75 14.2031L34.5469 35C33.75 35.8594 33.1562 36.9219 32.8438 38.0781C24.5625 36.4688 15.9219 36.6094 7.70312 38.4844L1.09375 40L7.70312 41.5156C12.125 42.5312 16.6875 43.0312 21.2344 43.0312C25.125 43.0312 29.0156 42.6562 32.8438 41.9219C33.1562 43.0938 33.75 44.1406 34.5469 45L13.75 65.7969L14.1875 66.2344L35 45.4531C35.8594 46.25 36.9219 46.8438 38.0781 47.1562C36.4688 55.4375 36.6094 64.0781 38.4844 72.2969L40 78.9062L41.5156 72.2969C43.3906 64.0781 43.5312 55.4375 41.9219 47.1562C43.0938 46.8438 44.1406 46.25 45 45.4531L65.7969 66.25L66.2344 65.8125L45.4531 45C46.25 44.1406 46.8438 43.0781 47.1562 41.9219C50.9687 42.6719 54.8594 43.0312 58.75 43.0312ZM72.1406 39.0938L76.0938 40L72.1406 40.9062C64.0156 42.7656 55.4688 42.9062 47.2812 41.3125C47.3594 40.8906 47.4062 40.4531 47.4062 40C47.4062 39.5469 47.3594 39.1094 47.2812 38.6875C55.4688 37.0938 64.0156 37.2344 72.1406 39.0938ZM39.0938 7.85938L40 3.90625L40.9062 7.85938C42.7656 15.9844 42.9062 24.5312 41.3125 32.7188C40.8906 32.6406 40.4531 32.5938 40 32.5938C39.5469 32.5938 39.1094 32.6406 38.6875 32.7188C37.0938 24.5312 37.2344 15.9844 39.0938 7.85938ZM7.85938 40.9062L3.90625 40L7.85938 39.0938C15.9844 37.2344 24.5312 37.0938 32.7188 38.6875C32.6406 39.1094 32.5938 39.5469 32.5938 40C32.5938 40.4531 32.6406 40.8906 32.7188 41.3125C24.5312 42.9062 15.9844 42.7656 7.85938 40.9062ZM40.9062 72.1406L40 76.0938L39.0938 72.1406C37.2344 64.0156 37.0938 55.4688 38.6875 47.2812C39.1094 47.3594 39.5469 47.4062 40 47.4062C40.4531 47.4062 40.8906 47.3594 41.3125 47.2812C42.9062 55.4688 42.7656 64.0156 40.9062 72.1406Z"></path>
                  </svg>
                  <h2>UI/UX Experience</h2>
                  <p>
                    Automate repetitive marketing tasks, nurture leads, and
                    streamline.
                  </p>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 methodology-box-main-col">
                <div className="methodology-box-main">
                  <img
                    className="star-circle-svg"
                    src={StarCircle}
                    alt="star-circle-svg"
                  />
                  <svg
                    className="services-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                  >
                    <path d="M72.766 52.1876C70.266 48.2657 66.9848 44.1407 63.1254 40.0001C66.9848 35.8595 70.266 31.7345 72.766 27.8126C77.8441 19.8595 79.141 13.6563 76.4535 10.3282C73.7504 7.01571 67.4066 7.03134 58.5941 10.3907C52.8441 12.5782 46.4691 16.0157 40.0004 20.3751C33.5473 16.0157 27.1722 12.5938 21.4066 10.3907C12.5941 7.03134 6.25037 7.01571 3.54725 10.3282C0.844122 13.6407 2.15662 19.8595 7.23475 27.8126C9.73475 31.7345 13.016 35.8751 16.8754 40.0001C13.016 44.1407 9.73475 48.2657 7.23475 52.1876C2.15662 60.1407 0.859746 66.3438 3.54725 69.672C4.891 71.3126 7.12537 72.1407 10.1254 72.1407C13.1566 72.1407 16.9691 71.297 21.4066 69.6095C27.1566 67.422 33.5316 63.9845 40.0004 59.6251C46.4535 63.9845 52.8285 67.422 58.5941 69.6095C63.0316 71.297 66.8441 72.1407 69.8754 72.1407C72.8754 72.1407 75.1097 71.3126 76.4535 69.672C79.1566 66.3595 77.8441 60.1563 72.766 52.1876ZM58.8129 10.9688C63.0004 9.37509 66.6254 8.54696 69.5629 8.48446C72.5473 8.42196 74.7035 9.18759 75.9535 10.7188C77.2035 12.2657 77.5004 14.5157 76.8441 17.4376C76.1879 20.3126 74.641 23.6876 72.2347 27.4688C69.7504 31.3595 66.516 35.4376 62.6879 39.547C58.9223 35.5626 54.6254 31.5782 49.9535 27.7657C46.8441 25.2345 43.6879 22.8751 40.5472 20.7501C46.9066 16.4845 53.1566 13.1251 58.8129 10.9688ZM7.766 27.4688C5.35975 23.6876 3.79725 20.3126 3.15662 17.4376C2.50037 14.5157 2.79725 12.2657 4.04725 10.7188C5.25037 9.23446 7.29725 8.48446 10.141 8.48446H10.4535C13.4066 8.54696 17.016 9.37509 21.2035 10.9688C26.8597 13.1095 33.1098 16.4845 39.4535 20.7345C36.3129 22.8751 33.1566 25.2188 30.0473 27.7501C25.3754 31.547 21.0785 35.547 17.3129 39.5313C13.4847 35.4532 10.2347 31.3595 7.766 27.4688ZM21.1879 69.0313C17.0004 70.6251 13.3754 71.4532 10.4379 71.5157C7.4535 71.5782 5.29725 70.8126 4.04725 69.2813C2.79725 67.7345 2.50037 65.4845 3.15662 62.5626C3.81287 59.6876 5.35975 56.3126 7.766 52.5313C10.2504 48.6407 13.4847 44.5626 17.3129 40.4532C21.0785 44.4376 25.3754 48.422 30.0473 52.2345C33.1566 54.7657 36.3129 57.1251 39.4535 59.2501C33.0941 63.5157 26.8441 66.8751 21.1879 69.0313ZM30.4379 51.7501C25.7816 47.9532 21.4847 43.9845 17.7347 40.0001C21.4847 36.0157 25.7816 32.047 30.4379 28.2501C33.5941 25.672 36.8129 23.2813 40.0004 21.1251C43.1879 23.297 46.4066 25.6876 49.5629 28.2501C54.2348 32.047 58.516 36.0157 62.266 40.0001C58.516 43.9845 54.2191 47.9532 49.5629 51.7501C46.4066 54.3282 43.1879 56.7188 40.0004 58.8751C36.8129 56.7032 33.5941 54.3126 30.4379 51.7501ZM75.9691 69.2813C74.7191 70.8282 72.5629 71.5782 69.5785 71.5157C66.6254 71.4532 63.016 70.6251 58.8285 69.0313C53.1723 66.8907 46.9223 63.5157 40.5785 59.2657C43.7191 57.1251 46.8754 54.7813 49.9847 52.2501C54.6566 48.4532 58.9535 44.4532 62.7191 40.4688C66.5472 44.5626 69.7816 48.6563 72.266 52.547C74.6723 56.3282 76.2348 59.7032 76.8754 62.5782C77.516 65.4688 77.2191 67.7345 75.9691 69.2813Z"></path>
                    <path d="M41.7656 39.2656L45.3906 34.6094L40.7344 38.2344L40 27.2812L39.2656 38.2344L34.6094 34.6094L38.2344 39.2656L32.375 40L38.2344 40.7344L34.6094 45.3906L39.2656 41.7656L40 52.7187L40.7344 41.7656L45.3906 45.3906L41.7656 40.7344L47.625 40L41.7656 39.2656Z"></path>
                  </svg>
                  <h2>Web Development</h2>
                  <p>Manage client, track interactions Automate repetitive.</p>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 methodology-box-main-col">
                <div className="methodology-box-main">
                  <img
                    className="star-circle-svg"
                    src={StarCircle}
                    alt="star-circle-svg"
                  />
                  <svg
                    className="services-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                  >
                    <path d="M53.7812 15.9688C48.6563 15.9688 43.9062 17.5781 40 20.3281C36.0938 17.5781 31.3438 15.9688 26.2188 15.9688C12.9688 15.9688 2.1875 26.75 2.1875 40C2.1875 53.25 12.9688 64.0312 26.2188 64.0312C31.3438 64.0312 36.0938 62.4219 40 59.6719C43.9062 62.4219 48.6563 64.0312 53.7812 64.0312C67.0312 64.0312 77.8125 53.25 77.8125 40C77.8125 26.75 67.0312 15.9688 53.7812 15.9688ZM42.8438 23.5469L30.7969 35.6094C31.9219 29.6719 35.2969 24.5312 40 21.0938C41.0156 21.8438 41.9688 22.6562 42.8438 23.5469ZM34.8281 53.7031C34.1719 52.7969 33.5781 51.8281 33.0469 50.8281L49.0469 34.8438C49.3438 36.1719 49.5312 37.5469 49.5938 38.9375L34.8281 53.7031ZM31.2344 46.25C30.8906 44.9844 30.6406 43.6719 30.5 42.3281L45.7344 27.0938C46.3594 28.0469 46.9219 29.0312 47.4062 30.0625L31.2344 46.25ZM26.2188 63.4062C13.3125 63.4062 2.8125 52.9062 2.8125 40C2.8125 27.0938 13.3125 16.5938 26.2188 16.5938C31.125 16.5938 35.7031 18.125 39.4688 20.7188C33.5781 25.1094 29.7656 32.1094 29.7656 40C29.7656 47.8906 33.5781 54.8906 39.4688 59.2812C35.6875 61.875 31.125 63.4062 26.2188 63.4062ZM37.8438 57.125L48.7969 46.1562C47.375 51.3438 44.2344 55.8125 40 58.9062C39.25 58.3594 38.5156 57.75 37.8438 57.125ZM53.7812 63.4062C48.875 63.4062 44.2969 61.875 40.5312 59.2812C46.4219 54.8906 50.2344 47.8906 50.2344 40C50.2344 32.1094 46.4219 25.1094 40.5312 20.7188C44.2969 18.125 48.8594 16.5938 53.7812 16.5938C66.6875 16.5938 77.1875 27.0938 77.1875 40C77.1875 52.9062 66.6875 63.4062 53.7812 63.4062Z"></path>
                  </svg>
                  <h2>Digital Marketing</h2>
                  <p>Plan, create, and manage online advertising campaigns.</p>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 methodology-box-main-col">
                <div className="methodology-box-main">
                  <img
                    className="star-circle-svg"
                    src={StarCircle}
                    alt="star-circle-svg"
                  />
                  <svg
                    className="services-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                  >
                    <path d="M59.063 20.9375C58.8911 10.5625 50.4067 2.1875 40.0005 2.1875C29.5942 2.1875 21.1098 10.5781 20.938 20.9375C16.1723 21.0156 11.688 22.8281 8.18796 26.1094C4.48483 29.5938 2.34421 34.3281 2.18796 39.4062C2.03171 44.4844 3.85983 49.3438 7.35983 53.0469C10.8442 56.75 15.5786 58.8906 20.6567 59.0469H20.9223C21.0005 63.8125 22.813 68.3125 26.0942 71.7969C29.5786 75.5 34.313 77.6406 39.3911 77.7969C39.5942 77.7969 39.7973 77.8125 39.9848 77.8125C44.8598 77.8125 49.4692 75.9844 53.0317 72.6406C56.7348 69.1562 58.8755 64.4219 59.0317 59.3438V59.0781C69.4067 58.9062 77.7817 50.4219 77.7817 40.0156C77.813 29.5938 69.4223 21.1094 59.063 20.9375ZM40.0005 2.8125C50.063 2.8125 58.2661 10.9219 58.438 20.9375C49.2505 21.0781 41.6255 27.7656 40.0005 36.5156C39.3442 32.9531 37.688 29.6406 35.1411 26.9375C31.6567 23.2344 26.9223 21.0938 21.8442 20.9375H21.5786C21.7348 10.9219 29.938 2.8125 40.0005 2.8125ZM20.938 58.4375H20.688C15.7661 58.2812 11.188 56.2344 7.82858 52.6406C4.45358 49.0469 2.67233 44.3594 2.82858 39.4375C2.98483 34.5156 5.03171 29.9375 8.62546 26.5781C12.0005 23.4062 16.3442 21.6406 20.938 21.5781C21.0786 30.7656 27.7661 38.3906 36.5161 40.0156C32.9536 40.6719 29.6411 42.3281 26.9223 44.875C23.2192 48.3594 21.0786 53.0938 20.9223 58.1719C20.938 58.25 20.938 58.3438 20.938 58.4375ZM58.438 59.3125C58.2817 64.2344 56.2348 68.8125 52.6411 72.1719C49.0473 75.5469 44.3598 77.3125 39.438 77.1719C34.5161 77.0156 29.938 74.9688 26.5786 71.375C23.4067 68 21.6411 63.6562 21.5786 59.0625C26.3442 58.9844 30.8442 57.1719 34.3286 53.8906C37.3286 51.0781 39.2817 47.4531 40.0161 43.4688C41.6411 52.2344 49.2661 58.9062 58.4536 59.0625C58.438 59.1406 58.438 59.2344 58.438 59.3125ZM59.063 58.4375C58.9848 53.6719 57.1723 49.1719 53.8911 45.6875C51.0786 42.6875 47.4536 40.7344 43.4692 40C52.2348 38.375 58.9067 30.75 59.063 21.5625C69.0942 21.7344 77.188 29.9375 77.188 40C77.188 50.0625 69.0786 58.2656 59.063 58.4375Z"></path>
                  </svg>
                  <h2>Branding & Illustration</h2>
                  <p>
                    Automate repetitive marketing tasks, nurture leads, and
                    streamline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ====================================== Services Section Two End ===================================== --> */}
        {/* <!-- ====================================== User Branding Marquee Section ===================================== --> */}
        <MarqueSection />
        {/* <!-- ====================================== User Branding Marquee Section ===================================== --> */}
        {/* <!-- ====================================== Services Section Three ===================================== --> */}
        <section className="section-five section-five-services overflow-hidden">
          <div className="container">
            <p className="our-services services-cases" data-aos="fade-up">
              DISCOVER OUR CASES
            </p>
            <h2
              className="our-solution latest-project-services"
              data-aos="fade-down"
            >
              Latest Projects.
            </h2>
            <div className="tab-header-services">
              <div className="tab-bar" data-aos="fade-up">
                <button
                  className={`tab-button ${
                    activeTab === "tab1" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab1")}
                  data-tab="tab1"
                >
                  ALL
                </button>
                <button
                  className={`tab-button ${
                    activeTab === "tab2" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab2")}
                  data-tab="tab2"
                >
                  CONTENT
                </button>
                <button
                  className={`tab-button ${
                    activeTab === "tab3" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab3")}
                  data-tab="tab3"
                >
                  GALLERY
                </button>
                <button
                  className={`tab-button ${
                    activeTab === "tab4" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab4")}
                  data-tab="tab4"
                >
                  HTML VIDEO
                </button>
                <button
                  className={`tab-button ${
                    activeTab === "tab5" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab5")}
                  data-tab="tab5"
                >
                  YT VIDEO
                </button>
                <button
                  className={`tab-button ${
                    activeTab === "tab6" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab6")}
                  data-tab="tab6"
                >
                  VIMEO VIDEO
                </button>
                <button
                  className={`tab-button ${
                    activeTab === "tab7" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("tab7")}
                  data-tab="tab7"
                >
                  SOUND CLOUD
                </button>
              </div>
            </div>
            <div className="tab-content-new-services">
              <div
                id="tab1"
                className={`tab-pane tab-pane2 ${
                  activeTab === "tab1" ? "active" : ""
                }`}
                data-aos="zoom-in"
              >
                {services.map((service) => (
                  <div
                    className="beautician-service__area-item has_fade_anim"
                    key={service.id}
                  >
                    <div
                      className="new-services cf_image"
                      onClick={() => (window.location.href = service.link)}
                    >
                      <div className="number-hedaing">
                        <h3 className="numbers-services">{service.id}.</h3>
                        <h3 className="services-heading">{service.heading}</h3>
                      </div>
                      <div className="umber-hedaing-sub">
                        <h3 className="strategy">{service.strategy}</h3>
                        {service.tags.map((tag, index) => (
                          <button className="tag-button-services" key={index}>
                            {tag}
                          </button>
                        ))}
                      </div>
                      <img
                        className="artist__exhibition-thumb"
                        src={service.imgSrc}
                        alt={`flower-hover-img${service.id}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div
                id="tab2"
                className={`tab-pane tab-pane2 ${
                  activeTab === "tab2" ? "active" : ""
                }`}
              >
                <div className="beautician-service__area-item has_fade_anim">
                  <div className="new-services cf_image" onClick={handleClick}>
                    <div className="number-hedaing">
                      <h3 className="numbers-services">1.</h3>
                      <h3 className="services-heading">Avtar Yoga Space.</h3>
                    </div>
                    <div>
                      <p className="strategy">
                        Strategy that involves creating and sharing content on
                        social a website's media platforms.Strategy that
                        involves creating and sharing content on social a
                        website's media platforms.
                      </p>
                      <button className="tag-button-services">
                        Typography
                      </button>
                      <button className="tag-button-services">Usability</button>
                      <button className="tag-button-services">Hierachy</button>
                    </div>
                    <img
                      className="artist__exhibition-thumb"
                      src={FlowerHoverImg6}
                      alt="flower-hover-img6"
                    />
                  </div>
                </div>
                <div className="beautician-service__area-item has_fade_anim">
                  <div className="new-services cf_image" onClick={handleClick}>
                    <div className="number-hedaing">
                      <h3 className="numbers-services">2.</h3>
                      <h3 className="services-heading">Avtar Yoga Space.</h3>
                    </div>
                    <div>
                      <p className="strategy">
                        Strategy that involves creating and sharing content on
                        social a website's media platforms.Strategy that
                        involves creating and sharing content on social a
                        website's media platforms.
                      </p>
                      <button className="tag-button-services">
                        Typography
                      </button>
                      <button className="tag-button-services">Usability</button>
                      <button className="tag-button-services">Hierachy</button>
                    </div>
                    <img
                      className="artist__exhibition-thumb"
                      src={FlowerHoverImg6}
                      alt="flower-hover-img6"
                    />
                  </div>
                </div>
              </div>
              <div
                id="tab3"
                className={`tab-pane tab-pane2 ${
                  activeTab === "tab3" ? "active" : ""
                }`}
              >
                <div className="beautician-service__area-item has_fade_anim">
                  <div className="new-services cf_image" onClick={handleClick}>
                    <div className="number-hedaing">
                      <h3 className="numbers-services">1.</h3>
                      <h3 className="services-heading">
                        Mobile App for Car Rental.
                      </h3>
                    </div>
                    <div>
                      <p className="strategy">
                        Strategy that involves creating and sharing content on
                        social a website's media platforms.Strategy that
                        involves creating and sharing content on social a
                        website's media platforms.
                      </p>
                      <button className="tag-button-services">
                        Typography
                      </button>
                      <button className="tag-button-services">Usability</button>
                      <button className="tag-button-services">Hierachy</button>
                    </div>
                    <img
                      className="artist__exhibition-thumb"
                      src={FlowerHoverImg2}
                      alt="flower-hover-img2"
                    />
                  </div>
                </div>
                <div className="beautician-service__area-item has_fade_anim">
                  <div className="new-services cf_image" onClick={handleClick}>
                    <div className="number-hedaing">
                      <h3 className="numbers-services">2.</h3>
                      <h3 className="services-heading">Avtar Yoga Space.</h3>
                    </div>
                    <div>
                      <p className="strategy">
                        Strategy that involves creating and sharing content on
                        social a website's media platforms.Strategy that
                        involves creating and sharing content on social a
                        website's media platforms.
                      </p>
                      <button className="tag-button-services">
                        Typography
                      </button>
                      <button className="tag-button-services">Usability</button>
                      <button className="tag-button-services">Hierachy</button>
                    </div>
                    <img
                      className="artist__exhibition-thumb"
                      src={FlowerHoverImg4}
                      alt="flower-hover-img2"
                    />
                  </div>
                </div>
                <div className="beautician-service__area-item has_fade_anim">
                  <div className="new-services cf_image" onClick={handleClick}>
                    <div className="number-hedaing">
                      <h3 className="numbers-services">3.</h3>
                      <h3 className="services-heading">Next Generation.</h3>
                    </div>
                    <div>
                      <p className="strategy">
                        Strategy that involves creating and sharing content on
                        social a website's media platforms.Strategy that
                        involves creating and sharing content on social a
                        website's media platforms.
                      </p>
                      <button className="tag-button-services">
                        Typography
                      </button>
                      <button className="tag-button-services">Usability</button>
                      <button className="tag-button-services">Hierachy</button>
                    </div>
                    <img
                      className="artist__exhibition-thumb"
                      src={FlowerHoverImg3}
                      alt="flower-hover-img2"
                    />
                  </div>
                </div>
              </div>
              <div
                id="tab4"
                className={`tab-pane tab-pane2 ${
                  activeTab === "tab4" ? "active" : ""
                }`}
              >
                <div className="beautician-service__area-item has_fade_anim">
                  <div className="new-services cf_image" onClick={handleClick}>
                    <div className="number-hedaing">
                      <h3 className="numbers-services">1.</h3>
                      <h3 className="services-heading">
                        Ecommerce Website UI.
                      </h3>
                    </div>
                    <div>
                      <p className="strategy">
                        Strategy that involves creating and sharing content on
                        social a website's media platforms.Strategy that
                        involves creating and sharing content on social a
                        website's media platforms.
                      </p>
                      <button className="tag-button-services">
                        Typography
                      </button>
                      <button className="tag-button-services">Usability</button>
                      <button className="tag-button-services">Hierachy</button>
                    </div>
                    <img
                      className="artist__exhibition-thumb"
                      src={FlowerHoverImg3}
                      alt="flower-hover-img3"
                    />
                  </div>
                </div>
              </div>
              <div
                id="tab5"
                className={`tab-pane tab-pane2 ${
                  activeTab === "tab5" ? "active" : ""
                }`}
              >
                <div className="beautician-service__area-item has_fade_anim">
                  <div className="new-services cf_image" onClick={handleClick}>
                    <div className="number-hedaing">
                      <h3 className="numbers-services">1.</h3>
                      <h3 className="services-heading">
                        Unique Product Design.
                      </h3>
                    </div>
                    <div>
                      <p className="strategy">
                        Strategy that involves creating and sharing content on
                        social a website's media platforms.Strategy that
                        involves creating and sharing content on social a
                        website's media platforms.
                      </p>
                      <button className="tag-button-services">
                        Typography
                      </button>
                      <button className="tag-button-services">Usability</button>
                      <button className="tag-button-services">Hierachy</button>
                    </div>
                    <img
                      className="artist__exhibition-thumb"
                      src={FlowerHoverImg1}
                      alt="flower-hover-img1"
                    />
                  </div>
                </div>
              </div>
              <div
                id="tab6"
                className={`tab-pane tab-pane2 ${
                  activeTab === "tab6" ? "active" : ""
                }`}
              >
                <div className="beautician-service__area-item has_fade_anim">
                  <div className="new-services cf_image" onClick={handleClick}>
                    <div className="number-hedaing">
                      <h3 className="numbers-services ">1.</h3>
                      <h3 className="services-heading">Product Development.</h3>
                    </div>
                    <div>
                      <p className="strategy">
                        Strategy that involves creating and sharing content on
                        social a website's media platforms.Strategy that
                        involves creating and sharing content on social a
                        website's media platforms.
                      </p>
                      <button className="tag-button-services">
                        Typography
                      </button>
                      <button className="tag-button-services">Usability</button>
                      <button className="tag-button-services">Hierachy</button>
                    </div>
                    <img
                      className="artist__exhibition-thumb"
                      src={FlowerHoverImg4}
                      alt="flower-hover-img4"
                    />
                  </div>
                </div>
                <div className="beautician-service__area-item has_fade_anim">
                  <div className="new-services cf_image" onClick={handleClick}>
                    <div className="number-hedaing">
                      <h3 className="numbers-services">2.</h3>
                      <h3 className="services-heading">Avtar Yoga Space.</h3>
                    </div>
                    <div>
                      <p className="strategy">
                        Strategy that involves creating and sharing content on
                        social a website's media platforms.Strategy that
                        involves creating and sharing content on social a
                        website's media platforms.
                      </p>
                      <button className="tag-button-services">
                        Typography
                      </button>
                      <button className="tag-button-services">Usability</button>
                      <button className="tag-button-services">Hierachy</button>
                    </div>
                    <img
                      className="artist__exhibition-thumb"
                      src={FlowerHoverImg6}
                      alt="flower-hover-img6"
                    />
                  </div>
                </div>
              </div>
              <div
                id="tab7"
                className={`tab-pane tab-pane2 ${
                  activeTab === "tab7" ? "active" : ""
                }`}
              >
                <div className="beautician-service__area-item has_fade_anim">
                  <div className="new-services cf_image" onClick={handleClick}>
                    <div className="number-hedaing">
                      <h3 className="numbers-services">1.</h3>
                      <h3 className="services-heading">Avtar Yoga Space.</h3>
                    </div>
                    <div>
                      <p className="strategy">
                        Strategy that involves creating and sharing content on
                        social a website's media platforms.Strategy that
                        involves creating and sharing content on social a
                        website's media platforms.
                      </p>
                      <button className="tag-button-services">
                        Typography
                      </button>
                      <button className="tag-button-services">Usability</button>
                      <button className="tag-button-services">Hierachy</button>
                    </div>
                    <img
                      className="artist__exhibition-thumb"
                      src={FlowerHoverImg6}
                      alt="flower-hover-img6"
                    />
                  </div>
                </div>
                <div className="beautician-service__area-item has_fade_anim">
                  <div className="new-services cf_image" onClick={handleClick}>
                    <div className="number-hedaing">
                      <h3 className="numbers-services ">2.</h3>
                      <h3 className="services-heading">Product Development.</h3>
                    </div>
                    <div>
                      <p className="strategy">
                        Strategy that involves creating and sharing content on
                        social a website's media platforms.Strategy that
                        involves creating and sharing content on social a
                        website's media platforms.
                      </p>
                      <button className="tag-button-services">
                        Typography
                      </button>
                      <button className="tag-button-services">Usability</button>
                      <button className="tag-button-services">Hierachy</button>
                    </div>
                    <img
                      className="artist__exhibition-thumb"
                      src={FlowerHoverImg4}
                      alt="flower-hover-img4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ====================================== Services Section Three End===================================== --> */}

        {/* <!-- ====================================== text Marquee Section Start ===================================== --> */}
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
export default ServicesPageTwo;
