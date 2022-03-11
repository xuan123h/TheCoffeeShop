import React from "react";
import Slider from "react-slick";
const SliderTwo = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="w-[2000px] h-[40px] absolute text-[20px] font-bold bg-orange-400 rounded-lg text-gray-900 text-center">
      <Slider {...settings}>
        <div>
          <h3 className="mt-[4px]">
            {" "}
            Coffee Shop đồng hành cùng bạn trên chặng đường thưởng thức cà phê
            thật{" "}
          </h3>
        </div>
        <div>
          <h3 className="mt-[4px]">
            {" "}
            Thoải mái đổi mua hàng để nhận nhiều phần quà cực hấp dẫn !{" "}
          </h3>
        </div>
        <div>
          <h3 className="mt-[4px]">
            {" "}
            Chúng tôi lấy khách hàng, nhân viên và cộng đồng làm trọng tâm cho
            mọi quyết định.{" "}
          </h3>
        </div>
        <div>
          <h3 className="mt-[4px]">
            {" "}
            Tận hưởng các đặc quyền chỉ dành riêng cho thành viên Kim Cương Tham
            gia ngay{" "}
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default SliderTwo;
