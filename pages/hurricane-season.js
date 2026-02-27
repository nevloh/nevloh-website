// pages/hurricane-season.js
// Tier 1 Institutional — Hurricane Season Emergency Operations
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  AlertTriangle, Phone, Shield, CheckCircle, ArrowRight, Radio,
  Zap, Cloud, Building, HeartPulse, Server, Truck, Clock,
  MapPin, Activity, Wind, Droplets, Battery
} from 'lucide-react';

const HurricaneSeasonPage = () => {
  // Schema for Emergency Service
  const emergencySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nevloh.com/hurricane-season#service",
    "name": "Hurricane Season Emergency Fuel Services Jamaica",
    "serviceType": "Emergency Fuel Delivery",
    "provider": {
      "@type": "Organization",
      "name": "Nevloh Group",
      "url": "https://www.nevloh.com",
      "telephone": "+1-876-449-5172"
    },
    "description": "24/7 emergency fuel services during hurricane season. Generator refuelling, fleet support, and critical infrastructure fuel delivery across Jamaica.",
    "areaServed": {
      "@type": "Country",
      "name": "Jamaica"
    }
  };

  const emergencyServices = [
    {
      icon: Zap,
      title: 'Generator Refuelling',
      desc: 'Priority fuel delivery for backup generators at hospitals, data centers, and critical facilities.',
      link: '/services/generator-refuelling'
    },
    {
      icon: Truck,
      title: 'Fleet Emergency Support',
      desc: 'Mobile refuelling for emergency response vehicles, utility crews, and relief operations.',
      link: '/services/fleet-refuelling'
    },
    {
      icon: Building,
      title: 'Bulk Emergency Supply',
      desc: 'High-volume fuel delivery for shelters, command centers, and distribution points.',
      link: '/services/bulk-fuel'
    },
    {
      icon: MapPin,
      title: 'Remote Site Delivery',
      desc: 'All-terrain fuel delivery to cut-off areas, construction sites, and disaster zones.',
      link: '/services/remote-delivery'
    }
  ];

  const criticalFacilities = [
    { icon: HeartPulse, name: 'Hospitals & Clinics' },
    { icon: Server, name: 'Data Centers' },
    { icon: Building, name: 'Emergency Shelters' },
    { icon: Radio, name: 'Communications Hubs' },
    { icon: Droplets, name: 'Water Treatment' },
    { icon: Battery, name: 'Power Infrastructure' }
  ];

  const preparednessChecklist = [
    'Contact us to discuss your facility\'s fuel needs',
    'Schedule pre-storm generator top-off (recommended 48hrs before)',
    'Confirm fuel tank capacity and access routes',
    'Share emergency contact information with our dispatch',
    'Review fuel level monitoring options',
    'Save emergency hotline: (876) 449-5172'
  ];

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Hurricane Season Emergency Fuel Services | 24/7 Support | Nevloh Limited Jamaica</title>
        <meta
          name="description"
          content="Hurricane season fuel services across Jamaica. 24/7 generator refuelling, fleet support, and critical infrastructure fuel delivery. Call (876) 449-5172."
        />
        <meta
          name="keywords"
          content="hurricane season Jamaica, emergency fuel delivery, generator refuelling hurricane, storm preparedness fuel, emergency power Jamaica, disaster response fuel, critical infrastructure fuel"
        />
        <link rel="canonical" href="https://www.nevloh.com/hurricane-season" />

        {/* Open Graph */}
        <meta property="og:title" content="Hurricane Season Emergency Fuel | 24/7 Support | Nevloh Limited" />
        <meta property="og:description" content="Hurricane season fuel services for generators, fleets, and critical infrastructure across Jamaica." />
        <meta property="og:image" content="https://www.nevloh.com/images/og-hurricane-season.png" />
        <meta property="og:url" content="https://www.nevloh.com/hurricane-season" />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencySchema) }}
        />
      </Head>

      <div className="min-h-screen bg-slate-950 font-sans selection:bg-orange-200">

        {/* ─── EMERGENCY HERO ─── */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-950/30 via-slate-950 to-slate-950 pointer-events-none" aria-hidden="true" />

          {/* Storm Icon Pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none" aria-hidden="true">
            <Wind className="absolute top-20 right-20 text-white" size={200} />
            <Cloud className="absolute top-60 right-60 text-white" size={150} />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Season Banner */}
            <div className="bg-orange-600 rounded-2xl p-4 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                <span className="text-white font-black text-sm uppercase tracking-wider">
                  Hurricane Season {currentYear} — Emergency Services Available
                </span>
              </div>
              <a
                href="tel:+18764495172"
                className="flex items-center gap-2 bg-white text-orange-600 px-6 py-2 rounded-xl font-black text-sm hover:bg-orange-50 transition-colors"
              >
                <Phone size={16} />
                (876) 449-5172
              </a>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                  <AlertTriangle size={14} />
                  <span>Storm Season Support</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
                  Hurricane Season <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
                    Fuel Services
                  </span>
                </h1>

                <p className="text-xl text-slate-400 max-w-xl mb-10 leading-relaxed">
                  When storms approach, fuel becomes critical. Nevloh Limited provides 24/7 emergency
                  fuel logistics across all 14 parishes—supporting generators, fleets, and
                  critical infrastructure throughout the season.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+18764495172"
                    className="px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl font-black transition-all shadow-xl shadow-orange-900/40 flex items-center justify-center gap-3"
                  >
                    <Phone size={20} />
                    Call Us Now
                  </a>
                  <Link
                    href="/contact/jamaica"
                    className="px-10 py-5 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold transition-all border border-slate-700 flex items-center justify-center gap-2"
                  >
                    Contact Our Team
                  </Link>
                </div>
              </div>

              {/* Status Dashboard */}
              <div className="relative">
                <div className="bg-slate-900 rounded-[2.5rem] border border-slate-800 p-8 shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-white font-bold flex items-center gap-2">
                      <Activity className="text-emerald-400" size={18} />
                      Operations Status
                    </h3>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                      ACTIVE
                    </span>
                  </div>

                  {/* Status Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-5 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                      <div className="text-3xl font-black text-emerald-400">14</div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Parishes Covered</div>
                    </div>
                    <div className="p-5 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                      <div className="text-3xl font-black text-blue-400">24/7</div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Dispatch Available</div>
                    </div>
                  </div>

                  {/* Services Available */}
                  <div className="pt-4 border-t border-slate-700/50">
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-3">Services Available</div>
                    <div className="flex flex-wrap gap-2">
                      {['Generator', 'Fleet', 'Bulk', 'Remote'].map((service, i) => (
                        <div key={i} className="flex items-center gap-1 px-3 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                          <span className="text-[10px] font-bold text-emerald-400">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── EMERGENCY SERVICES ─── */}
        <section className="py-24 px-6 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-4">
                Storm Support
              </h2>
              <p className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
                Emergency Fuel Services
              </p>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Fuel logistics support available throughout hurricane season.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergencyServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={i}
                    href={service.link}
                    className="group p-8 bg-slate-800/50 rounded-[2rem] border border-slate-700/50 transition-all duration-500 hover:bg-slate-800 hover:border-orange-500/30 hover:-translate-y-2"
                  >
                    <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                      <Icon className="text-orange-400" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">{service.desc}</p>
                    <span className="text-orange-400 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                      Learn More <ArrowRight size={16} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── CRITICAL FACILITIES ─── */}
        <section className="py-24 px-6 bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-4">
                  Critical Infrastructure
                </h2>
                <p className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6 leading-tight">
                  Supporting Essential <br />
                  <span className="text-slate-400">Facilities</span>
                </p>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  We work with hospitals, data centers, shelters, and other critical facilities
                  to help ensure fuel availability during storm events. Contact us to discuss
                  your facility's needs.
                </p>

                <Link
                  href="/contact/jamaica"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition-colors"
                >
                  <Shield size={18} />
                  Contact Us
                </Link>
              </div>

              {/* Facility Grid */}
              <div className="grid grid-cols-2 gap-4">
                {criticalFacilities.map((facility, i) => {
                  const Icon = facility.icon;
                  return (
                    <div
                      key={i}
                      className="p-6 rounded-2xl border bg-slate-800/50 border-slate-700/50"
                    >
                      <Icon className="text-blue-400 mb-3" size={28} />
                      <div className="text-white font-bold">{facility.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── PREPAREDNESS CHECKLIST ─── */}
        <section className="py-24 px-6 bg-slate-900">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800 rounded-[3rem] p-12 md:p-16 border border-slate-700">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center">
                  <Shield className="text-orange-400" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white">Storm Preparedness Checklist</h2>
                  <p className="text-slate-400">Steps to consider before hurricane season</p>
                </div>
              </div>

              <div className="space-y-4">
                {preparednessChecklist.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50"
                  >
                    <div className="w-6 h-6 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="text-emerald-400" size={14} />
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-slate-400 text-sm">
                  Questions about storm preparedness? We're here to help.
                </div>
                <Link
                  href="/contact/jamaica"
                  className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white rounded-xl font-bold transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-orange-900/50">
              <AlertTriangle className="text-white" size={40} />
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Plan Ahead for Storm Season
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
              Contact us before hurricane season to discuss your fuel needs. We can help
              you develop a plan for keeping your generators and operations fueled
              during storm events.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <a
                href="tel:+18764495172"
                className="px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl font-black text-sm uppercase tracking-wider shadow-lg shadow-orange-900/40 transition-all flex items-center justify-center gap-3"
              >
                <Phone size={20} />
                (876) 449-5172
              </a>
              <Link
                href="/contact/jamaica"
                className="px-10 py-5 bg-white hover:bg-slate-100 text-slate-900 rounded-2xl font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Clock size={18} />
                Contact Our Team
              </Link>
            </div>

            <div className="text-slate-500 text-sm">
              <strong className="text-slate-400">Hurricane Season:</strong> June 1 – November 30 •
              <strong className="text-slate-400 ml-2">Peak Activity:</strong> August – October
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default HurricaneSeasonPage;