"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

const fullWidthImages = [
  '/oral-scan/full-width1.png',
  '/oral-scan/full-width2.png',
  '/oral-scan/full-width3.png',
];

const featureImages = [
  {
    feature: 'Instant Oral Health Assessment',
    images: ['/oral-scan/Intra Oral Scan Dummy.png'],
  },
  {
    feature: 'AI-Powered Analysis',
    images: [
      '/oral-scan/feature2-1.png',
      '/oral-scan/feature2-2.png',
      '/oral-scan/feature2-3.png',
    ],
  },
  {
    feature: 'Personalized Health Tips',
    images: [
      '/oral-scan/feature3-1.png',
      '/oral-scan/feature3-2.png',
      '/oral-scan/feature3-3.png',
    ],
  },
];

export default function OralScanMobile() {
  const [currentFullWidthImage, setCurrentFullWidthImage] = useState(0);
  const [currentFeatureImages, setCurrentFeatureImages] = useState(
    new Array(featureImages.length).fill(0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFullWidthImage((prev) => (prev + 1) % fullWidthImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureImages((prev) =>
        prev.map((imgIndex, idx) => (imgIndex + 1) % featureImages[idx].images.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (featureIndex, imgIndex) => {
    setCurrentFeatureImages((prev) => {
      const newImages = [...prev];
      newImages[featureIndex] = imgIndex;
      return newImages;
    });
  };

  return (
    <div className="bg-gray-50">
      {/* Full-Width Image Carousel */}
      <div className="relative w-full h-80 sm:h-96 md:h-[500px] overflow-hidden flex items-center justify-center bg-gradient-to-r from-gray-800 via-blue-900 to-gray-800">
        <Image
          src={fullWidthImages[currentFullWidthImage]}
          alt="Oral Scan Mobile"
          layout="fill"
          objectFit="contain"
          className="transition-transform duration-700 ease-in-out transform hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Next-Gen Oral Health
          </h1>
          <p className="mt-4 text-lg"><br></br>Transforming oral care with AI technology</p>
        </div>
        <div className="absolute bottom-4 flex space-x-2">
          {fullWidthImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentFullWidthImage(index)}
              className={`w-3 h-3 rounded-full ${
                currentFullWidthImage === index ? "bg-blue-600" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Features Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {featureImages.map((feature, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-blue-900 mb-4 tracking-wide">
                {feature.feature}
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="relative order-1 md:order-2 flex items-center justify-center">
              <div className="h-400 bg-gray-100 rounded-lg overflow-hidden shadow-lg relative flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                <Image
                  src={feature.images[currentFeatureImages[index]]}
                  alt={feature.feature}
                  // layout="fill"
                  width={300}
                  height={800}
                  objectFit="contain"
                  className="transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="absolute bottom-4 flex space-x-2">
                {feature.images.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={() => handleDotClick(index, imgIndex)}
                    className={`w-3 h-3 rounded-full ${
                      currentFeatureImages[index] === imgIndex ? "bg-blue-600" : "bg-gray-400"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Download Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Download the Oral Scan Mobile App
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Available on Google Play Store and Apple App Store.
          </p>
          <div className="flex justify-center space-x-4 animate-bounce">
            <a href="#" className="inline-block transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/icons/google-play-badge.png"
                alt="Get it on Google Play"
                width={160}
                height={60}
              />
            </a>
            <a href="#" className="inline-block transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/icons/app-store-badge.png"
                alt="Download on the App Store"
                width={160}
                height={60}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
