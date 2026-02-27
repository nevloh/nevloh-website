// components/ServicesSection.js
// Tier 1 Institutional — Dual-Operational Architecture
import React from 'react';
import Link from 'next/link';
import {
  Truck, Fuel, ArrowRight, ShieldCheck,
  MapPin, Zap, Building2, Globe, Scale, BadgeCheck
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 'international-trade',
      entity: 'Nevloh LLC',
      location: 'WYOMING, USA',
      title: 'International Commodities Trade',
      description: 'Structured procurement and settlement for EN590 Diesel and Urea 46% Nitrogen Fertilizer via bank-secured instruments.',
      icon: Globe,
      color: 'indigo',
      features: ['UCP 600 / ISBP 745 Compliant', 'SGS/Intertek Verified', 'LC-at-Sight Settlement'],
      href: '/international-trade',
      isDark: true
    },
    {
      id: 'fleet-refuelling',
      entity: 'Nevloh Limited',
      location: 'JAMAICA',
      title: 'Fleet Refuelling Logistics',
      description: 'Systematic on-site refuelling solutions designed to eliminate downtime for commercial and industrial fleets across Jamaica.',
      icon: Truck,
      color: 'blue',
      features: ['Automated Fuel Accounting', '24/7 Priority Dispatch', 'Same-Day Delivery'],
      href: '/services/fleet-refuelling',
      isDark: false
    },
    {
      id: 'generator-refuelling',
      entity: 'Nevloh Limited',
      location: 'JAMAICA',
      title: 'Critical Power Support',
      description: 'Uninterrupted fuel supply chains for hospitals, data centers, and telecommunications infrastructure.',
      icon: Zap,
      color: 'emerald',
      features: ['Emergency Response Protocol', 'Remote Level Monitoring', 'Backup Power Assurance'],
      href: '/services/generator-refuelling',
      isDark: false
    },
    {
      id: 'bulk-fuel-supply',
      entity: 'Nevloh Limited',
      location: 'JAMAICA',
      title: 'Industrial Bulk Supply',
      description: 'High-volume petroleum distribution for manufacturing, marine operations, and government entities.',
      icon: Building2,
      color: 'blue',
      features: ['Tier 1 Product Quality', 'Volume Price Optimization', 'Dedicated Account Ops'],
      href: '/services/bulk-fuel',
      isDark: false
    },
    {
      id: 'haulage-services',
      entity: 'Nevloh Limited',
      location: 'JAMAICA',
      title: 'Petroleum Haulage',
      description: 'Licensed petroleum haulage contractor providing certified cross-island transportation for oil marketing companies.',
      icon: Scale,
      color: 'slate',
      features: ['Licensed & Safety Certified', 'GPS Managed Fleet', 'B2B Logistics Partner'],
      href: '/services/haulage',
      isDark: false
    },
    {
      id: 'on-site-delivery',
      entity: 'Nevloh Limited',
      location: 'JAMAICA',
      title: 'Remote Site Delivery',
      description: 'Direct-to-equipment fuel delivery for construction, agriculture, and remote infrastructure projects.',
      icon: MapPin,
      color: 'purple',
      features: ['All-Terrain Access', 'Safety-First Handling', 'Flexible Site Scheduling'],
      href: '/services/on-site-fuel-delivery',
      isDark: false
    }
  ];

  // Analytics tracking
  const handleServiceClick = (serviceName) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Services',
        event_label: serviceName,
        value: 1
      });
    }
  };

  return (
    <>
      {/* Structured Data for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "provider": {
              "@type": "Organization",
              "name": "Nevloh Group",
              "url": "https://www.nevloh.com"
            },
            "serviceType": "Energy & Commodities Services",
            "areaServed": [
              { "@type": "Country", "name": "Jamaica" },
              { "@type": "Place", "name": "Caribbean Basin" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Energy Services",
              "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description,
                  "url": `https://www.nevloh.com${service.href}`
                }
              }))
            }
          })
        }}
      />

      <section
        className="py-24 bg-[#fcfdfe] relative overflow-hidden"
        aria-labelledby="services-heading"
      >
        {/* Background Institutional Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-50/50 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-blue-600" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">Operations Hub</span>
            </div>
            <h2
              id="services-heading"
              className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6"
            >
              Bilateral Energy <span className="text-blue-600">Solutions.</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              Integrated energy logistics for the Jamaican market paired with global
              commodities trading for international counterparties.
            </p>
          </div>

          {/* Trust Badges Row */}
          <div className="flex flex-wrap justify-start gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span className="text-xs font-bold text-slate-600">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm">
              <Zap size={16} className="text-amber-500" />
              <span className="text-xs font-bold text-slate-600">24/7 Emergency Response</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm">
              <MapPin size={16} className="text-blue-500" />
              <span className="text-xs font-bold text-slate-600">Island-wide Coverage</span>
            </div>
            <Link
              href="/glossary#ucp-600"
              className="flex items-center gap-2 bg-slate-900 border border-slate-700 px-4 py-2 rounded-full shadow-sm hover:bg-slate-800 transition-colors"
            >
              <Globe size={16} className="text-indigo-400" />
              <span className="text-xs font-bold text-white">UCP 600 Compliant</span>
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => {
              const Icon = s.icon;
              const isDark = s.isDark;

              return (
                <article
                  key={s.id}
                  className={`group relative rounded-[2rem] p-10 border transition-all duration-500 hover:-translate-y-2 ${
                    isDark
                      ? 'bg-slate-950 border-slate-800 shadow-2xl hover:shadow-indigo-500/20'
                      : 'bg-white border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-blue-200/40'
                  }`}
                  onClick={() => handleServiceClick(s.title)}
                >
                  {/* Entity Badge & Icon */}
                  <div className="flex justify-between items-start mb-8">
                    <div
                      className={`p-4 rounded-2xl transition-all duration-500 ${
                        isDark
                          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/40 group-hover:shadow-indigo-500/50'
                          : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                      }`}
                    >
                      <Icon size={28} />
                    </div>
                    <div className="text-right">
                      <span
                        className={`block text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border mb-1 ${
                          isDark
                            ? 'border-indigo-500/30 text-indigo-400 bg-indigo-950/50'
                            : 'border-blue-100 text-blue-500 bg-blue-50'
                        }`}
                      >
                        {s.entity}
                      </span>
                      <span className={`font-mono text-[8px] tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        {s.location}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-extrabold mb-4 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {s.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-8 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {s.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-10">
                    {s.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <BadgeCheck size={16} className={isDark ? 'text-indigo-400' : 'text-blue-600'} />
                        <span className={`text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <Link
                    href={s.href}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(`${s.title} - Learn More`);
                    }}
                    className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all ${
                      isDark ? 'text-indigo-400 hover:text-white' : 'text-blue-600 hover:text-blue-800'
                    }`}
                  >
                    Explore Service
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </article>
              );
            })}
          </div>

          {/* Specialized Inquiry Banner */}
          <div className="mt-20 bg-slate-900 rounded-[2.5rem] p-12 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" aria-hidden="true" />

            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                Complex Energy Requirements?
              </h3>
              <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
                From large-scale industrial haulage to global trade finance, we design bespoke energy supply chains.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  onClick={() => handleServiceClick('Custom Solution - Contact')}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2"
                >
                  <Fuel size={18} />
                  Request Custom Solution
                </Link>
                <a
                  href="tel:+18764495172"
                  onClick={() => handleServiceClick('Custom Solution - Call')}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center"
                >
                  Speak with Ops Hub
                </a>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-black text-blue-600">500+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-emerald-600">24/7</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Emergency Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-indigo-600">14</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Parishes Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-slate-900">2022</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Established</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}