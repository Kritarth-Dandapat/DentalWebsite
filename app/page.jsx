// pages/index.js
"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

export default function HomePage() {
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
            className="rounded-lg shadow-lg"
          >
            {carouselImages.map((src, index) => (
              <div key={index} className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh]">
                <Image src={src} alt={`Hero Image ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg"/>
              </div>
            ))}
          </Carousel>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent text-center flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-4 text-white animate__animated animate__fadeInDown">Welcome to DentalApp</h1>
            <p className="text-xl mb-8 text-white animate__animated animate__fadeInUp">
              Your comprehensive dental health companion. Monitor and manage your oral health with advanced tools and insights.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-900 animate__animated animate__fadeIn">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {Object.keys(featureImages).map((key, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-900 animate__animated animate__fadeIn">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
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
                        <Image src={src} alt={`${key} Image ${idx + 1}`} layout="responsive" width={500} height={300} objectFit="cover" className="rounded-lg" />
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
        <section className="bg-blue-200 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8 text-blue-900 animate__animated animate__fadeIn">About DentalApp</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-800 leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
              DentalApp is designed to help users manage and monitor their dental health. The app includes features like an intraoral scanner, health tracker, perfusion meter, progress tracker, and more.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-8 text-blue-900 animate__animated animate__fadeIn">Contact Us</h2>
            <form className="bg-white p-8 rounded-lg shadow-lg mx-auto max-w-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows="4" required className="w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="bg-blue-900 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-500 transition-all duration-300">Send Message</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; {new Date().getFullYear()} DentalApp. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

// Helper function to return descriptions for features
function getDescription(featureName) {
  const descriptions = {
    intraoralScanner: "High-quality intraoral scanning with real-time data visualization.",
    healthTracker: "Track your overall dental health with the integrated health tracker.",
    perfusionMeter: "Measure tissue perfusion with accuracy using the perfusion meter.",
    progressTracker: "Monitor your treatment progress over time with detailed insights.",
    mobileUIDesign: "Enjoy a seamless, user-friendly mobile UI design.",
    doctorsPortal: "A dedicated portal for doctors to manage patient records efficiently."
  };
  return descriptions[featureName] || "Feature description.";
}
