import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
// import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { AiOutlineEye } from "react-icons/ai";
import { FaMoneyCheckAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router";
import PayModal from "../PayModal/PayModal";
import Loader from "../../../../Shared/Loader/Loader";

const EmployeeList = () => {
  const axiosSecure = useAxiosSecure();
  const [employeeData, setEmployeeData] = useState(null);
  const { data: employees = [], refetch, isLoading } = useQuery({
    queryKey: ["Employee"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("all-employee-data");
      return data;
    },
  });

  const handleVerify = async (id) => {
    console.log(id);
    const { data } = await axiosSecure.patch(`employee/update/status/${id}`);
    toast.success("Employee Verified");
    refetch();
    console.log(data);
  };

  const handlePayRequest = (employee) => {
    setEmployeeData(employee);
    document.getElementById("my_modal_1").showModal();
  };

  if (isLoading) return <Loader />;

  return (
    <div className="space-y-6 max-w-6xl mx-auto mt-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-emerald-500 pb-6">
        All Employee List
      </h1>
      <div className="w-full overflow-x-auto">
        <table
          className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200 dark:border-slate-700"
          cellSpacing="0"
        >
          <thead className="bg-gray-50 uppercase font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">
            <tr>
              <th
                scope="col"
                className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:stroke-slate-400 dark:text-gray-300 dark:bg-gray-800"
              >
                Name
              </th>
              <th
                scope="col"
                className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:stroke-slate-400 dark:text-gray-300 dark:bg-gray-800"
              >
                Email
              </th>
              <th
                scope="col"
                className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:stroke-slate-400 dark:text-gray-300 dark:bg-gray-800"
              >
                Verified
              </th>
              <th
                scope="col"
                className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:stroke-slate-400 dark:text-gray-300 dark:bg-gray-800"
              >
                Bank Account
              </th>
              <th
                scope="col"
                className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:stroke-slate-400 dark:text-gray-300 dark:bg-gray-800"
              >
                Salary
              </th>
              <th
                scope="col"
                className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:stroke-slate-400 dark:text-gray-300 dark:bg-gray-800"
              >
                Pay
              </th>
              <th
                scope="col"
                className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:stroke-slate-400 dark:text-gray-300 dark:bg-gray-800"
              >
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr
                key={employee._id}
                className="hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <td className="h-12 px-6 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 dark:border-slate-700 dark:stroke-slate-400 dark:text-gray-300">
                  {employee.name}
                </td>
                <td className="h-12 px-6 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 dark:border-slate-700 dark:stroke-slate-400 dark:text-gray-300">
                  {employee.email}
                </td>
                <td className="h-12 px-6 text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 dark:border-slate-700 dark:stroke-slate-400 dark:text-gray-300">
                  <div
                    className="cursor-pointer"
                    onClick={() => handleVerify(employee._id, employee.status)}
                  >
                    {employee.status === "verified" ? "✅" : "❌"}
                  </div>
                </td>
                <td className="h-12 px-6 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 dark:border-slate-700 dark:stroke-slate-400 dark:text-gray-300">
                  {employee.bank_account_no}
                </td>
                <td className="h-12 px-6 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 dark:border-slate-700 dark:stroke-slate-400 dark:text-gray-300">
                  {employee.salary}
                </td>
                <td className="h-12 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 disabled:cursor-not-allowed dark:border-slate-700 dark:stroke-slate-400 dark:text-gray-300 disabled:dark:cursor-not-allowed">
                  <button
                    className="h-full w-full flex justify-center items-center disabled:cursor-not-allowed"
                    disabled={employee.status === "unverified"}
                    onClick={() => handlePayRequest(employee)}
                  >
                    <FaMoneyCheckAlt size={22} color="#10B981" />
                  </button>
                </td>
                <td className="h-12 px-6 transition flex justify-center items-center duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 dark:border-slate-700 dark:stroke-slate-400 dark:text-gray-300">
                  <Link to={`/dashboard/employeeDetails/${employee._id}`}>
                    <AiOutlineEye size={22} color="#3B82F6" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <PayModal employeeData={employeeData}></PayModal>
      </div>
    </div>
  );
};

export default EmployeeList;
