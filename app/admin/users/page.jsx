"use client";
import React, { useState } from 'react';

const UsersPage = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Patient', mobile: '1234567890', address: '123 Main St', billingAddress: '456 Elm St', cardDetails: '**** **** **** 1234' },
    { id: 2, name: 'Bob Brown', email: 'bob.brown@example.com', role: 'Patient', mobile: '0987654321', address: '789 Oak St', billingAddress: '101 Pine St', cardDetails: '**** **** **** 5678' },
  ]);

  const [doctors, setDoctors] = useState([
    { id: 3, name: 'Dr. John Doe', email: 'john.doe@example.com', role: 'Doctor', mobile: '2345678901', address: '234 Maple St', billingAddress: '567 Cedar St', cardDetails: '**** **** **** 9101' },
    { id: 4, name: 'Dr. Jane Smith', email: 'jane.smith@example.com', role: 'Doctor', mobile: '3456789012', address: '345 Birch St', billingAddress: '678 Spruce St', cardDetails: '**** **** **** 1123' },
  ]);

  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleEditUser = (user) => {
    setEditingUser(user);
    setShowForm(true);
  };

  const handleAddUser = (role) => {
    setEditingUser({ id: null, name: '', email: '', role, mobile: '', address: '', billingAddress: '', cardDetails: '' });
    setShowForm(true);
  };

  const handleSaveUser = () => {
    if (editingUser.id) {
      if (editingUser.role === 'Patient') {
        setPatients(patients.map((p) => (p.id === editingUser.id ? editingUser : p)));
      } else if (editingUser.role === 'Doctor') {
        setDoctors(doctors.map((d) => (d.id === editingUser.id ? editingUser : d)));
      }
    } else {
      const newUser = { ...editingUser, id: Math.floor(Math.random() * 1000) + 1 };
      if (editingUser.role === 'Patient') {
        setPatients([...patients, newUser]);
      } else if (editingUser.role === 'Doctor') {
        setDoctors([...doctors, newUser]);
      }
    }
    setShowForm(false);
    setEditingUser(null);
  };

  const handleDeleteUser = (id, role) => {
    if (role === 'Patient') {
      setPatients(patients.filter((p) => p.id !== id));
    } else if (role === 'Doctor') {
      setDoctors(doctors.filter((d) => d.id !== id));
    }
  };

  return (
    <div className="flex-1 p-6 bg-blue-100 overflow-auto">
      <h1 className="text-3xl font-semibold text-blue-900 mb-6">Users Management</h1>

      {/* Patients Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Patients</h2>
        <button 
          onClick={() => handleAddUser('Patient')}
          className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Add Patient
        </button>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">ID</th>
              <th className="py-2 px-4 border-b border-gray-200">Name</th>
              <th className="py-2 px-4 border-b border-gray-200">Email</th>
              <th className="py-2 px-4 border-b border-gray-200">Mobile</th>
              <th className="py-2 px-4 border-b border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b border-gray-200">{user.id}</td>
                <td className="py-2 px-4 border-b border-gray-200">{user.name}</td>
                <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
                <td className="py-2 px-4 border-b border-gray-200">{user.mobile}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <button
                    onClick={() => handleEditUser(user)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id, user.role)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Doctors Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Doctors</h2>
        <button 
          onClick={() => handleAddUser('Doctor')}
          className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Add Doctor
        </button>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">ID</th>
              <th className="py-2 px-4 border-b border-gray-200">Name</th>
              <th className="py-2 px-4 border-b border-gray-200">Email</th>
              <th className="py-2 px-4 border-b border-gray-200">Mobile</th>
              <th className="py-2 px-4 border-b border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b border-gray-200">{user.id}</td>
                <td className="py-2 px-4 border-b border-gray-200">{user.name}</td>
                <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
                <td className="py-2 px-4 border-b border-gray-200">{user.mobile}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <button
                    onClick={() => handleEditUser(user)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id, user.role)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Admin Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Admins</h2>
        <button 
          onClick={() => handleAddUser('Admin')}
          className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Add Admin
        </button>
        {/* Similar to Patients and Doctors */}
      </div>

      {/* Edit/Add User Form */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">{editingUser.id ? 'Edit User' : 'Add User'}</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={editingUser.name}
                onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={editingUser.email}
                onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Mobile</label>
              <input
                type="text"
                value={editingUser.mobile}
                onChange={(e) => setEditingUser({ ...editingUser, mobile: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Address</label>
              <input
                type="text"
                value={editingUser.address}
                onChange={(e) => setEditingUser({ ...editingUser, address: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Billing Address</label>
              <input
                type="text"
                value={editingUser.billingAddress}
                onChange={(e) => setEditingUser({ ...editingUser, billingAddress: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Card Details</label>
              <input
                type="text"
                value={editingUser.cardDetails}
                onChange={(e) => setEditingUser({ ...editingUser, cardDetails: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingUser(null);
                }}
                className="mr-4 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveUser}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
