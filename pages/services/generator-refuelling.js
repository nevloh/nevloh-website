// pages/services/generator-refuelling.js
// Tier 1 Institutional — Generator Refuelling & Power Support
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Zap, Shield, Clock, CheckCircle, ArrowRight, Activity,
  Settings, Phone, Radio, Server, Building,
  HeartPulse, HardHat, Globe
} from 'lucide-react';
import Breadcrumbs, { breadcrumbConfigs } from '../../components/Breadcrumbs';

const GeneratorRefuelling = () => {
  // Enhanced Service Schema
  const genSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nevloh.com/services/generator-refuelling#service",
    "name": "Generator Refuelling Services Jamaica",
    "serviceType": "Generator Refuelling",
    "provider": {
      "@type": "Organization",
      "name": "Nevloh Group",
      "url": "https://www.nevloh.com",
      "telephone": "+1-876-449-5172"
    },
    "description": "24/7 generator fueling services for hospitals, data centers, and critical infrastructure across Jamaica.",
    "areaServed": {
      "@type": "Country",
      "name": "Jamaica"
    }
  };

  const criticalSectors = [
    { icon: HeartPulse, title: 'Medical Centers', desc: 'Reliable refuelling support for life-support systems and surgical suites.' },
    { icon: Server, title: 'Data Centers', desc: 'Helping protect uptime and cooling for IT infrastructure.' },
    { icon: Building, title: 'Financial Institutions', desc: 'Supporting transaction continuity during grid events.' },
    { icon: HardHat, title: 'Manufacturing', desc: 'Helping prevent production stalls and equipment issues.' }
  ];

  const monitoringFeatures = [
    'Remote fuel level monitoring',
    'Low-level alert notifications',
    'Fuel quality tracking',
    'Consumption analytics'
  ];

  const serviceFeatures = [
    { title: 'Scheduled Refills', desc: 'Regular delivery schedules tailored to your consumption patterns.' },
    { title: 'Emergency Response', desc: '24/7 dispatch available for urgent refuelling needs.' },
    { title: 'Remote Monitoring', desc: 'Optional telemetry systems to track fuel levels in real-time.' },
    { title: 'Quality Assurance', desc: 'Premium ULSD diesel with filtration at point of delivery.' }
  ];

  return (
    <>
      <Head>
        <title>Generator Refuelling Services | 24/7 Power Support Jamaica | Nevloh Limited</title>
        <meta
          name="description"
          content="Professional generator refuelling services for Jamaica's critical facilities. 24/7 emergency support, remote monitoring, and scheduled maintenance for hospitals, data centers, and more."
        />
        <meta
          name="keywords"
          content="generator refuelling Jamaica, emergency fuel delivery, hospital generator fuel, data center power backup, critical facility fuel, 24/7 generator support, fuel monitoring"
        />
        <link rel="canonical" href="https://www.nevloh.com/services/generator-refuelling" />

        {/* Open Graph */}
        <meta property="og:title" content="Generator Refuelling Services | Nevloh Limited Jamaica" />
        <meta property="og:description" content="24/7 generator fueling services for hospitals, data centers, and critical infrastructure across Jamaica." />
        <meta property="og:image" content="https://www.nevloh.com/images/og-generator-refuelling.png" />
        <meta property="og:url" content="https://www.nevloh.com/services/generator-refuelling" />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(genSchema) }}
        />
      </Head>

      <div className="min-h-screen bg-[#fcfdfe] font-sans selection:bg-blue-100">

        {/* ─── TIER 1 HERO ─── */}
        <section className="relative pt-24 pb-32 bg-slate-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-blue-400/30 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-emerald-400/30 rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Breadcrumbs */}
            <div className="mb-12">
              <Breadcrumbs items={breadcrumbConfigs.generatorRefuelling} />
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                  <Radio size={14} />
                  <span>Critical Power Support</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
                  Generator <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Refuelling Services
                  </span>
                </h1>

                <p className="text-xl text-slate-400 max-w-xl mb-10 leading-relaxed">
                  Keep your backup power systems ready with professional generator refuelling
                  services. We serve hospitals, data centers, and critical facilities
                  across all 14 parishes in Jamaica.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+18764495172"
                    className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center gap-2"
                  >
                    <Phone size={20} />
                    (876) 449-5172
                  </a>
                  <Link
                    href="/contact/jamaica"
                    className="px-10 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold transition-all border border-slate-700 flex items-center justify-center gap-2"
                  >
                    Request Consultation
                  </Link>
                </div>
              </div>

              {/* Service Overview Card */}
              <div className="relative">
                <div className="bg-slate-800 rounded-[2.5rem] border border-slate-700 p-8 shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-white font-bold flex items-center gap-2">
                      <Activity className="text-emerald-400" size={18} />
                      Service Overview
                    </h3>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                      24/7 AVAILABLE
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-6">
                    {serviceFeatures.map((feature, i) => (
                      <div key={i} className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                        <div className="text-white font-bold mb-1">{feature.title}</div>
                        <div className="text-sm text-slate-400">{feature.desc}</div>
                      </div>
                    ))}
                  </div>

                  {/* Coverage */}
                  <div className="pt-4 border-t border-slate-700/50 flex items-center justify-between">
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest">Coverage Area</div>
                    <div className="text-sm font-bold text-blue-400">All 14 Parishes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTORS WE SERVE ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
                Critical Infrastructure
              </h2>
              <p className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                Sectors We Serve
              </p>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Professional generator refuelling for Jamaica's essential facilities.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {criticalSectors.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="group p-8 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-2"
                  >
                    <Icon className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" size={40} />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── MONITORING CAPABILITIES ─── */}
        <section className="py-24 px-6 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Tech Card */}
              <div className="order-2 lg:order-1">
                <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
                  <h4 className="text-2xl font-black mb-6 flex items-center gap-3">
                    <Settings className="text-blue-400" size={28} />
                    Remote Monitoring
                  </h4>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    Optional remote monitoring systems can be integrated with your generator fuel tanks,
                    providing visibility into fuel levels and consumption patterns.
                  </p>
                  <ul className="space-y-4">
                    {monitoringFeatures.map((f, i) => (
                      <li key={i} className="flex items-center gap-4 text-sm">
                        <CheckCircle className="text-emerald-400 flex-shrink-0" size={18} />
                        <span className="text-slate-300">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact/jamaica"
                    className="mt-8 inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors text-sm uppercase tracking-wider"
                  >
                    Learn About Monitoring
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-4">
                  Proactive Management
                </h2>
                <p className="text-3xl md:text-5xl font-black mb-8 tracking-tight leading-tight">
                  Stay Informed <br />
                  <span className="text-slate-400">About Your Fuel Levels</span>
                </p>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  With optional monitoring systems, you can track your generator fuel levels
                  remotely and receive alerts when levels drop. This helps you plan refills
                  and avoid unexpected situations.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-3xl font-black text-emerald-400">24/7</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest">Dispatch Available</div>
                  </div>
                  <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-3xl font-black text-blue-400">14</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest">Parishes Covered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── EMERGENCY SUPPORT ─── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-[3rem] p-12 md:p-16 relative overflow-hidden shadow-xl">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                {/* Icon */}
                <div className="w-24 h-24 bg-blue-100 rounded-3xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-blue-600" size={48} />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                    24/7 Emergency Support
                  </h2>
                  <p className="text-slate-600 leading-relaxed max-w-2xl">
                    Our dispatch team is available around the clock for urgent generator refuelling needs.
                    Whether it's a power outage or unexpected fuel depletion, call us and we'll work to
                    get fuel to your facility as quickly as possible.
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="tel:+18764495172"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-colors whitespace-nowrap flex-shrink-0 flex items-center gap-2"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="py-24 px-6 bg-slate-950">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              <Shield size={12} />
              <span>Power Support</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Keep Your Generators Ready
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
              Partner with Nevloh for professional generator refuelling services.
              Scheduled maintenance, emergency support, and optional monitoring—all tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link
                href="/contact/jamaica"
                className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-sm uppercase tracking-wider shadow-lg shadow-blue-900/30 transition-all flex items-center justify-center gap-2"
              >
                <Zap size={18} />
                Get Started
              </Link>
              <a
                href="tel:+18764495172"
                className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Contact Dispatch
              </a>
            </div>

            {/* Bilateral Link */}
            <Link
              href="/contact/international"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-400 text-xs font-bold uppercase tracking-widest transition-colors"
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

export default GeneratorRefuelling;