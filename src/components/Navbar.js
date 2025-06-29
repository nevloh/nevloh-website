import React from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.png"; // Import icons for mobile menu

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false); // State to manage mobile menu visibility

  return (
    <nav className="bg-white shadow-lg py-4 px-6 sticky top-0 z-50 rounded-b-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Company Name */}
        <a href="/" className="flex items-center space-x-3 group">
          <img
            src={logo} // Placeholder for your logo
            alt="Nevloh Limited Logo"
            className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-md transition-transform duration-300 group-hover:scale-105"
            onError={(e) => { e.target.onerror = null; e.target.src = {logo}; }} // Fallback image
          />
          <span className="text-xl md:text-2xl font-bold text-blue-900 hidden sm:block">Nevloh Limited</span>
        </a>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2 transition-colors duration-200 hover:bg-blue-100"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />} {/* Dynamic icon based on menu state */}
          </button>
        </div>

        {/* Navigation links - Desktop */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {/* Note: Using <a> for direct hrefs for Canvas compatibility.
                    In a full React Router setup, you'd replace these with <Link to="/path"> */}
          <li><a href="/" className="text-blue-800 hover:text-blue-600 font-semibold transition-colors duration-200 py-2 px-3 rounded-md hover:bg-blue-50">Home</a></li>
          <li><a href="/about" className="text-blue-800 hover:text-blue-600 font-semibold transition-colors duration-200 py-2 px-3 rounded-md hover:bg-blue-50">About Us</a></li>
          <li><a href="/services" className="text-blue-800 hover:text-blue-600 font-semibold transition-colors duration-200 py-2 px-3 rounded-md hover:bg-blue-50">Products & Services</a></li>
          <li><a href="/sustainability" className="text-blue-800 hover:text-blue-600 font-semibold transition-colors duration-200 py-2 px-3 rounded-md hover:bg-blue-50">Sustainability</a></li>
          <li><a href="/industry" className="text-blue-800 hover:text-blue-600 font-semibold transition-colors duration-200 py-2 px-3 rounded-md hover:bg-blue-50">Industry</a></li>
          <li>
            <a
              href="/login"
              className="inline-block bg-blue-800 text-white px-5 py-2 rounded-full text-md font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
            >
              Login
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Menu (conditionally rendered) */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 animate-fade-in-down">
          <ul className="flex flex-col space-y-3 bg-blue-50 p-4 rounded-lg shadow-inner border border-blue-200">
            <li><a href="/" className="block text-blue-800 hover:text-blue-600 font-semibold py-2 px-3 rounded-md hover:bg-blue-100 transition-colors duration-200">Home</a></li>
            <li><a href="/about" className="block text-blue-800 hover:text-blue-600 font-semibold py-2 px-3 rounded-md hover:bg-blue-100 transition-colors duration-200">About Us</a></li>
            <li><a href="/services" className="block text-blue-800 hover:text-blue-600 font-semibold py-2 px-3 rounded-md hover:bg-blue-100 transition-colors duration-200">Products & Services</a></li>
            <li><a href="/sustainability" className="block text-blue-800 hover:text-blue-600 font-semibold py-2 px-3 rounded-md hover:bg-blue-100 transition-colors duration-200">Sustainability</a></li>
            <li><a href="/industry" className="block text-blue-800 hover:text-blue-600 font-semibold py-2 px-3 rounded-md hover:bg-blue-100 transition-colors duration-200">Industry</a></li>
            <li>
              <a
                href="/login"
                className="block text-center bg-blue-800 text-white px-5 py-2 rounded-full text-md font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg mt-3"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
