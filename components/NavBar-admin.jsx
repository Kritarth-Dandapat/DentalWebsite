// components/Navbar.js
"use client"
// components/Navbar.js

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full md:w-64 bg-blue-800 text-white flex flex-col">
        <div className="p-6 text-xl font-semibold border-b border-blue-700">
          Admin Dashboard
        </div>
        <nav className="mt-6 flex-1">
          <Link href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 flex items-center">
            <i className="fas fa-tachometer-alt mr-3"></i>
            Dashboard
          </Link>
          <Link href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 flex items-center">
            <i className="fas fa-users mr-3"></i>
            Users
          </Link>
          <Link href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 flex items-center">
            <i className="fas fa-file-alt mr-3"></i>
            Reports
          </Link>
          <Link href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 flex items-center">
            <i className="fas fa-cogs mr-3"></i>
            Settings
          </Link>
        </nav>
      </div>
  );
}
