// pages/index.js

import Navbar from '@components/NavBar-home';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to DentalApp</h1>
          <p className="text-xl mb-8">
            Your comprehensive dental health companion. Monitor and manage your oral health with advanced tools and insights.
          </p>
          <Link href="/download" className="bg-white text-blue-900 px-6 py-3 rounded-md text-lg font-semibold">
              Download the App
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Intraoral Scanner</h3>
              <p>
                3D scanning and reconstruction of oral structures, including teeth and tissue. Uses computer vision to convert 2D images into 3D models.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Health Tracker</h3>
              <p>
                Detects regions of interest and classifies common dental diseases using YOLO models and traditional machine learning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Perfusion Meter</h3>
              <p>
                Monitors rPPG, oxygenation, and pulsation from points of interest in gum and oral tissue for real-time health insights.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Progress Tracker</h3>
              <p>
                Track the progression of dental health over time, perfect for monitoring healing after surgery or ongoing treatments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Mobile UI/UX Design</h3>
              <p>
                Experience a streamlined, user-friendly interface that makes navigation and interaction easy and intuitive.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Doctor's Portal</h3>
              <p>
                A special portal for doctors to monitor and manage their patients' dental health, with comprehensive tools and insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">About DentalApp</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            DentalApp is designed to help users manage and monitor their dental health. The app includes features like an intraoral scanner, health tracker, perfusion meter, progress tracker, and more. Each feature is designed to provide users with a comprehensive understanding of their oral health, enabling them to take proactive steps in their dental care.
          </p>
          <Link href="/contact" className="bg-blue-900 text-white px-6 py-3 rounded-md text-lg font-semibold">
              Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 DentalApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  );
}
