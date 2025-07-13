import React from "react";
import BannerSlider from "../../../Components/BannerSlider/BannerSlider";
import Services from "../Services/Services";
import TestimonialsSlider from "../TestimonialSlider/TestimonialSlider";
import HomeIntroSection from "../HomeIntroSection/HomeIntroSection";
import Team from "../Team/Team";
import TopRatedEmployee from "../TopRatedEmployee/TopRatedEmployee";
import useTitle from "../../../Hooks/useTitle";

const Home = () => {
  useTitle("Home - StaffHub");
  return (
    <div className="space-y-30">
      <div>
        <BannerSlider />
      </div>
      <div className="space-y-22">
        <HomeIntroSection/>
        <TopRatedEmployee/>
        <Services/>
        <TestimonialsSlider/>
        <Team/>
      </div>
    </div>
  );
};

export default Home;
