'use client'
import React, { useState } from 'react';
import Head from 'next/head';

const appointments = [
  { id: 1, patient: 'John Doe', time: '9:00 AM', status: 'Upcoming' },
  { id: 2, patient: 'Jane Smith', time: '10:00 AM', status: 'Completed' },
  { id: 3, patient: 'Emily Johnson', time: '11:00 AM', status: 'Upcoming' },
  { id: 4, patient: 'Michael Brown', time: '1:00 PM', status: 'Cancelled' },
];

const reports = [
  { id: 1, patient: 'John Doe', date: '2024-09-05', status: 'Processed' },
  { id: 2, patient: 'Jane Smith', date: '2024-09-06', status: 'Pending' },
  { id: 3, patient: 'Emily Johnson', date: '2024-09-07', status: 'Processed' },
  { id: 4, patient: 'Michael Brown', date: '2024-09-08', status: 'Pending' },
];

const carouselItems = [
  { id: 1, title: 'New Feature Release', description: 'Check out the new features in the app!' },
  { id: 2, title: 'Appointment Scheduling Tips', description: 'Learn how to manage your appointments more effectively.' },
  { id: 3, title: 'Patient Feedback Highlights', description: 'Read some recent feedback from patients.' },
];


// Modal component
const Modal = ({ title, content, onClose }) => (
  <div className="modal-overlay">
    <div className="modal">
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <h2>{title}</h2>
      <div>{content}</div>
    </div>
    <style jsx>{`
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
      .modal {
        background: white;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        position: relative;
        width: 80%;
        max-width: 600px;
      }
      .close-button {
        position: absolute;
        top: 10px;
        right: 15px;
        border: none;
        background: transparent;
        font-size: 1.5rem;
        cursor: pointer;
      }
    `}</style>
  </div>
);

const DoctorHomePage = () => {
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (type) => {
    const content = {
      appointments: (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              <strong>{appointment.patient}</strong> at {appointment.time} - {appointment.status}
            </li>
          ))}
        </ul>
      ),
      patients: (
        <ul>
          {reports.map((report) => (
            <li key={report.id}>
              <strong>{report.patient}</strong> - {report.date} ({report.status})
            </li>
          ))}
        </ul>
      ),
      notifications: <p>You have {5} new notifications!</p>,
    };
    setModalData({ title: type.charAt(0).toUpperCase() + type.slice(1), content: content[type] });
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <>
      <Head>
        <title>Doctor Home</title>
        <meta name="description" content="Home page for the doctor." />
      </Head>

      <div className="container">
        <header>
          <h1>Welcome, Dr. Smith!</h1>
        </header>

        <main>
          <section className="dashboard">
            <div className="card">
              <h2>Dashboard</h2>
              <p>Overview of your patients, appointments, and notifications.</p>
              <div className="stats">
                <div className="stat-item" onClick={() => handleOpenModal('patients')}>
                  <h3>Patients</h3>
                  <p>150</p>
                </div>
                <div className="stat-item" onClick={() => handleOpenModal('appointments')}>
                  <h3>Appointments</h3>
                  <p>30 Today</p>
                </div>
                <div className="stat-item" onClick={() => handleOpenModal('notifications')}>
                  <h3>Notifications</h3>
                  <p>5 New</p>
                </div>
              </div>
            </div>
          </section>

          <section className="recent-activity">
            <div className="card">
              <h2>Recent Activity</h2>
              <ul>
                <li>Patient John Doe visited on September 20</li>
                <li>Patient Jane Smith updated their profile</li>
                <li>Appointment with Mary Johnson scheduled for September 28</li>
              </ul>
            </div>
          </section>
        </main>

        {/* Modal Display */}
        {modalData && <Modal title={modalData.title} content={modalData.content} onClose={handleCloseModal} />}

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
            flex-direction: column;
            gap: 2rem;
          }

          .dashboard, .recent-activity {
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
            margin-bottom: 0.5rem;
            color: #333;
          }

          .stats {
            display: flex;
            justify-content: space-around;
            margin-top: 1rem;
          }

          .stat-item {
            background: #f0f0f0;
            padding: 1rem;
            border-radius: 10px;
            width: 30%;
            text-align: center;
            cursor: pointer; /* Change cursor on hover */
            transition: transform 0.2s;
          }

          .stat-item:hover {
            transform: scale(1.05);
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

export default DoctorHomePage;
