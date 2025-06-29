import React from 'react';
import logo from "../assets/logo.png";
// import logo from '../assets/logo.png'; // Assuming logo is handled by a public URL or other means now

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 px-4 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden text-center">
      {/* Background shape/overlay for visual interest */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <circle cx="20" cy="80" r="15" fill="rgba(100, 150, 255, 0.5)"></circle>
          <circle cx="80" cy="20" r="20" fill="rgba(0, 100, 255, 0.4)"></circle>
          <path d="M0 0 L100 0 L100 30 C80 50, 20 50, 0 30 Z" fill="rgba(200, 220, 255, 0.3)"></path>
        </svg>
      </div>

      <img
        src={logo} // Placeholder for your logo
        alt="Nevloh Limited Logo"
        className="relative z-10 w-28 md:w-36 mb-6 rounded-full shadow-lg border-2 border-white"
        onError={(e) => { e.target.onerror = null; e.target.src = {logo}; }} // Fallback image
      />
      <h1 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-blue-900 drop-shadow-md">
        Delivering Fuel, Driving Success
      </h1>
      <p className="relative z-10 mt-6 text-gray-700 text-lg sm:text-xl max-w-3xl leading-relaxed">
        Your trusted partner for on-site fuel solutions in Jamaica — <br className="hidden sm:inline" />delivering fast, safe, and reliable energy where you need it most.
      </p>
      <a
        href="/contact"
        className="relative z-10 mt-10 inline-block bg-blue-800 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
      >
        Request A Quote
      </a>
    </section>
  );
}
