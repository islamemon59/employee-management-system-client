import React from "react";
import useUserRole from "../../../Hooks/useUserRole";
import EmployeeDashboard from "./EmployeeDashboard/EmployeeDashboard";
import HrDashboard from "./HrDashboard/HrDashboard";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import UnauthorizedAccess from "../../../Components/UnauthorizedAccess/UnauthorizedAccess";
import Loader from "../../../Shared/Loader/Loader";
import useAuth from "../../../Hooks/useAuth";

const DashboardHome = () => {
  const {loading} = useAuth()
  const { role, isLoading } = useUserRole();
  if (isLoading || loading || !role) return <Loader />;
  console.log(role);
  if (role === "Employee") return <EmployeeDashboard />;
  if (role === "HR") return <HrDashboard />;
  if (role === "Admin") return <AdminDashboard />;

  return <UnauthorizedAccess />;
};

export default DashboardHome;
