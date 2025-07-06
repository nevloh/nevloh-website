import React from 'react';
import { Instagram, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-700 to-blue-900 border-t border-blue-600">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mr-3">
                <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">Nevloh Limited</h3>
            </div>
            <p className="text-blue-100 leading-relaxed mb-4">
              Delivering excellence in fuel solutions across Jamaica, ensuring reliable,
              on-site energy for your business operations.
            </p>
            <div className="flex items-center justify-center md:justify-start text-sm text-blue-200">
              <span>Trusted fuel delivery since 2022</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="group flex items-center justify-center md:justify-start text-blue-100 hover:text-white transition-colors">
                <span className="group-hover:translate-x-1 transition-transform">Home</span>
              </a>
              <a href="/about" className="group flex items-center justify-center md:justify-start text-blue-100 hover:text-white transition-colors">
                <span className="group-hover:translate-x-1 transition-transform">About Us</span>
              </a>
              <a href="/services" className="group flex items-center justify-center md:justify-start text-blue-100 hover:text-white transition-colors">
                <span className="group-hover:translate-x-1 transition-transform">Services</span>
              </a>
              <a href="/sustainability" className="group flex items-center justify-center md:justify-start text-blue-100 hover:text-white transition-colors">
                <span className="group-hover:translate-x-1 transition-transform">Sustainability</span>
              </a>
              <a href="/industry" className="group flex items-center justify-center md:justify-start text-blue-100 hover:text-white transition-colors">
                <span className="group-hover:translate-x-1 transition-transform">Industry Solutions</span>
              </a>
              <a href="/contact" className="group flex items-center justify-center md:justify-start text-blue-100 hover:text-white transition-colors">
                <span className="group-hover:translate-x-1 transition-transform">Contact</span>
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center md:justify-start text-blue-100">
                <MapPin size={16} className="mr-2 text-blue-300 flex-shrink-0" />
                <span className="text-sm">Spanish Town, St. Catherine, Jamaica</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-blue-100">
                <Mail size={16} className="mr-2 text-blue-300 flex-shrink-0" />
                <a href="mailto:shamar@nevloh.com" className="text-sm hover:text-white transition-colors">
                  shamar@nevloh.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start text-blue-100">
                <Phone size={16} className="mr-2 text-blue-300 flex-shrink-0" />
                <a href="tel:+18764495172" className="text-sm hover:text-white transition-colors">
                  (876) 449-5172
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/nevlohltd?igsh=MW0xMTlpMDhmcXNqNA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} className="text-blue-300 mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-white group-hover:text-blue-100">
                  @nevlohltd
                </span>
                <ExternalLink size={12} className="ml-1 text-blue-200 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-800/50 border-t border-blue-600">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-blue-100">
            <div className="flex items-center mb-2 md:mb-0">
              <span>© {new Date().getFullYear()} Nevloh Limited. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-blue-300">•</span>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <span className="text-blue-300">•</span>
              <a href="/login" className="hover:text-white transition-colors">Admin Login</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}