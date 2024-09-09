'use client'
import React from 'react';
import Head from 'next/head';
import { Line } from 'react-chartjs-2';
import Slider from 'react-slick';
import 'chart.js/auto'; // Required for Chart.js
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

// Sample data
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

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Appointments',
      data: [30, 45, 50, 40, 60, 70, 90],
      fill: false,
      backgroundColor: '#225ea8',
      borderColor: '#225ea8',
      tension: 0.1,
    },
  ],
};

const carouselItems = [
  { id: 1, title: 'New Feature Release', description: 'Check out the new features in the app!' },
  { id: 2, title: 'Appointment Scheduling Tips', description: 'Learn how to manage your appointments more effectively.' },
  { id: 3, title: 'Patient Feedback Highlights', description: 'Read some recent feedback from patients.' },
];

const DoctorHomePage = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Doctor's control panel for managing patients, appointments, and more." />
      </Head>

      <div className="container">
        <header>
          <h1>Doctor's Dashboard</h1>
        </header>

        <main>
          <section className="overview">
            <div className="card card-appointments">
              <h2>Today's Appointments</h2>
              <ul>
                {appointments.map((appointment) => (
                  <li key={appointment.id} className={`status-${appointment.status.toLowerCase()}`}>
                    <strong>{appointment.patient}</strong> - {appointment.time} ({appointment.status})
                  </li>
                ))}
              </ul>
            </div>

            <div className="card chart-card">
              <h2>Appointment Trends</h2>
              <Line data={data} />
            </div>
          </section>

          <section className="carousel-section">
            <div className="card">
              <h2>Latest Updates</h2>
              <Slider {...carouselSettings}>
                {carouselItems.map((item) => (
                  <div key={item.id} className="carousel-slide">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </section>

          <section className="patient-management">
            <div className="card">
              <h2>Patient Management</h2>
              <p><a href="/doctor/patients">View Patient List</a></p>
              <p><a href="/doctor/patients/new">Register New Patient</a></p>
            </div>
          </section>

          <section className="reports">
            <div className="card">
              <h2>Recent Reports</h2>
              <ul>
                {reports.map((report) => (
                  <li key={report.id}>
                    <strong>{report.patient}</strong> - {report.date} ({report.status})
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="notifications">
            <div className="card">
              <h2>Notifications</h2>
              <p>No new notifications.</p>
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
            display: grid;
            gap: 1.5rem; /* Adjusted gap for vertical spacing */
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
          section {
            margin: 0;
          }
          .card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            margin: 20px; /* Added margin for padding around the cards */
          }
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
          }
          .chart-card {
            height: 300px;
          }
          .carousel-section {
            grid-column: span 2; /* Make carousel span multiple columns */
          }
          .carousel-slide {
            padding: 1rem;
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
          h3 {
            font-size: 1.2rem;
            color: #225ea8;
          }
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            border-bottom: 1px solid #eee;
            padding: 0.5rem 0;
          }
          .status-upcoming {
            color: #009688;
          }
          .status-completed {
            color: #4caf50;
          }
          .status-cancelled {
            color: #f44336;
          }
          a {
            color: #225ea8;
            text-decoration: none;
            font-weight: bold;
          }
          a:hover {
            text-decoration: underline;
          }
        `}</style>
      </div>
    </>
  );
};

export default DoctorHomePage;
