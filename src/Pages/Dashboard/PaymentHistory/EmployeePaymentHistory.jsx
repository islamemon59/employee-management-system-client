import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const EmployeePaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [payments, setPayments] = useState([]);
  const [dataCount, setDataCount] = useState(0);
  const [itemsParPage, setItemsParPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  const email = user?.email;

  useEffect(() => {
    const fetchFunction = async () => {
      const { data } = await axiosSecure.get(
        `employee/payment/data?email=${email}&page=${currentPage}&size=${itemsParPage}`
      );
      setDataCount(data.document);
      setPayments(data.result);
    };
    fetchFunction();
  }, [axiosSecure, itemsParPage, currentPage, email]);

  const count = dataCount;
  const numberOfPages = Math.ceil(count / itemsParPage);
  const pages = [...Array(numberOfPages).keys()];

  const handleItemsParPage = (e) => {
    const value = parseInt(e.target.value);
    setItemsParPage(value);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="max-w-3xl mx-auto space-y-4 mt-10 min-h-[calc(100vh-150px)]">
        <h1 className="text-3xl md:text-5xl font-bold text-center pb-6 text-emerald-500 dark:text-emerald-400">
          Salary Payment History
        </h1>
        <div className="overflow-x-auto rounded shadow">
          <table className="min-w-full text-left text-black border border-collapse rounded sm:border-separate border-slate-200 dark:border-gray-700 dark:text-gray-300 dark:bg-gray-900">
            <thead className="bg-gray-50 uppercase font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-4 py-2 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                  Month
                </th>
                <th className="px-4 py-2 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                  Year
                </th>
                <th className="px-4 py-2 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                  Amount
                </th>
                <th className="px-4 py-2 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                  Transaction Id
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {payments.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="px-4 py-3 text-center text-gray-400 dark:text-gray-500"
                  >
                    No data found.
                  </td>
                </tr>
              ) : (
                payments.map((payment) => (
                  <tr
                    key={payment._id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="px-4 py-2 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 dark:border-gray-600 dark:stroke-gray-400 dark:text-gray-300">
                      {payment.month}
                    </td>
                    <td className="px-4 py-2 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 dark:border-gray-600 dark:stroke-gray-400 dark:text-gray-300">
                      {payment.year}
                    </td>
                    <td className="px-4 py-2 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 dark:border-gray-600 dark:stroke-gray-400 dark:text-gray-300">
                      {payment.amount}
                    </td>
                    <td className="px-4 py-2 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 dark:border-gray-600 dark:stroke-gray-400 dark:text-gray-300">
                      {payment.transactionId}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          onClick={handlePrevPage}
          className="p-3 rounded bg-emerald-500 hover:bg-emerald-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === 0}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`p-3 rounded text-white ${
              currentPage === page
                ? "border-2 border-black bg-emerald-600 dark:border-white"
                : "bg-emerald-500 hover:bg-emerald-600"
            }`}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className="p-3 rounded bg-emerald-500 hover:bg-emerald-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === pages.length - 1 || pages.length === 0}
        >
          Next
        </button>
        <select
          value={itemsParPage}
          onChange={handleItemsParPage}
          className="ml-4 border rounded px-3 py-1 bg-white dark:bg-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
    </>
  );
};

export default EmployeePaymentHistory;
