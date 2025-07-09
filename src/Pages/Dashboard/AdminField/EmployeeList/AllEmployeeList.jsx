import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loader from "../../../../Shared/Loader/Loader";

const AllEmployeeList = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: employees = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["status"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `all/verified/employee?status=${"verified"}`
      );
      return data;
    },
  });

  const handleMakeHr = async (id) => {
    console.log(id);
    const { data } = await axiosSecure.patch(`update/employee/role/${id}`);
    refetch();
    toast.success("Successfully Updated");
    console.log(data);
  };
  const handleFired = async (id) => {
    console.log(id);
    const { data } = await axiosSecure.patch(`fired/employee/${id}`);
    refetch();
    toast.success("Employee Fired");
    console.log(data);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-collapse rounded border-slate-300">
        <thead className="bg-slate-100">
          <tr>
            <th className="h-12 px-6 font-medium text-start border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
              Name
            </th>
            <th className="h-12 px-6 font-medium text-start border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
              Designation
            </th>
            <th className="h-12 px-6 font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
              Make HR
            </th>
            <th className="h-12 px-6 font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
              Fire
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center p-4 text-gray-400">
                No data found
              </td>
            </tr>
          ) : (
            employees.map((employee) => (
              <tr key={employee._id} className="hover:bg-gray-50">
                <td className="h-12 px-6 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {employee.name}
                </td>
                <td className="h-12 px-6 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {employee.designation}
                </td>
                <td
                  onClick={() => handleMakeHr(employee._id)}
                  className="h-12 px-6 cursor-pointer transition duration-300 text-center border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                >
                  {employee.role === "Employee"
                    ? "Make HR"
                    : employee.role === "HR" && "✅"}
                </td>
                <td
                  onClick={() => handleFired(employee._id)}
                  className="h-12 px-6 text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                >
                  {employee.isFire === "fire" ? (
                    <span className="text-md font-bold text-red-500">
                      Fired
                    </span>
                  ) : (
                    "🔥"
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllEmployeeList;
