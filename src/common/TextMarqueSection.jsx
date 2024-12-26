import React, { useEffect } from "react";
import AOS from "aos";
import ClientBounceImg1 from "../assets/images/client-bounce-img1.jpg";
import ClientBounceImg2 from "../assets/images/client-bounce-img2.jpg";
import ClientBounceImg3 from "../assets/images/client-bounce-img3.jpg";
import ClientBounceImg4 from "../assets/images/client-bounce-img4.jpg";
import { Link } from "react-router-dom";

const TextMarqueSection = () => {
  useEffect(() => {
    document.querySelectorAll(".logos").forEach((logosContainer) => {
      const copy = logosContainer.querySelector(".logos-slide").cloneNode(true);
      logosContainer.appendChild(copy);
    });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div
        className="header_full_sec about_header_full_sec"
        id="contact-ticker"
      >
        <div className="position-relative">
          <img
            className="client-bounce-img client-bounce-img1"
            src={ClientBounceImg1}
            alt="client-bounce-img1"
          />
          <img
            className="client-bounce-img client-bounce-img2"
            src={ClientBounceImg2}
            alt="client-bounce-img2"
          />
          <img
            className="client-bounce-img client-bounce-img3"
            src={ClientBounceImg3}
            alt="client-bounce-img3"
          />
          <img
            className="client-bounce-img client-bounce-img4"
            src={ClientBounceImg4}
            alt="client-bounce-img4"
          />
          <div className="logos">
            <div className="logos-slide">
              <div className="ticker__item">
                <Link to="mailto:biogi@mail.com">biogi@mail.com</Link>
              </div>
              <div className="ticker__item ticker__item_dark">
                <Link to="tel:(+1)451356888">(+1) 451 356 888</Link>
              </div>
              <div className="ticker__item">
                <Link to="mailto:biogi@mail.com">biogi@mail.com</Link>
              </div>
              <div className="ticker__item ticker__item_dark">
                <Link to="tel:(+1)451356888">(+1) 451 356 888</Link>
              </div>
              <div className="ticker__item">
                <Link to="mailto:biogi@mail.com">biogi@mail.com</Link>
              </div>
              <div className="ticker__item ticker__item_dark">
                <Link to="tel:(+1)451356888">(+1) 451 356 888</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TextMarqueSection;
