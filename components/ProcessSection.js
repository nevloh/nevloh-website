// components/ProcessSection.js
// Tier 1 Institutional — Dual-Operational Protocol Architecture
import React from 'react';
import Link from 'next/link';
import {
  Phone, Truck, CreditCard, Building2,
  ShieldCheck, FileText, Globe,
  BadgeCheck, Landmark, Scale
} from 'lucide-react';

const ProcessSection = () => {
  const regionalProtocols = [
    {
      id: "01",
      title: "Inquiry & Quotation",
      description: "Submit requirements via our 24/7 ops desk. Receive localized pricing based on volume and parish location.",
      icon: Phone
    },
    {
      id: "02",
      title: "Logistical Dispatch",
      description: "Licensed petroleum haulage fleet dispatched to your site with GPS tracking and safety verification.",
      icon: Truck
    },
    {
      id: "03",
      title: "Settlement",
      description: "Secure payment via POS, RTGS, or established corporate credit terms with instant digital receipting.",
      icon: CreditCard
    }
  ];

  const internationalProtocols = [
    {
      id: "01",
      title: "Compliance & KYC",
      description: "Verification of corporate credentials and demonstrated LC capability via Wyoming Trade Desk.",
      icon: ShieldCheck
    },
    {
      id: "02",
      title: "SPA & LC Issuance",
      description: "Sales & Purchase Agreement execution followed by issuance of Irrevocable LC at Sight (UCP 600).",
      icon: FileText
    },
    {
      id: "03",
      title: "Inspection & Load",
      description: "SGS or Intertek verification at load port. Document presentation for bank-secured settlement.",
      icon: Landmark
    }
  ];

  // Analytics tracking
  const handleStepClick = (stepTitle) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Process Steps',
        event_label: stepTitle,
        value: 1
      });
    }
  };

  return (
    <>
      {/* Structured Data for How-To Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Order Fuel from Nevloh Group",
            "description": "Standardized workflows for regional fuel delivery and international commodities trading",
            "step": [
              ...regionalProtocols.map((step, index) => ({
                "@type": "HowToStep",
                "position": index + 1,
                "name": `Regional: ${step.title}`,
                "text": step.description
              })),
              ...internationalProtocols.map((step, index) => ({
                "@type": "HowToStep",
                "position": index + 4,
                "name": `International: ${step.title}`,
                "text": step.description
              }))
            ]
          })
        }}
      />

      <section
        className="py-24 px-6 bg-[#fcfdfe] overflow-hidden"
        aria-labelledby="process-heading"
      >
        <div className="max-w-7xl mx-auto">

          {/* Institutional Header */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-blue-600" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">Execution Framework</span>
            </div>
            <h2
              id="process-heading"
              className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6"
            >
              Operational <span className="text-blue-600">Protocols.</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              Standardized workflows ensuring speed for regional logistics and
              security for global commodities trading.
            </p>
          </div>

          {/* ─── REGIONAL PROTOCOL (Nevloh Limited) ─── */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-10">
              <BadgeCheck size={20} className="text-emerald-500" />
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Regional Logistics
              </h3>
              <span className="font-mono text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                NEVLOH LIMITED — JAMAICA
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connection Lines (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-[16.5%] right-[16.5%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 -translate-y-1/2 z-0" aria-hidden="true" />

              {regionalProtocols.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    className="relative z-10 group"
                    onClick={() => handleStepClick(`Regional: ${step.title}`)}
                  >
                    <div className="bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-200/50 h-full">
                      <div className="flex justify-between items-start mb-8">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <Icon size={28} />
                        </div>
                        <span className="text-5xl font-black text-slate-100 group-hover:text-blue-100 transition-colors select-none">
                          {step.id}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ─── INTERNATIONAL PROTOCOL (Nevloh LLC) ─── */}
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />

            <div className="flex items-center gap-3 mb-12 relative z-10">
              <Globe size={20} className="text-indigo-400" />
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400/80">
                International Trade
              </h3>
              <span className="font-mono text-[10px] text-slate-500 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                NEVLOH LLC — WYOMING, USA
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-10 relative z-10">
              {internationalProtocols.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    className="group"
                    onClick={() => handleStepClick(`International: ${step.title}`)}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-indigo-950/50 border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all">
                        <Icon size={26} className="text-indigo-400 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-4xl font-black text-slate-800 select-none">{step.id}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Glossary CTA inside international section */}
            <div className="mt-12 pt-8 border-t border-slate-800 relative z-10">
              <p className="text-slate-500 text-sm">
                New to trade terminology?{' '}
                <Link href="/glossary" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 decoration-indigo-500/30 hover:decoration-indigo-400 transition-colors">
                  View our glossary →
                </Link>
              </p>
            </div>
          </div>

          {/* ─── SETTLEMENT MODALITIES ─── */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {/* Local Settlement */}
            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 flex items-center gap-6 shadow-lg shadow-slate-200/50 hover:shadow-blue-100/50 transition-shadow">
              <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 flex-shrink-0">
                <Building2 size={28} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-1">Local Modality</p>
                <h5 className="font-bold text-slate-900 text-lg">RTGS &amp; POS Settlement</h5>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  Same-day clearing via major Jamaican commercial banks. Corporate credit terms available.
                </p>
              </div>
            </div>

            {/* International Settlement */}
            <Link
              href="/glossary#ucp-600"
              className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 flex items-center gap-6 shadow-lg hover:shadow-indigo-500/20 transition-all group"
            >
              <div className="bg-indigo-950 border border-indigo-500/20 p-4 rounded-2xl text-indigo-400 flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 transition-all">
                <Scale size={28} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-1">Trade Modality</p>
                <h5 className="font-bold text-white text-lg">LC-at-Sight (UCP 600)</h5>
                <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                  Verified via Wyoming Desk for global trade security. Bank-to-bank settlement only.
                </p>
              </div>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <BadgeCheck size={18} className="text-emerald-500" />
              <span className="font-medium">Secure Processing</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <BadgeCheck size={18} className="text-emerald-500" />
              <span className="font-medium">Instant Digital Receipts</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <BadgeCheck size={18} className="text-emerald-500" />
              <span className="font-medium">24/7 Operations Support</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <BadgeCheck size={18} className="text-emerald-500" />
              <span className="font-medium">Licensed &amp; Insured</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ProcessSection;