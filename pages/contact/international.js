// pages/contact/international.js
// Tier 1 Institutional — Nevloh LLC Wyoming Trade Desk Intake
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import {
  Globe,
  ArrowLeft,
  ChevronRight,
  CheckCircle,
  User,
  Mail,
  Phone,
  Building2,
  Ship,
  FileCheck,
  Landmark,
  Shield,
  AlertCircle,
  ArrowRight,
  FileText,
  Search,
  Scale,
  Fuel,
  Zap
} from 'lucide-react';

export default function ContactInternational() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submissionMessage, setSubmissionMessage] = useState('');

  // Anti-spam: Track form load time
  const formLoadTime = useRef(Date.now());
  const [turnstileToken, setTurnstileToken] = useState(null);

  const [formData, setFormData] = useState({
    companyName: '',
    country: '',
    contactName: '',
    email: '',
    phone: '',
    productInterest: [],
    importLicenseStatus: '',
    portOfDestination: '',
    lcCapability: '',
    estimatedMonthlyVolume: '',
    additionalInfo: '',
    // Anti-spam: Honeypot field
    website: ''
  });

  // Set up Turnstile callback
  useEffect(() => {
    window.setTurnstileToken = (token) => {
      setTurnstileToken(token);
    };

    formLoadTime.current = Date.now();

    return () => {
      delete window.setTurnstileToken;
    };
  }, []);

  // Schema - Organization focused on international
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.nevloh.com/#nevloh-llc",
    "name": "Nevloh LLC",
    "legalName": "Nevloh LLC",
    "description": "International commodities trading company specializing in LC-secured diesel fuel and fertilizer supply to Caribbean and emerging markets.",
    "url": "https://www.nevloh.com/contact/international",
    "logo": "https://www.nevloh.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Wyoming",
      "addressCountry": "US"
    },
    "areaServed": [
      { "@type": "Place", "name": "Caribbean Basin" },
      { "@type": "Place", "name": "Central America" },
      { "@type": "Place", "name": "South America" }
    ],
    "knowsAbout": [
      "International Commodities Trading",
      "Letter of Credit Settlement",
      "EN590 Diesel Supply",
      "Urea Fertilizer Export"
    ]
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "International Trade Inquiry | Nevloh LLC",
    "description": "Submit a trade inquiry for bulk diesel or fertilizer supply. LC-secured settlement only.",
    "url": "https://www.nevloh.com/contact/international",
    "mainEntity": { "@id": "https://www.nevloh.com/#nevloh-llc" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nevloh.com" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.nevloh.com/contact" },
      { "@type": "ListItem", "position": 3, "name": "International Trade", "item": "https://www.nevloh.com/contact/international" }
    ]
  };

  // Trade Pipeline Steps
  const pipelineSteps = [
    { icon: FileText, title: 'Document Review', desc: '24–48 hours' },
    { icon: Search, title: 'KYC Verification', desc: 'If qualified' },
    { icon: Scale, title: 'Term Negotiation', desc: 'SPA drafted' },
    { icon: Shield, title: 'LC Issuance', desc: 'Bank-to-bank' }
  ];

  // Form options
  const intlProductOptions = [
    { value: 'en590_diesel', label: 'EN590 / Ultra Low Sulfur Diesel (ULSD)' },
    { value: 'urea_46', label: 'Urea 46% Nitrogen Fertilizer' }
  ];

  const importLicenseOptions = [
    { value: 'licensed', label: 'Licensed Importer' },
    { value: 'pending', label: 'License Pending' },
    { value: 'not_licensed', label: 'Not Currently Licensed' },
    { value: 'via_agent', label: 'Importing via Licensed Agent' }
  ];

  const lcCapabilityOptions = [
    { value: 'yes_established', label: 'Yes — Established Banking Relationship' },
    { value: 'yes_new', label: 'Yes — Can Establish LC' },
    { value: 'no', label: 'No — Require Alternative Terms' },
    { value: 'discuss', label: 'Prefer to Discuss' }
  ];

  const intlVolumeOptions = [
    { value: 'under_500mt', label: 'Under 500 MT' },
    { value: '500_2000mt', label: '500 – 2,000 MT' },
    { value: '2000_5000mt', label: '2,000 – 5,000 MT' },
    { value: '5000_10000mt', label: '5,000 – 10,000 MT' },
    { value: 'over_10000mt', label: 'Over 10,000 MT' }
  ];

  const caribbeanCountries = [
    'Antigua and Barbuda', 'Bahamas', 'Barbados', 'Belize', 'Cuba',
    'Dominica', 'Dominican Republic', 'Grenada', 'Guyana', 'Haiti',
    'Jamaica', 'Saint Kitts and Nevis', 'Saint Lucia',
    'Saint Vincent and the Grenadines', 'Suriname', 'Trinidad and Tobago',
    'Other Caribbean', 'Central America', 'South America', 'Other Region'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProductInterestChange = (product) => {
    setFormData(prev => ({
      ...prev,
      productInterest: prev.productInterest.includes(product)
        ? prev.productInterest.filter(p => p !== product)
        : [...prev.productInterest, product]
    }));
  };

  // Anti-spam validation
  const validateAntiSpam = () => {
    if (formData.website) {
      console.log('Spam detected: honeypot filled');
      return { valid: false, reason: 'spam_honeypot' };
    }

    const timeElapsed = Date.now() - formLoadTime.current;
    if (timeElapsed < 3000) {
      console.log('Spam detected: submitted too fast', timeElapsed);
      return { valid: false, reason: 'spam_too_fast' };
    }

    if (typeof window !== 'undefined' && window.turnstile && !turnstileToken) {
      return { valid: false, reason: 'captcha_required' };
    }

    return { valid: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Anti-spam validation
    const spamCheck = validateAntiSpam();
    if (!spamCheck.valid) {
      if (spamCheck.reason === 'captcha_required') {
        setSubmitStatus('error');
        setSubmissionMessage('Please complete the security verification.');
      } else {
        // Silently reject spam — show fake success
        setSubmitStatus('success');
        setSubmissionMessage('Your international trade inquiry has been submitted. Our team will review your requirements and respond within 48 business hours.');
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const productLabels = {
        'en590_diesel': 'EN590 / Ultra Low Sulfur Diesel (ULSD)',
        'urea_46': 'Urea 46% Nitrogen Fertilizer'
      };
      const productsFormatted = formData.productInterest.map(p => productLabels[p] || p).join(', ');

      const lcLabels = {
        'yes_established': 'Yes — Established Banking Relationship',
        'yes_new': 'Yes — Can Establish LC',
        'no': 'No — Require Alternative Terms',
        'discuss': 'Prefer to Discuss'
      };

      const licenseLabels = {
        'licensed': 'Licensed Importer',
        'pending': 'License Pending',
        'not_licensed': 'Not Currently Licensed',
        'via_agent': 'Importing via Licensed Agent'
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.contactName.split(' ')[0] || '',
          lastName: formData.contactName.split(' ').slice(1).join(' ') || '',
          email: formData.email,
          phone: formData.phone,
          companyName: formData.companyName,
          businessType: 'international_trade',
          source: 'contact_international_trade',
          // Anti-spam fields
          website: formData.website,
          turnstileToken: turnstileToken,
          message: `=== INTERNATIONAL TRADE INQUIRY ===

Company: ${formData.companyName}
Country: ${formData.country}
Contact: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone}

Products of Interest: ${productsFormatted}
Import License Status: ${licenseLabels[formData.importLicenseStatus] || formData.importLicenseStatus}
Port of Destination: ${formData.portOfDestination}
LC Capability: ${lcLabels[formData.lcCapability] || formData.lcCapability}
Estimated Monthly Volume: ${formData.estimatedMonthlyVolume}

Additional Information:
${formData.additionalInfo || 'None provided'}

---
International commodities trading via Nevloh LLC (Wyoming, USA).`
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitStatus('success');
        setSubmissionMessage('Your international trade inquiry has been submitted. Our team will review your requirements and respond within 48 business hours.');
      } else {
        throw new Error(data.error || 'Failed to submit inquiry');
      }
    } catch (err) {
      setSubmitStatus('error');
      setSubmissionMessage(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ─────────────────────────────────────────
  // Success Screen
  // ─────────────────────────────────────────
  if (submitStatus === 'success') {
    return (
      <>
        <Head>
          <title>Inquiry Received | Nevloh LLC</title>
          <meta name="robots" content="noindex, follow" />
        </Head>

        <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-900 selection:text-blue-200">
          {/* Institutional Bar */}
          <div className="bg-slate-900 text-white py-2.5 px-4 text-center border-b border-slate-800">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold">
              <span className="opacity-50">Nevloh LLC</span>
              <span className="mx-3 opacity-20">|</span>
              <span className="text-blue-400">Wyoming Trade Desk</span>
              <span className="mx-3 opacity-20">|</span>
              <span className="text-blue-400">Casper, WY</span>
            </p>
          </div>

          <div className="pt-20 py-16 px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-slate-900 rounded-[2rem] p-12 shadow-xl border border-slate-800">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle size={40} className="text-white" />
                </div>

                <h1 className="text-4xl font-black text-white tracking-tight mb-4">Inquiry Received.</h1>
                <p className="text-lg text-slate-400 mb-10 leading-relaxed">{submissionMessage}</p>

                {/* What Happens Next */}
                <div className="bg-slate-800/50 rounded-2xl p-6 mb-10 text-left border border-slate-700/50">
                  <h3 className="text-white font-black text-sm uppercase tracking-wider mb-5 flex items-center">
                    <FileText size={16} className="mr-2 text-blue-400" />
                    Trade Pipeline
                  </h3>
                  <div className="space-y-4">
                    {[
                      { step: '1', title: 'Document Review', time: '24–48 hours' },
                      { step: '2', title: 'Compliance & KYC Verification', time: 'If qualified' },
                      { step: '3', title: 'Term Sheet Discussion', time: 'Schedule call' },
                      { step: '4', title: 'LC Issuance & Execution', time: 'Upon agreement' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-black flex-shrink-0">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <span className="text-white text-sm font-medium">{item.title}</span>
                        </div>
                        <span className="text-slate-500 text-xs font-medium">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact/international"
                    onClick={() => {
                      setSubmitStatus(null);
                      setFormData({
                        companyName: '', country: '', contactName: '', email: '', phone: '',
                        productInterest: [], importLicenseStatus: '', portOfDestination: '',
                        lcCapability: '', estimatedMonthlyVolume: '', additionalInfo: '', website: ''
                      });
                    }}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-sm uppercase tracking-wider transition-all"
                  >
                    Submit Another Inquiry
                  </Link>
                  <Link href="/international-trade" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-black text-sm uppercase tracking-wider border border-slate-700 transition-all">
                    Our Process
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // ─────────────────────────────────────────
  // Main Page
  // ─────────────────────────────────────────
  return (
    <>
      <Head>
        <title>International Trade Inquiry | Nevloh LLC</title>
        <meta name="description" content="Submit a trade inquiry for bulk EN590 diesel or urea fertilizer supply. LC-secured settlement, SGS/Intertek inspection. Serving Caribbean and emerging markets." />
        <meta name="keywords" content="international trade inquiry, bulk diesel supply, urea fertilizer export, LC settlement, Caribbean commodities, Nevloh LLC" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="International Trade Inquiry | Nevloh LLC" />
        <meta property="og:description" content="Submit a trade inquiry for LC-secured diesel and fertilizer supply." />
        <meta property="og:url" content="https://www.nevloh.com/contact/international" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.nevloh.com/images/og-international-trade.png" />

        <link rel="canonical" href="https://www.nevloh.com/contact/international" />
      </Head>

      <Script id="organization-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="contact-page-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Cloudflare Turnstile */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async={true}
        defer={true}
      />

      <div className="bg-slate-950 min-h-screen font-sans selection:bg-blue-900 selection:text-blue-200">

        {/* ─── Institutional Header Bar ─── */}
        <div className="bg-slate-900 text-white py-2.5 px-4 text-center border-b border-slate-800">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold">
            <span className="opacity-50">Nevloh LLC</span>
            <span className="mx-3 opacity-20">|</span>
            <span className="text-blue-400">LC-Only Settlement</span>
            <span className="mx-3 opacity-20">|</span>
            <span className="text-amber-400">No Prepayments Accepted</span>
          </p>
        </div>

        <div className="pt-20">

          {/* ─── Refined Breadcrumbs ─── */}
          <nav className="max-w-7xl mx-auto px-6 mb-4" aria-label="Breadcrumb">
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <ChevronRight size={12} strokeWidth={3} />
              <Link href="/contact" className="hover:text-blue-400 transition-colors">Gateway</Link>
              <ChevronRight size={12} strokeWidth={3} />
              <span className="text-white">Trade Desk</span>
            </div>
          </nav>

          {/* ─── Page Header ─── */}
          <div className="max-w-7xl mx-auto px-6 py-8">
            <Link href="/contact" className="inline-flex items-center text-slate-500 hover:text-blue-400 mb-6 transition-colors text-sm font-semibold uppercase tracking-wider">
              <ArrowLeft size={16} className="mr-2" />
              Back to Gateway
            </Link>

            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/40">
                <Globe size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                  International <span className="text-blue-400">Trade.</span>
                </h1>
                <p className="text-blue-400 font-mono text-xs uppercase tracking-[0.15em] mt-1">Nevloh LLC — Casper, Wyoming</p>
              </div>
            </div>
          </div>

          {/* ─── Main Content ─── */}
          <div className="max-w-7xl mx-auto px-6 pb-24">
            <div className="grid lg:grid-cols-3 gap-8">

              {/* ─────────────────────────── */}
              {/* Sidebar                     */}
              {/* ─────────────────────────── */}
              <div className="lg:col-span-1">
                <div className="bg-slate-900 rounded-[2rem] p-8 md:p-10 border border-slate-800 sticky top-24">

                  {/* LC-Only Policy Banner */}
                  <div className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-4 mb-8">
                    <div className="flex items-start gap-3">
                      <AlertCircle size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-amber-200 font-bold text-xs uppercase tracking-wider">LC-Only Policy</p>
                        <p className="text-amber-300/70 text-xs mt-1.5 leading-relaxed">
                          We do not accept prepayments or advance fees. All settlement via irrevocable LC at sight.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact & Compliance */}
                  <h3 className="font-black text-white text-sm uppercase tracking-wider mb-6">Trade Parameters</h3>

                  <div className="space-y-6">
                    <a href="mailto:shamar@nevloh.com" className="flex items-start gap-4 group">
                      <div className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors border border-slate-700">
                        <Mail size={18} className="text-blue-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">Trade Inquiries</p>
                        <p className="text-blue-400 group-hover:underline text-sm font-medium">shamar@nevloh.com</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-700">
                        <FileCheck size={18} className="text-green-400" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">Compliance</p>
                        <p className="text-slate-400 text-sm font-medium">UCP 600 / ISBP 745</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-700">
                        <Shield size={18} className="text-purple-400" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">Inspection</p>
                        <p className="text-slate-400 text-sm font-medium">SGS / Intertek at load port</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-700">
                        <Landmark size={18} className="text-indigo-400" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">Settlement</p>
                        <p className="text-slate-400 text-sm font-medium">Irrevocable LC at Sight</p>
                      </div>
                    </div>
                  </div>

                  {/* Products */}
                  <div className="mt-10 pt-8 border-t border-slate-800">
                    <h4 className="font-black text-white text-xs uppercase tracking-wider mb-5">Products Traded</h4>
                    <div className="space-y-3.5">
                      <div className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                        <Fuel size={16} className="text-blue-400 flex-shrink-0" />
                        EN590 / ULSD Diesel
                      </div>
                      <div className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                        <Zap size={16} className="text-green-400 flex-shrink-0" />
                        Urea 46% Nitrogen
                      </div>
                    </div>
                  </div>

                  {/* Learn More */}
                  <Link href="/international-trade"
                    className="mt-8 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-3.5 px-5 rounded-xl text-xs font-black uppercase tracking-wider transition-colors border border-slate-700">
                    Our Trade Process <ArrowRight size={14} />
                  </Link>

                  {/* Jamaica Link */}
                  <div className="mt-8 pt-6 border-t border-slate-800">
                    <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-2">Local Delivery?</p>
                    <Link href="/contact/jamaica" className="text-blue-400 hover:text-blue-300 text-sm font-bold hover:underline flex items-center gap-1">
                      Jamaica Operations <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* ─────────────────────────── */}
              {/* Form Area                   */}
              {/* ─────────────────────────── */}
              <div className="lg:col-span-2 space-y-8">

                {/* Trade Pipeline */}
                <div className="bg-slate-900/50 rounded-[2rem] p-6 md:p-8 border border-slate-800">
                  <h3 className="text-white font-black text-xs uppercase tracking-wider mb-6 flex items-center">
                    <FileText size={16} className="mr-2 text-blue-400" />
                    Trade Pipeline — After Submission
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {pipelineSteps.map((pStep, i) => (
                      <div key={i} className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center bg-slate-800 border border-slate-700">
                          <pStep.icon size={20} className="text-blue-400" />
                        </div>
                        <p className="text-white text-sm font-bold">{pStep.title}</p>
                        <p className="text-slate-500 text-xs font-medium mt-0.5">{pStep.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form Card */}
                <div className="bg-slate-900 rounded-[2rem] p-8 md:p-10 border border-slate-800">
                  <h2 className="text-3xl font-black text-white tracking-tight mb-2">
                    Submit Your <span className="text-blue-400">Inquiry.</span>
                  </h2>
                  <p className="text-slate-400 mb-10 text-lg">
                    Only qualified counterparties with demonstrated LC capability will be contacted.
                  </p>

                  {/* Error */}
                  {submitStatus === 'error' && (
                    <div className="bg-red-900/20 border border-red-700/30 rounded-2xl p-5 mb-8">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="text-red-400 flex-shrink-0 mt-0.5" size={20} />
                        <div>
                          <p className="font-bold text-red-300">Submission Failed</p>
                          <p className="text-red-400/80 text-sm mt-1">{submissionMessage}</p>
                          <button onClick={() => setSubmitStatus(null)} className="mt-3 text-red-300 bg-red-900/30 hover:bg-red-900/50 px-4 py-1.5 rounded-lg text-sm font-bold transition-colors">
                            Try Again
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-7">
                    {/* Company & Country */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Company Name <span className="text-red-400">*</span></label>
                        <div className="relative">
                          <Building2 size={18} className="absolute left-4 top-3.5 text-slate-600" />
                          <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} required
                            className="w-full pl-11 pr-4 py-3.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium transition-colors"
                            placeholder="Your company name" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Country <span className="text-red-400">*</span></label>
                        <div className="relative">
                          <Globe size={18} className="absolute left-4 top-3.5 text-slate-600" />
                          <select name="country" value={formData.country} onChange={handleInputChange} required
                            className="w-full pl-11 pr-4 py-3.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none font-medium transition-colors">
                            <option value="">Select country...</option>
                            {caribbeanCountries.map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Contact & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Contact Name <span className="text-red-400">*</span></label>
                        <div className="relative">
                          <User size={18} className="absolute left-4 top-3.5 text-slate-600" />
                          <input type="text" name="contactName" value={formData.contactName} onChange={handleInputChange} required
                            className="w-full pl-11 pr-4 py-3.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium transition-colors"
                            placeholder="Full name" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email <span className="text-red-400">*</span></label>
                        <div className="relative">
                          <Mail size={18} className="absolute left-4 top-3.5 text-slate-600" />
                          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required
                            className="w-full pl-11 pr-4 py-3.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium transition-colors"
                            placeholder="your@company.com" />
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone <span className="text-red-400">*</span></label>
                      <div className="relative">
                        <Phone size={18} className="absolute left-4 top-3.5 text-slate-600" />
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required
                          className="w-full pl-11 pr-4 py-3.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium transition-colors"
                          placeholder="+1-XXX-XXX-XXXX" />
                      </div>
                    </div>

                    {/* Product Interest */}
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Product Interest <span className="text-red-400">*</span></label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {intlProductOptions.map(p => (
                          <label key={p.value} className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all font-medium text-sm ${
                            formData.productInterest.includes(p.value)
                              ? 'border-blue-500 bg-blue-900/20 text-blue-300'
                              : 'border-slate-700 bg-slate-950 text-slate-400 hover:border-slate-600'
                          }`}>
                            <input type="checkbox" checked={formData.productInterest.includes(p.value)} onChange={() => handleProductInterestChange(p.value)}
                              className="w-4 h-4 text-blue-600 border-slate-600 rounded focus:ring-blue-500 bg-slate-800" />
                            <span className="ml-3">{p.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* License & LC */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Import License Status <span className="text-red-400">*</span></label>
                        <div className="relative">
                          <FileCheck size={18} className="absolute left-4 top-3.5 text-slate-600" />
                          <select name="importLicenseStatus" value={formData.importLicenseStatus} onChange={handleInputChange} required
                            className="w-full pl-11 pr-4 py-3.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none font-medium transition-colors">
                            <option value="">Select status...</option>
                            {importLicenseOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">LC Capability <span className="text-red-400">*</span></label>
                        <div className="relative">
                          <Landmark size={18} className="absolute left-4 top-3.5 text-slate-600" />
                          <select name="lcCapability" value={formData.lcCapability} onChange={handleInputChange} required
                            className="w-full pl-11 pr-4 py-3.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none font-medium transition-colors">
                            <option value="">Select capability...</option>
                            {lcCapabilityOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Port & Volume */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Port of Destination <span className="text-red-400">*</span></label>
                        <div className="relative">
                          <Ship size={18} className="absolute left-4 top-3.5 text-slate-600" />
                          <input type="text" name="portOfDestination" value={formData.portOfDestination} onChange={handleInputChange} required
                            className="w-full pl-11 pr-4 py-3.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium transition-colors"
                            placeholder="e.g., Kingston, Jamaica" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Est. Monthly Volume <span className="text-red-400">*</span></label>
                        <select name="estimatedMonthlyVolume" value={formData.estimatedMonthlyVolume} onChange={handleInputChange} required
                          className="w-full px-4 py-3.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none font-medium transition-colors">
                          <option value="">Select volume...</option>
                          {intlVolumeOptions.map(v => <option key={v.value} value={v.value}>{v.label}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Additional Information</label>
                      <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleInputChange} rows={4}
                        className="w-full px-4 py-3.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none font-medium transition-colors"
                        placeholder="Specific requirements, target laycan, banking relationships, etc." />
                    </div>

                    {/* Anti-spam: Honeypot */}
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input type="text" id="website" name="website" value={formData.website}
                        onChange={handleInputChange} tabIndex={-1} autoComplete="off" />
                    </div>

                    {/* Cloudflare Turnstile Widget */}
                    <div>
                      <div
                        className="cf-turnstile"
                        data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'}
                        data-callback="onTurnstileSuccess"
                        data-theme="dark"
                      />
                    </div>
                    <script dangerouslySetInnerHTML={{
                      __html: `window.onTurnstileSuccess = function(token) { 
                        window.turnstileToken = token;
                        if (typeof window.setTurnstileToken === 'function') {
                          window.setTurnstileToken(token);
                        }
                      };`
                    }} />

                    {/* Qualification Notice */}
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
                      <p className="text-slate-300 text-sm leading-relaxed">
                        <strong className="text-white font-bold">Qualification Notice:</strong> Inquiries are reviewed within 48 business hours.
                        Only qualified counterparties demonstrating LC capability and regulatory compliance will be contacted.
                        All trade via <strong className="text-blue-400 font-bold">Nevloh LLC (Wyoming, USA)</strong>.
                      </p>
                    </div>

                    <button type="submit" disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 px-6 rounded-2xl font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center disabled:opacity-50 shadow-lg shadow-blue-900/30 hover:shadow-xl hover:shadow-blue-900/40">
                      {isSubmitting ? (
                        <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />Submitting...</>
                      ) : (
                        <><Globe size={18} className="mr-2" />Submit Trade Inquiry<ArrowRight size={18} className="ml-2" /></>
                      )}
                    </button>

                    <p className="text-slate-600 text-xs text-center font-medium">
                      By submitting, you agree to our{' '}
                      <Link href="/privacy" className="text-blue-400 hover:underline">privacy policy</Link>.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}