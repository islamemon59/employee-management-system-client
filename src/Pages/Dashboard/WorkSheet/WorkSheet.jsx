import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Shared/Loader/Loader";
import useTitle from "../../../Hooks/useTitle";

const WorkSheet = () => {
  useTitle("Work Sheet - StaffHub")
  const [updateItem, setUpdateItem] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [name, setName] = useState(""); // hours
  const [editDate, setEditDate] = useState(new Date()); // separate state for edit date

  // When updateItem changes, set name & date
  useEffect(() => {
    if (updateItem) {
      setName(updateItem.hours || "");
      setEditDate(updateItem.date ? new Date(updateItem.date) : new Date());
    }
  }, [updateItem]);

  // POST new data
  const onSubmit = async (data) => {
    const newEntry = {
      ...data,
      name: user?.displayName,
      email: user?.email,
      date: selectedDate.toDateString(),
    };

    try {
      const res = await axiosSecure.post("employee-work-data", newEntry);
      console.log(res.data);
      toast.success("Data added successfully");
      refetch();
    } catch (error) {
      console.error(error);
      toast.error("Failed to add data");
    }
    reset();
    setSelectedDate(new Date());
  };

  // GET data
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

  // Handle edit click
  const handleEdit = (item) => {
    setUpdateItem(item);
    setEditDate(new Date(item.date));
    document.getElementById("my_modal_1").showModal();
  };

  // PUT update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        name: user?.displayName,
        email: user?.email,
        task: updateItem.task,
        hours: name,
        date: editDate.toDateString(),
      };
      console.log(updatedData);
      const res = await axiosSecure.put(
        `employee-work-data/${updateItem._id}`,
        updatedData
      );
      console.log(res.data);
      toast.success("Updated successfully!");
      refetch();
      document.getElementById("my_modal_1").close();
    } catch (error) {
      console.error(error);
      toast.error("Update failed");
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`employee-work-data/${id}`);
      toast.success("Deleted successfully");
      refetch();
    } catch (error) {
      console.error(error);
      toast.error("Delete failed");
    }
  };

  if (isLoading || loading) return <Loader />;

  return (
    <div className="space-y-6 max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-emerald-500 dark:text-emerald-400 pb-6">
        Daily Work Sheet
      </h1>
      {/* Form */}
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:flex-row items-center gap-2 w-full"
        >
          <select
            {...register("task", { required: true })}
            className="border rounded px-2 py-1 w-full bg-white dark:bg-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600"
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
            className="border rounded px-2 py-1 w-full bg-white dark:bg-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600"
          />

          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="border rounded px-2 py-1 w-full bg-white dark:bg-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600"
            dateFormat="yyyy-MM-dd"
          />

          <button
            type="submit"
            className="bg-emerald-500 text-white px-4 py-1 rounded hover:bg-emerald-600 transition"
          >
            Add
          </button>
        </form>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded shadow">
        <table className="min-w-full text-left text-black border border-collapse rounded sm:border-separate border-slate-200 dark:border-gray-700 dark:text-gray-300 dark:bg-gray-900">
          <thead className="bg-gray-50 uppercase font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-4 py-2 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                Task
              </th>
              <th className="px-4 py-2 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                Hours
              </th>
              <th className="px-4 py-2 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                Date
              </th>
              <th className="px-4 py-2 text-center border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {workData.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="px-4 py-3 text-center text-gray-400 dark:text-gray-500"
                >
                  No data found.
                </td>
              </tr>
            ) : (
              workData.map((item) => (
                <tr
                  key={item._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <td className="px-4 py-2 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 dark:border-gray-600 dark:stroke-gray-400 dark:text-gray-300">
                    {item.task}
                  </td>
                  <td className="px-4 py-2 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 dark:border-gray-600 dark:stroke-gray-400 dark:text-gray-300">
                    {item.hours} Hours
                  </td>
                  <td className="px-4 py-2 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 dark:border-gray-600 dark:stroke-gray-400 dark:text-gray-300">
                    {item.date}
                  </td>
                  <td className="px-4 py-2 transition duration-300 flex justify-around items-center gap-3 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 dark:border-gray-600 dark:stroke-gray-400 dark:text-gray-300">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
                      aria-label="Edit"
                    >
                      <FiEdit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600"
                      aria-label="Delete"
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

      {/* Modal */}
      <dialog
        id="my_modal_1"
        className="modal bg-white dark:bg-gray-900 text-black dark:text-gray-300"
      >
        <div className="modal-box max-w-xl md:h-[200px] h-[250px] relative">
          <form onSubmit={handleUpdate}>
            <div className="flex gap-2 flex-col md:flex-row">
              <select
                name="task"
                value={updateItem.task || ""}
                onChange={(e) =>
                  setUpdateItem({ ...updateItem, task: e.target.value })
                }
                className="border md:w-[170px] rounded px-2 py-1 bg-white dark:bg-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600"
              >
                <option value="">Select Task</option>
                <option value="Sales">Sales</option>
                <option value="Support">Support</option>
                <option value="Content">Content</option>
                <option value="Paper-work">Paper-work</option>
              </select>

              <input
                name="hours"
                value={name}
                type="number"
                onChange={(e) => setName(e.target.value)}
                placeholder="Hours Worked"
                className="border md:w-[170px] rounded px-2 py-1 bg-white dark:bg-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600"
              />

              <DatePicker
                selected={editDate}
                onChange={(date) => setEditDate(date)}
                className="border md:w-[170px] w-full rounded px-2 py-1 bg-white dark:bg-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                dateFormat="yyyy-MM-dd"
              />
            </div>

            <button
              type="submit"
              className="btn bg-emerald-500 hover:bg-emerald-600 text-black dark:text-white absolute bottom-4 right-4"
            >
              Update
            </button>
          </form>
          <div className="modal-action mt-4 absolute bottom-4 left-4">
            <form method="dialog">
              <button className="btn bg-gray-300 hover:bg-gray-400 text-black dark:text-gray-900 dark:bg-gray-300 dark:hover:bg-gray-400">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default WorkSheet;
