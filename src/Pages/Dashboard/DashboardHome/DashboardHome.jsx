import React from "react";
import useUserRole from "../../../Hooks/useUserRole";
import EmployeeDashboard from "./EmployeeDashboard/EmployeeDashboard";
import HrDashboard from "./HrDashboard/HrDashboard";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import UnauthorizedAccess from "../../../Components/UnauthorizedAccess/UnauthorizedAccess";

const DashboardHome = () => {
  const { role } = useUserRole();

  if (role === "Employee") return <EmployeeDashboard />;
  if (role === "HR") return <HrDashboard />;
  if (role === "Admin") return <AdminDashboard />;

  return <UnauthorizedAccess />;
};

export default DashboardHome;
