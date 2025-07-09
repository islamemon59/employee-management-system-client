import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PayRoll = () => {
  const axiosSecure = useAxiosSecure();

  const { data: employees = [] } = useQuery({
    queryKey: ["paidAt"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `unpaid/employee?status=${"unPaid"}`
      );
      return data;
    },
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-collapse rounded border-slate-300">
        <thead className="bg-slate-100">
          <tr>
            <th className="h-12 px-6 font-medium text-start border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
              Name
            </th>
            <th className="h-12 px-6 font-medium text-start border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
              Salary
            </th>
            <th className="h-12 px-6 font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
              Month
            </th>
            <th className="h-12 px-6 font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
              Year
            </th>
            <th className="h-12 px-6 font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
              Payment Date
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center p-4 text-gray-400">
                No data found
              </td>
            </tr>
          ) : (
            employees.map((employee) => (
              <tr key={employee._id} className="hover:bg-gray-50">
                <td className="h-12 px-6 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {employee.name}
                </td>
                <td className="h-12 px-6 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {employee.salary}
                </td>
                <td className="h-12 px-6 cursor-pointer transition duration-300 text-center border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {employee.month}
                </td>
                <td className="h-12 px-6 text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 cursor-pointer">
                  {employee.year}
                </td>
                <td className="h-12 px-6 text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 cursor-pointer">
                  {employee.paidAt ? employee.paidAt : "-"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PayRoll;
