/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaTasks, FaRegCalendarAlt, FaBullhorn } from "react-icons/fa";
import useAuth from "../../../../Hooks/useAuth";
import useUserRole from "../../../../Hooks/useUserRole";

const EmployeeDashboard = () => {
  const { user } = useAuth();
  const { role } = useUserRole();
  // Animation variants
  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cards = [
    {
      Icon: FaTasks,
      value: 12,
      label: "Tasks Assigned",
      color: "text-blue-500",
    },
    {
      Icon: FaRegCalendarAlt,
      value: 1,
      label: "Pending Leave Requests",
      color: "text-yellow-500",
    },
    {
      Icon: FaBullhorn,
      value: 3,
      label: "Announcements",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <motion.h1
        className="text-3xl font-bold text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Welcome Employee!
      </motion.h1>

      {/* Employee key stats */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
        transition={{ staggerChildren: 0.1 }}
      >
        {cards.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded bg-white p-6 shadow hover:shadow-md flex flex-col items-center text-center"
          >
            {/* Animated icon */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <item.Icon size={30} className={`${item.color} mb-2`} />
            </motion.div>
            <p className="mt-1 text-3xl font-semibold text-emerald-600">
              {item.value}
            </p>
            <p className="text-gray-600 mt-1 text-sm">{item.label}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Recent Notices */}
      <motion.section
        className="rounded bg-white p-6 shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Recent Notices
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li>• Team meeting on Friday at 10 AM</li>
          <li>• Submit monthly report by next week</li>
          <li>• HR updated company policy</li>
        </ul>
      </motion.section>
      <motion.section
        className="rounded bg-white p-6 shadow flex flex-col md:flex-row items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={user?.photoURL} // replace with logged-in user's avatar
          alt="Admin Profile"
          className="w-24 h-24 rounded-full object-cover border-2 border-emerald-500 shadow"
        />
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">
            {user?.displayName}
          </h3>
          <p className="text-gray-600 text-sm">
            {role} • {user?.email}
          </p>
          <p className="text-gray-500 text-sm max-w-md">
            Passionate about streamlining workflows, improving team
            collaboration, and building tools that make work life easier.
          </p>
          <button className="mt-2 inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition">
            View Profile
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default EmployeeDashboard;
