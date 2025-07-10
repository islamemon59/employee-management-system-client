import React from "react";

const EmployeeCardView = ({employees, handleMakeHr, handleFired}) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {employees.map((employee) => (
        <div className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
          {/*  <!-- Body--> */}
          <div className="p-6 h-[180px]">
            <header className="mb-4">
              <h3 className="text-xl font-medium text-slate-700">
                Name: {employee.name}
              </h3>
              <p className=" text-slate-400">
                Designation: {employee.designation}
              </p>
              <p className=" text-slate-400">Role: {employee.role}</p>
            </header>
          </div>
          {/*  <!-- Action base sized with lead icon buttons  --> */}
          <div className="flex justify-between p-4">
            <button
              onClick={() => handleMakeHr(employee._id)}
              className={`${
                employee.role === "Employee" ? "bg-emerald-500 btn" : ""
              }`}
            >
              {employee.role === "Employee" ? (
                <span className="font-semibold px-2 py-1 rounded-md">
                  Make HR
                </span>
              ) : (
                employee.role === "HR" && "✅"
              )}
            </button>
            <button
              onClick={() => handleFired(employee._id)}
              className={`${
                employee.isFire === "Fired" ? "" : "bg-red-200 btn"
              }`}
            >
              {employee.isFire === "Fired" ? (
                <span className="text-md font-bold text-red-500">Fired</span>
              ) : (
                "🔥"
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeCardView;
