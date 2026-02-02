// components/Navbar.js
// Tier 1 Institutional — Nevloh Group Bilateral Navigation
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  Menu, X, ChevronDown, Truck, Zap, MapPin,
  Building2, Users, Fuel, Globe, ShieldCheck, Phone
} from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Institutional scroll "thinning" — top bar collapses on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
      setIsServicesOpen(false);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router.events]);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav') && !event.target.closest('.mobile-panel')) {
        setIsMobileMenuOpen(false);
      }
      if (isServicesOpen && !event.target.closest('.services-dropdown') && !event.target.closest('.mobile-services-dropdown')) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen, isServicesOpen]);

  // Analytics
  const handleNavClick = (label) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', { event_category: 'Navigation', event_label: label, value: 1 });
    }
  };

  // Active route check
  const isActiveRoute = (path) => {
    if (path === '/') return router.pathname === '/';
    return router.pathname.startsWith(path);
  };

  // Full service list — all 6 items preserved
  const servicesDropdownItems = [
    { href: '/services/haulage', label: 'Haulage Services', description: 'Licensed petroleum transportation', icon: Users, color: 'text-slate-600' },
    { href: '/services/fleet-refuelling', label: 'Fleet Refuelling', description: 'On-site fleet fuel management', icon: Truck, color: 'text-blue-600' },
    { href: '/services/generator-refuelling', label: 'Generator Support', description: '24/7 emergency power supply', icon: Zap, color: 'text-green-600' },
    { href: '/services/on-site-fuel-delivery', label: 'On-Site Delivery', description: 'Direct delivery anywhere in Jamaica', icon: MapPin, color: 'text-purple-600' },
    { href: '/services/bulk-fuel', label: 'Bulk Fuel Supply', description: 'Industrial volume delivery', icon: Building2, color: 'text-orange-600' },
    { href: '/services/ulsd', label: 'ULSD Supply', description: 'Ultra Low Sulphur Diesel', icon: Fuel, color: 'text-emerald-600' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">

      {/* ─── 1. INSTITUTIONAL TOP BAR — Collapses on scroll ─── */}
      <div className={`bg-slate-900 text-white transition-all duration-500 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2 text-blue-400">
              <Globe size={12} /> Nevloh LLC: Casper, WY
            </span>
            <span className="flex items-center gap-2 text-emerald-400">
              <MapPin size={12} /> Nevloh Limited: Kingston, JM
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <Link href="/glossary#ucp-600" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <ShieldCheck size={12} /> UCP 600 Compliant
            </Link>
            <a href="tel:+18764495172" className="text-white hover:text-blue-400 transition-colors flex items-center gap-1.5">
              <Phone size={12} /> (876) 449-5172
            </a>
          </div>
        </div>
      </div>

      {/* ─── 2. MAIN NAVIGATION ─── */}
      <nav
        className={`transition-all duration-300 border-b border-slate-200/60 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl py-2.5 shadow-xl'
            : 'bg-white py-4'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* Brand — Bilateral Group Identity */}
          <Link
            href="/"
            onClick={() => handleNavClick('Logo')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            aria-label="Nevloh Group — Go to homepage"
          >
            <div className="relative w-11 h-11 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Nevloh Group"
                fill
                className="object-contain rounded-full shadow-md"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                Nevloh <span className="text-blue-600">Group</span>
              </span>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">Energy &amp; Trade</p>
            </div>
          </Link>

          {/* ─── Desktop Links ─── */}
          <div className="hidden lg:flex items-center gap-3" role="menubar">

            <Link
              href="/"
              onClick={() => handleNavClick('Home')}
              className={`nav-link ${isActiveRoute('/') && router.pathname === '/' ? 'text-blue-600 bg-slate-50' : ''}`}
              role="menuitem"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => handleNavClick('About')}
              className={`nav-link ${isActiveRoute('/about') ? 'text-blue-600 bg-slate-50' : ''}`}
              role="menuitem"
            >
              About
            </Link>

            {/* Services Mega Dropdown */}
            <div
              className="relative services-dropdown"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`nav-link flex items-center gap-1 ${isServicesOpen || isActiveRoute('/services') ? 'text-blue-600 bg-slate-50' : ''}`}
                onClick={() => handleNavClick('Services')}
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
              >
                Services
                <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* Invisible bridge */}
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 w-full h-3 bg-transparent"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                />
              )}

              {/* Mega Menu */}
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-3 w-[520px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 animate-dropdown-in"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  style={{ transform: 'translateX(-40px)' }}
                >
                  <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Logistics Operations</p>
                    <Link href="/services" className="text-[10px] font-bold text-blue-600 uppercase tracking-wider hover:underline">
                      View All
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {servicesDropdownItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all"
                          onClick={() => handleNavClick(item.label)}
                          role="menuitem"
                        >
                          <div className="bg-slate-50 p-2.5 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all flex-shrink-0">
                            <IconComponent size={18} className={`${item.color} group-hover:text-white transition-colors`} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.label}</p>
                            <p className="text-[11px] text-slate-500 leading-tight">{item.description}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/international-trade"
              onClick={() => handleNavClick('International Trade')}
              className={`nav-link flex items-center gap-1.5 ${isActiveRoute('/international-trade') ? 'text-blue-600 bg-slate-50' : ''}`}
              role="menuitem"
            >
              <Globe size={14} className="text-blue-600" />
              <span className="hidden xl:inline">International Trade</span>
              <span className="xl:hidden">Int&apos;l Trade</span>
            </Link>

            <Link
              href="/blog"
              onClick={() => handleNavClick('Blog')}
              className={`nav-link ${isActiveRoute('/blog') ? 'text-blue-600 bg-slate-50' : ''}`}
              role="menuitem"
            >
              Blog
            </Link>

            <Link
              href="/sustainability"
              onClick={() => handleNavClick('Sustainability')}
              className={`nav-link ${isActiveRoute('/sustainability') ? 'text-blue-600 bg-slate-50' : ''}`}
              role="menuitem"
            >
              Sustainability
            </Link>
          </div>

          {/* ─── CTA Group ─── */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              onClick={() => handleNavClick('Contact')}
              className="hidden sm:flex bg-slate-900 hover:bg-blue-600 text-white px-7 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-blue-200 hover:scale-105"
              role="menuitem"
            >
              Get Quote
            </Link>
            <Link
              href="/login"
              onClick={() => handleNavClick('Login')}
              className="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-200"
              aria-label="Admin Login"
              role="menuitem"
            >
              <ShieldCheck size={18} />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ─── Mobile Menu ─── */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl mobile-panel animate-fade-in-down"
            role="menu"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">

              <Link
                href="/"
                className={`mobile-link ${isActiveRoute('/') && router.pathname === '/' ? 'text-blue-600 bg-slate-50' : ''}`}
                onClick={() => { handleNavClick('Home'); setIsMobileMenuOpen(false); }}
                role="menuitem"
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`mobile-link ${isActiveRoute('/about') ? 'text-blue-600 bg-slate-50' : ''}`}
                onClick={() => { handleNavClick('About'); setIsMobileMenuOpen(false); }}
                role="menuitem"
              >
                About the Group
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="mobile-services-dropdown">
                <div className="flex items-center justify-between">
                  <Link
                    href="/services"
                    className={`flex-1 mobile-link ${isActiveRoute('/services') ? 'text-blue-600 bg-slate-50' : ''}`}
                    onClick={() => { handleNavClick('Services'); setIsMobileMenuOpen(false); }}
                    role="menuitem"
                  >
                    Energy Services
                  </Link>
                  <button
                    onClick={(e) => { e.stopPropagation(); setIsServicesOpen(!isServicesOpen); }}
                    className="ml-2 p-2.5 rounded-xl hover:bg-slate-100 transition-colors"
                    aria-label="Toggle services menu"
                    aria-expanded={isServicesOpen}
                  >
                    <ChevronDown size={20} className={`text-slate-600 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {isServicesOpen && (
                  <div className="mt-2 ml-2 bg-slate-50 rounded-2xl p-3 space-y-1 animate-fade-in border border-slate-100">
                    {servicesDropdownItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-white transition-colors group"
                          onClick={() => { handleNavClick(item.label); setIsMobileMenuOpen(false); setIsServicesOpen(false); }}
                          role="menuitem"
                        >
                          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-blue-50 transition-colors">
                            <IconComponent size={16} className={item.color} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">{item.label}</p>
                            <p className="text-[11px] text-slate-500">{item.description}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/international-trade"
                className={`mobile-link flex items-center gap-2 ${isActiveRoute('/international-trade') ? 'text-blue-600 bg-slate-50' : ''}`}
                onClick={() => { handleNavClick('International Trade'); setIsMobileMenuOpen(false); }}
                role="menuitem"
              >
                <Globe size={18} className="text-blue-600" />
                International Trade Desk
              </Link>

              <Link
                href="/blog"
                className={`mobile-link ${isActiveRoute('/blog') ? 'text-blue-600 bg-slate-50' : ''}`}
                onClick={() => { handleNavClick('Blog'); setIsMobileMenuOpen(false); }}
                role="menuitem"
              >
                Market Blog
              </Link>

              <Link
                href="/sustainability"
                className={`mobile-link ${isActiveRoute('/sustainability') ? 'text-blue-600 bg-slate-50' : ''}`}
                onClick={() => { handleNavClick('Sustainability'); setIsMobileMenuOpen(false); }}
                role="menuitem"
              >
                Sustainability
              </Link>

              {/* Mobile CTA Buttons */}
              <hr className="border-slate-100 my-2" />

              <Link
                href="/contact"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all"
                onClick={() => { handleNavClick('Contact Mobile'); setIsMobileMenuOpen(false); }}
                role="menuitem"
              >
                Request Operations Quote
              </Link>

              <Link
                href="/login"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white text-center py-3 rounded-2xl font-bold text-sm transition-all mt-2"
                onClick={() => { handleNavClick('Login Mobile'); setIsMobileMenuOpen(false); }}
                role="menuitem"
              >
                Admin Login
              </Link>

              {/* Mobile Bilateral Info */}
              <div className="flex items-center justify-center gap-4 pt-4 mt-2 border-t border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                <span className="flex items-center gap-1.5 text-blue-500">
                  <Globe size={10} /> Wyoming, USA
                </span>
                <span className="flex items-center gap-1.5 text-emerald-500">
                  <MapPin size={10} /> Kingston, JM
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ─── Scoped Styles ─── */}
      <style jsx>{`
        .nav-link {
          font-size: 0.875rem;
          font-weight: 700;
          color: rgb(71, 85, 105);
          padding: 0.625rem 1.25rem;
          border-radius: 0.75rem;
          transition: all 0.25s ease;
          border: 1px solid transparent;
        }
        .nav-link:hover {
          color: rgb(37, 99, 235);
          background-color: rgb(239, 246, 255);
          border-color: rgb(191, 219, 254);
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.1);
        }

        .mobile-link {
          font-size: 1rem;
          font-weight: 700;
          color: rgb(15, 23, 42);
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          transition: all 0.25s ease;
          border-left: 3px solid transparent;
        }
        .mobile-link:hover {
          color: rgb(37, 99, 235);
          background-color: rgb(239, 246, 255);
          border-left-color: rgb(37, 99, 235);
        }

        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(-6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes dropdown-in {
          0% { opacity: 0; transform: translateX(-40px) translateY(-4px) scale(0.98); }
          100% { opacity: 1; transform: translateX(-40px) translateY(0) scale(1); }
        }

        .animate-fade-in-down { animation: fade-in-down 0.3s ease-out; }
        .animate-fade-in { animation: fade-in 0.2s ease-out; }
        .animate-dropdown-in { animation: dropdown-in 0.25s ease-out forwards; }
      `}</style>
    </div>
  );
}