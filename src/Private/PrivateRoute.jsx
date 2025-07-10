import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import Loader from "../Shared/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const from = location?.pathname;

  if (loading) {
    return <Loader/>
  }

  if (!user) {
    return <Navigate to="/login" state={from}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
