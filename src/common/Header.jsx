import React, { useEffect, useState } from "react";
import BiogiLogo from "../assets/images/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("/");
  const [isFixed, setIsFixed] = useState(false);

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

  return (
    <>
      {/* Main Menu */}
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
      {/* Main Menu End */}
    </>
  );
};

export default Header;
