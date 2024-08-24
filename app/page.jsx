// pages/index.js
"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

export default function HomePage() {
  // Sample image data for carousel
  const carouselImages = [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg'
  ];

  const featureImages = {
    intraoralScanner: ['/images/feature1.jpg', '/images/feature2.jpg'],
    healthTracker: ['/images/feature3.jpg', '/images/feature4.jpg'],
    perfusionMeter: ['/images/feature5.jpg', '/images/feature6.jpg'],
    progressTracker: ['/images/feature7.jpg', '/images/feature8.jpg'],
    mobileUIDesign: ['/images/feature9.jpg', '/images/feature10.jpg'],
    doctorsPortal: ['/images/feature11.jpg', '/images/feature12.jpg']
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section with Image Carousel */}
        <section className="relative">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            transitionTime={500}
            interval={3000}
          >
            {carouselImages.map((src, index) => (
              <div key={index} className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh]">
                <Image src={src} alt={`Hero Image ${index + 1}`} layout="fill" objectFit="cover" />
              </div>
            ))}
          </Carousel>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 w-full">
            <div className="bg-blue-900 bg-opacity-60 p-4 rounded-md">
              <h1 className="text-4xl font-bold mb-4 text-white">Welcome to DentalApp</h1>
              <p className="text-xl mb-8 text-white">
                Your comprehensive dental health companion. Monitor and manage your oral health with advanced tools and insights.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900 animate__animated animate__fadeIn">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.keys(featureImages).map((key, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-blue-900 animate__animated animate__fadeIn">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    autoPlay
                    transitionTime={500}
                    interval={3000}
                  >
                    {featureImages[key].map((src, idx) => (
                      <div key={idx} className="relative h-64">
                        <Image src={src} alt={`${key} Image ${idx + 1}`} layout="responsive" width={500} height={300} objectFit="cover" />
                      </div>
                    ))}
                  </Carousel>
                  <p className="mt-4 text-gray-700 animate__animated animate__fadeIn animate__delay-1s">
                    {getDescription(key)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-blue-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-900 animate__animated animate__fadeIn">About DentalApp</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-800 animate__animated animate__fadeIn animate__delay-1s">
              DentalApp is designed to help users manage and monitor their dental health. The app includes features like an intraoral scanner, health tracker, perfusion meter, progress tracker, and more. Each feature is designed to provide users with a comprehensive understanding of their oral health, enabling them to take proactive steps in their dental care.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900 animate__animated animate__fadeIn">Contact Us</h2>
            <form className="bg-white p-8 rounded-lg shadow-lg mx-auto max-w-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows="4" required className="w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <button type="submit" className="bg-blue-900 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-500">Send Message</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2024 DentalApp. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

// Function to get descriptions based on feature key
function getDescription(key) {
  const descriptions = {
    intraoralScanner: '3D scanning and reconstruction of oral structures, including teeth and tissue. Uses computer vision to convert 2D images into 3D models.',
    healthTracker: 'Detects regions of interest and classifies common dental diseases using YOLO models and traditional machine learning.',
    perfusionMeter: 'Monitors rPPG, oxygenation, and pulsation from points of interest in gum and oral tissue for real-time health insights.',
    progressTracker: 'Track the progression of dental health over time, perfect for monitoring healing after surgery or ongoing treatments.',
    mobileUIDesign: 'Experience a streamlined, user-friendly interface that makes navigation and interaction easy and intuitive.',
    doctorsPortal: 'A special portal for doctors to monitor and manage their patients\' dental health, with comprehensive tools and insights.'
  };
  return descriptions[key];
}
