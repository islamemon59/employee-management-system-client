/* eslint-disable no-unused-vars */
import React from "react";
import topper from "../../../../topper.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const TopRatedEmployee = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10 items-center">
      {/* Left side: Text */}
      <motion.div
        className="space-y-5"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-emerald-500 dark:text-emerald-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          🌟 Employee of the Month
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          At StaffHub, we believe every achievement deserves to be celebrated.
          Each month, we shine the spotlight on the team members whose
          dedication, creativity, and hard work make a difference.
        </motion.p>

        <motion.p
          className="text-gray-500 dark:text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Recognizing talent keeps our culture strong and our people motivated.
        </motion.p>

        <Link to="/blog" onClick={() => scrollTo(0)}>
          {" "}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white px-4 py-2 rounded-full"
          >
            See All Stars ⭐
          </motion.button>
        </Link>
      </motion.div>

      {/* Right side: Lottie Animation */}
      <motion.div
        className="flex justify-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 4 }}
      >
        <div className="relative group">
          <Lottie
            className="rounded-full w-64 h-64 object-cover border-4 border-emerald-500 shadow-lg group-hover:scale-105 transition-transform duration-300"
            animationData={topper}
            loop={true}
          />
          <span className="absolute bottom-2 right-2 bg-white dark:bg-gray-800 text-emerald-500 dark:text-emerald-400 text-xs px-2 py-0.5 rounded-full shadow">
            Marketing Team
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default TopRatedEmployee;
