import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Shared/Loader/Loader";

const EmployeePaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const email = user?.email;

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["email", email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `employee/payment/data?email=${email}`
      );
      return data;
    },
  });

  if(isLoading) return <Loader/>

  return (
    <div className="max-w-3xl mx-auto space-y-4 mt-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center pb-6 text-emerald-500">Salary Payment History</h1>
      <div className="overflow-x-auto rounded shadow">
        <table className="min-w-full text-left text-black border border-collapse rounded sm:border-separate border-slate-200">
          <thead className="bg-gray-50 uppercase font-semibold text-gray-700">
            <tr>
              <th className="px-4 py-2 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
                Month
              </th>
              <th className="px-4 py-2 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
                Year
              </th>
              <th className="px-4 py-2 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
                Amount
              </th>
              <th className="px-4 py-2 t border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
                Transaction Id
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {payments.length === 0 ? (
              <tr>
                <td colSpan="4" className="px-4 py-3 text-center text-gray-400">
                  No data found.
                </td>
              </tr>
            ) : (
              payments.map((payment) => (
                <tr key={payment._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                    {payment.month}
                  </td>
                  <td className="px-4 py-2 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                    {payment.year}
                  </td>
                  <td className="px-4 py-2 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                    {payment.amount}
                  </td>
                  <td className="px-4 py-2 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                    {payment.transactionId}
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

export default EmployeePaymentHistory;
