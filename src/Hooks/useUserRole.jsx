import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUserRole = () => {
  const { user, loading } = useAuth();
  const email = user?.email;
  const axiosSecure = useAxiosSecure();
  const { data: userRole, isLoading } = useQuery({
    queryKey: ["userRole", email],
    enabled: !loading && !!email && !!user?.accessToken,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`user/role?email=${email}`);
      return data;
    },
  });
  return { role: userRole?.role, isLoading };
};
export default useUserRole;
