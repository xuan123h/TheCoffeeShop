import React from "react";
import Category from "../components/Category";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SliderTwo from "../components/SliderTwo";
import Title from "../components/Title";
import ProductFeature from "../features/ProductFeature";

const ProductFather = () => {
  return (
    <div>
      <Header></Header>
      <SliderTwo></SliderTwo>
      <div className="flex items-center">
        <div className="absolute top-[200px] left-[230px]">
          <Category></Category>
        </div>
        <div className="z-10">
          <Title></Title>
          <Navbar></Navbar>
          <ProductFeature></ProductFeature>
        </div>
      </div>
    </div>
  );
};

export default ProductFather;
