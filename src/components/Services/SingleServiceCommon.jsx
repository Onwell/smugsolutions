import React, { useEffect } from "react";
import AOS from "aos";

const SingleServiceCommon = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      {/* <!-- ====================================== single Services Section One ===================================== --> */}
      <section className="section-main overflow-hidden" id="section-main-id">
        <div className="container">
          <p className="main-text my-services" data-aos="fade-down">
            MY SERVICES
          </p>
          <h1 className="ui-ux" data-aos="fade-down">
            UI/UX Experience
          </h1>
          <p className="Freelance freelance-text2" data-aos="fade-down">
            Ullamcorper nunc mattis volutpat volutpat sed natoque eget
            fermentum. Tortor rhoncus nisl purus cras pharetra sit adipiscing.
            Amet vel blandit dolor neque malesuada venenatis morbi tincidunt
            lorem. Lorem vulputate id in risus adipiscing lectus enim. Semper et
            velit risus arcu in dapibus turpis scelerisque. Et nunc id tristique
            a pharetra accumsan magna. Nibh quis tellus sit integer luctus.
          </p>
        </div>
      </section>
      {/* <!-- ====================================== single Services Section One End ===================================== --> */}
    </>
  );
};
export default SingleServiceCommon;
