import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import WordpressImg from "../../assets/images/wordpress.png";
import HtmlLogo from "../../assets/images/html-logo.png";
import JsLogo from "../../assets/images/js-logo.png";
import PhotoShop from "../../assets/images/photoshop.png";

const SectionFour = () => {
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
      {/* <!-- ====================================== Section Four ===================================== --> */}
      <section className="section-four overflow-hidden">
        <div className="container">
          <p className="our-services my_skills" data-aos="fade-up">
            MY SKILLS
          </p>
          <h2 className="our-solution my-expertise" data-aos="fade-down">
            My Expertise.
          </h2>
          <div className="skill-type-main">
            <div
              className="skills-box-main"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={WordpressImg} alt="wordpress" />
              <div className="counter">
                <h3
                  className="count count2"
                  data-count="98"
                  ref={(el) => (countersRef.current[0] = el)}
                >
                  0
                </h3>
                <p>WORDPRESS</p>
              </div>
            </div>
            <div
              className="skills-box-main"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={HtmlLogo} alt="html-logo" />
              <div className="counter">
                <h3
                  className="count count2"
                  data-count="95"
                  ref={(el) => (countersRef.current[2] = el)}
                >
                  0
                </h3>
                <p>HTML5</p>
              </div>
            </div>
            <div
              className="skills-box-main"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={JsLogo} alt="js-logo" />
              <div className="counter">
                <h3
                  className="count count2"
                  data-count="89"
                  ref={(el) => (countersRef.current[3] = el)}
                >
                  0
                </h3>
                <p>JAVASCRIPT</p>
              </div>
            </div>
            <div
              className="skills-box-main"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src={PhotoShop} alt="photoshop" />
              <div className="counter">
                <h3
                  className="count count2"
                  data-count="85"
                  ref={(el) => (countersRef.current[6] = el)}
                >
                  0
                </h3>
                <p>PHOTOSHOP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Four End ===================================== --> */}
    </>
  );
};
export default SectionFour;
