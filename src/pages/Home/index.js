import React from "react";
import HomeWrapper from "./style";
import Layout from "../../components/Layout";
import Slider from "../../components/Slider";
import Rooms from "../../components/Rooms";
import Sales from "../../components/Sales";
import ProductList from "../../components/ProductList";
import sanpham1 from "../../assets/imgs/sanpham1.webp";
const Home = () => {
  const products = [
    {
      name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
      price: 4290000,
      rate: 4,
      saled: 65,
      colors: ["red", "blue"],
      img: sanpham1,
      discount: 17,
      bestseller: true,
    },
    {
      name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
      price: 4290000,
      rate: 4,
      saled: 65,
      colors: ["red", "blue"],
      img: sanpham1,
      discount: 17,
      bestseller: true,
    },
    {
      name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
      price: 4290000,
      rate: 4,
      saled: 65,
      colors: ["red", "blue"],
      img: sanpham1,
      discount: 17,
      bestseller: true,
    },
    {
      name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
      price: 4290000,
      rate: 4,
      saled: 65,
      colors: ["red", "blue"],
      img: sanpham1,
      discount: 17,
      bestseller: true,
    },
    {
      name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
      price: 4290000,
      rate: 4,
      saled: 65,
      colors: ["red", "blue"],
      img: sanpham1,
      discount: 17,
      bestseller: true,
    },
    {
      name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
      price: 4290000,
      rate: 4,
      saled: 65,
      colors: ["red", "blue"],
      img: sanpham1,
      discount: 17,
      bestseller: true,
    },
    {
      name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
      price: 4290000,
      rate: 4,
      saled: 65,
      colors: ["red", "blue"],
      img: sanpham1,
      discount: 17,
      bestseller: true,
    },
    {
      name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
      price: 4290000,
      rate: 4,
      saled: 65,
      colors: ["red", "blue"],
      img: sanpham1,
      discount: 17,
      bestseller: true,
    },
    {
      name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
      price: 4290000,
      rate: 4,
      saled: 65,
      colors: ["red", "blue"],
      img: sanpham1,
      discount: 17,
      bestseller: true,
    },
    {
      name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
      price: 4290000,
      rate: 4,
      saled: 65,
      colors: ["red", "blue"],
      img: sanpham1,
      discount: 17,
      bestseller: true,
    },
    {
      name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
      price: 4290000,
      rate: 4,
      saled: 65,
      colors: ["red", "blue"],
      img: sanpham1,
      discount: 17,
      bestseller: true,
    },
    {
      name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
      price: 4290000,
      rate: 4,
      saled: 65,
      colors: ["red", "blue"],
      img: sanpham1,
      discount: 17,
      bestseller: true,
    },
    {
      name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
      price: 4290000,
      rate: 4,
      saled: 65,
      colors: ["red", "blue"],
      img: sanpham1,
      discount: 17,
      bestseller: true,
    },
    {
      name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
      price: 4290000,
      rate: 4,
      saled: 65,
      colors: ["red", "blue"],
      img: sanpham1,
      discount: 17,
      bestseller: true,
    },
    {
      name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
      price: 4290000,
      rate: 4,
      saled: 65,
      colors: ["red", "blue"],
      img: sanpham1,
      discount: 17,
      bestseller: true,
    },
    {
      name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
      price: 4290000,
      rate: 4,
      saled: 65,
      colors: ["red", "blue"],
      img: sanpham1,
      discount: 17,
      bestseller: true,
    },
    {
      name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
      price: 4290000,
      rate: 4,
      saled: 65,
      colors: ["red", "blue"],
      img: sanpham1,
      discount: 17,
      bestseller: true,
    },
    {
      name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
      price: 4290000,
      rate: 4,
      saled: 65,
      colors: ["red", "blue"],
      img: sanpham1,
      discount: 17,
      bestseller: true,
    },
    {
      name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
      price: 4290000,
      rate: 4,
      saled: 65,
      colors: ["red", "blue"],
      img: sanpham1,
      discount: 17,
      bestseller: true,
    },
    {
      name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
      price: 4290000,
      rate: 4,
      saled: 65,
      colors: ["red", "blue"],
      img: sanpham1,
      discount: 17,
      bestseller: true,
    },
  ];
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
