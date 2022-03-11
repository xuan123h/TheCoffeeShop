import React from "react";
import Header from "../components/Header";

const Promotion = () => {
  return (
    <>
      <Header></Header>
      <div className="flex items-center absolute top-[200px] left-[600px]">
        <input
          type="text"
          placeholder="Search by coupon event"
          className="w-[627px] h-[34px] bg-[#FFFFFF] p-1 outline-none font-three"
        />
        <span className="w-[44px] h-[32px] bg-orange-300 p-1 flex items-center justify-center rounded-lg">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </span>
      </div>
    </>
  );
};

export default Promotion;
