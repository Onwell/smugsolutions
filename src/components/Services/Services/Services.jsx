import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Link, useLocation, NavLink } from "react-router-dom";
import BiogiLogo from "../../../assets/images/logo.png";
import Loader from "../../../common/Loader";
import SectionOne from "../SectionOne";
import BrandsMarqueSection from "../../../common/BrandsMarqueSection";
import SectionTwo from "../SectionTwo";
import MarqueSection from "../../../common/MarqueSection";
import SectionThree from "../SectionThree";
import TextMarqueAboutSection from "../../About/TextMarqueAboutSection";
import Footer from "../../../common/Footer";
import GalleryImg1 from "../../../assets/images/gallery/gallery-img1.jpg";
import GalleryImg2 from "../../../assets/images/gallery/gallery-img2.jpg";
import GalleryImg3 from "../../../assets/images/gallery/gallery-img3.jpg";
import GalleryImg4 from "../../../assets/images/gallery/gallery-img4.jpg";
import GalleryImg5 from "../../../assets/images/gallery/gallery-img5.jpg";
import GalleryImg6 from "../../../assets/images/gallery/gallery-img6.jpg";
import GalleryImg7 from "../../../assets/images/gallery/gallery-img7.jpg";
import GalleryImg8 from "../../../assets/images/gallery/gallery-img8.jpg";
import ProgressCircle from "../../../common/ProgressCircle";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const location = useLocation();
  const [activeItem, setActiveItem] = useState("/");
  const [isFixed, setIsFixed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [subActiveIndex, setSubActiveIndex] = useState(null);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const isActive = (path) => (activeItem === path ? "menu-active" : "");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 20) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    setSubActiveIndex(null); // Reset sub menu when main menu is toggled
  };

  const toggleSubAccordion = (index) => {
    setSubActiveIndex(subActiveIndex === index ? null : index);
  };
  return (
    <>
      <Loader />
      <div className="site_contain">
        {/* <!-- ====================================== Header Menu ===================================== --> */}
        <header
        id="top-navbar"
        className={`top-navbar ${isFixed ? "fixed" : ""}`}
      >
        <div className="container">
          <div className="top-navbar_full">
            <div className="back-btn">
              <Link to="/">
                <img src={BiogiLogo} alt="logo" />
              </Link>
            </div>
            <div className="hell">
              <ul className="top-navbar-title">
                <li>
                  <NavLink to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" activeClassName="active">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio2" activeClassName="active">
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog2" activeClassName="active">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="active">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="outer-menu">
                <input
                  className="checkbox-toggle"
                  type="checkbox"
                  name="checkbox"
                />
                <div className="hamburger">
                  <div></div>
                </div>
                {/* Side Menu */}
                <div className="menu">
                  <div>
                    <nav>
                      <div className="container">
                        <div className="row sidemenu-main">
                          <div className="col-lg-2">
                            <div className="menu-text">
                              <div className="side-menu-text">
                                <p>MENU</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-7 side-menu-scroll">
                            <div className="heading2">
                              <Link to="/">Home</Link>
                            </div>
                            <div className="heading2">
                              <Link to="/about">About</Link>
                            </div>
                            <div className="heading2">
                              <Link to="/services">Services</Link>
                            </div>
                            <div className="heading2">
                              <Link to="/portfolio2">Portfolio</Link>
                            </div>
                            <div className="heading2">
                              <Link to="/blog2">Blog</Link>
                            </div>
                            <div className="heading2">
                              <Link to="/contact">Contact</Link>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="cont-info">
                              <div className="item">
                                <p className="sub-title-address">Address</p>
                                <p className="geek-alto">
                                  Harare
                                  <br />
                                  Zimbabwe
                                </p>
                              </div>
                              <div className="item">
                                <p className="sub-title-address">Contact Us</p>
                                <p>
                                  <Link to="/mailto:o.masaraure@gmail.com">
                                    o.masaraure@gmail.com
                                  </Link>
                                </p>
                                <p className="underline">
                                  <Link to="tel:+263777224660">
                                    +263 777 224 660
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
                {/* Side Menu End */}
              </div>
            </div>
          </div>
        </div>
      </header>
        {/* <!-- ====================================== Header Menu End===================================== --> */}
        {/* <!-- ====================================== Services Section One ===================================== --> */}
        <SectionOne />
        {/* <!-- ====================================== Services Section One End ===================================== --> */}
        {/* <!-- ====================================== Brands Marquee Section Start ===================================== --> */}
        <BrandsMarqueSection />
        {/* <!-- ====================================== Brands Marquee Section End ===================================== --> */}
        {/* <!-- ====================================== Services Section Two ===================================== --> */}
        <SectionTwo />
        {/* <!-- ====================================== Services Section Two End ===================================== --> */}
        {/* <!-- ====================================== User Branding Marquee Section ===================================== --> */}
        <MarqueSection />
        {/* <!-- ====================================== User Branding Marquee Section ===================================== --> */}
        {/* <!-- ====================================== Section Three Start===================================== --> */}
        <SectionThree />
        {/* <!-- ====================================== Section Three End===================================== --> */}
        {/* <!-- ====================================== text Marquee Section Start ===================================== --> */}
        <TextMarqueAboutSection />
        {/* <!-- ====================================== text Marquee Section End ===================================== --> */}
        {/* <!-- ====================================== Footer ===================================== --> */}
        <Footer />
        {/* <!-- ====================================== Progress Scroll Bottom To Top ===================================== --> */}
        <ProgressCircle />
        {/* <!-- ====================================== Progress Scroll Bottom To Top End ===================================== --> */}
        {/* <!-- ======================================= gallery ================================== --> */}
        <div id="popup2" className="popup-container popup-style-2">
          <div className="popup-content">
            <Link to="#pop" className="close">
              &times;
            </Link>
            <main className="main">
              <h2 className="mobile_app">Mobile App for Car Rental</h2>
              <div className="container">
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg1}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg1} alt="gallery-img1" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg2}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg2} alt="gallery-img2" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg3}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg3} alt="gallery-img3" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg4}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg4} alt="gallery-img4" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg5}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg5} alt="gallery-img5" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg6}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg6} alt="gallery-img6" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg7}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg7} alt="gallery-img7" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg8}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg8} alt="gallery-img8" />
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <Link
                      to={GalleryImg3}
                      data-fancybox="gallery"
                      data-caption="Caption Images 1"
                    >
                      <img src={GalleryImg3} alt="gallery-img3" />
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
