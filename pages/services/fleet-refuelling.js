import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import { Truck, Clock, Shield, CheckCircle, ArrowRight, Calendar, MapPin, Fuel, BarChart3 } from 'lucide-react';

export default function FleetRefuelling() {
  const fleetRefuellingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fleet Refuelling Services",
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
    "description": "Professional on-site fleet refuelling services for commercial vehicles, delivery trucks, and transportation companies across Jamaica",
    "serviceType": "Fleet Refuelling",
    "areaServed": "Jamaica",
    "offers": {
      "@type": "Offer",
      "description": "Comprehensive fleet refuelling solutions including scheduled deliveries, emergency service, and fuel management systems"
    }
  };

  const services = [
    {
      icon: Calendar,
      title: 'Scheduled Refuelling',
      description: 'Regular fuel delivery schedules tailored to your fleet operations and fuel consumption patterns.',
      features: [
        'Custom delivery schedules',
        'Automated fuel monitoring',
        'Predictive refuelling alerts',
        'Flexible timing options'
      ]
    },
    {
      icon: Clock,
      title: 'Emergency Fleet Service',
      description: '24/7 emergency fuel delivery to prevent costly fleet downtime and keep operations running.',
      features: [
        '24/7 emergency response',
        'Rapid deployment team',
        'GPS-tracked delivery',
        'Priority service guarantee'
      ]
    },
    {
      icon: BarChart3,
      title: 'Fuel Management',
      description: 'Comprehensive fuel tracking and management systems to optimize costs and efficiency.',
      features: [
        'Real-time fuel tracking',
        'Consumption analytics',
        'Cost optimization reports',
        'Inventory management'
      ]
    },
    {
      icon: Shield,
      title: 'Safety & Compliance',
      description: 'Fully licensed and insured service with strict safety protocols and regulatory compliance.',
      features: [
        'Licensed fuel handlers',
        'Safety-certified equipment',
        'Environmental compliance',
        'Insurance coverage'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Reduce Downtime',
      description: 'Keep your fleet operational with reliable on-site refuelling',
      percentage: '95%',
      metric: 'Uptime Guarantee'
    },
    {
      title: 'Cost Savings',
      description: 'Save on fuel costs with competitive pricing and efficient delivery',
      percentage: '15%',
      metric: 'Average Savings'
    },
    {
      title: 'Time Efficiency',
      description: 'Eliminate trips to gas stations and focus on core operations',
      percentage: '80%',
      metric: 'Time Saved'
    },
    {
      title: 'Improved Productivity',
      description: 'Maximize fleet utilization with strategic fuel management',
      percentage: '25%',
      metric: 'Productivity Boost'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Fleet Assessment',
      description: 'We analyze your fleet size, routes, and fuel consumption patterns to create a customized refuelling plan.'
    },
    {
      step: '02',
      title: 'Schedule Setup',
      description: 'Establish regular delivery schedules and emergency protocols tailored to your operational needs.'
    },
    {
      step: '03',
      title: 'On-Site Delivery',
      description: 'Our certified technicians deliver premium ULSD directly to your fleet location with safety protocols.'
    },
    {
      step: '04',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring and reporting to optimize fuel efficiency and reduce operational costs.'
    }
  ];

  const industries = [
    'Transportation & Logistics',
    'Construction Companies',
    'Delivery Services',
    'Government Fleet Operations',
    'Emergency Services',
    'Tour & Travel Companies',
    'Agricultural Operations',
    'Mining & Heavy Industry'
  ];

  return (
    <>
      <Head>
        <title>Fleet Refuelling Services Jamaica | On-Site Fuel Delivery | Nevloh Limited</title>
        <meta name="description" content="Professional fleet refuelling services across Jamaica. Scheduled on-site fuel delivery, 24/7 emergency service, and fuel management for commercial fleets. Save time and reduce costs." />
        <meta name="keywords" content="fleet refuelling Jamaica, on-site fuel delivery, commercial fleet fuel, scheduled fuel delivery, emergency fleet service, fleet fuel management, transportation fuel delivery" />

        {/* Open Graph */}
        <meta property="og:title" content="Fleet Refuelling Services | Professional On-Site Fuel Delivery" />
        <meta property="og:description" content="Keep your fleet running with our professional on-site refuelling services. Scheduled deliveries, emergency service, and comprehensive fleet management across Jamaica." />
        <meta property="og:url" content="https://www.nevloh.com/services/fleet-refuelling" />
        <meta property="og:image" content="https://www.nevloh.com/images/fleet-refuelling-service.webp" />

        {/* Twitter */}
        <meta name="twitter:title" content="Fleet Refuelling Services | Professional On-Site Fuel Delivery" />
        <meta name="twitter:description" content="Professional fleet refuelling across Jamaica. Scheduled deliveries, emergency service, fuel management." />
        <meta name="twitter:image" content="https://www.nevloh.com/images/fleet-refuelling-service.webp" />

        <link rel="canonical" href="https://www.nevloh.com/services/fleet-refuelling" />
      </Head>

      <Script
        id="fleet-refuelling-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fleetRefuellingSchema)
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
                  Fleet Refuelling Services
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Keep your fleet operational with professional on-site refuelling services.
                  Scheduled deliveries, emergency support, and comprehensive fuel management
                  to maximize efficiency and minimize downtime.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                  >
                    Get Fleet Quote <ArrowRight className="ml-2" size={20} />
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
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 shadow-2xl">
                  <Truck className="text-white mb-4" size={64} />
                  <h3 className="text-2xl font-bold text-white mb-4">Professional Fleet Solutions</h3>
                  <ul className="text-blue-100 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <span>Scheduled & Emergency Service</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <span>Real-time Fuel Management</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <span>Cost Optimization Reports</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <span>24/7 Emergency Response</span>
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
                Comprehensive Fleet Solutions
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Everything you need to keep your fleet running efficiently
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <service.icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Proven Results for Your Fleet
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Our fleet refuelling services deliver measurable improvements to your operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{benefit.percentage}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide mb-3">{benefit.metric}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
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
                How Our Fleet Service Works
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Simple, efficient process from assessment to ongoing optimization
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
                      <ArrowRight className="text-blue-300 mx-auto" size={24} />
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
                Specialized fleet refuelling solutions for various industries across Jamaica
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="text-gray-700 font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize Your Fleet Operations?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get a custom fleet refuelling solution tailored to your business needs
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                Get Free Fleet Assessment <ArrowRight className="ml-2" size={20} />
              </Link>
              <a
                href="tel:+18764495172"
                className="inline-flex items-center bg-transparent text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white"
              >
                Call (876) 449-5172
              </a>
            </div>

            <div className="text-blue-100">
              <p className="text-sm">
                <strong>Emergency Fleet Service:</strong> Available 24/7 across all 14 parishes in Jamaica
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}