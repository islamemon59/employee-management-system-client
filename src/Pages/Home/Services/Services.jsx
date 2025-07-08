import React from 'react';
import { FaUsers, FaClipboardCheck, FaMoneyCheckAlt, FaChartLine } from 'react-icons/fa';

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
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-500 mb-6">Our Services</h2>
        <p className="mb-10 text-black font-semibold">We provide everything to help manage your team effectively.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map(service => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="flex flex-col items-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
