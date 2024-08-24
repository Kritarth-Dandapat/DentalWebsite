// pages/doctors-control-panel.js
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link from next/link

const fullWidthImages = [
  '/doctors-control-panel/full-width1.jpg',
  '/doctors-control-panel/full-width2.jpg',
  '/doctors-control-panel/full-width3.jpg',
];

const featureImages = [
  {
    feature: 'Manage Patient Records',
    images: [
      '/doctors-control-panel/feature1-1.jpg',
      '/doctors-control-panel/feature1-2.jpg',
      '/doctors-control-panel/feature1-3.jpg',
    ],
  },
  {
    feature: 'Access Real-Time Data',
    images: [
      '/doctors-control-panel/feature2-1.jpg',
      '/doctors-control-panel/feature2-2.jpg',
      '/doctors-control-panel/feature2-3.jpg',
    ],
  },
  {
    feature: 'Cloud-Based Solutions',
    images: [
      '/doctors-control-panel/feature3-1.jpg',
      '/doctors-control-panel/feature3-2.jpg',
      '/doctors-control-panel/feature3-3.jpg',
    ],
  },
];

export default function DoctorsControlPanel() {
  const [currentFullWidthImage, setCurrentFullWidthImage] = useState(0);
  const [currentFeatureImages, setCurrentFeatureImages] = useState(
    new Array(featureImages.length).fill(0)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFullWidthImage((prev) => (prev + 1) % fullWidthImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  const nextFullWidthImage = () => {
    setCurrentFullWidthImage((prev) => (prev + 1) % fullWidthImages.length);
  };

  const prevFullWidthImage = () => {
    setCurrentFullWidthImage((prev) => (prev - 1 + fullWidthImages.length) % fullWidthImages.length);
  };

  const nextFeatureImage = (index) => {
    setCurrentFeatureImages((prev) => {
      const newImages = [...prev];
      newImages[index] = (newImages[index] + 1) % featureImages[index].images.length;
      return newImages;
    });
  };

  const prevFeatureImage = (index) => {
    setCurrentFeatureImages((prev) => {
      const newImages = [...prev];
      newImages[index] = (newImages[index] - 1 + featureImages[index].images.length) % featureImages[index].images.length;
      return newImages;
    });
  };

  return (
    <div className="bg-gray-100">
      {/* Full-Width Image Carousel with Header Overlay */}
      <div className="relative w-full h-80 sm:h-96 md:h-[500px]">
        <Image
          src={fullWidthImages[currentFullWidthImage]}
          alt="Doctors Control Panel"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 p-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
            Welcome to the Doctors Control Panel
          </h1>
          <div className="space-x-4">
            <Link href="/signin">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Sign In
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                Create Account
              </button>
            </Link>
          </div>
        </div>
        <button
          onClick={prevFullWidthImage}
          className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-blue-600 text-white p-2 rounded-full shadow-lg transition-transform hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          &#8249;
        </button>
        <button
          onClick={nextFullWidthImage}
          className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg transition-transform hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          &#8250;
        </button>
      </div>

      {/* Features Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {featureImages.map((feature, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center transition-transform transform hover:scale-105"
          >
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 animate-fade-in">
                {feature.feature}
              </h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-gray-700">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="h-64 bg-blue-200 rounded-lg overflow-hidden shadow-md relative transition-transform transform hover:scale-105">
                <Image
                  src={feature.images[currentFeatureImages[index]]}
                  alt={feature.feature}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500"
                />
              </div>
              <button
                onClick={() => prevFeatureImage(index)}
                className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-blue-600 text-white p-1 sm:p-2 rounded-full shadow-lg transition-transform hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                &#8249;
              </button>
              <button
                onClick={() => nextFeatureImage(index)}
                className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-blue-600 text-white p-1 sm:p-2 rounded-full shadow-lg transition-transform hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                &#8250;
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-in-out;
        }
      `}</style>
    </div>
  );
}
