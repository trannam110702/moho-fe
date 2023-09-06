import React from "react";
import SliderWrapper, { NavigationWrapper } from "./style";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Slide1 from "../../assets/imgs/slide1.webp";
import Slide2 from "../../assets/imgs/slide2.webp";
import Slide3 from "../../assets/imgs/slide3.webp";
import Slide4 from "../../assets/imgs/slide4.webp";
import Slide5 from "../../assets/imgs/slide5.webp";
const Slider = () => {
  return (
    <SliderWrapper>
      <Swiper
        grabCursor={true}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay
      >
        <SwiperSlide>
          <div
            className="slide"
            style={{ backgroundImage: `url(${Slide1})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide"
            style={{ backgroundImage: `url(${Slide2})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide"
            style={{ backgroundImage: `url(${Slide3})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide"
            style={{ backgroundImage: `url(${Slide4})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide"
            style={{ backgroundImage: `url(${Slide5})` }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </SliderWrapper>
  );
};
export default Slider;
