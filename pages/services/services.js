import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import { Truck, Fuel, Clock, Shield, Zap, Building2, ArrowRight, CheckCircle } from 'lucide-react';

export default function Services() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Fuel Delivery Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nevloh Limited",
      "telephone": "+1-876-449-5172",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Spanish Town",
        "addressRegion": "Saint Catherine",
        "addressCountry": "Jamaica"
      }
    },
    "description": "Comprehensive fuel delivery services including fleet refuelling, generator services, on-site delivery, and bulk fuel supply across Jamaica",
    "serviceType": "Fuel Delivery",
    "areaServed": "Jamaica",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Fuel Delivery Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fleet Refuelling",
            "description": "On-site refuelling for vehicle fleets with scheduled and emergency services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Generator Refuelling",
            "description": "Reliable fuel delivery for backup generators and power systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "On-Site Fuel Delivery",
            "description": "Direct fuel delivery to construction sites, farms, and remote locations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bulk Fuel Supply",
            "description": "Large volume fuel supply for industrial and commercial operations"
          }
        }
      ]
    }
  };

  const services = [
    {
      id: 'fleet-refuelling',
      title: 'Fleet Refuelling',
      description: 'Keep your fleet running with our on-site refuelling services. Scheduled deliveries, emergency fuel, and comprehensive fleet management.',
      href: '/services/fleet-refuelling',
      icon: Truck,
      image: '/images/fleet-refuelling.webp',
      features: [
        'Scheduled refuelling programs',
        '24/7 emergency fleet service',
        'Real-time fuel tracking',
        'Multiple vehicle support'
      ],
      benefits: [
        'Reduce fleet downtime',
        'Lower operational costs',
        'Improve fuel efficiency',
        'Streamlined operations'
      ]
    },
    {
      id: 'generator-refuelling',
      title: 'Generator Refuelling Services',
      description: 'Ensure uninterrupted power with our reliable generator fuel delivery. Perfect for hospitals, data centers, and critical facilities.',
      href: '/services/generator-refuelling',
      icon: Zap,
      image: '/images/generator-refuelling.webp',
      features: [
        'Critical facility support',
        'Automatic monitoring systems',
        'Emergency response team',
        'Scheduled maintenance refills'
      ],
      benefits: [
        'Guaranteed power backup',
        'Prevent costly outages',
        'Peace of mind',
        'Professional monitoring'
      ]
    },
    {
      id: 'on-site-fuel-delivery',
      title: 'On-Site Fuel Delivery',
      description: 'Direct fuel delivery to your location. Construction sites, farms, remote areas - we deliver anywhere across Jamaica.',
      href: '/services/on-site-fuel-delivery',
      icon: Fuel,
      image: '/images/on-site-delivery.webp',
      features: [
        'Remote location access',
        'Flexible scheduling',
        'Construction site delivery',
        'Agricultural fuel supply'
      ],
      benefits: [
        'Save time and resources',
        'Increase productivity',
        'Flexible delivery options',
        'Professional service'
      ]
    },
    {
      id: 'bulk-fuel',
      title: 'Bulk Fuel Supply',
      description: 'Large volume fuel supply for industrial operations. Competitive pricing, reliable delivery, and professional service.',
      href: '/services/bulk-fuel',
      icon: Building2,
      image: '/images/bulk-fuel.webp',
      features: [
        'High volume deliveries',
        'Competitive bulk pricing',
        'Industrial-grade quality',
        'Custom delivery schedules'
      ],
      benefits: [
        'Cost-effective solutions',
        'Reliable supply chain',
        'Volume discounts',
        'Professional service'
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock service for all your fuel delivery needs'
    },
    {
      icon: Shield,
      title: 'Reliable & Safe',
      description: 'Licensed, insured, and safety-certified fuel delivery'
    },
    {
      icon: Truck,
      title: 'Modern Fleet',
      description: 'Well-maintained delivery vehicles with GPS tracking'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'Premium Ultra Low Sulphur Diesel for optimal performance'
    }
  ];

  return (
    <>
      <Head>
        <title>Professional Fuel Delivery Services | Nevloh Limited Jamaica</title>
        <meta name="description" content="Comprehensive fuel delivery services across Jamaica. Fleet refuelling, generator services, on-site delivery, and bulk fuel supply. 24/7 emergency service available." />
        <meta name="keywords" content="fuel delivery services Jamaica, fleet refuelling, generator fuel delivery, on-site fuel delivery, bulk fuel supply, diesel delivery services" />

        {/* Open Graph */}
        <meta property="og:title" content="Professional Fuel Delivery Services | Nevloh Limited" />
        <meta property="og:description" content="Complete range of fuel delivery services across Jamaica. From fleet refuelling to bulk supply - reliable, professional, 24/7 service." />
        <meta property="og:url" content="https://nevloh.com/services" />
        <meta property="og:image" content="https://nevloh.com/images/services-overview.webp" />

        {/* Twitter */}
        <meta name="twitter:title" content="Professional Fuel Delivery Services | Nevloh Limited" />
        <meta name="twitter:description" content="Complete fuel delivery services across Jamaica. Fleet, generator, on-site, and bulk fuel delivery." />
        <meta name="twitter:image" content="https://nevloh.com/images/services-overview.webp" />

        <link rel="canonical" href="https://nevloh.com/services" />
      </Head>

      <Script
        id="services-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema)
        }}
      />

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Professional Fuel Delivery Services
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Comprehensive fuel solutions across Jamaica. From fleet refuelling to bulk supply,
                we deliver reliable, professional service when and where you need it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                >
                  Get Quote Now <ArrowRight className="ml-2" size={20} />
                </Link>
                <a
                  href="tel:+18764495172"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg border border-blue-200"
                >
                  Call (876) 449-5172
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-6 left-6">
                      <service.icon className="text-white" size={48} />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-blue-100 text-sm">{service.description}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="text-blue-500 mr-2 flex-shrink-0" size={16} />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={service.href}
                      className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 w-full justify-center"
                    >
                      Learn More <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Why Choose Nevloh Limited?
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Professional fuel delivery services you can trust across Jamaica
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Island-Wide Service Coverage
                </h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Professional fuel delivery across all 14 parishes in Jamaica
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
                {[
                  'Kingston', 'Saint Andrew', 'Saint Catherine', 'Clarendon',
                  'Manchester', 'Saint Elizabeth', 'Westmoreland', 'Hanover',
                  'Saint James', 'Trelawny', 'Saint Ann', 'Saint Mary',
                  'Portland', 'Saint Thomas'
                ].map((parish, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <span className="text-sm font-medium">{parish}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
                >
                  Request Service <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Contact us today for a custom quote or to schedule your fuel delivery service
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-xl transform hover:-translate-y-1"
              >
                Get Free Quote <ArrowRight className="ml-2" size={20} />
              </Link>
              <a
                href="tel:+18764495172"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl border border-blue-200"
              >
                Call Now: (876) 449-5172
              </a>
            </div>

            <div className="mt-8 text-gray-600">
              <p className="text-sm">
                <strong>Emergency Service:</strong> Available 24/7 across Jamaica
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}