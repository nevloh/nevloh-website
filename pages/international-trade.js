// pages/international-trade.js
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import {
  Globe, Shield, FileCheck, Building2, CheckCircle, ArrowRight,
  Landmark, Scale, Ship, Leaf, Fuel, Users, AlertCircle,
  BadgeCheck, Download, Target, ClipboardCheck, FileText,
  MapPin, ChevronDown, ChevronUp, Zap, Factory, Truck,
  Wheat, Building, Store, ExternalLink, BookOpen
} from 'lucide-react';
import { useState } from 'react';
import Breadcrumbs, { breadcrumbConfigs } from '../components/Breadcrumbs';

// Glossary Term Component - renders linked terms
const Term = ({ id, children, abbrev }) => (
  <Link
    href={`/glossary#${id}`}
    className="text-blue-600 hover:text-blue-700 underline decoration-blue-300 decoration-dotted underline-offset-2 hover:decoration-solid transition-all cursor-help"
    title={`View definition of ${children}`}
  >
    {children}
  </Link>
);

// Abbreviation component for inline definitions
const Abbr = ({ id, full, children }) => (
  <Link
    href={`/glossary#${id}`}
    className="text-blue-600 hover:text-blue-700 border-b border-dotted border-blue-400 hover:border-solid cursor-help"
    title={`${full} — Click for full definition`}
  >
    {children}
  </Link>
);

