import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center absolute top-[650px] right-[300px]">
      <div className="flex items-center absolute right-[330px]">
        <span>
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
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
        </span>
        <select
          name=""
          id=""
          className="w-[420px] h-[35px] bg-[#FFFFFF] ml-[10px] rounded-lg outline-none"
        >
          <option
            value=""
            className="w-[394px] h-[28px] text-[#000000D9] text-[14px]"
          >
            {" "}
            Chi Nhánh Quận 1 - 115 Hai Bà Trưng, Bến Nghé, Quận 1, Hồ Chí Minh{" "}
          </option>
          <option value="">
            {" "}
            Chi Nhánh Thủ Đức - Số 1, Võ Văn Ngân, Linh Chiểu, Thủ Đức{" "}
          </option>
          <option value="">
            {" "}
            Chi Nhánh Quận 5 - Số 53, Lê Hồng Phong, Quận 5, Hồ Chí Minh{" "}
          </option>
        </select>
      </div>
      <div className="flex items-center w-[291px] h-[35px] bg-[#FFFFFF] p-4">
        <input
          type="text"
          placeholder="Tìm sản phẩm"
          className="w-[233px] h-[23px] bg-[#FFFFFF] outline-none"
        />
        <span className="w-[40px] h-[35px] absolute left-[290px] bg-orange-100 flex items-center justify-center">
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
    </div>
  );
};

export default Navbar;
