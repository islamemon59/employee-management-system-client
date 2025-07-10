import React, { useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaCreditCard } from "react-icons/fa";
import PaymentModal from "./PaymentModal/PaymentModal";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Loader from "../../../../Shared/Loader/Loader";

const stripePromise = loadStripe(import.meta.env.VITE_payment_key);

const PayRoll = () => {
  const axiosSecure = useAxiosSecure();
  const [payEmployee, setPayEmployee] = useState("");

  const {
    data: employees = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["paidAt"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `unpaid/employee?status=${"unPaid"}`
      );
      return data;
    },
  });

  const handlePay = (employee) => {
    setPayEmployee(employee);
    document.getElementById("my_modal_1").showModal();
  };

  if (isLoading) return <Loader />;

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
              Payment
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
                <td
                  onClick={() => handlePay(employee)}
                  className="h-12 px-6 text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 cursor-pointer"
                >
                  <button
                    disabled={employee.paidAt}
                    className="flex justify-center items-center gap-1 disabled:cursor-not-allowed"
                  >
                    <FaCreditCard size={22} className="text-emerald-500" />
                    <span className="font-bold text-emerald-500">Pay</span>
                  </button>
                </td>
                <td className="h-12 px-6 text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 cursor-pointer">
                  {employee.paidAt
                    ? new Date(employee.paidAt).toLocaleDateString()
                    : "-"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <Elements stripe={stripePromise}>
        <PaymentModal
          payEmployee={payEmployee}
          refetch={refetch}
        ></PaymentModal>
      </Elements>
    </div>
  );
};

export default PayRoll;
