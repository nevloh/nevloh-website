import React, { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import {
  Fuel,
  Truck,
  Shield,
  Leaf,
  Award,
  TrendingUp,
  Globe,
  CheckCircle,
  Zap,
  Clock,
  Phone,
  Star,
  ArrowRight,
  BarChart3,
  Wrench,
  DollarSign,
  Target,
  Users,
  Calendar,
  MapPin,
  MessageSquare
} from 'lucide-react';

export default function ULSDService() {
  const [activeFeature, setActiveFeature] = useState(0);

  const ulsdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ultra Low Sulphur Diesel (ULSD) Supply",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nevloh Limited",
      "telephone": "+1-876-449-5172",
      "email": "shamar@nevloh.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Spanish Town",
        "addressRegion": "Saint Catherine",
        "addressCountry": "Jamaica"
      }
    },
    "description": "Premium Ultra Low Sulphur Diesel supply and delivery across Jamaica. 90% cleaner emissions, 25% longer engine life, environmentally friendly fuel for commercial and industrial use.",
    "serviceType": "Ultra Low Sulphur Diesel Supply",
    "areaServed": "Jamaica",
    "offers": {
      "@type": "Offer",
      "description": "Professional ULSD supply with delivery across all 14 parishes in Jamaica, meeting international quality standards"
    }
  };

  const ulsdBenefits = [
    {
      icon: Leaf,
      title: "Environmental Protection",
      description: "Significantly reduces harmful emissions and particulate matter across Jamaica",
      details: [
        "90% less sulfur content than conventional diesel",
        "Reduces air pollution and acid rain in urban areas",
        "Protects local Jamaican communities and ecosystems",
        "Meets international environmental standards and regulations"
      ],
      color: "green"
    },
    {
      icon: Wrench,
      title: "Engine Performance",
      description: "Superior engine protection and enhanced performance for Jamaica's climate",
      details: [
        "Reduces engine wear and corrosion in tropical conditions",
        "Extends engine life by up to 25% in Caribbean climate",
        "Improves fuel system cleanliness and efficiency",
        "Better cold start performance during cooler months"
      ],
      color: "blue"
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "Long-term savings through reduced maintenance costs for Jamaican businesses",
      details: [
        "Lower maintenance and repair costs for fleet operations",
        "Reduced downtime and extended service intervals",
        "Better fuel economy and operational efficiency",
        "Higher resale value for vehicles and equipment"
      ],
      color: "purple"
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Stay ahead of environmental regulations in Jamaica and internationally",
      details: [
        "Meets EURO VI emission standards for international operations",
        "Complies with EPA regulations for export markets",
        "Future-proof your fleet for upcoming regulations",
        "Avoid regulatory penalties and compliance issues"
      ],
      color: "orange"
    }
  ];

  const globalTrends = [
    {
      country: "United States",
      year: "2006",
      standard: "EPA Mandated ULSD",
      impact: "99% reduction in sulfur content nationwide"
    },
    {
      country: "European Union",
      year: "2009",
      standard: "EURO VI Standard",
      impact: "Mandatory ULSD for all commercial vehicles"
    },
    {
      country: "Japan",
      year: "2007",
      standard: "JIS K 2204 Standard",
      impact: "Leading Asia in clean diesel adoption"
    },
    {
      country: "Canada",
      year: "2006",
      standard: "Canadian Environmental Protection Act",
      impact: "Synchronized with US standards"
    }
  ];

  const specifications = {
    "Sulfur Content": "≤ 15 ppm (parts per million)",
    "Cetane Number": "≥ 51",
    "Density @ 15°C": "820-845 kg/m³",
    "Flash Point": "≥ 55°C",
    "Cloud Point": "≤ 4°C",
    "Pour Point": "≤ -6°C",
    "Water Content": "≤ 200 mg/kg",
    "Ash Content": "≤ 0.01% m/m"
  };

  const services = [
    {
      icon: Truck,
      title: "Reliable ULSD Delivery",
      description: "On-time premium fuel delivery across all 14 Jamaican parishes",
      features: ["Same-day delivery available", "GPS tracked vehicles", "Professional certified drivers", "Flexible scheduling"]
    },
    {
      icon: Clock,
      title: "24/7 Emergency ULSD Service",
      description: "Round-the-clock premium fuel support for critical operations",
      features: ["Emergency hotline available", "Priority response within 2 hours", "Weekend and holiday service", "Hurricane preparation support"]
    },
    {
      icon: Shield,
      title: "ULSD Quality Assurance",
      description: "Certified premium fuel quality and testing for peace of mind",
      features: ["Laboratory tested quality", "International certificates", "Proper storage standards", "Contamination prevention"]
    },
    {
      icon: Users,
      title: "Premium Customer Support",
      description: "Dedicated account management for ULSD customers",
      features: ["Personal account manager", "Volume discounts available", "Flexible payment terms", "Usage tracking and reporting"]
    }
  ];

  const industries = [
    { name: "Transportation & Logistics", icon: Truck, usage: "Fleet operations, delivery services across Jamaica" },
    { name: "Construction", icon: Wrench, usage: "Heavy machinery, generators for construction projects" },
    { name: "Agriculture", icon: Leaf, usage: "Tractors, irrigation systems for farming operations" },
    { name: "Power Generation", icon: Zap, usage: "Backup generators, remote power solutions" },
    { name: "Marine", icon: Globe, usage: "Fishing vessels, cargo ships in Jamaican waters" },
    { name: "Mining", icon: Target, usage: "Mining equipment, transport vehicles for operations" }
  ];

  const testimonials = [
    {
      name: "Marcus Thompson",
      company: "Thompson Logistics Ltd., Kingston",
      text: "Switching to Nevloh's ULSD reduced our maintenance costs by 30%. Our fleet runs smoother and cleaner across all parishes.",
      rating: 5
    },
    {
      name: "Patricia Williams",
      company: "Green Valley Farms, Saint Catherine",
      text: "The environmental benefits are clear, and our equipment lasts longer. Excellent service from the Nevloh team.",
      rating: 5
    },
    {
      name: "David Chen",
      company: "Island Construction Co., Spanish Town",
      text: "Reliable delivery and premium quality fuel. Our generators run more efficiently with ULSD during power outages.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Ultra Low Sulphur Diesel (ULSD) Supply Jamaica | Premium Clean Fuel | Nevloh Limited</title>
        <meta name="description" content="Premium Ultra Low Sulphur Diesel (ULSD) supply across Jamaica. 90% cleaner emissions, 25% longer engine life. Professional delivery to all 14 parishes with quality guaranteed." />
        <meta name="keywords" content="Ultra Low Sulphur Diesel Jamaica, ULSD fuel supply, premium diesel Jamaica, clean fuel delivery, environmental diesel, low sulfur diesel, ULSD supplier Kingston, Spanish Town ULSD" />

        <meta property="og:title" content="Ultra Low Sulphur Diesel Supply | Premium Clean Fuel Jamaica" />
        <meta property="og:description" content="Premium ULSD supply across Jamaica. 90% cleaner emissions, 25% longer engine life. Professional delivery with quality guaranteed." />
        <meta property="og:url" content="https://nevloh.com/services/ulsd" />
        <meta property="og:image" content="https://nevloh.com/images/ulsd-service.webp" />

        <meta name="twitter:title" content="Ultra Low Sulphur Diesel Supply | Premium Clean Fuel Jamaica" />
        <meta name="twitter:description" content="Premium ULSD supply across Jamaica. 90% cleaner emissions, 25% longer engine life." />
        <meta name="twitter:image" content="https://nevloh.com/images/ulsd-service.webp" />

        <link rel="canonical" href="https://nevloh.com/services/ulsd" />
      </Head>

      <Script
        id="ulsd-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ulsdSchema)
        }}
      />

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <Link
                    href="/services"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    ← Back to Services
                  </Link>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                  Ultra Low Sulphur Diesel
                  <span className="block text-green-600">(ULSD) Supply</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Jamaica's premier supplier of environmentally-friendly, high-performance Ultra Low Sulphur Diesel.
                  Experience 90% cleaner emissions, 25% longer engine life, and superior performance
                  with professional delivery across all 14 parishes.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-green-800 mb-2">Premium Quality Benefits</h3>
                  <p className="text-green-700">90% cleaner emissions • 25% longer engine life • International standards</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                  >
                    Get ULSD Quote <ArrowRight className="ml-2" size={20} />
                  </Link>
                  <a
                    href="tel:+18764495172"
                    className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg border border-blue-200"
                  >
                    Call (876) 449-5172
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-8 shadow-2xl">
                  <Fuel className="text-white mb-4" size={64} />
                  <h3 className="text-2xl font-bold text-white mb-4">Premium ULSD Benefits</h3>
                  <ul className="text-green-100 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <span>90% Less Sulfur Content</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <span>25% Longer Engine Life</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <span>Cleaner Emissions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <span>International Standards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Leaf, number: "90%", label: "Less Sulfur Content", color: "green" },
                { icon: Wrench, number: "25%", label: "Longer Engine Life", color: "blue" },
                { icon: Globe, number: "50+", label: "Countries Using ULSD", color: "purple" },
                { icon: Award, number: "100%", label: "Quality Guaranteed", color: "orange" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                      <IconComponent size={24} className={`text-${stat.color}-600`} />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ULSD Benefits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Why Choose Ultra Low Sulphur Diesel in Jamaica?
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Discover the comprehensive benefits that make ULSD the preferred choice for forward-thinking businesses
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Benefits List */}
              <div className="space-y-4">
                {ulsdBenefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  const isActive = activeFeature === index;
                  const colorClasses = {
                    green: 'bg-green-100 text-green-600',
                    blue: 'bg-blue-100 text-blue-600',
                    purple: 'bg-purple-100 text-purple-600',
                    orange: 'bg-orange-100 text-orange-600'
                  };

                  return (
                    <div
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`cursor-pointer transition-all duration-300 p-6 rounded-2xl ${
                        isActive ? 'bg-white shadow-lg transform scale-105' : 'bg-white/50 hover:bg-white/80'
                      }`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setActiveFeature(index);
                        }
                      }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[benefit.color]}`}>
                          <IconComponent size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                        <ArrowRight size={20} className={`text-gray-400 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Feature Details */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    {React.createElement(ulsdBenefits[activeFeature].icon, {
                      size: 32,
                      className: `text-${ulsdBenefits[activeFeature].color}-600`
                    })}
                    <h3 className="text-2xl font-bold text-gray-800">
                      {ulsdBenefits[activeFeature].title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {ulsdBenefits[activeFeature].description}
                  </p>

                  <div className="space-y-3">
                    {ulsdBenefits[activeFeature].details.map((detail, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Trends */}
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Global ULSD Adoption
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Leading developed countries have mandated ULSD adoption. Join the global movement towards cleaner diesel technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {globalTrends.map((trend, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-center space-y-4">
                    <h3 className="text-lg font-bold text-gray-800">{trend.country}</h3>
                    <div className="space-y-2">
                      <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Since {trend.year}
                      </div>
                      <p className="font-medium text-gray-700 text-sm">{trend.standard}</p>
                      <p className="text-xs text-gray-600">{trend.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">ULSD: The Global Standard, Now in Jamaica</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <BarChart3 size={32} className="mx-auto" />
                  <div className="text-2xl font-bold">85%</div>
                  <p className="text-sm opacity-90">of developed countries mandate ULSD</p>
                </div>
                <div className="space-y-2">
                  <TrendingUp size={32} className="mx-auto" />
                  <div className="text-2xl font-bold">$50B+</div>
                  <p className="text-sm opacity-90">global ULSD market value</p>
                </div>
                <div className="space-y-2">
                  <Globe size={32} className="mx-auto" />
                  <div className="text-2xl font-bold">2030</div>
                  <p className="text-sm opacity-90">projected global adoption</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                    Technical Specifications
                  </h2>
                  <p className="text-xl text-gray-700">
                    Our ULSD meets and exceeds international quality standards for Jamaica's tropical climate
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="space-y-4">
                    {Object.entries(specifications).map(([spec, value], index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium text-gray-700">{spec}</span>
                        <span className="font-bold text-blue-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                  <Award size={24} className="text-green-600" />
                  <span className="text-green-800 font-medium">
                    Certified to meet ASTM D975 and EN 590 international standards
                  </span>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Industries We Serve</h3>
                  <div className="space-y-4">
                    {industries.map((industry, index) => {
                      const IconComponent = industry.icon;
                      return (
                        <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                              <IconComponent size={24} className="text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-800">{industry.name}</h4>
                              <p className="text-sm text-gray-600">{industry.usage}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Premium ULSD Services
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Professional Ultra Low Sulphur Diesel delivery with comprehensive support services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                      <IconComponent size={32} className="text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                What Our Customers Say About ULSD
              </h2>
              <p className="text-xl text-gray-700">
                Real experiences from Jamaican businesses using our Ultra Low Sulphur Diesel
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-green-800">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <Fuel className="mx-auto mb-6 text-white" size={64} />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Upgrade to Ultra Low Sulphur Diesel?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Join forward-thinking Jamaican businesses choosing cleaner, more efficient fuel.
              Contact us today for premium ULSD delivery across all parishes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                Get ULSD Quote <ArrowRight className="ml-2" size={20} />
              </Link>
              <a
                href="tel:+18764495172"
                className="inline-flex items-center bg-transparent text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white"
              >
                <Phone className="mr-2" size={20} />
                Call (876) 449-5172
              </a>
            </div>

            <div className="text-green-100">
              <p className="text-sm">
                <strong>Premium Quality:</strong> Laboratory tested • International standards • Professional delivery
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}