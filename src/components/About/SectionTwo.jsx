import React, { useEffect } from "react";
import AOS from "aos";
import TrophyImg from "../../assets/images/trophy.png";

const SectionTwo = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/* <!-- ====================================== About Section Two ===================================== --> */}
      <section className="about-section-two overflow-hidden">
        <div className="container">
          <h3 className="self-taught aos-init aos-animate" data-aos="fade-up">
            <span>I'm Onwell—a self-taught web and graphic designer based in the Zimbabwe.</span>
          </h3>
          <p className="odio aos-init aos-animate" data-aos="fade-up">
            With experience in responsive design, UI/UX optimization, and the latest web technologies, 
            I bring ideas to life through clean code and thoughtful layouts. Their goal is to merge creativity with functionality, 
            ensuring every project delivers an engaging user experience while meeting business objectives.
          </p>
        </div>
      </section>
      {/* <!-- ====================================== About Section Two End ===================================== --> */}
    </>
  );
};
export default SectionTwo;
