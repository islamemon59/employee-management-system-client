import React from "react";
import {
  MdOutlineHistory,
  MdOutlineMarkChatRead,
  MdOutlinePlaylistAddCheck,
} from "react-icons/md";
import { NavLink } from "react-router";
import { MdAssignment } from "react-icons/md";
import { FiHome, FiUsers } from "react-icons/fi";
import { FaMoneyCheckAlt, FaUsers } from "react-icons/fa";
import useUserRole from "../../Hooks/useUserRole";

const DashboardNavLinks = () => {
  const { role, isLoading } = useUserRole();

  const linkClasses = ({ isActive }) =>
    `${
      isActive ? "bg-emerald-700 dark:bg-emerald-800" : ""
    } flex items-center gap-3 rounded p-3 text-white transition-colors 
    hover:bg-emerald-600 hover:text-black 
    dark:hover:bg-emerald-500 dark:hover:text-white`;

  return (
    <ul className="flex flex-1 flex-col gap-1 py-3">
      <li className="px-3">
        <NavLink to="/" className={linkClasses}>
          <FiHome className="text-xl" />
          <div className="flex w-full flex-1 flex-col items-start justify-center text-xl font-semibold gap-0 overflow-hidden truncate">
            Home
          </div>
        </NavLink>
      </li>
      {role === "Employee" && !isLoading && (
        <>
          <li className="px-3">
            <NavLink to="/dashboard/workSheet" className={linkClasses}>
              <MdAssignment className="text-xl" />
              <div className="flex w-full flex-1 flex-col items-start justify-center text-xl font-semibold gap-0 overflow-hidden truncate">
                Work Sheet
              </div>
            </NavLink>
          </li>
          <li className="px-3">
            <NavLink to="/dashboard/paymentHistory" className={linkClasses}>
              <MdOutlineHistory className="text-xl" />
              <div className="flex w-full flex-1 flex-col items-start justify-center text-xl font-semibold gap-0 overflow-hidden truncate">
                Payment History
              </div>
            </NavLink>
          </li>
        </>
      )}
      {role === "HR" && !isLoading && (
        <>
          <li className="px-3">
            <NavLink to="/dashboard/employeeList" className={linkClasses}>
              <FiUsers className="text-xl" />
              <div className="flex w-full flex-1 flex-col items-start justify-center text-xl font-semibold gap-0 overflow-hidden truncate">
                All Employee List
              </div>
            </NavLink>
          </li>
          <li className="px-3">
            <NavLink to="/dashboard/progressList" className={linkClasses}>
              <MdOutlinePlaylistAddCheck className="text-xl" />
              <div className="flex w-full flex-1 flex-col items-start justify-center text-xl font-semibold gap-0 overflow-hidden truncate">
                Progress List
              </div>
            </NavLink>
          </li>
        </>
      )}
      {role === "Admin" && !isLoading && (
        <>
          <li className="px-3">
            <NavLink to="/dashboard/allEmployeeList" className={linkClasses}>
              <FaUsers className="text-xl" />
              <div className="flex w-full flex-1 flex-col items-start justify-center text-xl font-semibold gap-0 overflow-hidden truncate">
                All Employee List
              </div>
            </NavLink>
          </li>
          <li className="px-3">
            <NavLink to="/dashboard/payRoll" className={linkClasses}>
              <FaMoneyCheckAlt className="text-xl" />
              <div className="flex w-full flex-1 flex-col items-start justify-center text-xl font-semibold gap-0 overflow-hidden truncate">
                Pay Roll
              </div>
            </NavLink>
          </li>
          <li className="px-3">
            <NavLink to="/dashboard/visitor" className={linkClasses}>
              <MdOutlineMarkChatRead className="text-xl" />
              <div className="flex w-full flex-1 flex-col items-start justify-center text-xl font-semibold gap-0 overflow-hidden truncate">
                Visitor Message
              </div>
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default DashboardNavLinks;
