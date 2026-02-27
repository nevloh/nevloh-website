// components/HeroSection.js
// Tier 1 Institutional — Dual Pillar Business Architecture
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Truck, Phone, Globe, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  const handleCTAClick = (label) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Hero CTA',
        event_label: label,
        value: 1
      });
    }
  };

  return (
    <>
      <section
        className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-20 px-4 bg-[#fcfdfe] overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* BACKGROUND: Global Network Grid */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%231e3a8a' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
          aria-hidden="true"
        />

        {/* Subtle radial glow */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.06),transparent_60%)]" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Header & Logo */}
          <div className="flex flex-col items-center mb-12">
            <div className="relative mb-6 group">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl blur-3xl opacity-10 group-hover:opacity-20 transition-opacity animate-pulse" />
              <Image
                src="/images/logo.png"
                alt="Nevloh Group Logo"
                width={100}
                height={100}
                className="relative rounded-2xl border border-slate-200 shadow-xl"
                priority
              />
            </div>
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Bilateral Global Operations Active</span>
            </div>
          </div>

          {/* Core Value Proposition */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1
              id="hero-heading"
              className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.05] mb-8"
            >
              Reliable Energy. <br />
              <span className="text-blue-600">Global Execution.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Managing high-volume logistics across Jamaica while executing structured
              commodities trade from our Wyoming trade desk.
            </p>
          </div>

          {/* ─── DUAL PILLAR VISUALS ─── */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">

            {/* PILLAR 1: Jamaica Operations */}
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/20">
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src="/images/fuel-truck-delivery.jpg"
                  alt="Jamaica Fuel Delivery Operations"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                <div className="absolute bottom-6 left-8 flex items-center gap-3">
                  <div className="bg-blue-600 p-3 rounded-2xl text-white shadow-xl shadow-blue-500/30">
                    <Truck size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-400 uppercase tracking-widest leading-none mb-1">Regional Ops</p>
                    <p className="text-lg font-bold text-white leading-none">Nevloh Limited</p>
                    <p className="font-mono text-[10px] text-slate-400 tracking-wider mt-1">SPANISH TOWN, JAMAICA</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                {/* Service Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-slate-800 rounded-lg border border-slate-700 text-slate-300">FLEET REFUEL</span>
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-slate-800 rounded-lg border border-slate-700 text-slate-300">BULK SUPPLY</span>
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-slate-800 rounded-lg border border-blue-500/50 text-blue-400">ALL 14 PARISHES</span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Island-wide fuel logistics serving industrial and commercial off-takers with licensed petroleum haulage.
                </p>
                <Link
                  href="/contact/jamaica"
                  onClick={() => handleCTAClick('Jamaica Quote')}
                  className="flex items-center justify-between w-full bg-slate-800 hover:bg-blue-600 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 border border-slate-700 hover:border-blue-500 group/btn"
                >
                  <span>Request Local Quote</span>
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* PILLAR 2: International Trade */}
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-indigo-500/20">
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src="/images/og-international-trade.png"
                  alt="International Commodities Trade Desk"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                {/* Banking & Compliance Badge */}
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700 px-3 py-1.5 rounded-full">
                  <ShieldCheck size={12} className="text-emerald-400" />
                  <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">SGS / Intertek Verified</span>
                </div>

                <div className="absolute bottom-6 left-8 flex items-center gap-3">
                  <div className="bg-indigo-600 p-3 rounded-2xl text-white shadow-xl shadow-indigo-500/30">
                    <Globe size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest leading-none mb-1">Global Desk</p>
                    <p className="text-lg font-bold text-white leading-none">Nevloh LLC</p>
                    <p className="font-mono text-[10px] text-slate-400 tracking-wider mt-1">CASPER, WYOMING — USA</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                {/* Key Spec Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-slate-800 rounded-lg border border-slate-700 text-slate-300">EN590 DIESEL</span>
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-slate-800 rounded-lg border border-slate-700 text-slate-300">UREA 46%</span>
                  <Link href="/glossary#ucp-600" className="text-[10px] font-bold px-2.5 py-1 bg-slate-800 rounded-lg border border-indigo-500/50 text-indigo-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all">
                    UCP 600
                  </Link>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Structured settlement for EN590 Diesel and Urea 46% via irrevocable LC-at-sight. Bank-to-bank execution only.
                </p>
                <Link
                  href="/contact/international"
                  onClick={() => handleCTAClick('Intl Inquiry')}
                  className="flex items-center justify-between w-full bg-slate-800 hover:bg-indigo-600 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 border border-slate-700 hover:border-indigo-500 group/btn"
                >
                  <span>Submit Trade Inquiry</span>
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

          {/* Quick Connect & Verification */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-8">
              <Link
                href="/glossary#ucp-600"
                className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors"
              >
                <ShieldCheck size={16} />
                <span>UCP 600 COMPLIANT</span>
              </Link>
            </div>
            <a
              href="tel:+18764495172"
              className="group flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-slate-200 px-8 py-3 rounded-full text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300"
            >
              <Phone size={18} className="text-blue-600" />
              <span className="font-bold">Direct Operations: (876) 449-5172</span>
            </a>
          </div>
        </div>

        {/* Floating Background Assets */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-100 rounded-full blur-[120px] opacity-30 pointer-events-none" aria-hidden="true" />
      </section>
    </>
  );
}