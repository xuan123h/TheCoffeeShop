// https://61dba40d4593510017aff960.mockapi.io/coffee
import React, { useState, useEffect } from "react";
import Product from "../components/Product";

const ProductFeature = () => {
  const [data, setData] = useState([]);
  const [product, setProducts] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://61dba40d4593510017aff960.mockapi.io/coffee"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setProducts(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading ...</>;
  };
  const ShowProducts = () => {
    return (
      <>
        <ul className="flex items-center w-[988px] flex-wrap absolute right-[160px] top-[760px] text-center">
          {product.map((item) => (
            <li key={item.id} className="w-[240px] ml-[60px] mb-[30px]">
              <Product item={item} />
            </li>
          ))}
        </ul>
      </>
    );
  };
  return <div>{loading ? <Loading /> : <ShowProducts />}</div>;
};

export default ProductFeature;
