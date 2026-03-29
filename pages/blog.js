// pages/blog.js
// Tier 1 Institutional — Market Intelligence Portal
// BRAND SEO OPTIMIZED — "Nevloh" as primary brand name
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import {
  Calendar, Clock, User, Tag, ArrowRight, Search, Filter, Fuel,
  Truck, MapPin, CheckCircle, TrendingUp, DollarSign, Shield,
  Zap, Phone, ChevronRight, Activity, Globe, BarChart3, Newspaper,
  Radio, FileText
} from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => setIsLoaded(true), []);

  const categories = ['All', 'Fuel Delivery', 'Environment', 'Emergency Services', 'Business Tips', 'Technology'];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  // ═══════════════════════════════════════════════════════════════════════════
  // BRAND-OPTIMIZED SCHEMA MARKUP
  // "Nevloh" as primary name, legal names as alternates
  // ═══════════════════════════════════════════════════════════════════════════

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Nevloh Market Intelligence & Energy Insights",
    "alternateName": ["Nevloh Blog", "Nevloh Energy Blog", "Nevloh Intelligence Desk"],
    "description": "Strategic insights on ULSD supply, petroleum logistics, and Caribbean energy markets from Nevloh's technical intelligence desk.",
    "url": "https://www.nevloh.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Nevloh",
      "legalName": "Nevloh Limited",
      "alternateName": ["Nevloh Limited", "Nevloh Jamaica", "Nevloh Group"],
      "url": "https://www.nevloh.com",
      "logo": "https://www.nevloh.com/images/logo.png"
    },
    "blogPost": blogPosts.slice(0, 10).map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": "Nevloh"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Nevloh"
      },
      "url": `https://www.nevloh.com/blog/${post.id}`,
      "image": `https://www.nevloh.com${post.image}`,
      "keywords": post.tags ? post.tags.join(", ") : ""
    }))
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Nevloh", "item": "https://www.nevloh.com" },
      { "@type": "ListItem", "position": 2, "name": "Intelligence Desk", "item": "https://www.nevloh.com/blog" }
    ]
  };

  // Market ticker data
  const marketTicker = [
    { label: 'ULSD 15PPM', value: 'ASTM D975' },
    { label: 'SULPHUR REDUCTION', value: '90%' },
    { label: 'LOGISTICS UPTIME', value: '99.8%' },
    { label: 'COVERAGE', value: '14 PARISHES' },
    { label: 'EMERGENCY SLA', value: '120 MIN' },
    { label: 'FLEET STATUS', value: 'OPERATIONAL' },
    { label: 'DELIVERY SUCCESS', value: '99.8%' },
    { label: 'COMPLIANCE', value: 'UCP 600' }
  ];

  return (
    <>
      <Head>
        {/* PRIMARY: Title leads with "Nevloh" brand */}
        <title>Nevloh Intelligence Desk | Energy Market Insights & ULSD Analysis | Jamaica</title>

        {/* UPDATED: Description starts with "Nevloh" */}
        <meta
          name="description"
          content="Nevloh's technical intelligence desk provides strategic insights on ULSD supply, petroleum logistics, and Caribbean energy markets. Expert analysis from Jamaica's leading fuel delivery company."
        />

        {/* CRITICAL: Keywords include standalone "Nevloh" variations */}
        <meta
          name="keywords"
          content="Nevloh, Nevloh blog, Nevloh insights, Nevloh energy, Jamaica fuel delivery blog, ULSD insights, energy market Jamaica, petroleum logistics, fuel efficiency tips, Nevloh Limited expertise, Caribbean energy analysis"
        />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Nevloh" />
        <meta name="publisher" content="Nevloh Limited" />

        <link rel="canonical" href="https://www.nevloh.com/blog" />

        {/* UPDATED: Open Graph with "Nevloh" brand focus */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nevloh Intelligence Desk | Energy Market Insights Jamaica" />
        <meta property="og:description" content="Nevloh's strategic analysis of Caribbean fuel markets, ULSD technology, and logistics optimization for Jamaica's industrial leaders." />
        <meta property="og:image" content="https://www.nevloh.com/images/og-blog.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.nevloh.com/blog" />
        <meta property="og:site_name" content="Nevloh" />
        <meta property="og:locale" content="en_JM" />

        {/* UPDATED: Twitter with "Nevloh" brand focus */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nevlohlimited" />
        <meta name="twitter:title" content="Nevloh Intelligence Desk | Energy Market Insights" />
        <meta name="twitter:description" content="Nevloh's technical analysis of ULSD, petroleum logistics, and Caribbean energy markets." />
        <meta name="twitter:image" content="https://www.nevloh.com/images/og-blog.png" />
      </Head>

      {/* Structured Data */}
      <Script
        id="blog-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-blue-100">

        {/* Hidden semantic content for brand SEO */}
        <div className="sr-only">
          <h1>Nevloh Intelligence Desk - Energy Market Insights</h1>
          <p>Nevloh (Nevloh Limited) provides strategic energy market analysis and petroleum logistics insights for Jamaica and the Caribbean.</p>
          <span itemProp="name">Nevloh</span>
          <span itemProp="alternateName">Nevloh Limited</span>
          <span itemProp="alternateName">Nevloh Blog</span>
          <span itemProp="alternateName">Nevloh Intelligence Desk</span>
        </div>

        {/* ─── TIER 1 HERO: Institutional Authority ─── */}
        <section className="relative pt-32 pb-20 bg-[#0F172A] overflow-hidden text-white">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                <Newspaper size={14} />
                <span>Nevloh Technical Intelligence Desk</span>
              </span>

              {/* UPDATED: H1 includes "Nevloh" brand */}
              <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
                Nevloh Energy <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Market Insights
                </span>
              </h1>

              <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
                Strategic analysis of the Caribbean fuel landscape, ULSD technology, and
                logistics optimization from Nevloh's expert team for Jamaica's industrial leaders.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar size={16} className="text-blue-400" />
                  <span>Updated Weekly</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <User size={16} className="text-emerald-400" />
                  <span>Industry Experts</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin size={16} className="text-indigo-400" />
                  <span>All Jamaica Parishes</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ─── MARKET INTELLIGENCE TICKER ─── */}
          <div className="relative mt-16 border-y border-white/5 bg-white/5 backdrop-blur-md py-4 overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee">
              {/* First set */}
              {marketTicker.map((stat, i) => (
                <div key={`a-${i}`} className="flex items-center gap-2 px-8 border-r border-white/10">
                  <Activity size={12} className="text-emerald-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{stat.label}</span>
                  <span className="text-xs font-black text-white">{stat.value}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {marketTicker.map((stat, i) => (
                <div key={`b-${i}`} className="flex items-center gap-2 px-8 border-r border-white/10">
                  <Activity size={12} className="text-emerald-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{stat.label}</span>
                  <span className="text-xs font-black text-white">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SEARCH & DISCOVERY BAR ─── */}
        <section className="sticky top-20 z-40 px-6 -mt-8">
          <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-4 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search Nevloh market reports, tech specs, and field updates..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                      : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURED ANALYTICS ARTICLE ─── */}
        {featuredPost && !searchTerm && selectedCategory === 'All' && (
          <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <Link href={`/blog/${featuredPost.id}`} className="group block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl transition-all hover:shadow-2xl hover:scale-[1.01] grid lg:grid-cols-2"
                >
                  <div className="relative aspect-video lg:aspect-auto bg-slate-100 overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-8 left-8">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">
                        Nevloh Featured Report
                      </span>
                    </div>
                  </div>
                  <div className="p-10 lg:p-16 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                      <span className="text-blue-600">{featuredPost.category}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime} Read</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors tracking-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-slate-500 leading-relaxed mb-8">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest">
                      Examine Analysis
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          </section>
        )}

        {/* ─── INTELLIGENCE GRID ─── */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-2">
                  Nevloh Intelligence
                </h2>
                <p className="text-3xl font-black text-slate-900 tracking-tight">
                  {searchTerm || selectedCategory !== 'All' ? 'Filtered Reports' : 'Recent Reports'}
                </p>
                <div className="w-12 h-1.5 bg-blue-600 mt-3 rounded-full" />
              </div>
              <div className="text-slate-500 text-sm font-bold">
                {filteredPosts.length} report{filteredPosts.length !== 1 ? 's' : ''} found
              </div>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <Search size={64} className="mx-auto text-slate-300 mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">No reports found</h3>
                <p className="text-slate-500 mb-8">Try adjusting your search terms or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition-all"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {filteredPosts.filter(post => !post.featured || searchTerm || selectedCategory !== 'All').map((post, i) => (
                    <motion.article
                      key={post.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: i * 0.05 }}
                      className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
                    >
                      <Link href={`/blog/${post.id}`} className="flex-1 flex flex-col">
                        <div className="relative h-56 bg-slate-100 overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute top-4 right-4">
                            <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-black uppercase text-slate-900 border border-white/20">
                              {post.category}
                            </div>
                          </div>
                        </div>
                        <div className="p-8 flex flex-col flex-1">
                          <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} />
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-4 tracking-tight">
                            {post.title}
                          </h3>
                          <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 flex-1">
                            {post.excerpt}
                          </p>

                          {/* Tags */}
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
                              {post.tags.slice(0, 3).map((tag, index) => (
                                <span key={index} className="bg-slate-50 text-slate-500 px-2 py-1 rounded-lg text-[10px] font-bold uppercase">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="pt-6 flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-widest">
                            Full Analysis
                            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </section>

        {/* ─── TIER 1 CTAs: Bilateral Strategy ─── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Supply Strategy CTA */}
            <div className="lg:col-span-2 bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-600/10 rounded-full blur-[80px]" aria-hidden="true" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                  <Radio size={12} />
                  <span>Nevloh Technical Desk</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight leading-tight">
                  Need a Custom <br />
                  <span className="text-blue-400">Supply Strategy?</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10 max-w-xl leading-relaxed">
                  Nevloh's technical desk provides more than just fuel—we deliver
                  operational audits to optimize your consumption and reduce maintenance costs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact/jamaica"
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest text-center transition-all shadow-xl shadow-blue-900/40"
                  >
                    Consult an Expert
                  </Link>
                  <a
                    href="tel:+18764495172"
                    className="px-8 py-4 bg-white/10 border border-white/10 hover:bg-white/20 text-white rounded-2xl font-bold text-xs uppercase tracking-widest text-center transition-all flex items-center justify-center gap-2"
                  >
                    <Phone size={16} />
                    Call 24/7 Dispatch
                  </a>
                </div>
              </div>
            </div>

            {/* ESG Compliance CTA */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-700 rounded-[3rem] p-10 text-white flex flex-col justify-between shadow-2xl">
              <div>
                <Shield className="mb-6 opacity-50" size={48} />
                <h3 className="text-2xl font-black mb-4 tracking-tight">ESG Compliance Dashboard</h3>
                <p className="text-emerald-50 text-sm leading-relaxed mb-8">
                  Learn how switching to Nevloh ULSD helps your firm meet
                  international carbon reporting standards.
                </p>
              </div>
              <Link
                href="/sustainability"
                className="bg-white text-emerald-700 py-4 rounded-2xl font-black text-center text-xs uppercase tracking-widest shadow-xl hover:bg-emerald-50 transition-all"
              >
                View Protocol
              </Link>
            </div>
          </div>
        </section>

        {/* ─── NEWSLETTER: Market Alerts ─── */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[3rem] p-12 md:p-16 border border-slate-100 shadow-xl">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-blue-50 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 shadow-sm border border-blue-100">
                  <BarChart3 className="text-blue-600" size={32} />
                </div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">
                  Nevloh Market Alerts
                </h2>
                <p className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Subscribe to Intelligence Reports</p>
                <p className="text-slate-500 max-w-lg mx-auto">
                  Get weekly technical analysis and price trend alerts for the Jamaican fuel market from Nevloh's research team.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 p-2 bg-slate-50 rounded-[2rem] border border-slate-100">
                <input
                  type="email"
                  placeholder="Professional Email Address"
                  className="flex-1 px-8 py-4 bg-transparent border-none focus:ring-0 text-slate-900 placeholder:text-slate-400"
                />
                <button className="px-10 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-[1.5rem] font-black uppercase text-xs tracking-widest transition-all shadow-lg">
                  Join The Network
                </button>
              </div>

              <p className="text-center text-xs text-slate-400 mt-6">
                Weekly insights • No spam • Unsubscribe anytime
              </p>
            </div>
          </div>
        </section>

        {/* ─── TRUST INDICATORS ─── */}
        <section className="py-16 px-6 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-black text-blue-400">50,000+</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Gallons Delivered</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-black text-emerald-400">14</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Parishes Served</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-black text-indigo-400">99.8%</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Success Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-black text-orange-400">24/7</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Emergency Service</div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── BILATERAL LINKS ─── */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-slate-500 mb-6 text-sm">
              <strong className="text-slate-700">Nevloh Coverage:</strong> All 14 parishes across Jamaica
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 text-xs font-bold uppercase tracking-widest transition-colors"
              >
                <Truck size={14} />
                Explore Services →
              </Link>
              <Link
                href="/contact/international"
                className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 text-xs font-bold uppercase tracking-widest transition-colors"
              >
                <Globe size={14} />
                International Trade Desk →
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Marquee Animation Styles */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </>
  );
};

export default BlogPage;