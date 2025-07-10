import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_URL,
});

const useAxiosSecure = () => {
  const { user } = useAuth();
  console.log(user?.accessToken);
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${user?.accessToken}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response) {
          const status = error.response.status;

          if (status === 401) {
            // navigate("/login")
            console.error("Unauthorized! Token might be invalid or expired.");
          } else if (status === 403) {
            navigate("/forbidden");
            console.error("Forbidden! You don't have permission.");
          } else if (status >= 500) {
            console.error("Server error! Please try again later.");
          }
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, user]);

  return axiosSecure;
};

export default useAxiosSecure;
