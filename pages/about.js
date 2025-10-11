import React, { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import {
  User,
  Zap,
  Fuel,
  Award,
  Target,
  Users,
  TrendingUp,
  Globe,
  Heart,
  Shield,
  Lightbulb,
  Battery,
  Wind,
  Sun,
  ChevronRight,
  Play,
  Calendar,
  MapPin,
  Phone,
  MessageSquare
} from 'lucide-react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('story');

  const milestones = [
    {
      year: '2022',
      title: 'Foundation of Nevloh Limited',
      description: 'Nevloh Limited was founded with a vision to revolutionize fuel delivery services in Jamaica, starting in Saint Catherine Parish with professional ULSD delivery and comprehensive energy solutions.',
      icon: Fuel,
      color: 'blue'
    },
    {
      year: '2023',
      title: 'Rapid Market Expansion',
      description: 'Expanded professional fuel delivery services across all 14 Jamaican parishes within first year, establishing reliable supply chains and 24/7 emergency response capabilities.',
      icon: Globe,
      color: 'green'
    },
    {
      year: '2024',
      title: 'Technology & Service Excellence',
      description: 'Implemented advanced logistics systems, GPS tracking, and expanded our modern fuel delivery fleet to achieve 99.8% delivery success rate across Jamaica.',
      icon: Lightbulb,
      color: 'purple'
    },
    {
      year: '2025',
      title: 'Sustainable Energy Leadership',
      description: 'Strategic expansion into comprehensive energy solutions including solar energy systems, battery storage, and renewable energy consulting to lead Jamaica\'s energy transformation.',
      icon: Zap,
      color: 'yellow'
    }
  ];

  const energySolutions = [
    {
      icon: Fuel,
      title: 'Professional Fuel Delivery Services',
      description: 'Ultra Low Sulphur Diesel (ULSD), gasoline, kerosene, and LPG delivery services across Jamaica with 99.8% delivery success rate and 24/7 emergency response.',
      status: 'Industry Leader'
    },
    {
      icon: Sun,
      title: 'Solar Energy Solutions',
      description: 'Complete solar panel installation, maintenance, and energy efficiency consulting for residential and commercial properties throughout Jamaica.',
      status: 'Growing Division'
    },
    {
      icon: Battery,
      title: 'Energy Storage Systems',
      description: 'Advanced battery backup systems and energy storage solutions for reliable power supply, perfect for Jamaica\'s tropical climate challenges.',
      status: 'Innovation Focus'
    },
    {
      icon: Zap,
      title: 'Smart Energy Management',
      description: 'Intelligent energy monitoring systems and grid solutions for optimized energy distribution and consumption across commercial facilities.',
      status: 'Future Vision'
    },
    {
      icon: Wind,
      title: 'Renewable Energy Consulting',
      description: 'Expert consulting for wind energy systems and renewable energy integration for businesses seeking sustainable alternatives in the Caribbean.',
      status: 'Consulting Services'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Reliability & Safety',
      description: 'Dependable energy solutions you can count on, 24/7 across Jamaica with industry-leading safety standards and delivery success rates exceeding 99%.'
    },
    {
      icon: Heart,
      title: 'Customer-First Excellence',
      description: 'Every decision is made with our customers\' energy needs at the center, ensuring exceptional service, competitive pricing, and personalized solutions across Jamaica.'
    },
    {
      icon: Lightbulb,
      title: 'Energy Innovation Leadership',
      description: 'Pioneering new energy technologies and delivery methods to advance Jamaica\'s sustainable energy future with cutting-edge ULSD and renewable solutions.'
    },
    {
      icon: Users,
      title: 'Community Development',
      description: 'Supporting local Jamaican communities and sustainable development through reliable energy access, job creation, and economic growth initiatives.'
    }
  ];

  const achievements = [
    { number: '50,000+', label: 'Gallons of ULSD Delivered', icon: Fuel },
    { number: '14', label: 'Jamaican Parishes Served', icon: MapPin },
    { number: '99.8%', label: 'Delivery Success Rate', icon: Award },
    { number: '24/7', label: 'Emergency Service Available', icon: Shield },
    { number: '3+', label: 'Years of Excellence', icon: TrendingUp }
  ];

  // Schema markup for About page
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Nevloh Limited",
      "description": "Jamaica's premier energy solutions company specializing in Ultra Low Sulphur Diesel delivery, solar energy systems, and comprehensive energy storage solutions across all 14 parishes.",
      "url": "https://www.nevloh.com",
      "logo": "https://www.nevloh.com/images/nevloh-logo.webp",
      "foundingDate": "2022",
      "founder": {
        "@type": "Person",
        "name": "Sashell Cooper-Nevins",
        "jobTitle": "Managing Director & Founder",
        "description": "Visionary leader transforming Jamaica's energy sector through innovative fuel delivery and renewable energy solutions."
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Caymanas Bay",
        "addressLocality": "Spanish Town",
        "addressRegion": "Saint Catherine Parish",
        "addressCountry": "Jamaica"
      },
      "areaServed": [
        "Kingston", "Saint Andrew", "Saint Catherine", "Clarendon", "Manchester",
        "Saint Elizabeth", "Westmoreland", "Hanover", "Saint James", "Trelawny",
        "Saint Ann", "Saint Mary", "Portland", "Saint Thomas"
      ],
      "industry": "Energy Solutions",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 15,
        "maxValue": 25
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Comprehensive Energy Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ultra Low Sulphur Diesel Delivery",
              "description": "Professional ULSD delivery across Jamaica with 90% cleaner emissions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Solar Energy Installation",
              "description": "Complete solar panel systems for residential and commercial properties"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Energy Storage Solutions",
              "description": "Advanced battery backup systems for reliable power supply"
            }
          }
        ]
      },
      "award": [
        "Jamaica Business Excellence Recognition 2023",
        "Environmental Sustainability Leadership Award 2024"
      ],
      "knowsAbout": [
        "Ultra Low Sulphur Diesel",
        "Solar Energy Systems",
        "Battery Storage Solutions",
        "Renewable Energy Consulting",
        "Emergency Fuel Delivery",
        "Commercial Energy Solutions"
      ]
    }
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sashell Cooper-Nevins",
    "jobTitle": "Managing Director & Founder",
    "worksFor": {
      "@type": "Organization",
      "name": "Nevloh Limited",
      "url": "https://www.nevloh.com"
    },
    "description": "Visionary entrepreneur and energy industry leader transforming Jamaica's fuel delivery and renewable energy landscape through innovative solutions and sustainable practices.",
    "knowsAbout": [
      "Energy Solutions",
      "Fuel Delivery Systems",
      "Solar Energy",
      "Business Leadership",
      "Sustainable Energy",
      "Caribbean Energy Markets"
    ],
    "alumniOf": "Business Leadership Program",
    "award": [
      "Young Entrepreneur of the Year 2024",
      "Energy Innovation Leadership Award 2024"
    ]
  };

  return (
    <>
      <Head>
        {/* SEO Meta Tags for About Page */}
        <title>About Nevloh Limited - Jamaica's Premier Energy Solutions Company | Sashell Cooper-Nevins Leadership</title>
        <meta name="description" content="Learn about Nevloh Limited, Jamaica's leading energy company founded by Sashell Cooper-Nevins in 2022. Professional ULSD fuel delivery, solar energy systems, and battery storage solutions across all 14 parishes." />

        {/* Enhanced Keywords for About Page */}
        <meta name="keywords" content="About Nevloh Limited, Sashell Cooper-Nevins founder, Jamaica energy company history, fuel delivery company Jamaica, solar energy Jamaica, energy solutions company, ULSD supplier Jamaica, Saint Catherine Parish energy, Spanish Town fuel delivery, renewable energy Jamaica, business leadership Jamaica, energy innovation Caribbean" />

        {/* Essential Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Nevloh Limited - Sashell Cooper-Nevins" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nevloh.com/about" />
        <meta property="og:title" content="About Nevloh Limited - Jamaica's Energy Innovation Leader" />
        <meta property="og:description" content="Discover how Sashell Cooper-Nevins founded Jamaica's premier energy solutions company in 2022. From ULSD fuel delivery pioneers to comprehensive renewable energy systems across all parishes." />
        <meta property="og:image" content="https://www.nevloh.com/images/nevloh-about-og.webp" />
        <meta property="og:site_name" content="Nevloh Limited" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Nevloh Limited - Jamaica's Energy Solutions Leader" />
        <meta name="twitter:description" content="Meet Sashell Cooper-Nevins and learn about Nevloh Limited's journey from fuel delivery pioneers to Jamaica's comprehensive energy solutions company since 2022." />
        <meta name="twitter:image" content="https://www.nevloh.com/images/nevloh-about-twitter.webp" />

        {/* Local SEO */}
        <meta name="geo.region" content="JM" />
        <meta name="geo.placename" content="Spanish Town, Saint Catherine, Jamaica" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.nevloh.com/about" />

        {/* Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Head>

      {/* Structured Data */}
      <Script
        id="about-page-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema)
        }}
      />

      <Script
        id="person-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        {/* Hero Section with Managing Director */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <header>
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                      Powering Jamaica's
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block leading-normal pb-2">
                        Energy Future
                      </span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      From Ultra Low Sulphur Diesel delivery pioneers to comprehensive energy solution providers,
                      Nevloh Limited is transforming how Jamaica powers its future with reliable fuel delivery,
                      solar energy systems, and innovative energy storage solutions across all 14 parishes.
                    </p>
                  </header>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {achievements.slice(0, 2).map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <IconComponent size={24} className="text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Managing Director Card */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20"></div>
                  <div className="relative">
                    {/* Profile Image with Next.js Image optimization */}
                    <div className="w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden shadow-lg relative">
                      {/* Always visible gradient background */}
                      <div className="w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center absolute inset-0">
                        <User size={56} className="text-blue-600" />
                      </div>

                      {/* Image overlay that shows when available */}
                      <Image
                        src="/images/sashell-cooper-nevins.png"
                        alt="Sashell Cooper-Nevins, Managing Director and Founder of Nevloh Limited, Jamaica's leading energy solutions company specializing in ULSD fuel delivery and solar energy systems"
                        fill
                        className="object-cover relative z-10"
                        priority
                        sizes="160px"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                        onLoad={(e) => {
                          e.currentTarget.style.display = 'block';
                        }}
                      />
                    </div>

                    <div className="text-center space-y-4" itemScope itemType="https://schema.org/Person">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800" itemProp="name">Sashell Cooper-Nevins</h2>
                        <p className="text-blue-600 font-semibold" itemProp="jobTitle">Managing Director & Founder</p>
                        <meta itemProp="worksFor" content="Nevloh Limited" />
                      </div>

                      <blockquote className="text-gray-600 italic leading-relaxed">
                        "Our vision extends far beyond fuel delivery. We're building Jamaica's
                        sustainable energy ecosystem, one innovative solution at a time, serving all 14 parishes with excellence."
                      </blockquote>

                      <div className="flex justify-center space-x-4 pt-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-800">3+</div>
                          <div className="text-xs text-gray-600">Years Leadership</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-800">14</div>
                          <div className="text-xs text-gray-600">Parishes Served</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="px-4 -mt-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <nav className="bg-white rounded-2xl p-2 shadow-lg" role="navigation" aria-label="About page sections">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  { id: 'story', label: 'Our Story', icon: Target },
                  { id: 'vision', label: 'Vision & Mission', icon: Lightbulb },
                  { id: 'energy', label: 'Energy Solutions', icon: Zap },
                  { id: 'values', label: 'Our Values', icon: Heart }
                ].map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center justify-center p-4 rounded-xl transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      aria-pressed={activeTab === tab.id}
                      aria-label={`View ${tab.label} section`}
                    >
                      <IconComponent size={20} className="mr-2" />
                      <span className="font-medium text-sm md:text-base">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>
        </section>

        {/* Content Sections */}
        <main className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Our Story */}
            {activeTab === 'story' && (
              <article className="space-y-12 animate-fade-in">
                <header className="text-center space-y-4">
                  <h2 className="text-4xl font-bold text-gray-800">The Nevloh Limited Journey</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    From innovative startup in 2022 to becoming Jamaica's leading comprehensive energy solutions company serving all 14 parishes with excellence in just 3 years
                  </p>
                </header>

                {/* Timeline */}
                <section className="relative" aria-label="Company timeline">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 to-purple-300"></div>
                  <div className="space-y-12">
                    {milestones.map((milestone, index) => {
                      const IconComponent = milestone.icon;
                      const isEven = index % 2 === 0;

                      return (
                        <div key={index} className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                          <div className={`lg:w-1/2 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                              <div className="flex items-center mb-4">
                                <div className={`w-12 h-12 bg-${milestone.color}-100 rounded-lg flex items-center justify-center mr-4`}>
                                  <IconComponent size={24} className={`text-${milestone.color}-600`} />
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-gray-800">{milestone.year}</div>
                                  <h3 className="text-lg font-semibold text-gray-700">{milestone.title}</h3>
                                </div>
                              </div>
                              <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                            </div>
                          </div>

                          <div className="lg:w-1/2 flex justify-center">
                            <div className={`w-16 h-16 bg-${milestone.color}-500 rounded-full flex items-center justify-center shadow-lg z-10`}>
                              <IconComponent size={28} className="text-white" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </article>
            )}

            {/* Vision & Mission */}
            {activeTab === 'vision' && (
              <article className="space-y-12 animate-fade-in">
                <div className="grid lg:grid-cols-2 gap-12">
                  <section className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                      <Target size={32} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                    <p className="text-lg leading-relaxed opacity-90">
                      To become the Caribbean's leading integrated energy company,
                      providing sustainable, reliable, and innovative energy solutions including ULSD fuel delivery and solar systems
                      that power communities and drive economic growth across Jamaica and the region.
                    </p>
                  </section>

                  <section className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                      <Award size={32} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                    <p className="text-lg leading-relaxed opacity-90">
                      To deliver exceptional energy solutions through innovation,
                      reliability, and customer-focused service, while pioneering
                      the transition to sustainable energy in Jamaica with professional fuel delivery and renewable energy solutions.
                    </p>
                  </section>
                </div>

                {/* Leadership Message */}
                <section className="bg-white rounded-3xl p-8 shadow-lg">
                  <div className="max-w-4xl mx-auto text-center space-y-6">
                    <div className="w-24 h-24 rounded-full mx-auto flex items-center justify-center mb-4 overflow-hidden shadow-lg relative">
                      {/* Always visible gradient background */}
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center absolute inset-0">
                        <User size={32} className="text-blue-600" />
                      </div>

                      {/* Image overlay that shows when available */}
                      <Image
                        src="/images/sashell-cooper-nevins.png"
                        alt="Sashell Cooper-Nevins, Founder and Managing Director of Nevloh Limited"
                        fill
                        className="object-cover relative z-10"
                        sizes="96px"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                        onLoad={(e) => {
                          e.currentTarget.style.display = 'block';
                        }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">A Message from Our Managing Director</h3>
                    <blockquote className="text-lg text-gray-600 italic leading-relaxed">
                      "When I founded Nevloh Limited in 2022, I envisioned more than just a fuel delivery company.
                      I saw an opportunity to transform how Jamaica thinks about energy across all 14 parishes. In just 3 years, as we expand
                      into solar energy systems, battery storage, and comprehensive energy consulting, that vision is becoming reality.
                      We're not just delivering energy – we're delivering Jamaica's sustainable future with professional excellence."
                    </blockquote>
                    <cite className="text-blue-600 font-semibold">— Sashell Cooper-Nevins, Managing Director & Founder</cite>
                  </div>
                </section>
              </article>
            )}

            {/* Energy Solutions */}
            {activeTab === 'energy' && (
              <article className="space-y-12 animate-fade-in">
                <header className="text-center space-y-4">
                  <h2 className="text-4xl font-bold text-gray-800">Comprehensive Energy Portfolio</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Evolving from traditional ULSD fuel delivery leaders to complete energy ecosystem solutions across all Jamaican parishes
                  </p>
                </header>

                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {energySolutions.map((solution, index) => {
                    const IconComponent = solution.icon;
                    const statusColors = {
                      'Industry Leader': 'bg-green-100 text-green-800',
                      'Growing Division': 'bg-blue-100 text-blue-800',
                      'Innovation Focus': 'bg-purple-100 text-purple-800',
                      'Future Vision': 'bg-yellow-100 text-yellow-800',
                      'Consulting Services': 'bg-orange-100 text-orange-800'
                    };

                    return (
                      <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4">
                          <IconComponent size={32} className="text-blue-600" />
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 mb-2">{solution.title}</h3>
                        <p className="text-gray-600 mb-4">{solution.description}</p>

                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusColors[solution.status]}`}>
                          {solution.status}
                        </span>
                      </div>
                    );
                  })}
                </section>

                {/* Future Roadmap */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                  <div className="text-center space-y-6">
                    <h3 className="text-3xl font-bold">2025-2030 Strategic Energy Roadmap</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Calendar size={32} className="mx-auto" />
                        <h4 className="font-semibold">2025-2026</h4>
                        <p className="text-sm opacity-90">Launch comprehensive solar energy installation program across Jamaica</p>
                      </div>
                      <div className="space-y-2">
                        <TrendingUp size={32} className="mx-auto" />
                        <h4 className="font-semibold">2027-2028</h4>
                        <p className="text-sm opacity-90">Scale renewable energy installations throughout the Caribbean region</p>
                      </div>
                      <div className="space-y-2">
                        <Globe size={32} className="mx-auto" />
                        <h4 className="font-semibold">2029-2030</h4>
                        <p className="text-sm opacity-90">Expand integrated energy solutions to neighboring Caribbean markets</p>
                      </div>
                    </div>
                  </div>
                </section>
              </article>
            )}

            {/* Our Values */}
            {activeTab === 'values' && (
              <article className="space-y-12 animate-fade-in">
                <header className="text-center space-y-4">
                  <h2 className="text-4xl font-bold text-gray-800">Our Core Values</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    The principles that guide every decision and drive our success in Jamaica's energy sector across all 14 parishes
                  </p>
                </header>

                <section className="grid md:grid-cols-2 gap-8">
                  {values.map((value, index) => {
                    const IconComponent = value.icon;
                    return (
                      <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <IconComponent size={32} className="text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{value.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </section>

                {/* Team Culture */}
                <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                  <div className="text-center space-y-6">
                    <h3 className="text-3xl font-bold text-gray-800">Join Our Energy Revolution</h3>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      We're always looking for passionate individuals who share our vision
                      of transforming Jamaica's energy landscape through innovation, sustainable ULSD delivery, and renewable energy solutions.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <a
                        href="/contact"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                        aria-label="Contact Nevloh Limited"
                      >
                        <Phone size={20} className="mr-2" />
                        Contact Us
                      </a>
                      <a
                        href="/services"
                        className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors flex items-center"
                        aria-label="Learn more about Nevloh Limited services"
                      >
                        <ChevronRight size={20} className="mr-2" />
                        Our Services
                      </a>
                    </div>
                  </div>
                </section>
              </article>
            )}
          </div>
        </main>

        {/* Bottom Stats Section */}
        <section className="py-16 px-4 bg-white" aria-label="Company achievements">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Impact Across Jamaica</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Measurable results from our commitment to excellence in fuel delivery and energy solutions across all 14 parishes since 2022
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {achievements.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                      <IconComponent size={32} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-gray-800">{stat.number}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Revised Company Excellence Section */}
            <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-lg">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    What Sets Nevloh Limited Apart in Jamaica's Energy Market
                  </h3>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Discover the key differentiators that have established us as a trusted energy solutions provider since 2022
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  {/* ULSD Delivery Excellence Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                        <Fuel size={28} className="text-blue-600" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-800">ULSD Fuel Delivery Excellence</h4>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Since our founding in 2022, we've rapidly become Jamaica's premier Ultra Low Sulphur Diesel supplier,
                      serving all 14 parishes with professional fuel delivery services. Our modern fleet and trained drivers
                      ensure 99.8% delivery success rates with 24/7 emergency response capabilities.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm">Professional drivers with safety certifications</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm">Modern fuel delivery fleet with GPS tracking</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm">Competitive pricing with transparent quotes</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm">Emergency fuel delivery across all parishes</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm">Rapid expansion across Jamaica in just 3 years</span>
                      </div>
                    </div>
                  </div>

                  {/* Comprehensive Energy Solutions Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                        <Zap size={28} className="text-purple-600" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-800">Comprehensive Energy Solutions</h4>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Beyond fuel delivery, we're expanding into solar energy systems, battery storage solutions, and renewable
                      energy consulting. Our vision encompasses Jamaica's complete energy transformation with sustainable,
                      reliable solutions for the future.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-sm">Solar panel installation and maintenance</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-sm">Advanced battery backup systems</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-sm">Energy efficiency consulting services</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-sm">Custom energy solutions for businesses</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-sm">Innovative approach to Caribbean energy challenges</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative max-w-5xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Experience the
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Nevloh Difference?
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Partner with Jamaica's trusted energy solutions provider for reliable fuel delivery and innovative renewable energy systems.
                From emergency ULSD delivery to comprehensive solar installations, we're powering Jamaica's future since 2022.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a
                href="tel:+18764495172"
                className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-6 rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-300 flex flex-col items-center space-y-3 hover:scale-105 transform"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Phone size={24} className="text-white" />
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">Call Now</div>
                  <div className="text-sm opacity-80 group-hover:opacity-100">+1-876-449-5172</div>
                </div>
              </a>

              <a
                href="/contact"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-6 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex flex-col items-center space-y-3 hover:scale-105 transform shadow-xl"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <ChevronRight size={24} className="text-white" />
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">Get Free Quote</div>
                  <div className="text-sm opacity-90">Energy Solutions</div>
                </div>
              </a>

              <a
                href="https://wa.me/18764495172"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-600 text-white px-8 py-6 rounded-2xl hover:bg-green-700 transition-all duration-300 flex flex-col items-center space-y-3 hover:scale-105 transform shadow-lg"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageSquare size={24} className="text-white" />
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">WhatsApp</div>
                  <div className="text-sm opacity-90">Quick Response</div>
                </div>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 mt-12 border-t border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-blue-400">50,000+</div>
                  <div className="text-sm text-blue-200">Gallons Delivered</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-400">14</div>
                  <div className="text-sm text-purple-200">Parishes Served</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-green-400">99.8%</div>
                  <div className="text-sm text-green-200">Success Rate</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-yellow-400">24/7</div>
                  <div className="text-sm text-yellow-200">Emergency Service</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;