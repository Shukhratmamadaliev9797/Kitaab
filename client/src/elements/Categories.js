import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Categories() {
  return (
    <div className="categories">
      <div className="categories__container">
        <h3>Categories</h3>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[]}
          className="categories__categories"
        >
          <SwiperSlide className="categories__category">Slide 1</SwiperSlide>
          <SwiperSlide className="categories__category">Slide 1</SwiperSlide>
          <SwiperSlide className="categories__category">Slide 1</SwiperSlide>
          <SwiperSlide className="categories__category">Slide 1</SwiperSlide>
          <SwiperSlide className="categories__category">Slide 1</SwiperSlide>
          <SwiperSlide className="categories__category">Slide 1</SwiperSlide>
          <SwiperSlide className="categories__category">Slide 1</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
