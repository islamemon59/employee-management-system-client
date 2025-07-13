/* eslint-disable no-unused-vars */
import React from 'react';
import { FaUsers, FaClipboardCheck, FaMoneyCheckAlt, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: "Employee Tracking",
    description: "Easily monitor employee tasks and daily progress in real time.",
    icon: <FaClipboardCheck className="text-4xl text-blue-500 mb-3" />
  },
  {
    id: 2,
    title: "Payroll Management",
    description: "Quickly process payments and keep track of salary history.",
    icon: <FaMoneyCheckAlt className="text-4xl text-green-500 mb-3" />
  },
  {
    id: 3,
    title: "Role-Based Access",
    description: "Different dashboards for Admin, HR, and Employee roles.",
    icon: <FaUsers className="text-4xl text-purple-500 mb-3" />
  },
  {
    id: 4,
    title: "Analytics & Reports",
    description: "View work statistics, payment charts, and performance trends.",
    icon: <FaChartLine className="text-4xl text-yellow-500 mb-3" />
  }
];

const Services = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-emerald-500 dark:text-emerald-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="mb-10 text-black dark:text-gray-300 font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We provide everything to help manage your team effectively.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="flex flex-col items-center"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, repeatType: "mirror", duration: 3 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
