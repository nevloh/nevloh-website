// pages/sustainability.js
// Tier 1 Institutional — Nevloh Group ESG & Sustainability
import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {
  Leaf, Recycle, Sun, Wind, Battery, Globe, TreePine, Droplets,
  Shield, TrendingUp, Users, Target, CheckCircle, ArrowRight,
  Zap, Building2, Truck, FileText, ExternalLink, ShieldCheck
} from 'lucide-react';

// Enhanced Color Mapping for dynamic UI
const colorMap = {
  emerald: {
    icon: 'text-emerald-600',
    bg: 'bg-emerald-100',
    border: 'border-emerald-500/30',
    glow: 'shadow-emerald-500/20'
  },
  blue: {
    icon: 'text-blue-600',
    bg: 'bg-blue-100',
    border: 'border-blue-500/30',
    glow: 'shadow-blue-500/20'
  },
  purple: {
    icon: 'text-purple-600',
    bg: 'bg-purple-100',
    border: 'border-purple-500/30',
    glow: 'shadow-purple-500/20'
  },
  orange: {
    icon: 'text-orange-600',
    bg: 'bg-orange-100',
    border: 'border-orange-500/30',
    glow: 'shadow-orange-500/20'
  }
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Sustainability & ESG | Nevloh Group",
  "description": "Nevloh Group's 2030 roadmap for carbon neutrality and clean energy leadership across Jamaica and the Caribbean Basin.",
  "url": "https://www.nevloh.com/sustainability",
  "publisher": {
    "@type": "Organization",
    "name": "Nevloh Group",
    "logo": "https://www.nevloh.com/images/logo.png"
  },
  "mainEntity": {
    "@type": "Organization",
    "name": "Nevloh Group",
    "description": "Bilateral energy group committed to sustainable operations",
    "sustainabilityInitiative": [
      { "@type": "Thing", "name": "Ultra Low Sulphur Diesel", "description": "90% reduction in sulfur emissions" },
      { "@type": "Thing", "name": "Carbon Neutrality Goal", "description": "Commitment to achieve carbon neutrality by 2030" },
      { "@type": "Thing", "name": "Renewable Energy Solutions", "description": "Solar energy installation and battery storage services" }
    ]
  }
};

