import React from "react";
import Banner from "../../Pages/Home/Banner/Banner";

const BannerSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Empowering Your Team",
      subtitle: "Track work, payments & growth effortlessly",
      image: "https://i.ibb.co/xKf3FSBJ/1674750697306-removebg-preview.png",
    },
    {
      id: 2,
      title: "Simple Employee Management",
      subtitle: "All data in one dashboard",
      image: "https://i.ibb.co/q30fv146/1679853021631-removebg-preview.png",
    },
    {
      id: 3,
      title: "Fast Payroll Processing",
      subtitle: "Pay your team on time, every time",
      image: "https://i.ibb.co/7t9k72RX/featured-2-removebg-preview.png",
    },
  ];
  return (
    <div>
      <Banner slides={slides}></Banner>
    </div>
  );
};

export default BannerSlider;
