import React from "react";

const Category = () => {
  return (
    <div className="border border-r-indigo-800 h-[2300px]">
      <h2 className="w-[255px] h-[40px] text-[#A47343] text-[20px] font-three font-bold border-b-orange-400 border">
        {" "}
        DANH MỤC{" "}
      </h2>
      <div className="w-[255px] h-[40px] text-[#000000D9] text-[14px] list-none mt-[20px] font-three font-semibold cursor-pointer">
        <li className="hover:text-orange-500"> HIỆN TẤT CẢ </li>
        <li className="hover:text-orange-500"> TRÀ TRÁI CÂY </li>
        <li className="hover:text-orange-500"> CÀ PHÊ ĐÁ XAY </li>
        <li className="hover:text-orange-500"> CÀ PHÊ GÓI </li>
        <li className="hover:text-orange-500"> BÁNH & SNACK </li>
        <li className="hover:text-orange-500"> CÀ PHÊ MÁY </li>
        <li className="hover:text-orange-500"> COLD BREW </li>
        <li className="hover:text-orange-500"> CÀ PHÊ Ý </li>
        <li className="hover:text-orange-500"> SỮA </li>
        <li className="hover:text-orange-500"> TRÀ </li>
      </div>
    </div>
  );
};

export default Category;
