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
          <div
            className="award-circle-main aos-init aos-animate"
            data-aos="zoom-in"
          >
            <div className="award-circle">
              <img src={TrophyImg} alt="trophy" />
            </div>
            <div>
              <h2 className="independent">Independent Of The Year</h2>
              <p className="annual">Annual Awards 2025</p>
            </div>
          </div>
          <h3 className="self-taught aos-init aos-animate" data-aos="fade-up">
            <span>I'm Biogi</span> - a self though & self learned designer{" "}
            <span>based in USA</span>. I started as a financial planner & social
            media marketer, but now I do mix of everything from{" "}
            <span>Product Design, Photography, Web Design </span>&{" "}
            <span>Graphic Design.</span>
          </h3>
          <p className="odio aos-init aos-animate" data-aos="fade-up">
            Award-winning design director and design expert with 6 years of
            experience in design and management. I am a mom to a beautiful 2
            y.o. daughter who already loves attending business meetings with me.
            Also, a big part of my life is Netrix - a design creator behind this
            blog, artistic aesthetics into her healthy meals and making her
            recipes into artwork. She has always nurtured an interest in healthy
            eating and loves creating meals that are good for her body while
            being creative with simple ingredients. The creator behind this
            blog, enjoys incorporating her and making her recipes into artwork.
            She has always nurtured an interest in healthy eating and loves
            creating meals.
          </p>
        </div>
      </section>
      {/* <!-- ====================================== About Section Two End ===================================== --> */}
    </>
  );
};
export default SectionTwo;
