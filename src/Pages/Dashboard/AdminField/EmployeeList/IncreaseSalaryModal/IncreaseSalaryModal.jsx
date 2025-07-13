import React, { useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";

const IncreaseSalaryModal = ({ increaseSalary, updateId, refetch }) => {
  const [newSalary, setNewSalary] = useState("");
  const axiosSecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const salaryNumber = Number(newSalary);
    if (salaryNumber > Number(increaseSalary)) {
      try {
        const { data } = await axiosSecure.patch(
          `increase/employee/salary/${updateId}`,
          { newSalary: salaryNumber }
        );
        console.log(data);
        toast.success("Salary Updated");
        refetch();
        document.getElementById("my_modal_1").close();
        setNewSalary("");
      } catch (error) {
        toast.error("Failed to update salary. Try again!");
        console.error(error);
      }
    } else {
      toast.error("New salary must be higher than current salary!");
    }
  };

  const handleCloseModal = () => {
    document.getElementById("my_modal_1").close();
  };

  return (
    <dialog
      id="my_modal_1"
      className="modal bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="modal-box bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <h3 className="font-bold text-lg">Increase Salary</h3>
        <p className="py-2">
          Current Salary:{" "}
          <span className="font-semibold">${increaseSalary}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="number"
            placeholder="Enter new salary"
            value={newSalary}
            onChange={(e) => setNewSalary(e.target.value)}
            className="input input-bordered w-full
              bg-white dark:bg-gray-700
              border-gray-300 dark:border-gray-600
              text-gray-900 dark:text-gray-100
              placeholder-gray-400 dark:placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />

          <div className="modal-action flex justify-end gap-2">
            <button
              type="submit"
              className="btn btn-success bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Update
            </button>

            <button
              type="button"
              onClick={handleCloseModal}
              className="btn bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default IncreaseSalaryModal;
