import React from 'react'


import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, EffectCoverflow, Pagination, Autoplay } from "swiper";
import Link from 'next/link';


const HomeSlider = () => {
    const params = {
        spaceBetween: 30,
        // effect: "fade",
        autoHeight: true,
        speed: 1700,
        modules: [EffectFade, Navigation, Pagination, Autoplay],
        autoplay: {
          delay: 2000,
          // disableOnInteraction: false,
        },
      };
  return (
    <Swiper {...params} effect='fade' className="mySwiper relative pb-6 z-[1]">
    <SwiperSlide>
      <div className='flex-col items-center justify-center flex h-[25vh]  w-full' style={{ background: `url(https://www.netmeds.com/images/cms/aw_rbslider/slides/1663948575_Mobile_Home_Banner-kareena-T2C4000.jpg) center center/cover` }}></div>
    </SwiperSlide>
    <SwiperSlide>
      <div className='flex-col items-center justify-center flex h-[25vh]  w-full' style={{ background: `url(https://www.netmeds.com/images/cms/aw_rbslider/slides/1654276209_Mobile_Home_Kareena-cold.jpg) center center/cover` }}></div>
    </SwiperSlide>
    <SwiperSlide>
      <div className='flex-col items-center justify-center flex h-[25vh]  w-full' style={{ background: `url(https://www.netmeds.com/images/cms/aw_rbslider/slides/1663604394_Mobile_Home-Netmeds_Health_Pack_at_Rs._499.jpg) center center/cover` }}>      </div>
    </SwiperSlide>
  </Swiper>
  )
}

export default HomeSlider