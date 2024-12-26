import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

const SectionThree = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const data = [
    {
      title: "Education",
      content: (
        <>
          <p>
            Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque.
            Morbi felis pellentesque ligula sed dictumst. Imperdiet nunc
            vulputate metus pellentesque.
          </p>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                Bachelor of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2010 - 2014</p>
              <p className="cursus">
                Cursus ut consectetur rhoncus ut nibh. Bibendum at sit a tempor,
                laoreet varius et. Sed ut egestas vitae dolor nulla non
                Ullamcorper amet nibh.
              </p>
            </div>
          </div>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                Master of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2014 - 2016</p>
              <p className="cursus">
                Porttitor euismod at semper ut massa. Lorem varius magna
                volutpat nunc. Et faucibus scelerisque donec augue eleifenda
                morbi dolor lorem semper.
              </p>
            </div>
          </div>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                PhD of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2016 - 2018</p>
              <p className="cursus">
                Adipiscing sed magna tempus arcu morbi. Ipsum pellentesque lorem
                suscipit in. Hendrerit rhoncus quis tempor urna pharetra ut
                erat.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Experience",
      content: (
        <>
          <p>
            Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque.
            Morbi felis pellentesque ligula sed dictumst. Imperdiet nunc
            vulputate metus pellentesque.
          </p>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                Bachelor of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2010 - 2014</p>
              <p className="cursus">
                Cursus ut consectetur rhoncus ut nibh. Bibendum at sit a tempor,
                laoreet varius et. Sed ut egestas vitae dolor nulla non
                Ullamcorper amet nibh.
              </p>
            </div>
          </div>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                Master of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2014 - 2016</p>
              <p className="cursus">
                Porttitor euismod at semper ut massa. Lorem varius magna
                volutpat nunc. Et faucibus scelerisque donec augue eleifenda
                morbi dolor lorem semper.
              </p>
            </div>
          </div>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                PhD of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2016 - 2018</p>
              <p className="cursus">
                Adipiscing sed magna tempus arcu morbi. Ipsum pellentesque lorem
                suscipit in. Hendrerit rhoncus quis tempor urna pharetra ut
                erat.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "My Expertise",
      content: (
        <>
          <p>
            Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque.
            Morbi felis pellentesque ligula sed dictumst. Imperdiet nunc
            vulputate metus pellentesque.
          </p>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                Bachelor of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2010 - 2014</p>
              <p className="cursus">
                Cursus ut consectetur rhoncus ut nibh. Bibendum at sit a tempor,
                laoreet varius et. Sed ut egestas vitae dolor nulla non
                Ullamcorper amet nibh.
              </p>
            </div>
          </div>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                Master of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2014 - 2016</p>
              <p className="cursus">
                Porttitor euismod at semper ut massa. Lorem varius magna
                volutpat nunc. Et faucibus scelerisque donec augue eleifenda
                morbi dolor lorem semper.
              </p>
            </div>
          </div>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                PhD of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2016 - 2018</p>
              <p className="cursus">
                Adipiscing sed magna tempus arcu morbi. Ipsum pellentesque lorem
                suscipit in. Hendrerit rhoncus quis tempor urna pharetra ut
                erat.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Design Systems",
      content: (
        <>
          <p>
            Eu nulla at mauris cursus consectetur posuere iaculis ipsum neque.
            Morbi felis pellentesque ligula sed dictumst. Imperdiet nunc
            vulputate metus pellentesque.
          </p>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                Bachelor of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2010 - 2014</p>
              <p className="cursus">
                Cursus ut consectetur rhoncus ut nibh. Bibendum at sit a tempor,
                laoreet varius et. Sed ut egestas vitae dolor nulla non
                Ullamcorper amet nibh.
              </p>
            </div>
          </div>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                Master of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2014 - 2016</p>
              <p className="cursus">
                Porttitor euismod at semper ut massa. Lorem varius magna
                volutpat nunc. Et faucibus scelerisque donec augue eleifenda
                morbi dolor lorem semper.
              </p>
            </div>
          </div>
          <div className="education position-relative">
            <div className="side_circle_ring">
              <div className="small_yellow_border">
                <div className="small_yellow_circle"></div>
              </div>
            </div>
            <div className="small_yellow_border_main">
              <p className="bachelor">
                PhD of Science in Information Technology
              </p>
              <p className="university">Cambridge University / 2016 - 2018</p>
              <p className="cursus">
                Adipiscing sed magna tempus arcu morbi. Ipsum pellentesque lorem
                suscipit in. Hendrerit rhoncus quis tempor urna pharetra ut
                erat.
              </p>
            </div>
          </div>
        </>
      ),
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      {/* <!-- ====================================== About Section Three ===================================== --> */}
      <section className="section-three overflow-hidden" id="explore-me">
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
              <div id="faq-sec">
                {data.map((item, index) => (
                  <div
                    className="nested-accordion"
                    key={index}
                    data-aos="fade-up"
                  >
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
                    >
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== About Section Three End ===================================== --> */}
    </>
  );
};
export default SectionThree;
