import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide_img1"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_img2"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_img3"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};