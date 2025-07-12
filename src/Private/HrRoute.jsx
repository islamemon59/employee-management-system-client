import React from "react";
import { Navigate, useLocation } from "react-router";
import useUserRole from "../Hooks/useUserRole";
import useAuth from "../Hooks/useAuth";
import Loader from "../Shared/Loader/Loader";

const HrRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, isLoading } = useUserRole();
  const location = useLocation();
  const from = location?.pathname;

  if (loading || isLoading) return <Loader/>

  if (!user || role !== "HR") {
    return <Navigate to="/forbidden" state={from}></Navigate>;
  }
  return children;
};

export default HrRoute;
