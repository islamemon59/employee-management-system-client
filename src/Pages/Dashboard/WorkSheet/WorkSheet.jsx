import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Shared/Loader/Loader";

const WorkSheet = () => {
  const { register, handleSubmit, reset } = useForm();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const newEntry = {
      ...data,
      name: user?.displayName,
      email: user?.email,
      date: selectedDate.toDateString(),
    };

    try {
      const { data } = await axiosSecure.post("employee-work-data", newEntry);
      console.log(data);
      toast.success("Data added successfully");
    } catch (error) {
      console.log(error);
    }
    reset();
    setSelectedDate(new Date());
  };

  const {
    data: workData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `employee-work-data?email=${user?.email}`
      );
      return res.data;
    },
  });

  console.log(workData);
  console.log(user?.email);

  const handleEdit = (item) => {
    console.log(item);
  };

  const handleDelete = async (id) => {
    console.log(id);
    const {data} = await axiosSecure.delete(`employee-work-data/${id}`)
    refetch()
    console.log(data);
    toast.success("Deleted Successfully")
  };

  if (isLoading || loading) return <Loader />;

  refetch();

  return (
    <div className="p-4 space-y-6 max-w-7xl mx-auto">
      {/* Form */}
      <div className="w-full mx-auto flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:flex-row items-center gap-2"
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
      </div>

      <div className="overflow-x-auto rounded shadow">
        <table className="min-w-full text-left text-black border border-collapse rounded sm:border-separate border-slate-200">
          <thead className="bg-gray-50 uppercase font-semibold text-gray-700">
            <tr>
              <th className="px-4 py-2 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
                Task
              </th>
              <th className="px-4 py-2 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
                Hours
              </th>
              <th className="px-4 py-2 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
                Date
              </th>
              <th className="px-4 py-2 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {workData.length === 0 ? (
              <tr>
                <td colSpan="4" className="px-4 py-3 text-center text-gray-400">
                  No data found.
                </td>
              </tr>
            ) : (
              workData.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                    {item.task}
                  </td>
                  <td className="px-4 py-2 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                    {item.hours} Hours
                  </td>
                  <td className="px-4 py-2 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                    {item.date}
                  </td>
                  <td className="px-4 py-2 flex justify-around items-center gap-4 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FiEdit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
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
