'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import { Line, Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto'; // Required for Chart.js

// Dummy data
const patientData = {
  name: 'John Doe',
  age: 35,
  gender: 'Male',
  bloodType: 'O+',
  photoUrl: '/path/to/photo.jpg',
  vitals: {
    heartRate: '72 bpm',
    bloodPressure: '120/80 mmHg',
    oxygenSaturation: '98%',
  },
  allergies: ['Penicillin', 'Peanuts'],
  medications: [
    { name: 'Ibuprofen', dosage: '200mg', frequency: 'Twice a day' }
  ],
  healthHistory: [
    { condition: 'Asthma', treatment: 'Inhaler', status: 'Ongoing' },
    { condition: 'High Cholesterol', treatment: 'Medication', status: 'Managed' }
  ],
  recentVisits: [
    { date: '2024-08-01', reason: 'Routine checkup', doctor: 'Dr. Smith', notes: 'All good.' },
    { date: '2024-07-15', reason: 'Tooth pain', doctor: 'Dr. Carter', notes: 'Cavity found and treated.' },
  ],
  appointments: [
    { date: '2024-09-20', time: '10:00 AM', status: 'Upcoming' },
    { date: '2024-07-20', time: '11:00 AM', status: 'Completed' },
  ],
  insurance: {
    provider: 'HealthCare Inc.',
    policyNumber: 'HC123456789',
    expirationDate: '2025-08-01'
  },
  paymentMethods: [
    { cardType: 'Visa', cardNumber: '**** **** **** 1234', expiration: '07/24' },
    { bank: 'Chase', accountNumber: '****1234' }
  ],
  emergencyContacts: [
    { name: 'Jane Doe', relationship: 'Spouse', phone: '(123) 456-7890' }
  ],
  previousDoctors: [
    { name: 'Dr. Amy Jones', specialty: 'Dermatology', contact: '(123) 456-7890' },
    { name: 'Dr. Richard Roe', specialty: 'Cardiology', contact: '(987) 654-3210' }
  ],
  reports: [
    {
      id: 1,
      type: 'Blood Test',
      date: '2024-08-15',
      status: 'Completed',
      results: {
        hemoglobin: '14.2 g/dL',
        whiteBloodCells: '6,800 /µL',
        platelets: '250,000 /µL',
        notes: 'Normal range',
      },
      image: '/path/to/blood-test-report.jpg',
    },
    {
      id: 2,
      type: 'X-Ray',
      date: '2024-08-10',
      status: 'Completed',
      results: {
        findings: 'No fractures detected',
        notes: 'Chest X-Ray',
      },
      image: '/path/to/x-ray-report.jpg',
    },
  ],
};

// Chart Data
const appointmentChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
  datasets: [
    {
      label: 'Appointments',
      data: [1, 2, 1, 3, 2, 1, 2, 3, 1],
      fill: false,
      borderColor: '#225ea8',
    },
  ],
};

// New dental issues chart data
const dentalIssuesChartData = {
  labels: ['Cavities', 'Gum Disease', 'Tooth Sensitivity', 'Oral Cancer', 'Other'],
  datasets: [
    {
      label: 'Dental Issues',
      data: [40, 25, 15, 10, 10],
      backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#ff9f40', '#4bc0c0'],
    },
  ],
};

const vitalData = {
  labels: ['Heart Rate', 'Blood Pressure', 'Oxygen Saturation'],
  datasets: [
    {
      label: 'Vitals',
      data: [72, 120, 98],
      backgroundColor: ['#4bc0c0', '#ff9f40', '#9966ff'],
    },
  ],
};

const PatientDetailPage = () => {
  const [selectedReport, setSelectedReport] = useState(null);

  const handleReportClick = (report) => {
    setSelectedReport(report);
  };

  const handleCloseReport = () => {
    setSelectedReport(null);
  };

  return (
    <>
      <Head>
        <title>Patient Details - {patientData.name}</title>
        <meta name="description" content={`Details for patient ${patientData.name}`} />
      </Head>

      <div className="container">
        <header>
          <h1>{patientData.name}'s Health Dashboard</h1>
        </header>

        <main>
          <section className="left-section">
            <div className="card patient-info-card">
              <img src={patientData.photoUrl} alt={`${patientData.name}'s photo`} className="patient-photo" />
              <p><strong>Age:</strong> {patientData.age}</p>
              <p><strong>Gender:</strong> {patientData.gender}</p>
              <p><strong>Blood Type:</strong> {patientData.bloodType}</p>
            </div>

            <div className="card chart-card">
              <h2 className="chart-title">Vitals</h2>
              <Bar data={vitalData} options={{ responsive: true }} />
            </div>

            <div className="card chart-card">
              <h2 className="chart-title">Dental Issues</h2>
              <Pie data={dentalIssuesChartData} options={{ responsive: true }} />
            </div>
          </section>

          <section className="right-section">
            <div className="reports-section card">
              <h2 className="chart-title">Recent Reports</h2>
              <ul>
                {patientData.reports.map((report) => (
                  <li key={report.id} onClick={() => handleReportClick(report)} className="report-item">
                    <strong>{report.type}</strong> - {report.date} ({report.status})
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h2 className="chart-title">Upcoming Appointments</h2>
              <ul>
                {patientData.appointments.map((appointment, index) => (
                  <li key={index}><strong>{appointment.date} - {appointment.time}</strong> ({appointment.status})</li>
                ))}
              </ul>
            </div>

            <div className="card chart-card">
              <h2 className="chart-title">Appointment Trends</h2>
              <Line data={appointmentChartData} options={{ responsive: true }} />
            </div>
          </section>
        </main>

        {selectedReport && (
          <div className="modal">
            <div className="modal-content">
              <button className="close-button" onClick={handleCloseReport}>✖</button>
              <h2>Report Details</h2>
              <p><strong>Type:</strong> {selectedReport.type}</p>
              <p><strong>Date:</strong> {selectedReport.date}</p>
              <p><strong>Status:</strong> {selectedReport.status}</p>
              <img src={selectedReport.image} alt="Report" className="report-image" />
            </div>
          </div>
        )}

        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: #f4f6f9;
            padding: 1rem;
            font-family: 'Roboto', sans-serif;
          }

          header {
            background: linear-gradient(90deg, #225ea8, #4a90e2);
            color: white;
            padding: 2rem;
            text-align: center;
            border-radius: 0 0 20px 20px;
            font-size: 2.5rem;
          }

          main {
            flex: 1;
            display: flex;
            padding: 2rem;
            gap: 2rem;
          }

          .left-section, .right-section {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .card {
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
            transition: transform 0.2s, box-shadow 0.2s;
          }

          .card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          }

          .chart-card {
            flex: 1;
          }

          .patient-info-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .patient-photo {
            border-radius: 50%;
            width: 150px;
            height: 150px;
            object-fit: cover;
            margin-bottom: 1rem;
          }

          .chart-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #225ea8;
          }

          .reports-section ul {
            list-style: none;
            padding: 0;
          }

          .report-item {
            cursor: pointer;
            padding: 0.5rem;
            border-bottom: 1px solid #eaeaea;
            transition: background 0.2s;
          }

          .report-item:hover {
            background: #f0f8ff;
          }

          .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }

          .modal-content {
            background: white;
            border-radius: 10px;
            padding: 2rem;
            position: relative;
            width: 80%;
            max-width: 600px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          }

          .close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
          }

          .report-image {
            width: 100%;
            border-radius: 10px;
            margin-top: 1rem;
          }
        `}</style>
      </div>
    </>
  );
};

export default PatientDetailPage;