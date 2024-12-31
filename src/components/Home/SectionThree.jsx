import React, { useEffect, useState } from "react";
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";
import { Link } from "react-router-dom";

const SectionThree = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleAccordionClick = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Graphic Design",
      content:
        "Here is a list of the things we offer:",
      listItems: [
        "Company Profile Designs",
        "Business Card Designs",
        "Flyer Designs",
        "Logo Designs & more",
      ],
    },
    {
      title: "Web Design & Developement",
      content:
        "Here is a list of the things we offer:",
      listItems: [
        "Interface Design",
        "Creating Design Systems",
        "Website Applications",
        "Website Design & Development",
      ],
    }
  ];

  return (
    <>
      {/* <!-- ====================================== Section Three ===================================== --> */}
      <section className="section-three overflow-hidden">
        <div className="container">
          <div className="row services-section">
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <p className="our-services" data-aos="fade-up">
                OUR SERVICES
              </p>
              <h2 className="our-solution" data-aos="fade-up">
                Solution We Provide.
              </h2>
              <p className="uran odio" data-aos="fade-up">
                At Smug Solutions, we offer a wide range of design and digital services tailored to meet your business needs. From crafting visually stunning websites to creating impactful graphic designs, our goal is to deliver innovative solutions that elevate your brand.
              </p>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7">
              <div id="faq-sec">
                {accordionData.map((item, index) => (
                  <div
                    className="nested-accordion"
                    data-aos="fade-up"
                    key={index}
                  >
                    <h3
                      className={`boder-top ${
                        selectedIndex === index ? "selected" : ""
                      }`}
                      onClick={() => handleAccordionClick(index)}
                    >
                      {item.title}
                    </h3>
                    <div
                      className="comment"
                      style={{
                        display: selectedIndex === index ? "block" : "none",
                      }}
                    >
                      {item.content}
                      <ul className="accor-list">
                        {item.listItems.map((listItem, idx) => (
                          <li key={idx}>{listItem}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Three End===================================== --> */}
    </>
  );
};
export default SectionThree;
