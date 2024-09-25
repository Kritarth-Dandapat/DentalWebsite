'use client'
import React, { useState } from 'react';
import Head from 'next/head';

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    email: 'doctor@example.com',
    password: '',
    confirmPassword: '',
    notifications: true,
    emailNotifications: true,
    smsNotifications: false,
    theme: 'light',
    profilePicture: null,
  });

  const [themePreview, setThemePreview] = useState('light');
  const [profilePreview, setProfilePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      setFormData({
        ...formData,
        [name]: file,
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
      if (name === 'theme') setThemePreview(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Settings saved.');
  };

  return (
    <>
      <Head>
        <title>Settings</title>
        <meta name="description" content="Settings for the doctor." />
      </Head>

      <div className={`container ${themePreview === 'dark' ? 'dark-mode' : ''}`}>
        <header>
          <h1>Settings</h1>
        </header>

        <main>
          <section className="settings-form">
            <div className="card">
              <h2>Account Settings</h2>
              <form onSubmit={handleSubmit}>
                <label className="profile-picture">
                  Profile Picture:
                  <input
                    type="file"
                    name="profilePicture"
                    onChange={handleChange}
                    accept="image/*"
                    hidden
                  />
                  <div className="image-preview">
                    {profilePreview ? (
                      <img src={profilePreview} alt="Profile Preview" />
                    ) : (
                      <div className="placeholder">Upload Image</div>
                    )}
                  </div>
                </label>

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
                  />
                </label>

                <label>
                  Confirm Password:
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </label>

                <h3>Notification Settings</h3>
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
                  <input
                    type="checkbox"
                    name="emailNotifications"
                    checked={formData.emailNotifications}
                    onChange={handleChange}
                  />
                  Email Notifications
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="smsNotifications"
                    checked={formData.smsNotifications}
                    onChange={handleChange}
                  />
                  SMS Notifications
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
            transition: background 0.3s ease;
            padding: 1rem;
          }

          .dark-mode {
            background: #1e1e2f;
            color: white;
          }

          header {
            background: linear-gradient(90deg, #0072ff, #00c6ff);
            color: white;
            padding: 2rem;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            border-radius: 0 0 20px 20px;
            transition: background 0.3s ease;
          }

          main {
            flex: 1;
            padding: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .settings-form {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .card {
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            max-width: 100%;
            width: 100%;
            transition: box-shadow 0.3s ease;
            text-align: center;
          }

          .card:hover {
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
          }

          h1 {
            margin: 0;
            font-size: 2.5rem;
          }

          h2 {
            margin-top: 0;
            font-size: 1.75rem;
            color: #0072ff;
            font-weight: 600;
          }

          h3 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
            color: #333;
          }

          form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          label {
            display: flex;
            flex-direction: column;
            font-size: 1rem;
            gap: 0.5rem;
          }

          input, select {
            padding: 0.75rem;
            border-radius: 8px;
            border: 1px solid #ccc;
            transition: border 0.3s ease;
          }

          input:focus, select:focus {
            border-color: #0072ff;
            outline: none;
          }

          .save-btn {
            background: linear-gradient(90deg, #0072ff, #00c6ff);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.3s ease, transform 0.2s ease;
          }

          .save-btn:hover {
            background: linear-gradient(90deg, #0060e5, #00b4e5);
            transform: scale(1.05);
          }

          .image-preview {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 150px;
            height: 150px;
            border: 2px dashed #ccc;
            border-radius: 50%;
            overflow: hidden;
            background: #f0f0f0;
            margin-top: 10px;
            cursor: pointer;
            transition: border-color 0.3s ease;
          }

          .image-preview:hover {
            border-color: #0072ff;
          }

          .image-preview img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .placeholder {
            font-size: 0.9rem;
            color: #999;
          }

          /* Media queries for responsive design */
          @media (min-width: 768px) {
            .card {
              max-width: 600px;
            }
          }

          @media (min-width: 1024px) {
            .card {
              max-width: 900px;
            }
          }

          @media (max-width: 767px) {
            .card {
              max-width: 90%;
              padding: 1rem;
            }

            header {
              padding: 1rem;
            }

            main {
              padding: 1rem;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default SettingsPage;
