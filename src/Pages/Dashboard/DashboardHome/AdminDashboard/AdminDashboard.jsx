import React from 'react';

const AdminDashboard = () => {
    return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Welcome Admin!</h1>

      {/* Admin key stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded bg-white p-6 shadow">
          <h2 className="text-gray-600">Total Employees</h2>
          <p className="mt-2 text-3xl font-semibold text-emerald-600">130</p>
        </div>
        <div className="rounded bg-white p-6 shadow">
          <h2 className="text-gray-600">Active Projects</h2>
          <p className="mt-2 text-3xl font-semibold text-emerald-600">12</p>
        </div>
        <div className="rounded bg-white p-6 shadow">
          <h2 className="text-gray-600">System Alerts</h2>
          <p className="mt-2 text-3xl font-semibold text-emerald-600">2</p>
        </div>
        <div className="rounded bg-white p-6 shadow">
          <h2 className="text-gray-600">Pending Approvals</h2>
          <p className="mt-2 text-3xl font-semibold text-emerald-600">4</p>
        </div>
      </section>

      {/* Admin logs */}
      <section className="rounded bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Admin Logs</h2>
        <ul className="space-y-2">
          <li>User John Doe updated settings</li>
          <li>Backup completed successfully</li>
          <li>New user account created</li>
        </ul>
      </section>
    </div>
    );
};

export default AdminDashboard;