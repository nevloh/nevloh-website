// components/Footer.js
// Tier 1 Institutional — Nevloh Group Bilateral Footer
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, MapPin, Mail, Phone, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleExternalLinkClick = (linkName) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'External Link',
        event_label: linkName,
        value: 1
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900" role="contentinfo" aria-label="Site footer">
      {/* Institutional Schema — Nevloh Group (Bilateral) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nevloh Group",
            "description": "Bilateral energy group specializing in Jamaica fuel logistics (Nevloh Limited) and international commodities trade (Nevloh LLC).",
            "url": "https://www.nevloh.com",
            "logo": "https://www.nevloh.com/images/logo.png",
            "foundingDate": "2022",
            "address": [
              {
                "@type": "PostalAddress",
                "addressLocality": "Spanish Town",
                "addressRegion": "St. Catherine",
                "addressCountry": "Jamaica"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Casper",
                "addressRegion": "Wyoming",
                "addressCountry": "USA"
              }
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-876-449-5172",
              "email": "shamar@nevloh.com",
              "contactType": "customer service",
              "areaServed": ["JM", "US"]
            },
            "sameAs": [
              "https://www.instagram.com/nevlohltd"
            ]
          })
        }}
      />

      {/* ─── 1. TOP TIER: Newsletter & Global Brand ─── */}
      <div className="border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <Link
              href="/"
              className="group inline-flex items-center mb-3 hover:opacity-90 transition-opacity"
              aria-label="Go to Nevloh homepage"
            >
              <div className="w-10 h-10 mr-3 relative flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Nevloh Group Logo"
                  fill
                  className="object-contain rounded-full"
                  sizes="40px"
                />
              </div>
              <span className="text-white text-xl font-black tracking-tight">Nevloh Group</span>
            </Link>
            <p className="text-sm max-w-sm leading-relaxed">
              Strategic energy solutions and commodities trade execution for the Caribbean Basin.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <form className="flex max-w-md mx-auto lg:mx-0" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Industry Insights & Market Updates"
                className="bg-slate-900 border border-slate-800 px-4 py-3 rounded-l-xl w-full focus:ring-1 focus:ring-blue-500 outline-none text-sm text-white placeholder-slate-600"
                aria-label="Email address for newsletter"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-r-xl text-xs font-black uppercase tracking-wider transition-all flex-shrink-0">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ─── 2. MAIN FOOTER CONTENT ─── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Operational Hubs */}
          <div>
            <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Operational Hubs</h4>
            <div className="space-y-6">
              <div>
                <p className="text-blue-400 text-[10px] font-bold uppercase mb-1 tracking-widest">Nevloh LLC</p>
                <p className="text-white text-sm font-semibold mb-1">Casper, Wyoming</p>
                <p className="text-xs opacity-50">Trade Desk &amp; Financial Settlement</p>
              </div>
              <div>
                <p className="text-blue-400 text-[10px] font-bold uppercase mb-1 tracking-widest">Nevloh Limited</p>
                <p className="text-white text-sm font-semibold mb-1">Spanish Town, JM</p>
                <p className="text-xs opacity-50">Regional Logistics &amp; Fuel Delivery</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 pt-6 border-t border-slate-800/50">
              <h5 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Hours of Operation</h5>
              <div className="text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span>Mon – Fri</span>
                  <span className="text-slate-300 font-medium">8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-slate-300 font-medium">8:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-amber-400 font-bold">Emergency Only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Energy Services */}
          <div>
            <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Energy Services</h4>
            <nav aria-label="Services navigation" className="flex flex-col space-y-3 text-sm">
              <Link href="/services/fleet-refuelling" className="hover:text-white transition-colors">
                Fleet Refuelling
              </Link>
              <Link href="/services/generator-refuelling" className="hover:text-white transition-colors">
                Generator Solutions
              </Link>
              <Link href="/services/on-site-fuel-delivery" className="hover:text-white transition-colors">
                On-Site Fuel Delivery
              </Link>
              <Link href="/services/bulk-fuel" className="hover:text-white transition-colors">
                Bulk Fuel Supply
              </Link>
              <Link href="/services/haulage" className="hover:text-white transition-colors">
                Petroleum Haulage
              </Link>
              <Link href="/services/ulsd" className="hover:text-white transition-colors">
                ULSD Supply
              </Link>
              <Link href="/international-trade" className="hover:text-white transition-colors">
                International Trade
              </Link>
            </nav>
          </div>

          {/* Strategic Path */}
          <div>
            <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Strategic Path</h4>
            <nav aria-label="Company navigation" className="flex flex-col space-y-3 text-sm">
              <Link href="/about" className="hover:text-white transition-colors">
                About the Group
              </Link>
              <Link href="/international-trade" className="hover:text-white transition-colors">
                Trade Compliance
              </Link>
              <Link href="/sustainability" className="hover:text-white transition-colors">
                Sustainability
              </Link>
              <Link href="/blog" className="hover:text-white transition-colors">
                Market Blog
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact Gateway
              </Link>
            </nav>
          </div>

          {/* Group Inquiries */}
          <div>
            <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Group Inquiries</h4>
            <address className="not-italic space-y-4 text-sm">
              <a href="tel:+18764495172" className="flex items-center gap-3 hover:text-white transition-colors" aria-label="Call us at (876) 449-5172">
                <Phone size={16} className="text-blue-400 flex-shrink-0" aria-hidden="true" />
                +1 (876) 449-5172
              </a>
              <a href="mailto:shamar@nevloh.com" className="flex items-center gap-3 hover:text-white transition-colors" aria-label="Email shamar@nevloh.com">
                <Mail size={16} className="text-blue-400 flex-shrink-0" aria-hidden="true" />
                shamar@nevloh.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Spanish Town, St. Catherine<br />Jamaica, W.I.</span>
              </div>
            </address>

            {/* Social */}
            <div className="mt-6">
              <a
                href="https://www.instagram.com/nevlohltd"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleExternalLinkClick('Instagram')}
                className="inline-flex items-center bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl hover:bg-slate-800 transition-all gap-2"
                aria-label="Follow Nevloh on Instagram (opens in new tab)"
              >
                <Instagram size={14} className="text-blue-400" aria-hidden="true" />
                <span className="text-xs font-bold text-white">@nevlohltd</span>
                <ExternalLink size={10} className="text-slate-500" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 3. LEGAL ENTITY DISCLOSURE ─── */}
      <div className="bg-black/40 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-center">
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold leading-relaxed opacity-50 uppercase tracking-[0.2em] mb-2">Legal Entity Disclosure</p>
              <p className="text-xs leading-relaxed opacity-40">
                International trade and commodities procurement are executed via <strong className="text-slate-300">Nevloh LLC</strong> (Wyoming, USA),
                structured strictly under UCP 600 / ISBP 745 standards. Regional energy distribution and petroleum
                haulage within Jamaica are provided by <strong className="text-slate-300">Nevloh Limited</strong>. Contracting entities are disclosed
                per transaction. All settlements via irrevocable bank-secured instruments only.{' '}
                <Link href="/international-trade" className="text-blue-400 hover:underline">
                  Learn more
                </Link>
              </p>
            </div>
            <nav aria-label="Legal links" className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] flex-shrink-0">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/login" className="hover:text-white transition-colors">Admin</Link>
            </nav>
          </div>

          {/* Copyright Bar */}
          <div className="mt-8 pt-8 border-t border-slate-900/50 flex flex-col sm:flex-row justify-between items-center gap-2 opacity-30 text-[10px]">
            <span>&copy; {currentYear} Nevloh Group. All rights reserved.</span>
            <div className="flex items-center gap-2">
              <ShieldCheck size={12} />
              <span className="uppercase tracking-widest font-bold">Secure Trade Platform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}