import React from "react";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <div className="grid md:grid-cols-3 gap-10">
            {items.slice(0, 5).map((item) => (
              <FoodCard item={item} key={item._id}></FoodCard>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid md:grid-cols-3 gap-10">
            {items.slice(6, 10).map((item) => (
              <FoodCard item={item} key={item._id}></FoodCard>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default OrderTab;
