import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Loader from "../../../../Shared/Loader/Loader";

const VisitorMessage = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: messages = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["visitorMessage"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("api/contact-messages");
      return data;
    },
  });

  refetch();

  if (isLoading) return <Loader />;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-500 mb-4">
        Visitor Opinions & Messages
      </h2>

      {messages && messages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 border border-slate-100"
            >
              <p className="text-slate-700 mb-2 text-sm">
                <span className="font-semibold text-slate-800">From:</span>{" "}
                {msg.email}
              </p>
              <p className="text-slate-600 text-[15px] mb-3">{msg.message}</p>
              <p className="text-xs text-slate-400 text-right">
                {new Date(msg.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-slate-500">No visitor messages found.</p>
      )}
    </div>
  );
};

export default VisitorMessage;
