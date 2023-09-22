import React, { useEffect, useState } from "react";
import ProductWrapper from "./style";
import Layout from "../../components/Layout";
import { productApi } from "../../api/mohoApi";
import Loading from "../../components/Loading";
import ProductList from "../../components/ProductList";
const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPr = async () => {
      window.scrollTo(0, 0);
      const res = await productApi.getAllProduct();
      setProducts(res);
      setLoading(false);
    };
    getPr();
  }, []);
  return (
    <ProductWrapper>
      <Layout>
        <Loading loading={loading}></Loading>
        <ProductList products={products} title="Tất cả sản phẩm"></ProductList>
      </Layout>
    </ProductWrapper>
  );
};

export default Product;
