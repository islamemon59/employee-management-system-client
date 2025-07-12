import React, { useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loader from "../../../../Shared/Loader/Loader";
import Swal from "sweetalert2";
import { FiGrid, FiList } from "react-icons/fi";
import EmployeeCardView from "./EmployeeCardView";
import IncreaseSalaryModal from "./IncreaseSalaryModal/IncreaseSalaryModal";
import { FaMoneyCheckAlt } from "react-icons/fa";

const AllEmployeeList = () => {
  const axiosSecure = useAxiosSecure();
  const [toggle, setToggle] = useState(false);
  const [increaseSalary, setIncreaseSalary] = useState("");
  const [updateId, setUpdateId] = useState("");
  console.log(toggle);

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

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.patch(`fired/employee/${id}`);
        refetch();
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Fired 🔥!",
            text: "Employee Fired Successfully.",
            icon: "success",
          });
        }
      }
    });
  };

  const handleSalary = (salary, id) => {
    setIncreaseSalary(salary);
    setUpdateId(id);
    console.log(salary, id);
    document.getElementById("my_modal_1").showModal();
  };

  if (isLoading) return <Loader />;

  return (
    <div className="relative space-y-6 max-w-4xl mx-auto mt-10">
      {toggle ? (
        <button
          className="absolute top-16 right-0 text-blue-600"
          onClick={() => setToggle(!toggle)}
        >
          <FiGrid size={20} />
        </button>
      ) : (
        <button
          className="absolute top-16 right-0 text-blue-600"
          onClick={() => setToggle(!toggle)}
        >
          <FiList size={20} />
        </button>
      )}

      <h1 className="text-3xl md:text-5xl font-bold text-center text-emerald-500 pb-6">
        All Employee List
      </h1>

      {toggle ? (
        <EmployeeCardView
          employees={employees}
          handleMakeHr={handleMakeHr}
          handleFired={handleFired}
        />
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-collapse rounded border-slate-300">
            <thead className="bg-gray-50 uppercase font-semibold text-gray-700">
              <tr>
                <th className="h-12 px-6 text-start border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
                  Name
                </th>
                <th className="h-12 px-6 text-start border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
                  Designation
                </th>
                <th className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
                  Make HR
                </th>
                <th className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
                  Increase Salary
                </th>
                <th className="h-12 px-6 border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
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
                      className="h-12 px-6 cursor-pointer transition duration-300 text-center border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 "
                    >
                      {employee.role === "Employee" ? (
                        <span className="font-semibold px-2 py-1 bg-emerald-500 rounded-md">
                          Accept
                        </span>
                      ) : (
                        employee.role === "HR" && "✅"
                      )}
                    </td>
                    <td
                      onClick={() =>
                        handleSalary(employee.salary, employee._id)
                      }
                      className="h-12 px-6 flex justify-center items-center gap-1 cursor-pointer transition duration-300 text-center border-t border-l first:border-l-0 text-emerald-500 border-slate-200 stroke-slate-500 "
                    >
                      <FaMoneyCheckAlt size={18} />
                      Increase Salary
                    </td>
                    <td
                      onClick={() => handleFired(employee._id)}
                      className="h-12 px-6 text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 cursor-pointer"
                    >
                      {employee.isFire === "Fired" ? (
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
      )}
      <IncreaseSalaryModal
        increaseSalary={increaseSalary}
        updateId={updateId}
        refetch={refetch}
      />
    </div>
  );
};

export default AllEmployeeList;
