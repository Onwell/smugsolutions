import React, { useEffect } from "react";
import BrandLogo1 from "../assets/images/brand-logo1.png";
import BrandLogo2 from "../assets/images/brand-logo2.png";
import BrandLogo3 from "../assets/images/brand-logo3.png";
import BrandLogo4 from "../assets/images/brand-logo4.png";
import BrandLogo5 from "../assets/images/brand-logo5.png";
import BrandLogo6 from "../assets/images/brand-logo6.png";
import BrandLogo7 from "../assets/images/brand-logo7.png";
import BrandLogo8 from "../assets/images/brand-logo8.png";

const BrandsMarqueSection = () => {
  useEffect(() => {
    document.querySelectorAll(".logos").forEach((logosContainer) => {
      const copy = logosContainer.querySelector(".logos-slide").cloneNode(true);
      logosContainer.appendChild(copy);
    });
  }, []);
  return (
    <>
      {/* <!-- ====================================== Brands Marquee Section ===================================== --> */}
      <div className="Marquee-main about-Marquee-main overflow-hidden">
        <h3 data-aos="fade-down">Trusted by World Leading Brands</h3>
        <div className="logos logos2">
          <div className="logos-slide">
            <div className="marquee__content">
              <div className="marquee-img-main">
                <img
                  className="brand-logos"
                  src={BrandLogo1}
                  alt="brand-logo1"
                />
              </div>
              <div className="marquee-img-main">
                <img
                  className="brand-logos"
                  src={BrandLogo2}
                  alt="brand-logo2"
                />
              </div>
              <div className="marquee-img-main">
                <img
                  className="brand-logos"
                  src={BrandLogo3}
                  alt="brand-logo3"
                />
              </div>
              <div className="marquee-img-main">
                <img
                  className="brand-logos"
                  src={BrandLogo4}
                  alt="brand-logo4"
                />
              </div>
              <div className="marquee-img-main">
                <img
                  className="brand-logos"
                  src={BrandLogo5}
                  alt="brand-logo5"
                />
              </div>
              <div className="marquee-img-main">
                <img
                  className="brand-logos"
                  src={BrandLogo6}
                  alt="brand-logo6"
                />
              </div>
              <div className="marquee-img-main">
                <img
                  className="brand-logos"
                  src={BrandLogo7}
                  alt="brand-logo7"
                />
              </div>
              <div className="marquee-img-main">
                <img
                  className="brand-logos"
                  src={BrandLogo8}
                  alt="brand-logo8"
                />
              </div>
              <div className="marquee-img-main">
                <img
                  className="brand-logos"
                  src={BrandLogo7}
                  alt="brand-logo9"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- =============================== Brands Marquee Section End =============================== --> */}
    </>
  );
};
export default BrandsMarqueSection;
