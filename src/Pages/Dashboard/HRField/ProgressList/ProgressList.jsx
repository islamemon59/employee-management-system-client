import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Loader from "../../../../Shared/Loader/Loader";

const ProgressList = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedName, setSelectedName] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("July");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { data: workData = [], isLoading } = useQuery({
    queryKey: ["employeeWorkData", selectedName, selectedMonth],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `api/employee-work-data?name=${selectedName}&month=${selectedMonth}`
      );
      return data;
    },
  });

  // Collect unique names for dropdown
  const uniqueNames = [...new Set(workData.map((item) => item.name))];

  if (isLoading) return <Loader />;

  return (
    <div className="max-w-4xl mx-auto space-y-4 mt-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center pb-6 text-emerald-500 dark:text-emerald-400">
        Employee Work Records
      </h2>

      {/* Filters */}
      <div className="flex gap-2 md:gap-6 flex-col md:flex-row justify-center w-full">
        <select
          value={selectedName}
          onChange={(e) => setSelectedName(e.target.value)}
          className="border rounded px-3 py-1 w-full bg-white dark:bg-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600"
        >
          <option value="">All Employees</option>
          {uniqueNames.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>

        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="border rounded px-3 py-1 w-full bg-white dark:bg-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600"
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select
          className="border rounded px-3 py-1 w-full bg-white dark:bg-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600"
          disabled
        >
          <option value="2025">2025</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-collapse rounded border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700 uppercase font-semibold text-gray-700 dark:text-gray-300">
            <tr>
              <th className="h-12 px-6 border-l text-start first:border-l-0 border-gray-300 dark:border-gray-600 stroke-slate-700 dark:stroke-gray-400 text-slate-700 dark:text-gray-300 bg-slate-100 dark:bg-gray-700">
                Name
              </th>
              <th className="h-12 px-6 border-l text-start first:border-l-0 border-gray-300 dark:border-gray-600 stroke-slate-700 dark:stroke-gray-400 text-slate-700 dark:text-gray-300 bg-slate-100 dark:bg-gray-700">
                Task
              </th>
              <th className="h-12 px-6 border-l text-start first:border-l-0 border-gray-300 dark:border-gray-600 stroke-slate-700 dark:stroke-gray-400 text-slate-700 dark:text-gray-300 bg-slate-100 dark:bg-gray-700">
                Hours
              </th>
              <th className="h-12 px-6 border-l text-start first:border-l-0 border-gray-300 dark:border-gray-600 stroke-slate-700 dark:stroke-gray-400 text-slate-700 dark:text-gray-300 bg-slate-100 dark:bg-gray-700">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {workData.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="text-center p-4 text-gray-400 dark:text-gray-500"
                >
                  No data found
                </td>
              </tr>
            ) : (
              workData.map((item) => (
                <tr
                  key={item._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <td className="h-12 px-6 transition duration-300 border-t border-l first:border-l-0 border-gray-300 dark:border-gray-600 stroke-slate-500 dark:stroke-gray-400 text-slate-500 dark:text-gray-300">
                    {item.name}
                  </td>
                  <td className="h-12 px-6 transition duration-300 border-t border-l first:border-l-0 border-gray-300 dark:border-gray-600 stroke-slate-500 dark:stroke-gray-400 text-slate-500 dark:text-gray-300">
                    {item.task}
                  </td>
                  <td className="h-12 px-6 transition duration-300 border-t border-l first:border-l-0 border-gray-300 dark:border-gray-600 stroke-slate-500 dark:stroke-gray-400 text-slate-500 dark:text-gray-300">
                    {item.hours} hrs
                  </td>
                  <td className="h-12 px-6 transition duration-300 border-t border-l first:border-l-0 border-gray-300 dark:border-gray-600 stroke-slate-500 dark:stroke-gray-400 text-slate-500 dark:text-gray-300">
                    {item.date}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProgressList;
