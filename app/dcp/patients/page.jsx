'use client'
import React, { useState } from 'react';
import Head from 'next/head';

const initialPatients = [
  { id: 1, name: 'John Doe', lastVisit: '2024-08-30', status: 'Active', details: 'No issues reported.' },
  { id: 2, name: 'Jane Smith', lastVisit: '2024-08-25', status: 'Inactive', details: 'Needs follow-up.' },
  { id: 3, name: 'Emily Johnson', lastVisit: '2024-08-20', status: 'Active', details: 'Scheduled for check-up.' },
  { id: 4, name: 'Michael Brown', lastVisit: '2024-08-15', status: 'Inactive', details: 'Missed last appointment.' },
  // Add more dummy data here
];

const PatientsPage = () => {
  const [patients, setPatients] = useState(initialPatients);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleAddPatient = () => {
    // Logic to add a new patient
    alert('Add Patient feature is not implemented yet.');
  };

  const handleViewPatient = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <>
      <Head>
        <title>Patients</title>
        <meta name="description" content="List of patients and their details." />
      </Head>

      <div className="container">
        <header>
          <h1>Patients</h1>
        </header>

        <main>
          <section className="patient-management">
            <div className="card">
              <div className="card-header">
                <h2>Patient List</h2>
                <button onClick={handleAddPatient} className="add-btn">Add New Patient</button>
              </div>
              <ul>
                {patients.map((patient) => (
                  <li key={patient.id} onClick={() => handleViewPatient(patient)} className="patient-item">
                    <strong>{patient.name}</strong> - Last Visit: {patient.lastVisit} ({patient.status})
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {selectedPatient && (
            <section className="patient-details">
              <div className="card">
                <h2>Patient Details</h2>
                <p><strong>Name:</strong> {selectedPatient.name}</p>
                <p><strong>Last Visit:</strong> {selectedPatient.lastVisit}</p>
                <p><strong>Status:</strong> {selectedPatient.status}</p>
                <p><strong>Details:</strong> {selectedPatient.details}</p>
                <button onClick={() => setSelectedPatient(null)} className="close-btn">Close</button>
              </div>
            </section>
          )}
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
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          .card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
            margin: 20px; /* Padding around the card */
            position: relative;
          }
          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .add-btn, .close-btn {
            background: #225ea8;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
          }
          .add-btn:hover, .close-btn:hover {
            background: #1a4a7b;
          }
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            border-bottom: 1px solid #eee;
            padding: 0.5rem 0;
            cursor: pointer;
          }
          .patient-item:hover {
            background: #f0f0f0;
          }
          .patient-details {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .patient-details .card {
            width: 80%;
            max-width: 500px;
            margin: 0;
          }
        `}</style>
      </div>
    </>
  );
};

export default PatientsPage;
