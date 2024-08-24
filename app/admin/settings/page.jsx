"use client";

import React, { useState } from 'react';

const SettingsPage = () => {
  const [accountSettings, setAccountSettings] = useState({
    username: 'admin',
    email: 'admin@example.com',
    password: '',
    language: 'English',
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
  });

  const [appSettings, setAppSettings] = useState({
    theme: 'Light',
    dataUsage: 'Wi-Fi only',
    autoUpdate: true,
  });

  const handleAccountChange = (e) => {
    setAccountSettings({ ...accountSettings, [e.target.name]: e.target.value });
  };

  const handleNotificationChange = (e) => {
    setNotificationSettings({ ...notificationSettings, [e.target.name]: e.target.checked });
  };

  const handleAppChange = (e) => {
    setAppSettings({ ...appSettings, [e.target.name]: e.target.value });
  };

  const handleSaveSettings = () => {
    console.log('Settings saved');
    // Save settings logic here
  };

  return (
    <div className="flex-1 p-6 bg-gray-100 shadow-lg rounded-lg overflow-auto max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Settings</h1>

      {/* Account Settings Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">Account Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={accountSettings.username}
              onChange={handleAccountChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={accountSettings.email}
              onChange={handleAccountChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={accountSettings.password}
              onChange={handleAccountChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Language</label>
            <select
              name="language"
              value={accountSettings.language}
              onChange={handleAccountChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notification Settings Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">Notification Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="flex items-center text-gray-700 font-medium">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={notificationSettings.emailNotifications}
                onChange={handleNotificationChange}
                className="mr-3 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              Email Notifications
            </label>
          </div>
          <div>
            <label className="flex items-center text-gray-700 font-medium">
              <input
                type="checkbox"
                name="smsNotifications"
                checked={notificationSettings.smsNotifications}
                onChange={handleNotificationChange}
                className="mr-3 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              SMS Notifications
            </label>
          </div>
          <div>
            <label className="flex items-center text-gray-700 font-medium">
              <input
                type="checkbox"
                name="pushNotifications"
                checked={notificationSettings.pushNotifications}
                onChange={handleNotificationChange}
                className="mr-3 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              Push Notifications
            </label>
          </div>
        </div>
      </div>

      {/* Application Settings Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">Application Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Theme</label>
            <select
              name="theme"
              value={appSettings.theme}
              onChange={handleAppChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Data Usage</label>
            <select
              name="dataUsage"
              value={appSettings.dataUsage}
              onChange={handleAppChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="Wi-Fi only">Wi-Fi only</option>
              <option value="Cellular data">Cellular data</option>
            </select>
          </div>
          <div>
            <label className="flex items-center text-gray-700 font-medium">
              <input
                type="checkbox"
                name="autoUpdate"
                checked={appSettings.autoUpdate}
                onChange={handleAppChange}
                className="mr-3 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              Auto-update application
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSaveSettings}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
