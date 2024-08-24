// components/Navbar.js
"use client"
// components/Navbar.js

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and App Name */}
          <div className="flex items-center">
            <Link href="/" legacyBehavior>
              <a className="flex items-center">
                <img
                  src="/logo.png"
                  alt="DentalApp Logo"
                  className="h-8 w-8 mr-2"
                />
                <span className="text-2xl font-bold">DentalApp</span>
              </a>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </button>
              {openDropdown === 'services' && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md">
                  <Link href="/intraoral-scanner" legacyBehavior>
                    <a className="block px-4 py-2 text-sm hover:bg-gray-200">
                      Intraoral Scanner
                    </a>
                  </Link>
                  <Link href="/health-tracker" legacyBehavior>
                    <a className="block px-4 py-2 text-sm hover:bg-gray-200">
                      Health Tracker
                    </a>
                  </Link>
                  <Link href="/perfusion-meter" legacyBehavior>
                    <a className="block px-4 py-2 text-sm hover:bg-gray-200">
                      Perfusion Meter
                    </a>
                  </Link>
                  <Link href="/progress-tracker" legacyBehavior>
                    <a className="block px-4 py-2 text-sm hover:bg-gray-200">
                      Progress Tracker
                    </a>
                  </Link>
                  <Link href="/mobile-application" legacyBehavior>
                    <a className="block px-4 py-2 text-sm hover:bg-gray-200">
                      Mobile Application
                    </a>
                  </Link>
                  <Link href="/doctors-website" legacyBehavior>
                    <a className="block px-4 py-2 text-sm hover:bg-gray-200">
                      Doctors Website
                    </a>
                  </Link>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('about')}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </button>
              {openDropdown === 'about' && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md">
                  <Link href="/about-us" legacyBehavior>
                    <a className="block px-4 py-2 text-sm hover:bg-gray-200">
                      About Us
                    </a>
                  </Link>
                  <Link href="/team" legacyBehavior>
                    <a className="block px-4 py-2 text-sm hover:bg-gray-200">
                      Team
                    </a>
                  </Link>
                  <Link href="/contact" legacyBehavior>
                    <a className="block px-4 py-2 text-sm hover:bg-gray-200">
                      Contact
                    </a>
                  </Link>
                </div>
              )}
            </div>

            {/* Blog Link */}
            <Link href="/blog" legacyBehavior>
              <a className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Blog
              </a>
            </Link>

            {/* Sign In/Sign Out */}
            <Link href="/signin" legacyBehavior>
              <a className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Sign In
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
