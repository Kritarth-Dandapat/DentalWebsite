// components/Navbar.js
"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    closeDropdown(); // Close dropdowns when opening the mobile menu
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-blue-900 text-white z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and App Name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/icon/logo.jpg"
                alt="DentalApp Logo"
                className="h-8 w-8 mr-2"
                width={8}
                height={8}
              />
              <span className="text-2xl font-bold">DentalApp</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`fixed inset-0 top-16 left-0 bg-blue-900 text-white transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} sm:translate-x-0 sm:flex sm:space-x-4 sm:static sm:bg-transparent`}
            ref={dropdownRef}
          >
            <div className="relative">
              {/* Services Dropdown */}
              <button
                onClick={() => toggleDropdown('services')}
                className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </button>
              {openDropdown === 'services' && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md z-50 transition-opacity duration-300 ease-in-out opacity-100">
                  <Link href="/services/healscan" className="block px-4 py-2 text-sm hover:bg-gray-200">
                    Heal Scan Mobile Application
                  </Link>
                  <Link href="/services/oralscan" className="block px-4 py-2 text-sm hover:bg-gray-200">
                    Oral Scan Mobile Application
                  </Link>
                  <Link href="/services/doctorControlPanel" className="block px-4 py-2 text-sm hover:bg-gray-200">
                    Doctors Control Panel
                  </Link>
                </div>
              )}
            </div>

            {/* Team Link */}
            <Link href="/team" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Team
            </Link>

            {/* Recent News Link */}
            <Link href="/recent-news" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Recent News
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
