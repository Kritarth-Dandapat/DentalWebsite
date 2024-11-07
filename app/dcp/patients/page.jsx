'use client';
import React, { useState } from 'react';
import Head from 'next/head';

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
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
      .modal {
        background: white;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        position: relative;
        width: 80%;
        max-width: 600px;
        animation: fadeIn 0.5s;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
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

const PatientsPage = () => {
  const [modalData, setModalData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe', age: 30, email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'janesmith@example.com' },
    { id: 3, name: 'Emily Johnson', age: 35, email: 'emilyj@example.com' },
    { id: 4, name: 'Michael Brown', age: 40, email: 'michaelb@example.com' },
  ]);
  const [newPatient, setNewPatient] = useState({ name: '', age: '', email: '' });

  const handleOpenModal = (patient) => {
    const content = (
      <div>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Email:</strong> {patient.email}</p>
      </div>
    );
    setModalData({ title: `Details for ${patient.name}`, content });
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  const handleAddPatient = (e) => {
    e.preventDefault();
    if (newPatient.name && newPatient.age && newPatient.email) {
      setPatients([
        ...patients,
        { id: patients.length + 1, ...newPatient },
      ]);
      setNewPatient({ name: '', age: '', email: '' });
    }
  };

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Patients Page</title>
        <meta name="description" content="List of patients." />
      </Head>

      <div className="container">
        <header>
          <h1>Patients List</h1>
        </header>

        <main>
          <section className="search-section">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </section>

          <section className="patient-list">
            <div className="card">
              <h2>All Patients</h2>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPatients.map((patient) => (
                    <tr key={patient.id}>
                      <td>{patient.name}</td>
                      <td>{patient.age}</td>
                      <td>{patient.email}</td>
                      <td>
                        <button className="info-button" onClick={() => handleOpenModal(patient)}>
                          Info
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="add-patient-section">
            <h2>Add New Patient</h2>
            <form onSubmit={handleAddPatient}>
              <input
                type="text"
                placeholder="Name"
                value={newPatient.name}
                onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="Age"
                value={newPatient.age}
                onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={newPatient.email}
                onChange={(e) => setNewPatient({ ...newPatient, email: e.target.value })}
                required
              />
              <button type="submit">Add Patient</button>
            </form>
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
            font-size: 2rem;
          }

          main {
            flex: 1;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .search-section {
            margin-bottom: 1rem;
          }

          .search-section input {
            padding: 0.5rem;
            border-radius: 5px;
            border: 1px solid #ccc;
            width: 100%;
            max-width: 400px;
          }

          .patient-list {
            display: flex;
            flex-direction: column;
          }

          .card {
            background: white;
            border-radius: 10px;
            padding: 1.5rem;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s;
          }

          .card:hover {
            transform: translateY(-5px);
          }

          h2 {
            color: #225ea8;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
          }

          th, td {
            padding: 0.75rem;
            text-align: left;
            border-bottom: 1px solid #eee;
          }

          th {
            background-color: #f4f6f9;
            color: #225ea8;
          }

          .info-button {
            background: #0072ff;
            color: white;
            border: none;
            border-radius: 8px;
            padding: 0.5rem 1rem;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .info-button:hover {
            background: #005bb5;
          }

          .add-patient-section {
            margin-top: 2rem;
          }

          .add-patient-section form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .add-patient-section input {
            padding: 0.5rem;
            border-radius: 5px;
            border: 1px solid #ccc;
          }

          .add-patient-section button {
            background: #0072ff;
            color: white;
            border: none;
            border-radius: 8px;
            padding: 0.5rem;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .add-patient-section button:hover {
            background: #005bb5;
          }
        `}</style>
      </div>
    </>
  );
};

export default PatientsPage;
