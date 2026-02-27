// pages/services/bulk-fuel.js
// Tier 1 Institutional — Industrial Bulk Supply Portal
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Building2, TrendingDown, Shield, CheckCircle, ArrowRight,
  BarChart3, Truck, Calculator, Clock, Factory, HardHat,
  Droplets, Zap, FileSpreadsheet, Globe
} from 'lucide-react';
import Breadcrumbs, { breadcrumbConfigs } from '../../components/Breadcrumbs';

const BulkFuelSupply = () => {
  // Enhanced Service Schema
  const bulkFuelSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nevloh.com/services/bulk-fuel#service",
    "name": "Industrial Bulk Fuel Supply Jamaica",
    "serviceType": "Bulk Fuel Supply",
    "provider": {
      "@type": "Organization",
      "name": "Nevloh Group",
      "url": "https://www.nevloh.com"
    },
    "description": "Large volume fuel supply for industrial operations across Jamaica. Tiered volume discounts up to 15% for ULSD diesel. Minimum 500 gallons.",
    "areaServed": {
      "@type": "Country",
      "name": "Jamaica"
    },
    "offers": {
      "@type": "AggregateOffer",
      "description": "Tiered volume discounts: 5% (500-999 gal), 10% (1,000-4,999 gal), 15%+ (5,000+ gal)",
      "offerCount": "3"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the minimum order for bulk fuel in Jamaica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The minimum order for bulk fuel delivery from Nevloh Limited is 500 gallons. Orders of 500-999 gallons qualify for a 5% discount, with larger discounts available for higher volumes."
        }
      },
      {
        "@type": "Question",
        "name": "How much can I save with bulk fuel pricing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nevloh Limited offers volume-based discounts up to 15% off standard pricing. Standard Bulk (500-999 gallons) saves 5%, High Volume (1,000-4,999 gallons) saves 10%, and Industrial Scale (5,000+ gallons) saves 15% or more."
        }
      }
    ]
  };

  const pricingTiers = [
    {
      tier: 'Standard Bulk',
      volume: '500 - 999 gal',
      discount: '5%',
      discountLabel: 'Savings',
      accent: 'border-slate-200 hover:border-slate-300',
      description: 'Ideal for medium-scale commercial backup and local fleets.',
      features: ['Scheduled Delivery', 'Consolidated Invoicing', 'Quality Guarantee']
    },
    {
      tier: 'High Volume',
      volume: '1,000 - 4,999 gal',
      discount: '10%',
      discountLabel: 'Savings',
      accent: 'border-blue-500 shadow-blue-100/50',
      popular: true,
      description: 'Engineered for logistics hubs and construction sites.',
      features: ['Priority Dispatch', 'Volume Locking', 'Dedicated Account Manager']
    },
    {
      tier: 'Industrial Scale',
      volume: '5,000+ gal',
      discount: '15%+',
      discountLabel: 'Savings',
      accent: 'border-orange-500 shadow-orange-100/50',
      description: 'Strategic supply for manufacturing and power generation.',
      features: ['Custom Scheduling', 'Tank Monitoring', 'Executive Support Line']
    }
  ];

  const infrastructureServices = [
    {
      title: 'Compliance Audits',
      description: 'Ensuring your storage meets local environmental laws and safety regulations.'
    },
    {
      title: 'Remote Monitoring',
      description: 'Automated alerts when your inventory hits 20% — never run dry.'
    },
    {
      title: 'Filter Systems',
      description: 'Industrial filtration for high-performance machinery and generators.'
    },
    {
      title: 'Tank Consultation',
      description: 'Expert sizing and installation guidance for optimal bulk efficiency.'
    }
  ];

  const industries = [
    { name: 'Manufacturing', icon: Factory },
    { name: 'Construction', icon: HardHat },
    { name: 'Transportation', icon: Truck },
    { name: 'Power Generation', icon: Zap }
  ];

  return (
    <>
      <Head>
        <title>Bulk Diesel Supply & Industrial Fuel Solutions | Nevloh Limited Jamaica</title>
        <meta
          name="description"
          content="Optimize your operational costs with Nevloh's Bulk Fuel Program. Tiered savings up to 15% for industrial and commercial diesel requirements across Jamaica. Minimum 500 gallons."
        />
        <meta
          name="keywords"
          content="bulk fuel supply Jamaica, industrial fuel delivery, commercial bulk diesel, high volume fuel, bulk fuel pricing, industrial fuel supply, wholesale diesel Jamaica, ULSD bulk"
        />
        <link rel="canonical" href="https://www.nevloh.com/services/bulk-fuel" />

        {/* Open Graph */}
        <meta property="og:title" content="Bulk Diesel Supply | Save Up to 15% | Nevloh Limited" />
        <meta property="og:description" content="Large volume fuel supply for industrial operations. Competitive bulk pricing with tiered discounts up to 15%." />
        <meta property="og:image" content="https://www.nevloh.com/images/og-bulk-fuel.png" />
        <meta property="og:url" content="https://www.nevloh.com/services/bulk-fuel" />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bulkFuelSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="min-h-screen bg-[#fcfdfe] font-sans selection:bg-blue-100">

        {/* ─── TIER 1 HERO: Industrial Dark Authority ─── */}
        <section className="relative pt-24 pb-32 bg-[#0F172A] overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Breadcrumbs */}
            <div className="mb-12">
              <Breadcrumbs items={breadcrumbConfigs.bulkFuel} />
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                  <Factory size={14} />
                  <span>Industrial Logistics</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
                  Scale Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                    Energy Efficiency
                  </span>
                </h1>

                <p className="text-xl text-slate-400 max-w-xl mb-10 leading-relaxed">
                  Nevloh Limited provides high-precision bulk diesel delivery systems for
                  Jamaica's most demanding industries. Reduce overhead by up to 15%
                  through our tiered volume architecture.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact/jamaica"
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-900/30 flex items-center gap-2"
                  >
                    Request Bulk Quote
                    <ArrowRight size={20} />
                  </Link>
                  <a
                    href="tel:+18764495172"
                    className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold transition-all border border-slate-700"
                  >
                    Talk to a Specialist
                  </a>
                </div>
              </div>

              {/* Right: Capability Grid */}
              <div className="relative">
                <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-8 rounded-[2.5rem] shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Shield, label: 'Quality', val: 'ASTM D975' },
                      { icon: Clock, label: 'Lead Time', val: '24-48hrs' },
                      { icon: Truck, label: 'Fleet', val: 'GPS Tracked' },
                      { icon: BarChart3, label: 'Reporting', val: 'Real-time' }
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="p-5 bg-slate-900/50 rounded-2xl border border-slate-700/50">
                          <Icon className="text-blue-400 mb-3" size={24} />
                          <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">{item.label}</div>
                          <div className="text-white font-bold text-lg">{item.val}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Industries Served */}
                  <div className="mt-6 pt-6 border-t border-slate-700/50">
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-4">Industries Served</div>
                    <div className="flex flex-wrap gap-3">
                      {industries.map((ind, i) => {
                        const Icon = ind.icon;
                        return (
                          <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full border border-slate-700">
                            <Icon size={14} className="text-orange-400" />
                            <span className="text-xs font-bold text-slate-300">{ind.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── THE SAVINGS MATRIX ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
                Volume Pricing
              </h2>
              <p className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                The Bulk Savings Matrix
              </p>
              <p className="text-slate-500 max-w-xl mx-auto">
                Precision pricing for every scale of operation. Lock in your rate today.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, i) => (
                <div
                  key={i}
                  className={`relative bg-white border-2 rounded-[2.5rem] p-10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${tier.accent}`}
                >
                  {tier.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                      Most Scalable
                    </span>
                  )}

                  <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.tier}</h3>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-black text-slate-900">{tier.discount}</span>
                    <span className="text-slate-400 font-bold text-sm uppercase">{tier.discountLabel}</span>
                  </div>
                  <div className="text-blue-600 font-bold text-lg mb-6">{tier.volume}</div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{tier.description}</p>

                  <ul className="space-y-4 mb-10">
                    {tier.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                        <CheckCircle className="text-emerald-500 flex-shrink-0" size={18} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact/jamaica"
                    className="block text-center py-4 bg-slate-50 hover:bg-blue-600 hover:text-white rounded-2xl font-bold text-slate-900 transition-all"
                  >
                    Lock This Rate
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── INFRASTRUCTURE SUPPORT ─── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Schematic Visual */}
              <div className="order-2 lg:order-1">
                <div className="aspect-square bg-white rounded-[3rem] border border-slate-100 p-10 flex flex-col justify-center items-center relative shadow-xl">
                  {/* Window Controls */}
                  <div className="absolute top-8 right-8 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>

                  {/* Schematic Icon */}
                  <div className="text-center">
                    <div className="mb-8 inline-block p-8 bg-blue-50 rounded-[2rem] shadow-lg border border-blue-100">
                      <Droplets className="text-blue-600" size={64} />
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-3">Storage Optimization</h4>
                    <p className="text-slate-500 max-w-xs mx-auto leading-relaxed">
                      Our engineers help you size tanks and piping for maximum bulk efficiency and compliance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
                  Beyond Delivery
                </h2>
                <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-6">
                  Total Infrastructure Support
                </p>
                <p className="text-lg text-slate-500 leading-relaxed mb-10">
                  Bulk supply isn't just about delivery—it's about storage integrity.
                  Nevloh Limited provides consultation on tank installation, pump maintenance,
                  and environmental compliance to ensure your fuel remains high-yield.
                </p>

                <div className="space-y-4">
                  {infrastructureServices.map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                        <HardHat className="text-orange-500" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 mb-1">{item.title}</div>
                        <div className="text-sm text-slate-500">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ROI CALCULATOR CTA ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Background Effects */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-[100px]" aria-hidden="true" />
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-400/10 rounded-full blur-[80px]" aria-hidden="true" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <Calculator size={64} className="mb-8 opacity-50" />

              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
                Quantify Your Efficiency
              </h2>
              <p className="text-blue-100 text-xl max-w-2xl mb-12 leading-relaxed">
                Stop guessing your fuel expenses. Let our analysts run a consumption
                audit and show you the exact annual ROI of switching to a Nevloh Bulk Program.
              </p>

              {/* ROI Stats */}
              <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
                {[
                  { value: '$1.2M+', label: 'Annual Savings Potential' },
                  { value: '99.9%', label: 'Uptime Reliability' },
                  { value: '0%', label: 'Outage Rate Target' }
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
                    <div className="text-3xl font-black mb-2">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact/jamaica"
                className="px-12 py-5 bg-white text-blue-900 rounded-2xl font-black text-sm uppercase tracking-wider hover:scale-105 transition-transform flex items-center gap-3 shadow-xl"
              >
                <FileSpreadsheet size={20} />
                Get Savings Audit
              </Link>
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="py-24 px-6 bg-slate-950">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              <Zap size={12} />
              <span>Start Your Bulk Program</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
              Ready to Scale Your Fuel Efficiency?
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
              Join hundreds of Jamaican businesses saving with our tiered bulk fuel programs.
              Professional service, competitive pricing, reliable delivery.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link
                href="/contact/jamaica"
                className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-blue-900/30 transition-all flex items-center justify-center gap-2"
              >
                <Truck size={18} />
                Start Bulk Program
              </Link>
              <Link
                href="/contact/international"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
              >
                <Globe size={18} />
                International Trade Desk
              </Link>
            </div>

            <div className="text-slate-500 text-sm">
              <strong className="text-slate-400">Minimum Order:</strong> 500 gallons •
              <strong className="text-slate-400 ml-2">Maximum Savings:</strong> Up to 15% off standard pricing
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default BulkFuelSupply;