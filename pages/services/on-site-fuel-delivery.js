import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { MapPin, Clock, Fuel, CheckCircle, ArrowRight, Construction, Tractor, Mountain, Building } from 'lucide-react';

export default function OnSiteFuelDelivery() {
  const onSiteFuelSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "On-Site Fuel Delivery Services",
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
    "description": "Professional on-site fuel delivery services to construction sites, farms, remote locations, and anywhere across Jamaica where traditional fuel stations aren't accessible",
    "serviceType": "On-Site Fuel Delivery",
    "areaServed": "Jamaica",
    "offers": {
      "@type": "Offer",
      "description": "Direct fuel delivery to any location across Jamaica with flexible scheduling and emergency service options"
    }
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
        <meta name="description" content="Professional on-site fuel delivery across Jamaica. Construction sites, farms, remote locations - we deliver anywhere. Flexible scheduling, premium ULSD, safety-certified service." />
        <meta name="keywords" content="on-site fuel delivery Jamaica, construction fuel delivery, remote fuel delivery, agricultural fuel service, site fuel delivery, mobile fuel service, equipment refuelling" />

        {/* Open Graph */}
        <meta property="og:title" content="On-Site Fuel Delivery | Direct Fuel Service Anywhere in Jamaica" />
        <meta property="og:description" content="Direct fuel delivery to construction sites, farms, and remote locations across Jamaica. Professional, safe, and reliable service." />
        <meta property="og:url" content="https://nevloh.com/services/on-site-fuel-delivery" />
        <meta property="og:image" content="https://nevloh.com/images/on-site-fuel-delivery.webp" />

        {/* Twitter */}
        <meta name="twitter:title" content="On-Site Fuel Delivery | Direct Fuel Service Anywhere in Jamaica" />
        <meta name="twitter:description" content="Professional fuel delivery to construction sites, farms, and remote locations across Jamaica." />
        <meta name="twitter:image" content="https://nevloh.com/images/on-site-fuel-delivery.webp" />

        <link rel="canonical" href="https://nevloh.com/services/on-site-fuel-delivery" />
      </Head>

      <Script
        id="onsite-fuel-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(onSiteFuelSchema)
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
                  On-Site Fuel Delivery
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Direct fuel delivery to your exact location anywhere in Jamaica. Construction sites,
                  farms, remote areas - we deliver where traditional fuel stations can't reach.
                  Professional, safe, and reliable service.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-green-800 mb-2">Delivery Coverage</h3>
                  <p className="text-green-700">All 14 parishes • Urban to remote locations • Emergency service available</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                  >
                    Schedule Delivery <ArrowRight className="ml-2" size={20} />
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
                  <MapPin className="text-white mb-4" size={64} />
                  <h3 className="text-2xl font-bold text-white mb-4">We Deliver Anywhere</h3>
                  <ul className="text-green-100 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <span>Construction & Job Sites</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <span>Agricultural Operations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <span>Remote Locations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
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
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <location.icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{location.title}</h3>
                  <p className="text-gray-600 mb-4">{location.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Features</h4>
                      <ul className="space-y-1">
                        {location.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={14} />
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
                            <CheckCircle className="text-blue-500 mr-2 flex-shrink-0" size={14} />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
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
                    <feature.icon className="text-blue-600" size={28} />
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
                      <ArrowRight className="text-green-300 mx-auto" size={24} />
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
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">{industry.name}</h3>
                  <p className="text-gray-600 text-sm">{industry.description}</p>
                </div>
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
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-start"
                >
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 mb-2">{benefit.description}</p>
                    <div className="text-sm font-medium text-green-600">{benefit.impact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-green-600 to-green-800">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <Fuel className="mx-auto mb-6 text-white" size={64} />
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
                Schedule First Delivery <ArrowRight className="ml-2" size={20} />
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