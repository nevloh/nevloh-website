import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Fuel,
  Truck,
  Shield,
  Leaf,
  Award,
  TrendingUp,
  Globe,
  CheckCircle,
  Zap,
  Clock,
  Phone,
  Star,
  ArrowRight,
  BarChart3,
  Heart,
  Wrench,
  DollarSign,
  Target,
  Users,
  Calendar,
  MapPin
} from 'lucide-react';

const ProductsServicesPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const ulsdBenefits = [
    {
      icon: Leaf,
      title: "Environmental Protection",
      description: "Significantly reduces harmful emissions and particulate matter",
      details: [
        "90% less sulfur content than conventional diesel",
        "Reduces air pollution and acid rain",
        "Protects local communities and ecosystems",
        "Meets international environmental standards"
      ],
      color: "green"
    },
    {
      icon: Wrench,
      title: "Engine Performance",
      description: "Superior engine protection and enhanced performance",
      details: [
        "Reduces engine wear and corrosion",
        "Extends engine life by up to 25%",
        "Improves fuel system cleanliness",
        "Better cold weather performance"
      ],
      color: "blue"
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "Long-term savings through reduced maintenance costs",
      details: [
        "Lower maintenance and repair costs",
        "Reduced downtime and service intervals",
        "Better fuel economy and efficiency",
        "Higher resale value for vehicles"
      ],
      color: "purple"
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Stay ahead of environmental regulations",
      details: [
        "Meets EURO VI emission standards",
        "Complies with EPA regulations",
        "Future-proof your fleet",
        "Avoid regulatory penalties"
      ],
      color: "orange"
    }
  ];

  const globalTrends = [
    {
      country: "United States",
      year: "2006",
      standard: "EPA Mandated ULSD",
      impact: "99% reduction in sulfur content nationwide",
      flag: "🇺🇸"
    },
    {
      country: "European Union",
      year: "2009",
      standard: "EURO VI Standard",
      impact: "Mandatory ULSD for all commercial vehicles",
      flag: "🇪🇺"
    },
    {
      country: "Japan",
      year: "2007",
      standard: "JIS K 2204 Standard",
      impact: "Leading Asia in clean diesel adoption",
      flag: "🇯🇵"
    },
    {
      country: "Canada",
      year: "2006",
      standard: "Canadian Environmental Protection Act",
      impact: "Synchronized with US standards",
      flag: "🇨🇦"
    },
    {
      country: "Australia",
      year: "2009",
      standard: "Australian Fuel Quality Standards",
      impact: "Nationwide ULSD implementation",
      flag: "🇦🇺"
    },
    {
      country: "South Korea",
      year: "2010",
      standard: "K-EPA Standards",
      impact: "Rapid adoption across all sectors",
      flag: "🇰🇷"
    }
  ];

  const specifications = {
    "Sulfur Content": "≤ 15 ppm (parts per million)",
    "Cetane Number": "≥ 51",
    "Density @ 15°C": "820-845 kg/m³",
    "Flash Point": "≥ 55°C",
    "Cloud Point": "≤ 4°C",
    "Pour Point": "≤ -6°C",
    "Water Content": "≤ 200 mg/kg",
    "Ash Content": "≤ 0.01% m/m"
  };

  const services = [
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "On-time fuel delivery across Jamaica",
      features: ["Same-day delivery available", "GPS tracked vehicles", "Professional drivers", "Flexible scheduling"]
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Round-the-clock support for critical operations",
      features: ["Emergency hotline", "Priority response", "Weekend delivery", "Holiday service"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Certified fuel quality and testing",
      features: ["Laboratory tested", "Quality certificates", "Storage standards", "Contamination prevention"]
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "Dedicated account management",
      features: ["Personal account manager", "Volume discounts", "Flexible payment terms", "Usage tracking"]
    }
  ];

  const industries = [
    { name: "Transportation & Logistics", icon: Truck, usage: "Fleet operations, delivery services" },
    { name: "Construction", icon: Wrench, usage: "Heavy machinery, generators" },
    { name: "Agriculture", icon: Leaf, usage: "Tractors, irrigation systems" },
    { name: "Marine", icon: Globe, usage: "Fishing vessels, cargo ships" },
    { name: "Power Generation", icon: Zap, usage: "Backup generators, remote power" },
    { name: "Mining", icon: Target, usage: "Mining equipment, transport vehicles" }
  ];

  const testimonials = [
    {
      name: "Marcus Thompson",
      company: "Thompson Logistics Ltd.",
      text: "Switching to Nevloh's ULSD reduced our maintenance costs by 30%. Our fleet runs smoother and cleaner.",
      rating: 5
    },
    {
      name: "Patricia Williams",
      company: "Green Valley Farms",
      text: "The environmental benefits are clear, and our equipment lasts longer. Excellent service from Nevloh team.",
      rating: 5
    },
    {
      name: "David Chen",
      company: "Island Construction Co.",
      text: "Reliable delivery and premium quality fuel. Our generators run more efficiently with ULSD.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800">
                Premium
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent block">
                  Ultra Low Sulphur Diesel
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Jamaica's leading supplier of environmentally-friendly, high-performance ULSD.
                Experience the future of clean diesel technology with Nevloh Limited.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Leaf, number: "90%", label: "Less Sulfur" },
                { icon: Wrench, number: "25%", label: "Longer Engine Life" },
                { icon: Globe, number: "50+", label: "Countries Using ULSD" },
                { icon: Award, number: "100%", label: "Quality Guaranteed" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent size={24} className="text-blue-600" />
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

      {/* Product Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Ultra Low Sulphur Diesel?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the comprehensive benefits that make ULSD the preferred choice
              for forward-thinking businesses worldwide
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits List */}
            <div className="space-y-4">
              {ulsdBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                const isActive = activeFeature === index;

                return (
                  <div
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`cursor-pointer transition-all duration-300 p-6 rounded-2xl ${
                      isActive ? 'bg-white shadow-lg transform scale-105' : 'bg-white/50 hover:bg-white/80'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${benefit.color}-100`}>
                        <IconComponent size={24} className={`text-${benefit.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                      <ArrowRight size={20} className={`text-gray-400 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Feature Details */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  {React.createElement(ulsdBenefits[activeFeature].icon, {
                    size: 32,
                    className: `text-${ulsdBenefits[activeFeature].color}-600`
                  })}
                  <h3 className="text-2xl font-bold text-gray-800">
                    {ulsdBenefits[activeFeature].title}
                  </h3>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {ulsdBenefits[activeFeature].description}
                </p>

                <div className="space-y-3">
                  {ulsdBenefits[activeFeature].details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Trends */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Global ULSD Adoption Trends
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading developed countries have mandated ULSD adoption.
              Join the global movement towards cleaner diesel technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalTrends.map((trend, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center space-y-4">
                  <div className="text-4xl">{trend.flag}</div>
                  <h3 className="text-xl font-bold text-gray-800">{trend.country}</h3>
                  <div className="space-y-2">
                    <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Since {trend.year}
                    </div>
                    <p className="font-medium text-gray-700">{trend.standard}</p>
                    <p className="text-sm text-gray-600">{trend.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trend Statistics */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 text-white">
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold">ULSD: The Global Standard</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <BarChart3 size={32} className="mx-auto" />
                  <div className="text-2xl font-bold">85%</div>
                  <p className="text-sm opacity-90">of developed countries mandate ULSD</p>
                </div>
                <div className="space-y-2">
                  <TrendingUp size={32} className="mx-auto" />
                  <div className="text-2xl font-bold">$50B+</div>
                  <p className="text-sm opacity-90">global ULSD market value</p>
                </div>
                <div className="space-y-2">
                  <Globe size={32} className="mx-auto" />
                  <div className="text-2xl font-bold">2030</div>
                  <p className="text-sm opacity-90">projected global adoption</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Technical Specifications
                </h2>
                <p className="text-xl text-gray-600">
                  Our ULSD meets and exceeds international quality standards
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  {Object.entries(specifications).map(([spec, value], index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700">{spec}</span>
                      <span className="font-bold text-blue-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                <Award size={24} className="text-green-600" />
                <span className="text-green-800 font-medium">
                  Certified to meet ASTM D975 and EN 590 standards
                </span>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Industries We Serve</h3>
                <div className="space-y-4">
                  {industries.map((industry, index) => {
                    const IconComponent = industry.icon;
                    return (
                      <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <IconComponent size={24} className="text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{industry.name}</h4>
                            <p className="text-sm text-gray-600">{industry.usage}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More than just fuel delivery - we provide comprehensive solutions
              for your energy needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from businesses that trust Nevloh's ULSD
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl font-bold">
            Ready to Upgrade to Ultra Low Sulphur Diesel?
          </h2>
          <p className="text-xl opacity-90">
            Join the growing number of businesses choosing cleaner, more efficient fuel.
            Contact us today for a personalized quote and delivery schedule.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
            >
              <Phone size={20} className="mr-2" />
              Get Quote Now
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
              <MapPin size={16} className="mr-1" />
              All 14 Parishes
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              24/7 Emergency Service
            </div>
            <div className="flex items-center">
              <Shield size={16} className="mr-1" />
              Quality Guaranteed
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsServicesPage;