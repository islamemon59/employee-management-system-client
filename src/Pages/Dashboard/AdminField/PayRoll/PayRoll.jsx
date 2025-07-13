import React, { useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaCreditCard } from "react-icons/fa";
import PaymentModal from "./PaymentModal/PaymentModal";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Loader from "../../../../Shared/Loader/Loader";
import useTitle from "../../../../Hooks/useTitle";

const stripePromise = loadStripe(import.meta.env.VITE_payment_key);

const PayRoll = () => {
  useTitle("Pay Roll - StaffHub");

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
    <div className="space-y-6 max-w-5xl mx-auto mt-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-emerald-500 pb-6">
        Employee Payment Request
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-collapse rounded border-slate-300 dark:border-gray-700">
          <thead className="bg-gray-50 uppercase font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            <tr>
              <th className="h-12 px-6 text-start border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:stroke-gray-400 dark:text-gray-300 dark:bg-gray-900">
                Name
              </th>
              <th className="h-12 px-6 text-start border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:stroke-gray-400 dark:text-gray-300 dark:bg-gray-900">
                Salary
              </th>
              <th className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:stroke-gray-400 dark:text-gray-300 dark:bg-gray-900">
                Month
              </th>
              <th className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:stroke-gray-400 dark:text-gray-300 dark:bg-gray-900">
                Year
              </th>
              <th className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:stroke-gray-400 dark:text-gray-300 dark:bg-gray-900">
                Payment
              </th>
              <th className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:stroke-gray-400 dark:text-gray-300 dark:bg-gray-900">
                Payment Date
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-400 dark:text-gray-500">
                  No data found
                </td>
              </tr>
            ) : (
              employees.map((employee) => (
                <tr
                  key={employee._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <td className="h-12 px-6 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 dark:border-gray-700 dark:stroke-gray-400 dark:text-gray-300">
                    {employee.name}
                  </td>
                  <td className="h-12 px-6 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 dark:border-gray-700 dark:stroke-gray-400 dark:text-gray-300">
                    {employee.salary}$
                  </td>
                  <td className="h-12 px-6 cursor-pointer transition duration-300 text-center border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 dark:border-gray-700 dark:stroke-gray-400 dark:text-gray-300">
                    {employee.month}
                  </td>
                  <td className="h-12 px-6 text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 cursor-pointer dark:border-gray-700 dark:stroke-gray-400 dark:text-gray-300">
                    {employee.year}
                  </td>
                  <td
                    onClick={() => handlePay(employee)}
                    className="h-12 justify-items-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 cursor-pointer dark:border-gray-700 dark:stroke-gray-400 dark:text-gray-300"
                  >
                    <button
                      disabled={employee.paidAt}
                      className="flex justify-center items-center h-full w-full gap-1 disabled:cursor-not-allowed disabled:text-gray-400 text-emerald-500 dark:text-emerald-400"
                    >
                      <FaCreditCard size={22} />
                      <span className="font-bold">Pay</span>
                    </button>
                  </td>
                  <td className="h-12 px-6 text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 cursor-pointer dark:border-gray-700 dark:stroke-gray-400 dark:text-gray-300">
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
          <PaymentModal payEmployee={payEmployee} refetch={refetch} />
        </Elements>
      </div>
    </div>
  );
};

export default PayRoll;
