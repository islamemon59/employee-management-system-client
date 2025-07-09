import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
// import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { AiOutlineEye } from "react-icons/ai";
import { FaMoneyCheckAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router";
import PayModal from "../PayModal/PayModal";

const EmployeeList = () => {
  //   const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [employeeData, setEmployeeData] = useState(null);
  const { data: employees = [], refetch } = useQuery({
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

  console.log(employees);
  return (
    <div className="w-full overflow-x-auto">
      <table
        className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200"
        cellSpacing="0"
      >
        <tbody>
          <tr>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Name
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Email
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Verified
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Bank Account
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Salary
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Pay
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Details
            </th>
          </tr>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                {employee.name}
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                {employee.email}
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                <div
                  className="cursor-pointer"
                  onClick={() => handleVerify(employee._id, employee.status)}
                >
                  {employee.status === "verified" ? "✅" : "❌"}
                </div>
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                {employee.bank_account_no}
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                {employee.salary}
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 disabled:cursor-not-allowed">
                <button onClick={() => handlePayRequest(employee)}>
                  <FaMoneyCheckAlt size={22} color="#10B981" />
                </button>
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
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
  );
};

export default EmployeeList;
