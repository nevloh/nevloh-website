// pages/blog.js - Updated to use shared data
import React, { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '../data/blogPosts'; // Import shared data
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  Search,
  Filter,
  Fuel,
  Truck,
  MapPin,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Shield,
  Zap,
  Phone,
  ChevronRight
} from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Fuel Delivery', 'Environment', 'Emergency Services', 'Business Tips', 'Technology'];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 6);

  // Schema markup for blog
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Nevloh Limited Blog - Jamaica Energy Solutions",
    "description": "Expert insights on fuel delivery, energy solutions, and business efficiency from Jamaica's leading ULSD supplier serving all 14 parishes.",
    "url": "https://www.nevloh.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Nevloh Limited",
      "url": "https://www.nevloh.com",
      "logo": "https://www.nevloh.com/images/nevloh-logo.png"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Nevloh Limited"
      },
      "url": `https://www.nevloh.com/blog/${post.id}`,
      "image": `https://www.nevloh.com${post.image}`,
      "keywords": post.tags.join(", ")
    }))
  };

  return (
    <>
      <Head>
        <title>Nevloh Limited Blog - Expert Fuel Delivery Insights for Jamaica | ULSD & Energy Solutions</title>
        <meta name="description" content="Discover expert insights on fuel delivery, ULSD, energy efficiency, and business solutions from Jamaica's leading fuel supplier. Serving all 14 parishes with professional expertise since 2022." />
        <meta name="keywords" content="Jamaica fuel delivery blog, ULSD insights, business fuel solutions, energy efficiency Jamaica, mobile refueling tips, emergency fuel delivery, environmental impact ULSD, fuel cost savings, Nevloh Limited expertise" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Nevloh Limited Blog - Jamaica's Premier Fuel Delivery Insights" />
        <meta property="og:description" content="Expert insights on fuel delivery, energy solutions, and business efficiency from Jamaica's trusted ULSD supplier serving all parishes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nevloh.com/blog" />
        <meta property="og:image" content="https://www.nevloh.com/images/blog-og.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nevloh Limited Blog - Expert Fuel Delivery Insights" />
        <meta name="twitter:description" content="Professional insights on ULSD, mobile refueling, and energy solutions across Jamaica's 14 parishes." />
        
        <link rel="canonical" href="https://www.nevloh.com/blog" />
      </Head>

      <Script
        id="blog-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema)
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm rounded-full px-6 py-2 border border-blue-400/30 mb-6">
              <Zap size={16} className="mr-2 text-blue-300" />
              <span className="text-blue-100 text-sm font-medium">Expert Energy Insights</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Nevloh Limited
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Energy Blog
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Expert insights on fuel delivery, energy efficiency, and business solutions 
              from Jamaica's trusted ULSD supplier serving all 14 parishes since 2022.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-blue-200">
                <Calendar size={16} className="mr-2" />
                <span>Updated Weekly</span>
              </div>
              <div className="flex items-center text-blue-200">
                <User size={16} className="mr-2" />
                <span>Industry Experts</span>
              </div>
              <div className="flex items-center text-blue-200">
                <MapPin size={16} className="mr-2" />
                <span>All Jamaica Parishes</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 bg-white shadow-sm">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-lg">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-4">
                <Filter size={20} className="text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredPost && (
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <span className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  <TrendingUp size={16} className="mr-2" />
                  Featured Article
                </span>
              </div>

              <article className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {/* Fallback */}
                    <div className="flex items-center justify-center">
                      <Fuel size={64} className="text-blue-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {featuredPost.readTime}
                        </div>
                      </div>

                      <Link
                        href={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                      >
                        Read Full Article
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
        )}

        {/* Recent Articles Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-gray-800">
                {searchTerm || selectedCategory !== 'All' ? 'Filtered Articles' : 'Latest Articles'}
              </h2>
              <div className="text-gray-500">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              </div>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <Search size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your search terms or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.filter(post => !post.featured).map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      {/* Fallback */}
                      <div className="flex items-center justify-center">
                        <Fuel size={48} className="text-blue-500" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Calendar size={12} className="mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock size={12} className="mr-1" />
                          {post.readTime}
                        </div>

                        <Link
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                        >
                          Read More
                          <ArrowRight size={14} className="ml-1" />
                        </Link>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Optimize Your
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Fuel Operations?
                </span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of businesses across Jamaica who trust Nevloh Limited for reliable ULSD delivery, 
                emergency fuel services, and expert energy solutions across all 14 parishes.
              </p>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto my-12">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Call for Immediate Service</h3>
                  <p className="text-blue-100 text-sm mb-4">24/7 emergency fuel delivery across Jamaica</p>
                  <a
                    href="tel:+18764495172"
                    className="text-blue-300 hover:text-white font-semibold"
                  >
                    (876) 449-5172
                  </a>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Get Free Quote</h3>
                  <p className="text-blue-100 text-sm mb-4">Custom pricing for your business needs</p>
                  <a
                    href="/contact"
                    className="text-green-300 hover:text-white font-semibold"
                  >
                    Request Quote
                  </a>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Learn More</h3>
                  <p className="text-blue-100 text-sm mb-4">Discover our complete energy solutions</p>
                  <a
                    href="/services"
                    className="text-purple-300 hover:text-white font-semibold"
                  >
                    Our Services
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+18764495172"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center font-semibold shadow-lg"
                >
                  <Phone size={20} className="mr-2" />
                  Call Now: (876) 449-5172
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-slate-900 transition-colors flex items-center font-semibold"
                >
                  <ChevronRight size={20} className="mr-2" />
                  Get Started Today
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-12 mt-12 border-t border-white/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-blue-400">50,000+</div>
                    <div className="text-sm text-blue-200">Gallons Delivered</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-purple-400">14</div>
                    <div className="text-sm text-purple-200">Parishes Served</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-green-400">99.8%</div>
                    <div className="text-sm text-green-200">Success Rate</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-yellow-400">24/7</div>
                    <div className="text-sm text-yellow-200">Emergency Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 lg:p-12">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={32} className="text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Stay Updated with Energy Insights
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Get the latest articles on fuel efficiency, cost savings, and energy solutions 
                delivered directly to your inbox. Join Jamaica's energy professionals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Weekly insights • No spam • Unsubscribe anytime
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;