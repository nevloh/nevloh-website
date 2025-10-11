// components/CallToAction.js
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Fuel, Calculator, Phone, Clock, Shield, MapPin, Star, CheckCircle } from 'lucide-react';

export default function CallToAction() {
  const handleQuoteClick = () => {
    // Optional: Add analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Get Free Quote',
        value: 1
      });
    }
  };

  const benefits = [
    {
      icon: Calculator,
      title: "Free Quote",
      description: "No obligation pricing"
    },
    {
      icon: Phone,
      title: "Expert Consultation",
      description: "Professional guidance"
    },
    {
      icon: Fuel,
      title: "Custom Solutions",
      description: "Tailored to your needs"
    }
  ];

  const guarantees = [
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      subtitle: "Available across Jamaica"
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      subtitle: "Fully compliant operations"
    },
    {
      icon: MapPin,
      title: "Island-Wide Coverage",
      subtitle: "All 14 parishes served"
    },
    {
      icon: Star,
      title: "5-Star Service",
      subtitle: "Customer satisfaction guaranteed"
    }
  ];

  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-[url('/images/fuel-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="text-center text-white mb-16">
          {/* Icon */}
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <Fuel size={40} className="text-white" />
          </div>

          {/* Main Heading */}
          <h2
            id="cta-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Fuel Operations?
            </span>
          </h2>

          {/* Subheading */}
          <p className="mb-12 max-w-3xl mx-auto text-xl leading-relaxed text-blue-100">
            Join hundreds of satisfied businesses across Jamaica who trust Nevloh Limited
            for reliable, efficient, and professional fuel delivery services. Get started today
            with a free consultation and custom quote.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="/contact"
              onClick={handleQuoteClick}
              className="group relative inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-5 rounded-full text-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
              aria-label="Get a free fuel management quote from Nevloh Limited"
            >
              <span className="relative z-10">Get Free Quote Now</span>
              <ArrowRight size={24} className="ml-3 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            </Link>

            <a
              href="tel:+18764495172"
              className="group flex items-center bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50"
              aria-label="Call Nevloh Limited for immediate service"
            >
              <Phone size={20} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
              Call: (876) 449-5172
            </a>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <IconComponent size={28} className="text-gray-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-blue-200">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Service Guarantees */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Why Choose Nevloh Limited?
            </h3>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Professional fuel delivery services you can depend on, backed by our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => {
              const IconComponent = guarantee.icon;
              return (
                <div key={index} className="text-center text-white">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h4 className="font-bold mb-2 text-lg">{guarantee.title}</h4>
                  <p className="text-blue-200 text-sm">{guarantee.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20">
            <div className="flex items-center text-white">
              <CheckCircle size={16} className="text-green-400 mr-2" />
              <span className="text-sm font-medium">500+ Satisfied Customers</span>
            </div>
            <div className="flex items-center text-white">
              <CheckCircle size={16} className="text-green-400 mr-2" />
              <span className="text-sm font-medium">ULSD Available</span>
            </div>
            <div className="flex items-center text-white">
              <CheckCircle size={16} className="text-green-400 mr-2" />
              <span className="text-sm font-medium">Since 2022</span>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="mt-8 text-blue-200">
            <p className="text-sm">
              Prefer to learn more first?{' '}
              <Link
                href="/services"
                className="text-yellow-300 hover:text-yellow-200 underline font-medium transition-colors"
                aria-label="Explore Nevloh Limited fuel services"
              >
                Explore our services
              </Link>
              {' '}or{' '}
              <Link
                href="/about"
                className="text-yellow-300 hover:text-yellow-200 underline font-medium transition-colors"
                aria-label="Learn about Nevloh Limited company"
              >
                learn about our company
              </Link>
            </p>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-red-600/20 backdrop-blur-md border border-red-400/30 rounded-full px-6 py-3 text-white">
            <div className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium">
              Emergency Fuel Delivery Available 24/7 - Call (876) 449-5172
            </span>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Professional Fuel Delivery Services",
            "provider": {
              "@type": "Organization",
              "name": "Nevloh Limited",
              "url": "https://www.nevloh.com",
              "telephone": "+1-876-449-5172"
            },
            "description": "Professional fuel management and delivery services for businesses in Jamaica",
            "areaServed": {
              "@type": "Country",
              "name": "Jamaica"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Fuel Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Ultra Low Sulphur Diesel Delivery"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Fleet Refuelling Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Fuel Delivery"
                  }
                }
              ]
            }
          })
        }}
      />
    </section>
  );
}