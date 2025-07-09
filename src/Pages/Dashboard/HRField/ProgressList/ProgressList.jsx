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

  if(isLoading) return <Loader/>

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-4">
      <h2 className="text-xl font-semibold text-center">
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
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-collapse rounded border-slate-300">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Task</th>
              <th className="px-4 py-2">Hours</th>
              <th className="px-4 py-2">Date</th>
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
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.task}</td>
                  <td className="border px-4 py-2">{item.hours} hrs</td>
                  <td className="border px-4 py-2">{item.date}</td>
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
