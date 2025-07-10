import React from "react";
import { MdDashboard, MdOutlinePlaylistAddCheck } from "react-icons/md";
import { NavLink } from "react-router";
import { MdAssignment } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaMoneyCheckAlt, FaUsers } from "react-icons/fa";
import useUserRole from "../../Hooks/useUserRole";

const DashboardNavLinks = () => {

  const {role, isLoading} = useUserRole()
  console.log(role);

  return (
    <ul className="flex flex-1 flex-col gap-1 py-3">
      <li className="px-3">
        <NavLink
          to="/dashboard/workSheet"
          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-500 focus:bg-teal-50"
        >
          <MdAssignment className="text-xl" />
          <div className="flex w-full flex-1 flex-col items-start justify-center text-xl font-semibold gap-0 overflow-hidden truncate">
            Work Sheet
          </div>
        </NavLink>
      </li>
      <li className="px-3">
        <NavLink
          to="/dashboard/employeeList"
          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-500 focus:bg-teal-50"
        >
          <FiUsers className="text-xl" />
          <div className="flex w-full flex-1 flex-col items-start justify-center text-xl font-semibold gap-0 overflow-hidden truncate">
            Employee List
          </div>
        </NavLink>
        <NavLink
          to="/dashboard/progressList"
          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-500 focus:bg-teal-50"
        >
          <MdOutlinePlaylistAddCheck className="text-xl" />
          <div className="flex w-full flex-1 flex-col items-start justify-center text-xl font-semibold gap-0 overflow-hidden truncate">
            Progress List
          </div>
        </NavLink>
        <NavLink
          to="/dashboard/allEmployeeList"
          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-500 focus:bg-teal-50"
        >
          <FaUsers className="text-xl" />
          <div className="flex w-full flex-1 flex-col items-start justify-center text-xl font-semibold gap-0 overflow-hidden truncate">
            All Employee List
          </div>
        </NavLink>
        <NavLink
          to="/dashboard/payRoll"
          className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-500 focus:bg-teal-50"
        >
          <FaMoneyCheckAlt className="text-xl" />
          <div className="flex w-full flex-1 flex-col items-start justify-center text-xl font-semibold gap-0 overflow-hidden truncate">
            Pay Roll
          </div>
        </NavLink>
      </li>
    </ul>
  );
};

export default DashboardNavLinks;
