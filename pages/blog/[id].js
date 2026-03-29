// pages/blog/[id].js
// Tier 1 Institutional — Individual Intelligence Report
// BRAND SEO OPTIMIZED — "Nevloh" as primary brand name
// FIXED: Using getStaticProps/getStaticPaths for proper SSG
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft, Calendar, Clock, User, Tag, Phone, ChevronRight,
  Share2, Globe, Truck, Zap, FileText, ArrowRight
} from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

// ═══════════════════════════════════════════════════════════════════════════
// STATIC GENERATION — Required for Next.js SSG
// ═══════════════════════════════════════════════════════════════════════════

export async function getStaticPaths() {
  const paths = blogPosts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false, // Return 404 for unknown IDs
  };
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find((p) => p.id.toString() === params.id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  // If not enough related posts in same category, fill with recent posts
  if (relatedPosts.length < 2) {
    const additionalPosts = blogPosts
      .filter((p) => p.id !== post.id && !relatedPosts.find((rp) => rp.id === p.id))
      .slice(0, 2 - relatedPosts.length);
    relatedPosts.push(...additionalPosts);
  }

  return {
    props: {
      post,
      relatedPosts,
    },
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// BLOG POST COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export default function BlogPost({ post, relatedPosts }) {
  // Schema markup for article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://www.nevloh.com${post.image}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Nevloh",
      "url": "https://www.nevloh.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nevloh",
      "legalName": "Nevloh Limited",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nevloh.com/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.nevloh.com/blog/${post.id}`
    },
    "keywords": post.tags ? post.tags.join(", ") : "",
    "articleSection": post.category
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Nevloh", "item": "https://www.nevloh.com" },
      { "@type": "ListItem", "position": 2, "name": "Intelligence Desk", "item": "https://www.nevloh.com/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.nevloh.com/blog/${post.id}` }
    ]
  };

  // Handle share functionality
  const handleShare = async () => {
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: typeof window !== 'undefined' ? window.location.href : `https://www.nevloh.com/blog/${post.id}`,
    };

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or error
        console.log('Share cancelled');
      }
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(shareData.url);
      alert('Article URL copied to clipboard!');
    }
  };

  // Prose classes for content styling
  const proseClasses = [
    'prose',
    'prose-lg',
    'prose-slate',
    'max-w-none',
    'prose-headings:font-black',
    'prose-headings:tracking-tight',
    'prose-h2:text-3xl',
    'prose-h2:mt-12',
    'prose-h2:mb-6',
    'prose-h3:text-2xl',
    'prose-h3:mt-8',
    'prose-h3:mb-4',
    'prose-p:leading-relaxed',
    'prose-p:text-slate-600',
    'prose-a:text-blue-600',
    'prose-a:no-underline',
    'hover:prose-a:underline',
    'prose-strong:text-slate-900',
    'prose-ul:my-6',
    'prose-li:text-slate-600',
    'prose-blockquote:border-l-blue-600',
    'prose-blockquote:bg-blue-50',
    'prose-blockquote:py-4',
    'prose-blockquote:px-6',
    'prose-blockquote:rounded-r-xl',
    'prose-blockquote:not-italic'
  ].join(' ');

  return (
    <>
      <Head>
        {/* PRIMARY: Title includes "Nevloh" brand */}
        <title>{`${post.title} | Nevloh Intelligence Desk`}</title>

        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags ? post.tags.join(', ') : ''} />
        <meta name="author" content="Nevloh" />
        <meta name="publisher" content="Nevloh Limited" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.title} | Nevloh`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://www.nevloh.com/blog/${post.id}`} />
        <meta property="og:image" content={`https://www.nevloh.com${post.image}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Nevloh" />
        <meta property="og:locale" content="en_JM" />

        {/* Article Meta */}
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="Nevloh" />
        <meta property="article:section" content={post.category} />
        {post.tags && post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nevlohlimited" />
        <meta name="twitter:title" content={`${post.title} | Nevloh`} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={`https://www.nevloh.com${post.image}`} />

        <link rel="canonical" href={`https://www.nevloh.com/blog/${post.id}`} />
      </Head>

      {/* Structured Data */}
      <Script
        id="article-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="min-h-screen bg-[#fcfdfe] font-sans selection:bg-blue-100">

        {/* ─── TIER 1 HEADER ─── */}
        <header className="relative pt-24 pb-16 bg-slate-900 text-white overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 group transition-colors"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Intelligence Desk
            </Link>

            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-blue-600 text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-slate-400 text-xs">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-8 tracking-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>

            {/* Author */}
            <div className="mt-8 pt-8 border-t border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                <FileText size={20} className="text-blue-400" />
              </div>
              <div>
                <div className="text-white font-bold">{post.author}</div>
                <div className="text-slate-500 text-xs uppercase tracking-widest">Nevloh Intelligence Desk</div>
              </div>
            </div>
          </div>
        </header>

        {/* ─── FEATURED IMAGE ─── */}
        {post.image && (
          <div className="max-w-5xl mx-auto px-6 -mt-8 relative z-10">
            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
          </div>
        )}

        {/* ─── CONTENT ─── */}
        <div className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Blog Content - FIXED: Using variable for className */}
            <div
              className={proseClasses}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* ─── TAGS ─── */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-16 pt-8 border-t border-slate-200">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">
                  Related Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* ─── CTA SECTION ─── */}
            <div className="mt-16">
              <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-12 text-white relative overflow-hidden">
                {/* Background Effect */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/20 rounded-full blur-[80px]" aria-hidden="true" />

                <div className="relative z-10 text-center">
                  <Zap size={40} className="mx-auto mb-6 text-blue-400 opacity-50" />
                  <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">
                    Need Fuel Delivery Services?
                  </h3>
                  <p className="text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
                    Contact Nevloh today for reliable ULSD delivery across all 14 Jamaican parishes.
                    Professional service, competitive rates, and 24/7 emergency support.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href="tel:+18764495172"
                      className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2"
                    >
                      <Phone size={16} />
                      Call: (876) 449-5172
                    </a>
                    <Link
                      href="/contact/jamaica"
                      className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                    >
                      <ChevronRight size={16} />
                      Get Free Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── AUTHOR BIO ─── */}
            <div className="mt-16 pt-8 border-t border-slate-200">
              <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
                  About the Author
                </h3>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <User size={28} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg mb-2">{post.author}</h4>
                    <p className="text-slate-500 leading-relaxed">
                      Expert insights from Nevloh&apos;s team of energy professionals. Our authors bring years of experience
                      in fuel delivery, energy solutions, and business operations across Jamaica&apos;s 14 parishes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── RELATED ARTICLES ─── */}
            {relatedPosts && relatedPosts.length > 0 && (
              <div className="mt-16 pt-8 border-t border-slate-200">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2">
                  Nevloh Intelligence
                </h3>
                <p className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Related Reports</p>

                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.id}`}
                      className="group bg-white border border-slate-100 rounded-[2rem] p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-[10px] font-black uppercase">
                          {relatedPost.category}
                        </span>
                        <span className="text-slate-400 text-[10px] font-bold flex items-center gap-1">
                          <Calendar size={10} />
                          {new Date(relatedPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                        {relatedPost.title}
                      </h4>
                      <p className="text-slate-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-blue-600 text-xs font-black uppercase tracking-widest">
                        Read Report
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* ─── NAVIGATION ─── */}
            <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Link
                href="/blog"
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                All Reports
              </Link>

              {/* Share Button */}
              <div className="flex items-center gap-4">
                <span className="text-slate-500 text-sm">Share this report:</span>
                <button
                  onClick={handleShare}
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-sm transition-all flex items-center gap-2"
                >
                  <Share2 size={16} />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ─── BILATERAL FOOTER ─── */}
        <section className="py-12 px-6 bg-slate-50 border-t border-slate-100">
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
      </article>

      {/* Global Styles for Blog Content */}
      <style jsx global>{`
        .prose img {
          border-radius: 1rem;
          margin: 2rem 0;
        }
        .prose code {
          background: #f1f5f9;
          padding: 0.2em 0.4em;
          border-radius: 0.25rem;
          font-size: 0.9em;
        }
        .prose pre {
          background: #0f172a;
          border-radius: 1rem;
          padding: 1.5rem;
        }
        .prose pre code {
          background: transparent;
          padding: 0;
        }
      `}</style>
    </>
  );
}