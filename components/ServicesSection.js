// components/ServicesSection.js
import React from 'react';
import Link from 'next/link';
import { Truck, Users, Fuel, ArrowRight, Clock, Shield, CheckCircle, MapPin, Zap, Building2 } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 'fleet-refuelling',
      title: 'Fleet Refuelling',
      description: 'Professional on-site refuelling services for commercial fleets. Scheduled deliveries, emergency support, and comprehensive fuel management.',
      icon: Truck,
      color: 'blue',
      features: ['Scheduled Deliveries', 'Emergency Service', 'Real-time Tracking', 'Cost Optimization'],
      industries: ['Transportation', 'Logistics', 'Construction', 'Government'],
      href: '/services/fleet-refuelling'
    },
    {
      id: 'generator-refuelling',
      title: 'Generator Refuelling Services',
      description: 'Ensure uninterrupted power with reliable generator fuel delivery. Perfect for hospitals, data centers, and critical facilities.',
      icon: Zap,
      color: 'green',
      features: ['24/7 Emergency Response', 'Remote Monitoring', 'Critical Facility Support', 'Automated Alerts'],
      industries: ['Healthcare', 'Data Centers', 'Banking', 'Manufacturing'],
      href: '/services/generator-refuelling'
    },
    {
      id: 'on-site-fuel-delivery',
      title: 'On-Site Fuel Delivery',
      description: 'Direct fuel delivery to construction sites, farms, remote areas - anywhere across Jamaica where you need fuel.',
      icon: MapPin,
      color: 'purple',
      features: ['Remote Location Access', 'Flexible Scheduling', 'GPS Tracking', 'Safety Certified'],
      industries: ['Construction', 'Agriculture', 'Mining', 'Events'],
      href: '/services/on-site-fuel-delivery'
    },
    {
      id: 'bulk-fuel-supply',
      title: 'Bulk Fuel Supply',
      description: 'Large volume fuel supply for industrial operations. Competitive bulk pricing with reliable delivery and professional service.',
      icon: Building2,
      color: 'orange',
      features: ['Volume Discounts', 'Industrial Grade', 'Custom Schedules', 'Dedicated Support'],
      industries: ['Manufacturing', 'Industrial', 'Government', 'Marine'],
      href: '/services/bulk-fuel'
    },
    {
      id: 'haulage-services',
      title: 'Haulage Services',
      description: 'Licensed petroleum haulage contractor providing professional fuel transportation for petroleum companies across Jamaica.',
      icon: Users,
      color: 'slate',
      features: ['Licensed Contractor', 'Compliant Operations', 'Professional Fleet', 'B2B Partnership'],
      industries: ['Oil Marketing', 'Distributors', 'Industrial', 'Government'],
      href: '/services/haulage'
    }
  ];

  // Analytics tracking for service clicks
  const handleServiceClick = (serviceName) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Services',
        event_label: serviceName,
        value: 1
      });
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        icon: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        title: 'text-blue-800',
        hover: 'hover:border-blue-300 hover:bg-blue-100',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      green: {
        icon: 'text-green-600',
        bg: 'bg-green-50',
        border: 'border-green-200',
        title: 'text-green-800',
        hover: 'hover:border-green-300 hover:bg-green-100',
        button: 'bg-green-600 hover:bg-green-700'
      },
      purple: {
        icon: 'text-purple-600',
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        title: 'text-purple-800',
        hover: 'hover:border-purple-300 hover:bg-purple-100',
        button: 'bg-purple-600 hover:bg-purple-700'
      },
      orange: {
        icon: 'text-orange-600',
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        title: 'text-orange-800',
        hover: 'hover:border-orange-300 hover:bg-orange-100',
        button: 'bg-orange-600 hover:bg-orange-700'
      },
      slate: {
        icon: 'text-slate-600',
        bg: 'bg-slate-50',
        border: 'border-slate-200',
        title: 'text-slate-800',
        hover: 'hover:border-slate-300 hover:bg-slate-100',
        button: 'bg-slate-600 hover:bg-slate-700'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <>
      {/* Structured Data for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "provider": {
              "@type": "Organization",
              "name": "Nevloh Limited",
              "url": "https://www.nevloh.com"
            },
            "serviceType": "Fuel Delivery Services",
            "areaServed": {
              "@type": "Country",
              "name": "Jamaica"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Fuel Services",
              "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description,
                  "url": `https://www.nevloh.com${service.href}`
                }
              }))
            }
          })
        }}
      />

      <section
        className="py-16 sm:py-20 px-6 bg-white shadow-inner"
        aria-labelledby="services-heading"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4"
            >
              Our Comprehensive Services
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              We provide a complete range of professional fuel delivery solutions to meet the diverse needs
              of businesses across Jamaica. From emergency deliveries to scheduled fleet services and industrial supply.
            </p>

            {/* Service Highlights */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                <Clock size={16} className="text-blue-600 mr-2" aria-hidden="true" />
                <span className="text-sm font-medium text-blue-800">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center bg-green-50 px-4 py-2 rounded-full">
                <MapPin size={16} className="text-green-600 mr-2" aria-hidden="true" />
                <span className="text-sm font-medium text-green-800">Island-wide Delivery</span>
              </div>
              <div className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
                <Shield size={16} className="text-purple-600 mr-2" aria-hidden="true" />
                <span className="text-sm font-medium text-purple-800">Licensed & Insured</span>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.slice(0, 3).map((service, index) => {
              const IconComponent = service.icon;
              const colors = getColorClasses(service.color);

              return (
                <article
                  key={service.id}
                  className={`${colors.bg} shadow-lg rounded-xl p-8 transform hover:scale-105 transition-all duration-300 flex flex-col border ${colors.border} ${colors.hover} group cursor-pointer`}
                  onClick={() => handleServiceClick(service.title)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Learn more about ${service.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleServiceClick(service.title);
                    }
                  }}
                >
                  {/* Icon */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      <IconComponent size={32} className={colors.icon} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center flex-grow">
                    <h3 className={`text-xl font-bold mb-3 ${colors.title}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" aria-hidden="true" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Industries Served */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Industries Served:</h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {service.industries.map((industry, industryIndex) => (
                          <span
                            key={industryIndex}
                            className="inline-block bg-white px-2 py-1 rounded-full text-xs text-gray-600 border"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Learn More Button */}
                    <Link
                      href={service.href}
                      className={`inline-flex items-center ${colors.button} text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 group-hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleServiceClick(`${service.title} - Learn More`);
                      }}
                    >
                      Learn More
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Second Row - Remaining Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {services.slice(3).map((service, index) => {
              const IconComponent = service.icon;
              const colors = getColorClasses(service.color);

              return (
                <article
                  key={service.id}
                  className={`${colors.bg} shadow-lg rounded-xl p-8 transform hover:scale-105 transition-all duration-300 flex flex-col border ${colors.border} ${colors.hover} group cursor-pointer`}
                  onClick={() => handleServiceClick(service.title)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Learn more about ${service.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleServiceClick(service.title);
                    }
                  }}
                >
                  {/* Icon */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      <IconComponent size={32} className={colors.icon} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center flex-grow">
                    <h3 className={`text-xl font-bold mb-3 ${colors.title}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" aria-hidden="true" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Industries Served */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Industries Served:</h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {service.industries.map((industry, industryIndex) => (
                          <span
                            key={industryIndex}
                            className="inline-block bg-white px-2 py-1 rounded-full text-xs text-gray-600 border"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Learn More Button */}
                    <Link
                      href={service.href}
                      className={`inline-flex items-center ${colors.button} text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 group-hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleServiceClick(`${service.title} - Learn More`);
                      }}
                    >
                      Learn More
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* View All Services Button */}
          <div className="text-center mb-12">
            <Link
              href="/services"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              onClick={() => handleServiceClick('View All Services')}
            >
              View All Services
              <ArrowRight size={20} className="ml-2" aria-hidden="true" />
            </Link>
          </div>

          {/* Additional Services */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Need Something Different?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We offer customized fuel solutions tailored to your specific requirements.
              Contact us to discuss your unique needs and get a personalized quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center"
                onClick={() => handleServiceClick('Custom Solutions - Contact')}
              >
                <Fuel size={20} className="mr-2" aria-hidden="true" />
                Request Custom Quote
              </Link>
              <a
                href="tel:+18764495172"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center"
                onClick={() => handleServiceClick('Custom Solutions - Call')}
                aria-label="Call Nevloh Limited for custom fuel solutions"
              >
                <Clock size={20} className="mr-2" aria-hidden="true" />
                Call (876) 449-5172
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Satisfied Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-600">Reliable Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">2022</div>
                <div className="text-sm text-gray-600">Serving Since</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}