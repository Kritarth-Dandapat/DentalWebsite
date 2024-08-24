// pages/oral-scan-mobile.js
"use client"
import Image from 'next/image';
import { useState } from 'react';

const fullWidthImages = [
  '/oral-scan/full-width1.jpg',
  '/oral-scan/full-width2.jpg',
  '/oral-scan/full-width3.jpg',
];

const featureImages = [
  {
    feature: 'Instant Oral Health Assessment',
    images: [
      '/oral-scan/feature1-1.jpg',
      '/oral-scan/feature1-2.jpg',
      '/oral-scan/feature1-3.jpg',
    ],
  },
  {
    feature: 'AI-Powered Analysis',
    images: [
      '/oral-scan/feature2-1.jpg',
      '/oral-scan/feature2-2.jpg',
      '/oral-scan/feature2-3.jpg',
    ],
  },
  {
    feature: 'Personalized Health Tips',
    images: [
      '/oral-scan/feature3-1.jpg',
      '/oral-scan/feature3-2.jpg',
      '/oral-scan/feature3-3.jpg',
    ],
  },
];

export default function OralScanMobile() {
  const [currentFullWidthImage, setCurrentFullWidthImage] = useState(0);
  const [currentFeatureImages, setCurrentFeatureImages] = useState(
    new Array(featureImages.length).fill(0)
  );

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
      {/* Full-Width Image Carousel */}
      <div className="relative w-full h-80 sm:h-96 md:h-[500px]">
        <Image
          src={fullWidthImages[currentFullWidthImage]}
          alt="Oral Scan Mobile"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500"
        />
        <button
          onClick={prevFullWidthImage}
          className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
        >
          &#8249;
        </button>
        <button
          onClick={nextFullWidthImage}
          className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
        >
          &#8250;
        </button>
      </div>

      {/* Features Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {featureImages.map((feature, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
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
              <div className="h-64 bg-blue-200 rounded-lg overflow-hidden shadow-md relative">
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
                className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-blue-600 text-white p-1 sm:p-2 rounded-full hover:bg-blue-700"
              >
                &#8249;
              </button>
              <button
                onClick={() => nextFeatureImage(index)}
                className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-blue-600 text-white p-1 sm:p-2 rounded-full hover:bg-blue-700"
              >
                &#8250;
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Download Section */}
      <div className="bg-blue-800 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Download the Oral Scan Mobile App
          </h2>
          <p className="text-gray-300 mb-8">
            Available on Google Play Store and Apple App Store.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="inline-block"
            >
              <Image
                src="/icons/google-play-badge.png"
                alt="Get it on Google Play"
                width={150}
                height={50}
              />
            </a>
            <a
              href="#"
              className="inline-block"
            >
              <Image
                src="/icons/app-store-badge.png"
                alt="Download on the App Store"
                width={150}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
