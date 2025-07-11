import React from "react";
import { MdOutlineHistory, MdOutlinePlaylistAddCheck } from "react-icons/md";
import { NavLink } from "react-router";
import { MdAssignment } from "react-icons/md";
import { FiHome, FiUsers } from "react-icons/fi";
import { FaMoneyCheckAlt, FaUsers } from "react-icons/fa";
import useUserRole from "../../Hooks/useUserRole";

const DashboardNavLinks = () => {
  const { role, isLoading } = useUserRole();

  return (
    <ul className="flex flex-1 flex-col gap-1 py-3">
      <li className="px-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive && "bg-emerald-700"
            } flex items-center gap-3 rounded p-3 text-white transition-colors hover:bg-emerald-600 hover:text-black`
          }
        >
          <FiHome className="text-xl" />
          <div className="flex w-full flex-1 flex-col items-start justify-center text-xl font-semibold gap-0 overflow-hidden truncate">
            Home
          </div>
        </NavLink>
      </li>
      <li className="px-3">
        <NavLink
          to="/dashboard/workSheet"
          className={({ isActive }) =>
            `${
              isActive && "bg-emerald-700"
            } flex items-center gap-3 rounded p-3 text-white transition-colors hover:bg-emerald-600 hover:text-black`
          }
        >
          <MdAssignment className="text-xl" />
          <div className="flex w-full flex-1 flex-col items-start justify-center text-xl font-semibold gap-0 overflow-hidden truncate">
            Work Sheet
          </div>
        </NavLink>
      </li>
      <li className="px-3">
        <NavLink
          to="/dashboard/paymentHistory"
          className={({ isActive }) =>
            `${
              isActive && "bg-emerald-700"
            } flex items-center gap-3 rounded p-3 text-white transition-colors hover:bg-emerald-600 hover:text-black`
          }
        >
          <MdOutlineHistory className="text-xl" />
          <div className="flex w-full flex-1 flex-col items-start justify-center text-xl font-semibold gap-0 overflow-hidden truncate">
            Payment History
          </div>
        </NavLink>
      </li>
      <li className="px-3">
        <NavLink
          to="/dashboard/employeeList"
          className={({ isActive }) =>
            `${
              isActive && "bg-emerald-700"
            } flex items-center gap-3 rounded p-3 text-white transition-colors hover:bg-emerald-600 hover:text-black`
          }
        >
          <FiUsers className="text-xl" />
          <div className="flex w-full flex-1 flex-col items-start justify-center text-xl font-semibold gap-0 overflow-hidden truncate">
            All Employee List
          </div>
        </NavLink>
        <NavLink
          to="/dashboard/progressList"
          className={({ isActive }) =>
            `${
              isActive && "bg-emerald-700"
            } flex items-center gap-3 rounded p-3 text-white transition-colors hover:bg-emerald-600 hover:text-black`
          }
        >
          <MdOutlinePlaylistAddCheck className="text-xl" />
          <div className="flex w-full flex-1 flex-col items-start justify-center text-xl font-semibold gap-0 overflow-hidden truncate">
            Progress List
          </div>
        </NavLink>
        <NavLink
          to="/dashboard/allEmployeeList"
          className={({ isActive }) =>
            `${
              isActive && "bg-emerald-700"
            } flex items-center gap-3 rounded p-3 text-white transition-colors hover:bg-emerald-600 hover:text-black`
          }
        >
          <FaUsers className="text-xl" />
          <div className="flex w-full flex-1 flex-col items-start justify-center text-xl font-semibold gap-0 overflow-hidden truncate">
            All Employee List
          </div>
        </NavLink>
        <NavLink
          to="/dashboard/payRoll"
          className={({ isActive }) =>
            `${
              isActive && "bg-emerald-700"
            } flex items-center gap-3 rounded p-3 text-white transition-colors hover:bg-emerald-600 hover:text-black`
          }
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
