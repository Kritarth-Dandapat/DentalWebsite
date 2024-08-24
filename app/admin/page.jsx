import Link from 'next/link';
import React from 'react';

const AdminDashboard = () => {
  return (
      <div className="flex-1 p-6 bg-blue-100">
        <h1 className="text-3xl font-semibold text-blue-900 mb-6">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Total Users</h2>
            <p className="text-gray-700 text-3xl font-bold">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">New Reports</h2>
            <p className="text-gray-700 text-3xl font-bold">56</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Appointments</h2>
            <p className="text-gray-700 text-3xl font-bold">78</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Revenue</h2>
            <p className="text-gray-700 text-3xl font-bold">$12,345</p>
          </div>
        </div>
      </div>

  );
};

export default AdminDashboard;
