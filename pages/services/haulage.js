// pages/services/haulage.js
// Tier 1 Institutional — Licensed Petroleum Haulage
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Truck, Shield, Clock, CheckCircle, ArrowRight, Award, Route,
  FileCheck, Users, BarChart3, MapPin, Phone, Scale,
  Container, Cog, Globe, Gauge, Droplets
} from 'lucide-react';
import Breadcrumbs, { breadcrumbConfigs } from '../../components/Breadcrumbs';

const HaulageServices = () => {
  // Enhanced Service Schema
  const haulageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nevloh.com/services/haulage#service",
    "name": "Licensed Petroleum Haulage Services Jamaica",
    "serviceType": "Petroleum Haulage",
    "provider": {
      "@type": "Organization",
      "name": "Nevloh Group",
      "url": "https://www.nevloh.com",
      "telephone": "+1-876-449-5172"
    },
    "description": "Licensed petroleum haulage contractor providing professional fuel transportation services for OMCs and industrial clients across Jamaica.",
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
        "name": "Is Nevloh Limited a licensed petroleum haulage contractor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Nevloh Limited is a licensed petroleum haulage contractor in Jamaica, fully insured with cargo, equipment and liability coverage, and maintains required safety certifications for petroleum transportation."
        }
      },
      {
        "@type": "Question",
        "name": "What is the maximum fuel capacity per trip?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our tankers can transport up to 45,000 litres per trip. We also operate medium tankers (20,000-30,000L) for regional distribution."
        }
      }
    ]
  };

  const fleetSpecs = [
    { icon: Container, title: 'Multi-Compartment Design', desc: 'Compartmentalized tankers for multi-product transportation.' },
    { icon: Droplets, title: 'Vapor Recovery Systems', desc: 'Equipment designed for environmental compliance during loading.' },
    { icon: Shield, title: 'Safety Interlocks', desc: 'Brake interlock systems during hose connection operations.' },
    { icon: MapPin, title: 'GPS Tracking', desc: 'Real-time fleet visibility for route monitoring.' }
  ];

  const governanceItems = [
    { icon: Scale, title: 'Licensed Operations', desc: 'Government-certified for bulk petroleum transportation.' },
    { icon: Shield, title: 'Safety Training', desc: 'Driver certification and ongoing safety protocols.' },
    { icon: Route, title: 'Route Management', desc: 'GPS-monitored routing for hazardous material transport.' },
    { icon: BarChart3, title: 'Performance Tracking', desc: 'Delivery reporting and operational monitoring.' }
  ];

  const clientTypes = [
    { name: 'Oil Marketing Companies', services: ['Terminal deliveries', 'Station supply', 'Bulk transport'] },
    { name: 'Independent Distributors', services: ['Flexible scheduling', 'Regional routes', 'Cost-effective solutions'] },
    { name: 'Industrial Clients', services: ['Direct plant delivery', 'Custom scheduling', 'Quality assurance'] },
    { name: 'Government Agencies', services: ['Compliant transportation', 'Documentation support', 'Reliable service'] }
  ];

  const fleetTypes = [
    { type: 'Heavy Duty Tankers', capacity: '35,000 - 45,000L', suitable: 'Long-distance terminal deliveries' },
    { type: 'Medium Tankers', capacity: '20,000 - 30,000L', suitable: 'Regional distribution routes' },
    { type: 'Specialized Units', capacity: '10,000 - 25,000L', suitable: 'Premium product transportation' }
  ];

  const process = [
    { step: '01', title: 'Requirements Assessment', desc: 'Analysis of your transportation needs, routes, and volumes.' },
    { step: '02', title: 'Service Planning', desc: 'Custom transportation plan with route and scheduling details.' },
    { step: '03', title: 'Contract Agreement', desc: 'Service agreement with clear terms and pricing.' },
    { step: '04', title: 'Ongoing Operations', desc: 'Transportation services with monitoring and reporting.' }
  ];

  return (
    <>
      <Head>
        <title>Licensed Petroleum Haulage Services | Fuel Transportation Jamaica | Nevloh Limited</title>
        <meta
          name="description"
          content="Licensed petroleum haulage contractor providing professional fuel transportation services across Jamaica. Up to 45,000L capacity, fully compliant and insured."
        />
        <meta
          name="keywords"
          content="petroleum haulage Jamaica, licensed haulage contractor, fuel transportation, petroleum logistics, bulk fuel transport, terminal delivery, oil haulage services"
        />
        <link rel="canonical" href="https://www.nevloh.com/services/haulage" />

        {/* Open Graph */}
        <meta property="og:title" content="Licensed Petroleum Haulage | Nevloh Limited Jamaica" />
        <meta property="og:description" content="Professional petroleum transportation for OMCs and industrial clients across Jamaica." />
        <meta property="og:image" content="https://www.nevloh.com/images/og-haulage.png" />
        <meta property="og:url" content="https://www.nevloh.com/services/haulage" />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(haulageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="min-h-screen bg-[#fcfdfe] font-sans selection:bg-blue-100">

        {/* ─── TIER 1 HERO: Enterprise Logistics ─── */}
        <section className="relative pt-24 pb-32 bg-[#1E293B] overflow-hidden">
          {/* Subtle Industrial Background Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Breadcrumbs */}
            <div className="mb-12">
              <Breadcrumbs items={breadcrumbConfigs.haulage} />
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-500/10 border border-slate-400/20 text-slate-300 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                  <Award size={14} />
                  <span>Licensed Contractor</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
                  Professional <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                    Petroleum Haulage
                  </span>
                </h1>

                <p className="text-xl text-slate-300 max-w-xl mb-10 leading-relaxed">
                  Nevloh Limited provides high-volume petroleum transportation services.
                  Licensed, fully insured, and safety-certified for terminal-to-station
                  logistics across Jamaica.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact/jamaica"
                    className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-900/40 flex items-center gap-2 group"
                  >
                    Discuss Partnership
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:+18764495172"
                    className="px-10 py-4 bg-slate-800 text-white rounded-2xl font-bold border border-slate-700 hover:bg-slate-700 transition-all flex items-center gap-2"
                  >
                    <Phone size={18} />
                    Fleet Dispatch
                  </a>
                </div>
              </div>

              {/* Mock Fleet Monitor Dashboard */}
              <div className="relative">
                <div className="bg-slate-900/50 backdrop-blur-md border border-slate-700 p-8 rounded-[2.5rem] shadow-2xl">
                  {/* Window Controls */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-1.5">
                      {[1, 2, 3].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-slate-700" />)}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 tracking-wider uppercase">Fleet_Dispatch_v4</div>
                  </div>

                  {/* Main Capacity Display */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-500/10 rounded-xl">
                        <Container className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">Up to 45,000 Litres</div>
                        <div className="text-xs text-slate-500 uppercase font-bold">Max Unit Capacity</div>
                      </div>
                    </div>
                    <div className="text-emerald-400 text-[10px] font-bold bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20 uppercase">
                      Available
                    </div>
                  </div>

                  <div className="h-[1px] bg-slate-800 mb-6" />

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-700/50">
                      <Scale className="text-slate-400 mb-2" size={18} />
                      <div className="text-white font-bold">Licensed</div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold">Certified Contractor</div>
                    </div>
                    <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-700/50">
                      <Shield className="text-slate-400 mb-2" size={18} />
                      <div className="text-white font-bold">Insured</div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold">Full Coverage</div>
                    </div>
                  </div>

                  {/* Coverage */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest">Coverage</div>
                    <div className="text-sm font-bold text-blue-400">All 14 Parishes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TECHNICAL FLEET INFRASTRUCTURE ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Schematic Visual */}
              <div className="order-2 lg:order-1">
                <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-10 text-center">
                    Fleet Configuration
                  </h4>

                  {/* Tanker Visual Placeholder */}
                  <div className="flex justify-center mb-10">
                    <div className="w-40 h-40 bg-white rounded-3xl shadow-lg flex items-center justify-center border border-slate-100">
                      <Truck className="text-slate-300" size={80} />
                    </div>
                  </div>

                  {/* Fleet Types */}
                  <div className="space-y-3 mb-8">
                    {fleetTypes.map((fleet, i) => (
                      <div key={i} className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-slate-900 text-sm">{fleet.type}</div>
                          <div className="text-[10px] text-slate-500">{fleet.suitable}</div>
                        </div>
                        <div className="text-sm font-black text-blue-600">{fleet.capacity}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-center">
                      <div className="text-xl font-black text-slate-900">Multi-Compartment</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase">Product Separation</div>
                    </div>
                    <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-center">
                      <div className="text-xl font-black text-slate-900">GPS Tracked</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase">Live Visibility</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
                  Fleet Capabilities
                </h2>
                <p className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                  Professional Fleet <br />
                  Infrastructure
                </p>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  Our fleet is configured for the demands of petroleum transportation.
                  Units are equipped with multi-product compartmentalization and
                  safety systems for compliant operations.
                </p>

                <div className="space-y-4">
                  {fleetSpecs.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                          <Icon size={24} className="text-slate-400 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">{item.title}</div>
                          <div className="text-sm text-slate-500">{item.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── GOVERNANCE & COMPLIANCE ─── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
                  Compliance
                </h2>
                <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                  Governance & Standards
                </p>
                <p className="text-slate-500 mt-4">
                  Operating under regulatory standards for hazardous material transport.
                </p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                <FileCheck className="text-emerald-500" size={32} />
                <div>
                  <div className="font-bold text-slate-900">Compliance Documentation</div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Available on Request</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {governanceItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                  >
                    <Icon className="text-blue-600 mb-6" size={32} />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── CLIENT TYPES ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
                Partnerships
              </h2>
              <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Clients We Serve
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {clientTypes.map((client, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{client.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {client.services.map((service, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 bg-white text-slate-600 rounded-full text-sm font-medium border border-slate-200"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PARTNERSHIP PROCESS ─── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
                Getting Started
              </h2>
              <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Partnership Process
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, i) => (
                <div key={i} className="text-center relative">
                  {/* Step Number Watermark */}
                  <div className="text-7xl font-black text-slate-100 mb-4">{step.step}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500">{step.desc}</p>

                  {/* Arrow */}
                  {i < process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full">
                      <ArrowRight className="text-slate-200 mx-auto" size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PARTNERSHIP CTA ─── */}
        <section className="py-24 px-6 bg-[#1E293B]">
          <div className="max-w-5xl mx-auto bg-slate-800/50 rounded-[3rem] p-12 md:p-16 border border-slate-700 relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" aria-hidden="true" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
                  Ready to Partner?
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Nevloh Limited is available for haulage contracts and partnerships with
                  OMCs and industrial stakeholders. Contact us to discuss your
                  transportation requirements.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact/jamaica"
                    className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold hover:bg-slate-100 transition-colors flex items-center gap-2"
                  >
                    <FileCheck size={18} />
                    Request Information
                  </Link>
                  <a
                    href="tel:+18764495172"
                    className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-2xl font-bold transition-colors flex items-center gap-2"
                  >
                    <Phone size={18} />
                    Call Dispatch
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '14', label: 'Parishes Covered' },
                  { val: '24/7', label: 'Dispatch Available' },
                  { val: '45K L', label: 'Max Capacity' },
                  { val: 'Licensed', label: 'Certified Contractor' }
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                    <div className="text-2xl font-black text-blue-400 mb-1">{stat.val}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── TENDERS & CONTRACTING ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="mx-auto mb-6 text-slate-300" size={64} />

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
              Contracting & Bidding
            </h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
              Nevloh Limited is available for long-term logistics contracts and petroleum
              haulage partnerships with OMCs and industrial stakeholders.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link
                href="/contact/jamaica"
                className="px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <FileCheck size={18} />
                Request Capabilities Statement
              </Link>
              <Link
                href="/contact/international"
                className="px-10 py-5 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Globe size={18} />
                International Inquiries
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default HaulageServices;