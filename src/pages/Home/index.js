import React, { useState, useEffect } from "react";
import HomeWrapper from "./style";
import Layout from "../../components/Layout";
import Slider from "../../components/Slider";
import Rooms from "../../components/Rooms";
import Sales from "../../components/Sales";
import ProductList from "../../components/ProductList";

import { productApi } from "../../api/mohoApi";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getPr = async () => {
      window.scrollTo(0, 0);
      const res = await productApi.getAllProduct();
      setProducts(res);
      console.log(res);
    };
    getPr();
  }, []);
  return (
    <HomeWrapper>
      <Layout>
        <Slider></Slider>
        <Rooms></Rooms>
        <Sales></Sales>
        <ProductList
          products={products}
          title="Sản phẩm bán chạy"
        ></ProductList>
      </Layout>
    </HomeWrapper>
  );
};

export default Home;
