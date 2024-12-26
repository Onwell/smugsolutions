import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import SinglePortfolioImg1 from "../../assets/images/single-portfolio-over-img1.jpg";
import SinglePortfolioImg2 from "../../assets/images/single-portfolio-over-img2.jpg";
import { Link } from "react-router-dom";

const OtherServices = () => {
  const [counted, setCounted] = useState(false);
  const countersRef = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 2000 });

    const handleScroll = () => {
      if (countersRef.current.length > 0) {
        const oTop = countersRef.current[0].offsetTop - window.innerHeight;
        if (!counted && window.scrollY > oTop) {
          countersRef.current.forEach((counter) => {
            const updateCount = () => {
              const target = +counter.getAttribute("data-count");
              const count = +counter.innerText;
              const speed = 200; // Change this value to adjust the speed
              const increment = target / speed;

              if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
              } else {
                counter.innerText = target;
              }
            };

            updateCount();
          });

          setCounted(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [counted]);
  return (
    <>
      <div className="row overflow-hidden">
        <div className="col-xxl-8 col-xl-8 col-lg-8 ">
          <h2 className="build" data-aos="fade-up">
            Delivering Better Business News With an Improved User Experience.
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
            Overview
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
          <div className="overview-imgs-main">
            <img src={SinglePortfolioImg1} alt="single-portfolio-over-img1" />
            <img src={SinglePortfolioImg2} alt="single-portfolio-over-img2" />
          </div>
          <h2 className="sed" id="sed" data-aos="fade-up">
            My Process for Creative Features
          </h2>
          <div className="features-percentage-main counter">
            <h2
              className="features-percent count"
              data-count="120"
              ref={(el) => (countersRef.current[0] = el)}
            >
              0
            </h2>
            <p className="fetures-month">Months Project Duration</p>
          </div>
          <div className="features-percentage-main counter features-percentage-main2">
            <h2
              className="features-percent count"
              data-count="45"
              ref={(el) => (countersRef.current[1] = el)}
            >
              0
            </h2>
            <p className="fetures-month">Average daily signups</p>
          </div>
          <div className="features-percentage-main counter features-percentage-main2">
            <h2
              className="features-percent count"
              data-count="300"
              ref={(el) => (countersRef.current[2] = el)}
            >
              0
            </h2>
            <p className="fetures-month">Growth After Work</p>
          </div>
          <h2 className="sed" data-aos="fade-up">
            Conclusion
          </h2>
          <p className="nunc-text" data-aos="fade-up">
            Ullamcorper nunc mattis volutpat volutpat sed natoque eget
            fermentum. Tortor rhoncus nisl purus cras pharetra sit adipiscing.
            Amet vel blandit dolor neque malesuada venenatis morbi tincidunt
            lorem. Lorem vulputate id in risus adipiscing lectus enim. Semper et
            velit risus arcu in dapibus turpis scelerisque. Et nunc id tristique
            a pharetra accumsan magna.
          </p>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 overflow-hidden">
          <div
            className="other-services-main other-services-main-spacer"
            data-aos="fade-left"
          >
            <p className="other-services">Project Details</p>
            <div className="project-details-main pt-0">
              <p className="project-details-sub-text">Category:</p>
              <p className="development">Development</p>
            </div>
            <div className="project-details-main">
              <p className="project-details-sub-text">Software:</p>
              <p className="development">WordPress, Figma</p>
            </div>
            <div className="project-details-main">
              <p className="project-details-sub-text">Service:</p>
              <p className="development">Development</p>
            </div>
            <div className="project-details-main">
              <p className="project-details-sub-text">Client:</p>
              <p className="development">Eunice Mills</p>
            </div>
            <div className="project-details-main border-0">
              <p className="project-details-sub-text">Date:</p>
              <p className="development">October 6, 2024</p>
            </div>
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
                Looking for Design & Development Service Provider?
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
