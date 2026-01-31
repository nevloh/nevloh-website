// pages/contact/index.js
// Tier 1 Institutional Gateway — Nevloh Group Bilateral Operations
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import {
  Truck,
  Globe,
  ArrowRight,
  Phone,
  MessageSquare,
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function ContactGateway() {
  // Schema for the gateway page
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Nevloh",
    "description": "Bilateral contact hub for Nevloh Limited (Jamaica Fuel) and Nevloh LLC (International Commodities).",
    "url": "https://www.nevloh.com/contact",
    "mainEntity": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.nevloh.com/#nevloh-limited",
        "name": "Nevloh Limited",
        "url": "https://www.nevloh.com/contact/jamaica"
      },
      {
        "@type": "Organization",
        "@id": "https://www.nevloh.com/#nevloh-llc",
        "name": "Nevloh LLC",
        "url": "https://www.nevloh.com/contact/international"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Contact Gateway | Nevloh Group</title>
        <meta name="description" content="Access Nevloh's regional logistics or international trade desk. Secure settlement for global commodities and island-wide fuel delivery." />
        <meta name="keywords" content="contact Nevloh, fuel delivery Jamaica, international trade inquiry, diesel supply contact, Nevloh Limited, Nevloh LLC" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Gateway | Nevloh Group" />
        <meta property="og:description" content="Tailored intake pathways for regional logistics and global commodities settlement." />
        <meta property="og:url" content="https://www.nevloh.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.nevloh.com/images/og-contact.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Gateway | Nevloh Group" />
        <meta name="twitter:description" content="Tailored intake pathways for regional logistics and global commodities settlement." />

        <link rel="canonical" href="https://www.nevloh.com/contact" />
      </Head>

      <Script id="contact-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />

      <div className="bg-[#fcfdfe] min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">

        {/* Global Institutional Bar */}
        <div className="bg-slate-900 text-white py-2.5 px-4 text-center border-b border-slate-800">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold">
            <span className="opacity-50">Nevloh Group Bilateral Operations</span>
            <span className="mx-3 opacity-20">|</span>
            <span className="text-blue-400">Casper, WY</span>
            <span className="mx-3 opacity-20">|</span>
            <span className="text-blue-400">Kingston, JM</span>
          </p>
        </div>

        <div className="pt-20">

          {/* Refined Breadcrumbs */}
          <nav className="max-w-6xl mx-auto px-6 mb-12" aria-label="Breadcrumb">
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ChevronRight size={12} strokeWidth={3} />
              <span className="text-slate-900">Gateway</span>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="max-w-6xl mx-auto px-6 mb-20 text-center">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6">
              Connect with <span className="text-blue-600">Nevloh.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Tailored intake pathways for regional logistics and global commodities settlement.
            </p>
          </section>

          {/* Institutional Cards */}
          <div className="max-w-6xl mx-auto px-6 pb-24">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">

              {/* ─────────────────────────────────────── */}
              {/* Nevloh Limited — Regional Logistics Hub */}
              {/* ─────────────────────────────────────── */}
              <Link
                href="/contact/jamaica"
                className="group relative flex flex-col p-1 bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/40 transition-all duration-500 border border-slate-100 overflow-hidden"
              >
                <div className="p-10 md:p-12 flex-1">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
                    <Truck size={28} className="text-white" />
                  </div>

                  {/* Heading */}
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
                    Jamaica Operations
                  </h2>
                  <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.15em] mb-6">
                    Regional Logistics Hub
                  </p>

                  {/* Description */}
                  <p className="text-slate-500 mb-8 leading-relaxed text-lg">
                    Island-wide fuel delivery and refuelling services. Priority dispatch for
                    industrial and commercial entities across all parishes.
                  </p>

                  {/* Data Points */}
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <Zap size={16} className="text-blue-600 flex-shrink-0" />
                      2hr Callback
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <ShieldCheck size={16} className="text-blue-600 flex-shrink-0" />
                      Licensed Ops
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                      14 Parishes
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                      24/7 Emergency
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-blue-600 font-black text-sm uppercase tracking-widest group-hover:gap-4 gap-2 transition-all">
                    Initiate Quote <ArrowRight size={18} />
                  </div>
                </div>

                {/* Bottom Progress Bar */}
                <div className="h-2 bg-blue-600 w-0 group-hover:w-full transition-all duration-500" />
              </Link>

              {/* ─────────────────────────────────────── */}
              {/* Nevloh LLC — Wyoming Trade Desk        */}
              {/* ─────────────────────────────────────── */}
              <Link
                href="/contact/international"
                className="group relative flex flex-col p-1 bg-slate-900 rounded-[2rem] shadow-xl shadow-slate-900/20 hover:shadow-2xl transition-all duration-500 border border-slate-800 overflow-hidden"
              >
                <div className="p-10 md:p-12 flex-1">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/40">
                    <Globe size={28} className="text-white" />
                  </div>

                  {/* Heading */}
                  <h2 className="text-3xl font-extrabold text-white mb-2">
                    International Trade
                  </h2>
                  <p className="text-blue-400 font-mono text-xs uppercase tracking-[0.15em] mb-6">
                    Wyoming Trade Desk
                  </p>

                  {/* Description */}
                  <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                    Bulk commodities procurement specialized in EN590 Diesel and Urea 46%.
                    Structured settlement via irrevocable LC-at-sight only.
                  </p>

                  {/* Data Points */}
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      UCP 600 Compliant
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      SGS Verified
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      ISBP 745
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      48hr Review
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-blue-400 font-black text-sm uppercase tracking-widest group-hover:gap-4 gap-2 transition-all">
                    Trade Inquiry <ArrowRight size={18} />
                  </div>
                </div>

                {/* Bottom Progress Bar */}
                <div className="h-2 bg-blue-500 w-0 group-hover:w-full transition-all duration-500" />
              </Link>

            </div>
          </div>

          {/* High-Contrast Quick Connect */}
          <div className="max-w-6xl mx-auto px-6 pb-24">
            <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Urgent Assistance?</h3>
                <p className="text-slate-500">Available 24/7 for emergency fuel services in Jamaica.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+18764495172"
                  className="flex items-center gap-3 bg-white border border-slate-200 px-6 py-4 rounded-2xl font-bold text-slate-900 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
                >
                  <Phone size={20} /> +1 (876) 449-5172
                </a>
                <a
                  href="https://wa.me/18764495172"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white border border-slate-200 px-6 py-4 rounded-2xl font-bold text-slate-900 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all shadow-sm"
                >
                  <MessageSquare size={20} /> WhatsApp Support
                </a>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="bg-slate-100 py-8">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <p className="text-slate-500 text-sm">
                Not sure which service you need?{' '}
                <a href="tel:+18764495172" className="text-blue-600 hover:underline font-medium">
                  Call us
                </a>
                {' '}and we&apos;ll guide you to the right team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}