// pages/services/fleet-refuelling.js
// Tier 1 Institutional — Fleet Logistics Performance Partner
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Truck, Clock, Shield, CheckCircle, ArrowRight, MapPin,
  BarChart3, Timer, Zap, AlertCircle, Globe
} from 'lucide-react';
import Breadcrumbs, { breadcrumbConfigs } from '../../components/Breadcrumbs';

const FleetRefuelling = () => {
  // Enhanced Service Schema
  const fleetSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nevloh.com/services/fleet-refuelling#service",
    "name": "On-Site Fleet Refuelling Jamaica",
    "serviceType": "Mobile Fleet Refuelling",
    "provider": {
      "@type": "Organization",
      "name": "Nevloh Group",
      "url": "https://www.nevloh.com"
    },
    "description": "24/7 mobile fleet fueling for logistics, construction, and tour operators across all 14 parishes. Eliminate downtime with on-site diesel delivery.",
    "areaServed": {
      "@type": "Country",
      "name": "Jamaica"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Fleet Fueling Programs",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NightFill™ Program" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Job-Site Direct" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Response" } }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does fleet refuelling work in Jamaica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nevloh Limited provides on-site fleet refuelling where our certified technicians come directly to your fleet location. We refuel your vehicles overnight while drivers rest, eliminating trips to gas stations and recovering 80% of lost driver time."
        }
      },
      {
        "@type": "Question",
        "name": "What is the NightFill™ Program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NightFill™ is our signature overnight refuelling service. We refuel your fleet while vehicles are stationary, ensuring 100% mission-ready operations every morning with zero driver downtime."
        }
      }
    ]
  };

  const servicePrograms = [
    {
      title: 'NightFill™ Program',
      icon: Clock,
      desc: 'Our most popular service. We refuel your fleet overnight while vehicles are stationary, ensuring 100% mission-ready mornings.',
      accent: 'bg-indigo-600',
      features: ['Zero driver downtime', 'Automated scheduling', 'Full tank guarantee']
    },
    {
      title: 'Job-Site Direct',
      icon: MapPin,
      desc: 'Direct fueling for heavy equipment and yellow-iron on construction sites. We come to the mud so you don\'t have to.',
      accent: 'bg-orange-500',
      features: ['All-terrain delivery', 'Equipment tracking', 'Site fuel audit']
    },
    {
      title: 'Emergency Response',
      icon: Zap,
      desc: 'Critical fuel support for hospitals, data centers, and cold-chain logistics during power outages or hurricanes.',
      accent: 'bg-red-500',
      features: ['2-hour response', '24/7 dispatch', 'Priority protocols']
    }
  ];

  const deadMileBenefits = [
    { title: 'Eliminate Detours', desc: 'No more off-route mileage to find stations.' },
    { title: 'Total Audit Trail', desc: 'Digitally tracked gallons per unit, no paper receipts.' },
    { title: 'Labor Recovery', desc: 'Drivers start their shift with 100% full tanks.' },
    { title: 'ULSD Purity', desc: 'Industrial grade diesel, filtered at point of delivery.' }
  ];

  const fleetStatusItems = [
    { truck: 'Truck #402', status: 'Refuelled', time: '03:15 AM', color: 'text-emerald-400' },
    { truck: 'Unit #109', status: 'In Transit', time: 'ETA 10m', color: 'text-blue-400' },
    { truck: 'Generator A', status: 'Scheduled', time: '05:00 AM', color: 'text-slate-400' }
  ];

  return (
    <>
      <Head>
        <title>On-Site Fleet Refuelling & Mobile Fueling Jamaica | Nevloh Limited</title>
        <meta
          name="description"
          content="Eliminate downtime with Nevloh's on-site fleet refuelling. 24/7 mobile diesel delivery for logistics and construction fleets across Jamaica. Save 80% on driver downtime."
        />
        <meta
          name="keywords"
          content="fleet refuelling Jamaica, on-site fuel delivery, mobile refuelling, NightFill, commercial fleet fuel, 24/7 emergency fuel, fleet fuel management, logistics fuel Jamaica"
        />
        <link rel="canonical" href="https://www.nevloh.com/services/fleet-refuelling" />

        {/* Open Graph */}
        <meta property="og:title" content="On-Site Fleet Refuelling | Zero Downtime | Nevloh Limited" />
        <meta property="og:description" content="24/7 mobile fleet fueling. We refuel while your drivers sleep. Save 80% on driver downtime." />
        <meta property="og:image" content="https://www.nevloh.com/images/og-fleet-refuelling.png" />
        <meta property="og:url" content="https://www.nevloh.com/services/fleet-refuelling" />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(fleetSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="min-h-screen bg-[#fcfdfe] font-sans selection:bg-blue-100">

        {/* ─── TIER 1 HERO: Operational Excellence ─── */}
        <section className="relative pt-24 pb-32 bg-slate-900 overflow-hidden">
          {/* Background Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
            aria-hidden="true"
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Breadcrumbs */}
            <div className="mb-12">
              <Breadcrumbs items={breadcrumbConfigs.fleetRefuelling} />
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                  <Zap size={14} className="fill-current" />
                  <span>Zero-Downtime Logistics</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
                  Never Visit a <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Gas Station Again
                  </span>
                </h1>

                <p className="text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                  We refuel your fleet while your drivers sleep. Nevloh's mobile fueling units
                  deliver premium ULSD directly to your yard, job site, or depot 24/7.
                </p>

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Link
                    href="/contact/jamaica"
                    className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center gap-2 group"
                  >
                    Start Fleet Audit
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:+18764495172"
                    className="px-10 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold transition-all border border-slate-700 flex items-center justify-center gap-2"
                  >
                    <AlertCircle size={20} className="text-red-400" />
                    Emergency Response
                  </a>
                </div>
              </div>

              {/* Fleet Commander UI Mockup */}
              <div className="relative">
                <div className="bg-slate-800 rounded-[2.5rem] border border-slate-700 p-6 shadow-2xl">
                  {/* Window Controls */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono tracking-wider">LIVE_FLEET_STATUS_v2.1</div>
                  </div>

                  {/* Fleet Status Items */}
                  <div className="space-y-4">
                    {fleetStatusItems.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-slate-800 rounded-lg">
                            <Truck size={18} className="text-slate-400" />
                          </div>
                          <span className="text-white font-bold">{item.truck}</span>
                        </div>
                        <div className="text-right">
                          <div className={`text-xs font-bold ${item.color}`}>{item.status}</div>
                          <div className="text-[10px] text-slate-500">{item.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Dashboard Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-700/50 flex items-center justify-between">
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest">Next scheduled fill</div>
                    <div className="text-sm font-bold text-emerald-400">05:00 AM</div>
                  </div>
                </div>

                {/* Floating Stat Badge */}
                <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white p-6 rounded-3xl shadow-xl hidden md:block">
                  <div className="text-4xl font-black">80%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Time Recovered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── THE DEAD MILE ROI ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
                  Hidden Costs
                </h2>
                <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                  Stop Paying for <br />
                  <span className="text-blue-600">The Dead Mile</span>
                </p>
                <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                  When a driver takes a 15-ton truck to a retail gas station, you lose more than just fuel costs.
                  You lose driver hours, increase wear and tear, and risk safety incidents in tight retail spaces.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {deadMileBenefits.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <CheckCircle className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <div className="font-bold text-slate-900 mb-1">{item.title}</div>
                        <div className="text-sm text-slate-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cost Comparison Visual */}
              <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 shadow-lg">
                <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  <BarChart3 className="text-blue-600" size={24} />
                  The Cost of Retail Fueling
                </h3>
                <div className="space-y-8">
                  {/* Retail Station Time */}
                  <div>
                    <div className="flex justify-between text-sm font-bold mb-3">
                      <span className="uppercase tracking-wider text-slate-600">Time at Retail Station</span>
                      <span className="text-red-500">45-60 Mins</span>
                    </div>
                    <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full" />
                    </div>
                  </div>

                  {/* Nevloh Mobile Time */}
                  <div>
                    <div className="flex justify-between text-sm font-bold mb-3">
                      <span className="uppercase tracking-wider text-slate-600">Time with Nevloh Mobile</span>
                      <span className="text-emerald-500">0 Mins (Drivers Resting)</span>
                    </div>
                    <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
                      <div className="w-[5%] h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full" />
                    </div>
                  </div>

                  {/* Savings Summary */}
                  <div className="pt-6 border-t border-slate-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Monthly Labor Recovery</div>
                        <div className="text-2xl font-black text-slate-900">$250,000+ JMD</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-500 mb-1">Per 10-Vehicle Fleet</div>
                        <div className="text-emerald-600 font-bold">Avg. Savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SERVICE PROGRAMS ─── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
                Fuel Programs
              </h2>
              <p className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                Precision Programs
              </p>
              <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {servicePrograms.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="group bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className={`w-14 h-14 ${item.accent} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed mb-6">{item.desc}</p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {item.features.map((feat, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                          <CheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact/jamaica"
                      className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all text-sm uppercase tracking-wider"
                    >
                      Configure Program
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── INDUSTRIES SERVED ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
                Fleet Coverage
              </h2>
              <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Industries We Serve
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Transportation & Logistics',
                'Construction Companies',
                'Delivery Services',
                'Government Fleets',
                'Emergency Services',
                'Tour & Travel',
                'Agricultural Operations',
                'Mining & Heavy Industry'
              ].map((industry, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-2xl p-5 text-center border border-slate-100 hover:border-blue-500 hover:shadow-lg transition-all"
                >
                  <span className="text-sm font-bold text-slate-700">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HIGH AUTHORITY CTA ─── */}
        <section className="py-24 px-6 bg-slate-950">
          <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-600/10 rounded-full blur-[80px]" aria-hidden="true" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                <Timer size={12} />
                <span>Free Assessment</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
                Ready for a Fleet Audit?
              </h2>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Join the 100+ fleets in Jamaica saving an average of $250,000 JMD
                per month in hidden labor costs.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                <Link
                  href="/contact/jamaica"
                  className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-sm uppercase tracking-wider hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl"
                >
                  <Timer size={20} />
                  Request Free Site Audit
                </Link>
                <a
                  href="tel:+18764495172"
                  className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  Schedule a Trial Fill
                </a>
              </div>

              {/* Bilateral Link */}
              <Link
                href="/contact/international"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 text-xs font-bold uppercase tracking-widest transition-colors"
              >
                <Globe size={14} />
                International Fleet Operations →
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default FleetRefuelling;