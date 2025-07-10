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
    <div className="max-w-5xl mx-auto p-4 space-y-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center pb-6 text-emerald-500">
        Employee Work Records
      </h2>

      {/* Filters */}
      <div className="flex gap-4 justify-center">
        <select
          value={selectedName}
          onChange={(e) => setSelectedName(e.target.value)}
          className="border rounded px-3 py-1"
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
          className="border rounded px-3 py-1"
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select className="border rounded px-3 py-1">
          <option value="2025">2025</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-collapse rounded border-slate-300">
          <thead className="bg-slate-100">
            <tr>
              <th className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
                Name
              </th>
              <th className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
                Task
              </th>
              <th className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
                Hours
              </th>
              <th className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {workData.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-4 text-gray-400">
                  No data found
                </td>
              </tr>
            ) : (
              workData.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{item.name}</td>
                  <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{item.task}</td>
                  <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{item.hours} hrs</td>
                  <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">{item.date}</td>
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
