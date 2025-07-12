import React from "react";
import { FiArrowRight } from "react-icons/fi";
import employee from '../../../../employee.json'
import Lottie from "lottie-react";

const HomeIntroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Side - Text */}
      <div className="space-y-6">
        <h2 className="text-4xl font-extrabold text-emerald-500 leading-tight">
          Empower Your Team, Track Work Efficiently
        </h2>
        <p className="text-gray-600 text-lg">
          Manage employee tasks, monitor progress, and streamline payroll all in one platform.  
          Designed to help HR & managers stay organized and make data-driven decisions effortlessly.
        </p>
        <button className="inline-flex items-center gap-2 bg-emerald-500 text-white px-5 py-3 rounded-full hover:bg-emerald-600 transition">
          Get Started
          <FiArrowRight size={18} />
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="flex justify-center md:justify-end">
        <Lottie animationData={employee} loop={true}/>
      </div>
    </section>
  );
};

export default HomeIntroSection;
