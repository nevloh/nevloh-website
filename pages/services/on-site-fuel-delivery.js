// pages/services/on-site-fuel-delivery.js
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { MapPin, Clock, Fuel, CheckCircle, ArrowRight, Construction, Tractor, Mountain, Building } from 'lucide-react';
import Breadcrumbs, { breadcrumbConfigs } from '../../components/Breadcrumbs';

export default function OnSiteFuelDelivery() {
  // Enhanced Service Schema
  const onSiteFuelSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nevloh.com/services/on-site-fuel-delivery#service",
    "name": "On-Site Fuel Delivery Services Jamaica",
    "serviceType": "On-Site Fuel Delivery",
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
    "description": "Professional on-site fuel delivery services to construction sites, farms, remote locations, and anywhere across Jamaica where traditional fuel stations aren't accessible. 24/7 emergency service available.",
    "areaServed": {
      "@type": "Country",
      "name": "Jamaica"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "On-Site Fuel Delivery Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Construction Site Fuel Delivery",
            "description": "Heavy machinery and equipment refuelling at job sites"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Agricultural Fuel Delivery",
            "description": "Farm equipment refuelling with seasonal delivery programs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Remote Location Fuel Delivery",
            "description": "Off-road delivery capability to the most challenging locations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Fuel Delivery",
            "description": "24/7 emergency fuel supply for critical situations"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
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
        "name": "Do you deliver fuel to construction sites in Jamaica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Nevloh Limited provides professional on-site fuel delivery to construction sites across all 14 parishes in Jamaica. We refuel heavy machinery and equipment directly at your job site with flexible scheduling and safety-compliant procedures."
        }
      },
      {
        "@type": "Question",
        "name": "Can you deliver fuel to remote locations in Jamaica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our fleet has off-road delivery capability to reach the most challenging locations across Jamaica. We use GPS tracking and navigation to access remote farms, mining sites, forestry operations, and other hard-to-reach areas."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you provide on-site fuel delivery for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve construction & infrastructure, agriculture & farming, mining operations, forestry & logging, emergency services, event management, transportation hubs, and telecommunications tower sites across Jamaica."
        }
      },
      {
        "@type": "Question",
        "name": "Is emergency on-site fuel delivery available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Nevloh Limited offers 24/7 emergency on-site fuel delivery across Jamaica. Call +1-876-449-5172 for immediate assistance with urgent fuel requirements at any location."
        }
      }
    ]
  };

  const locations = [
    {
      icon: Construction,
      title: 'Construction Sites',
      description: 'Keep your construction equipment running with reliable on-site fuel delivery to any job site.',
      features: [
        'Heavy machinery refuelling',
        'Flexible delivery schedules',
        'Safety-compliant procedures',
        'Multiple equipment support'
      ],
      benefits: [
        'Reduce project delays',
        'Eliminate equipment downtime',
        'Focus on construction work',
        'Improved site efficiency'
      ]
    },
    {
      icon: Tractor,
      title: 'Agricultural Operations',
      description: 'Support your farming operations with direct fuel delivery to fields and rural locations.',
      features: [
        'Farm equipment refuelling',
        'Seasonal delivery programs',
        'Rural location access',
        'Bulk quantity options'
      ],
      benefits: [
        'Maximize farming time',
        'Reduce operational costs',
        'Seasonal flexibility',
        'Reliable rural service'
      ]
    },
    {
      icon: Mountain,
      title: 'Remote Locations',
      description: 'Reach the most challenging locations across Jamaica where traditional delivery can\'t go.',
      features: [
        'Off-road delivery capability',
        'GPS tracking and navigation',
        'Weather-adaptable service',
        'Emergency access protocols'
      ],
      benefits: [
        'Access anywhere in Jamaica',
        'Reliable remote service',
        'Professional expertise',
        'Emergency support available'
      ]
    },
    {
      icon: Building,
      title: 'Special Events & Projects',
      description: 'Temporary fuel supply for events, festivals, emergency situations, and special projects.',
      features: [
        'Event-specific planning',
        'Temporary fuel storage',
        'Custom delivery schedules',
        'Emergency response capability'
      ],
      benefits: [
        'Event success assurance',
        'Flexible service options',
        'Professional coordination',
        'Stress-free planning'
      ]
    }
  ];

  const serviceFeatures = [
    {
      title: 'Anywhere in Jamaica',
      description: 'We deliver to all 14 parishes, from urban centers to the most remote rural locations',
      icon: MapPin,
      stat: '100%',
      statLabel: 'Coverage'
    },
    {
      title: 'Flexible Scheduling',
      description: 'Choose from scheduled deliveries, on-demand service, or emergency response',
      icon: Clock,
      stat: '24/7',
      statLabel: 'Available'
    },
    {
      title: 'Premium ULSD',
      description: 'High-quality Ultra Low Sulphur Diesel for optimal equipment performance',
      icon: Fuel,
      stat: '90%',
      statLabel: 'Cleaner Emissions'
    },
    {
      title: 'Safety First',
      description: 'Licensed technicians following strict safety protocols and environmental guidelines',
      icon: CheckCircle,
      stat: '100%',
      statLabel: 'Safety Compliant'
    }
  ];

  const deliveryProcess = [
    {
      step: '01',
      title: 'Location Assessment',
      description: 'We evaluate your site accessibility, fuel requirements, and optimal delivery approach for your specific location.'
    },
    {
      step: '02',
      title: 'Custom Planning',
      description: 'Create a tailored delivery plan considering your schedule, equipment needs, and site constraints.'
    },
    {
      step: '03',
      title: 'Professional Delivery',
      description: 'Our certified technicians deliver premium fuel safely and efficiently to your exact location.'
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'Continuous service with flexible scheduling adjustments and emergency support when needed.'
    }
  ];

  const industries = [
    { name: 'Construction & Infrastructure', description: 'Heavy machinery and equipment fuel' },
    { name: 'Agriculture & Farming', description: 'Tractors, harvesters, and farm equipment' },
    { name: 'Mining Operations', description: 'Remote mining sites and heavy equipment' },
    { name: 'Forestry & Logging', description: 'Remote forest operations and machinery' },
    { name: 'Emergency Services', description: 'Disaster response and emergency operations' },
    { name: 'Event Management', description: 'Festivals, concerts, and temporary events' },
    { name: 'Transportation Hubs', description: 'Remote depots and transportation centers' },
    { name: 'Telecommunications', description: 'Remote tower sites and infrastructure' }
  ];

  const benefits = [
    {
      title: 'Save Time & Money',
      description: 'Eliminate trips to fuel stations and focus on your core operations',
      impact: '3-5 hours saved per day'
    },
    {
      title: 'Increase Productivity',
      description: 'Keep equipment running without interruption for fuel runs',
      impact: '25% productivity increase'
    },
    {
      title: 'Reduce Costs',
      description: 'Competitive pricing with bulk delivery discounts available',
      impact: '15% average fuel savings'
    },
    {
      title: 'Professional Service',
      description: 'Licensed, insured, and safety-certified fuel delivery experts',
      impact: '100% compliance guarantee'
    }
  ];

  return (
    <>
      <Head>
        <title>On-Site Fuel Delivery Jamaica | Construction & Remote Location Fuel | Nevloh Limited</title>
        <meta name="description" content="Professional on-site fuel delivery across Jamaica. Construction sites, farms, remote locations - we deliver anywhere in all 14 parishes. 24/7 emergency service, premium ULSD, safety-certified. Call +1-876-449-5172" />
        <meta name="keywords" content="on-site fuel delivery Jamaica, construction fuel delivery, remote fuel delivery, agricultural fuel service, site fuel delivery, mobile fuel service, equipment refuelling, farm fuel delivery Jamaica" />

        {/* Robots and indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Geographic targeting */}
        <meta name="geo.region" content="JM" />
        <meta name="geo.placename" content="Jamaica" />
        <meta name="geo.position" content="17.9909;-76.9571" />
        <meta name="ICBM" content="17.9909, -76.9571" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="On-Site Fuel Delivery Jamaica | We Deliver Anywhere" />
        <meta property="og:description" content="Direct fuel delivery to construction sites, farms, and remote locations across Jamaica. Professional, safe, and reliable service with 24/7 emergency support." />
        <meta property="og:url" content="https://www.nevloh.com/services/on-site-fuel-delivery" />
        <meta property="og:image" content="https://www.nevloh.com/images/logo.png" />
        <meta property="og:site_name" content="Nevloh Limited" />
        <meta property="og:locale" content="en_JM" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="On-Site Fuel Delivery Jamaica | We Deliver Anywhere" />
        <meta name="twitter:description" content="Professional fuel delivery to construction sites, farms, and remote locations across Jamaica." />
        <meta name="twitter:image" content="https://www.nevloh.com/images/logo.png" />

        <link rel="canonical" href="https://www.nevloh.com/services/on-site-fuel-delivery" />
      </Head>

      {/* Service Schema */}
      <Script
        id="onsite-fuel-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(onSiteFuelSchema)
        }}
      />

      {/* FAQ Schema */}
      <Script
        id="onsite-fuel-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen pt-20">

        {/* Breadcrumbs - Properly wrapped with container and padding */}
        <div className="max-w-7xl mx-auto px-4 pt-4">
          <Breadcrumbs items={breadcrumbConfigs.onSiteFuelDelivery} />
        </div>

        {/* Hero Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Removed redundant "Back to Services" link - breadcrumbs handle this */}

                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                  On-Site Fuel Delivery
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Direct fuel delivery to your exact location anywhere in Jamaica. Construction sites,
                  farms, remote areas - we deliver where traditional fuel stations can't reach.
                  Professional, safe, and reliable service.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h2 className="font-semibold text-green-800 mb-2">Delivery Coverage</h2>
                  <p className="text-green-700">All 14 parishes • Urban to remote locations • Emergency service available</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                  >
                    Schedule Delivery <ArrowRight className="ml-2" size={20} aria-hidden="true" />
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
                  <MapPin className="text-white mb-4" size={64} aria-hidden="true" />
                  <h2 className="text-2xl font-bold text-white mb-4">We Deliver Anywhere</h2>
                  <ul className="text-green-100 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 flex-shrink-0" size={16} aria-hidden="true" />
                      <span>Construction & Job Sites</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 flex-shrink-0" size={16} aria-hidden="true" />
                      <span>Agricultural Operations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 flex-shrink-0" size={16} aria-hidden="true" />
                      <span>Remote Locations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 flex-shrink-0" size={16} aria-hidden="true" />
                      <span>Emergency Situations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Types */}
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Where We Deliver
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Professional fuel delivery solutions for various locations and industries
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {locations.map((location, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <location.icon className="text-blue-600" size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{location.title}</h3>
                  <p className="text-gray-600 mb-4">{location.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Features</h4>
                      <ul className="space-y-1">
                        {location.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={14} aria-hidden="true" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Benefits</h4>
                      <ul className="space-y-1">
                        {location.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="text-blue-500 mr-2 flex-shrink-0" size={14} aria-hidden="true" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Why Choose Our On-Site Service
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Professional fuel delivery with the flexibility and reliability you need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-blue-600" size={28} aria-hidden="true" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{feature.stat}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide mb-3">{feature.statLabel}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                How On-Site Delivery Works
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Simple process from assessment to ongoing fuel delivery service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {deliveryProcess.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < deliveryProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <ArrowRight className="text-green-300 mx-auto" size={24} aria-hidden="true" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                On-site fuel delivery solutions across various industries and applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <article
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">{industry.name}</h3>
                  <p className="text-gray-600 text-sm">{industry.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Benefits of On-Site Delivery
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Measurable improvements to your operations and bottom line
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-start"
                >
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="text-green-600" size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 mb-2">{benefit.description}</p>
                    <div className="text-sm font-medium text-green-600">{benefit.impact}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-green-600 to-green-800">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <Fuel className="mx-auto mb-6 text-white" size={64} aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Convenient Fuel Delivery?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Let us bring the fuel station to you. Professional, reliable, on-site fuel delivery anywhere in Jamaica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                Schedule First Delivery <ArrowRight className="ml-2" size={20} aria-hidden="true" />
              </Link>
              <a
                href="tel:+18764495172"
                className="inline-flex items-center bg-transparent text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white"
              >
                Call (876) 449-5172
              </a>
            </div>

            <div className="text-green-100">
              <p className="text-sm">
                <strong>Service Area:</strong> All 14 parishes across Jamaica • Emergency delivery available
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}