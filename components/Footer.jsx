// components/Footer.js
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Footer Logo */}
        <div className="mb-4">
          <Image src="/images/logo-white.png" alt="DentalApp Logo" width={150} height={50} />
        </div>

        {/* Footer Navigation Links */}
        <div className="mb-4">
          <nav className="space-x-4">
            <Link href="/" className="text-white hover:underline">Home</Link>
            <Link href="/features" className="text-white hover:underline">Features</Link>
            <Link href="/about" className="text-white hover:underline">About Us</Link>
            <Link href="/contact" className="text-white hover:underline">Contact Us</Link>
            <Link href="/download" className="text-white hover:underline">Download</Link>
            <Link href="/blog" className="text-white hover:underline">Blog</Link>
          </nav>
        </div>

        {/* Social Media Links */}
        <div className="mb-4 flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-blue-300">
            <i className="fab fa-facebook-f fa-lg"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-blue-300">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-blue-300">
            <i className="fab fa-linkedin-in fa-lg"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-blue-300">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-sm text-gray-300">
          <p>123 Dental Street, Smile City, CA 90210</p>
          <p>Email: <a href="mailto:contact@dentalapp.com" className="text-white hover:underline">contact@dentalapp.com</a> | Phone: (123) 456-7890</p>
          <p>&copy; {new Date().getFullYear()} DentalApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
