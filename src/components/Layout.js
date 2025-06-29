import React from 'react';
import { useLocation } from 'react-router-dom'; // Keep this import if you're using react-router-dom
import Navbar from './Navbar'; // Adjusted import path for Navbar
import Footer from './Footer'; // Adjusted import path for Footer

const Layout = ({ children }) => {
  const location = useLocation();

  // List of paths where the navbar should be hidden
  const hideNavbarRoutes = ['/login']; // Example: hide navbar on login page

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col font-inter antialiased">
      {/* Tailwind CSS CDN for global availability (for standalone Canvas preview) */}
      <script src="https://cdn.tailwindcss.com"></script>

      {!shouldHideNavbar && <Navbar />} {/* Conditionally render Navbar */}
      <main className="flex-grow">
        {children}
      </main>
      <Footer /> {/* Footer is always rendered */}
    </div>
  );
};

export default Layout;
