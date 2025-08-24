import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { Building2, TrendingDown, Shield, CheckCircle, ArrowRight, BarChart3, Truck, Calculator, Clock } from 'lucide-react';

export default function BulkFuelSupply() {
  const bulkFuelSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bulk Fuel Supply Services",
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
    "description": "Large volume fuel supply for industrial operations, commercial businesses, and bulk fuel requirements across Jamaica with competitive pricing and reliable delivery",
    "serviceType": "Bulk Fuel Supply",
    "areaServed": "Jamaica",
    "offers": {
      "@type": "Offer",
      "description": "High volume fuel supply with competitive bulk pricing, custom delivery schedules, and industrial-grade service"
    }
  };

  const services = [
    {
      icon: Building2,
      title: 'Industrial Operations',
      description: 'Large-scale fuel supply for manufacturing, processing plants, and heavy industrial operations.',
      features: [
        'High-volume deliveries (1000+ gallons)',
        'Custom delivery schedules',
        'Industrial-grade fuel quality',
        'Dedicated account management'
      ],
      volumeRange: '1,000 - 10,000+ gallons',
      industries: ['Manufacturing', 'Processing Plants', 'Heavy Industry', 'Power Generation']
    },
    {
      icon: Truck,
      title: 'Commercial Fleet Operations',
      description: 'Bulk fuel supply for large commercial fleets, transportation companies, and logistics operations.',
      features: [
        'Fleet-specific fuel programs',
        'Volume-based pricing tiers',
        'Fuel management systems',
        'Performance analytics'
      ],
      volumeRange: '500 - 5,000 gallons',
      industries: ['Transportation', 'Logistics', 'Delivery Services', 'Public Transit']
    },
    {
      icon: BarChart3,
      title: 'Government & Municipal',
      description: 'Reliable bulk fuel supply for government agencies, municipalities, and public sector operations.',
      features: [
        'Government contract compliance',
        'Transparent pricing structure',
        'Regular reporting and documentation',
        'Emergency service protocols'
      ],
      volumeRange: '1,000 - 8,000 gallons',
      industries: ['Government Agencies', 'Municipalities', 'Public Works', 'Emergency Services']
    },
    {
      icon: Clock,
      title: 'Long-term Contracts',
      description: 'Structured long-term fuel supply agreements with guaranteed pricing and delivery schedules.',
      features: [
        'Fixed pricing agreements',
        'Guaranteed supply security',
        'Priority delivery scheduling',
        'Contract flexibility options'
      ],
      volumeRange: 'Customized volumes',
      industries: ['All Industries', 'Long-term Projects', 'Ongoing Operations', 'Strategic Partnerships']
    }
  ];

  const pricingTiers = [
    {
      tier: 'Standard Bulk',
      volume: '500 - 999 gallons',
      discount: '5%',
      features: [
        'Competitive bulk pricing',
        'Scheduled delivery options',
        'Quality assurance guarantee',
        'Basic reporting'
      ],
      bestFor: 'Medium operations'
    },
    {
      tier: 'High Volume',
      volume: '1,000 - 4,999 gallons',
      discount: '10%',
      features: [
        'Enhanced bulk discounts',
        'Priority delivery scheduling',
        'Dedicated account manager',
        'Detailed consumption reports'
      ],
      bestFor: 'Large operations',
      popular: true
    },
    {
      tier: 'Industrial Scale',
      volume: '5,000+ gallons',
      discount: '15%+',
      features: [
        'Maximum bulk savings',
        'Custom delivery schedules',
        'Premium support services',
        'Advanced fuel management'
      ],
      bestFor: 'Industrial operations'
    }
  ];

  const benefits = [
    {
      title: 'Significant Cost Savings',
      description: 'Volume discounts up to 15% off standard pricing',
      icon: TrendingDown,
      stat: 'Up to 15%',
      statLabel: 'Cost Reduction'
    },
    {
      title: 'Supply Chain Reliability',
      description: 'Guaranteed fuel availability with priority delivery',
      icon: Shield,
      stat: '99.8%',
      statLabel: 'Delivery Success'
    },
    {
      title: 'Operational Efficiency',
      description: 'Streamlined fuel management and reporting',
      icon: BarChart3,
      stat: '30%',
      statLabel: 'Time Saved'
    },
    {
      title: 'Premium Quality',
      description: 'Industrial-grade Ultra Low Sulphur Diesel',
      icon: CheckCircle,
      stat: '100%',
      statLabel: 'Quality Assured'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Volume Assessment',
      description: 'Analyze your fuel consumption patterns and determine optimal bulk delivery volumes and schedules.'
    },
    {
      step: '02',
      title: 'Custom Pricing',
      description: 'Develop competitive bulk pricing structure based on volume commitments and delivery requirements.'
    },
    {
      step: '03',
      title: 'Agreement Setup',
      description: 'Establish service agreements with pricing, delivery schedules, and performance guarantees.'
    },
    {
      step: '04',
      title: 'Ongoing Management',
      description: 'Continuous monitoring, reporting, and optimization of your bulk fuel supply program.'
    }
  ];

  const industries = [
    {
      name: 'Manufacturing',
      description: 'Production facilities and processing plants',
      volumes: '1,000 - 10,000+ gallons',
      applications: ['Heavy machinery', 'Backup generators', 'Material handling equipment', 'Production lines']
    },
    {
      name: 'Transportation & Logistics',
      description: 'Fleet operations and distribution centers',
      volumes: '500 - 5,000 gallons',
      applications: ['Commercial fleets', 'Delivery vehicles', 'Logistics operations', 'Public transportation']
    },
    {
      name: 'Construction',
      description: 'Large construction projects and contractors',
      volumes: '1,000 - 8,000 gallons',
      applications: ['Heavy equipment', 'Construction vehicles', 'Job site operations', 'Project-based supply']
    },
    {
      name: 'Agriculture',
      description: 'Large-scale farming and agricultural operations',
      volumes: '500 - 3,000 gallons',
      applications: ['Farming equipment', 'Irrigation systems', 'Harvesting machinery', 'Seasonal operations']
    }
  ];

  return (
    <>
      <Head>
        <title>Bulk Fuel Supply Jamaica | Industrial Volume Diesel Delivery | Nevloh Limited</title>
        <meta name="description" content="Large volume fuel supply for industrial operations across Jamaica. Competitive bulk pricing, reliable delivery, custom schedules. Save up to 15% with volume discounts." />
        <meta name="keywords" content="bulk fuel supply Jamaica, industrial fuel delivery, commercial bulk diesel, high volume fuel, bulk fuel pricing, industrial fuel supply, large scale fuel delivery" />

        {/* Open Graph */}
        <meta property="og:title" content="Bulk Fuel Supply | Industrial Volume Fuel Delivery Jamaica" />
        <meta property="og:description" content="Large volume fuel supply for industrial operations. Competitive bulk pricing, reliable delivery, and professional service across Jamaica." />
        <meta property="og:url" content="https://nevloh.com/services/bulk-fuel" />
        <meta property="og:image" content="https://nevloh.com/images/bulk-fuel-supply.webp" />

        {/* Twitter */}
        <meta name="twitter:title" content="Bulk Fuel Supply | Industrial Volume Fuel Delivery Jamaica" />
        <meta name="twitter:description" content="Large volume fuel supply with competitive bulk pricing and reliable delivery across Jamaica." />
        <meta name="twitter:image" content="https://nevloh.com/images/bulk-fuel-supply.webp" />

        <link rel="canonical" href="https://nevloh.com/services/bulk-fuel" />
      </Head>

      <Script
        id="bulk-fuel-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bulkFuelSchema)
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
                  Bulk Fuel Supply
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Large volume fuel supply for industrial operations, commercial businesses, and
                  bulk fuel requirements. Competitive pricing, reliable delivery, and professional
                  service tailored to your high-volume needs.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-green-800 mb-2">Volume Discounts Available</h3>
                  <p className="text-green-700">Save up to 15% with our bulk fuel pricing tiers • Minimum 500 gallons</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                  >
                    Get Bulk Quote <ArrowRight className="ml-2" size={20} />
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
                <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-8 shadow-2xl">
                  <Building2 className="text-white mb-4" size={64} />
                  <h3 className="text-2xl font-bold text-white mb-4">Industrial-Scale Supply</h3>
                  <ul className="text-orange-100 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <span>Volume Discounts up to 15%</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <span>Custom Delivery Schedules</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <span>Industrial-Grade Quality</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <span>Dedicated Account Management</span>
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
                Bulk Fuel Solutions
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Tailored bulk fuel supply programs for various industries and volume requirements
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <div className="text-sm font-medium text-blue-800">Volume Range</div>
                    <div className="text-lg font-bold text-blue-600">{service.volumeRange}</div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={14} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Typical Industries</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.industries.map((industry, industryIndex) => (
                        <span
                          key={industryIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Bulk Pricing Tiers
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Competitive volume-based pricing with increasing discounts for larger quantities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    tier.popular ? 'ring-2 ring-blue-500 relative' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{tier.tier}</h3>
                    <div className="text-2xl font-bold text-blue-600">{tier.discount}</div>
                    <div className="text-sm text-gray-500">Discount</div>
                    <div className="text-lg font-medium text-gray-700 mt-2">{tier.volume}</div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600 mb-3">Best for: {tier.bestFor}</div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all duration-300"
                    >
                      Get Quote <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
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
                Benefits of Bulk Fuel Supply
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Why businesses choose our bulk fuel supply services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-orange-600" size={28} />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">{benefit.stat}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide mb-3">{benefit.statLabel}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
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
                How Bulk Supply Works
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Simple process from volume assessment to ongoing fuel supply management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <ArrowRight className="text-orange-300 mx-auto" size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Industries We Supply
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Bulk fuel supply solutions across various industries and applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{industry.name}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>

                  <div className="mb-4 p-3 bg-orange-50 rounded-lg">
                    <div className="text-sm font-medium text-orange-800">Typical Volume Range</div>
                    <div className="text-lg font-bold text-orange-600">{industry.volumes}</div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Common Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.applications.map((app, appIndex) => (
                        <span
                          key={appIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculator CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-8 md:p-12 text-white text-center">
              <Calculator className="mx-auto mb-6 text-white" size={64} />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Calculate Your Bulk Savings
              </h2>
              <p className="text-xl mb-8 text-orange-100">
                See how much you can save with our bulk fuel pricing. Get a custom quote based on your volume requirements.
              </p>

              <div className="bg-white/10 rounded-lg p-6 mb-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Potential Annual Savings</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-yellow-300">$15,000+</div>
                    <div className="text-orange-100">1,000 gal/month</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-300">$45,000+</div>
                    <div className="text-orange-100">3,000 gal/month</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-300">$75,000+</div>
                    <div className="text-orange-100">5,000+ gal/month</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                >
                  Get Custom Bulk Quote <ArrowRight className="ml-2" size={20} />
                </Link>
                <a
                  href="tel:+18764495172"
                  className="inline-flex items-center bg-transparent text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white"
                >
                  Call (876) 449-5172
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Save with Bulk Fuel Supply?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join hundreds of businesses saving money with our bulk fuel supply programs.
              Professional service, competitive pricing, reliable delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
              >
                Start Bulk Program <ArrowRight className="ml-2" size={20} />
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
                <strong>Minimum Order:</strong> 500 gallons • <strong>Maximum Savings:</strong> Up to 15% off standard pricing
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}