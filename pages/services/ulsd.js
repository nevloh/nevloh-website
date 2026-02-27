// pages/services/ulsd.js
// Tier 1 Institutional — Ultra Low Sulphur Diesel Supply
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Fuel, Truck, Shield, Leaf, Award, TrendingUp, Globe, CheckCircle,
  Zap, Clock, Phone, ArrowRight, BarChart3, Wrench, DollarSign,
  Droplets, FlaskConical, Beaker
} from 'lucide-react';
import Breadcrumbs, { breadcrumbConfigs } from '../../components/Breadcrumbs';

const ULSDService = () => {
  const [activeTab, setActiveTab] = useState('environment');

  // Enhanced Schema
  const ulsdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nevloh.com/services/ulsd#service",
    "name": "Ultra Low Sulphur Diesel Supply Jamaica",
    "serviceType": "ULSD Fuel Supply",
    "provider": {
      "@type": "Organization",
      "name": "Nevloh Group",
      "url": "https://www.nevloh.com",
      "telephone": "+1-876-449-5172"
    },
    "description": "Premium Ultra Low Sulphur Diesel meeting ASTM D975 standards for industrial and fleet operations across Jamaica.",
    "areaServed": {
      "@type": "Country",
      "name": "Jamaica"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Ultra Low Sulphur Diesel (ULSD)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ultra Low Sulphur Diesel (ULSD) is a premium diesel fuel with sulphur content of 15 parts per million (ppm) or less, compared to higher levels in conventional diesel. ULSD is designed to produce cleaner emissions and is required for modern diesel engines with advanced emission control systems."
        }
      },
      {
        "@type": "Question",
        "name": "Does Nevloh Limited deliver ULSD across Jamaica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Nevloh Limited delivers Ultra Low Sulphur Diesel to all 14 parishes across Jamaica with flexible scheduling and 24/7 support available."
        }
      }
    ]
  };

  const performanceData = {
    environment: {
      title: 'Environmental Benefits',
      icon: Leaf,
      color: 'emerald',
      description: 'ULSD significantly reduces sulfur content compared to conventional diesel, helping to lower harmful emissions and particulate matter. This contributes to cleaner air quality in communities across Jamaica.',
      features: [
        'Reduced sulfur emissions compared to standard diesel',
        'Lower particulate matter output',
        'Helps meet environmental compliance requirements',
        'Supports cleaner air quality initiatives'
      ]
    },
    longevity: {
      title: 'Engine Protection',
      icon: Wrench,
      color: 'blue',
      description: 'Lower sulfur content means less corrosive byproducts during combustion. This can help reduce wear on fuel system components and support longer service intervals for modern diesel engines.',
      features: [
        'Reduced corrosive compounds in combustion',
        'Better compatibility with modern emission systems',
        'Supports fuel system cleanliness',
        'Suitable for high-pressure common-rail engines'
      ]
    },
    efficiency: {
      title: 'Operational Value',
      icon: TrendingUp,
      color: 'purple',
      description: 'Cleaner fuel can help maintain the efficiency of emission control systems like DPF filters and EGR valves, potentially reducing maintenance requirements over time.',
      features: [
        'Helps maintain DPF and EGR system efficiency',
        'May support extended maintenance intervals',
        'Compatible with all modern diesel engines',
        'Consistent fuel quality from batch to batch'
      ]
    }
  };

  const specifications = [
    { label: 'Sulfur Content', value: '≤ 15 ppm', highlight: true },
    { label: 'Cetane Number', value: '≥ 51', highlight: false },
    { label: 'Density @ 15°C', value: '820-845 kg/m³', highlight: false },
    { label: 'Flash Point', value: '≥ 55°C', highlight: false },
    { label: 'Cloud Point', value: '≤ 4°C', highlight: false },
    { label: 'Water Content', value: '≤ 200 mg/kg', highlight: false }
  ];

  const industries = [
    { icon: Truck, name: 'Transportation & Logistics', desc: 'Fleet operations and delivery services' },
    { icon: Wrench, name: 'Construction', desc: 'Heavy machinery and generators' },
    { icon: Leaf, name: 'Agriculture', desc: 'Tractors and irrigation systems' },
    { icon: Zap, name: 'Power Generation', desc: 'Backup generators and power solutions' },
    { icon: Globe, name: 'Marine', desc: 'Vessels and port operations' },
    { icon: BarChart3, name: 'Industrial', desc: 'Manufacturing and processing' }
  ];

  const globalAdoption = [
    { country: 'USA', year: '2006', standard: 'EPA Mandate' },
    { country: 'EU', year: '2009', standard: 'EURO VI Standard' },
    { country: 'Japan', year: '2007', standard: 'JIS K 2204' },
    { country: 'Canada', year: '2006', standard: 'CEPA Regulation' }
  ];

  const activeData = performanceData[activeTab];
  const ActiveIcon = activeData.icon;

  return (
    <>
      <Head>
        <title>Ultra Low Sulphur Diesel (ULSD) Supply Jamaica | Premium Fuel | Nevloh Limited</title>
        <meta
          name="description"
          content="Premium Ultra Low Sulphur Diesel (ULSD) supply across Jamaica. ASTM D975 compliant, professional delivery to all 14 parishes. 24/7 support available."
        />
        <meta
          name="keywords"
          content="Ultra Low Sulphur Diesel Jamaica, ULSD fuel supply, premium diesel Jamaica, clean fuel delivery, low sulfur diesel, ASTM D975 diesel"
        />
        <link rel="canonical" href="https://www.nevloh.com/services/ulsd" />

        {/* Open Graph */}
        <meta property="og:title" content="ULSD Supply | Nevloh Limited Jamaica" />
        <meta property="og:description" content="Premium Ultra Low Sulphur Diesel meeting ASTM D975 standards for industrial and fleet operations." />
        <meta property="og:image" content="https://www.nevloh.com/images/og-ulsd.png" />
        <meta property="og:url" content="https://www.nevloh.com/services/ulsd" />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ulsdSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-100">

        {/* ─── TIER 1 HERO: The Purity Standard ─── */}
        <section className="relative pt-24 pb-32 bg-[#0F172A] overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-600/10 to-transparent pointer-events-none" aria-hidden="true" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Breadcrumbs */}
            <div className="mb-12">
              <Breadcrumbs items={breadcrumbConfigs.ulsd} />
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                  <FlaskConical size={14} />
                  <span>15PPM Purity Standard</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
                  Ultra Low <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                    Sulphur Diesel
                  </span>
                </h1>

                <p className="text-xl text-slate-400 max-w-xl mb-10 leading-relaxed">
                  Nevloh Limited supplies premium Ultra Low Sulphur Diesel (ULSD)
                  meeting international ASTM D975 standards. Designed for modern diesel
                  engines with advanced emission control systems.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact/jamaica"
                    className="px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold transition-all shadow-xl shadow-emerald-900/20 flex items-center gap-2 group"
                  >
                    Request Quote
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:+18764495172"
                    className="px-10 py-4 bg-slate-800 text-white rounded-2xl font-bold border border-slate-700 hover:bg-slate-700 transition-all flex items-center gap-2"
                  >
                    <Phone size={18} />
                    Technical Support
                  </a>
                </div>
              </div>

              {/* Lab Spec Card */}
              <div className="relative">
                <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-8 rounded-[2.5rem] shadow-2xl">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-10">
                    <div className="text-emerald-400 font-mono text-xs uppercase tracking-widest">Fuel_Specification</div>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                  </div>

                  {/* Main Spec */}
                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <div className="text-slate-400 text-sm">Sulfur Content</div>
                      <div className="text-3xl font-black text-white">&lt;15 PPM</div>
                    </div>
                    <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-[15%] rounded-full" />
                    </div>
                    <p className="text-[10px] text-slate-500 italic">ASTM D975 / EN 590 Compliant</p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 text-center">
                      <div className="text-white font-bold">≥ 51</div>
                      <div className="text-[10px] text-slate-500 uppercase">Cetane Number</div>
                    </div>
                    <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 text-center">
                      <div className="text-white font-bold">14</div>
                      <div className="text-[10px] text-slate-500 uppercase">Parishes Covered</div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 hidden md:flex items-center gap-4">
                  <div className="p-3 bg-emerald-100 rounded-xl">
                    <Award className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-900">ASTM D975</div>
                    <div className="text-[10px] text-slate-500 uppercase">Certified Standard</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PERFORMANCE BENEFITS ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Content */}
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-4">
                  Fuel Benefits
                </h2>
                <p className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                  Why Choose <br />
                  <span className="text-emerald-600">Ultra Low Sulphur Diesel</span>
                </p>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  ULSD is the modern standard for diesel fuel, required by advanced emission
                  control systems and designed to provide cleaner combustion compared to
                  conventional diesel.
                </p>

                {/* Tab Buttons */}
                <div className="space-y-3">
                  {Object.entries(performanceData).map(([key, data]) => {
                    const Icon = data.icon;
                    const isActive = activeTab === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all border-2 text-left ${
                          isActive
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-transparent bg-slate-50 hover:bg-slate-100'
                        }`}
                      >
                        <Icon className={isActive ? 'text-emerald-600' : 'text-slate-400'} size={24} />
                        <span className="font-bold text-slate-900">{data.title}</span>
                        <ArrowRight
                          className={`ml-auto transition-transform ${isActive ? 'rotate-0 text-emerald-600' : '-rotate-45 text-slate-300'}`}
                          size={18}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Detail Card */}
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full pointer-events-none" aria-hidden="true" />

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    activeData.color === 'emerald' ? 'bg-emerald-500/20' :
                    activeData.color === 'blue' ? 'bg-blue-500/20' : 'bg-purple-500/20'
                  }`}>
                    <ActiveIcon className={
                      activeData.color === 'emerald' ? 'text-emerald-400' :
                      activeData.color === 'blue' ? 'text-blue-400' : 'text-purple-400'
                    } size={32} />
                  </div>

                  <h3 className="text-2xl font-black mb-4">{activeData.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    {activeData.description}
                  </p>

                  <div className="space-y-3">
                    {activeData.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="text-emerald-400 flex-shrink-0" size={18} />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3">
                    <Shield className="text-emerald-400" size={20} />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                      Industrial Grade Quality
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SPECIFICATIONS ─── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-4">
                Technical Data
              </h2>
              <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                ULSD Specifications
              </p>
              <p className="text-slate-500 mt-4">Meeting ASTM D975 and EN 590 international standards.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Spec Table */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
                <div className="space-y-4">
                  {specifications.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center py-4 border-b border-slate-50 last:border-0">
                      <span className="text-slate-600 font-medium">{spec.label}</span>
                      <span className={`font-bold ${spec.highlight ? 'text-emerald-600' : 'text-slate-900'}`}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info Cards */}
              <div className="space-y-6">
                <div className="p-8 bg-slate-900 rounded-[2rem] text-white">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <Beaker className="text-emerald-400" size={24} />
                    Refined Quality
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Our ULSD undergoes hydrodesulfurization processing to achieve
                    the low sulfur content required by modern diesel engines and
                    emission control systems.
                  </p>
                </div>

                <div className="p-8 bg-emerald-600 rounded-[2rem] text-white">
                  <h4 className="text-xl font-bold mb-2">ASTM D975 / EN 590</h4>
                  <p className="text-emerald-100 text-sm leading-relaxed">
                    Our ULSD meets international diesel specifications required
                    for Tier 4 and EURO VI compliant engines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── INDUSTRIES ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-4">
                Applications
              </h2>
              <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Industries We Serve
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {industries.map((industry, i) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={i}
                    className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-emerald-600 transition-colors">
                      <Icon className="text-slate-400 group-hover:text-white transition-colors" size={24} />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1">{industry.name}</h3>
                    <p className="text-sm text-slate-500">{industry.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── GLOBAL STANDARD ─── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-4">
              Global Context
            </h2>
            <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-12">
              The International Standard
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {globalAdoption.map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-emerald-200 transition-colors group"
                >
                  <Globe className="mx-auto mb-4 text-slate-300 group-hover:text-emerald-500 transition-colors" size={32} />
                  <div className="text-emerald-600 font-black text-lg mb-1">{item.country}</div>
                  <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2">Since {item.year}</div>
                  <div className="text-slate-700 font-bold text-xs">{item.standard}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-600 to-blue-900 rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Background Glow */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-[100px]" aria-hidden="true" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <Droplets size={64} className="mb-8 opacity-50" />

              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
                Upgrade to <br />
                <span className="text-emerald-200">Premium ULSD</span>
              </h2>

              <p className="text-emerald-100 text-lg max-w-2xl mb-10 leading-relaxed">
                Contact us to discuss your ULSD requirements. We supply premium
                ultra low sulphur diesel to commercial and industrial customers
                across all 14 parishes in Jamaica.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <Link
                  href="/contact/jamaica"
                  className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
                >
                  <BarChart3 size={18} />
                  Request Volume Quote
                </Link>
                <a
                  href="tel:+18764495172"
                  className="px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Contact Dispatch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── BILATERAL LINK ─── */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-slate-500 mb-6">
              <strong className="text-slate-700">Coverage:</strong> All 14 parishes • 24/7 support available
            </p>
            <Link
              href="/contact/international"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 text-xs font-bold uppercase tracking-widest transition-colors"
            >
              <Globe size={14} />
              International Inquiries →
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};

export default ULSDService;