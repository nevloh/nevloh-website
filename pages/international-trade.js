// pages/international-trade.js
// TIER 1 SEO OPTIMIZED — Global Commodity Trading Page
// Target Keywords: EN590 diesel supplier, ULSD trading company, bulk diesel supplier,
// urea 46 fertilizer exporter, international fuel trading, LC-based commodity trading
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import {
  Globe, Shield, FileCheck, Building2, CheckCircle, ArrowRight,
  Landmark, Scale, Ship, Leaf, Fuel, Users, AlertCircle,
  BadgeCheck, Download, Target, ClipboardCheck, FileText,
  MapPin, ChevronDown, ChevronUp, Zap, Factory, Truck,
  Wheat, Building, Store, ExternalLink, BookOpen, Anchor,
  TrendingUp, Award, Clock, Phone, Mail
} from 'lucide-react';
import { useState } from 'react';
import Breadcrumbs, { breadcrumbConfigs } from '../components/Breadcrumbs';

// Glossary Term Component
const Term = ({ id, children }) => (
  <Link
    href={`/glossary#${id}`}
    className="text-blue-600 hover:text-blue-700 underline decoration-blue-300 decoration-dotted underline-offset-2 hover:decoration-solid transition-all cursor-help"
    title={`View definition of ${children}`}
  >
    {children}
  </Link>
);

