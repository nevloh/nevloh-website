// components/HeroSection.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Fuel, MapPin } from 'lucide-react';

export default function HeroSection() {
  // Analytics tracking for CTA clicks
  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Hero CTA',
        event_label: 'Request Quote',
        value: 1
      });
    }
  };

  return (
    <>
      {/* Structured Data for Hero Section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "On-Site Fuel Delivery",
            "provider": {
              "@type": "Organization",
              "name": "Nevloh Limited",
              "url": "https://nevloh.com",
              "logo": "https://nevloh.com/logo.png"
            },
            "description": "Trusted partner for on-site fuel solutions in Jamaica - delivering fast, safe, and reliable energy where you need it most",
            "areaServed": {
              "@type": "Country",
              "name": "Jamaica"
            },
            "serviceType": "Fuel Delivery Service",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Fuel Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "On-Site Fuel Delivery"
                  }
                }
              ]
            }
          })
        }}
      />

      <section 
        className="relative flex flex-col items-center justify-center py-20 px-4 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden text-center"
        aria-labelledby="hero-heading"
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <circle cx="20" cy="80" r="15" fill="rgba(100, 150, 255, 0.5)"></circle>
            <circle cx="80" cy="20" r="20" fill="rgba(0, 100, 255, 0.4)"></circle>
            <path d="M0 0 L100 0 L100 30 C80 50, 20 50, 0 30 Z" fill="rgba(200, 220, 255, 0.3)"></path>
          </svg>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute top-10 left-10 w-4 h-4 bg-blue-300 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-20 right-20 w-6 h-6 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-3 h-3 bg-blue-500 rounded-full opacity-50 animate-ping"></div>
        </div>

        {/* Logo with Next.js Image Optimization */}
        <div className="relative z-10 mb-6 flex justify-center">
          <Image
            src="/images/logo.png" // Logo is in public/images folder
            alt="Nevloh Limited - Premium Fuel Delivery Services in Jamaica"
            width={144} // w-36 = 144px
            height={144}
            className="rounded-full shadow-lg border-2 border-white hover:shadow-xl transition-shadow duration-300 mx-auto"
            priority // Load immediately as it's above the fold
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLDSEaxBkjlcbPfK2g=="
            onError={(e) => {
              e.currentTarget.src = '/logo-fallback.png'; // Fallback image
            }}
          />
        </div>

        {/* Main Heading */}
        <h1 
          id="hero-heading"
          className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-blue-900 drop-shadow-md mb-6 text-center"
        >
          Delivering Fuel, <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">Driving Success</span>
        </h1>

        {/* Subtitle */}
        <p className="relative z-10 text-gray-700 text-lg sm:text-xl max-w-3xl leading-relaxed mb-8 text-center mx-auto">
          Your trusted partner for on-site fuel solutions in Jamaica — {' '}
          <br className="hidden sm:inline" />
          delivering fast, safe, and reliable energy where you need it most.
        </p>

        {/* Key Benefits */}
        <div className="relative z-10 flex flex-wrap justify-center gap-4 mb-10 max-w-2xl mx-auto">
          <div className="flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-lg px-6 py-3 shadow-md">
            <Fuel size={20} className="text-blue-600 mr-2" aria-hidden="true" />
            <span className="text-sm font-medium text-blue-900">Island-wide Delivery</span>
          </div>
          <div className="flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-lg px-6 py-3 shadow-md">
            <MapPin size={20} className="text-blue-600 mr-2" aria-hidden="true" />
            <span className="text-sm font-medium text-blue-900">On-Site Solutions</span>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="relative z-10 space-y-4 text-center">
          <Link
            href="/contact"
            onClick={handleCTAClick}
            className="inline-block bg-blue-800 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 group"
            aria-label="Request a fuel delivery quote from Nevloh Limited"
          >
            Request A Quote
            <ArrowRight size={20} className="inline ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>

          {/* Secondary CTA */}
          <div className="text-sm text-gray-600">
            <span>or call us directly at </span>
            <a 
              href="tel:+18764495172" 
              className="font-semibold text-blue-800 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
              aria-label="Call Nevloh Limited at (876) 449-5172"
            >
              (876) 449-5172
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="relative z-10 mt-12 flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2" aria-hidden="true"></div>
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2" aria-hidden="true"></div>
            <span>Trusted Since 2022</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
}