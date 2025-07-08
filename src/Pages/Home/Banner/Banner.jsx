import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Banner = ({ slides }) => {
  return (
    <div>
      <Swiper
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        loop={true}
        className=" overflow-hidden shadow h-400px md:h-[600px] py-10"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="h-400px md:h-[600px] py-10 flex max-w-7xl mx-auto gap-6 items-center flex-col md:flex-row-reverse">
              <div className="flex-1">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start text-black p-4 flex-1">
                <h2 className="text-4xl md:text-6xl text-start md:leading-17 leading-10 font-extrabold">
                  {slide.title}
                </h2>
                <p className="mt-2 text-xl font-semibold">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
