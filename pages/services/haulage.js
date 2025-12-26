// pages/services/haulage.js
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { Truck, Shield, Clock, CheckCircle, ArrowRight, Award, Route, FileCheck, Users, BarChart3, MapPin, Phone } from 'lucide-react';
import Breadcrumbs, { breadcrumbConfigs } from '../../components/Breadcrumbs';

export default function HaulageServices() {
  // Enhanced Service Schema
  const haulageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nevloh.com/services/haulage#service",
    "name": "Licensed Petroleum Haulage Services Jamaica",
    "serviceType": "Petroleum Haulage",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.nevloh.com/#organization",
      "name": "Nevloh Limited",
      "telephone": "+1-876-449-5172",
      "email": "shamar@nevloh.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Caymanas Bay",
        "addressLocality": "Spanish Town",
        "addressRegion": "Saint Catherine",
        "addressCountry": "JM"
      }
    },
    "description": "Licensed petroleum haulage contractor providing professional fuel transportation services for petroleum companies across Jamaica. Fully compliant, insured, and safety-certified operations with fleet capacity up to 45,000L per trip.",
    "areaServed": {
      "@type": "Country",
      "name": "Jamaica"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Petroleum Haulage Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bulk Petroleum Transportation",
            "description": "Terminal-to-station delivery up to 45,000L per trip"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Scheduled Route Services",
            "description": "Fixed route scheduling with multi-location deliveries"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Haulage Support",
            "description": "24/7 emergency transportation services"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "64",
      "bestRating": "5"
    }
  };

  // FAQ Schema for better search visibility
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Nevloh Limited a licensed petroleum haulage contractor in Jamaica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Nevloh Limited is a fully licensed petroleum haulage contractor in Jamaica. We are government certified, fully insured with cargo, equipment and liability coverage, and maintain all required safety certifications for petroleum transportation."
        }
      },
      {
        "@type": "Question",
        "name": "What is the maximum fuel capacity per trip?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our heavy duty tankers can transport up to 45,000 litres per trip. We also operate medium tankers (20,000-30,000L) for regional distribution and specialized units (10,000-25,000L) for premium product transportation."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide 24/7 emergency petroleum haulage services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Nevloh Limited provides 24/7 emergency haulage support for urgent petroleum supply requirements across all 14 parishes in Jamaica. Our rapid deployment capability ensures immediate response when needed."
        }
      },
      {
        "@type": "Question",
        "name": "What types of clients do you serve for petroleum haulage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve oil marketing companies, independent distributors, industrial clients, and government agencies. Our services include terminal deliveries, station supply, bulk transportation, and emergency services tailored to each client type."
        }
      }
    ]
  };

  const services = [
    {
      icon: Truck,
      title: 'Bulk Petroleum Transportation',
      description: 'Professional transportation of petroleum products from terminals to distribution points across Jamaica.',
      features: [
        'Terminal-to-station delivery',
        'Multi-product capability',
        'Compartmentalized tankers',
        'Real-time GPS tracking'
      ],
      capacity: 'Up to 45,000L per trip',
      compliance: 'Fully licensed & certified'
    },
    {
      icon: Route,
      title: 'Scheduled Route Services',
      description: 'Regular scheduled deliveries and route optimization for petroleum companies and distributors.',
      features: [
        'Fixed route scheduling',
        'Multi-location deliveries',
        'Route optimization',
        'Delivery confirmation systems'
      ],
      capacity: 'Multiple daily runs',
      compliance: 'Government approved routes'
    },
    {
      icon: Shield,
      title: 'Emergency Haulage Support',
      description: '24/7 emergency transportation services for urgent petroleum supply requirements.',
      features: [
        '24/7 emergency response',
        'Rapid deployment capability',
        'Priority scheduling',
        'Emergency protocol compliance'
      ],
      capacity: 'Immediate response',
      compliance: 'Emergency service certified'
    },
    {
      icon: FileCheck,
      title: 'Compliance & Documentation',
      description: 'Complete regulatory compliance and documentation for all petroleum transportation activities.',
      features: [
        'Full regulatory compliance',
        'Transport documentation',
        'Safety certifications',
        'Insurance coverage'
      ],
      capacity: 'All trip volumes',
      compliance: '100% regulatory adherent'
    }
  ];

  const certifications = [
    {
      title: 'Licensed Haulage Contractor',
      description: 'Officially licensed by Jamaican authorities for petroleum transportation',
      icon: Award,
      details: ['Government licensing', 'Regular inspections', 'Compliance monitoring', 'Renewal certifications']
    },
    {
      title: 'Safety Certifications',
      description: 'Comprehensive safety training and certifications for all operations',
      icon: Shield,
      details: ['Driver safety training', 'Hazmat certifications', 'Emergency response training', 'Equipment safety standards']
    },
    {
      title: 'Insurance Coverage',
      description: 'Full comprehensive insurance for cargo, equipment, and liability',
      icon: FileCheck,
      details: ['Cargo insurance', 'Equipment coverage', 'Liability protection', 'Environmental coverage']
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control and monitoring systems',
      icon: BarChart3,
      details: ['Quality management systems', 'Performance monitoring', 'Continuous improvement', 'Client satisfaction tracking']
    }
  ];

  const fleet = [
    {
      type: 'Heavy Duty Tankers',
      capacity: '35,000 - 45,000L',
      features: ['Multi-compartment', 'Vapor recovery systems', 'GPS tracking', 'Safety equipment'],
      suitable: 'Long-distance terminal deliveries'
    },
    {
      type: 'Medium Tankers',
      capacity: '20,000 - 30,000L',
      features: ['Flexible routing', 'Urban access capability', 'Efficient loading/unloading', 'Real-time monitoring'],
      suitable: 'Regional distribution routes'
    },
    {
      type: 'Specialized Units',
      capacity: '10,000 - 25,000L',
      features: ['Multi-product capability', 'Contamination prevention', 'Precision metering', 'Quality assurance'],
      suitable: 'Premium product transportation'
    }
  ];

  const benefits = [
    {
      title: 'Cost Efficiency',
      description: 'Reduce transportation costs with our efficient haulage operations',
      icon: BarChart3,
      stat: '20%',
      statLabel: 'Cost Reduction'
    },
    {
      title: 'Reliability',
      description: 'Dependable service with on-time delivery guarantee',
      icon: Clock,
      stat: '99.5%',
      statLabel: 'On-Time Delivery'
    },
    {
      title: 'Safety Record',
      description: 'Industry-leading safety standards and incident-free operations',
      icon: Shield,
      stat: 'Zero',
      statLabel: 'Major Incidents'
    },
    {
      title: 'Coverage',
      description: 'Complete island-wide coverage for all petroleum transportation needs',
      icon: MapPin,
      stat: '14',
      statLabel: 'Parishes Served'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Requirements Assessment',
      description: 'Detailed analysis of your transportation needs, routes, volumes, and scheduling requirements.'
    },
    {
      step: '02',
      title: 'Service Planning',
      description: 'Custom transportation plan with route optimization, scheduling, and compliance protocols.'
    },
    {
      step: '03',
      title: 'Contract Agreement',
      description: 'Formal service agreement with clear terms, pricing, performance metrics, and safety standards.'
    },
    {
      step: '04',
      title: 'Operation & Monitoring',
      description: 'Ongoing transportation services with real-time monitoring, reporting, and continuous optimization.'
    }
  ];

  const clientTypes = [
    {
      name: 'Oil Marketing Companies',
      description: 'Major petroleum distributors and marketing companies',
      services: ['Terminal deliveries', 'Station supply', 'Bulk transportation', 'Emergency services']
    },
    {
      name: 'Independent Distributors',
      description: 'Regional and local petroleum distributors',
      services: ['Flexible scheduling', 'Small to medium loads', 'Route optimization', 'Cost-effective solutions']
    },
    {
      name: 'Industrial Clients',
      description: 'Manufacturing and industrial operations',
      services: ['Direct plant delivery', 'Specialized products', 'Custom scheduling', 'Quality assurance']
    },
    {
      name: 'Government Agencies',
      description: 'Government departments and public sector entities',
      services: ['Compliant transportation', 'Documentation support', 'Emergency response', 'Reliable service']
    }
  ];

  return (
    <>
      <Head>
        <title>Licensed Petroleum Haulage Services Jamaica | Professional Fuel Transportation | Nevloh Limited</title>
        <meta name="description" content="Licensed petroleum haulage contractor providing professional fuel transportation services across Jamaica. Up to 45,000L capacity, fully compliant, insured, and safety-certified. Call +1-876-449-5172" />
        <meta name="keywords" content="petroleum haulage Jamaica, licensed haulage contractor, fuel transportation, petroleum logistics, bulk fuel transport, terminal delivery, oil haulage services, tanker truck Jamaica" />

        {/* Robots and indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Geographic targeting */}
        <meta name="geo.region" content="JM" />
        <meta name="geo.placename" content="Jamaica" />
        <meta name="geo.position" content="17.9909;-76.9571" />
        <meta name="ICBM" content="17.9909, -76.9571" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Licensed Petroleum Haulage Services Jamaica | Nevloh Limited" />
        <meta property="og:description" content="Professional petroleum haulage services for oil companies across Jamaica. Licensed contractor with full compliance and safety certifications." />
        <meta property="og:url" content="https://www.nevloh.com/services/haulage" />
        <meta property="og:image" content="https://www.nevloh.com/images/logo.png" />
        <meta property="og:site_name" content="Nevloh Limited" />
        <meta property="og:locale" content="en_JM" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Licensed Petroleum Haulage Services Jamaica | Nevloh Limited" />
        <meta name="twitter:description" content="Professional petroleum haulage services across Jamaica. Licensed, compliant, and safety-certified." />
        <meta name="twitter:image" content="https://www.nevloh.com/images/logo.png" />

        <link rel="canonical" href="https://www.nevloh.com/services/haulage" />
      </Head>

      {/* Service Schema */}
      <Script
        id="haulage-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(haulageSchema)
        }}
      />

      {/* FAQ Schema */}
      <Script
        id="haulage-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen pt-20">

        {/* Breadcrumbs - Properly wrapped with container and padding */}
        <div className="max-w-7xl mx-auto px-4 pt-4">
          <Breadcrumbs items={breadcrumbConfigs.haulage} />
        </div>

        {/* Hero Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Removed redundant "Back to Services" link - breadcrumbs handle this */}

                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                  Licensed Petroleum Haulage Services
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Professional petroleum transportation services for oil marketing companies and
                  distributors across Jamaica. As a licensed haulage contractor, we provide fully
                  compliant, safe, and reliable fuel transportation solutions.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h2 className="font-semibold text-green-800 mb-2">Licensed & Certified</h2>
                  <p className="text-green-700">Government licensed haulage contractor • Fully insured • Safety certified</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                  >
                    Request Partnership <ArrowRight className="ml-2" size={20} aria-hidden="true" />
                  </Link>
                  <a
                    href="tel:+18764495172"
                    className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg border border-blue-200"
                  >
                    <Phone className="mr-2" size={20} aria-hidden="true" />
                    Call (876) 449-5172
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl p-8 shadow-2xl">
                  <Truck className="text-white mb-4" size={64} aria-hidden="true" />
                  <h2 className="text-2xl font-bold text-white mb-4">Professional Haulage Solutions</h2>
                  <ul className="text-slate-100 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 flex-shrink-0" size={16} aria-hidden="true" />
                      <span>Licensed Haulage Contractor</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 flex-shrink-0" size={16} aria-hidden="true" />
                      <span>Fully Compliant Operations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 flex-shrink-0" size={16} aria-hidden="true" />
                      <span>24/7 Emergency Service</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 flex-shrink-0" size={16} aria-hidden="true" />
                      <span>Island-Wide Coverage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Comprehensive Haulage Solutions
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Professional petroleum transportation services tailored for industry partners
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-slate-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <service.icon className="text-slate-600" size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="text-xs font-medium text-blue-800">Capacity</div>
                      <div className="text-sm font-bold text-blue-600">{service.capacity}</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="text-xs font-medium text-green-800">Compliance</div>
                      <div className="text-sm font-bold text-green-600">{service.compliance}</div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} aria-hidden="true" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Licenses & Certifications
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Fully licensed and certified for safe, compliant petroleum transportation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="text-slate-600" size={28} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{cert.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {cert.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center justify-center">
                        <CheckCircle className="text-green-500 mr-1 flex-shrink-0" size={12} aria-hidden="true" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Information */}
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Professional Fleet Capabilities
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Modern, well-maintained fleet designed for safe and efficient petroleum transportation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {fleet.map((vehicle, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{vehicle.type}</h3>
                  <div className="text-2xl font-bold text-slate-600 mb-4">{vehicle.capacity}</div>

                  <ul className="space-y-2 mb-4">
                    {vehicle.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} aria-hidden="true" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-xs font-medium text-gray-500 mb-1">Best Suited For:</div>
                    <div className="text-sm text-gray-700">{vehicle.suitable}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Why Partner With Nevloh Haulage
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Proven performance metrics that deliver value to our petroleum industry partners
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-slate-600" size={28} aria-hidden="true" />
                  </div>
                  <div className="text-3xl font-bold text-slate-600 mb-2">{benefit.stat}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide mb-3">{benefit.statLabel}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Partnership Process
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Simple process from initial assessment to ongoing haulage partnership
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="bg-slate-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <ArrowRight className="text-slate-300 mx-auto" size={24} aria-hidden="true" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Types */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Client Partnership Types
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Flexible haulage solutions for various petroleum industry partners
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {clientTypes.map((client, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{client.name}</h3>
                  <p className="text-gray-600 mb-4">{client.description}</p>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Services Offered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {client.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-slate-600 to-slate-800">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <Users className="mx-auto mb-6 text-white" size={64} aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl mb-8 text-slate-100">
              Join leading petroleum companies who trust Nevloh Limited for their haulage requirements.
              Professional service, competitive rates, and complete compliance.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Partnership Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-300">Licensed</div>
                  <div className="text-slate-100">Government Certified</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">Insured</div>
                  <div className="text-slate-100">Full Coverage</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">24/7</div>
                  <div className="text-slate-100">Emergency Service</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-slate-600 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                Request Partnership Meeting <ArrowRight className="ml-2" size={20} aria-hidden="true" />
              </Link>
              <a
                href="tel:+18764495172"
                className="inline-flex items-center bg-transparent text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white"
              >
                <Phone className="mr-2" size={20} aria-hidden="true" />
                Call (876) 449-5172
              </a>
            </div>

            <div className="mt-8 text-slate-200">
              <p className="text-sm">
                <strong>Licensed Haulage Contractor:</strong> Serving petroleum industry partners across Jamaica
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}