import React from "react";
import topper from "../../../../topper.json";
import Lottie from "lottie-react";

const TopRatedEmployee = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10 items-center">
      {/* Left side: Text */}
      <div className="space-y-5">
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-500">
          🌟 Employee of the Month
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At StaffHub, we believe every achievement deserves to be celebrated.
          Each month, we shine the spotlight on the team members whose
          dedication, creativity, and hard work make a difference.
        </p>
        <p className="text-gray-500 text-sm">
          Recognizing talent keeps our culture strong and our people motivated.
        </p>
        <button className="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition">
          See All Stars ⭐
        </button>
      </div>

      {/* Right side: Image */}
      <div className="flex justify-center">
        <div className="relative group">
          <Lottie
            className="rounded-full w-64 h-64 object-cover border-4 border-emerald-500 shadow-lg group-hover:scale-105 transition-transform duration-300"
            animationData={topper}
            loop={true}
          />
          <span className="absolute bottom-2 right-2 bg-white text-emerald-500 text-xs px-2 py-0.5 rounded-full shadow">
            Marketing Team
          </span>
        </div>
      </div>
    </section>
  );
};

export default TopRatedEmployee;
