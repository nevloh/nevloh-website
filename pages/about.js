// pages/about.js
// Tier 1 Institutional — Nevloh Group Governance & Vision
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  Zap, Fuel, Award, Users, TrendingUp, Globe,
  MapPin, Landmark, ShieldCheck, Truck, ArrowRight,
  Building2
} from 'lucide-react';

const AboutPage = () => {
  const achievements = [
    { number: '50,000+', label: 'Gallons ULSD Delivered', icon: Fuel },
    { number: '14', label: 'Jamaican Parishes', icon: MapPin },
    { number: '99.8%', label: 'Delivery Success Rate', icon: Award },
    { number: 'UCP 600', label: 'Trade Compliance', icon: Landmark }
  ];

  const roadmapItems = [
    {
      year: '2022-2024',
      title: 'Jamaica Footprint',
      desc: 'Established regional dominance across 14 parishes with 99.8% logistics success rate and 24/7 emergency operations.',
      icon: MapPin
    },
    {
      year: '2025-2026',
      title: 'Bilateral Expansion',
      desc: 'Commissioning of Nevloh LLC Trade Desk (Wyoming) and launch of structured commodities trading under UCP 600.',
      icon: Globe
    },
    {
      year: '2027-2030',
      title: 'Regional Synergy',
      desc: 'Scaling integrated energy solutions and renewable installations to neighboring Caribbean emerging markets.',
      icon: TrendingUp
    }
  ];

  // Schema markup for About page
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Nevloh Group",
      "description": "Bilateral energy group specializing in Jamaica fuel logistics (Nevloh Limited) and international commodities trade (Nevloh LLC, Wyoming USA). UCP 600 / ISBP 745 compliant.",
      "url": "https://www.nevloh.com",
      "logo": "https://www.nevloh.com/images/logo.png",
      "foundingDate": "2022",
      "founder": {
        "@type": "Person",
        "name": "Sashell Cooper-Nevins",
        "jobTitle": "Managing Director & Founder"
      },
      "address": [
        {
          "@type": "PostalAddress",
          "name": "Nevloh LLC — Trade Desk",
          "addressLocality": "Casper",
          "addressRegion": "Wyoming",
          "addressCountry": "USA"
        },
        {
          "@type": "PostalAddress",
          "name": "Nevloh Limited — Regional Operations",
          "addressLocality": "Spanish Town",
          "addressRegion": "Saint Catherine Parish",
          "addressCountry": "Jamaica"
        }
      ],
      "areaServed": ["Jamaica", "Caribbean Basin", "International"],
      "knowsAbout": [
        "Petroleum Logistics",
        "Commodities Trading",
        "UCP 600",
        "EN590 Diesel",
        "Urea 46%"
      ]
    }
  };

  return (
    <>
      <Head>
        <title>Governance & Vision | Nevloh Group | Energy Infrastructure</title>
        <meta
          name="description"
          content="Discover the Nevloh Group. From Jamaica's logistics leader, Nevloh Limited, to the Wyoming-based trade desk, Nevloh LLC. Led by Sashell Cooper-Nevins. UCP 600 compliant."
        />
        <meta
          name="keywords"
          content="Nevloh Group, Nevloh Limited, Nevloh LLC, Sashell Cooper-Nevins, Jamaica fuel delivery, Wyoming trade desk, UCP 600, commodities trading, energy infrastructure, Caribbean energy"
        />
        <link rel="canonical" href="https://www.nevloh.com/about" />

        {/* Open Graph */}
        <meta property="og:title" content="Governance & Vision | Nevloh Group" />
        <meta property="og:description" content="Bilateral energy group: Jamaica logistics (Nevloh Limited) + international commodities trade (Nevloh LLC, Wyoming). UCP 600 compliant." />
        <meta property="og:image" content="https://www.nevloh.com/images/og-about.png" />
        <meta property="og:url" content="https://www.nevloh.com/about" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
        />
      </Head>

      <div className="bg-[#fcfdfe] min-h-screen font-sans selection:bg-blue-100">

        {/* ─── SECTION 1: INSTITUTIONAL HERO ─── */}
        <section className="relative py-24 px-6 overflow-hidden bg-slate-950 text-white">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
            aria-hidden="true"
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-3/5">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                  <ShieldCheck size={12} />
                  <span>Strategic Vision & Governance</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8">
                  Redefining <br />
                  <span className="text-blue-500">Energy Reliability.</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
                  Nevloh Group is a bilateral energy entity bridging the gap between global commodities
                  procurement and regional logistics excellence across the Caribbean Basin.
                </p>
              </div>

              {/* Achievement Stats Grid */}
              <div className="lg:w-2/5">
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={i}
                        className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] hover:border-blue-500/30 transition-all"
                      >
                        <Icon size={20} className="text-blue-500 mb-4" />
                        <div className="text-2xl font-black text-white">{stat.number}</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 2: BILATERAL INFRASTRUCTURE ─── */}
        <section className="py-24 px-6 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
                Structural Framework
              </h2>
              <p className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                The Nevloh Group Ecosystem
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Nevloh Limited Card */}
              <div className="group p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-blue-500/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
                    <Truck size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900">Nevloh Limited</h3>
                    <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest">
                      Regional Operational Hub | Jamaica
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Founded in 2022 to revolutionize fuel delivery, Nevloh Limited has scaled to serve all 14 Jamaican parishes
                  with professional refuelling, industrial bulk supply, and licensed petroleum haulage.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-500 uppercase">
                    Licensed Haulage
                  </span>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-500 uppercase">
                    Island-wide
                  </span>
                  <span className="px-3 py-1 bg-white border border-blue-200 rounded-full text-[10px] font-bold text-blue-600 uppercase">
                    24/7 Dispatch
                  </span>
                </div>
              </div>

              {/* Nevloh LLC Card */}
              <div className="group p-10 bg-slate-900 rounded-[2.5rem] border border-slate-800 hover:border-indigo-500/30 transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-900/20">
                    <Globe size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-white">Nevloh LLC</h3>
                    <p className="text-indigo-400 font-mono text-[10px] uppercase tracking-widest">
                      Global Trade Desk | Wyoming, USA
                    </p>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Supporting cross-border supply chains via structured, bank-controlled mechanisms. Specialized in EN590 Diesel
                  and Urea 46% Nitrogen Fertilizer procurement under UCP 600 standards.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/glossary#ucp-600"
                    className="px-3 py-1 bg-slate-800 border border-indigo-500/30 rounded-full text-[10px] font-bold text-indigo-400 uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all"
                  >
                    UCP 600
                  </Link>
                  <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    LC Settlement
                  </span>
                  <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    SGS Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: LEADERSHIP & GOVERNANCE ─── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* MD Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 opacity-10" aria-hidden="true" />
                <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-gradient-to-br from-blue-100 to-slate-100">
                  <Image
                    src="/images/sashell-cooper-nevins.png"
                    alt="Sashell Cooper-Nevins - Managing Director of Nevloh Group"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 max-w-[260px]">
                  <h4 className="font-black text-slate-900 leading-tight text-lg">Sashell Cooper-Nevins</h4>
                  <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest mt-1">
                    Managing Director & Founder
                  </p>
                </div>
              </div>

              {/* MD Message */}
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-6">
                  Strategic Stewardship
                </h2>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
                  "Building the ecosystem for Jamaica's energy transformation."
                </h3>
                <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                  <p>
                    When I founded Nevloh Limited in 2022, the objective was clear: institutionalize the fuel delivery sector through
                    safety, transparency, and operational rigor.
                  </p>
                  <p>
                    Today, as we expand into renewable energy installations and international commodities trading, our governance
                    remains rooted in financial security. We aren't just moving energy; we are securing the supply chains that
                    power the Caribbean's economic future.
                  </p>
                </div>
                <div className="mt-10 flex gap-12">
                  <div>
                    <div className="text-4xl font-black text-slate-900">2022</div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Group Founding</p>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900">14</div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Parishes Active</p>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-blue-600">2</div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Legal Entities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: STRATEGIC SOLUTIONS (Bento Grid) ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
                Core Competencies
              </h2>
              <p className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                Technical Capability
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* ULSD Infrastructure - Large Card */}
              <div className="lg:col-span-2 p-10 bg-blue-600 rounded-[2.5rem] text-white flex flex-col justify-between shadow-xl shadow-blue-900/20">
                <div>
                  <Fuel size={40} className="mb-6 opacity-40" />
                  <h4 className="text-3xl font-bold mb-4">ULSD Infrastructure</h4>
                  <p className="text-blue-100 max-w-md text-lg leading-relaxed">
                    Leading the market in 90% cleaner emissions fuel delivery with a 99.8% precision rate across all Jamaican parishes.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {['Modern GPS Fleet', '24/7 Ops Desk', 'Licensed Haulage'].map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase">{t}</span>
                  ))}
                </div>
              </div>

              {/* Renewable Integration */}
              <div className="p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 flex flex-col justify-between">
                <div>
                  <Zap size={40} className="text-emerald-600 mb-6" />
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">Renewable Integration</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Strategic pivot into solar energy, battery storage, and smart grid consulting for the 2025-2030 roadmap.
                  </p>
                </div>
                <Link
                  href="/sustainability"
                  className="mt-8 flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest group"
                >
                  Sustainability Desk
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Trade Finance */}
              <div className="p-10 bg-slate-900 rounded-[2.5rem] border border-slate-800 flex flex-col justify-between text-white">
                <div>
                  <Building2 size={40} className="text-indigo-400 mb-6" />
                  <h4 className="text-2xl font-bold mb-4">Trade Finance</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Disciplined execution is our standard. No prepayment schemes — bank-to-bank settlement via irrevocable LC only.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                  <Link
                    href="/glossary#ucp-600"
                    className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase hover:text-indigo-400 transition-colors"
                  >
                    UCP 600 Standards
                  </Link>
                  <ShieldCheck size={20} className="text-indigo-400" />
                </div>
              </div>

              {/* Community & Local Development */}
              <div className="lg:col-span-2 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Users size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Community & Local Development</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Supporting Jamaican industrial growth through reliable energy access, direct job creation, and sustainable haulage initiatives across all 14 parishes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 5: GROWTH TRAJECTORY ─── */}
        <section className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-600/10 to-transparent" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full" aria-hidden="true" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-4">
                Corporate Roadmap
              </h2>
              <h3 className="text-3xl md:text-5xl font-black tracking-tight">Strategic Growth Pillars</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {roadmapItems.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div key={i} className="relative group">
                    <div className="text-7xl font-black text-white/5 absolute -top-10 -left-4 group-hover:text-blue-600/10 transition-colors select-none">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <Icon size={24} className="text-blue-500 mb-4" />
                    <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">{m.year}</p>
                    <h4 className="text-xl font-bold mb-4">{m.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── SECTION 6: INSTITUTIONAL CTA ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-100 rounded-[3rem] p-12 md:p-20 text-center shadow-xl shadow-slate-200/50">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Partner with Nevloh.</h3>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
              Whether you require localized logistics for your fleet or structured international settlement,
              we deliver with institutional precision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact/jamaica"
                className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-2"
              >
                <Truck size={18} />
                Request Local Ops
              </Link>
              <Link
                href="/contact/international"
                className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
              >
                <Globe size={18} />
                Trade Compliance Desk
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AboutPage;