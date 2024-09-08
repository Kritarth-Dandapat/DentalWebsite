'use client'
import React, { useState } from 'react';
import Head from 'next/head';

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    email: 'doctor@example.com',
    password: '',
    notifications: true,
    theme: 'light',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Settings saved.');
  };

  return (
    <>
      <Head>
        <title>Settings</title>
        <meta name="description" content="Settings for the doctor." />
      </Head>

      <div className="container">
        <header>
          <h1>Settings</h1>
        </header>

        <main>
          <section className="settings-form">
            <div className="card">
              <h2>Account Settings</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Password:
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="notifications"
                    checked={formData.notifications}
                    onChange={handleChange}
                  />
                  Enable Notifications
                </label>
                <label>
                  Theme:
                  <select
                    name="theme"
                    value={formData.theme}
                    onChange={handleChange}
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </label>
                <button type="submit" className="save-btn">Save Changes</button>
              </form>
            </div>
          </section>
        </main>

        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: #f4f6f9;
            font-family: 'Arial', sans-serif;
          }
          header {
            background: #225ea8;
            color: white;
            padding: 1rem;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          main {
            flex: 1;
            padding: 2rem;
          }
          .card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
            margin: 20px; /* Padding around the card */
          }
          h1 {
            margin: 0;
            font-size: 2rem;
          }
          h2 {
            margin-top: 0;
            font-size: 1.5rem;
            color: #333;
          }
          form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          label {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          input, select {
            padding: 0.5rem;
            border-radius: 4px;
            border: 1px solid #ccc;
          }
          .save-btn {
            background: #225ea8;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
          }
          .save-btn:hover {
            background: #1a4a7b;
          }
        `}</style>
      </div>
    </>
  );
};

export default SettingsPage;
