import React from "react";
import BannerSlider from "../../../Components/BannerSlider/BannerSlider";
import Services from "../Services/Services";
import TestimonialsSlider from "../TestimonialSlider/TestimonialSlider";

const Home = () => {
  return (
    <>
      <div>
        <BannerSlider />
      </div>
      <div>
        <Services/>
        <TestimonialsSlider/>
      </div>
    </>
  );
};

export default Home;
