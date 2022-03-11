import React from "react";
import Header from "../components/Header";

const Information = () => {
  return (
    <div>
      <Header></Header>
      <div className="w-[1882px] h-[400px] bg-[#DEB887] p-2">
        <h2 className="w-[866px] h-[60px] text-[#ffffff] text-[70px] font-for absolute left-[120px]">
          {" "}
          CÀ PHÊ{" "}
        </h2>
        <p className="w-[866px] h-[90px] text-[#ffffff] text-[20px] leading-7 font-three absolute top-[200px] left-[120px]">
          Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được
          trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết
          rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những
          dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.
        </p>
        <img
          src="https://thecoffeeshopvn.herokuapp.com/static/img/coffeecup_tranpa.png"
          alt=""
          className="w-[722px] h-[592px] text-[#000000] inline text-[14px] text-center absolute right-[70px]"
        />
        <button className="text-[35px] w-[300px] h-[80px] bg-orange-500 text-white rounded-[100px] absolute top-[320px] left-[600px] cursor-pointer font-one">
          {" "}
          Xem Thêm{" "}
        </button>
      </div>
      <div className="w-[1882px] h-[400px] bg-[#FFFFFF] p-2">
        <h2 className="w-[941px] h-[60px] text-[#B97343] text-[70px] font-for absolute right-[70px] top-[528px]">
          {" "}
          TAKE-AWAY{" "}
        </h2>
        <p className="w-[941px] h-[90px] text-[#B97343] text-[20px] font-three absolute right-[70px] top-[639px]">
          {" "}
          Thuận tiện cho số đông những người cần cà phê mỗi sáng nhưng lại eo
          hẹp về thời gian cũng như hòa nhập vào nhịp sống của cộng đồng thì sự
          xuất hiện của hình thức cà phê “take away” lại rất được lòng đại bộ
          phận tín đồ của cà phê bởi những tiện ích mà nó mang lại.
        </p>
        <img
          src="https://thecoffeeshopvn.herokuapp.com/static/img/coffeefast_tranpa.png"
          alt=""
          className="w-[314px] h-[487px] object-cover absolute top-[340px] left-[140px]"
        />
        <button className="text-[35px] w-[300px] h-[80px] bg-gray-500 text-white rounded-[100px] absolute top-[770px] right-[200px] cursor-pointer font-one">
          Tìm Hiểu
        </button>
      </div>
      <div className="w-[1882px] h-[400px] bg-[#696969] p-2">
        <h2 className="w-[866px] h-[60px] text-[#FFFFFF] text-[70px] font-for absolute top-[900px] left-[100px]">
          {" "}
          CÀ PHÊ TÚI{" "}
        </h2>
        <p className="w-[866px] h-[120px] text-[#FFFFFF] text-[20px] font-three absolute top-[1000px] left-[100px]">
          {" "}
          Cà phê sạch được hiểu đơn giản là loại cà phê được tạo ra từ 100% cà
          phê, không trộn lẫn bất kỳ loại hương liệu, hóa chất hay tạp chất nào
          khác.Nói như vậy không có nghĩa là cà phê sạch là loại cà phê ngon
          nhất, tuyệt vời nhất có thể làm bạn hài lòng mà chỉ muốn nhấn mạnh
          rằng cà phê sạch thật sự “tốt” cho sức khỏe...
        </p>
        <img
          src="https://thecoffeeshopvn.herokuapp.com/static/img/coffeebag_tranpa.png"
          alt=""
          className="w-[722px] h-[541px] object-cover absolute right-[100px]"
        />
        <button className="text-[35px] w-[300px] h-[80px] bg-green-700 text-white rounded-[100px] absolute top-[1150px] left-[100px] cursor-pointer font-for">
          Mua Ngay
        </button>
      </div>
      <div className="w-[1882px] h-[600px] bg-black p-2">
        <h2 className="w-[941px] h-[60px] text-[#FFFFFF] text-[70px] font-for absolute right-[10px] top-[1390px]">
          {" "}
          BÁNH MÌ{" "}
        </h2>
        <p className="w-[800px] h-[90px] text-[#FFFFFF] text-[20px] font-three absolute right-[140px] top-[1490px]">
          {" "}
          Bạn đã quá quen thuộc với Bánh mì Việt Nam. Hãy nếm thử một miếng Bánh
          mì ngon, giòn, nóng hổi tại Highlands Coffee. Một kết hợp hoàn hảo
          giữa lớp nhân chua, cay, mặn, ngọt quyện với lớp vỏ bánh mì giòn tan,
          mịn màng tạo ra tầng tầng lớp lớp dư vị cho thực khách.
        </p>
        <img
          src="https://thecoffeeshopvn.herokuapp.com/static/img/breadcoffee_tranpa.png"
          alt=""
          className="w-[706px] h-[425px] object-cover absolute top-[1400px]"
        />
        <button className="text-[35px] w-[300px] h-[80px] bg-white text-black rounded-[100px] absolute top-[1660px] right-[600px] cursor-pointer font-one">
          Chi Tiết
        </button>
      </div>
    </div>
  );
};

export default Information;