// Abbreviation component
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

  // ═══════════════════════════════════════════════════════════════════════════
  // ENHANCED SCHEMA MARKUP FOR GLOBAL COMMODITY TRADING SEO
  // ═══════════════════════════════════════════════════════════════════════════

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": "https://www.nevloh.com/international-trade#organization",
    "name": "Nevloh LLC",
    "legalName": "Nevloh LLC",
    "description": "International commodities trading company specializing in EN590 diesel fuel and Urea 46% fertilizer supply to emerging markets worldwide. Bank-secured LC-at-sight settlement with SGS/Intertek inspection.",
    "url": "https://www.nevloh.com/international-trade",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.nevloh.com/images/logo.png",
      "width": 512,
      "height": 512
    },
    "image": "https://www.nevloh.com/images/og-international-trade.png",
    "foundingDate": "2022",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Casper",
      "addressRegion": "Wyoming",
      "postalCode": "82601",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-876-449-5172",
      "email": "trade@nevloh.com",
      "contactType": "Trade Inquiries",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Spanish"]
    },
    "areaServed": [
      { "@type": "Place", "name": "Worldwide" },
      { "@type": "Place", "name": "Caribbean Basin" },
      { "@type": "Place", "name": "Latin America" },
      { "@type": "Place", "name": "Africa" },
      { "@type": "Place", "name": "Middle East" },
      { "@type": "Place", "name": "Asia Pacific" }
    ],
    "knowsAbout": [
      "EN590 Diesel Fuel Trading",
      "ULSD Supply Chain",
      "Urea 46% Fertilizer Export",
      "Letter of Credit Settlement",
      "UCP 600 Compliance",
      "International Commodity Trading"
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "Nevloh Group",
      "url": "https://www.nevloh.com"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.nevloh.com/international-trade#webpage",
    "name": "EN590 Diesel Supplier | Urea 46% Fertilizer Exporter | Bulk Fuel Trading | Nevloh LLC",
    "url": "https://www.nevloh.com/international-trade",
    "description": "Bank-secured EN590 diesel and Urea 46% fertilizer supply for importers worldwide. LC-at-sight settlement, SGS/Intertek inspection, UCP 600 compliant.",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Nevloh Group",
      "url": "https://www.nevloh.com"
    },
    "about": { "@id": "https://www.nevloh.com/international-trade#organization" },
    "breadcrumb": { "@id": "https://www.nevloh.com/international-trade#breadcrumb" },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString().split('T')[0],
    "keywords": "EN590 diesel supplier, ULSD trading company, bulk diesel supplier, urea 46 fertilizer exporter, international commodity trading, LC settlement"
  };

  const tradingServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.nevloh.com/international-trade#tradingservice",
    "name": "International Commodities Trading Services",
    "serviceType": "Commodity Trading",
    "description": "Structured procurement and settlement for EN590 Diesel and Urea 46% Nitrogen Fertilizer via bank-secured instruments. Serving importers worldwide.",
    "provider": { "@id": "https://www.nevloh.com/international-trade#organization" },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Commodity Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "EN590 Ultra Low Sulfur Diesel (ULSD)",
            "description": "Premium grade EN590 10ppm diesel fuel meeting European environmental standards"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Urea 46% Nitrogen Fertilizer",
            "description": "Agricultural grade urea fertilizer in granular and prilled forms"
          }
        }
      ]
    }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // FIXED PRODUCT SCHEMAS WITH AGGREGATEOFFER PRICING
  // Resolves Google Search Console error: "Missing field 'price' (in 'offers')"
  // Uses AggregateOffer with lowPrice/highPrice for variable commodity pricing
  // ═══════════════════════════════════════════════════════════════════════════

  const dieselProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://www.nevloh.com/international-trade#en590diesel",
    "name": "EN590 Ultra Low Sulfur Diesel (ULSD) 10ppm",
    "description": "Premium grade EN590 diesel fuel with ultra-low sulfur content (≤10 ppm) meeting European environmental standards. Available for export worldwide. Pricing based on Platts benchmarks.",
    "brand": { "@type": "Brand", "name": "Nevloh LLC" },
    "category": "Petroleum Products > Diesel Fuel",
    "sku": "EN590-ULSD-10PPM",
    "mpn": "EN590-10PPM",
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Sulfur Content", "value": "≤10 ppm" },
      { "@type": "PropertyValue", "name": "Specification", "value": "EN590 / ASTM D975" },
      { "@type": "PropertyValue", "name": "Cetane Number", "value": "Minimum 51" },
      { "@type": "PropertyValue", "name": "Density", "value": "820-845 kg/m³ at 15°C" },
      { "@type": "PropertyValue", "name": "Minimum Order", "value": "2,000 MT" }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "lowPrice": 500,
      "highPrice": 950,
      "offerCount": 1,
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      "seller": {
        "@type": "Organization",
        "name": "Nevloh LLC",
        "url": "https://www.nevloh.com/international-trade"
      },
      "url": "https://www.nevloh.com/contact/international"
    }
  };

  const ureaProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://www.nevloh.com/international-trade#urea46",
    "name": "Urea 46% Nitrogen Fertilizer",
    "description": "High-quality agricultural grade urea with 46% nitrogen content. Available in granular and prilled forms for export worldwide. Market-based pricing.",
    "brand": { "@type": "Brand", "name": "Nevloh LLC" },
    "category": "Agricultural Products > Fertilizers",
    "sku": "UREA-46-AG",
    "mpn": "UREA46-GRAN",
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Nitrogen Content", "value": "46%" },
      { "@type": "PropertyValue", "name": "Form", "value": "Granular / Prilled" },
      { "@type": "PropertyValue", "name": "Grade", "value": "Agricultural" }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "lowPrice": 280,
      "highPrice": 550,
      "offerCount": 1,
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      "seller": {
        "@type": "Organization",
        "name": "Nevloh LLC",
        "url": "https://www.nevloh.com/international-trade"
      },
      "url": "https://www.nevloh.com/contact/international"
    }
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Buy EN590 Diesel or Urea 46 via Letter of Credit",
    "description": "Step-by-step guide to purchasing bulk diesel fuel or fertilizer through bank-secured LC-at-sight settlement with Nevloh LLC. Available to qualified importers worldwide.",
    "totalTime": "P14D",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Submit Trade Inquiry", "text": "Submit requirements including volume, destination port, and LC capability.", "url": "https://www.nevloh.com/contact/international" },
      { "@type": "HowToStep", "position": 2, "name": "Negotiate Terms & Sign SPA", "text": "Agree on pricing, delivery terms, and execute Sales & Purchase Agreement." },
      { "@type": "HowToStep", "position": 3, "name": "Issue Irrevocable LC", "text": "Buyer's bank issues compliant irrevocable Letter of Credit at sight per UCP 600." },
      { "@type": "HowToStep", "position": 4, "name": "Product Inspection", "text": "SGS or Intertek verifies product quality and quantity at loading port." },
      { "@type": "HowToStep", "position": 5, "name": "Settlement", "text": "Documents presented to LC issuing bank for payment. Buyer receives cargo." }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is EN590 diesel and why is it important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EN590 is the European standard for ultra-low sulfur diesel (ULSD) with maximum sulfur content of 10 ppm. It's required for modern diesel engines with advanced emission control systems and is the global benchmark for international diesel trade. Nevloh LLC supplies EN590-compliant diesel to importers worldwide via LC-at-sight settlement."
        }
      },
      {
        "@type": "Question",
        "name": "Do you require prepayment for international diesel or fertilizer orders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Nevloh LLC never requests prepayment, advance fees, or deposits. All transactions are executed through irrevocable Letters of Credit at sight, the international standard for commodity trading. Payment is bank-to-bank upon presentation of compliant shipping documents."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum order quantity for EN590 diesel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimum quantities for EN590 diesel typically align with vessel parcel economics, starting at 2,000 metric tons (MT). For Urea 46% fertilizer, smaller bagged volumes may be considered depending on consolidation opportunities and destination."
        }
      },
      {
        "@type": "Question",
        "name": "Which ports and regions do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nevloh LLC serves importers worldwide with particular expertise in the Caribbean, Latin America, Africa, and emerging markets. We deliver to any accessible deep-water port with viable route economics."
        }
      },
      {
        "@type": "Question",
        "name": "What LC terms are required for commodity trading?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We require irrevocable Documentary Letters of Credit at sight, issued by acceptable banks, compliant with UCP 600 and ISBP 745 standards. LC confirmation may be required depending on the issuing bank's credit standing."
        }
      }
    ]
  };

  // Trade execution standards
  const tradeFeatures = [
    { icon: Landmark, title: "Irrevocable LCs", description: "Structured under UCP 600 standards.", termId: "lc" },
    { icon: Shield, title: "SGS/Intertek Verified", description: "Mandatory load-port inspection.", termId: "sgs" },
    { icon: FileCheck, title: "ISBP 745 Compliant", description: "Banking-grade documentation.", termId: "isbp-745" },
    { icon: Scale, title: "Standardized SPAs", description: "Balanced international terms.", termId: "spa" }
  ];

  // Who We Serve
  const whoWeServe = [
    { icon: Building, label: "Licensed Importers", description: "Registered fuel and fertilizer import companies with established banking relationships" },
    { icon: Zap, label: "Power Utilities & IPPs", description: "Generator fuel wholesalers and Independent Power Producers worldwide" },
    { icon: Building2, label: "Government & Corporate", description: "State petroleum agencies and large corporate off-takers globally" },
    { icon: Wheat, label: "Agricultural Sector", description: "Agricultural co-operatives, large farms, and fertilizer distributors" }
  ];

  // Products
  const products = [
    {
      icon: Fuel,
      name: "EN590 Ultra Low Sulfur Diesel",
      specification: "EN590 10ppm / ULSD",
      specTermId: "en590",
      description: "Premium grade EN590 diesel fuel with ≤10 ppm sulfur meeting European environmental standards. Certified for modern engines with emission control systems. Available for export worldwide.",
      features: [
        { text: "EN590 specification compliant", termId: "en590" },
        { text: "Ultra Low Sulfur (≤10 ppm)", termId: "ppm" },
        { text: "Cetane number minimum 51", termId: null },
        { text: "Density 820-845 kg/m³", termId: null },
        { text: "ASTM D975 equivalent", termId: null },
        { text: "SGS/Intertek certified", termId: "sgs" }
      ],
      useCases: [
        { icon: Zap, label: "Power Generation" },
        { icon: Truck, label: "Fleet & Logistics" },
        { icon: Factory, label: "Industrial" },
        { icon: Ship, label: "Marine" }
      ],
      minimumVolume: "2,000+ MT",
      deliveryTerms: ["CIF", "CFR", "FOB"]
    },
    {
      icon: Leaf,
      name: "Urea 46% Nitrogen Fertilizer",
      specification: "Granular / Prilled",
      specTermId: "urea-46",
      description: "High-quality agricultural grade urea with 46% nitrogen content. Available in granular and prilled forms for optimal soil application. Export to all major agricultural markets.",
      features: [
        { text: "46% nitrogen content", termId: "urea-46" },
        { text: "Granular and prilled available", termId: "granular" },
        { text: "Agricultural grade certified", termId: null },
        { text: "Bulk and 50kg bags", termId: null },
        { text: "Low biuret content", termId: null },
        { text: "Quality guaranteed", termId: null }
      ],
      useCases: [
        { icon: Wheat, label: "Row Crops" },
        { icon: Store, label: "Wholesale" },
        { icon: Users, label: "Co-ops" },
        { icon: Target, label: "Food Security" }
      ],
      minimumVolume: "Flexible",
      deliveryTerms: ["CIF", "CFR", "FOB"]
    }
  ];

  // Why Nevloh
  const whyNevloh = [
    { icon: ClipboardCheck, title: "Execution Discipline", description: "No shipment proceeds without a compliant LC. Bank-controlled execution protects all parties." },
    { icon: Shield, title: "Inspection-First Protocol", description: "Mandatory SGS or Intertek verification at load port confirms quality before document presentation." },
    { icon: FileText, title: "Documentation Control", description: "ISBP 745-compliant document preparation minimizes discrepancy risk and accelerates settlement." },
    { icon: MapPin, title: "Global Market Access", description: "Established logistics networks serving emerging markets across multiple continents." }
  ];

  // Market Statistics
  const marketStats = [
    { value: "Global", label: "Market Reach", icon: Globe },
    { value: "2,000+ MT", label: "Min. Diesel Volume", icon: Ship },
    { value: "100%", label: "LC-Secured", icon: Shield },
    { value: "SGS/Intertek", label: "Inspection Standard", icon: Award }
  ];

  // Qualification requirements
  const qualificationRequirements = [
    "Licensed importer status in destination country",
    "Demonstrated LC capability through established banking relationships",
    "Regulatory compliance with local import requirements",
    "Corporate entity with verifiable trade references",
    "Minimum volume commitments aligned with vessel economics",
    "KYC/AML compliance documentation"
  ];

  // FAQs
  const faqs = [
    {
      question: "What is EN590 diesel and why choose it?",
      answer: "EN590 is the European standard for ultra-low sulfur diesel (ULSD) with ≤10 ppm sulfur content. It's the international benchmark for automotive and industrial diesel, required for modern engines with advanced emission control systems. Nevloh LLC supplies EN590-compliant diesel to importers worldwide via bank-secured LC-at-sight settlement."
    },
    {
      question: "Do you require prepayment or advance fees?",
      answer: "No. Nevloh LLC never requests prepayment, advance fees, or deposits. All transactions are executed through irrevocable Letters of Credit at sight—the international standard for commodity trading. If you receive any request for upfront payment claiming to be from Nevloh, report it immediately as fraudulent."
    },
    {
      question: "What is the minimum order quantity?",
      answer: "For EN590 diesel, minimums typically start at 2,000+ metric tons to align with vessel parcel economics. For Urea 46% fertilizer, we offer volume flexibility depending on bagging requirements and destination port consolidation opportunities."
    },
    {
      question: "What inspection standards do you use?",
      answer: "All shipments undergo mandatory quality and quantity inspection at load port by internationally recognized agencies—typically SGS or Intertek. The inspection certificate forms part of the LC document presentation."
    },
    {
      question: "What LC terms are required?",
      answer: "We require irrevocable Documentary Letters of Credit at sight, issued by acceptable banks, compliant with UCP 600 and ISBP 745 standards. LC confirmation may be required depending on the issuing bank's credit standing."
    },
    {
      question: "Which regions and ports do you serve?",
      answer: "Nevloh LLC serves importers worldwide with particular expertise in the Caribbean, Latin America, Africa, Middle East, and Asia Pacific. We deliver to any accessible deep-water port where route economics are viable."
    },
    {
      question: "Can you provide an LC template?",
      answer: "Yes. We provide compliant LC templates your bank can reference. This reduces back-and-forth, minimizes discrepancies, and speeds up transaction setup significantly."
    },
    {
      question: "What makes Nevloh different from other diesel suppliers?",
      answer: "Nevloh LLC differentiates through execution discipline: 100% LC-secured transactions, mandatory third-party inspection, ISBP 745-compliant documentation, and a global market presence with particular strength in emerging markets. We prioritize transaction certainty over volume."
    }
  ];

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <>
      <Head>
        {/* TIER 1 SEO OPTIMIZED META TAGS */}
        <title>EN590 Diesel Supplier | Urea 46% Fertilizer Exporter | Bulk Fuel Trading | Nevloh LLC</title>

        <meta
          name="description"
          content="EN590 diesel supplier & Urea 46% fertilizer exporter. Bank-secured LC-at-sight settlement, SGS/Intertek inspection, UCP 600 compliant. Bulk fuel trading for importers worldwide. Request a quote."
        />

        <meta
          name="keywords"
          content="EN590 diesel supplier, ULSD trading company, bulk diesel supplier, EN590 10ppm wholesale, ultra low sulfur diesel, urea 46 fertilizer supplier, nitrogen fertilizer exporter, diesel fuel exporter, international commodities trading, LC commodity trading, petroleum trading company, bulk fuel trading, diesel wholesale worldwide, FOB diesel supplier, CIF fuel trading, oil trading company"
        />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Nevloh LLC" />
        <meta name="geo.region" content="US-WY" />
        <meta name="geo.placename" content="Casper, Wyoming" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="EN590 Diesel Supplier | Bulk Fuel & Fertilizer Trading | Nevloh LLC" />
        <meta property="og:description" content="International commodities trading company. EN590 diesel, ULSD, Urea 46% fertilizer. LC-at-sight settlement, SGS inspection, UCP 600 compliant. Serving importers worldwide." />
        <meta property="og:url" content="https://www.nevloh.com/international-trade" />
        <meta property="og:image" content="https://www.nevloh.com/images/og-international-trade.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Nevloh Group" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EN590 Diesel Supplier | Urea 46% Exporter | Nevloh LLC" />
        <meta name="twitter:description" content="Bank-secured commodity trading for importers worldwide. LC-at-sight, SGS inspection, no prepayment required." />
        <meta name="twitter:image" content="https://www.nevloh.com/images/og-international-trade.png" />

        <link rel="canonical" href="https://www.nevloh.com/international-trade" />
        <link rel="alternate" hrefLang="en" href="https://www.nevloh.com/international-trade" />
        <link rel="alternate" hrefLang="x-default" href="https://www.nevloh.com/international-trade" />
      </Head>

      {/* STRUCTURED DATA */}
      <Script id="organization-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="webpage-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <Script id="trading-service-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tradingServiceSchema) }} />
      <Script id="diesel-product-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dieselProductSchema) }} />
      <Script id="urea-product-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ureaProductSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="howto-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="faq-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#f8fafc] min-h-screen font-sans text-slate-900">
        {/* Announcement Bar */}
        <div className="bg-slate-900 text-white py-2.5 px-4 text-center text-xs font-medium tracking-widest uppercase">
          <span className="opacity-70">Trade Compliance:</span>{' '}
          <Abbr id="ucp-600" full="Uniform Customs and Practice for Documentary Credits">UCP 600</Abbr>
          {' & '}
          <Abbr id="isbp-745" full="International Standard Banking Practice">ISBP 745</Abbr>
          {' '}Certified
        </div>

        <div className="pt-20">
          {/* Breadcrumbs */}
          <div className="relative z-40 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
              <Breadcrumbs items={breadcrumbConfigs.internationalTrade} />
            </div>
          </div>

          {/* HERO SECTION */}
          <section className="relative pt-10 pb-20 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23475569' stroke-width='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}} aria-hidden="true" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-3/5">
                  <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
                    <Globe size={14} aria-hidden="true" />
                    <span>International Commodities Trading</span>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
                    EN590 Diesel & Urea 46% <br />
                    <span className="text-blue-600">Global Commodity Trading</span>
                  </h1>

                  <p className="text-lg md:text-xl text-slate-600 mb-6 leading-relaxed max-w-2xl">
                    Nevloh LLC is an international commodities trading company specializing in
                    bulk <Term id="en590">EN590 diesel fuel</Term> and <Term id="urea-46">Urea 46% nitrogen fertilizer</Term> supply
                    to importers worldwide.
                  </p>

                  <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-2xl">
                    We utilize <Term id="lc-at-sight">Letter of Credit at sight</Term> settlement to eliminate
                    <Term id="counterparty"> counterparty risk</Term>, with mandatory <Term id="sgs">SGS</Term> or
                    <Term id="intertek"> Intertek</Term> inspection at load port.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact/international" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-200 flex items-center group">
                      Request Trade Quote
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                    <a href="/docs/Nevloh_LC_Checklist.pdf" target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-200 hover:border-blue-300 text-slate-700 px-8 py-4 rounded-xl font-bold transition-all flex items-center">
                      <Download className="mr-2 text-blue-600" size={18} />
                      LC Requirements PDF
                    </a>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
                    <span className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" />No Prepayment Required</span>
                    <span className="flex items-center gap-2"><Shield size={16} className="text-blue-500" />100% LC-Secured</span>
                    <span className="flex items-center gap-2"><Award size={16} className="text-amber-500" />SGS/Intertek Verified</span>
                  </div>

                  <p className="mt-6 text-sm text-slate-500">
                    <BookOpen size={14} className="inline mr-1" />
                    New to commodity trading?{' '}
                    <Link href="/glossary" className="text-blue-600 hover:underline">View our trade glossary →</Link>
                  </p>
                </div>

                {/* Trade Standards Card */}
                <div className="lg:w-2/5 w-full">
                  <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 relative">
                    <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-2xl shadow-lg">
                      <Shield size={24} />
                    </div>
                    <h3 className="text-sm uppercase tracking-widest font-bold text-slate-400 mb-6">Trade Execution Standards</h3>
                    <div className="space-y-6">
                      {tradeFeatures.map((f, i) => (
                        <Link key={i} href={`/glossary#${f.termId}`} className="flex items-start group cursor-pointer">
                          <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mr-4 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                            <f.icon size={18} className="text-slate-600 group-hover:text-blue-600" />
                          </div>
                          <div>
                            <h4 className="text-slate-900 font-bold text-sm group-hover:text-blue-600 transition-colors">{f.title}</h4>
                            <p className="text-slate-500 text-xs mt-1">{f.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-100">
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-3">Trade Desk Direct</p>
                      <a href="tel:+18764495172" className="flex items-center gap-2 text-blue-600 font-bold hover:underline">
                        <Phone size={14} />+1 (876) 449-5172
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Market Statistics */}
          <section className="bg-slate-900 py-12">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {marketStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon size={24} className="mx-auto mb-3 text-blue-400" />
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Anti-Fraud Banner */}
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-700 flex-shrink-0">
                  <AlertCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-amber-900">Anti-Fraud Notice</h4>
                  <p className="text-amber-800 text-sm">
                    Nevloh LLC <strong>never</strong> requests advance fees or prepayments. All payments are bank-to-bank via <Term id="lc-at-sight">irrevocable LC at sight</Term>.
                  </p>
                </div>
              </div>
              <Link href="/contact/international" className="text-amber-900 font-bold text-sm underline decoration-amber-300 underline-offset-4 whitespace-nowrap">Report suspicious activity →</Link>
            </div>
          </div>

          {/* WHO WE SERVE */}
          <section className="py-20 bg-white" id="markets">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Target Markets</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">Who We Serve</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">We partner with established organizations worldwide that have the banking relationships and regulatory standing to execute LC-based commodity trade.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {whoWeServe.map((segment, index) => (
                  <div key={index} className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                      <segment.icon size={28} className="text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{segment.label}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{segment.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="font-bold text-slate-900 text-lg mb-6 text-center">Global Markets & Regions Served</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {["Caribbean Basin", "Latin America", "West Africa", "East Africa", "Middle East", "South Asia", "Southeast Asia", "Pacific Islands", "Central America", "Emerging Markets"].map((market, i) => (
                    <span key={i} className="bg-white px-4 py-2 rounded-full text-slate-700 text-sm font-medium border border-slate-200">{market}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* PRODUCT SCOPE */}
          <section className="py-20" id="products">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Commodity Products</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">EN590 Diesel & Urea 46% Supply</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">Focused product range ensures reliable global supply chains and consistent quality.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {products.map((product, index) => (
                  <article key={index} className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-start mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-5 flex-shrink-0 shadow-lg shadow-blue-200">
                        <product.icon size={32} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{product.name}</h3>
                        <Link href={`/glossary#${product.specTermId}`} className="text-blue-600 font-mono text-sm tracking-wide hover:underline">{product.specification}</Link>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-8 leading-relaxed">{product.description}</p>

                    <div className="mb-8">
                      <h4 className="font-bold text-slate-800 mb-4 text-xs uppercase tracking-widest">Technical Specifications</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {product.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center text-slate-600 text-sm">
                            <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                            {feature.termId ? <Term id={feature.termId}>{feature.text}</Term> : feature.text}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-bold text-slate-800 mb-4 text-xs uppercase tracking-widest">Applications</h4>
                      <div className="flex flex-wrap gap-3">
                        {product.useCases.map((useCase, uIndex) => (
                          <span key={uIndex} className="inline-flex items-center bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                            <useCase.icon size={14} className="mr-2 text-slate-500" />{useCase.label}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-6 text-sm">
                      <div><span className="text-slate-400 block text-xs uppercase tracking-wider">Min. Volume</span><span className="text-slate-900 font-bold">{product.minimumVolume}</span></div>
                      <div><span className="text-slate-400 block text-xs uppercase tracking-wider">Delivery Terms</span><span className="text-slate-900 font-bold">{product.deliveryTerms.join(" / ")}</span></div>
                      <div><span className="text-slate-400 block text-xs uppercase tracking-wider">Payment</span><span className="text-slate-900 font-bold">LC at Sight</span></div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* LOADING PORTS & DELIVERY */}
          <section className="py-16 bg-slate-50" id="ports">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Global Logistics</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-4">Loading Ports & Delivery Regions</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">Access to major petroleum and fertilizer loading terminals worldwide.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Loading Ports */}
                <div className="bg-white rounded-2xl p-8 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center">
                    <Anchor size={20} className="text-blue-600 mr-2" />
                    Primary Loading Ports
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {["Rotterdam, Netherlands", "Fujairah, UAE", "Singapore", "Houston, USA", "Jurong, Singapore", "Antwerp, Belgium", "Amsterdam, Netherlands", "Malta"].map((port, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                        {port}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivery Regions */}
                <div className="bg-white rounded-2xl p-8 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center">
                    <Globe size={20} className="text-blue-600 mr-2" />
                    Delivery Destinations
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {["Caribbean Basin", "West & East Africa", "Latin America", "Middle East", "South Asia", "Southeast Asia", "Pacific Islands", "Central America"].map((region, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                        {region}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-slate-500 text-sm">Delivery terms: <strong className="text-slate-700">FOB</strong> (Free On Board) | <strong className="text-slate-700">CFR</strong> (Cost and Freight) | <strong className="text-slate-700">CIF</strong> (Cost, Insurance & Freight)</p>
              </div>
            </div>
          </section>

          {/* WHY NEVLOH */}
          <section className="py-20 bg-white" id="why-nevloh">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Our Edge</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">Why Trade with Nevloh LLC</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">Our approach prioritizes execution certainty and risk mitigation.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyNevloh.map((item, index) => (
                  <div key={index} className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                      <item.icon size={28} className="text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TRANSACTION PROCESS */}
          <section className="py-20" id="process">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Trade Execution Flow</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">How to Buy EN590 Diesel or Urea 46 via LC</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">A disciplined, bank-controlled execution flow that protects all parties.</p>
              </div>

              <div className="relative">
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 transform -translate-y-1/2 rounded-full" />
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                  {[
                    { step: "01", title: "Submit Inquiry", description: "Volume, destination, LC capability" },
                    { step: "02", title: "Negotiate SPA", description: "Agree terms, execute agreement" },
                    { step: "03", title: "Issue LC", description: "Irrevocable LC at sight per UCP 600" },
                    { step: "04", title: "Load & Inspect", description: "SGS/Intertek verification" },
                    { step: "05", title: "Settlement", description: "Documents to bank for payment" }
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow h-full">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg shadow-blue-200">
                          <span className="text-white font-bold text-lg">{item.step}</span>
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full text-blue-700 font-medium">
                  <Clock size={18} /><span>Typical timeline: 10-14 business days from LC issuance to loading</span>
                </div>
              </div>
            </div>
          </section>

          {/* BILATERAL STRUCTURE */}
          <section className="py-24 bg-slate-900 relative overflow-hidden" id="structure">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Corporate Structure</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">Bilateral Entity Framework</h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">Strict legal separation between international trading and regional distribution.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-0 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
                <div className="p-10 md:p-16 bg-slate-800/50 backdrop-blur-sm border-b lg:border-b-0 lg:border-r border-slate-700">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg"><Globe size={28} className="text-white" /></div>
                    <div><h3 className="text-2xl font-bold text-white">Nevloh LLC</h3><p className="text-blue-400 font-mono text-sm tracking-widest">CASPER, WYOMING — USA</p></div>
                  </div>
                  <p className="text-slate-400 mb-8">Primary contracting entity for <strong className="text-white">International Commodities Trading</strong>. Manages global banking, LC processing, and worldwide logistics.</p>
                  <div className="grid grid-cols-2 gap-4">
                    {["EN590 Diesel Export", "Urea 46% Supply", "LC Settlement", "Global Logistics"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-300 text-sm border-l-2 border-blue-600 pl-3">{item}</div>
                    ))}
                  </div>
                </div>

                <div className="p-10 md:p-16 bg-slate-900/80 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg"><MapPin size={28} className="text-white" /></div>
                    <div><h3 className="text-2xl font-bold text-white">Nevloh Limited</h3><p className="text-emerald-400 font-mono text-sm tracking-widest">SPANISH TOWN, JAMAICA</p></div>
                  </div>
                  <p className="text-slate-400 mb-8"><strong className="text-white">Regional Operations Arm</strong>. Local distribution, fleet refueling, and parish-level logistics within Jamaica.</p>
                  <div className="grid grid-cols-2 gap-4">
                    {["Local Fuel Haulage", "Fleet Refuelling", "Generator Supply", "24/7 Emergency"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-300 text-sm border-l-2 border-emerald-600 pl-3">{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* QUALIFICATION */}
          <section id="qualification" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Buyer Requirements</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">Counterparty Qualification</h2>
                  <p className="text-xl text-slate-600 mb-8">We work with qualified counterparties worldwide who have banking relationships and regulatory standing to execute structured trade.</p>

                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-xl text-blue-600 flex-shrink-0"><FileText size={24} /></div>
                      <div><h4 className="font-bold text-blue-900">New to LC-Based Trading?</h4><p className="text-blue-800 text-sm mt-1">We provide compliant LC templates your bank can reference to speed up issuance.</p></div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact/international" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-200 flex items-center group">
                      Submit Trade Inquiry<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                    <a href="/docs/Nevloh_Buyer_Checklist.pdf" target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-200 hover:border-blue-300 text-slate-700 px-8 py-4 rounded-xl font-bold transition-all flex items-center">
                      <Download className="mr-2 text-blue-600" size={18} />Buyer Checklist
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-200 shadow-xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center"><BadgeCheck size={28} className="text-blue-600 mr-3" />Qualification Criteria</h3>
                  <ul className="space-y-5">
                    {qualificationRequirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0"><CheckCircle className="text-green-600" size={14} /></div>
                        <span className="text-slate-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20" id="faq">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Common Questions</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">EN590 Diesel & Urea 46 Trading FAQ</h2>
                <p className="text-xl text-slate-600">Answers to frequently asked questions about international commodity trading with Nevloh LLC.</p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors" aria-expanded={openFaq === index}>
                      <span className="font-bold text-slate-900 pr-4">{faq.question}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === index ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                        {openFaq === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </button>
                    {openFaq === index && <div className="px-6 pb-6"><p className="text-slate-600 leading-relaxed">{faq.answer}</p></div>}
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
                <BookOpen size={24} className="mx-auto text-blue-600 mb-3" />
                <h4 className="font-bold text-blue-900 mb-2">Need Help with Trade Terminology?</h4>
                <p className="text-blue-800 text-sm mb-4">Our glossary explains LC, UCP 600, ISBP 745, SGS, and other international trade terms.</p>
                <Link href="/glossary" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">View Trade Glossary<ArrowRight size={16} className="ml-1" /></Link>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Source EN590 Diesel or Urea 46?</h2>
              <p className="text-xl text-slate-400 mb-10">If your organization meets the qualification criteria and requires bank-secured commodity supply, we welcome your trade inquiry from anywhere in the world.</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact/international" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-xl font-bold transition-all shadow-xl shadow-blue-900/30 flex items-center justify-center group">
                  Request Trade Quote<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <a href="/docs/Nevloh_LC_Checklist.pdf" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold transition-all flex items-center justify-center">
                  <Download className="mr-2" size={18} />Download LC Checklist
                </a>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-400">
                <a href="tel:+18764495172" className="flex items-center gap-2 hover:text-white transition-colors"><Phone size={18} />+1 (876) 449-5172</a>
                <a href="mailto:trade@nevloh.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={18} />trade@nevloh.com</a>
              </div>

              <p className="text-slate-500 text-sm mt-10">
                For local fuel delivery services in Jamaica, visit <Link href="/services" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">Nevloh Limited Services</Link>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}