import React from "react";

const Forbidden = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-5xl font-extrabold text-red-500">403</h1>
      <h2 className="text-5xl font-extrabold text-red-500">Forbidden</h2>
      <button className="btn bg-emerald-500 hover:bg-emerald-600 text-black">
        Back To Home
      </button>
    </div>
  );
};

export default Forbidden;
