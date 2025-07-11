import React from "react";

const EmployeeDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Welcome Employee!</h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded bg-white p-6 shadow">
          <h2 className="text-gray-600">Tasks Assigned</h2>
          <p className="mt-2 text-3xl font-semibold text-emerald-600">12</p>
        </div>
        <div className="rounded bg-white p-6 shadow">
          <h2 className="text-gray-600">Pending Leave Requests</h2>
          <p className="mt-2 text-3xl font-semibold text-emerald-600">1</p>
        </div>
        <div className="rounded bg-white p-6 shadow">
          <h2 className="text-gray-600">Announcements</h2>
          <p className="mt-2 text-3xl font-semibold text-emerald-600">3</p>
        </div>
      </section>

      <section className="rounded bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Recent Notices
        </h2>
        <ul className="space-y-2">
          <li>Team meeting on Friday at 10 AM</li>
          <li>Submit monthly report by next week</li>
          <li>HR updated company policy</li>
        </ul>
      </section>
    </div>
  );
};

export default EmployeeDashboard;
