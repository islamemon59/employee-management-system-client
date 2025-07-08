import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const WorkSheet = () => {
  const { register, handleSubmit, reset } = useForm();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [workData, setWorkData] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const newEntry = {
      ...data,
      name: user?.displayName,
      email: user?.email,
      date: selectedDate.toDateString(),
    };

    try {
      const {data} = await axiosSecure.post("employee-work-data", newEntry);
      console.log(data);
      toast.success("Data added successfully");
    } catch (error) {
      console.log(error);
    }

    setWorkData([newEntry, ...workData]);
    reset();
    setSelectedDate(new Date());
  };

  const {data} = u

  const handleEdit = (item) => {
    console.log(item);
  };

  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <div className="p-4 space-y-6 max-w-3xl mx-auto">
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row items-center mx-auto gap-2"
      >
        <select
          {...register("task", { required: true })}
          className="border rounded px-2 py-1"
        >
          <option value="">Select Task</option>
          <option value="Sales">Sales</option>
          <option value="Support">Support</option>
          <option value="Content">Content</option>
          <option value="Paper-work">Paper-work</option>
        </select>

        <input
          type="number"
          placeholder="Hours Worked"
          {...register("hours", { required: true })}
          className="border rounded px-2 py-1"
        />

        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="border rounded px-2 py-1"
          dateFormat="yyyy-MM-dd"
        />

        <button
          type="submit"
          className="bg-emerald-500 text-white px-4 py-1 rounded"
        >
          Add
        </button>
      </form>

      <div className="overflow-x-auto rounded shadow">
        <table className="min-w-full text-left text-black">
          <thead className="bg-gray-50 uppercase font-semibold text-gray-700">
            <tr>
              <th className="px-4 py-2">Task</th>
              <th className="px-4 py-2">Hours</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {workData.length === 0 ? (
              <tr>
                <td colSpan="3" className="px-4 py-3 text-center text-gray-400">
                  No data found.
                </td>
              </tr>
            ) : (
              workData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{item.task}</td>
                  <td className="px-4 py-2">{item.hours}</td>
                  <td className="px-4 py-2">{item.date}</td>
                  <td className="px-4 py-2 flex items-center gap-4">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FiEdit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiTrash2 size={20} />
                    </button>
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

export default WorkSheet;
