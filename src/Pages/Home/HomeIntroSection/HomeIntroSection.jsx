/* eslint-disable no-unused-vars */
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import employee from "../../../../employee.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const HomeIntroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Side - Text */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl font-extrabold text-emerald-500 leading-tight dark:text-emerald-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Empower Your Team, Track Work Efficiently
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-300 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Manage employee tasks, monitor progress, and streamline payroll all in
          one platform. Designed to help HR & managers stay organized and make
          data-driven decisions effortlessly.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white px-5 py-3 rounded-full"
        >
          Get Started
          <FiArrowRight size={18} />
        </motion.button>
      </motion.div>

      {/* Right Side - Lottie Animation */}
      <motion.div
        className="flex justify-center md:justify-end"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 4 }}
      >
        <Lottie animationData={employee} loop={true} />
      </motion.div>
    </section>
  );
};

export default HomeIntroSection;
