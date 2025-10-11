/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.nevloh.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,

  // CRITICAL: Enable automatic lastmod
  autoLastmod: true,

  // Default values
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,

  // Exclude pages
  exclude: [
    '/login',
    '/signupPage',
    '/unauthorizedPage',
    '/admin/*',
    '/api/*',
    '/404',
    '/500',
    '/_*',
  ],

  // Transform function
  transform: async (config, path) => {
    // Homepage
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    // Services pages
    if (path.startsWith('/services')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    // About, Contact, Blog
    if (['/about', '/contact', '/blog'].some(p => path === p)) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // Industries, Sustainability
    if (['/industries', '/sustainability'].some(p => path === p)) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      };
    }

    // Legal pages
    if (['/privacy', '/terms'].some(p => path === p)) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.5,
        lastmod: new Date().toISOString(),
      };
    }

    // Default for any other pages
    return {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },

  // CRITICAL: Explicitly add all your pages
  additionalPaths: async (config) => {
    const paths = [
      // Main pages
      '/about',
      '/services',
      '/industries',
      '/sustainability',
      '/contact',
      '/blog',
      '/privacy',
      '/terms',

      // Service sub-pages
      '/services/fleet-refuelling',
      '/services/generator-refuelling',
      '/services/on-site-fuel-delivery',
      '/services/bulk-fuel',
      '/services/haulage',
      '/services/ulsd',
    ];

    return paths.map(path => ({
      loc: path,
      changefreq: path.startsWith('/services') ? 'weekly' : 'monthly',
      priority: path.startsWith('/services') ? 0.9 : 0.7,
      lastmod: new Date().toISOString(),
    }));
  },

  // Robots.txt options
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/login', '/admin', '/api', '/signupPage', '/unauthorizedPage'],
      },
    ],
  },
};