/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const Banner = ({ slides }) => {
  return (
    <div>
      <Swiper
        effect="fade"
        speed={700}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        loop={true}
        className="overflow-hidden shadow h-400px md:h-[650px] py-10"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="h-400px md:h-[650px] py-10 flex max-w-7xl mx-auto gap-6 items-center flex-col md:flex-row-reverse">
              {/* Image with overlay */}
              <motion.div
                className="flex-1 relative overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.65 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full md:h-[400px] h-[220px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
              </motion.div>

              {/* Text with floating effect */}
              <motion.div
                className="p-4 flex-1 text-center md:text-left"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                  delay: 0.3,
                }}
              >
                {/* Floating title */}
                <motion.h2
                  className="text-4xl md:text-6xl font-extrabold text-emerald-500 drop-shadow-sm"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 4,
                  }}
                >
                  {slide.title}
                </motion.h2>

                <p className="mt-3 text-xl font-semibold text-gray-500 drop-shadow">
                  {slide.subtitle}
                </p>

                {/* CTA button with animated hover & tap */}
                <Link to="/aboutUs" onClick={() => scrollTo(0)}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mt-6 px-6 py-2 bg-emerald-500 text-white rounded-full shadow hover:bg-emerald-600"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
