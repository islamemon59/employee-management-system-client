/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaUserShield,
  FaUserFriends,
  FaUserTie,
  FaUserPlus,
  FaCalendarCheck,
  FaRegCalendarAlt,
} from "react-icons/fa";
import useAuth from "../../../../Hooks/useAuth";
import useUserRole from "../../../../Hooks/useUserRole";
import { employeesCountData } from "../../../../Api/CountOfEmployeeData";
import useTitle from "../../../../Hooks/useTitle";

const AdminDashboard = () => {
  useTitle("Admin Dashboard - StaffHub");
  const { user } = useAuth();
  const { role } = useUserRole();
  const [employeesData, setEmployeesData] = useState({});

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    {
      Icon: FaUserShield,
      value: employeesData.totalByRole?.Admin || 0,
      label: "Total Admin",
      color: "text-red-500 dark:text-red-400",
    },
    {
      Icon: FaUsers,
      value: employeesData.totalByRole?.Employee || 0,
      label: "Total Employees",
      color: "text-emerald-500 dark:text-emerald-400",
    },
    {
      Icon: FaUserTie,
      value: employeesData.totalByRole?.HR || 0,
      label: "Total HR",
      color: "text-blue-500 dark:text-blue-400",
    },
    {
      Icon: FaUserPlus,
      value: employeesData.unverifiedEmployees || 0,
      label: "New Applicants",
      color: "text-blue-500 dark:text-blue-400",
    },
    {
      Icon: FaCalendarCheck,
      value: employeesData.verifiedEmployees || 0,
      label: "Verified Employees",
      color: "text-yellow-500 dark:text-yellow-400",
    },
    {
      Icon: FaRegCalendarAlt,
      value: employeesData.unverifiedEmployees || 0,
      label: "Unverified Employees",
      color: "text-purple-500 dark:text-purple-400",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const data = await employeesCountData();
      const response = data[0];

      const transformed = {
        totalEmployees: response.totalEmployees?.[0]?.count || 0,
        verifiedEmployees: response.verifiedEmployees?.[0]?.count || 0,
        unverifiedEmployees: response.unverifiedEmployees?.[0]?.count || 0,
        totalByRole: response.totalByRole
          ? response.totalByRole.reduce((acc, item) => {
              acc[item._id] = item.count;
              return acc;
            }, {})
          : {},
      };

      setEmployeesData(transformed);
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8 bg-white dark:bg-gray-900 min-h-screen">
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold text-emerald-500 dark:text-emerald-400 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Welcome Admin!
      </motion.h1>

      {/* Admin key stats */}
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
        transition={{ staggerChildren: 0.1 }}
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded bg-white dark:bg-gray-800 p-6 shadow hover:shadow-md flex flex-col items-center text-center"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4,
                ease: "easeInOut",
              }}
            >
              <item.Icon size={32} className={`${item.color} mb-2`} />
            </motion.div>

            <p className="mt-1 text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
              {item.value}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">{item.label}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Admin logs */}
      <motion.section
        className="rounded bg-white dark:bg-gray-800 p-6 shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
          Admin Logs
        </h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>• User John Doe updated settings</li>
          <li>• Backup completed successfully</li>
          <li>• New user account created</li>
        </ul>
      </motion.section>

      {/* Admin profile section */}
      <motion.section
        className="rounded bg-white dark:bg-gray-800 p-6 shadow flex flex-col md:flex-row items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={user?.photoURL}
          alt="Admin Profile"
          className="w-24 h-24 rounded-full object-cover border-2 border-emerald-500 dark:border-emerald-400 shadow"
        />
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            {user?.displayName}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {role} • {user?.email}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md">
            Passionate about streamlining workflows, improving team
            collaboration, and building tools that make work life easier.
          </p>
          <button className="mt-2 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full transition">
            View Profile
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default AdminDashboard;
