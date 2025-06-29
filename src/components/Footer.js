import React from 'react';
import { Instagram } from 'lucide-react'; // Social media icons

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-200 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Nevloh Limited</h3>
          <p className="text-sm mb-2 leading-relaxed">
            Delivering excellence in fuel solutions across Jamaica, ensuring reliable, on-site energy for your business operations.
          </p>
          <p className="text-sm mt-4">© {new Date().getFullYear()} Nevloh Limited. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            {/* Note: Using <a> for direct hrefs for Canvas compatibility.
                      In a full React Router setup, you'd replace these with <Link to="/path"> */}
            <li><a href="/" className="hover:text-white transition text-sm">Home</a></li>
            <li><a href="/about" className="hover:text-white transition text-sm">About Us</a></li>
            <li><a href="/products" className="hover:text-white transition text-sm">Products & Services</a></li>
            <li><a href="/sustainability" className="hover:text-white transition text-sm">Sustainability</a></li>
            <li><a href="/industry" className="hover:text-white transition text-sm">Industry</a></li>
          </ul>
        </div>

        {/* Contact Info and Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
          <p className="text-sm mb-2">
            123 Fuel Road, Spanish Town, St. Catherine Parish, Jamaica
          </p>
          <p className="text-sm mb-2">
            Email: info@nevloh.com
          </p>
          <p className="text-sm">
            Phone: (876) 555-1234
          </p>
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="#" className="text-blue-300 hover:text-white transition" aria-label="Instagram"><Instagram size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
