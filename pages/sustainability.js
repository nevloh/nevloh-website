// pages/sustainability.js
import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {
  Leaf,
  Recycle,
  Sun,
  Wind,
  Battery,
  Globe,
  TreePine,
  Droplets,
  Heart,
  Shield,
  TrendingUp,
  Users,
  Award,
  Target,
  CheckCircle,
  ArrowRight,
  Zap,
  Calendar,
  Building2,
  Truck
} from 'lucide-react';

// Color utility functions for Tailwind - CRITICAL FIX
const getIconColorClass = (color) => {
  const colors = {
    green: 'text-green-600',
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600'
  };
  return colors[color] || 'text-gray-600';
};

const getBgColorClass = (color) => {
  const colors = {
    green: 'bg-green-100',
    blue: 'bg-blue-100',
    purple: 'bg-purple-100',
    orange: 'bg-orange-100'
  };
  return colors[color] || 'bg-gray-100';
};

// SEO and Structured Data - FIXED URLs
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nevloh Limited",
  "description": "Leading Jamaica's transition to sustainable energy with clean fuel solutions and renewable energy services",
  "url": "https://www.nevloh.com/sustainability",
  "logo": "https://www.nevloh.com/images/nevloh-logo.webp",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "JM",
    "addressRegion": "Saint Catherine Parish",
    "addressLocality": "Spanish Town"
  },
  "sustainabilityInitiative": [
    {
      "@type": "Thing",
      "name": "Ultra Low Sulphur Diesel",
      "description": "90% reduction in sulfur emissions"
    },
    {
      "@type": "Thing",
      "name": "Carbon Neutrality Goal",
      "description": "Commitment to achieve carbon neutrality by 2030"
    },
    {
      "@type": "Thing",
      "name": "Renewable Energy Solutions",
      "description": "Solar energy installation and battery storage services"
    }
  ]
};

