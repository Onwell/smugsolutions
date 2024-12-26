import React, { useEffect } from "react";

const MarqueSection = () => {
  useEffect(() => {
    document.querySelectorAll(".logos").forEach((logosContainer) => {
      const copy = logosContainer.querySelector(".logos-slide").cloneNode(true);
      logosContainer.appendChild(copy);
    });
  }, []);
  return (
    <>
      {/* <!-- ====================================== User Branding Marquee Section ===================================== --> */}
      <div className="header_full_sec overflow-hidden">
        <div className="logos">
          <div className="logos-slide">
            <div className="ticker__item">User Interface</div>
            <div className="ticker__item ticker__item_dark">
              User Experience
            </div>
            <div className="ticker__item">Branding</div>
            <div className="ticker__item ticker__item_dark">Marketing</div>
            <div className="ticker__item">User Interface</div>
            <div className="ticker__item ticker__item_dark">
              User Experience
            </div>
            <div className="ticker__item">Branding</div>
            <div className="ticker__item ticker__item_dark">Marketing</div>
            <div className="ticker__item">User Interface</div>
            <div className="ticker__item ticker__item_dark">
              User Experience
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ====================================== User Branding Marquee Section ===================================== --> */}
    </>
  );
};
export default MarqueSection;
