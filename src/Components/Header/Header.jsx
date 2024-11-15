import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import "./Header.css";

import React from "react";

const Header = () => {
  return (
    <div className="header">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <img
            src="https://naviant.com/wp-content/uploads/2022/06/What-to-Look-for-in-a-Managed-Services-Provider.jpg"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://evotecplus.com.au/wp-content/uploads/2023/01/E-router-Management.png"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.idgesg.net/images/article/2017/06/connect-gateway-to-router-100726042-large.jpg"
            alt="Slide 2"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
