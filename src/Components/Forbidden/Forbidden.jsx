import React from "react";
import { Link } from "react-router";

const Forbidden = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-5xl font-extrabold text-red-500">403</h1>
      <h2 className="text-5xl font-extrabold text-red-500">Forbidden</h2>
      <Link to="/" className="btn bg-emerald-500 hover:bg-emerald-600 text-black">
        Back To Home
      </Link>
    </div>
  );
};

export default Forbidden;
