'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Required for Chart.js

// Dummy data
const patientData = {
  name: 'John Doe',
  age: 35,
  gender: 'Male',
  bloodType: 'O+',
  photoUrl: '/path/to/photo.jpg',  // Placeholder for the patient's photo
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
      image: '/path/to/blood-test-report.jpg', // Placeholder for the report image
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
      image: '/path/to/x-ray-report.jpg', // Placeholder for the report image
    },
    {
      id: 3,
      type: 'MRI Scan',
      date: '2024-07-25',
      status: 'Pending',
      results: {
        findings: 'Under review',
        notes: 'MRI of the lumbar spine',
      },
      image: '/path/to/mri-report.jpg', // Placeholder for the report image
    },
    {
      id: 4,
      type: 'Dental Checkup',
      date: '2024-06-30',
      status: 'Completed',
      results: {
        findings: 'No cavities detected',
        notes: 'Routine dental checkup',
      },
      image: '/path/to/dental-checkup-report.jpg', // Placeholder for the report image
    },
    {
      id: 5,
      type: 'Cardiac Stress Test',
      date: '2024-05-20',
      status: 'Completed',
      results: {
        heartRate: '120 bpm',
        notes: 'Heart function is normal under stress',
      },
      image: '/path/to/cardiac-stress-report.jpg', // Placeholder for the report image
    },
    {
      id: 6,
      type: 'Ultrasound',
      date: '2024-04-15',
      status: 'Completed',
      results: {
        findings: 'No abnormalities detected',
        notes: 'Abdominal ultrasound',
      },
      image: '/path/to/ultrasound-report.jpg', // Placeholder for the report image
    },
    {
      id: 7,
      type: 'CT Scan',
      date: '2024-03-10',
      status: 'Completed',
      results: {
        findings: 'Mild inflammation in the sinuses',
        notes: 'CT scan of the sinuses',
      },
      image: '/path/to/ct-scan-report.jpg', // Placeholder for the report image
    },
    {
      id: 8,
      type: 'Lipid Panel',
      date: '2024-02-05',
      status: 'Completed',
      results: {
        totalCholesterol: '190 mg/dL',
        LDL: '110 mg/dL',
        HDL: '60 mg/dL',
        triglycerides: '150 mg/dL',
        notes: 'Cholesterol levels within normal range',
      },
      image: '/path/to/lipid-panel-report.jpg', // Placeholder for the report image
    },
    {
      id: 9,
      type: 'Allergy Test',
      date: '2024-01-20',
      status: 'Completed',
      results: {
        allergens: ['Pollen', 'Dust Mites'],
        notes: 'Moderate reaction to pollen',
      },
      image: '/path/to/allergy-test-report.jpg', // Placeholder for the report image
    },
    {
      id: 10,
      type: 'Vision Test',
      date: '2023-12-15',
      status: 'Completed',
      results: {
        leftEye: '20/25',
        rightEye: '20/20',
        notes: 'Normal vision',
      },
      image: '/path/to/vision-test-report.jpg', // Placeholder for the report image
    },
  ],

};

const chartData = {
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
          <div className="patient-header">
            <img src={patientData.photoUrl} alt={`${patientData.name} photo`} className="patient-photo" />
            <div className="patient-info">
              <h1>{patientData.name}</h1>
              <p><strong>Age:</strong> {patientData.age}</p>
              <p><strong>Gender:</strong> {patientData.gender}</p>
              <p><strong>Blood Type:</strong> {patientData.bloodType}</p>
            </div>
          </div>
        </header>

        <main>
          <section className="left-section">
            <div className="card">
              <h2>Vitals</h2>
              <p><strong>Heart Rate:</strong> {patientData.vitals.heartRate}</p>
              <p><strong>Blood Pressure:</strong> {patientData.vitals.bloodPressure}</p>
              <p><strong>Oxygen Saturation:</strong> {patientData.vitals.oxygenSaturation}</p>
            </div>

            <div className="card">
              <h2>Medications</h2>
              <ul>
                {patientData.medications.map((medication, index) => (
                  <li key={index}>
                    <strong>{medication.name}:</strong> {medication.dosage}, {medication.frequency}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h2>Health History</h2>
              <ul>
                {patientData.healthHistory.map((history, index) => (
                  <li key={index}>
                    <strong>{history.condition}:</strong> {history.treatment} ({history.status})
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h2>Insurance Details</h2>
              <p><strong>Provider:</strong> {patientData.insurance.provider}</p>
              <p><strong>Policy Number:</strong> {patientData.insurance.policyNumber}</p>
              <p><strong>Expiration Date:</strong> {patientData.insurance.expirationDate}</p>
            </div>

            <div className="card">
              <h2>Emergency Contacts</h2>
              <ul>
                {patientData.emergencyContacts.map((contact, index) => (
                  <li key={index}>
                    <strong>{contact.name}:</strong> {contact.relationship}, {contact.phone}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="right-section">
            <div className="reports-section">
              <h2>Recent Reports</h2>
              <ul>
                {patientData && patientData.reports && patientData.reports.length > 0 ? (
                  <ul>
                    {patientData.reports.map((report) => (
                      <li key={report.id} onClick={() => handleReportClick(report)} className="report-item">
                        <strong>{report.type}</strong> - {report.date} ({report.status})
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No recent reports available.</p>
                )}
              </ul>
            </div>

            <div className="card appointments">
              <h2>Upcoming Appointments</h2>
              <ul>
                {patientData.appointments.map((appointment, index) => (
                  <li key={index}>
                    <strong>{appointment.date} - {appointment.time}</strong> ({appointment.status})
                  </li>
                ))}
              </ul>
            </div>

            <div className="card appointment-trends">
              <h2>Appointment Trends</h2>
              <Line data={chartData} />
            </div>

            <div className="card">
              <h2>Payment Methods</h2>
              <ul>
                {patientData.paymentMethods.map((payment, index) => (
                  <li key={index}>
                    <strong>{payment.cardType || payment.bank}:</strong> {payment.cardNumber || payment.accountNumber} ({payment.expiration})
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h2>Previous Doctors</h2>
              <ul>
                {patientData.previousDoctors.map((doctor, index) => (
                  <li key={index}>
                    <strong>{doctor.name}:</strong> {doctor.specialty} ({doctor.contact})
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>

        {/* Modal for Report Details */}
        {selectedReport && (
          <div className="modal">
            <div className="modal-content pop-in">
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
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            background-color: #f9f9f9;
          }

          header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
            background-color: #225ea8;
            color: white;
            border-radius: 8px;
          }

          .patient-header {
            display: flex;
            align-items: center;
          }

          .patient-photo {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 4px solid white;
            margin-right: 1rem;
          }

          .patient-info h1 {
            font-size: 2rem;
            margin: 0;
          }

          main {
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
            background-color: white;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          }

          h2 {
            margin-top: 0;
            font-size: 1.5rem;
          }

          ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .report-item:hover {
            cursor: pointer;
            background-color: #f0f0f0;
          }

          .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }

          .modal-content {
            background-color: white;
            padding: 2rem;
            border-radius: 8px;
            width: 50%;
            max-width: 600px;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
            position: relative;
          }

          .pop-in {
            animation: popIn 0.3s ease;
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
            margin-top: 1rem;
            border-radius: 8px;
          }

          @keyframes popIn {
            from {
              transform: scale(0.9);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default PatientDetailPage;

