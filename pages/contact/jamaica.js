// pages/contact/jamaica.js
// Tier 1 Institutional — Nevloh Limited Regional Logistics Intake
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import {
  Truck,
  ArrowLeft,
  ChevronRight,
  CheckCircle,
  Phone,
  Mail,
  User,
  Building2,
  MapPin,
  Fuel,
  Send,
  ArrowRight,
  AlertCircle,
  MessageSquare,
  Clock,
  Star,
  Zap,
  ShieldCheck
} from 'lucide-react';

export default function ContactJamaica() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submissionMessage, setSubmissionMessage] = useState('');

  // Anti-spam: Track form load time
  const formLoadTime = useRef(Date.now());
  const [turnstileToken, setTurnstileToken] = useState(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    parish: '',
    email: '',
    companyName: '',
    businessType: 'individual',
    fuelTypes: [],
    deliveryFrequency: '',
    averageVolume: '',
    message: '',
    // Anti-spam: Honeypot field (bots will fill this)
    website: ''
  });

  // Set up Turnstile callback
  useEffect(() => {
    window.setTurnstileToken = (token) => {
      setTurnstileToken(token);
    };

    // Reset form load time when component mounts
    formLoadTime.current = Date.now();

    return () => {
      delete window.setTurnstileToken;
    };
  }, []);

  // Schema - LocalBusiness focused
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.nevloh.com/#nevloh-limited",
    "name": "Nevloh Limited",
    "description": "Professional diesel fuel delivery services across all 14 parishes of Jamaica.",
    "url": "https://www.nevloh.com/contact/jamaica",
    "telephone": "+1-876-449-5172",
    "email": "shamar@nevloh.com",
    "image": "https://www.nevloh.com/images/og-jamaica-fuel.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Caymanas Bay",
      "addressLocality": "Spanish Town",
      "addressRegion": "Saint Catherine",
      "addressCountry": "JM"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.9909,
      "longitude": -76.9571
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Jamaica"
    },
    "serviceType": ["Fleet Refuelling", "Generator Refuelling", "Bulk Fuel Delivery"],
    "priceRange": "$$"
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Nevloh Limited | Jamaica Fuel Delivery",
    "description": "Get a fuel delivery quote for anywhere in Jamaica. Same-day service available.",
    "url": "https://www.nevloh.com/contact/jamaica",
    "mainEntity": { "@id": "https://www.nevloh.com/#nevloh-limited" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nevloh.com" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.nevloh.com/contact" },
      { "@type": "ListItem", "position": 3, "name": "Jamaica", "item": "https://www.nevloh.com/contact/jamaica" }
    ]
  };

  // Form options
  const parishes = [
    'Kingston', 'St. Andrew', 'St. Thomas', 'Portland', 'St. Mary',
    'St. Ann', 'Trelawny', 'St. James', 'Hanover', 'Westmoreland',
    'St. Elizabeth', 'Manchester', 'Clarendon', 'St. Catherine'
  ];

  const businessTypes = [
    { value: 'individual', label: 'Individual/Personal' },
    { value: 'small_business', label: 'Small Business' },
    { value: 'corporation', label: 'Corporation' },
    { value: 'government', label: 'Government/Public Sector' },
    { value: 'ngo', label: 'NGO/Non-Profit' },
    { value: 'other', label: 'Other' }
  ];

  const fuelTypeOptions = [
    { value: 'ulsd', label: 'Ultra Low Sulphur Diesel (ULSD)' },
    { value: 'ado', label: 'Automotive Diesel Oil (ADO)' }
  ];

  const deliveryFrequencies = [
    { value: 'one_time', label: 'One-Time Delivery' },
    { value: 'as_needed', label: 'As Needed' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'bi_weekly', label: 'Bi-Weekly' },
    { value: 'monthly', label: 'Monthly' }
  ];

  const volumeRanges = [
    { value: 'under_100', label: 'Under 100 gallons' },
    { value: '100_500', label: '100–500 gallons' },
    { value: '500_1000', label: '500–1,000 gallons' },
    { value: '1000_5000', label: '1,000–5,000 gallons' },
    { value: 'over_5000', label: 'Over 5,000 gallons' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFuelTypeChange = (fuelType) => {
    setFormData(prev => ({
      ...prev,
      fuelTypes: prev.fuelTypes.includes(fuelType)
        ? prev.fuelTypes.filter(type => type !== fuelType)
        : [...prev.fuelTypes, fuelType]
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

  const handleQuickSubmit = async (e) => {
    e.preventDefault();

    const spamCheck = validateAntiSpam();
    if (!spamCheck.valid) {
      if (spamCheck.reason === 'captcha_required') {
        setSubmitStatus('error');
        setSubmissionMessage('Please complete the security check.');
      } else {
        setSubmitStatus('success');
        setSubmissionMessage('Thanks! We\'ll call you within 2 hours during business hours.');
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          parish: formData.parish,
          source: 'contact_jamaica_quick',
          message: `Quick lead from ${formData.parish || 'Jamaica'}. Callback requested.`,
          turnstileToken: turnstileToken
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitStatus('success');
        setSubmissionMessage('Thanks! We\'ll call you within 2 hours during business hours.');
      } else {
        throw new Error(data.error || 'Failed to submit');
      }
    } catch (err) {
      setSubmitStatus('error');
      setSubmissionMessage(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFullSubmit = async (e) => {
    e.preventDefault();

    const spamCheck = validateAntiSpam();
    if (!spamCheck.valid) {
      if (spamCheck.reason === 'captcha_required') {
        setSubmitStatus('error');
        setSubmissionMessage('Please complete the security check.');
      } else {
        setSubmitStatus('success');
        setSubmissionMessage('Your request has been submitted. We\'ll contact you within 24 hours with a personalized quote.');
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'contact_jamaica_full',
          turnstileToken: turnstileToken
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitStatus('success');
        setSubmissionMessage('Your request has been submitted. We\'ll contact you within 24 hours with a personalized quote.');
      } else {
        throw new Error(data.error || 'Failed to submit');
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
          <title>Thank You | Nevloh Limited</title>
          <meta name="robots" content="noindex, follow" />
        </Head>

        <div className="min-h-screen bg-[#fcfdfe] font-sans selection:bg-blue-100 selection:text-blue-900">
          {/* Institutional Bar */}
          <div className="bg-slate-900 text-white py-2.5 px-4 text-center border-b border-slate-800">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold">
              <span className="opacity-50">Nevloh Limited</span>
              <span className="mx-3 opacity-20">|</span>
              <span className="text-blue-400">Regional Logistics Hub</span>
              <span className="mx-3 opacity-20">|</span>
              <span className="text-blue-400">Kingston, JM</span>
            </p>
          </div>

          <div className="pt-20 py-16 px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-[2rem] p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle size={40} className="text-green-600" />
                </div>

                <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Message Sent.</h1>
                <p className="text-lg text-slate-500 mb-10 leading-relaxed">{submissionMessage}</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact/jamaica"
                    onClick={() => {
                      setSubmitStatus(null);
                      setStep(1);
                      setFormData({
                        firstName: '', lastName: '', phone: '', parish: '', email: '',
                        companyName: '', businessType: 'individual', fuelTypes: [],
                        deliveryFrequency: '', averageVolume: '', message: '', website: ''
                      });
                    }}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all"
                  >
                    Submit Another Request
                  </Link>
                  <Link href="/" className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl font-bold transition-all">
                    Return Home
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
        <title>Contact Jamaica | Fuel Delivery | Nevloh Limited</title>
        <meta name="description" content="Get a fuel delivery quote for anywhere in Jamaica. Fleet refuelling, generator fuel, bulk diesel supply. Same-day service available. Call +1-876-449-5172." />
        <meta name="keywords" content="fuel delivery Jamaica, diesel delivery Kingston, fleet refuelling Jamaica, generator fuel delivery, Nevloh Limited contact" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Jamaica Fuel Delivery | Nevloh Limited" />
        <meta property="og:description" content="Get a quick quote for fuel delivery anywhere in Jamaica. Same-day service available." />
        <meta property="og:url" content="https://www.nevloh.com/contact/jamaica" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.nevloh.com/images/og-jamaica-fuel.png" />

        <link rel="canonical" href="https://www.nevloh.com/contact/jamaica" />
      </Head>

      <Script id="local-business-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
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

      <div className="bg-[#fcfdfe] min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">

        {/* ─── Institutional Header Bar ─── */}
        <div className="bg-slate-900 text-white py-2.5 px-4 text-center border-b border-slate-800">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold">
            <span className="opacity-50">Nevloh Limited</span>
            <span className="mx-3 opacity-20">|</span>
            <span className="text-blue-400">All 14 Parishes</span>
            <span className="mx-3 opacity-20">|</span>
            <span className="text-blue-400">24/7 Emergency Available</span>
          </p>
        </div>

        <div className="pt-20">

          {/* ─── Refined Breadcrumbs ─── */}
          <nav className="max-w-7xl mx-auto px-6 mb-4" aria-label="Breadcrumb">
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ChevronRight size={12} strokeWidth={3} />
              <Link href="/contact" className="hover:text-blue-600 transition-colors">Gateway</Link>
              <ChevronRight size={12} strokeWidth={3} />
              <span className="text-slate-900">Jamaica</span>
            </div>
          </nav>

          {/* ─── Page Header ─── */}
          <div className="max-w-7xl mx-auto px-6 py-8">
            <Link href="/contact" className="inline-flex items-center text-slate-400 hover:text-blue-600 mb-6 transition-colors text-sm font-semibold uppercase tracking-wider">
              <ArrowLeft size={16} className="mr-2" />
              Back to Gateway
            </Link>

            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                <Truck size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                  Jamaica Fuel <span className="text-blue-600">Delivery.</span>
                </h1>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.15em] mt-1">Nevloh Limited — Regional Logistics Hub</p>
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
                <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-24">
                  <h3 className="font-black text-slate-900 text-lg tracking-tight mb-8">Direct Lines</h3>

                  <div className="space-y-6">
                    <a href="tel:+18764495172" className="flex items-start gap-4 group">
                      <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                        <Phone size={18} className="text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">Phone</p>
                        <p className="text-blue-600 group-hover:underline font-medium">+1-876-449-5172</p>
                      </div>
                    </a>

                    <a href="https://wa.me/18764495172" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                      <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors">
                        <MessageSquare size={18} className="text-green-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">WhatsApp</p>
                        <p className="text-green-600 group-hover:underline font-medium">Message Us</p>
                      </div>
                    </a>

                    <a href="mailto:shamar@nevloh.com" className="flex items-start gap-4 group">
                      <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 transition-colors">
                        <Mail size={18} className="text-purple-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">Email</p>
                        <p className="text-purple-600 group-hover:underline font-medium">shamar@nevloh.com</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock size={18} className="text-amber-600" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">Hours</p>
                        <p className="text-slate-500 text-sm">Mon–Fri: 7AM – 6PM</p>
                        <p className="text-slate-500 text-sm">Sat: 8AM – 4PM</p>
                        <p className="text-amber-600 text-sm font-bold mt-0.5">24/7 Emergency</p>
                      </div>
                    </div>
                  </div>

                  {/* Why Nevloh */}
                  <div className="mt-10 pt-8 border-t border-slate-100">
                    <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider mb-5">Operational Edge</h4>
                    <div className="space-y-3.5">
                      {[
                        { icon: Fuel, text: 'Ultra Low Sulphur Diesel' },
                        { icon: Truck, text: 'Island-wide Coverage' },
                        { icon: ShieldCheck, text: 'Licensed & Insured' },
                        { icon: Zap, text: 'Same-Day Available' },
                        { icon: Star, text: '5-Star Service' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <item.icon size={16} className="text-blue-600 flex-shrink-0" />
                          <span className="text-slate-600 text-sm font-medium">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* International Link */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">Bulk Commodities?</p>
                    <Link href="/contact/international" className="text-blue-600 hover:text-blue-700 text-sm font-bold hover:underline flex items-center gap-1">
                      International Trade Desk <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* ─────────────────────────── */}
              {/* Form Area                   */}
              {/* ─────────────────────────── */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">

                  {/* Step Indicator */}
                  <div className="flex items-center gap-4 mb-10">
                    <div className={`flex items-center gap-2.5 ${step >= 1 ? 'text-blue-600' : 'text-slate-400'}`}>
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-sm ${step >= 1 ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-slate-200'}`}>1</div>
                      <span className="font-bold text-sm hidden sm:inline uppercase tracking-wider">Quick Info</span>
                    </div>
                    <div className={`flex-1 h-1.5 rounded-full ${step >= 2 ? 'bg-blue-600' : 'bg-slate-100'}`} />
                    <div className={`flex items-center gap-2.5 ${step >= 2 ? 'text-blue-600' : 'text-slate-400'}`}>
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-sm ${step >= 2 ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-slate-200'}`}>2</div>
                      <span className="font-bold text-sm hidden sm:inline uppercase tracking-wider">Full Details</span>
                    </div>
                  </div>

                  {/* Error */}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-8">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                        <div>
                          <p className="font-bold text-red-800">Something went wrong</p>
                          <p className="text-red-600 text-sm mt-1">{submissionMessage}</p>
                          <button onClick={() => setSubmitStatus(null)} className="mt-3 text-red-700 bg-red-100 hover:bg-red-200 px-4 py-1.5 rounded-lg text-sm font-bold transition-colors">
                            Try Again
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ──────────── Step 1 ──────────── */}
                  {step === 1 && (
                    <form onSubmit={handleQuickSubmit}>
                      <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
                        Get a Quick <span className="text-blue-600">Quote.</span>
                      </h2>
                      <p className="text-slate-500 mb-10 text-lg">Tell us the basics and we&apos;ll call you back within 2 hours.</p>

                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">First Name <span className="text-red-500">*</span></label>
                            <div className="relative">
                              <User size={18} className="absolute left-4 top-3.5 text-slate-400" />
                              <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required
                                className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 focus:bg-white transition-colors text-slate-900 font-medium"
                                placeholder="Your first name" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Last Name <span className="text-red-500">*</span></label>
                            <div className="relative">
                              <User size={18} className="absolute left-4 top-3.5 text-slate-400" />
                              <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required
                                className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 focus:bg-white transition-colors text-slate-900 font-medium"
                                placeholder="Your last name" />
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Phone <span className="text-red-500">*</span></label>
                            <div className="relative">
                              <Phone size={18} className="absolute left-4 top-3.5 text-slate-400" />
                              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required
                                className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 focus:bg-white transition-colors text-slate-900 font-medium"
                                placeholder="+1-876-XXX-XXXX" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Parish <span className="text-red-500">*</span></label>
                            <div className="relative">
                              <MapPin size={18} className="absolute left-4 top-3.5 text-slate-400" />
                              <select name="parish" value={formData.parish} onChange={handleInputChange} required
                                className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-slate-50 focus:bg-white transition-colors text-slate-900 font-medium">
                                <option value="">Select parish...</option>
                                {parishes.map(p => <option key={p} value={p}>{p}</option>)}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Anti-spam: Honeypot */}
                      <div className="absolute -left-[9999px]" aria-hidden="true">
                        <label htmlFor="website">Website</label>
                        <input type="text" id="website" name="website" value={formData.website}
                          onChange={handleInputChange} tabIndex={-1} autoComplete="off" />
                      </div>

                      {/* Cloudflare Turnstile Widget */}
                      <div className="mt-6">
                        <div
                          className="cf-turnstile"
                          data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'}
                          data-callback="onTurnstileSuccess"
                          data-theme="light"
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

                      <div className="flex flex-col sm:flex-row gap-4 mt-10">
                        <button type="submit" disabled={isSubmitting}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-2xl font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center disabled:opacity-50 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-200">
                          {isSubmitting ? (
                            <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />Submitting...</>
                          ) : (
                            <><Phone size={18} className="mr-2" />Request Callback</>
                          )}
                        </button>
                        <button type="button" onClick={() => setStep(2)}
                          className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-4 px-6 rounded-2xl font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center">
                          More Details <ArrowRight size={18} className="ml-2" />
                        </button>
                      </div>
                    </form>
                  )}

                  {/* ──────────── Step 2 ──────────── */}
                  {step === 2 && (
                    <form onSubmit={handleFullSubmit}>
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                            Full <span className="text-blue-600">Details.</span>
                          </h2>
                          <p className="text-slate-500 mt-1">Help us scope your requirements precisely.</p>
                        </div>
                        <button type="button" onClick={() => setStep(1)} className="text-slate-400 hover:text-blue-600 flex items-center text-xs font-bold uppercase tracking-wider transition-colors">
                          <ArrowLeft size={14} className="mr-1" />Back
                        </button>
                      </div>

                      <div className="space-y-6">
                        {/* Summary Card */}
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                          <p className="text-sm text-slate-600 font-medium">
                            <span className="font-bold text-slate-900">{formData.firstName} {formData.lastName}</span>
                            <span className="mx-2 text-slate-300">•</span>{formData.phone}
                            <span className="mx-2 text-slate-300">•</span>{formData.parish}
                          </p>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Email Address</label>
                          <div className="relative">
                            <Mail size={18} className="absolute left-4 top-3.5 text-slate-400" />
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                              className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 focus:bg-white transition-colors text-slate-900 font-medium"
                              placeholder="your@email.com" />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Company Name</label>
                            <div className="relative">
                              <Building2 size={18} className="absolute left-4 top-3.5 text-slate-400" />
                              <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange}
                                className="w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 focus:bg-white transition-colors text-slate-900 font-medium"
                                placeholder="Optional" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Business Type</label>
                            <select name="businessType" value={formData.businessType} onChange={handleInputChange}
                              className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-slate-50 focus:bg-white transition-colors text-slate-900 font-medium">
                              {businessTypes.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">Fuel Type Required</label>
                          <div className="flex flex-wrap gap-3">
                            {fuelTypeOptions.map(f => (
                              <label key={f.value} className={`flex items-center px-5 py-3.5 rounded-xl border-2 cursor-pointer transition-all font-medium text-sm ${
                                formData.fuelTypes.includes(f.value)
                                  ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm'
                                  : 'border-slate-200 hover:border-slate-300 text-slate-600'
                              }`}>
                                <input type="checkbox" checked={formData.fuelTypes.includes(f.value)} onChange={() => handleFuelTypeChange(f.value)} className="sr-only" />
                                <Fuel size={16} className="mr-2 flex-shrink-0" />{f.label}
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Estimated Volume</label>
                            <select name="averageVolume" value={formData.averageVolume} onChange={handleInputChange}
                              className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-slate-50 focus:bg-white transition-colors text-slate-900 font-medium">
                              <option value="">Select volume...</option>
                              {volumeRanges.map(v => <option key={v.value} value={v.value}>{v.label}</option>)}
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Delivery Frequency</label>
                            <select name="deliveryFrequency" value={formData.deliveryFrequency} onChange={handleInputChange}
                              className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-slate-50 focus:bg-white transition-colors text-slate-900 font-medium">
                              <option value="">Select frequency...</option>
                              {deliveryFrequencies.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Additional Details</label>
                          <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4}
                            className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none bg-slate-50 focus:bg-white transition-colors text-slate-900 font-medium"
                            placeholder="Delivery address, special requirements, questions..." />
                        </div>
                      </div>

                      {/* Anti-spam: Honeypot */}
                      <div className="absolute -left-[9999px]" aria-hidden="true">
                        <label htmlFor="website2">Website</label>
                        <input type="text" id="website2" name="website" value={formData.website}
                          onChange={handleInputChange} tabIndex={-1} autoComplete="off" />
                      </div>

                      {/* Cloudflare Turnstile Widget */}
                      <div className="mt-6">
                        <div
                          className="cf-turnstile"
                          data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'}
                          data-callback="onTurnstileSuccess"
                          data-theme="light"
                        />
                      </div>

                      <button type="submit" disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-2xl font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center mt-10 disabled:opacity-50 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-200">
                        {isSubmitting ? (
                          <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />Submitting...</>
                        ) : (
                          <><Send size={18} className="mr-2" />Submit Full Request</>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}