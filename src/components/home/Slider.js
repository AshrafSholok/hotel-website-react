import React from "react";
import { testimonial } from "../data/Data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../common/slider.css";

export default function Sliders() {
  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
  return (
    <>
      <div
  className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn"
  data-wow-delay="0.1s"
>
  <div className="container">
    <div className="owl-carousel testimonial-carousel py-5">
      <Slider
        {...settings}
      >
        {testimonial.map((item, key) => (
          <div
            key={key}
            className="testimonial-item position-relative bg-white rounded overflow-hidden p-4 p-md-5 h-100"
          >
            <p className="testimonial-description mb-4">
              {item.description}
            </p>

            <div className="d-flex align-items-center">
              <img
                className="img-fluid flex-shrink-0 rounded"
                src={item.img}
                alt={item.name}
                style={{
                  width: "45px",
                  height: "45px",
                  objectFit: "cover",
                }}
              />

              <div className="ps-3">
                <h6 className="fw-bold mb-1">{item.name}</h6>
                <small>{item.profession}</small>
              </div>
            </div>

            {item.icon}
          </div>
        ))}
      </Slider>
    </div>
  </div>
</div>
    </>
  );
}
