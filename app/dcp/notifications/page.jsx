'use client';
import React, { useState } from 'react';
import Head from 'next/head';

const initialNotifications = [
  { id: 1, title: 'System Update', date: '2024-09-01', message: 'A new system update is available.', read: false },
  { id: 2, title: 'Appointment Reminder', date: '2024-09-02', message: 'Reminder: Your appointment with patient John Doe.', read: false },
  { id: 3, title: 'New Message', date: '2024-09-03', message: 'You have a new message from the admin.', read: true },
  // Add more dummy data here
];

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState('all'); // For filtering
  const [sort, setSort] = useState('date'); // For sorting

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'unread') return !notification.read;
    return true; // Show all for 'all'
  });

  const sortedNotifications = [...filteredNotifications].sort((a, b) => {
    if (sort === 'date') {
      return new Date(b.date) - new Date(a.date); // Sort by date descending
    }
    return a.title.localeCompare(b.title); // Sort by title ascending
  });

  return (
    <>
      <Head>
        <title>Notifications</title>
        <meta name="description" content="Notifications for the doctor." />
      </Head>

      <div className="container">
        <header>
          <h1>Notifications</h1>
        </header>

        <main>
          <section className="notification-list">
            <div className="card">
              <h2>Notification List</h2>
              <div className="controls">
                <select onChange={(e) => setFilter(e.target.value)}>
                  <option value="all">All Notifications</option>
                  <option value="unread">Unread Notifications</option>
                </select>
                <select onChange={(e) => setSort(e.target.value)}>
                  <option value="date">Sort by Date</option>
                  <option value="title">Sort by Title</option>
                </select>
              </div>
              <ul>
                {sortedNotifications.map((notification) => (
                  <li key={notification.id} className={notification.read ? 'read' : ''}>
                    <strong>{notification.title}</strong> - {notification.date}
                    <p>{notification.message}</p>
                    {!notification.read && (
                      <button onClick={() => handleMarkAsRead(notification.id)} className="mark-read-btn">
                        Mark as Read
                      </button>
                    )}
                  </li>
                ))}
              </ul>
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
            background: linear-gradient(90deg, #0072ff, #00c6ff);
            color: white;
            padding: 2rem;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            border-radius: 0 0 20px 20px;
          }
          main {
            flex: 1;
            padding: 2rem;
          }
          .card {
            background: white;
            border-radius: 10px;
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
          .controls {
            margin: 1rem 0;
          }
          .controls select {
            margin-right: 1rem;
            padding: 0.5rem;
            border-radius: 4px;
            border: 1px solid #ccc;
          }
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            border-bottom: 1px solid #eee;
            padding: 0.5rem 0;
            position: relative;
          }
          li.read {
            background: #e0f7fa;
          }
          .mark-read-btn {
            background: #0072ff;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
          }
          .mark-read-btn:hover {
            background: #005bb5;
          }
        `}</style>
      </div>
    </>
  );
};

export default NotificationsPage;
