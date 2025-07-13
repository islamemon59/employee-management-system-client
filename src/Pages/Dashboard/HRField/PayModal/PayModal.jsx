import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const PayModal = ({ employeeData }) => {
  const [selectMonth, setSelectMonth] = useState("July");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [salary, setSalary] = useState("");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (employeeData) {
      setSalary(employeeData.salary || "");
      setSelectMonth("July"); // Reset to default or could set dynamically
      setSelectedYear(new Date().getFullYear());
    }
  }, [employeeData]);

  // Prepare years array for dropdown dynamically from 2022 to current year
  const years = [];
  for (let i = 2022; i <= new Date().getFullYear(); i++) {
    years.push(i);
  }

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

  const handleRequest = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const requestData = Object.fromEntries(formData.entries());

    // Add employee info & status
    requestData.name = employeeData?.name;
    requestData.id = employeeData?._id;
    requestData.email = employeeData?.email;
    requestData.status = "unPaid";

    try {
      const { data } = await axiosSecure.post("employee/payment/request", requestData);
      toast.success("Payment Request Sent");
      document.getElementById("my_modal_1").close();
      console.log(data);
    } catch (error) {
      toast.error("Failed to send payment request");
      console.error(error);
    }
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box max-w-xl md:h-[200px] h-[250px] relative">
        <form onSubmit={handleRequest}>
          <div className="flex gap-2 flex-col md:flex-row">
            <input
              name="salary"
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="border md:w-[170px] rounded px-2 py-1"
            />
            <select
              name="month"
              value={selectMonth}
              onChange={(e) => setSelectMonth(e.target.value)}
              className="border md:w-[170px] rounded px-2 py-1"
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select
              name="year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border md:w-[170px] rounded px-2 py-1"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn bg-emerald-500 hover:bg-emerald-600 text-black absolute bottom-4 right-4"
          >
            Pay Request
          </button>
        </form>

        <div className="modal-action mt-4 absolute bottom-4 left-4">
          <form method="dialog">
            <button className="btn bg-gray-300 hover:bg-gray-400 text-black">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default PayModal;
