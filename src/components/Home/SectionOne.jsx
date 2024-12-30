import React, { useEffect, useRef } from "react";
import AOS from "aos";
import MediaLineTop from "../../assets/images/media-line-top.svg";
import MediaLineBottom from "../../assets/images/media-line-bottom.svg";
import PolygonArrow from "../../assets/images/Polygon-arrow.svg";
import GirlImg from "../../assets/images/girl.png";
import ArrowMain from "../../assets/images/arrow-main.png";
import ClientImg1 from "../../assets/images/clients-img1.jpg";
import ClientImg2 from "../../assets/images/clients-img2.jpg";
import ClientImg3 from "../../assets/images/clients-img3.jpg";
import ClientImg4 from "../../assets/images/clients-img4.jpg";
import FlowerImg from "../../assets/images/flower.png";
import { Link } from "react-router-dom";

const SectionOne = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const workedBoxRef = useRef(null);
  const JessicaBiogiMainRef = useRef(null);
  const arrowRef = useRef(null);
  const layerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const ivalueX = (e.pageX * -1) / 60;
      const ivalueY = (e.pageY * -1) / 60;
      const cvalueX = (e.pageX * -1) / 80;
      const cvalueY = (e.pageY * -1) / 90;

      if (workedBoxRef.current) {
        workedBoxRef.current.style.transform = `translate3d(${ivalueX}px, ${ivalueY}px, 0)`;
      }
      if (JessicaBiogiMainRef.current) {
        JessicaBiogiMainRef.current.style.transform = `translate3d(${cvalueX}px, ${cvalueY}px, 0)`;
      }
      if (arrowRef.current) {
        arrowRef.current.style.transform = `translate3d(${cvalueX}px, ${cvalueY}px, 0)`;
      }
    };

    const layer = layerRef.current;
    if (layer) {
      layer.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (layer) {
        layer.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);
  return (
    <>
      {/* <!-- ====================================== Section One ===================================== --> */}
      <section className="section-main overflow-hidden" id="main">
        <div className="section-main-sub position-relative">
          <div className="media-main">
            <img src={MediaLineTop} alt="media-line-top" />
            <div>
              <Link to="mailto:o.masaraure@gmail.com">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_37_120)">
                    <path
                      d="M2.5 5.83333C2.5 5.39131 2.67559 4.96738 2.98816 4.65482C3.30072 4.34226 3.72464 4.16667 4.16667 4.16667H15.8333C16.2754 4.16667 16.6993 4.34226 17.0118 4.65482C17.3244 4.96738 17.5 5.39131 17.5 5.83333V14.1667C17.5 14.6087 17.3244 15.0326 17.0118 15.3452C16.6993 15.6577 16.2754 15.8333 15.8333 15.8333H4.16667C3.72464 15.8333 3.30072 15.6577 2.98816 15.3452C2.67559 15.0326 2.5 14.6087 2.5 14.1667V5.83333Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.5 5.83333L10 10.8333L17.5 5.83333"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_37_120">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
            <div>
              <Link to="#">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_37_136)">
                    <path
                      d="M1.66666 6.66666C1.66666 5.78261 2.01785 4.93476 2.64297 4.30964C3.26809 3.68452 4.11593 3.33333 4.99999 3.33333H15C15.884 3.33333 16.7319 3.68452 17.357 4.30964C17.9821 4.93476 18.3333 5.78261 18.3333 6.66666V13.3333C18.3333 14.2174 17.9821 15.0652 17.357 15.6903C16.7319 16.3155 15.884 16.6667 15 16.6667H4.99999C4.11593 16.6667 3.26809 16.3155 2.64297 15.6903C2.01785 15.0652 1.66666 14.2174 1.66666 13.3333V6.66666Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.33334 7.5L12.5 10L8.33334 12.5V7.5Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_37_136">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
            <img src={MediaLineBottom} alt="media-line-bottom" />
          </div>
          <div className="container2 position-relative overflow-hidden">
            <p className="main-text" data-aos="fade-down">
              Hello, I am <span>👋</span>
            </p>
            <h1>
              <mark>Web</mark> Designer.
            </h1>
            <div className="home-girl-img-main">
              <div className="position-relative" ref={layerRef}>
                <div className="JessicaBiogi-main" data-aos="fade-down">
                  <div
                    className="position-relative"
                    id="JessicaBiogi_main"
                    ref={JessicaBiogiMainRef}
                  >
                    <img
                      className="JessicaBiogi-svg"
                      src={PolygonArrow}
                      alt="Polygon-arrow"
                    />
                    <p className="jessica-biogi">Onwell Masaraure</p>
                  </div>
                </div>
                <img
                  className="home-girl-img"
                  src={GirlImg}
                  alt="Onwell"
                  data-aos="fade-up"
                />
                <img
                  className="arrow-main"
                  id="arrow"
                  src={ArrowMain}
                  alt="arrow-main"
                  ref={arrowRef}
                />
              </div>
            </div>
          </div>
          <div className="section-main-right-contain overflow-hidden">
            <div
              className="section-main-right-contain-sub"
              data-aos="fade-left"
            >
              <h2 className="total-project">10+</h2>
              <p className="project-complted">PROJECT COMPLETED</p>
            </div>
            <div className="flower-box" data-aos="fade-left">
              <img className="flower" src={FlowerImg} alt="flower" />
              <h2 className="Freelance">
                A <span>Freelance Designer and Developer based in Zimbabwe.</span> I
                strives to build immersive and beautiful web applications
                through carefully crafted used-centric design.
              </h2>
            </div>
            <div className="mouse-scroll-box">
              <Link to="#section-two" className="mouse-main">
                <div className="mouse">
                  <svg
                    className="mouse-arrow-down"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="40"
                    viewBox="0 0 24 40"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_37_162)">
                      <path
                        d="M12 5L12 35"
                        stroke="#FFDB59"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 31L12 35"
                        stroke="#FFDB59"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 31L12 35"
                        stroke="#FFDB59"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_37_162">
                        <rect width="24" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h2 className="scroll-down">SCROLL DOWN</h2>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section One End ===================================== --> */}
    </>
  );
};
export default SectionOne;
