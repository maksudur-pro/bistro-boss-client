import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div className="mb-24">
      <h1 className="text-center text-[#D99904] mb-10 text-xl font-bold">
        ---From 11:00am to 10:00pm---
      </h1>
      <h2 className="text-center mb-10 text-2xl font-bold">ORDER ONLINE</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper ">
        <SwiperSlide className="mb-20">
          <img src={slide1} alt="" />
          <h3 className="text-4xl uppercase text-center text-white -mt-16">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-4xl uppercase text-center text-white -mt-16">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-4xl uppercase text-center text-white -mt-16">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-4xl uppercase text-center text-white -mt-16">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-4xl uppercase text-center text-white -mt-16">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;