const SustainabilityPage = () => {
  const [activeCommitment, setActiveCommitment] = useState(0);

  const sustainabilityPillars = [
    {
      icon: Leaf,
      title: "Environmental Protection",
      description: "Reducing emissions and protecting Jamaica's natural beauty",
      color: "green",
      initiatives: [
        "Ultra Low Sulphur Diesel reduces emissions by 90%",
        "Transitioning to renewable energy solutions",
        "Carbon footprint reduction programs",
        "Environmental impact monitoring"
      ]
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Supporting local communities and sustainable development",
      color: "blue",
      initiatives: [
        "Local employment and training programs",
        "Community education on clean energy",
        "Supporting local environmental initiatives",
        "Partnerships with schools and universities"
      ]
    },
    {
      icon: Zap,
      title: "Clean Energy Future",
      description: "Leading Jamaica's transition to sustainable energy",
      color: "purple",
      initiatives: [
        "Solar energy installation services",
        "Battery storage solutions",
        "Smart grid technology development",
        "Electric vehicle charging infrastructure"
      ]
    },
    {
      icon: Globe,
      title: "Responsible Business",
      description: "Operating with integrity and transparency",
      color: "orange",
      initiatives: [
        "Sustainable supply chain management",
        "Ethical business practices",
        "Regular sustainability reporting",
        "Stakeholder engagement programs"
      ]
    }
  ];

  const environmentalImpact = [
    {
      metric: "90%",
      description: "Reduction in sulfur emissions with ULSD",
      icon: Leaf,
      color: "green"
    },
    {
      metric: "25%",
      description: "Longer engine life reduces waste",
      icon: Recycle,
      color: "blue"
    },
    {
      metric: "50+",
      description: "Trees planted through partnership programs",
      icon: TreePine,
      color: "green"
    },
    {
      metric: "100%",
      description: "Commitment to carbon neutrality by 2030",
      icon: Target,
      color: "purple"
    }
  ];

  const futureInitiatives = [
    {
      year: "2025",
      title: "Solar Energy Expansion",
      description: "Launch comprehensive solar installation services for businesses and homes",
      icon: Sun,
      status: "In Progress"
    },
    {
      year: "2026",
      title: "Electric Vehicle Support",
      description: "Establish EV charging stations across major routes in Jamaica",
      icon: Battery,
      status: "Planning"
    },
    {
      year: "2027",
      title: "Wind Energy Projects",
      description: "Partner with local communities for small-scale wind energy solutions",
      icon: Wind,
      status: "Research"
    },
    {
      year: "2028",
      title: "Smart Grid Integration",
      description: "Develop intelligent energy distribution networks",
      icon: Zap,
      status: "Vision"
    },
    {
      year: "2029",
      title: "Biofuel Development",
      description: "Research and develop sustainable biofuel alternatives",
      icon: Leaf,
      status: "Vision"
    },
    {
      year: "2030",
      title: "Carbon Neutral Operations",
      description: "Achieve complete carbon neutrality across all operations",
      icon: Globe,
      status: "Goal"
    }
  ];

  const partnerships = [
    {
      name: "Jamaica Environment Trust",
      focus: "Environmental Conservation",
      description: "Collaborating on reforestation and coastal protection projects"
    },
    {
      name: "University of the West Indies",
      focus: "Research & Development",
      description: "Joint research on renewable energy technologies"
    },
    {
      name: "Caribbean Climate-Smart Coalition",
      focus: "Climate Action",
      description: "Regional initiatives for climate resilience"
    },
    {
      name: "Local Fishing Communities",
      focus: "Marine Protection",
      description: "Supporting sustainable fishing practices and marine conservation"
    }
  ];

  const sustainablePractices = [
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Advanced water recycling systems at our facilities"
    },
    {
      icon: Recycle,
      title: "Waste Reduction",
      description: "Zero-waste-to-landfill policy with comprehensive recycling"
    },
    {
      icon: Truck,
      title: "Efficient Logistics",
      description: "Route optimization to reduce fuel consumption and emissions"
    },
    {
      icon: Building2,
      title: "Green Facilities",
      description: "Solar-powered offices and energy-efficient operations"
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      "In Progress": "bg-green-100 text-green-800",
      "Planning": "bg-blue-100 text-blue-800",
      "Research": "bg-yellow-100 text-yellow-800",
      "Vision": "bg-purple-100 text-purple-800",
      "Goal": "bg-orange-100 text-orange-800"
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  // FIXED: Get active pillar safely
  const activePillar = sustainabilityPillars[activeCommitment];
  const ActiveIcon = activePillar.icon;

  return (
    <>
      <Head>
        <title>Sustainability Commitments | Nevloh Limited - Clean Energy Jamaica</title>
        <meta
          name="description"
          content="Discover Nevloh Limited's sustainability initiatives in Jamaica. Leading the transition to clean energy with 90% emission reduction, solar solutions, and carbon neutrality by 2030."
        />
        <meta
          name="keywords"
          content="sustainability Jamaica, clean energy, ULSD diesel, solar energy, carbon neutral, environmental protection, renewable energy Jamaica, sustainable fuel"
        />

        {/* FIXED: Added googlebot meta */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Nevloh Limited" />

        {/* FIXED: All URLs now have www */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nevloh.com/sustainability" />
        <meta property="og:title" content="Sustainability Commitments | Nevloh Limited - Clean Energy Jamaica" />
        <meta property="og:description" content="Leading Jamaica's transition to sustainable energy with clean fuel solutions and renewable energy services. 90% emission reduction with ULSD." />
        <meta property="og:site_name" content="Nevloh Limited" />
        <meta property="og:locale" content="en_JM" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.nevloh.com/sustainability" />
        <meta property="twitter:title" content="Sustainability Commitments | Nevloh Limited" />
        <meta property="twitter:description" content="Leading Jamaica's transition to sustainable energy with 90% emission reduction and carbon neutrality by 2030." />

        {/* FIXED: Consistent comma separators */}
        <meta name="geo.region" content="JM-13" />
        <meta name="geo.placename" content="Spanish Town, Saint Catherine Parish" />
        <meta name="geo.position" content="17.9909,-76.9564" />
        <meta name="ICBM" content="17.9909,-76.9564" />

        {/* FIXED: Canonical with www */}
        <link rel="canonical" href="https://www.nevloh.com/sustainability" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-800">
                  Building a
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent block">
                    Sustainable Future
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  At Nevloh Limited, sustainability isn't just a goal—it's our responsibility.
                  We're pioneering clean energy solutions that protect Jamaica's environment
                  while powering economic growth.
                </p>
              </div>

              {/* Environmental Impact Stats - FIXED COLOR CLASSES */}
              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {environmentalImpact.map((impact, index) => {
                  const IconComponent = impact.icon;
                  return (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className={`w-12 h-12 ${getBgColorClass(impact.color)} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                        <IconComponent size={24} className={getIconColorClass(impact.color)} />
                      </div>
                      <div className="text-2xl font-bold text-gray-800">{impact.metric}</div>
                      <div className="text-sm text-gray-600 text-center">{impact.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Pillars - FIXED COLOR CLASSES */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Sustainability Commitments
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Four foundational pillars guide our approach to sustainable business practices
                and environmental stewardship in Jamaica.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                {sustainabilityPillars.map((pillar, index) => {
                  const IconComponent = pillar.icon;
                  const isActive = activeCommitment === index;

                  return (
                    <div
                      key={index}
                      onClick={() => setActiveCommitment(index)}
                      className={`cursor-pointer transition-all duration-300 p-6 rounded-2xl ${
                        isActive ? 'bg-white shadow-lg transform scale-105' : 'bg-white/50 hover:bg-white/80'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getBgColorClass(pillar.color)}`}>
                          <IconComponent size={24} className={getIconColorClass(pillar.color)} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800">{pillar.title}</h3>
                          <p className="text-gray-600">{pillar.description}</p>
                        </div>
                        <ArrowRight size={20} className={`text-gray-400 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* FIXED: React.createElement replaced with proper JSX */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <ActiveIcon size={32} className={getIconColorClass(activePillar.color)} />
                    <h3 className="text-2xl font-bold text-gray-800">
                      {activePillar.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {activePillar.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">Key Initiatives:</h4>
                    {activePillar.initiatives.map((initiative, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{initiative}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Roadmap */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Sustainability Roadmap
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A clear path toward carbon neutrality and sustainable energy leadership
                in the Caribbean by 2030.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-300 to-blue-300 hidden lg:block"></div>
              <div className="space-y-12">
                {futureInitiatives.map((initiative, index) => {
                  const IconComponent = initiative.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <div key={index} className={`flex flex-col lg:flex-row items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                      <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <IconComponent size={24} className="text-green-600" />
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-blue-600">{initiative.year}</div>
                                <div className="text-lg font-semibold text-gray-800">{initiative.title}</div>
                              </div>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(initiative.status)}`}>
                              {initiative.status}
                            </span>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{initiative.description}</p>
                        </div>
                      </div>

                      <div className="hidden lg:flex lg:w-1/2 justify-center my-4 lg:my-0">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10">
                          <IconComponent size={28} className="text-white" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Sustainable Practices */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Sustainable Practices
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every aspect of our operations is designed with sustainability in mind,
                from facility management to delivery logistics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sustainablePractices.map((practice, index) => {
                const IconComponent = practice.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                      <IconComponent size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{practice.title}</h3>
                    <p className="text-gray-600">{practice.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Strategic Partnerships
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Collaborating with leading organizations to amplify our environmental impact
                and drive sustainable development across Jamaica.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {partnerships.map((partnership, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users size={24} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{partnership.name}</h3>
                      <div className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold mb-2">
                        {partnership.focus}
                      </div>
                      <p className="text-gray-600">{partnership.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-6xl mx-auto">
            <div className="text-center text-white space-y-8">
              <h2 className="text-4xl font-bold">Our Environmental Impact</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Measurable progress toward our sustainability goals and positive environmental impact.
              </p>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-2">
                  <TrendingUp size={32} className="mx-auto" />
                  <div className="text-3xl font-bold">90%</div>
                  <p className="text-sm opacity-90">Emission Reduction with ULSD</p>
                </div>
                <div className="space-y-2">
                  <TreePine size={32} className="mx-auto" />
                  <div className="text-3xl font-bold">50+</div>
                  <p className="text-sm opacity-90">Trees Planted This Year</p>
                </div>
                <div className="space-y-2">
                  <Recycle size={32} className="mx-auto" />
                  <div className="text-3xl font-bold">75%</div>
                  <p className="text-sm opacity-90">Waste Recycling Rate</p>
                </div>
                <div className="space-y-2">
                  <Sun size={32} className="mx-auto" />
                  <div className="text-3xl font-bold">2025</div>
                  <p className="text-sm opacity-90">Solar Energy Launch</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-gray-800">
              Join Us in Building a Sustainable Future
            </h2>
            <p className="text-xl text-gray-600">
              Partner with Nevloh Limited to reduce your environmental impact while
              maintaining operational excellence. Together, we can create a cleaner,
              more sustainable Jamaica.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-colors flex items-center"
              >
                <Leaf size={20} className="mr-2" />
                Start Your Sustainability Journey
              </Link>
              <Link
                href="/contact"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors flex items-center"
              >
                <Calendar size={20} className="mr-2" />
                Schedule Consultation
              </Link>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield size={16} className="mr-1" />
                Environmental Compliance
              </div>
              <div className="flex items-center">
                <Award size={16} className="mr-1" />
                Sustainability Certified
              </div>
              <div className="flex items-center">
                <Heart size={16} className="mr-1" />
                Community Focused
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

// Next.js Static Props for SEO
export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400, // Revalidate once per day
  };
}

export default SustainabilityPage;