// pages/blog/[id].js - Complete individual blog post page
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag, Phone, ChevronRight, Share2 } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts'; // Import shared data

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  const post = blogPosts.find(p => p.id.toString() === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="text-center bg-white rounded-3xl p-12 shadow-xl max-w-md">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ArrowLeft size={32} className="text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or may have been moved.</p>
          <Link
            href="/blog"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | Nevloh Limited Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://nevloh.com/blog/${post.id}`} />
        <meta property="og:image" content={`https://nevloh.com${post.image}`} />
        <meta property="og:site_name" content="Nevloh Limited" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={`https://nevloh.com${post.image}`} />

        {/* Article Tags */}
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

        <link rel="canonical" href={`https://nevloh.com/blog/${post.id}`} />
      </Head>

      <article className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium transition-colors group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="mb-6">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              {post.excerpt}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags Section */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Topics:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Fuel Delivery Services?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Contact Nevloh Limited today for reliable ULSD delivery across all 14 Jamaican parishes.
                  Professional service, competitive rates, and 24/7 emergency support.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="tel:+18764495172"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center"
                  >
                    <Phone size={16} className="mr-2" />
                    Call: (876) 449-5172
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    Get Free Quote
                  </a>
                </div>
              </div>
            </div>

            {/* Author Bio Section */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">About the Author</h3>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{post.author}</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Expert insights from Nevloh Limited's team of energy professionals. Our authors bring years of experience
                      in fuel delivery, energy solutions, and business operations across Jamaica's 14 parishes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts
                  .filter(relatedPost => relatedPost.id !== post.id)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.id}`}
                      className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                          {relatedPost.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Calendar size={12} className="mr-1" />
                          {new Date(relatedPost.date).toLocaleDateString()}
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center text-blue-600 text-sm font-medium">
                        <span>Read More</span>
                        <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Navigation Section */}
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Link
                href="/blog"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                <ArrowLeft size={16} className="mr-2" />
                View All Articles
              </Link>

              {/* Share Section */}
              <div className="flex items-center gap-4">
                <span className="text-gray-600 text-sm">Share this article:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: post.title,
                          text: post.excerpt,
                          url: window.location.href,
                        });
                      } else {
                        // Fallback: copy URL to clipboard
                        navigator.clipboard.writeText(window.location.href);
                        alert('Article URL copied to clipboard!');
                      }
                    }}
                    className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium flex items-center"
                  >
                    <Share2 size={14} className="mr-1" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}