import React from "react";

const EmployeeCardView = ({
  employees,
  handleMakeHr,
  handleFired,
  handleSalary,
}) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
      {employees.map((employee) => (
        <div
          key={employee._id}
          className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg dark:shadow-black/40 hover:shadow-xl dark:hover:shadow-black/60 transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
        >
          {/* Top image */}
          <div className="relative w-full h-40 overflow-hidden">
            <img
              src={employee.photo}
              alt={employee.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 truncate">
              {employee.name}
            </h3>
            <p className="text-sm font-medium mt-1 text-emerald-600 dark:text-emerald-400">
              {employee.designation}
            </p>
            <p className="text-xs mt-0.5 text-slate-500 dark:text-slate-400">
              Role: {employee.role}
            </p>
            <p className="text-xs mt-0.5 text-slate-500 dark:text-slate-400">
              Salary: ${employee.salary}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex justify-center gap-2 flex-wrap border-t border-slate-100 dark:border-slate-700 p-3">
            <button
              onClick={() => handleMakeHr(employee._id)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                employee.role === "Employee"
                  ? "bg-emerald-500 text-white hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700"
                  : "bg-gray-200 text-gray-500 cursor-default dark:bg-gray-700 dark:text-gray-400"
              }`}
              disabled={employee.role !== "Employee"}
            >
              {employee.role === "Employee" ? "Make HR" : "✅ HR"}
            </button>

            <button
              onClick={() => handleFired(employee._id)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                employee.isFire === "Fired"
                  ? "bg-red-100 text-red-500 cursor-default dark:bg-red-900 dark:text-red-600"
                  : "bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
              }`}
              disabled={employee.isFire === "Fired"}
            >
              {employee.isFire === "Fired" ? "Fired" : "🔥 Fire"}
            </button>

            <button
              onClick={() => handleSalary(employee.salary, employee._id)}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
            >
              💰 Increase Salary
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeCardView;
