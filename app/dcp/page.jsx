import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBell, faCog, faSignOutAlt, faStethoscope, faUsers, faClipboardList } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      {/* Hero Section */}
      <section className="hero bg-blue-500 text-white py-24 flex items-center justify-center">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Welcome to the Doctor's Portal</h2>
          <p className="text-xl mb-8">Your hub for managing patients, appointments, and more.</p>
          <Link href="/doctor/home"className="bg-white text-blue-500 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-100">Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FontAwesomeIcon icon={faStethoscope} className="text-blue-500 text-4xl mb-4" />
              <h4 className="text-xl font-bold mb-2">Patient Management</h4>
              <p>Manage your patients with ease, track their history, and more.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FontAwesomeIcon icon={faUsers} className="text-blue-500 text-4xl mb-4" />
              <h4 className="text-xl font-bold mb-2">Appointments</h4>
              <p>Schedule and manage appointments with an intuitive calendar.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FontAwesomeIcon icon={faClipboardList} className="text-blue-500 text-4xl mb-4" />
              <h4 className="text-xl font-bold mb-2">Reports & Analytics</h4>
              <p>Access detailed reports and analytics for better decision-making.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Doctor's Portal. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}