export default function InternationalTrade() {
  const [openFaq, setOpenFaq] = useState(null);

  // Schema Definitions
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.nevloh.com/international-trade#organization",
    "name": "Nevloh LLC",
    "legalName": "Nevloh LLC",
    "description": "International commodities trading company specializing in structured LC-based settlement for diesel fuel and fertilizer supply to Caribbean Basin and emerging markets.",
    "url": "https://www.nevloh.com/international-trade",
    "logo": "https://www.nevloh.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Wyoming",
      "addressCountry": "US"
    },
    "areaServed": [
      { "@type": "Place", "name": "Caribbean Basin" },
      { "@type": "Place", "name": "Emerging Markets" }
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "Nevloh Group"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "International Commodities Trading | Diesel & Fertilizer Supply",
    "url": "https://www.nevloh.com/international-trade",
    "description": "Bank-secured diesel and fertilizer supply for the Caribbean through LC-at-sight, inspection-backed shipments.",
    "about": { "@id": "https://www.nevloh.com/international-trade#organization" },
    "breadcrumb": { "@id": "https://www.nevloh.com/international-trade#breadcrumb" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.nevloh.com/international-trade#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nevloh.com" },
      { "@type": "ListItem", "position": 2, "name": "International Trade", "item": "https://www.nevloh.com/international-trade" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you require prepayment for international trade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. All transactions are executed through irrevocable Letters of Credit at sight. We do not accept or request prepayment, advance fees, or deposits outside of standard LC structures."
        }
      },
      {
        "@type": "Question",
        "name": "What inspection standards do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All shipments undergo quality and quantity inspection at load port by internationally recognized inspection agencies, typically SGS or Intertek."
        }
      },
      {
        "@type": "Question",
        "name": "What LC terms are required?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We require irrevocable Letters of Credit at sight, issued by acceptable banks, compliant with UCP 600 and ISBP 745 standards."
        }
      },
      {
        "@type": "Question",
        "name": "Which ports do you serve in the Caribbean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve major Caribbean ports including Kingston (Jamaica), Port of Spain (Trinidad), Bridgetown (Barbados), Georgetown (Guyana), and other accessible deep-water ports."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum volume for diesel or urea orders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimum volumes depend on route economics and vessel availability. For diesel, typical minimums are aligned with vessel parcel sizes (2,000+ MT). For bagged urea, smaller volumes may be considered."
        }
      }
    ]
  };

  // Trade execution standards
  const tradeFeatures = [
    { icon: Landmark, title: "Irrevocable LCs", description: "Structured under UCP 600 standards.", termId: "lc" },
    { icon: Shield, title: "SGS/Intertek", description: "Mandatory load-port verification.", termId: "sgs" },
    { icon: FileCheck, title: "Banking Discipline", description: "ISBP 745 compliant documentation.", termId: "isbp-745" },
    { icon: Scale, title: "Standardized SPAs", description: "Balanced international trade terms.", termId: "spa" }
  ];

  // Who We Serve
  const whoWeServe = [
    { icon: Building, label: "Licensed Importers", description: "Registered fuel and fertilizer import companies" },
    { icon: Zap, label: "Power Utilities", description: "Generator fuel wholesalers and IPPs" },
    { icon: Building2, label: "Government & Corporate", description: "State entities and large corporate off-takers" },
    { icon: Wheat, label: "Agricultural Sector", description: "Co-ops, large farms, and distributors" }
  ];

  // Products with use cases
  const products = [
    {
      icon: Fuel,
      name: "Ultra Low Sulfur Diesel",
      specification: "EN590 / ULSD",
      specTermId: "en590",
      description: "Premium grade diesel fuel meeting international environmental standards for commercial and industrial applications.",
      features: [
        { text: "EN590 specification compliant", termId: "en590" },
        { text: "Ultra Low Sulfur content (≤10 ppm)", termId: "ppm" },
        { text: "Suitable for modern diesel engines", termId: null },
        { text: "Environmental compliance certified", termId: null }
      ],
      useCases: [
        { icon: Zap, label: "Power Generation" },
        { icon: Truck, label: "Fleet & Logistics" },
        { icon: Factory, label: "Industrial Operations" }
      ]
    },
    {
      icon: Leaf,
      name: "Urea 46% Nitrogen Fertilizer",
      specification: "Granular / Prilled",
      specTermId: "urea-46",
      description: "High-quality nitrogen fertilizer for agricultural applications, supporting food security in emerging markets.",
      features: [
        { text: "46% nitrogen content", termId: "urea-46" },
        { text: "Granular and prilled forms available", termId: "granular" },
        { text: "Agricultural grade certified", termId: null },
        { text: "Bulk and bagged options", termId: null }
      ],
      useCases: [
        { icon: Wheat, label: "Row Crops / Food Security" },
        { icon: Store, label: "Wholesale Distribution" },
        { icon: Users, label: "Large Farms & Co-ops" }
      ]
    }
  ];

  // Why Nevloh differentiators
  const whyNevloh = [
    {
      icon: ClipboardCheck,
      title: "Execution Discipline",
      description: "No shipment proceeds without a compliant LC in place. This protects all parties and ensures transaction certainty."
    },
    {
      icon: Shield,
      title: "Inspection-First Approach",
      description: "SGS or Intertek inspection at load port verifies quality and quantity before any document presentation."
    },
    {
      icon: FileText,
      title: "Documentation Control",
      description: "Bank presentation documents are pre-checked for compliance, reducing discrepancy risk and settlement delays."
    },
    {
      icon: MapPin,
      title: "Caribbean Market Focus",
      description: "We understand Caribbean port logistics, regulatory requirements, and supply chain realities."
    }
  ];

  // Qualification requirements
  const qualificationRequirements = [
    "Licensed importer status in destination country",
    "Demonstrated LC capability through established banking relationships",
    "Regulatory compliance with local import requirements",
    "Corporate off-taker with verifiable trade references",
    "Minimum volume commitments aligned with vessel economics"
  ];

  // FAQs
  const faqs = [
    {
      question: "Do you require prepayment?",
      answer: "No. All transactions are executed through irrevocable Letters of Credit at sight. We do not accept or request prepayment, advance fees, or deposits outside of standard LC structures. If you receive any request for upfront payment claiming to be from Nevloh, it is fraudulent."
    },
    {
      question: "What inspection standards do you use?",
      answer: "All shipments undergo quality and quantity inspection at load port by internationally recognized inspection agencies—typically SGS or Intertek. The inspection certificate forms part of the LC document presentation, ensuring the buyer receives exactly what was contracted."
    },
    {
      question: "What LC terms are required?",
      answer: "We require irrevocable Documentary Letters of Credit at sight, issued by acceptable banks, compliant with UCP 600 and ISBP 745 standards. LC confirmation may be required depending on the issuing bank's credit standing."
    },
    {
      question: "Do you work with confirmed LCs?",
      answer: "Yes. For issuing banks outside major financial centers, we may require the LC to be confirmed by an acceptable confirming bank. This protects both parties and is standard practice in international trade."
    },
    {
      question: "Which ports do you serve?",
      answer: "We serve major Caribbean ports including Kingston (Jamaica), Port of Spain (Trinidad), Bridgetown (Barbados), Georgetown (Guyana), and other accessible deep-water ports. Route viability depends on vessel availability and minimum parcel economics."
    },
    {
      question: "What's the minimum volume?",
      answer: "Minimum volumes depend on route economics and vessel availability. For diesel, typical minimums align with vessel parcel sizes (2,000+ MT). For bagged urea, smaller volumes may be considered depending on destination and consolidation opportunities."
    },
    {
      question: "Can you provide an LC template?",
      answer: "Yes. If you're new to LC-based trade or want to ensure your bank issues a compliant LC, we can provide a template that your bank can use as a reference. This reduces back-and-forth and speeds up transaction setup."
    }
  ];

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <>
      <Head>
        <title>International Trade | Nevloh LLC | Energy & Agriculture</title>
        <meta name="description" content="Bank-secured diesel and fertilizer supply for the Caribbean. LC-at-sight, SGS/Intertek inspection, UCP 600 compliant. Serving qualified importers through Nevloh LLC (Wyoming, USA)." />
        <meta name="keywords" content="international commodities trading, diesel fuel supply, EN590 diesel, ULSD trading, urea fertilizer, LC settlement, Caribbean fuel supply, bank-secured trade" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bank-Secured Diesel & Fertilizer Supply for the Caribbean | Nevloh LLC" />
        <meta property="og:description" content="LC-at-sight, inspection-backed shipments with disciplined documentation—reducing delivery risk and settlement delays for qualified importers." />
        <meta property="og:url" content="https://www.nevloh.com/international-trade" />
        <meta property="og:image" content="https://www.nevloh.com/images/logo.png" />
        <meta property="og:site_name" content="Nevloh Group" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bank-Secured Diesel & Fertilizer Supply | Nevloh LLC" />
        <meta name="twitter:description" content="Structured LC-based settlement for diesel and fertilizer supply to the Caribbean." />

        <link rel="canonical" href="https://www.nevloh.com/international-trade" />
      </Head>

      {/* Schemas */}
      <Script id="organization-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="webpage-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#f8fafc] min-h-screen font-sans text-slate-900">

        {/* Global Announcement Bar - High Trust Factor */}
        <div className="bg-slate-900 text-white py-2.5 px-4 text-center text-xs font-medium tracking-widest uppercase">
          <span className="opacity-70">Regulatory Compliance:</span>{' '}
          <Abbr id="ucp-600" full="Uniform Customs and Practice for Documentary Credits">UCP 600</Abbr>
          {' & '}
          <Abbr id="isbp-745" full="International Standard Banking Practice">ISBP 745</Abbr>
          {' '}Compliant Execution
        </div>

        {/* Main content wrapper - pt-20 accounts for fixed navbar */}
        <div className="pt-20">
          {/* Breadcrumbs - isolated stacking context with high z-index */}
          <div className="relative z-40 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
              <Breadcrumbs items={breadcrumbConfigs.internationalTrade} />
            </div>
          </div>

        {/* Hero Section - Institutional Look - z-0 to stay below breadcrumbs */}
        <section className="relative pt-10 pb-20 overflow-hidden">
          {/* Subtle Global Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23475569' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-3/5">
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
                  <Globe size={14} aria-hidden="true" />
                  <span>Cross-Border Commodities Division</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
                  Structured Trade. <br />
                  <span className="text-blue-600">Bank-Secured Supply.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                  Nevloh LLC facilitates high-volume diesel and fertilizer supply for the Caribbean Basin,
                  utilizing <Term id="lc">Letter of Credit</Term> settlement to eliminate <Term id="counterparty">counterparty risk</Term>{' '}
                  and ensure execution certainty.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact/international"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-200 flex items-center group"
                  >
                    Initiate Trade Inquiry
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} aria-hidden="true" />
                  </Link>
                  <a
                    href="/docs/Nevloh_LC_Checklist.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-slate-200 hover:border-blue-300 text-slate-700 px-8 py-4 rounded-xl font-bold transition-all flex items-center"
                  >
                    <Download className="mr-2 text-blue-600" size={18} aria-hidden="true" />
                    LC Requirements
                  </a>
                </div>

                {/* Glossary Link */}
                <p className="mt-6 text-sm text-slate-500">
                  <BookOpen size={14} className="inline mr-1" />
                  New to trade terminology?{' '}
                  <Link href="/glossary" className="text-blue-600 hover:underline">
                    View our glossary →
                  </Link>
                </p>
              </div>

              {/* Trade Standards Card */}
              <div className="lg:w-2/5 w-full">
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 relative">
                  <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-2xl shadow-lg">
                    <Shield size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-sm uppercase tracking-widest font-bold text-slate-400 mb-6">Execution Protocol</h3>
                  <div className="space-y-6">
                    {tradeFeatures.map((f, i) => (
                      <Link key={i} href={`/glossary#${f.termId}`} className="flex items-start group cursor-pointer">
                        <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mr-4 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                          <f.icon size={18} className="text-slate-600 group-hover:text-blue-600" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-sm group-hover:text-blue-600 transition-colors">{f.title}</h4>
                          <p className="text-slate-500 text-xs mt-1">{f.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Anti-Fraud Protocol Banner */}
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-amber-100 p-3 rounded-full text-amber-700 flex-shrink-0">
                <AlertCircle size={24} aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-bold text-amber-900">Anti-Fraud Protocol</h4>
                <p className="text-amber-800 text-sm">
                  Nevloh LLC <strong>never</strong> requests advance fees or prepayments. All payments are bank-to-bank via <Term id="lc-at-sight">LC at sight</Term>.
                </p>
              </div>
            </div>
            <Link href="/contact/international" className="text-amber-900 font-bold text-sm underline decoration-amber-300 underline-offset-4 whitespace-nowrap">
              Report suspicious activity →
            </Link>
          </div>
        </div>

        {/* Who We Serve */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Target Market</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
                Who We Serve
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                We partner with established organizations that have the infrastructure and
                banking relationships to execute structured trade.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whoWeServe.map((segment, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <segment.icon size={28} className="text-blue-600 group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{segment.label}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {segment.label === "Power Utilities" ? (
                      <>Generator fuel wholesalers and <Term id="ipp">IPPs</Term></>
                    ) : segment.label === "Government & Corporate" ? (
                      <>State entities and large corporate <Term id="off-taker">off-takers</Term></>
                    ) : (
                      segment.description
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Scope */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Commodity Focus</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
                Product Scope
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Focused product range ensures reliable supply chains and consistent quality
                through established sourcing relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-start mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-5 flex-shrink-0 shadow-lg shadow-blue-200">
                      <product.icon size={32} className="text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{product.name}</h3>
                      <Link href={`/glossary#${product.specTermId}`} className="text-blue-600 font-mono text-sm tracking-wide hover:underline">
                        {product.specification}
                      </Link>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-8 leading-relaxed">{product.description}</p>

                  <div className="mb-8">
                    <h4 className="font-bold text-slate-800 mb-4 text-xs uppercase tracking-widest">Specifications</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {product.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center text-slate-600 text-sm">
                          <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} aria-hidden="true" />
                          {feature.termId ? (
                            <Term id={feature.termId}>{feature.text}</Term>
                          ) : (
                            feature.text
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="pt-8 border-t border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-4 text-xs uppercase tracking-widest">Typical Applications</h4>
                    <div className="flex flex-wrap gap-3">
                      {product.useCases.map((useCase, uIndex) => (
                        <span
                          key={uIndex}
                          className="inline-flex items-center bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium"
                        >
                          <useCase.icon size={14} className="mr-2 text-slate-500" aria-hidden="true" />
                          {useCase.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Nevloh - FIXED: Simplified hover effect without fade */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Our Edge</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
                Why Nevloh
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Our approach prioritizes execution certainty and risk mitigation over volume chasing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyNevloh.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 h-full"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <item.icon size={28} className="text-blue-600 group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transaction Process - Progressive Flow */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Execution Flow</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
                Transaction Process
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                A disciplined, bank-controlled execution flow that protects all parties.
              </p>
            </div>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 transform -translate-y-1/2 rounded-full" aria-hidden="true" />

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {[
                  { step: "01", title: "Inquiry", description: "Submit trade inquiry with volume, destination, and LC capability" },
                  { step: "02", title: "Negotiation", description: <>Terms agreed and documented in <Term id="spa">Sales & Purchase Agreement</Term></> },
                  { step: "03", title: "LC Issuance", description: <>Buyer's bank issues compliant irrevocable <Term id="lc-at-sight">LC at sight</Term></> },
                  { step: "04", title: "Inspection", description: <>Product loaded with <Term id="sgs">SGS</Term>/<Term id="intertek">Intertek</Term> verification at port</> },
                  { step: "05", title: "Settlement", description: <><Term id="document-presentation">Document presentation</Term> and payment per LC terms</> }
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow h-full">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg shadow-blue-200">
                        <span className="text-white font-bold text-lg">{item.step}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bilateral Entity Structure - Redesigned */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Legal Framework</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">Bilateral Structure</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                We maintain strict legal and financial separation between our international trade hub and regional distribution operations.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-0 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
              {/* International Hub - Nevloh LLC */}
              <div className="p-10 md:p-16 bg-slate-800/50 backdrop-blur-sm border-b lg:border-b-0 lg:border-r border-slate-700">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/20">
                    <Globe size={28} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Nevloh LLC</h3>
                    <p className="text-blue-400 font-mono text-sm tracking-widest">WYOMING, USA</p>
                  </div>
                </div>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  The primary contracting entity for <strong className="text-white">International Commodities Trade</strong>.
                  This entity manages global banking relationships, <Term id="lc">LC</Term> processing, and cross-border logistics.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["Global Trade Finance", "Bulk Fuel Sourcing", "Fertilizer Exports", "Maritime Logistics"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-300 text-sm border-l-2 border-blue-600 pl-3">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Regional Hub - Nevloh Limited */}
              <div className="p-10 md:p-16 bg-slate-900/80 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-900/20">
                    <MapPin size={28} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Nevloh Limited</h3>
                    <p className="text-emerald-400 font-mono text-sm tracking-widest">KINGSTON, JAMAICA</p>
                  </div>
                </div>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  The <strong className="text-white">Regional Operational Arm</strong>.
                  Responsible for localized distribution, fleet refueling services, and parish-level logistics within the Jamaican market.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["Local Fuel Haulage", "Parish Distribution", "Direct-to-Equipment", "Retail Logistics"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-300 text-sm border-l-2 border-emerald-600 pl-3">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-2 text-slate-500 text-sm">
              <Scale size={16} aria-hidden="true" />
              <span>Contracts are issued by the specific entity based on jurisdictional requirements.</span>
            </div>
          </div>
        </section>

        {/* Counterparty Qualification */}
        <section id="qualification" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Requirements</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
                  <Term id="counterparty">Counterparty</Term> Qualification
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  We work with qualified counterparties who have the banking relationships and
                  regulatory standing to execute structured trade.
                </p>

                {/* LC Template Offer */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl text-blue-600 flex-shrink-0">
                      <FileText size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900">New to <Term id="lc">LC-Based Trade</Term>?</h4>
                      <p className="text-blue-800 text-sm mt-1">
                        We can share a compliant LC template your bank can reference.
                        This speeds up issuance and reduces <Term id="discrepancy">discrepancies</Term>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Volume Flexibility Notice */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-200 p-3 rounded-xl text-slate-600 flex-shrink-0">
                      <Ship size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Volume Flexibility</h4>
                      <p className="text-slate-600 text-sm mt-1">
                        Minimum volumes depend on route economics. Smaller programs may be considered
                        for bagged urea depending on destination.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact/international"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-200 flex items-center group"
                  >
                    Submit Qualification Inquiry
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} aria-hidden="true" />
                  </Link>
                  <a
                    href="/docs/Nevloh_Buyer_Checklist.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-slate-200 hover:border-blue-300 text-slate-700 px-8 py-4 rounded-xl font-bold transition-all flex items-center"
                  >
                    <Download className="mr-2 text-blue-600" size={18} aria-hidden="true" />
                    Buyer Checklist
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-200 shadow-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center">
                  <BadgeCheck size={28} className="text-blue-600 mr-3" aria-hidden="true" />
                  Qualification Criteria
                </h3>
                <ul className="space-y-5">
                  {qualificationRequirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <CheckCircle className="text-green-600" size={14} aria-hidden="true" />
                      </div>
                      <span className="text-slate-700 leading-relaxed">
                        {index === 1 ? (
                          <>Demonstrated <Term id="lc">LC capability</Term> through established banking relationships</>
                        ) : index === 3 ? (
                          <>Corporate <Term id="off-taker">off-taker</Term> with verifiable trade references</>
                        ) : (
                          req
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Common Questions</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
                Frequently Asked
              </h2>
              <p className="text-xl text-slate-600">
                Answers to common questions about our trade process and requirements.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                    aria-expanded={openFaq === index}
                  >
                    <span className="font-bold text-slate-900 pr-4">{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === index ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                      {openFaq === index ? (
                        <ChevronUp size={18} aria-hidden="true" />
                      ) : (
                        <ChevronDown size={18} aria-hidden="true" />
                      )}
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Glossary CTA */}
            <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
              <BookOpen size={24} className="mx-auto text-blue-600 mb-3" />
              <h4 className="font-bold text-blue-900 mb-2">Need Help with Trade Terms?</h4>
              <p className="text-blue-800 text-sm mb-4">
                Our glossary explains all the technical terminology used in international commodities trading.
              </p>
              <Link
                href="/glossary"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                View Trade Glossary
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Discuss Your Requirements?
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              If your organization meets the qualification criteria and is interested in
              structured trade partnerships, we welcome your inquiry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/international"
                className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-xl font-bold transition-all shadow-xl shadow-blue-900/30 flex items-center justify-center group"
              >
                Initiate Trade Inquiry
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} aria-hidden="true" />
              </Link>
              <a
                href="/docs/Nevloh_LC_Checklist.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold transition-all flex items-center justify-center"
              >
                <Download className="mr-2" size={18} aria-hidden="true" />
                Download LC Checklist
              </a>
            </div>

            <p className="text-slate-500 text-sm mt-10">
              For regional fuel delivery services in Jamaica, visit our{' '}
              <Link href="/services" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
                Services page
              </Link>
              {' '}or{' '}
              <Link href="/contact/jamaica" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
                contact Nevloh Limited
              </Link>
              {' '}directly.
            </p>
          </div>
        </section>
        {/* End of pt-20 wrapper */}
        </div>
      </div>
    </>
  );
}