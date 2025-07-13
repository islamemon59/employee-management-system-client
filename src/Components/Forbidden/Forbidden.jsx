import React from "react";
import { Link } from "react-router";

const Forbidden = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col bg-white dark:bg-gray-900">
      <h1 className="text-5xl font-extrabold text-red-500 dark:text-red-400">403</h1>
      <h2 className="text-5xl font-extrabold text-red-500 dark:text-red-400">Forbidden</h2>
      <Link
        to="/"
        className="btn bg-emerald-500 hover:bg-emerald-600 text-black dark:text-white"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default Forbidden;
