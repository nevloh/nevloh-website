import React from 'react';
import HeroSection from '../components/HeroSection'; // Adjusted import path
import ServicesSection from '../components/ServicesSection'; // Adjusted import path
import ProcessSection from '../components/ProcessSection'; // New Process component
import CallToAction from '../components/CallToAction'; // Adjusted import path
// The Navbar and Footer components will now be rendered by the Layout component.
// import Footer from "../components/Footer"; // Removed: now handled by Layout component
// import Navbar from "../components/Navbar"; // Removed: now handled by Layout component

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 font-inter antialiased">
      {/* Tailwind CSS CDN for global availability (for standalone Canvas preview) */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/*
        Note: The Navbar and Footer are now included in the Layout component.
        This Home component focuses solely on arranging its main sections.
      */}
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <CallToAction />
      {/* No Footer here, it's in Layout.js */}
    </div>
  );
}