import React from "react";

const EmployeeCardView = ({employees, handleMakeHr, handleFired}) => {
  return (
<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
  {employees.map((employee) => (
    <div
      key={employee._id}
      className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border"
    >
      {/* Top image section */}
      <div className="relative w-full h-40 overflow-hidden">
        <img
          src={employee.photo}
          alt={employee.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info section */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-slate-800 truncate">
          {employee.name}
        </h3>
        <p className="text-sm text-emerald-600 font-medium mt-1">
          {employee.designation}
        </p>
        <p className="text-xs text-slate-500 mt-0.5">
          Role: {employee.role}
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex justify-center gap-3 border-t border-slate-100 p-3">
        <button
          onClick={() => handleMakeHr(employee._id)}
          className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
            employee.role === "Employee"
              ? "bg-emerald-500 text-white hover:bg-emerald-600"
              : "bg-gray-200 text-gray-500 cursor-default"
          }`}
          disabled={employee.role !== "Employee"}
        >
          {employee.role === "Employee" ? "Make HR" : "✅ HR"}
        </button>

        <button
          onClick={() => handleFired(employee._id)}
          className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
            employee.isFire === "Fired"
              ? "bg-red-100 text-red-500 cursor-default"
              : "bg-red-500 text-white hover:bg-red-600"
          }`}
          disabled={employee.isFire === "Fired"}
        >
          {employee.isFire === "Fired" ? "Fired" : "🔥 Fire"}
        </button>
      </div>
    </div>
  ))}
</div>

  );
};

export default EmployeeCardView;
