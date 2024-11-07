'use client'
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Line, Pie } from 'react-chartjs-2'; // Using charts
import Chart from 'chart.js/auto';


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => handleToggleTodo(index)}>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <style jsx>{`
        input {
          padding: 0.5rem;
          margin-right: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        button {
          padding: 0.5rem 1rem;
          border: none;
          background: #0072ff;
          color: white;
          border-radius: 5px;
          cursor: pointer;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid #ccc;
        }
        li.completed span {
          text-decoration: line-through;
          color: #888;
        }
        li span {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

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

const DoctorHomePage = () => {
  const [modalData, setModalData] = useState(null);

  // Appointment and report data
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

  // Line chart data
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Appointments Over Time',
        data: [65, 59, 80, 81, 56],
        fill: false,
        backgroundColor: '#0072ff',
        borderColor: '#0072ff',
        tension: 0.4,
      },
    ],
  };

  // Pie chart data
  const pieData = {
    labels: ['Processed', 'Pending', 'Cancelled'],
    datasets: [
      {
        label: 'Reports',
        data: [3, 2, 1],
        backgroundColor: ['#00c6ff', '#ff4b5c', '#ffcf00'],
        borderColor: ['#0072ff', '#ff4b5c', '#ffcf00'],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    // Adding simple animations on page load
    document.querySelectorAll('.stat-item').forEach((item, i) => {
      item.style.animationDelay = `${i * 0.1}s`;
    });
  }, []);

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

          <section className="charts">
            <div className="chart-card">
              <h2>Appointments Trend</h2>
              <Line data={lineData} />
            </div>

            <div className="chart-card">
              <h2>Report Status</h2>
              <Pie data={pieData} />
            </div>

            <div className="chart-card">
              <h2>Polygon Chart (Placeholder)</h2>
              {/* Example of a polygon chart */}
              <svg width="300" height="300" viewBox="0 0 100 100" style={{ transform: 'rotate(30deg)' }}>
                <polygon points="50,1 90,20 82,65 50,99 18,65 10,20" fill="#00c6ff" stroke="#0072ff" strokeWidth="1" />
              </svg>
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

          <section className="todo-list">
            <div className="card">
              <h2>To-Do List</h2>
              <TodoList />
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
          }

          .stats {
            display: flex;
            justify-content: space-around;
            margin-top: 1rem;
            gap: 2rem;
          }

          .stat-item {
            background: linear-gradient(90deg, #0072ff, #00c6ff);
            color: white;
            padding: 1.5rem;
            border-radius: 10px;
            text-align: center;
            width: 150px;
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
            animation: fadeInUp 0.7s forwards;
          }

          .stat-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          }

          .charts {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }

          .chart-card {
            background: white;
            border-radius: 15px;
            padding: 2rem;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            text-align: center;
            font-size: 1rem;
          }

          h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: white;
          }

          h2 {
            font-size: 1.75rem;
          }

          p, li {
            font-size: 1.2rem;
          }

          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default DoctorHomePage;
