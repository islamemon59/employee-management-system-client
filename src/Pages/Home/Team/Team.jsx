/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10 items-center">
      {/* Left side - Text */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-500 dark:text-emerald-400">
          Meet Our Team
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          We’re a small group of passionate developers, designers & thinkers,
          working together to bring you the best service.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Each member brings unique skills to build amazing user experiences.
        </p>
      </motion.div>

      {/* Right side - Images */}
      <motion.div
        className="grid grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {[
          "https://randomuser.me/api/portraits/men/32.jpg",
          "https://randomuser.me/api/portraits/women/45.jpg",
          "https://randomuser.me/api/portraits/men/54.jpg",
          "https://randomuser.me/api/portraits/women/22.jpg",
        ].map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Team member ${index + 1}`}
            className="rounded-lg shadow cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Team;
