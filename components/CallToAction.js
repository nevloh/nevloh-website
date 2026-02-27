// components/CallToAction.js
// Tier 1 Institutional — Sovereign Energy Partnership CTA
import React from 'react';
import Link from 'next/link';
import {
  ArrowRight, Truck, Globe, Phone, ShieldCheck,
  Landmark, BadgeCheck, Clock, Zap
} from 'lucide-react';

export default function CallToAction() {
  const handleActionClick = (label) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA_Section',
        event_label: label,
        value: 1
      });
    }
  };

  const regulatoryItems = [
    { icon: Landmark, title: "UCP 600", desc: "Banking Compliance", href: "/glossary#ucp-600" },
    { icon: ShieldCheck, title: "Licensed Ops", desc: "Petroleum Haulage", href: null },
    { icon: Clock, title: "24/7 Dispatch", desc: "Emergency Response", href: null },
    { icon: BadgeCheck, title: "SGS Verified", desc: "Quality Assurance", href: "/glossary#sgs" }
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Professional Energy & Commodities Services",
            "provider": {
              "@type": "Organization",
              "name": "Nevloh Group",
              "url": "https://www.nevloh.com",
              "telephone": "+1-876-449-5172"
            },
            "description": "Professional fuel logistics for Jamaica and structured commodities trading via Nevloh LLC (Wyoming, USA)",
            "areaServed": [
              { "@type": "Country", "name": "Jamaica" },
              { "@type": "Place", "name": "Caribbean Basin" }
            ]
          })
        }}
      />

      <section
        className="relative py-24 px-6 overflow-hidden bg-slate-950"
        aria-labelledby="cta-heading"
      >
        {/* Institutional Background Architecture */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Content */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              <Zap size={12} className="animate-pulse" />
              <span>Finalize Your Energy Supply Chain</span>
            </div>

            <h2
              id="cta-heading"
              className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-8"
            >
              Strategic Energy Partnership. <br />
              <span className="text-blue-500">Executed with Precision.</span>
            </h2>

            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
              Whether you require island-wide fuel logistics for your Jamaican operations or
              structured commodities settlement via our Wyoming trade desk, Nevloh Group
              delivers technical excellence and financial security.
            </p>

            {/* ─── DUAL PATH CTAs ─── */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <Link
                href="/contact/jamaica"
                onClick={() => handleActionClick('Regional Quote')}
                className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-blue-900/40 hover:shadow-blue-500/30"
              >
                <Truck size={20} />
                <span>Request Local Quote</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact/international"
                onClick={() => handleActionClick('Intl Inquiry')}
                className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/10 hover:border-white/20 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all"
              >
                <Globe size={20} />
                <span>International Trade Desk</span>
                <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>

          {/* ─── REGULATORY STRIP ─── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {regulatoryItems.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-[2rem] text-center group hover:border-blue-500/30 transition-all h-full">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon size={22} />
                  </div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">{item.title}</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{item.desc}</p>
                </div>
              );

              return item.href ? (
                <Link key={i} href={item.href} className="block">
                  {content}
                </Link>
              ) : (
                <div key={i}>{content}</div>
              );
            })}
          </div>

          {/* ─── ENTITY CARDS ─── */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {/* Nevloh Limited */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Nevloh Limited</h4>
                  <p className="font-mono text-[10px] text-slate-500 tracking-wider">SPANISH TOWN, JAMAICA</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Island-wide fuel logistics, licensed petroleum haulage, and 24/7 emergency dispatch for commercial and industrial operations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold px-3 py-1 bg-slate-800 rounded-lg text-slate-300">FLEET REFUEL</span>
                <span className="text-[10px] font-bold px-3 py-1 bg-slate-800 rounded-lg text-slate-300">BULK SUPPLY</span>
                <span className="text-[10px] font-bold px-3 py-1 bg-slate-800 rounded-lg text-blue-400 border border-blue-500/30">ALL 14 PARISHES</span>
              </div>
            </div>

            {/* Nevloh LLC */}
            <div className="bg-indigo-950/30 backdrop-blur-md border border-indigo-500/20 rounded-[2rem] p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Nevloh LLC</h4>
                  <p className="font-mono text-[10px] text-slate-500 tracking-wider">CASPER, WYOMING — USA</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Structured commodities trading for EN590 Diesel and Urea 46% via irrevocable LC-at-sight. Bank-to-bank settlement only.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold px-3 py-1 bg-slate-800 rounded-lg text-slate-300">EN590 DIESEL</span>
                <span className="text-[10px] font-bold px-3 py-1 bg-slate-800 rounded-lg text-slate-300">UREA 46%</span>
                <Link href="/glossary#ucp-600" className="text-[10px] font-bold px-3 py-1 bg-slate-800 rounded-lg text-indigo-400 border border-indigo-500/30 hover:bg-indigo-600 hover:text-white transition-all">
                  UCP 600
                </Link>
              </div>
            </div>
          </div>

          {/* ─── EMERGENCY FOOTER ─── */}
          <div className="flex flex-col items-center gap-6 border-t border-slate-800 pt-16">
            <a
              href="tel:+18764495172"
              onClick={() => handleActionClick('Emergency Call')}
              className="group flex items-center gap-3 bg-red-950/30 border border-red-900/40 hover:border-red-500/50 px-6 py-3 rounded-full transition-all"
            >
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
              <Phone size={14} className="text-red-300" />
              <span className="text-[11px] font-bold text-red-200 uppercase tracking-widest">
                Critical Fuel Emergency? Call 24/7 Ops: (876) 449-5172
              </span>
            </a>

            <div className="text-slate-600 text-xs font-medium text-center max-w-lg">
              Nevloh Group handles regional fuel logistics via Nevloh Limited (Jamaica) and global commodities via Nevloh LLC (Wyoming, USA).
            </div>

            {/* Learn More Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/services"
                className="text-slate-500 hover:text-blue-400 transition-colors underline underline-offset-4 decoration-slate-700 hover:decoration-blue-400"
              >
                Explore Services
              </Link>
              <Link
                href="/about"
                className="text-slate-500 hover:text-blue-400 transition-colors underline underline-offset-4 decoration-slate-700 hover:decoration-blue-400"
              >
                About the Group
              </Link>
              <Link
                href="/glossary"
                className="text-slate-500 hover:text-blue-400 transition-colors underline underline-offset-4 decoration-slate-700 hover:decoration-blue-400"
              >
                Trade Glossary
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}