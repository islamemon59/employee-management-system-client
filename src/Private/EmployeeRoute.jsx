import React from "react";
import AuthHook from "../Hooks/AuthHook/AuthHook";
import Loader from "../Pages/Home/Shared/Loader/Loader";
import { Navigate, useLocation } from "react-router";
import useUserRole from "../Hooks/useUserRole";

const EmployeeRoute = ({ children }) => {
  const { user, loading } = AuthHook();
  const { role, isLoading } = useUserRole();
  const location = useLocation();
  const from = location?.pathname;

  if (loading || isLoading) {
    return <Loader></Loader>;
  }

  if (!user || role !== "Employee") {
    return <Navigate to="/forbidden" state={from}></Navigate>;
  }
  return children;
};

export default EmployeeRoute;
