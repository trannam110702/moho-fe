import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import SalesWrapper, { SlideNavWrapper } from "./style";
import ProductCard from "../ProductCard";
import sanpham1 from "../../assets/imgs/sanpham1.webp";
import { leftArrowIcon, rightArrowIcon } from "../../assets/imgs/svgs";
const Sales = () => {
  const product = {
    name: "Tủ Quần Áo Gỗ Thanh Treo MOHO VIENNA Tay Nắm 201 4 Màu",
    price: 4290000,
    rate: 4,
    saled: 65,
    colors: ["red", "blue"],
    img: sanpham1,
    discount: 17,
    bestseller: true,
  };
  return (
    <SalesWrapper className="container">
      <div className="header">
        <div className="title">Ưu đãi giới hạn</div>
        <div className="more">Xem Thêm</div>
      </div>
      <Swiper
        modules={[Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        autoplay
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          765: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        <SlideNavigation />
        <SwiperSlide>
          <ProductCard product={product}></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard product={product}></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard product={product}></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard product={product}></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard product={product}></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard product={product}></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard product={product}></ProductCard>
        </SwiperSlide>
      </Swiper>
    </SalesWrapper>
  );
};
export const SlideNavigation = () => {
  const swiper = useSwiper();
  return (
    <SlideNavWrapper className="nav">
      <div onClick={() => swiper.slidePrev()}>{leftArrowIcon}</div>
      <div onClick={() => swiper.slideNext()}>{rightArrowIcon}</div>
    </SlideNavWrapper>
  );
};
export default Sales;
