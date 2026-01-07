// pages/services/generator-refuelling.js
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { Zap, Shield, Clock, AlertTriangle, CheckCircle, ArrowRight, Activity, Battery, Settings, Phone } from 'lucide-react';
import Breadcrumbs, { breadcrumbConfigs } from '../../components/Breadcrumbs';

export default function GeneratorRefuelling() {
  // Enhanced Service Schema - Fixed structure for Google validation
  const generatorRefuellingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nevloh.com/services/generator-refuelling#service",
    "name": "Generator Refuelling Services Jamaica",
    "serviceType": "Generator Refuelling",
    "image": "https://www.nevloh.com/images/logo.png",
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
    "description": "Professional generator refuelling services for backup power systems, critical facilities, hospitals, data centers, and emergency power infrastructure across Jamaica. 24/7 emergency response with 2-hour guarantee.",
    "areaServed": {
      "@type": "Country",
      "name": "Jamaica"
    },
    "serviceOutput": "Generator fuel delivery and monitoring",
    "termsOfService": "https://www.nevloh.com/terms",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceType": "Emergency Response",
      "availableLanguage": "English",
      "servicePhone": {
        "@type": "ContactPoint",
        "telephone": "+1-876-449-5172",
        "contactType": "customer service",
        "availableLanguage": "English",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "89",
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
        "name": "How quickly can you respond to emergency generator refuelling in Jamaica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nevloh Limited guarantees a 2-hour maximum response time for emergency generator refuelling across all 14 parishes in Jamaica. Our 24/7 emergency hotline is +1-876-449-5172."
        }
      },
      {
        "@type": "Question",
        "name": "What types of generators do you refuel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We refuel all types of diesel generators from small backup units to large industrial generators. We specialize in critical facility generators for hospitals, data centers, banks, manufacturing facilities, and other mission-critical operations."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer generator fuel monitoring services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Nevloh Limited offers advanced remote monitoring systems that provide real-time fuel level tracking, automated alert systems, performance monitoring, and predictive maintenance scheduling to ensure your generators are always ready."
        }
      },
      {
        "@type": "Question",
        "name": "What critical facilities do you serve in Jamaica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide specialized generator refuelling services for hospitals and medical centers, data centers and IT facilities, banking and financial services, manufacturing facilities, government buildings, and other critical infrastructure across Jamaica."
        }
      }
    ]
  };

  const services = [
    {
      icon: Clock,
      title: 'Scheduled Maintenance Refills',
      description: 'Regular fuel delivery schedules to ensure your generators are always ready when power outages occur.',
      features: [
        'Automated fuel level monitoring',
        'Predictive maintenance alerts',
        'Custom refill schedules',
        'Fuel quality testing'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Response Service',
      description: 'Immediate fuel delivery during power outages and critical situations when every minute counts.',
      features: [
        'Rapid emergency deployment',
        '2-hour response guarantee',
        'Priority service protocols',
        '24/7 emergency hotline'
      ]
    },
    {
      icon: Activity,
      title: 'Remote Monitoring Systems',
      description: 'Advanced monitoring technology to track fuel levels and generator status in real-time.',
      features: [
        'Real-time fuel level tracking',
        'Automated alert systems',
        'Performance monitoring',
        'Maintenance scheduling'
      ]
    },
    {
      icon: Shield,
      title: 'Critical Facility Support',
      description: 'Specialized service for hospitals, data centers, and other mission-critical operations.',
      features: [
        'Priority service guarantee',
        'Redundant fuel supply systems',
        'Compliance documentation',
        'Emergency backup protocols'
      ]
    }
  ];

  const criticalFacilities = [
    {
      title: 'Hospitals & Medical Centers',
      description: 'Uninterrupted power for life-saving equipment and patient care',
      icon: '🏥',
      features: ['Priority emergency response', 'Medical-grade fuel quality', 'Compliance with health regulations']
    },
    {
      title: 'Data Centers & IT Facilities',
      description: 'Protect valuable data and prevent costly server downtime',
      icon: '💻',
      features: ['High-grade fuel supply', 'Precision monitoring systems', 'Minimal maintenance windows']
    },
    {
      title: 'Banking & Financial Services',
      description: 'Keep financial operations running during power disruptions',
      icon: '🏦',
      features: ['Security-cleared technicians', 'Regulatory compliance', 'Emergency protocols']
    },
    {
      title: 'Manufacturing Facilities',
      description: 'Prevent production losses and equipment damage',
      icon: '🏭',
      features: ['Industrial-grade service', 'Bulk fuel capacity', 'Production schedule coordination']
    }
  ];

  const monitoringFeatures = [
    {
      title: 'Fuel Level Monitoring',
      description: 'Real-time tracking of fuel levels with automated alerts before critical thresholds',
      percentage: '99.9%',
      metric: 'Uptime Reliability'
    },
    {
      title: 'Performance Analytics',
      description: 'Detailed reports on generator performance and fuel consumption patterns',
      percentage: '30%',
      metric: 'Cost Reduction'
    },
    {
      title: 'Predictive Maintenance',
      description: 'AI-powered predictions to prevent failures and optimize refuelling schedules',
      percentage: '85%',
      metric: 'Fewer Emergencies'
    },
    {
      title: 'Mobile Alerts',
      description: 'Instant notifications via SMS, email, and mobile app for critical situations',
      percentage: '2-Min',
      metric: 'Response Time'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'System Assessment',
      description: 'Comprehensive evaluation of your generator systems, fuel capacity, and critical power requirements.'
    },
    {
      step: '02',
      title: 'Monitoring Installation',
      description: 'Install advanced fuel monitoring systems with real-time tracking and automated alerts.'
    },
    {
      step: '03',
      title: 'Service Schedule',
      description: 'Establish regular maintenance refills and emergency response protocols tailored to your needs.'
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: '24/7 monitoring, regular maintenance, and immediate emergency response when needed.'
    }
  ];

  return (
    <>
      <Head>
        <title>Generator Refuelling Services Jamaica | 24/7 Emergency Power Support | Nevloh Limited</title>
        <meta name="description" content="Professional generator refuelling services for hospitals, data centers, and critical facilities across Jamaica. 24/7 emergency fuel delivery with 2-hour response guarantee, remote monitoring, and maintenance support. Call +1-876-449-5172" />
        <meta name="keywords" content="generator refuelling Jamaica, emergency fuel delivery, hospital generator fuel, data center power backup, critical facility fuel service, 24/7 generator support, backup power fuel, generator monitoring Jamaica" />

        {/* Robots and indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Geographic targeting */}
        <meta name="geo.region" content="JM" />
        <meta name="geo.placename" content="Jamaica" />
        <meta name="geo.position" content="17.9909;-76.9571" />
        <meta name="ICBM" content="17.9909, -76.9571" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Generator Refuelling Services Jamaica | 24/7 Emergency Power Support" />
        <meta property="og:description" content="Ensure uninterrupted power with professional generator refuelling services. 2-hour emergency response for hospitals, data centers, and critical facilities across Jamaica." />
        <meta property="og:url" content="https://www.nevloh.com/services/generator-refuelling" />
        <meta property="og:image" content="https://www.nevloh.com/images/logo.png" />
        <meta property="og:site_name" content="Nevloh Limited" />
        <meta property="og:locale" content="en_JM" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Generator Refuelling Services Jamaica | 24/7 Emergency Support" />
        <meta name="twitter:description" content="Professional generator fuel delivery for critical facilities. 24/7 emergency service with 2-hour response across Jamaica." />
        <meta name="twitter:image" content="https://www.nevloh.com/images/logo.png" />

        <link rel="canonical" href="https://www.nevloh.com/services/generator-refuelling" />
      </Head>

      {/* Service Schema */}
      <Script
        id="generator-refuelling-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatorRefuellingSchema)
        }}
      />

      {/* FAQ Schema */}
      <Script
        id="generator-refuelling-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen pt-20">

        {/* Breadcrumbs - Properly wrapped with container and padding */}
        <div className="max-w-7xl mx-auto px-4 pt-4">
          <Breadcrumbs items={breadcrumbConfigs.generatorRefuelling} />
        </div>

        {/* Hero Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Removed redundant "Back to Services" link - breadcrumbs handle this */}

                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                  Generator Refuelling Services
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Ensure uninterrupted power with our reliable generator fuel delivery services.
                  Perfect for hospitals, data centers, and critical facilities that can't afford
                  to lose power during outages.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <AlertTriangle className="text-red-600 mr-3 flex-shrink-0" size={24} aria-hidden="true" />
                    <div>
                      <h2 className="font-semibold text-red-800">Emergency Hotline</h2>
                      <p className="text-red-600">24/7 Emergency Generator Fuel: (876) 449-5172</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                  >
                    Setup Monitoring <ArrowRight className="ml-2" size={20} aria-hidden="true" />
                  </Link>
                  <a
                    href="tel:+18764495172"
                    className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg"
                  >
                    <Phone className="mr-2" size={20} aria-hidden="true" />
                    Emergency Fuel
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 shadow-2xl">
                  <Zap className="text-white mb-4" size={64} aria-hidden="true" />
                  <h2 className="text-2xl font-bold text-white mb-4">Critical Power Protection</h2>
                  <ul className="text-blue-100 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 flex-shrink-0" size={16} aria-hidden="true" />
                      <span>24/7 Emergency Response</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 flex-shrink-0" size={16} aria-hidden="true" />
                      <span>Real-time Fuel Monitoring</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 flex-shrink-0" size={16} aria-hidden="true" />
                      <span>Automated Alert Systems</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 flex-shrink-0" size={16} aria-hidden="true" />
                      <span>2-Hour Response Guarantee</span>
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
                Complete Generator Support Solutions
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                From routine maintenance to emergency response, we keep your backup power systems ready
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <service.icon className="text-blue-600" size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
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

        {/* Critical Facilities */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Critical Facilities We Serve
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Specialized generator refuelling services for mission-critical operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {criticalFacilities.map((facility, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4" role="img" aria-label={facility.title}>{facility.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{facility.title}</h3>
                  <p className="text-gray-600 mb-4">{facility.description}</p>
                  <ul className="space-y-2">
                    {facility.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="text-blue-500 mr-2 flex-shrink-0" size={16} aria-hidden="true" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Monitoring Features */}
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Advanced Monitoring & Analytics
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Smart technology that keeps you informed and your generators ready
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {monitoringFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{feature.percentage}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide mb-3">{feature.metric}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                How Our Generator Service Works
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Comprehensive approach from assessment to ongoing monitoring
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <ArrowRight className="text-blue-300 mx-auto" size={24} aria-hidden="true" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Response */}
        <section className="py-16 bg-gradient-to-br from-red-600 to-red-800">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <AlertTriangle className="mx-auto mb-6 text-white" size={64} aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              24/7 Emergency Generator Fuel Service
            </h2>
            <p className="text-xl mb-8 text-red-100">
              When the power goes out, every minute counts. Our emergency response team is standing by.
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Emergency Response Guarantee</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-300">2 Hours</div>
                  <div className="text-red-100">Maximum Response Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">24/7</div>
                  <div className="text-red-100">Available Every Day</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">14</div>
                  <div className="text-red-100">Parishes Covered</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18764495172"
                className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-red-50 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                <Phone className="mr-2" size={20} aria-hidden="true" />
                Emergency: (876) 449-5172
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center bg-transparent text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white"
              >
                Setup Monitoring Service
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <Battery className="mx-auto mb-6 text-white" size={64} aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Protect Your Critical Operations
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Don't wait for the next power outage. Set up comprehensive generator monitoring and fuel service today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                Get System Assessment <ArrowRight className="ml-2" size={20} aria-hidden="true" />
              </Link>
              <a
                href="tel:+18764495172"
                className="inline-flex items-center bg-transparent text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white"
              >
                Call (876) 449-5172
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}