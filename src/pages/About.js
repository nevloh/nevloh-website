import React, { useState } from 'react';
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
  Phone
} from 'lucide-react';

// Import the Managing Director's photo
import sashellPhoto from '../assets/Sashell-Cooper-Nevins.jpg'; // Adjust the filename as needed

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('story');

  const milestones = [
    {
      year: '2022',
      title: 'Foundation',
      description: 'Nevloh Limited was founded with a vision to revolutionize fuel delivery in Jamaica',
      icon: Fuel,
      color: 'blue'
    },
    {
      year: '2023',
      title: 'Market Expansion',
      description: 'Expanded services across Saint Catherine Parish and neighboring areas',
      icon: Globe,
      color: 'green'
    },
    {
      year: '2024',
      title: 'Technology Integration',
      description: 'Implemented advanced logistics and customer management systems',
      icon: Lightbulb,
      color: 'purple'
    },
    {
      year: '2025',
      title: 'Energy Diversification',
      description: 'Strategic pivot towards comprehensive energy solutions beyond traditional fuels',
      icon: Zap,
      color: 'yellow'
    }
  ];

  const energySolutions = [
    {
      icon: Fuel,
      title: 'Traditional Fuels',
      description: 'Gasoline, diesel, kerosene, and LPG delivery services',
      status: 'Established Leader'
    },
    {
      icon: Sun,
      title: 'Solar Energy',
      description: 'Solar panel installation and maintenance services',
      status: 'Growing Division'
    },
    {
      icon: Battery,
      title: 'Energy Storage',
      description: 'Battery backup systems and energy storage solutions',
      status: 'Innovation Focus'
    },
    {
      icon: Zap,
      title: 'Electricity Distribution',
      description: 'Smart grid solutions and electrical infrastructure',
      status: 'Future Vision'
    },
    {
      icon: Wind,
      title: 'Wind Solutions',
      description: 'Small-scale wind energy systems for businesses',
      status: 'Research Phase'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Dependable energy solutions you can count on, 24/7'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision is made with our customers\' needs at the center'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pioneering new energy technologies and delivery methods'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Supporting local communities and sustainable development'
    }
  ];

  const achievements = [
    { number: '50,000+', label: 'Gallons Delivered', icon: Fuel },
    { number: '14', label: 'Parishes Served', icon: MapPin },
    { number: '99.8%', label: 'Delivery Success Rate', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section with Managing Director */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Powering Jamaica's
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block leading-normal pb-2">
                    Energy Future
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  From fuel delivery pioneers to comprehensive energy solution providers,
                  Nevloh Limited is transforming how Jamaica powers its future.
                </p>
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
                  {/* Profile Image */}
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden shadow-lg">
                    <img
                      src={sashellPhoto}
                      alt="Sashell Cooper-Nevins, Managing Director & Founder of Nevloh Limited"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback placeholder (hidden by default) */}
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center" style={{ display: 'none' }}>
                      <User size={48} className="text-blue-600" />
                    </div>
                  </div>

                  <div className="text-center space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Sashell Cooper-Nevins</h3>
                      <p className="text-blue-600 font-semibold">Managing Director & Founder</p>
                    </div>

                    <blockquote className="text-gray-600 italic leading-relaxed">
                      "Our vision extends far beyond fuel delivery. We're building Jamaica's
                      sustainable energy ecosystem, one innovative solution at a time."
                    </blockquote>

                    <div className="flex justify-center space-x-4 pt-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-800">3+</div>
                        <div className="text-xs text-gray-600">Years Experience</div>
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
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <div className="grid grid-cols-4 gap-2">
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
                  >
                    <IconComponent size={20} className="mr-2" />
                    <span className="font-medium hidden md:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Our Story */}
          {activeTab === 'story' && (
            <div className="space-y-12 animate-fade-in">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-gray-800">The Nevloh Journey</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From humble beginnings to energy innovation leaders
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
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
                                <div className="text-lg font-semibold text-gray-700">{milestone.title}</div>
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
              </div>
            </div>
          )}

          {/* Vision & Mission */}
          {activeTab === 'vision' && (
            <div className="space-y-12 animate-fade-in">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <Target size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                  <p className="text-lg leading-relaxed opacity-90">
                    To become the Caribbean's leading integrated energy company,
                    providing sustainable, reliable, and innovative energy solutions
                    that power communities and drive economic growth across the region.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <Award size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg leading-relaxed opacity-90">
                    To deliver exceptional energy solutions through innovation,
                    reliability, and customer-focused service, while pioneering
                    the transition to sustainable energy in Jamaica and beyond.
                  </p>
                </div>
              </div>

              {/* Leadership Message */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                  <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4 overflow-hidden shadow-lg">
                    <img
                      src={sashellPhoto}
                      alt="Sashell Cooper-Nevins"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback placeholder (hidden by default) */}
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center" style={{ display: 'none' }}>
                      <User size={32} className="text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">A Message from Our Managing Director</h3>
                  <blockquote className="text-lg text-gray-600 italic leading-relaxed">
                    "When I founded Nevloh Limited, I envisioned more than just a fuel delivery company.
                    I saw an opportunity to transform how Jamaica thinks about energy. Today, as we expand
                    into solar, battery storage, and electricity distribution, that vision is becoming reality.
                    We're not just delivering energy – we're delivering the future."
                  </blockquote>
                  <cite className="text-blue-600 font-semibold">— Sashell Cooper-Nevins, Managing Director</cite>
                </div>
              </div>
            </div>
          )}

          {/* Energy Solutions */}
          {activeTab === 'energy' && (
            <div className="space-y-12 animate-fade-in">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-gray-800">Comprehensive Energy Portfolio</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Evolving from traditional fuel delivery to complete energy ecosystem solutions
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {energySolutions.map((solution, index) => {
                  const IconComponent = solution.icon;
                  const statusColors = {
                    'Established Leader': 'bg-green-100 text-green-800',
                    'Growing Division': 'bg-blue-100 text-blue-800',
                    'Innovation Focus': 'bg-purple-100 text-purple-800',
                    'Future Vision': 'bg-yellow-100 text-yellow-800',
                    'Research Phase': 'bg-gray-100 text-gray-800'
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
              </div>

              {/* Future Roadmap */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                <div className="text-center space-y-6">
                  <h3 className="text-3xl font-bold">2025-2030 Strategic Roadmap</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Calendar size={32} className="mx-auto" />
                      <h4 className="font-semibold">2025-2026</h4>
                      <p className="text-sm opacity-90">Launch electricity distribution pilot program</p>
                    </div>
                    <div className="space-y-2">
                      <TrendingUp size={32} className="mx-auto" />
                      <h4 className="font-semibold">2027-2028</h4>
                      <p className="text-sm opacity-90">Scale renewable energy installations</p>
                    </div>
                    <div className="space-y-2">
                      <Globe size={32} className="mx-auto" />
                      <h4 className="font-semibold">2029-2030</h4>
                      <p className="text-sm opacity-90">Expand to neighboring Caribbean markets</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Our Values */}
          {activeTab === 'values' && (
            <div className="space-y-12 animate-fade-in">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-gray-800">Our Core Values</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  The principles that guide every decision and drive our success
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
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
              </div>

              {/* Team Culture */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                <div className="text-center space-y-6">
                  <h3 className="text-3xl font-bold text-gray-800">Join Our Energy Revolution</h3>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    We're always looking for passionate individuals who share our vision
                    of transforming Jamaica's energy landscape.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                      <Phone size={20} className="mr-2" />
                      Contact Us
                    </button>
                    <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors flex items-center">
                      <ChevronRight size={20} className="mr-2" />
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                    <IconComponent size={32} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-800">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;