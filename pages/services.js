// pages/services.js
// Tier 1 Institutional — Nevloh Group Capabilities Portfolio
import Head from 'next/head';
import Link from 'next/link';
import {
  Truck, ShieldCheck, Zap, Building2, ArrowRight, CheckCircle,
  MapPin, Globe, Scale, BarChart3, FileText, Fuel, Clock,
  BadgeCheck, Anchor
} from 'lucide-react';
import Breadcrumbs, { breadcrumbConfigs } from '../components/Breadcrumbs';

export default function Services() {
  const regionalServices = [
    {
      id: 'fleet-refuelling',
      title: 'Fleet Refuelling Logistics',
      desc: 'Systematic on-site refuelling for industrial and commercial fleets with automated fuel accounting.',
      features: ['Automated Fuel Accounting', '24/7 Priority Dispatch', 'GPS Verified Delivery'],
      href: '/services/fleet-refuelling',
      icon: Truck,
      theme: 'blue'
    },
    {
      id: 'generator-support',
      title: 'Critical Power Support',
      desc: 'Uninterrupted fuel supply chains for hospitals, data centers, and critical infrastructure.',
      features: ['Emergency Response Protocol', 'Remote Level Monitoring', '2-Hour Response Time'],
      href: '/services/generator-refuelling',
      icon: Zap,
      theme: 'emerald'
    },
    {
      id: 'bulk-supply',
      title: 'Industrial Bulk Supply',
      desc: 'High-volume petroleum distribution for manufacturing, mining, and marine operations.',
      features: ['Volume Pricing Tiers', 'Dedicated Account Manager', 'Scheduled Deliveries'],
      href: '/services/bulk-fuel',
      icon: Building2,
      theme: 'slate'
    },
    {
      id: 'petroleum-haulage',
      title: 'Certified Petroleum Haulage',
      desc: 'Licensed cross-island transportation for oil marketing companies and fuel distributors.',
      features: ['Safety Certified Fleet', 'B2B Logistics Partner', 'Full Regulatory Compliance'],
      href: '/services/haulage',
      icon: Scale,
      theme: 'blue'
    },
    {
      id: 'remote-delivery',
      title: 'Remote Site Delivery',
      desc: 'Direct fuel delivery to construction sites, farms, and off-grid locations across Jamaica.',
      features: ['All-Terrain Access', 'Flexible Scheduling', 'Agricultural Support'],
      href: '/services/on-site-fuel-delivery',
      icon: MapPin,
      theme: 'emerald'
    }
  ];

  const parishes = [
    'Kingston', 'St. Andrew', 'St. Catherine', 'Clarendon', 'Manchester',
    'St. Elizabeth', 'Westmoreland', 'Hanover', 'St. James', 'Trelawny',
    'St. Ann', 'St. Mary', 'Portland', 'St. Thomas'
  ];

  // Bilateral Schema for Services
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nevloh.com/services#service",
    "name": "Energy & Commodities Services",
    "provider": {
      "@type": "Organization",
      "name": "Nevloh Group",
      "url": "https://www.nevloh.com"
    },
    "description": "Bilateral energy services: Regional fuel logistics across Jamaica via Nevloh Limited and international commodities trade via Nevloh LLC (Wyoming, USA). UCP 600 compliant.",
    "areaServed": [
      { "@type": "Country", "name": "Jamaica" },
      { "@type": "Place", "name": "Caribbean Basin" },
      { "@type": "Place", "name": "International" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Nevloh Group Capabilities",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "International Commodities Trade",
            "description": "EN590 Diesel and Urea 46% procurement via UCP 600 LC-at-Sight"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fleet Refuelling Logistics",
            "url": "https://www.nevloh.com/services/fleet-refuelling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Critical Power Support",
            "url": "https://www.nevloh.com/services/generator-refuelling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Bulk Supply",
            "url": "https://www.nevloh.com/services/bulk-fuel"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Certified Petroleum Haulage",
            "url": "https://www.nevloh.com/services/haulage"
          }
        }
      ]
    }
  };

  return (
    <>
      <Head>
        <title>Capabilities & Energy Solutions | Nevloh Group</title>
        <meta
          name="description"
          content="Official capabilities of the Nevloh Group. Regional fuel logistics across Jamaica via Nevloh Limited and global commodities trade (EN590, Urea 46%) via Nevloh LLC. UCP 600 compliant."
        />
        <meta
          name="keywords"
          content="fuel delivery Jamaica, fleet refuelling, petroleum haulage, bulk fuel supply, EN590 diesel, Urea 46%, UCP 600, commodities trade, Nevloh Group, Nevloh Limited, Nevloh LLC"
        />
        <link rel="canonical" href="https://www.nevloh.com/services" />

        {/* Open Graph */}
        <meta property="og:title" content="Capabilities & Energy Solutions | Nevloh Group" />
        <meta property="og:description" content="Bilateral energy services: Jamaica fuel logistics + international commodities trade. UCP 600 compliant." />
        <meta property="og:image" content="https://www.nevloh.com/images/og-services.png" />
        <meta property="og:url" content="https://www.nevloh.com/services" />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
      </Head>

      <div className="bg-[#fcfdfe] min-h-screen font-sans selection:bg-blue-100">

        {/* ─── INSTITUTIONAL HERO ─── */}
        <section className="relative py-24 px-6 overflow-hidden bg-slate-950 text-white">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
            aria-hidden="true"
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumbs at top */}
            <div className="mb-12">
              <Breadcrumbs items={breadcrumbConfigs.services} />
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                  <BarChart3 size={12} />
                  <span>Integrated Capabilities</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6">
                  Energy Solutions. <br />
                  <span className="text-blue-500">Globally Structured.</span>
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed">
                  A comprehensive capabilities portfolio spanning regional fuel logistics
                  and structured international commodities procurement.
                </p>
              </div>

              {/* Capability Metrics */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/5 border border-white/10 px-6 py-5 rounded-2xl backdrop-blur-md">
                  <div className="text-3xl font-black text-white">99.8%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">Dispatch Precision</div>
                </div>
                <div className="bg-white/5 border border-white/10 px-6 py-5 rounded-2xl backdrop-blur-md">
                  <div className="text-3xl font-black text-white">14</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">Parishes Active</div>
                </div>
                <Link
                  href="/glossary#ucp-600"
                  className="bg-indigo-600/20 border border-indigo-500/30 px-6 py-5 rounded-2xl backdrop-blur-md hover:bg-indigo-600/30 transition-all"
                >
                  <div className="text-2xl font-black text-indigo-400 uppercase tracking-tight">UCP 600</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">Trade Compliance</div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PILLAR 1: GLOBAL COMMODITIES TRADE (Nevloh LLC) ─── */}
        <section className="py-24 px-6 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              {/* Sticky Sidebar */}
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-indigo-900/40">
                  <Globe size={28} />
                </div>
                <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">Nevloh LLC</h2>
                <p className="text-indigo-400 font-mono text-[10px] uppercase tracking-widest mb-6">
                  Global Trade Desk | Wyoming, USA
                </p>
                <p className="text-slate-400 leading-relaxed mb-8">
                  The international arm of the Nevloh Group, registered in Wyoming, USA. We support Caribbean
                  importers and industrial off-takers via structured energy procurement with bank-controlled settlement.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-300 uppercase tracking-widest">
                    <ShieldCheck size={18} className="text-indigo-400" />
                    Irrevocable LC Settlement
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-300 uppercase tracking-widest">
                    <FileText size={18} className="text-indigo-400" />
                    SGS / Intertek Verification
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-300 uppercase tracking-widest">
                    <BadgeCheck size={18} className="text-indigo-400" />
                    No Prepayment Structures
                  </div>
                </div>

                {/* Glossary Link */}
                <Link
                  href="/glossary#ucp-600"
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  View Trade Glossary <ArrowRight size={14} />
                </Link>
              </div>

              {/* Technical Specification Tables */}
              <div className="lg:col-span-8 space-y-8">
                {/* EN590 Diesel Table */}
                <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
                  <div className="p-8 border-b border-slate-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <Fuel size={24} className="text-indigo-400" />
                      <h3 className="text-xl font-bold text-white uppercase tracking-wider">EN590 Diesel (ULSD)</h3>
                    </div>
                    <span className="text-[10px] font-black bg-indigo-600 text-white px-3 py-1.5 rounded-full uppercase tracking-wider">
                      Technical Spec
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-300">
                      <thead>
                        <tr className="bg-slate-950/50 text-[10px] uppercase font-bold tracking-widest text-slate-500">
                          <th className="px-8 py-4">Parameter</th>
                          <th className="px-8 py-4">Standard</th>
                          <th className="px-8 py-4">Limits</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-700/50">
                        <tr className="hover:bg-slate-700/20 transition-colors">
                          <td className="px-8 py-4 font-semibold text-white">Sulfur Content</td>
                          <td className="px-8 py-4">ASTM D4294</td>
                          <td className="px-8 py-4 text-indigo-400 font-bold">Max 10 PPM</td>
                        </tr>
                        <tr className="hover:bg-slate-700/20 transition-colors">
                          <td className="px-8 py-4 font-semibold text-white">Cetane Index</td>
                          <td className="px-8 py-4">ISO 4264</td>
                          <td className="px-8 py-4">Min 46</td>
                        </tr>
                        <tr className="hover:bg-slate-700/20 transition-colors">
                          <td className="px-8 py-4 font-semibold text-white">Flash Point</td>
                          <td className="px-8 py-4">ASTM D93</td>
                          <td className="px-8 py-4">Min 55°C</td>
                        </tr>
                        <tr className="hover:bg-slate-700/20 transition-colors">
                          <td className="px-8 py-4 font-semibold text-white">Density @ 15°C</td>
                          <td className="px-8 py-4">ISO 3675</td>
                          <td className="px-8 py-4">820-845 kg/m³</td>
                        </tr>
                        <tr className="hover:bg-slate-700/20 transition-colors">
                          <td className="px-8 py-4 font-semibold text-white">Viscosity @ 40°C</td>
                          <td className="px-8 py-4">ASTM D445</td>
                          <td className="px-8 py-4">2.0-4.5 cSt</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Urea 46% Table */}
                <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
                  <div className="p-8 border-b border-slate-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <Anchor size={24} className="text-emerald-400" />
                      <h3 className="text-xl font-bold text-white uppercase tracking-wider">Urea 46% Nitrogen</h3>
                    </div>
                    <span className="text-[10px] font-black bg-emerald-600 text-white px-3 py-1.5 rounded-full uppercase tracking-wider">
                      Agricultural Spec
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-300">
                      <thead>
                        <tr className="bg-slate-950/50 text-[10px] uppercase font-bold tracking-widest text-slate-500">
                          <th className="px-8 py-4">Parameter</th>
                          <th className="px-8 py-4">Value</th>
                          <th className="px-8 py-4">Form</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-700/50">
                        <tr className="hover:bg-slate-700/20 transition-colors">
                          <td className="px-8 py-4 font-semibold text-white">Nitrogen Content</td>
                          <td className="px-8 py-4 text-emerald-400 font-bold">46.0% Minimum</td>
                          <td className="px-8 py-4">Prilled / Granular</td>
                        </tr>
                        <tr className="hover:bg-slate-700/20 transition-colors">
                          <td className="px-8 py-4 font-semibold text-white">Biuret Content</td>
                          <td className="px-8 py-4">1.0% Maximum</td>
                          <td className="px-8 py-4">Free Flowing</td>
                        </tr>
                        <tr className="hover:bg-slate-700/20 transition-colors">
                          <td className="px-8 py-4 font-semibold text-white">Moisture</td>
                          <td className="px-8 py-4">0.5% Maximum</td>
                          <td className="px-8 py-4">100% Treated</td>
                        </tr>
                        <tr className="hover:bg-slate-700/20 transition-colors">
                          <td className="px-8 py-4 font-semibold text-white">Granule Size</td>
                          <td className="px-8 py-4">2-4mm (90% min)</td>
                          <td className="px-8 py-4">Uniform Distribution</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Trade Inquiry CTA */}
                <Link
                  href="/contact/international"
                  className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-indigo-900/40 w-full justify-center"
                >
                  <Globe size={18} />
                  Submit Trade Inquiry
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PILLAR 2: REGIONAL LOGISTICS (Nevloh Limited) ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
                <Truck size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Nevloh Limited</h2>
                <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest">
                  Regional Operations Hub | Jamaica
                </p>
              </div>
            </div>
            <p className="text-slate-500 max-w-2xl mb-16 leading-relaxed">
              Comprehensive fuel logistics infrastructure serving all 14 Jamaican parishes with
              licensed petroleum haulage, fleet refuelling, and critical power support.
            </p>

            {/* Service Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regionalServices.map((s) => {
                const Icon = s.icon;
                const themeClasses = {
                  blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'hover:border-blue-500/30' },
                  emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'hover:border-emerald-500/30' },
                  slate: { bg: 'bg-slate-100', icon: 'text-slate-600', border: 'hover:border-slate-400/30' }
                };
                const theme = themeClasses[s.theme] || themeClasses.blue;

                return (
                  <article
                    key={s.id}
                    className={`group relative bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-blue-200/40 hover:-translate-y-2 transition-all duration-500 ${theme.border}`}
                  >
                    <div className={`w-14 h-14 ${theme.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                      <Icon size={28} className={theme.icon} />
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{s.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8">{s.desc}</p>
                    <ul className="space-y-3 mb-10">
                      {s.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-700 uppercase tracking-tight">
                          <CheckCircle size={16} className="text-emerald-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={s.href}
                      className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest group/link"
                    >
                      View Service
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </article>
                );
              })}
            </div>

            {/* Regional CTA */}
            <div className="mt-16 text-center">
              <Link
                href="/contact/jamaica"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-blue-900/20"
              >
                <Truck size={18} />
                Request Regional Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── ISLAND-WIDE INFRASTRUCTURE ─── */}
        <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
                Operational Coverage
              </h2>
              <p className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                Island-Wide Infrastructure
              </p>
              <p className="text-slate-500 max-w-xl mx-auto">
                24/7 priority fuel dispatch across all 14 parishes with certified petroleum haulage operations.
              </p>
            </div>

            {/* Parish Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {parishes.map((p, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-xl p-4 text-center group hover:border-blue-500 hover:shadow-lg hover:shadow-blue-100 transition-all"
                >
                  <span className="text-[10px] font-bold text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-widest">
                    {p}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Clock, label: '24/7 Dispatch', value: 'Always On' },
                { icon: Truck, label: 'GPS Fleet', value: 'Real-Time Tracking' },
                { icon: ShieldCheck, label: 'Licensed', value: 'Full Compliance' },
                { icon: BadgeCheck, label: 'Success Rate', value: '99.8%' }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 text-center shadow-lg shadow-slate-100">
                    <Icon size={24} className="text-blue-600 mx-auto mb-3" />
                    <div className="text-lg font-black text-slate-900">{item.value}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── CORPORATE CALL TO ACTION ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto bg-slate-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_50%)]" aria-hidden="true" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.15),transparent_50%)]" aria-hidden="true" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                <Zap size={12} />
                <span>Finalize Your Supply Chain</span>
              </div>

              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                Accelerate Your Energy Operations.
              </h3>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                Request an operational quote for Jamaica logistics or initiate a compliance review
                with our international trade desk.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact/jamaica"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2"
                >
                  <Truck size={18} />
                  Regional Operations
                </Link>
                <Link
                  href="/contact/international"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  <Globe size={18} />
                  International Desk
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}