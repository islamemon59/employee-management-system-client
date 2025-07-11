import React from "react";
import BannerSlider from "../../../Components/BannerSlider/BannerSlider";
import Services from "../Services/Services";
import TestimonialsSlider from "../TestimonialSlider/TestimonialSlider";
import HomeIntroSection from "../HomeIntroSection/HomeIntroSection";

const Home = () => {
  return (
    <div className="space-y-16">
      <div>
        <BannerSlider />
      </div>
      <div>
        <HomeIntroSection/>
        <Services/>
        <TestimonialsSlider/>
      </div>
    </div>
  );
};

export default Home;
