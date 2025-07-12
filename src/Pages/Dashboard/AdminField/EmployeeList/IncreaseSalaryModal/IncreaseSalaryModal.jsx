import React, { useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";

const IncreaseSalaryModal = ({ increaseSalary, updateId, refetch }) => {
  const [newSalary, setNewSalary] = useState("");
  const axisSecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const salaryNumber = Number(newSalary);
    if (salaryNumber > Number(increaseSalary)) {
      const { data } = await axisSecure.patch(
        `increase/employee/salary/${updateId}`,
        { newSalary }
      );
      console.log(data);
      toast.success("Salary Updated");
      refetch();
      document.getElementById("my_modal_1").close();
      setNewSalary("");
    } else {
      toast.error("New salary must be higher than current salary!");
    }
  };

  const handleCloseModal = () => {
    document.getElementById("my_modal_1").close();
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
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
              className="input input-bordered w-full"
              required
            />

            <div className="modal-action flex justify-end gap-2">
              <button type="submit" className="btn btn-success">
                Update
              </button>

              <button type="button" onClick={handleCloseModal} className="btn">
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default IncreaseSalaryModal;
