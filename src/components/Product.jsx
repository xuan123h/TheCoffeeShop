import React from "react";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div>
      <img src={item.image} alt={item.name} className="w-[240px] h-[240px]" />
      <li className="w-[240px] h-[60px] text-[#3B3838] text-[25px] font-one mt-[20px]">
        {" "}
        {item.name}{" "}
      </li>
      <span className="w-[46px] h-[20px] text-[#A47343] text-[18px] font-one">
        {new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "VND",
        }).format(item.price)}
      </span>
      <button className="w-[192px] h-[40px] text-[#A47343] text-[20px] font-one bg-orange-200 mt-[20px] hover:bg-slate-500 transition-all hover:text-white cursor-pointer">
        <Link to={`/coffee/${item.id}`}>Mua ngay</Link>
      </button>
    </div>
  );
};

export default Product;
