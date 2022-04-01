import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  // handle Cart Shop
  const state = useSelector((state) => state.handleCart);
  return (
    <div className="list-none flex items-center h-[90px] lg:bg-[#fff] shadow-sm border-b-orange-400 w-[380px] bg-orange-400 lg:w-full md:w-[420px]">
      <div>
        <h2 className="w-[273px] h-[30px] text-[#A47343] text-[30px] font-body p-3 font-bold inline-block text-center capitalize cursor-pointer">
          {" "}
          Coffee Shop{" "}
        </h2>
      </div>
      <div className="flex items-center justify-center text-[22px] absolute top-5 left-[250px] text-[#000000] font-body leading-[46px] p-3 text-left font-semibold">
        <li className="w-[120px] h-[48px] cursor-pointer">
          <Link to="/"> Trang chủ</Link>
        </li>
        <li className="w-[120px] h-[48px] cursor-pointer ml-[20px]">
          <Link to="/coffee"> Sản phẩm </Link>
        </li>
        <li className="w-[190px] h-[48px] cursor-pointer ml-[20px]">
          <Link to="/show"> Xem đơn đặt hàng </Link>
        </li>
        <li className="w-[141px] h-[48px] cursor-pointer ml-[20px]">
          <Link to="/promotion"> Mã giảm giá </Link>
        </li>
        <li className="w-[112px] h-[48px] cursor-pointer ml-[20px]">
          <Link to="/information"> Giới thiệu </Link>
        </li>
      </div>
      <div className="flex items-center absolute top-12 right-[50px]">
        <span className="absolute right-[170px] text-center leading-6 border-none cursor-pointer">
          <Link to="/register">
            <svg
              class="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </Link>
        </span>
        <span className="absolute right-[70px] text-center leading-6">
          <Link to="/cart">
            <svg
              class="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </Link>
          <span className="absolute w-[22px] h-[22px] top-[0px] left-[23px] rounded-full bg-orange-500 text-white flex items-center justify-center">
            {" "}
            {state.length}{" "}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Header;
