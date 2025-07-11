import React from 'react';

const HrDashboard = () => {
    return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Welcome HR Team!</h1>

      {/* HR-specific metrics */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded bg-white p-6 shadow">
          <h2 className="text-gray-600">New Applicants</h2>
          <p className="mt-2 text-3xl font-semibold text-emerald-600">24</p>
        </div>
        <div className="rounded bg-white p-6 shadow">
          <h2 className="text-gray-600">Pending Interviews</h2>
          <p className="mt-2 text-3xl font-semibold text-emerald-600">5</p>
        </div>
        <div className="rounded bg-white p-6 shadow">
          <h2 className="text-gray-600">Leave Requests</h2>
          <p className="mt-2 text-3xl font-semibold text-emerald-600">7</p>
        </div>
        <div className="rounded bg-white p-6 shadow">
          <h2 className="text-gray-600">Active Employees</h2>
          <p className="mt-2 text-3xl font-semibold text-emerald-600">120</p>
        </div>
      </section>

      {/* HR recent activity */}
      <section className="rounded bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Recent HR Activities</h2>
        <ul className="space-y-2">
          <li>Conducted interviews for 3 candidates</li>
          <li>Approved 5 leave requests</li>
          <li>Updated employee contracts</li>
        </ul>
      </section>
    </div>
    );
};

export default HrDashboard;