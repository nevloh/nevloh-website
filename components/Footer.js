// components/Footer.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Analytics tracking for external links
  const handleExternalLinkClick = (linkName) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'External Link',
        event_label: linkName,
        value: 1
      });
    }
  };

  return (
    <footer
      className="bg-gradient-to-br from-blue-50 to-blue-100 border-t border-blue-200"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nevloh Limited",
            "description": "Delivering excellence in fuel solutions across Jamaica, ensuring reliable, on-site energy for business operations",
            "url": "https://www.nevloh.com",
            "logo": "https://www.nevloh.com/logo.png",
            "foundingDate": "2022",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Spanish Town",
              "addressRegion": "St. Catherine",
              "addressCountry": "Jamaica"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-876-449-5172",
              "email": "shamar@nevloh.com",
              "contactType": "customer service",
              "areaServed": "JM"
            },
            "sameAs": [
              "https://www.instagram.com/nevlohltd"
            ],
            "serviceArea": {
              "@type": "Country",
              "name": "Jamaica"
            }
          })
        }}
      />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="group flex items-center justify-center md:justify-start mb-4 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg p-1"
              aria-label="Go to Nevloh Limited homepage"
            >
              <div className="w-12 h-12 mr-2 relative">
                <Image
                  src="/images/logo.png"
                  alt="Nevloh Limited Logo"
                  fill
                  className="object-contain rounded-full shadow-md"
                  sizes="48px"
                  onError={(e) => {
                    // Fallback to text-based logo if image fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback logo */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl items-center justify-center text-white font-bold text-lg hidden">
                  N
                </div>
              </div>
              <span className="text-lg md:text-xl font-bold text-blue-900 hidden sm:block group-hover:text-blue-600 transition-colors">
                Nevloh Limited
              </span>
            </Link>
            <p className="text-gray-600 leading-relaxed mb-4">
              Delivering excellence in fuel solutions across Jamaica, ensuring reliable,
              on-site energy for your business operations.
            </p>
            <div className="flex items-center justify-center md:justify-start text-sm text-gray-500">
              <span>Trusted fuel delivery since 2022</span>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Services</h4>
            <nav aria-label="Services navigation">
              <div className="space-y-2">
                <Link
                  href="/services/fleet-refuelling"
                  className="group flex items-center justify-center md:justify-start text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Fleet Refuelling</span>
                </Link>
                <Link
                  href="/services/generator-refuelling"
                  className="group flex items-center justify-center md:justify-start text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Generator Refuelling</span>
                </Link>
                <Link
                  href="/services/on-site-fuel-delivery"
                  className="group flex items-center justify-center md:justify-start text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="group-hover:translate-x-1 transition-transform">On-Site Fuel Delivery</span>
                </Link>
                <Link
                  href="/services/bulk-fuel"
                  className="group flex items-center justify-center md:justify-start text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Bulk Fuel Supply</span>
                </Link>
                <Link
                  href="/services/haulage"
                  className="group flex items-center justify-center md:justify-start text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Haulage Services</span>
                </Link>
                <Link
                  href="/services/ulsd"
                  className="group flex items-center justify-center md:justify-start text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="group-hover:translate-x-1 transition-transform">ULSD Supply</span>
                </Link>
              </div>
            </nav>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Company</h4>
            <nav aria-label="Company navigation">
              <div className="space-y-2">
                <Link
                  href="/about"
                  className="group flex items-center justify-center md:justify-start text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                </Link>
                <Link
                  href="/international-trade"
                  className="group flex items-center justify-center md:justify-start text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="group-hover:translate-x-1 transition-transform">International Trade</span>
                </Link>
                <Link
                  href="/blog"
                  className="group flex items-center justify-center md:justify-start text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Blog</span>
                </Link>
                <Link
                  href="/sustainability"
                  className="group flex items-center justify-center md:justify-start text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Sustainability</span>
                </Link>
                <Link
                  href="/contact"
                  className="group flex items-center justify-center md:justify-start text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                </Link>
              </div>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Get In Touch</h4>

            {/* Contact Info */}
            <address className="not-italic space-y-3 mb-6">
              <div className="flex items-center justify-center md:justify-start text-gray-600">
                <MapPin size={16} className="mr-2 text-blue-500 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm">Spanish Town, St. Catherine, Jamaica</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-gray-600">
                <Mail size={16} className="mr-2 text-blue-500 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:shamar@nevloh.com"
                  className="text-sm hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded"
                  aria-label="Send email to shamar@nevloh.com"
                >
                  shamar@nevloh.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start text-gray-600">
                <Phone size={16} className="mr-2 text-blue-500 flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+18764495172"
                  className="text-sm hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded"
                  aria-label="Call us at (876) 449-5172"
                >
                  (876) 449-5172
                </a>
              </div>
            </address>

            {/* Social Media */}
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/nevlohltd?igsh=MW0xMTlpMDhmcXNqNA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleExternalLinkClick('Instagram')}
                className="group flex items-center bg-blue-500/10 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm hover:bg-blue-500/20 transition-all duration-300 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                aria-label="Follow Nevloh Limited on Instagram (opens in new tab)"
              >
                <Instagram size={18} className="text-blue-600 mr-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span className="text-sm text-gray-700 group-hover:text-blue-600">
                  @nevlohltd
                </span>
                <ExternalLink size={12} className="ml-1 text-blue-500 group-hover:text-blue-600 transition-colors" aria-hidden="true" />
              </a>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-3 bg-blue-500/10 rounded-lg backdrop-blur-sm border border-blue-200">
              <h5 className="text-sm font-semibold text-gray-800 mb-2">Business Hours</h5>
              <div className="text-xs text-gray-600 space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Emergency Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* International Trade Disclaimer */}
      <div className="bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-xs text-slate-500 text-center leading-relaxed">
            <span className="font-medium text-slate-600">International Trade Disclosure:</span>{' '}
            International commodities trading is conducted through affiliated entities within the Nevloh Group.
            The specific legal contracting entity is disclosed per transaction. Regional fuel delivery services
            in Jamaica are provided by Nevloh Limited. International trade activities are conducted through
            Nevloh LLC (Wyoming, USA).{' '}
            <Link href="/international-trade" className="text-blue-600 hover:underline">
              Learn more
            </Link>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-200/50 border-t border-blue-300">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <div className="flex items-center mb-2 md:mb-0">
              <span>© {currentYear} Nevloh Limited. All rights reserved.</span>
            </div>
            <nav aria-label="Legal and administrative links">
              <div className="flex items-center space-x-4">
                <Link
                  href="/privacy"
                  className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded px-1"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-400" aria-hidden="true">•</span>
                <Link
                  href="/terms"
                  className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded px-1"
                >
                  Terms of Service
                </Link>
                <span className="text-gray-400" aria-hidden="true">•</span>
                <Link
                  href="/blog"
                  className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded px-1"
                >
                  Blog
                </Link>
                <span className="text-gray-400" aria-hidden="true">•</span>
                <Link
                  href="/login"
                  className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded px-1"
                >
                  Admin Login
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}