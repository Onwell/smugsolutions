import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
const CounterSection = () => {
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
      {/* <!-- ====================================== About Section Counter ===================================== --> */}
      <section className="section-counter">
        <div className="container">
          <div className="row">
            <div
              className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 counter counter-col"
              data-aos="zoom-in"
            >
              <h3
                className="counter-digit count about-count"
                data-count="700"
                ref={(el) => (countersRef.current[0] = el)}
              >
                0
              </h3>
              <p className="counter-work">PROJECT COMPLETED</p>
            </div>
            <div
              className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 counter counter-col"
              data-aos="zoom-in"
            >
              <h3
                className="counter-digit count"
                data-count="14"
                ref={(el) => (countersRef.current[1] = el)}
              >
                0
              </h3>
              <p className="counter-work">AWARDS</p>
            </div>
            <div
              className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 counter counter-col2"
              data-aos="zoom-in"
            >
              <h3
                className="counter-digit count about-count"
                data-count="06"
                ref={(el) => (countersRef.current[2] = el)}
              >
                0
              </h3>
              <p className="counter-work">YEARS EXPERIENCE</p>
            </div>
            <div
              className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 counter"
              data-aos="zoom-in"
            >
              <h3
                className="counter-digit count about-count"
                data-count="550"
                ref={(el) => (countersRef.current[3] = el)}
              >
                0
              </h3>
              <p className="counter-work">HAPPY CLIENTS</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== About Section Counter End ===================================== --> */}
    </>
  );
};
export default CounterSection;
