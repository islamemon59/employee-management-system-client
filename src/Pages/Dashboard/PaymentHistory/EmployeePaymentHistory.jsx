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
      console.log(data);
      setDataCount(data.document);
      setPayments(data.result);
    };
    fetchFunction();
  }, [axiosSecure, itemsParPage, currentPage, email]);

  console.log(dataCount);

  const count = dataCount;
  console.log(count);
  // const itemsPerPage = 5;
  const numberOfPages = Math.ceil(count / itemsParPage);
  console.log(numberOfPages);
  const pages = [...Array(numberOfPages).keys()];
  console.log(pages);

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
    <div className="max-w-3xl mx-auto space-y-4 mt-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center pb-6 text-emerald-500">
        Salary Payment History
      </h1>
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
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={handlePrevPage}
          className="p-3 rounded bg-emerald-500 hover:bg-emerald-600 text-white"
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={`${
              currentPage === page && "border-2 border-black"
            } p-3 rounded bg-emerald-500 hover:bg-emerald-600 text-white`}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className="p-3 rounded bg-emerald-500 hover:bg-emerald-600 text-white"
        >
          Next
        </button>
        <select value={itemsParPage} onChange={handleItemsParPage}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
    </div>
  );
};

export default EmployeePaymentHistory;
