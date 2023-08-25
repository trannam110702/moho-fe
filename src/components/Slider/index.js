import React from "react";
import SliderWrapper from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "../../assets/imgs/slide1.webp";
import Slide2 from "../../assets/imgs/slide2.webp";
import Slide3 from "../../assets/imgs/slide3.webp";
import Slide4 from "../../assets/imgs/slide4.webp";
import Slide5 from "../../assets/imgs/slide5.webp";
const Slider = () => {
  return (
    <SliderWrapper>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
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
