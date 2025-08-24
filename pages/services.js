import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import { Truck, Fuel, Clock, Shield, Zap, Building2, ArrowRight, CheckCircle, MapPin, Users, Phone, Star, TrendingUp, Award, Leaf } from 'lucide-react';

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
    "areaServed": "Jamaica"
  };

  const services = [
    {
      id: 'fleet-refuelling',
      title: 'Fleet Refuelling',
      description: 'Professional on-site refuelling for commercial fleets. Keep your vehicles running with scheduled deliveries and emergency support.',
      shortDesc: 'On-site fleet fuel management',
      href: '/services/fleet-refuelling',
      icon: Truck,
      color: 'blue',
      stats: '95% Uptime',
      features: ['Scheduled Programs', '24/7 Emergency Service', 'Real-time Tracking', 'Cost Optimization']
    },
    {
      id: 'generator-refuelling',
      title: 'Generator Refuelling Services',
      description: 'Ensure uninterrupted power with reliable generator fuel delivery. Critical facility support with 24/7 monitoring.',
      shortDesc: '24/7 emergency power support',
      href: '/services/generator-refuelling',
      icon: Zap,
      color: 'green',
      stats: '2-Hour Response',
      features: ['Critical Facility Support', 'Automated Monitoring', 'Emergency Response', 'Remote Alerts']
    },
    {
      id: 'on-site-fuel-delivery',
      title: 'On-Site Fuel Delivery',
      description: 'Direct fuel delivery to construction sites, farms, and remote locations anywhere across Jamaica.',
      shortDesc: 'Direct delivery anywhere in Jamaica',
      href: '/services/on-site-fuel-delivery',
      icon: MapPin,
      color: 'purple',
      stats: '100% Coverage',
      features: ['Remote Access', 'Flexible Scheduling', 'Construction Sites', 'Agricultural Support']
    },
    {
      id: 'bulk-fuel',
      title: 'Bulk Fuel Supply',
      description: 'Large volume fuel supply for industrial operations with competitive pricing and professional service.',
      shortDesc: 'Industrial volume fuel supply',
      href: '/services/bulk-fuel',
      icon: Building2,
      color: 'orange',
      stats: 'Up to 15% Savings',
      features: ['Volume Discounts', 'Industrial Grade', 'Custom Schedules', 'Dedicated Support']
    },
    {
      id: 'haulage',
      title: 'Haulage Services',
      description: 'Licensed petroleum haulage contractor providing professional fuel transportation for industry partners.',
      shortDesc: 'Licensed petroleum transportation',
      href: '/services/haulage',
      icon: Users,
      color: 'slate',
      stats: '100% Compliant',
      features: ['Licensed Contractor', 'Professional Fleet', 'B2B Partnership', 'Safety Certified']
    },
    {
      id: 'ulsd',
      title: 'Ultra Low Sulphur Diesel',
      description: 'Premium environmentally-friendly diesel with 90% cleaner emissions and superior performance.',
      shortDesc: '90% cleaner emissions fuel',
      href: '/services/ulsd',
      icon: Leaf,
      color: 'emerald',
      stats: '90% Cleaner',
      features: ['Environmental Focus', 'International Standards', '25% Longer Engine Life', 'Premium Quality']
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'No more trips to fuel stations. Your equipment stays productive while we handle refuelling on-site.',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Convenience',
      description: 'We work around your schedule with 24/7 service. Emergency fuel delivery during outages and hurricanes.',
      color: 'green'
    },
    {
      icon: TrendingUp,
      title: 'Cost-Savings',
      description: 'Competitive bulk pricing with no retail markups. Reduce labor costs and eliminate fuel theft.',
      color: 'purple'
    },
    {
      icon: Award,
      title: 'Industry-Leading Service',
      description: 'State-of-the-art tracking, professional drivers, and custom fuel management plans.',
      color: 'orange'
    }
  ];

  const stats = [
    { number: '500+', label: 'Satisfied Customers', icon: Users },
    { number: '24/7', label: 'Emergency Service', icon: Clock },
    { number: '14', label: 'Parishes Served', icon: MapPin },
    { number: '100%', label: 'Reliable Delivery', icon: Shield }
  ];

  const industries = [
    'Construction', 'Transportation & Logistics', 'Agriculture', 'Manufacturing',
    'Healthcare', 'Government', 'Mining', 'Marine Operations'
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      slate: 'from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700',
      emerald: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700'
    };
    return colors[color] || colors.blue;
  };

  return (
    <>
      <Head>
        <title>Professional Fuel Delivery Services | Nevloh Limited Jamaica</title>
        <meta name="description" content="Jamaica's premier fuel delivery services. Fleet refuelling, generator services, on-site delivery, bulk fuel supply, haulage, and ULSD. 24/7 emergency service across all 14 parishes." />
        <meta name="keywords" content="fuel delivery services Jamaica, fleet refuelling, generator fuel delivery, on-site fuel delivery, bulk fuel supply, diesel delivery services, ULSD Jamaica" />

        <meta property="og:title" content="Professional Fuel Delivery Services | Nevloh Limited" />
        <meta property="og:description" content="Complete range of fuel delivery services across Jamaica. Professional, reliable, 24/7 service." />
        <meta property="og:url" content="https://nevloh.com/services" />
        <meta property="og:image" content="https://nevloh.com/images/services-overview.webp" />

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
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
              The Best Fuel Delivery Services
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Across Jamaica
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              Professional fuel delivery to your fleet, construction sites, and equipment.
              Save time, reduce costs, and keep your operations running smoothly.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl transform hover:-translate-y-1"
              >
                Get Fuel Now <ArrowRight className="ml-2" size={24} />
              </Link>
              <a
                href="tel:+18764495172"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl border-2 border-blue-200"
              >
                <Phone className="mr-2" size={24} />
                (876) 449-5172
              </a>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                    <IconComponent className="text-blue-600 mx-auto mb-2" size={32} />
                    <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                We Deliver Fuel So You Can Focus On Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional fuel delivery services that save time, reduce costs, and eliminate the hassle of traditional refuelling.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                const colorMap = {
                  blue: 'text-blue-600 bg-blue-100',
                  green: 'text-green-600 bg-green-100',
                  purple: 'text-purple-600 bg-purple-100',
                  orange: 'text-orange-600 bg-orange-100'
                };

                return (
                  <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                    <div className={`w-20 h-20 ${colorMap[benefit.color]} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Our Comprehensive Fuel Services
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Professional fuel delivery solutions tailored to meet your specific business needs across Jamaica
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const gradientClass = getColorClasses(service.color);

                return (
                  <div key={service.id} className="group relative">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      {/* Header */}
                      <div className={`bg-gradient-to-r ${gradientClass} p-8 text-white relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-8 -translate-y-8"></div>
                        <div className="relative z-10">
                          <IconComponent size={48} className="mb-4" />
                          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                          <div className="text-sm bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 inline-block">
                            {service.stats}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                        <div className="space-y-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Link
                          href={service.href}
                          className={`inline-flex items-center bg-gradient-to-r ${gradientClass} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 w-full justify-center group-hover:scale-105`}
                        >
                          Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Industries We Serve Across Jamaica
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional fuel delivery solutions for businesses in every major industry
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="font-semibold text-gray-800">{industry}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 mb-8">And many more industries across all 14 parishes in Jamaica</p>
              <Link
                href="/industries"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
              >
                View All Industries <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/jamaica-pattern.svg')] opacity-10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Island-Wide Fuel Delivery Coverage
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
                  Professional fuel delivery services across all 14 parishes in Jamaica.
                  From Kingston to Negril, we've got you covered.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center mb-12">
                  {[
                    'Kingston', 'Saint Andrew', 'Saint Catherine', 'Clarendon',
                    'Manchester', 'Saint Elizabeth', 'Westmoreland', 'Hanover',
                    'Saint James', 'Trelawny', 'Saint Ann', 'Saint Mary',
                    'Portland', 'Saint Thomas'
                  ].map((parish, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-colors duration-300">
                      <span className="text-sm font-medium">{parish}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl transform hover:-translate-y-1"
                >
                  Request Service In Your Area <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Join hundreds of satisfied customers across Jamaica who trust Nevloh Limited
              for reliable, professional fuel delivery services.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-5 rounded-full text-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-2xl transform hover:-translate-y-1"
              >
                Get Your Free Quote <ArrowRight className="ml-2" size={24} />
              </Link>
              <a
                href="tel:+18764495172"
                className="inline-flex items-center bg-white text-gray-800 px-10 py-5 rounded-full text-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-2xl border-2 border-gray-200"
              >
                <Phone className="mr-2" size={24} />
                Call: (876) 449-5172
              </a>
            </div>

            <div className="flex items-center justify-center space-x-8 text-gray-500 text-sm">
              <div className="flex items-center">
                <Clock className="mr-2" size={16} />
                24/7 Emergency Service
              </div>
              <div className="flex items-center">
                <Shield className="mr-2" size={16} />
                Licensed & Insured
              </div>
              <div className="flex items-center">
                <Star className="mr-2" size={16} />
                5-Star Rated Service
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}