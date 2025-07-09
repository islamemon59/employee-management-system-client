import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const EmployeeDetails = () => {
  const { id } = useParams();
  console.log(id);
  const axiosSecure = useAxiosSecure();
  const { data: employee = {}, refetch } = useQuery({
    queryKey: ["id", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`all-employee-data/${id}`);
      return data;
    },
  });

  console.log(employee);
  return <div></div>;
};

export default EmployeeDetails;
