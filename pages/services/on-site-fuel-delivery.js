// pages/services/on-site-fuel-delivery.js
// Tier 1 Institutional — On-Site & Remote Fuel Delivery
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  MapPin, Clock, CheckCircle, ArrowRight, Construction,
  Tractor, Mountain, Building, Zap, Shield, Truck,
  Navigation, Globe, HardHat, Phone, Fuel
} from 'lucide-react';
import Breadcrumbs, { breadcrumbConfigs } from '../../components/Breadcrumbs';

const OnSiteFuelDelivery = () => {
  // Enhanced Service Schema
  const onsiteSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nevloh.com/services/on-site-fuel-delivery#service",
    "name": "On-Site Fuel Delivery Services Jamaica",
    "serviceType": "On-Site Fuel Delivery",
    "provider": {
      "@type": "Organization",
      "name": "Nevloh Group",
      "url": "https://www.nevloh.com",
      "telephone": "+1-876-449-5172"
    },
    "description": "Mobile fuel delivery to construction sites, agriculture, and remote locations across all 14 parishes in Jamaica.",
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
        "name": "Do you deliver fuel to construction sites in Jamaica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Nevloh Limited provides on-site fuel delivery to construction sites across all 14 parishes in Jamaica. We refuel heavy machinery and equipment directly at your job site."
        }
      },
      {
        "@type": "Question",
        "name": "Can you deliver fuel to remote locations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our fleet includes vehicles capable of reaching challenging locations including rural farms, mining sites, and other hard-to-reach areas across Jamaica."
        }
      }
    ]
  };

  const sectors = [
    { icon: Construction, title: 'Infrastructure Sites', desc: 'Direct-to-tank refuelling for pavers, rollers, and cranes.' },
    { icon: Tractor, title: 'Agricultural Operations', desc: 'Fueling harvesters and irrigation pumps in the field.' },
    { icon: Globe, title: 'Telecom Towers', desc: 'Fuel support for remote communication infrastructure.' },
    { icon: HardHat, title: 'Mining Operations', desc: 'Fuel logistics for quarrying and mining sites.' }
  ];

  const capabilities = [
    { icon: Mountain, title: 'Remote Access', desc: 'Vehicles equipped for challenging terrain and rural locations.' },
    { icon: Shield, title: 'Safe Transfer', desc: 'Professional fuel handling and transfer procedures.' },
    { icon: Navigation, title: 'GPS Tracking', desc: 'Real-time visibility on delivery status.' },
    { icon: Clock, title: 'Flexible Scheduling', desc: 'Scheduled deliveries or on-demand service.' }
  ];

  const deliveryProcess = [
    { step: '01', title: 'Site Assessment', desc: 'We evaluate your location accessibility and fuel requirements.' },
    { step: '02', title: 'Custom Planning', desc: 'Tailored delivery plan based on your schedule and needs.' },
    { step: '03', title: 'Professional Delivery', desc: 'Trained technicians deliver fuel safely to your location.' },
    { step: '04', title: 'Ongoing Service', desc: 'Flexible scheduling with 24/7 support available.' }
  ];

  const industries = [
    { name: 'Construction & Infrastructure', desc: 'Heavy machinery and equipment' },
    { name: 'Agriculture & Farming', desc: 'Tractors, harvesters, and pumps' },
    { name: 'Mining Operations', desc: 'Quarrying and extraction sites' },
    { name: 'Forestry & Logging', desc: 'Remote forest operations' },
    { name: 'Event Management', desc: 'Festivals and temporary events' },
    { name: 'Telecommunications', desc: 'Remote tower sites' },
    { name: 'Emergency Services', desc: 'Disaster response support' },
    { name: 'Transportation', desc: 'Remote depots and hubs' }
  ];

  return (
    <>
      <Head>
        <title>On-Site Fuel Delivery Jamaica | Construction & Remote Locations | Nevloh Limited</title>
        <meta
          name="description"
          content="Professional on-site fuel delivery across Jamaica. Construction sites, farms, remote locations - we deliver anywhere in all 14 parishes. 24/7 support available."
        />
        <meta
          name="keywords"
          content="on-site fuel delivery Jamaica, construction fuel delivery, remote fuel delivery, agricultural fuel service, mobile fuel service, equipment refuelling, farm fuel delivery"
        />
        <link rel="canonical" href="https://www.nevloh.com/services/on-site-fuel-delivery" />

        {/* Open Graph */}
        <meta property="og:title" content="On-Site Fuel Delivery | Nevloh Limited Jamaica" />
        <meta property="og:description" content="Mobile fuel delivery to construction sites, farms, and remote locations across Jamaica." />
        <meta property="og:image" content="https://www.nevloh.com/images/og-onsite-delivery.png" />
        <meta property="og:url" content="https://www.nevloh.com/services/on-site-fuel-delivery" />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(onsiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="min-h-screen bg-slate-50 font-sans selection:bg-green-100">

        {/* ─── TIER 1 HERO: The "Anywhere" Promise ─── */}
        <section className="relative pt-24 pb-32 bg-slate-900 overflow-hidden">
          {/* Topographic Pattern Background */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M50 0 L100 50 L50 100 L0 50 Z' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='30' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='20' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Breadcrumbs */}
            <div className="mb-12">
              <Breadcrumbs items={breadcrumbConfigs.onSiteFuelDelivery} />
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                  <Navigation size={14} />
                  <span>Mobile Fuel Delivery</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
                  Fuel Station <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                    On Demand
                  </span>
                </h1>

                <p className="text-xl text-slate-400 max-w-xl mb-10 leading-relaxed">
                  Nevloh Limited delivers premium ULSD directly to your excavators,
                  tractors, and generators. From urban job sites to rural locations,
                  we bring fuel to wherever your work takes you.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact/jamaica"
                    className="px-10 py-4 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-bold transition-all shadow-xl shadow-green-900/40 flex items-center justify-center gap-2 group"
                  >
                    Schedule Site Delivery
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:+18764495172"
                    className="px-10 py-4 bg-slate-800 text-white rounded-2xl font-bold transition-all border border-slate-700 hover:bg-slate-700 flex items-center justify-center gap-2"
                  >
                    <Phone size={18} />
                    24/7 Support
                  </a>
                </div>
              </div>

              {/* Visual Component */}
              <div className="relative">
                <div className="bg-slate-800 p-3 rounded-[3rem] shadow-2xl border border-slate-700">
                  <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 aspect-video flex items-center justify-center">
                    {/* Truck Icon Placeholder */}
                    <Truck className="text-slate-700" size={120} />

                    {/* GPS Badge */}
                    <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-black/60 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs font-bold text-white tracking-widest uppercase">GPS Tracked Fleet</span>
                    </div>

                    {/* Coverage Badge */}
                    <div className="absolute top-6 right-6 bg-green-600/90 backdrop-blur-md px-4 py-2 rounded-xl">
                      <div className="text-white font-black text-lg">14 Parishes</div>
                      <div className="text-green-200 text-[10px] uppercase tracking-widest">Coverage Area</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── TERRAIN CAPABILITIES ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-green-600 mb-4">
                  Delivery Capabilities
                </h2>
                <p className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                  Built for the <br />
                  <span className="text-green-600">Jamaican Terrain</span>
                </p>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  Our mobile delivery units are equipped to handle varying road conditions
                  and access points. We work to reach your job site regardless of location,
                  helping keep your equipment fueled and your operations running.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {capabilities.slice(0, 2).map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="space-y-3">
                        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                          <Icon className="text-green-600" size={24} />
                        </div>
                        <div className="font-bold text-slate-900">{item.title}</div>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sector Cards */}
              <div className="space-y-4">
                {sectors.map((sector, i) => {
                  const Icon = sector.icon;
                  return (
                    <div
                      key={i}
                      className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex gap-6 hover:bg-white hover:shadow-xl transition-all group"
                    >
                      <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-green-600 transition-colors">
                        <Icon size={28} className="text-slate-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">{sector.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{sector.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── SERVICE FEATURES ─── */}
        <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-green-600 mb-4">
                Service Features
              </h2>
              <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Why Choose On-Site Delivery
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                      <Icon className="text-green-600" size={32} />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{cap.title}</h3>
                    <p className="text-sm text-slate-500">{cap.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── DELIVERY PROCESS ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-green-600 mb-4">
                How It Works
              </h2>
              <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Delivery Process
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {deliveryProcess.map((step, i) => (
                <div key={i} className="text-center relative">
                  {/* Step Number Watermark */}
                  <div className="text-7xl font-black text-slate-100 mb-4">{step.step}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500">{step.desc}</p>

                  {/* Arrow */}
                  {i < deliveryProcess.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full">
                      <ArrowRight className="text-slate-200 mx-auto" size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── INDUSTRIES ─── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-green-600 mb-4">
                Industries
              </h2>
              <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Sectors We Serve
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((industry, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="font-bold text-slate-900 mb-1 text-sm">{industry.name}</h3>
                  <p className="text-slate-500 text-xs">{industry.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/20 rounded-full blur-[100px]" aria-hidden="true" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <Zap size={64} className="text-green-400 mb-8 opacity-50" />

              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
                Bring the Fuel Station <br />
                <span className="text-green-400">To Your Site</span>
              </h2>

              <p className="text-slate-400 text-lg max-w-2xl mb-10">
                Stop hauling drums or moving equipment to refuel. Let Nevloh handle
                the logistics so your crew can focus on the work at hand.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <Link
                  href="/contact/jamaica"
                  className="px-10 py-5 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <MapPin size={18} />
                  Schedule Site Delivery
                </Link>
                <a
                  href="tel:+18764495172"
                  className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold text-sm uppercase tracking-wider transition-all border border-white/10 flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Contact Dispatch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FINAL BILATERAL CTA ─── */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-slate-500 mb-6">
              <strong className="text-slate-700">Coverage:</strong> All 14 parishes across Jamaica
            </p>
            <Link
              href="/contact/international"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-green-600 text-xs font-bold uppercase tracking-widest transition-colors"
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

export default OnSiteFuelDelivery;