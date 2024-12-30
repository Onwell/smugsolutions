import React from "react";
import TestimonialClient1 from "../assets/images/testimonial_client_img1.jpg";
import TestimonialClient2 from "../assets/images/testimonial_client_img2.jpg";
import TestimonialClient3 from "../assets/images/testimonial_client_img3.jpg";
import TestimonialClient4 from "../assets/images/testimonial_client_img4.jpg";
import RightArrow from "../assets/images/slider-right-arrow.svg";
import LeftArrow from "../assets/images/slider-left-arrow.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: true,
    dots: false,
    speed: 1000,
    prevArrow: (
      <button type="button" className="slick-prev">
        <img src={LeftArrow} alt="slider-right-arrow" />
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next">
        <img src={RightArrow} alt="slider-left-arrow" />
      </button>
    ),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* <!-- ====================================== Testimonial ===================================== --> */}
      <section className="section-six overflow-hidden">
        <div className="container">
          <p className="our-services" data-aos="fade-up">
            TESTIMONIALS
          </p>
          <h2 className="our-solution latest_project" data-aos="fade-down">
            What Our Clients Say.
          </h2>
          <div className="testimonial_slider" data-aos="zoom-in-left">
            <Slider {...settings} className="slick-slide-home">
              <div>
                <div className="great-work-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="30"
                    viewBox="0 0 40 30"
                    fill="none"
                  >
                    <g>
                      <path
                        d="M11.9903 8.97047L11.9834 8.98364L11.977 8.997C10.9357 11.1534 10.3315 13.3985 10.1705 15.7265L10.1087 16.6197L10.9897 16.7794L16.4359 17.7668V29H1V20.6818C1 15.4562 2.21666 11.3738 4.55213 8.33851C6.85551 5.3666 9.89607 3.01035 13.7015 1.27904L15.1132 3.79798C14.0057 5.37106 12.9651 7.09582 11.9903 8.97047ZM34.5544 8.97047L34.5475 8.98364L34.5411 8.997C33.4998 11.1534 32.8956 13.3985 32.7346 15.7265L32.6728 16.6197L33.5538 16.7794L39 17.7668V29H23.5641V20.6818C23.5641 15.4561 24.7808 11.3737 27.1163 8.33843C29.4197 5.36656 32.4602 3.01033 36.2656 1.27904L37.6773 3.79798C36.5698 5.37106 35.5292 7.09583 34.5544 8.97047Z"
                        stroke="#FF7D61"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                  <h3>Great Work!</h3>
                </div>
                <p className="posuere">
                  Smug Solutions transformed our website into a sleek, user-friendly platform. Their attention to detail and creative approach exceeded our expectations. We’ve seen a significant boost in engagement since the redesign!
                </p>
                <svg
                  className="slider-line"
                  xmlns="http://www.w3.org/2000/svg"
                  height="33"
                  viewBox="0 0 630 33"
                  fill="none"
                >
                  <path d="M630 1H100L70 31V1H0" stroke="#909090" />
                </svg>
                <div className="client_details">
                  <div>
                    <h3 className="client-name">Olivia Segio</h3>
                  </div>
                </div>
              </div>
              <div>
                <div className="great-work-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="30"
                    viewBox="0 0 40 30"
                    fill="none"
                  >
                    <g>
                      <path
                        d="M11.9903 8.97047L11.9834 8.98364L11.977 8.997C10.9357 11.1534 10.3315 13.3985 10.1705 15.7265L10.1087 16.6197L10.9897 16.7794L16.4359 17.7668V29H1V20.6818C1 15.4562 2.21666 11.3738 4.55213 8.33851C6.85551 5.3666 9.89607 3.01035 13.7015 1.27904L15.1132 3.79798C14.0057 5.37106 12.9651 7.09582 11.9903 8.97047ZM34.5544 8.97047L34.5475 8.98364L34.5411 8.997C33.4998 11.1534 32.8956 13.3985 32.7346 15.7265L32.6728 16.6197L33.5538 16.7794L39 17.7668V29H23.5641V20.6818C23.5641 15.4561 24.7808 11.3737 27.1163 8.33843C29.4197 5.36656 32.4602 3.01033 36.2656 1.27904L37.6773 3.79798C36.5698 5.37106 35.5292 7.09583 34.5544 8.97047Z"
                        stroke="#FF7D61"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                  <h3>Best Creative Agency!</h3>
                </div>
                <p className="posuere">
                  We partnered with Smug Solutions for a complete brand overhaul, and the results were incredible. Their team brought fresh ideas and innovative designs that truly captured our vision. Highly recommend!
                </p>
                <svg
                  className="slider-line"
                  xmlns="http://www.w3.org/2000/svg"
                  height="33"
                  viewBox="0 0 630 33"
                  fill="none"
                >
                  <path d="M630 1H100L70 31V1H0" stroke="#909090" />
                </svg>
                <div className="client_details">
                  <div>
                    <h3 className="client-name">Alex</h3>
                  </div>
                </div>
              </div>
              <div>
                <div className="great-work-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="30"
                    viewBox="0 0 40 30"
                    fill="none"
                  >
                    <g>
                      <path
                        d="M11.9903 8.97047L11.9834 8.98364L11.977 8.997C10.9357 11.1534 10.3315 13.3985 10.1705 15.7265L10.1087 16.6197L10.9897 16.7794L16.4359 17.7668V29H1V20.6818C1 15.4562 2.21666 11.3738 4.55213 8.33851C6.85551 5.3666 9.89607 3.01035 13.7015 1.27904L15.1132 3.79798C14.0057 5.37106 12.9651 7.09582 11.9903 8.97047ZM34.5544 8.97047L34.5475 8.98364L34.5411 8.997C33.4998 11.1534 32.8956 13.3985 32.7346 15.7265L32.6728 16.6197L33.5538 16.7794L39 17.7668V29H23.5641V20.6818C23.5641 15.4561 24.7808 11.3737 27.1163 8.33843C29.4197 5.36656 32.4602 3.01033 36.2656 1.27904L37.6773 3.79798C36.5698 5.37106 35.5292 7.09583 34.5544 8.97047Z"
                        stroke="#FF7D61"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                  <h3>Great Work!</h3>
                </div>
                <p className="posuere">
                  Working with Smug Solutions was a seamless experience. From web development to graphic design, their expertise and commitment to quality were evident at every step. A fantastic team to collaborate with!
                </p>
                <svg
                  className="slider-line"
                  xmlns="http://www.w3.org/2000/svg"
                  height="33"
                  viewBox="0 0 630 33"
                  fill="none"
                >
                  <path d="M630 1H100L70 31V1H0" stroke="#909090" />
                </svg>
                <div className="client_details">
                  <div>
                    <h3 className="client-name">Andrew</h3>
                  </div>
                </div>
              </div>
              <div>
                <div className="great-work-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="30"
                    viewBox="0 0 40 30"
                    fill="none"
                  >
                    <g>
                      <path
                        d="M11.9903 8.97047L11.9834 8.98364L11.977 8.997C10.9357 11.1534 10.3315 13.3985 10.1705 15.7265L10.1087 16.6197L10.9897 16.7794L16.4359 17.7668V29H1V20.6818C1 15.4562 2.21666 11.3738 4.55213 8.33851C6.85551 5.3666 9.89607 3.01035 13.7015 1.27904L15.1132 3.79798C14.0057 5.37106 12.9651 7.09582 11.9903 8.97047ZM34.5544 8.97047L34.5475 8.98364L34.5411 8.997C33.4998 11.1534 32.8956 13.3985 32.7346 15.7265L32.6728 16.6197L33.5538 16.7794L39 17.7668V29H23.5641V20.6818C23.5641 15.4561 24.7808 11.3737 27.1163 8.33843C29.4197 5.36656 32.4602 3.01033 36.2656 1.27904L37.6773 3.79798C36.5698 5.37106 35.5292 7.09583 34.5544 8.97047Z"
                        stroke="#FF7D61"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                  <h3>Best Creative Agency!</h3>
                </div>
                <p className="posuere">
                  Smug Solutions helped us create a cohesive brand identity across our website and marketing materials. Their designs are modern, polished, and on point. We couldn’t be happier with the outcome!
                </p>
                <svg
                  className="slider-line"
                  xmlns="http://www.w3.org/2000/svg"
                  height="33"
                  viewBox="0 0 630 33"
                  fill="none"
                >
                  <path d="M630 1H100L70 31V1H0" stroke="#909090" />
                </svg>
                <div className="client_details">
                  <div>
                    <h3 className="client-name">Mark</h3>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* <!-- ======================================= Testimonial End ================================== --> */}
    </>
  );
};
export default TestimonialSlider;
