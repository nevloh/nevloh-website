// pages/industries.js
// Tier 1 Institutional — Industrial Fuel Solutions Portal
import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {
  Truck, HardHat, Wheat, Ship, Zap, Factory, Phone,
  ArrowRight, CheckCircle, TrendingUp, Clock, Shield,
  BarChart3, Globe, Activity, LifeBuoy, Timer
} from 'lucide-react';
import Breadcrumbs, { breadcrumbConfigs } from '../components/Breadcrumbs';

const IndustriesPage = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  // Schema
  const industriesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nevloh.com/industries#service",
    "name": "Industrial Fuel Solutions Jamaica",
    "serviceType": "Industry-Specific Fuel Delivery",
    "provider": {
      "@type": "Organization",
      "name": "Nevloh Group",
      "url": "https://www.nevloh.com",
      "telephone": "+1-876-449-5172"
    },
    "description": "Specialized Ultra Low Sulphur Diesel solutions for Jamaica's leading industries including logistics, construction, agriculture, and maritime.",
    "areaServed": {
      "@type": "Country",
      "name": "Jamaica"
    }
  };

  const industries = [
    {
      id: 'logistics',
      name: 'Logistics & Fleet',
      icon: Truck,
      color: 'emerald',
      tagline: 'Fleet Fuel Solutions',
      challenge: 'Fleet operations face challenges with fuel costs, vehicle maintenance, and emission compliance requirements.',
      solution: 'Nevloh provides ULSD that meets modern engine specifications, helping to reduce sulfur-related buildup and supporting cleaner fleet operations.',
      benefits: [
        'Lower sulfur content for modern engines',
        'Flexible delivery scheduling',
        'GPS-tracked delivery fleet'
      ],
      stats: [
        { v: '14', l: 'Parishes Covered' },
        { v: '24/7', l: 'Support Available' }
      ]
    },
    {
      id: 'construction',
      name: 'Civil Engineering',
      icon: HardHat,
      color: 'blue',
      tagline: 'Job Site Fuel Supply',
      challenge: 'Construction sites often face fuel accessibility challenges, especially for remote locations and heavy equipment operations.',
      solution: 'Our mobile delivery units can reach job sites across Jamaica, providing filtered fuel directly to your equipment location.',
      benefits: [
        'On-site delivery capability',
        'Off-road accessible vehicles',
        'Project-based fuel tracking'
      ],
      stats: [
        { v: 'Mobile', l: 'Site Delivery' },
        { v: 'Filtered', l: 'At Discharge' }
      ]
    },
    {
      id: 'agriculture',
      name: 'Agri-Business',
      icon: Wheat,
      color: 'green',
      tagline: 'Farm & Field Fuel',
      challenge: 'Agricultural operations require reliable fuel delivery to rural locations, often with seasonal demand variations.',
      solution: 'Nevloh provides ULSD compatible with modern Tier 4 agricultural equipment, with delivery to remote farm locations across Jamaica.',
      benefits: [
        'Rural delivery capability',
        'Seasonal volume flexibility',
        'Tier 4 engine compatible fuel'
      ],
      stats: [
        { v: 'Rural', l: 'Access Available' },
        { v: 'Flexible', l: 'Scheduling' }
      ]
    },
    {
      id: 'marine',
      name: 'Maritime Operations',
      icon: Ship,
      color: 'cyan',
      tagline: 'Marine Fuel Supply',
      challenge: 'Maritime operations require fuel that meets port emission standards and performs well in marine environments.',
      solution: 'Our Marine ULSD is designed to meet maritime emission standards, with coastal delivery options available.',
      benefits: [
        'Port-compliant fuel supply',
        'Coastal delivery available',
        'ASTM D975 certified'
      ],
      stats: [
        { v: 'ASTM', l: 'D975 Certified' },
        { v: 'Coastal', l: 'Delivery' }
      ]
    },
    {
      id: 'power',
      name: 'Critical Infrastructure',
      icon: Zap,
      color: 'orange',
      tagline: 'Generator Fuel Support',
      challenge: 'Backup power systems require reliable fuel supply and consistent fuel quality for dependable generator operation.',
      solution: 'We provide ULSD for standby generators with emergency delivery support available for critical facilities.',
      benefits: [
        '24/7 emergency support available',
        'Consistent fuel quality',
        'Tank monitoring options'
      ],
      stats: [
        { v: '24/7', l: 'Support Line' },
        { v: 'Emergency', l: 'Delivery' }
      ]
    },
    {
      id: 'manufacturing',
      name: 'Industrial Plants',
      icon: Factory,
      color: 'indigo',
      tagline: 'Plant Power Supply',
      challenge: 'Manufacturing facilities require consistent fuel quality and reliable supply to maintain production schedules.',
      solution: 'Nevloh supplies industrial-grade ULSD with consistent specifications and bulk delivery options for plant operations.',
      benefits: [
        'Consistent fuel specifications',
        'Bulk delivery available',
        'Quality documentation'
      ],
      stats: [
        { v: 'Bulk', l: 'Supply Options' },
        { v: 'Quality', l: 'Certified' }
      ]
    }
  ];

  const active = industries[activeIndustry];
  const ActiveIcon = active.icon;

  const governanceFeatures = [
    {
      icon: BarChart3,
      title: 'Consumption Analysis',
      desc: 'We can help analyze your fuel usage patterns to optimize delivery schedules.'
    },
    {
      icon: Activity,
      title: 'Tank Monitoring',
      desc: 'Optional monitoring solutions to help track fuel levels and plan deliveries.'
    },
    {
      icon: Globe,
      title: 'Island-Wide Logistics',
      desc: 'Delivery capability across all 14 parishes with flexible scheduling.'
    }
  ];

  const overallStats = [
    { icon: Shield, label: 'Quality', val: 'ASTM D975' },
    { icon: Globe, label: 'Coverage', val: '14 Parishes' },
    { icon: Timer, label: 'Support', val: '24/7 Available' },
    { icon: TrendingUp, label: 'Service', val: 'Professional' }
  ];

  return (
    <>
      <Head>
        <title>Industrial Fuel Solutions Jamaica | Sector-Specific ULSD | Nevloh Limited</title>
        <meta
          name="description"
          content="Specialized Ultra Low Sulphur Diesel solutions for Jamaica's industries. Logistics, construction, agriculture, maritime, and power generation fuel delivery."
        />
        <meta
          name="keywords"
          content="industrial fuel Jamaica, fleet fuel delivery, construction diesel, agricultural fuel, marine fuel supply, generator fuel, ULSD industrial"
        />
        <link rel="canonical" href="https://www.nevloh.com/industries" />

        {/* Open Graph */}
        <meta property="og:title" content="Industrial Fuel Solutions | Nevloh Limited Jamaica" />
        <meta property="og:description" content="Specialized ULSD solutions for Jamaica's leading industries." />
        <meta property="og:image" content="https://www.nevloh.com/images/og-industries.png" />
        <meta property="og:url" content="https://www.nevloh.com/industries" />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesSchema) }}
        />
      </Head>

      <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-emerald-100">

        {/* ─── TIER 1 HERO ─── */}
        <section className="relative pt-24 pb-24 bg-[#0F172A] overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Breadcrumbs */}
            <div className="mb-12">
              <Breadcrumbs items={breadcrumbConfigs.industries} />
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                <Factory size={14} />
                <span>Industry Solutions</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
                Fueling the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                  Industrial Core
                </span>
              </h1>

              <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
                Nevloh Limited provides specialized fuel solutions for Jamaica&apos;s
                key industries. We understand each sector&apos;s unique requirements
                and deliver accordingly.
              </p>

              {/* Overall Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {overallStats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                      <Icon size={20} className="text-emerald-400 mx-auto mb-2" />
                      <div className="text-white font-bold text-lg">{stat.val}</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── INDUSTRY NAVIGATION ─── */}
        <section className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
            <div className="flex justify-between py-4 min-w-[800px]">
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                const isActive = activeIndustry === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveIndustry(i)}
                    className={`flex flex-col items-center gap-2 px-6 transition-all relative ${
                      isActive ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="text-[10px] font-black uppercase tracking-tighter">{ind.name}</span>
                    {isActive && (
                      <div className="absolute -bottom-4 left-0 w-full h-1 bg-blue-600 rounded-t-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── DYNAMIC SECTOR CONTENT ─── */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Content Side */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">
                    {active.tagline}
                  </h2>
                  <p className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight">
                    Solutions for <br />
                    <span className="text-blue-600">{active.name}</span>
                  </p>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex gap-4">
                    <Activity className="text-slate-400 flex-shrink-0" size={24} />
                    <div>
                      <div className="font-bold text-slate-700 text-sm mb-1">Sector Context</div>
                      <p className="text-slate-600 text-sm leading-relaxed">{active.challenge}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex gap-4">
                    <LifeBuoy className="text-emerald-500 flex-shrink-0" size={24} />
                    <div>
                      <div className="font-bold text-emerald-900 text-sm mb-1">How We Help</div>
                      <p className="text-emerald-700 text-sm leading-relaxed">{active.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  {active.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <CheckCircle size={16} className="text-blue-500 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/contact/jamaica"
                    className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 group"
                  >
                    Discuss Requirements
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:+18764495172"
                    className="px-8 py-4 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center gap-2"
                  >
                    <Phone size={18} />
                    Contact Team
                  </a>
                </div>
              </div>

              {/* Stats & Compliance Side */}
              <div className="space-y-6">
                {/* Stats Card */}
                <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full pointer-events-none" aria-hidden="true" />

                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      active.color === 'emerald' ? 'bg-emerald-100' :
                      active.color === 'blue' ? 'bg-blue-100' :
                      active.color === 'green' ? 'bg-green-100' :
                      active.color === 'cyan' ? 'bg-cyan-100' :
                      active.color === 'orange' ? 'bg-orange-100' : 'bg-indigo-100'
                    }`}>
                      <ActiveIcon size={28} className={
                        active.color === 'emerald' ? 'text-emerald-600' :
                        active.color === 'blue' ? 'text-blue-600' :
                        active.color === 'green' ? 'text-green-600' :
                        active.color === 'cyan' ? 'text-cyan-600' :
                        active.color === 'orange' ? 'text-orange-600' : 'text-indigo-600'
                      } />
                    </div>
                    <div>
                      <div className="font-black text-slate-900 text-lg">{active.name}</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest">Sector Focus</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {active.stats.map((s, i) => (
                      <div key={i} className="text-center p-4 bg-slate-50 rounded-xl">
                        <div className="text-2xl font-black text-slate-900 mb-1">{s.v}</div>
                        <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compliance Card */}
                <div className="p-8 bg-slate-900 rounded-[2rem] text-white">
                  <h4 className="text-lg font-bold mb-4 flex items-center gap-3">
                    <Shield size={20} className="text-emerald-400" />
                    Quality Standards
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Our ULSD meets ASTM D975 specifications, providing the fuel quality
                    required by modern equipment across the {active.name.toLowerCase()} sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SERVICE CAPABILITIES ─── */}
        <section className="py-24 bg-slate-50 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
                Capabilities
              </h2>
              <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Fuel Management Support
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {governanceFeatures.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={i}
                    className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
                  >
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                      <Icon size={28} className="text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{feat.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{feat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── ALL INDUSTRIES GRID ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
                Sectors Served
              </h2>
              <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Industries We Support
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveIndustry(i);
                      window.scrollTo({ top: 500, behavior: 'smooth' });
                    }}
                    className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left group"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 transition-colors">
                        <Icon className="text-slate-400 group-hover:text-white transition-colors" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{ind.name}</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest">{ind.tagline}</div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 line-clamp-2">{ind.solution}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-[#0F172A] rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div
              className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
                backgroundSize: '20px 20px'
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
                Partner with <br />
                <span className="text-blue-200">Nevloh Limited</span>
              </h2>

              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Contact us to discuss your industry&apos;s fuel requirements.
                We provide customized solutions for operations across Jamaica.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact/jamaica"
                  className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
                >
                  <BarChart3 size={18} />
                  Discuss Requirements
                </Link>
                <a
                  href="tel:+18764495172"
                  className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold text-sm uppercase tracking-wider transition-all border border-white/10 flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Contact Our Team
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── BILATERAL LINK ─── */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-slate-500 mb-6">
              <strong className="text-slate-700">Coverage:</strong> All 14 parishes • Multiple industries served
            </p>
            <Link
              href="/contact/international"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 text-xs font-bold uppercase tracking-widest transition-colors"
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

export default IndustriesPage;