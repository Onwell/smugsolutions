import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import HoverImg1 from "../../assets/images/hover-img1.png";
import HoverImg2 from "../../assets/images/hover-img2.png";
import HoverImg3 from "../../assets/images/hover-img3.png";
import HoverImg4 from "../../assets/images/hover-img4.png";
import HoverImg5 from "../../assets/images/hover-img5.png";
import HoverImg6 from "../../assets/images/hover-img6.png";

const SectionTwo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const data = [
    {
      title: "UI/UX Experience",
      content:
        "Integer vivamus praesent aliquet diam placerat cras nullam posuere. Id tincidunt et in venenatis tristique. Volutpat interdum nisi posuere nisl. Leo aenean duis ac nunc tincidunt vulputate in felis. Augue id morbi eget nullam dignissim pellentesque sed accumsan sapien.",
      img: HoverImg1,
      link: "/single_services",
    },
    {
      title: "Web Development",
      content:
        "Integer vivamus praesent aliquet diam placerat cras nullam posuere. Id tincidunt et in venenatis tristique. Volutpat interdum nisi posuere nisl. Leo aenean duis ac nunc tincidunt vulputate in felis. Augue id morbi eget nullam dignissim pellentesque sed accumsan sapien.",
      img: HoverImg2,
      link: "single_services",
    },
    {
      title: "Digital Marketing",
      content:
        "Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque. Morbi felis pellentesque ligula sed dictumst. Imperdiet nunc vulputate metus pellentesque. Integer vivamus praesent aliquet diam placerat cras nullam posuere. Id tincidunt et in venenatis tristique. Volutpat interdum nisi posuere nisl. Leo aenean duis ac nunc tincidunt vulputate in felis. Augue id morbi eget nullam dignissim pellentesque sed accumsan sapien.",
      img: HoverImg3,
      link: "single_services",
    },
    {
      title: "Product Design",
      content:
        "Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque. Morbi felis pellentesque ligula sed dictumst. Imperdiet nunc vulputate metus pellentesque. Integer vivamus praesent aliquet diam placerat cras nullam posuere. Id tincidunt et in venenatis tristique. Volutpat interdum nisi posuere nisl. Leo aenean duis ac nunc tincidunt vulputate in felis. Augue id morbi eget nullam dignissim pellentesque sed accumsan sapien.",
      img: HoverImg4,
      link: "single_services",
    },
    {
      title: "Branding & Illustration",
      content:
        "Integer vivamus praesent aliquet diam placerat cras nullam posuere. Id tincidunt et in venenatis tristique. Volutpat interdum nisi posuere nisl. Leo aenean duis ac nunc tincidunt vulputate in felis. Augue id morbi eget nullam dignissim pellentesque sed accumsan sapien.",
      img: HoverImg5,
      link: "single_services",
    },
    {
      title: "Mobile Solutions",
      content:
        "Integer vivamus praesent aliquet diam placerat cras nullam posuere. Id tincidunt et in venenatis tristique. Volutpat interdum nisi posuere nisl. Leo aenean duis ac nunc tincidunt vulputate in felis. Augue id morbi eget nullam dignissim pellentesque sed accumsan sapien.",
      img: HoverImg6,
      link: "single_services",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleCommentClick = (link) => {
    window.location.href = link;
  };
  return (
    <>
      {/* <!-- ====================================== Services Section Two ===================================== --> */}
      <section className="section-three overflow-hidden">
        <div className="container">
          <div className="row services-section">
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <p className="our-services" data-aos="fade-up">
                PERSONAL INFO
              </p>
              <h2 className="our-solution" data-aos="fade-up">
                Explore Me.
              </h2>
              <p className="uran odio" data-aos="fade-up">
                Urna neque sollicitudin odio tempus eleifend est. Vestibulum
                dictum turpis diam arcu rutrum interdum aliquet iaculis.
              </p>
              <div className="services-circle-main">
                <div
                  className="view-work-circle btn btn1"
                  id="circle1"
                  data-aos="zoom-in-right"
                >
                  <Link to="/portfolio" className="a1">
                    VIEW MY WORK
                  </Link>
                </div>
                <div className="contact-circle" data-aos="zoom-in-left">
                  <div className="view-work-circle btn btn2">
                    <Link to="/contact">CONTACT ME</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7">
              <div id="faq-sec" className="position-relative">
                {data.map((item, index) => (
                  <div
                    className="beautician-service__area-item has_fade_anim"
                    key={index}
                  >
                    <div className="nested-accordion" data-aos="fade-up">
                      <h3
                        className={`boder-top ${
                          activeIndex === index ? "selected" : ""
                        }`}
                        onClick={() => handleClick(index)}
                      >
                        {item.title}
                      </h3>
                      <div
                        className="comment"
                        style={{
                          display: activeIndex === index ? "block" : "none",
                        }}
                        onClick={() => handleCommentClick(item.link)}
                      >
                        {item.content}
                      </div>
                      <img
                        className="artist__exhibition-thumb"
                        src={item.img}
                        alt={`hover-img${index + 1}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Services Section Two End ===================================== --> */}
    </>
  );
};
export default SectionTwo;
