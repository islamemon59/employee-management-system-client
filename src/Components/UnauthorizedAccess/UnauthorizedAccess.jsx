import React from "react";
import { Link } from "react-router";
import { FiLock } from "react-icons/fi";

const UnauthorizedAccess = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-emerald-100 p-4">
            <FiLock className="text-emerald-600" size={48} />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Unauthorized Access
        </h1>
        <p className="text-gray-600 mb-6">
          Sorry, you don’t have permission to view this page. Please check your
          role or contact the administrator.
        </p>
        <Link
          to="/"
          className="inline-block rounded bg-emerald-600 px-4 py-2 text-white font-semibold shadow hover:bg-emerald-700 transition-colors"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default UnauthorizedAccess;
