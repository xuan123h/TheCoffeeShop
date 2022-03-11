import React from "react";
import Slider from "react-slick";
const SliderOne = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // pauseOnHover: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            src="https://thecoffeeshopvn.herokuapp.com/static/img/slider3.png"
            alt=""
            className="w-[2963px] h-[1213px] bg-[#364d79] text-[#ffffff] text-[14px] leading-[160px] text-center object-cover"
          />
        </div>
        <div>
          <img
            src="https://thecoffeeshopvn.herokuapp.com/static/img/slider2.png"
            alt=""
            className="w-[2963px] h-[1213px] bg-[#364d79] text-[#ffffff] text-[14px] leading-[160px] text-center object-cover"
          />
        </div>
        <div>
          <img
            src="https://thecoffeeshopvn.herokuapp.com/static/img/slider3.png"
            alt=""
            className="w-[2963px] h-[1213px] bg-[#364d79] text-[#ffffff] text-[14px] leading-[160px] text-center object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderOne;
