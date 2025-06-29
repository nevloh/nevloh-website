import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Truck,
  HardHat,
  Wheat,
  Ship,
  Zap,
  Pickaxe,
  Phone,
  Calendar,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  Shield,
  Fuel,
  Settings,
  BarChart3,
  Target,
  Globe,
  Award
} from 'lucide-react';

const IndustriesPage = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  // Helper functions for dynamic styling
  const getActiveButtonClass = (color) => {
    const colorClasses = {
      blue: 'bg-blue-600 text-white shadow-lg transform scale-105',
      orange: 'bg-orange-600 text-white shadow-lg transform scale-105',
      green: 'bg-green-600 text-white shadow-lg transform scale-105',
      cyan: 'bg-cyan-600 text-white shadow-lg transform scale-105',
      yellow: 'bg-yellow-600 text-white shadow-lg transform scale-105',
      purple: 'bg-purple-600 text-white shadow-lg transform scale-105'
    };
    return colorClasses[color] || 'bg-blue-600 text-white shadow-lg transform scale-105';
  };

  const getReadyToStartClass = (color) => {
    const colorClasses = {
      blue: 'bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white',
      orange: 'bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white',
      green: 'bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white',
      cyan: 'bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-6 text-white',
      yellow: 'bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-6 text-white',
      purple: 'bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white'
    };
    return colorClasses[color] || 'bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white';
  };

  const industries = [
    {
      id: 'transport',
      name: 'Transport & Logistics',
      icon: Truck,
      description: 'Keeping Jamaica\'s fleet moving with reliable fuel delivery',
      longDescription: 'The backbone of Jamaica\'s economy relies on efficient transportation and logistics. From delivery trucks to passenger buses, our Ultra Low Sulphur Diesel ensures optimal performance, reduced maintenance costs, and environmental compliance for all vehicle types.',
      keyBenefits: [
        'Extended engine life for fleet vehicles',
        'Reduced maintenance and downtime',
        'Lower emissions for urban operations',
        'Improved fuel efficiency and cost savings',
        'Compliance with international shipping standards'
      ],
      applications: [
        'Commercial trucking fleets',
        'Public transportation buses',
        'Delivery and courier services',
        'Taxi and ride-sharing vehicles',
        'Freight and cargo transport'
      ],
      stats: [
        { value: '40%', label: 'Fuel Cost Savings' },
        { value: '25%', label: 'Engine Life Extension' },
        { value: '90%', label: 'Emission Reduction' }
      ],
      color: 'blue',
      challenges: 'Rising fuel costs, environmental regulations, vehicle maintenance expenses',
      solution: 'Our ULSD reduces total cost of ownership while meeting emission standards'
    },
    {
      id: 'construction',
      name: 'Construction',
      icon: HardHat,
      description: 'Powering construction projects across Jamaica',
      longDescription: 'Construction projects demand reliable, high-performance fuel for heavy machinery and equipment. Our ULSD provides the power and efficiency needed for excavators, bulldozers, cranes, and generators operating in demanding conditions.',
      keyBenefits: [
        'Superior performance in heavy machinery',
        'Reduced equipment maintenance costs',
        'Better cold start performance',
        'Cleaner burning for work site environments',
        'Reliable supply for project timelines'
      ],
      applications: [
        'Excavators and bulldozers',
        'Cranes and lifting equipment',
        'Concrete mixers and pumps',
        'Generators and power tools',
        'Site vehicles and transport'
      ],
      stats: [
        { value: '30%', label: 'Maintenance Reduction' },
        { value: '15%', label: 'Equipment Efficiency' },
        { value: '24/7', label: 'Emergency Supply' }
      ],
      color: 'orange',
      challenges: 'Equipment downtime, high maintenance costs, strict project deadlines',
      solution: 'Reliable fuel supply with emergency delivery to keep projects on schedule'
    },
    {
      id: 'agriculture',
      name: 'Agriculture',
      icon: Wheat,
      description: 'Supporting Jamaica\'s agricultural sector with clean fuel',
      longDescription: 'Agriculture is vital to Jamaica\'s food security and economy. Our ULSD powers tractors, harvesters, irrigation systems, and transport vehicles, ensuring farmers can operate efficiently while protecting the environment they depend on.',
      keyBenefits: [
        'Cleaner fuel for sustainable farming',
        'Reliable power for critical operations',
        'Reduced impact on crop environments',
        'Lower operating costs for farmers',
        'Support for organic certification'
      ],
      applications: [
        'Tractors and farming equipment',
        'Irrigation and water pumps',
        'Harvesters and processing equipment',
        'Transport vehicles for produce',
        'Backup generators for facilities'
      ],
      stats: [
        { value: '20%', label: 'Operational Savings' },
        { value: '95%', label: 'Equipment Reliability' },
        { value: '12', label: 'Parishes Served' }
      ],
      color: 'green',
      challenges: 'Seasonal fuel demands, remote locations, cost management',
      solution: 'Flexible delivery schedules and competitive pricing for agricultural operations'
    },
    {
      id: 'marine',
      name: 'Marine',
      icon: Ship,
      description: 'Fueling Jamaica\'s maritime industry',
      longDescription: 'Jamaica\'s maritime sector includes fishing vessels, cargo ships, pleasure craft, and port operations. Our marine-grade ULSD meets international maritime standards while providing the reliability and performance needed for ocean operations.',
      keyBenefits: [
        'Meets international maritime standards',
        'Reduced engine corrosion in marine environments',
        'Better fuel stability for long voyages',
        'Lower sulfur content for port compliance',
        'Reliable supply at coastal locations'
      ],
      applications: [
        'Fishing vessels and boats',
        'Cargo and freight ships',
        'Pleasure craft and yachts',
        'Port equipment and vehicles',
        'Marine generators and pumps'
      ],
      stats: [
        { value: '100%', label: 'Maritime Compliance' },
        { value: '50%', label: 'Corrosion Reduction' },
        { value: '8', label: 'Coastal Locations' }
      ],
      color: 'cyan',
      challenges: 'Strict maritime regulations, saltwater corrosion, remote coastal access',
      solution: 'Marine-grade ULSD with coastal delivery and regulatory compliance'
    },
    {
      id: 'power',
      name: 'Power Generation',
      icon: Zap,
      description: 'Reliable backup power solutions',
      longDescription: 'Backup power generation is critical for hospitals, businesses, data centers, and residential complexes. Our ULSD ensures generators start reliably and run efficiently when the power grid fails, providing peace of mind and operational continuity.',
      keyBenefits: [
        'Reliable backup power supply',
        'Quick generator start-up',
        'Cleaner burning for indoor environments',
        'Long-term fuel stability',
        'Emergency delivery services'
      ],
      applications: [
        'Hospital backup generators',
        'Business continuity systems',
        'Data center power backup',
        'Residential standby generators',
        'Telecommunications equipment'
      ],
      stats: [
        { value: '99.9%', label: 'Reliability Rate' },
        { value: '2hr', label: 'Emergency Response' },
        { value: '365', label: 'Days Service' }
      ],
      color: 'yellow',
      challenges: 'Power outages, fuel degradation, emergency response time',
      solution: '24/7 emergency delivery with high-quality, stable ULSD for generators'
    },
    {
      id: 'mining',
      name: 'Mining',
      icon: Pickaxe,
      description: 'Powering Jamaica\'s mining operations',
      longDescription: 'Mining operations require powerful, reliable fuel for heavy equipment operating in challenging conditions. Our ULSD provides the performance and durability needed for excavators, haulers, and processing equipment in Jamaica\'s mining sector.',
      keyBenefits: [
        'High-performance fuel for heavy equipment',
        'Reduced maintenance in dusty conditions',
        'Reliable supply to remote locations',
        'Environmental compliance for mining sites',
        'Bulk delivery options available'
      ],
      applications: [
        'Mining excavators and haulers',
        'Processing and crushing equipment',
        'Site vehicles and transport',
        'Generators and power systems',
        'Maintenance and support equipment'
      ],
      stats: [
        { value: '35%', label: 'Equipment Uptime' },
        { value: '500+', label: 'Gallons Capacity' },
        { value: '10', label: 'Mining Sites Served' }
      ],
      color: 'purple',
      challenges: 'Remote locations, harsh operating conditions, equipment durability',
      solution: 'Bulk delivery to remote sites with high-performance ULSD for extreme conditions'
    }
  ];

  const overallStats = [
    { icon: Users, number: '500+', label: 'Industry Partners', color: 'blue' },
    { icon: Truck, number: '50,000+', label: 'Gallons Delivered', color: 'green' },
    { icon: Target, number: '99.8%', label: 'On-Time Delivery', color: 'purple' },
    { icon: Shield, number: '24/7', label: 'Emergency Service', color: 'orange' }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: 'Reliable Delivery',
      description: 'On-time fuel delivery across all 14 parishes with GPS tracking and professional drivers'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Laboratory-tested ULSD meeting international standards with quality certificates'
    },
    {
      icon: Settings,
      title: 'Industry Expertise',
      description: 'Deep understanding of each industry\'s unique fuel requirements and challenges'
    },
    {
      icon: Globe,
      title: 'Island-Wide Coverage',
      description: 'Comprehensive service across Jamaica with emergency response capabilities'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800">
                Industries We
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  Power Forward
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From transportation fleets to mining operations, Nevloh Limited provides
                specialized Ultra Low Sulphur Diesel solutions tailored to each industry's unique needs.
              </p>
            </div>

            {/* Overall Stats */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {overallStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                      <IconComponent size={24} className={`text-${stat.color}-600`} />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Navigation */}
      <section className="px-4 -mt-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                const isActive = activeIndustry === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndustry(index)}
                    className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? getActiveButtonClass(industry.color)
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent size={24} className="mb-2" />
                    <span className="font-medium text-xs text-center">{industry.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Details */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  {React.createElement(industries[activeIndustry].icon, {
                    size: 40,
                    className: `text-${industries[activeIndustry].color}-600`
                  })}
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">
                      {industries[activeIndustry].name}
                    </h2>
                    <p className="text-lg text-gray-600">
                      {industries[activeIndustry].description}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8">
                  {industries[activeIndustry].longDescription}
                </p>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 rounded-xl p-6">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                      <Target size={20} className="mr-2" />
                      Industry Challenges
                    </h4>
                    <p className="text-red-700 text-sm">
                      {industries[activeIndustry].challenges}
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                      <CheckCircle size={20} className="mr-2" />
                      Our Solution
                    </h4>
                    <p className="text-green-700 text-sm">
                      {industries[activeIndustry].solution}
                    </p>
                  </div>
                </div>

                {/* Applications */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center">
                    <Settings size={24} className="mr-2" />
                    Key Applications
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {industries[activeIndustry].applications.map((app, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle size={16} className={`text-${industries[activeIndustry].color}-500`} />
                        <span className="text-gray-700">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Award size={28} className="mr-3" />
                  Key Benefits for {industries[activeIndustry].name}
                </h3>
                <div className="space-y-4">
                  {industries[activeIndustry].keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Industry Stats */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <BarChart3 size={24} className="mr-2" />
                  Industry Impact
                </h3>
                <div className="space-y-4">
                  {industries[activeIndustry].stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className={getReadyToStartClass(industries[activeIndustry].color)}>
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-sm opacity-90 mb-6">
                  Get a customized fuel solution for your {industries[activeIndustry].name.toLowerCase()} operations.
                </p>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="block w-full bg-white text-gray-800 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Industry Quote
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full border-2 border-white text-center py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Industry Specialist</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Phone size={16} className="text-blue-600 mr-2" />
                    <span className="text-gray-700">(876) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="text-green-600 mr-2" />
                    <span className="text-gray-700">24/7 Emergency Service</span>
                  </div>
                  <div className="flex items-center">
                    <Shield size={16} className="text-purple-600 mr-2" />
                    <span className="text-gray-700">Quality Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Industries Choose Nevloh Limited
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that every industry has unique fuel requirements.
              That's why we provide specialized solutions backed by exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                    <IconComponent size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl font-bold">
            Power Your Industry with Premium ULSD
          </h2>
          <p className="text-xl opacity-90">
            Join hundreds of businesses across Jamaica that trust Nevloh Limited
            for reliable, clean, and efficient fuel solutions tailored to their industry needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
            >
              <Phone size={20} className="mr-2" />
              Get Industry Quote
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center"
            >
              <Calendar size={20} className="mr-2" />
              Schedule Delivery
            </Link>
          </div>
          <div className="flex justify-center items-center space-x-6 text-sm opacity-80">
            <div className="flex items-center">
              <Truck size={16} className="mr-1" />
              All Industries Served
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              24/7 Emergency Service
            </div>
            <div className="flex items-center">
              <Shield size={16} className="mr-1" />
              Quality Guaranteed
            </div>
            <div className="flex items-center">
              <Globe size={16} className="mr-1" />
              Island-Wide Coverage
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;