const SustainabilityPage = () => {
  const [activeCommitment, setActiveCommitment] = useState(0);

  const sustainabilityPillars = [
    {
      icon: Leaf,
      title: "Environmental Protection",
      description: "Aggressive emission reduction and ecosystem preservation in Jamaica.",
      color: "emerald",
      initiatives: [
        "ULSD Implementation (90% sulfur reduction)",
        "Zero-spill protocol for all logistics",
        "Carbon footprint tracking per delivery",
        "Reforestation partnership in St. Catherine"
      ]
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Empowering local talent and fostering clean energy education.",
      color: "blue",
      initiatives: [
        "Nevloh Academy: Clean Energy Training",
        "85% Local hire commitment",
        "STEM scholarships for energy research",
        "Community micro-grid support"
      ]
    },
    {
      icon: Zap,
      title: "Clean Energy Future",
      description: "Transitioning infrastructure from fossil fuels to renewables.",
      color: "purple",
      initiatives: [
        "Grid-tied commercial solar arrays",
        "Lithium-ion storage for peak shaving",
        "EV Fleet transition (Phase 1 2026)",
        "Smart-metering for efficiency"
      ]
    },
    {
      icon: Globe,
      title: "Governance & Ethics",
      description: "Transparency in reporting and ethical supply chain sourcing.",
      color: "orange",
      initiatives: [
        "Annual Sustainability Impact Report",
        "Supplier code of conduct enforcement",
        "ISO 14001 Environmental Certification",
        "Public ESG performance dashboard"
      ]
    }
  ];

  const roadmapItems = [
    {
      year: '2024-25',
      title: 'The Hybrid Shift',
      desc: 'Mainstreaming ULSD across all operations and launching Solar-as-a-Service model for commercial clients.',
      icon: Sun
    },
    {
      year: '2026-28',
      title: 'Electrification',
      desc: 'Deploying Jamaica\'s first heavy-duty EV charging corridor and transitioning fleet vehicles.',
      icon: Battery
    },
    {
      year: '2029-30',
      title: 'Net Zero',
      desc: 'Full operational carbon neutrality and 100% sustainable sourcing across all supply chains.',
      icon: Globe
    }
  ];

  const sustainablePractices = [
    { icon: Droplets, title: 'Water Conservation', description: 'Advanced water recycling systems at our facilities' },
    { icon: Recycle, title: 'Waste Reduction', description: 'Zero-waste-to-landfill policy with comprehensive recycling' },
    { icon: Truck, title: 'Efficient Logistics', description: 'Route optimization to reduce fuel consumption and emissions' },
    { icon: Building2, title: 'Green Facilities', description: 'Solar-powered offices and energy-efficient operations' }
  ];

  const activePillar = sustainabilityPillars[activeCommitment];
  const ActiveIcon = activePillar.icon;

  return (
    <>
      <Head>
        <title>Sustainability & ESG | Nevloh Group | Clean Energy Jamaica</title>
        <meta
          name="description"
          content="Nevloh Group's commitment to a carbon-neutral Jamaica by 2030 through ULSD, solar energy, and community-led green initiatives. View our ESG roadmap."
        />
        <meta
          name="keywords"
          content="sustainability Jamaica, clean energy, ULSD diesel, solar energy, carbon neutral, environmental protection, renewable energy Jamaica, ESG, Nevloh Group"
        />
        <link rel="canonical" href="https://www.nevloh.com/sustainability" />

        {/* Open Graph */}
        <meta property="og:title" content="Sustainability & ESG | Nevloh Group" />
        <meta property="og:description" content="Our 2030 roadmap for carbon neutrality and clean energy leadership in Jamaica." />
        <meta property="og:image" content="https://www.nevloh.com/images/og-sustainability.png" />
        <meta property="og:url" content="https://www.nevloh.com/sustainability" />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-[#fcfdfe] text-slate-900 font-sans selection:bg-emerald-200">

        {/* ─── TIER 1 HERO: Visual Depth with Glassmorphism ─── */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white">
          {/* Background Blurs */}
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-100 rounded-full blur-[150px] opacity-50 pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[150px] opacity-50 pointer-events-none" aria-hidden="true" />

          <div className="relative max-w-7xl mx-auto text-center z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              <Leaf size={12} />
              <span>Our 2030 Vision</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-8">
              Fuelling the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                Green Revolution
              </span>
            </h1>

            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-16">
              We aren't just delivering fuel; we're architecting Jamaica's transition
              to a high-efficiency, low-carbon future through engineering and accountability.
            </p>

            {/* Quick Impact Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-y border-slate-100 py-10">
              {[
                { label: 'Sulphur Reduction', value: '90%', icon: Shield },
                { label: 'Carbon Neutral By', value: '2030', icon: Target },
                { label: 'Renewable Goal', value: '15MW', icon: Sun }
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                      <Icon size={20} className="text-emerald-600" />
                    </div>
                    <div className="text-left">
                      <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── INTERACTIVE SUSTAINABILITY PILLARS ─── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-4">
                ESG Framework
              </h2>
              <p className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                Pillars of Responsibility
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Pillar Selector */}
              <div className="w-full lg:w-1/2 space-y-4">
                {sustainabilityPillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  const isActive = activeCommitment === index;
                  const colors = colorMap[pillar.color];

                  return (
                    <button
                      key={index}
                      onClick={() => setActiveCommitment(index)}
                      className={`w-full text-left p-6 rounded-[2rem] transition-all duration-500 border-2 ${
                        isActive
                          ? `${colors.border} bg-white shadow-xl ${colors.glow} translate-x-4`
                          : 'border-transparent bg-white/50 hover:bg-white hover:shadow-lg'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-2xl ${colors.bg}`}>
                          <Icon size={24} className={colors.icon} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-slate-900">{pillar.title}</h3>
                          <p className="text-sm text-slate-500">{pillar.description}</p>
                        </div>
                        <ArrowRight
                          size={20}
                          className={`text-slate-300 transition-transform ${isActive ? 'rotate-90 text-slate-600' : ''}`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Pillar Detail Card */}
              <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
                <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-slate-100 relative overflow-hidden">
                  {/* Background Accent */}
                  <div className={`absolute top-0 right-0 w-40 h-40 ${colorMap[activePillar.color].bg} opacity-30 rounded-bl-full`} aria-hidden="true" />

                  <div className="relative">
                    <ActiveIcon size={48} className={`${colorMap[activePillar.color].icon} mb-6`} />
                    <h3 className="text-3xl font-black text-slate-900 mb-6">{activePillar.title}</h3>
                    <p className="text-slate-500 mb-8 leading-relaxed">{activePillar.description}</p>

                    <div className="space-y-4">
                      {activePillar.initiatives.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100"
                        >
                          <CheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0" size={18} />
                          <span className="font-medium text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── STRATEGY ROADMAP: Horizontal Layout ─── */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-4">
                Corporate Roadmap
              </h2>
              <p className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                Strategy Roadmap
              </p>
              <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Decorative Connection Line */}
              <div className="hidden md:block absolute top-[56px] left-[10%] w-[80%] h-1 bg-gradient-to-r from-emerald-200 via-blue-200 to-purple-200 rounded-full" aria-hidden="true" />

              {roadmapItems.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="relative group text-center md:text-left">
                    {/* Circle Icon */}
                    <div className="w-14 h-14 bg-white border-4 border-emerald-500 rounded-full flex items-center justify-center mb-8 relative z-10 mx-auto md:mx-0 group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Icon size={24} className="text-emerald-600 group-hover:text-white transition-colors" />
                    </div>

                    {/* Step Number Watermark */}
                    <div className="text-7xl font-black text-slate-100 absolute -top-6 -left-4 select-none group-hover:text-emerald-100 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    <div className="relative">
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">{step.year}</p>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── SUSTAINABLE PRACTICES ─── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-4">
                Operational Excellence
              </h2>
              <p className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                Sustainable Practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sustainablePractices.map((practice, index) => {
                const Icon = practice.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-[2rem] p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                      <Icon size={32} className="text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{practice.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{practice.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── ACCOUNTABILITY & TRANSPARENCY SECTION ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto bg-slate-950 rounded-[3rem] p-12 md:p-16 relative overflow-hidden shadow-2xl">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.15),transparent_50%)]" aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.15),transparent_50%)]" aria-hidden="true" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              {/* Icon Container */}
              <div className="p-8 bg-white/10 rounded-[2rem] backdrop-blur-md border border-white/20">
                <FileText size={60} className="text-emerald-400" />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Accountability is Our Core
                </h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  We believe in radical transparency. Download our latest Environmental
                  Impact Report to see how we track carbon offsets, community investments,
                  and progress toward our 2030 goals.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <button className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all transform hover:-translate-y-1 shadow-lg shadow-emerald-900/30">
                    Download 2024 Report
                    <ExternalLink size={18} />
                  </button>
                  <Link
                    href="/contact/jamaica"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all"
                  >
                    Partner with Us
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── IMPACT METRICS BANNER ─── */}
        <section className="py-20 px-6 bg-gradient-to-r from-emerald-600 to-blue-600">
          <div className="max-w-6xl mx-auto">
            <div className="text-center text-white mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Our Environmental Impact</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Measurable progress toward our sustainability goals and positive environmental impact.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: TrendingUp, value: '90%', label: 'Emission Reduction with ULSD' },
                { icon: TreePine, value: '50+', label: 'Trees Planted This Year' },
                { icon: Recycle, value: '75%', label: 'Waste Recycling Rate' },
                { icon: Sun, value: '2025', label: 'Solar Energy Launch' }
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="text-center">
                    <Icon size={32} className="mx-auto mb-4 opacity-80" />
                    <div className="text-4xl font-black mb-2">{stat.value}</div>
                    <p className="text-sm opacity-80">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── TIER 1 CTA ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-100 rounded-[3rem] p-12 md:p-20 text-center shadow-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              <ShieldCheck size={12} />
              <span>Join the Movement</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Ready for a Cleaner Operation?
            </h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
              Join the growing list of Jamaican businesses switching to Nevloh's
              sustainable energy solutions. Lower costs, lower emissions, higher reliability.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact/jamaica"
                className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-emerald-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Leaf size={18} />
                Request a Green Audit
              </Link>
              <Link
                href="/contact/international"
                className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
              >
                <Globe size={18} />
                International ESG Desk
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400
  };
}

export default SustainabilityPage;