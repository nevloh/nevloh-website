/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.nevloh.com', // Your actual domain
  generateRobotsTxt: true,
  generateIndexSitemap: false, // This prevents separate sitemap files

  // Sitemap configuration
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000, // Increased to ensure single sitemap

  // Exclude pages you don't want in sitemap
  exclude: [
    '/login',
    '/signupPage',
    '/unauthorizedPage',
    '/admin/*',
    '/api/*'
  ],

  // Custom transformation for specific pages
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }

    if (path.startsWith('/services')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }

    if (path.startsWith('/blog')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }

    // Default transformation
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },

  // Additional paths (if you have dynamic routes not covered by pages)
  additionalPaths: async (config) => [
    // Add any additional paths here if needed
    // await config.transform(config, '/additional-page'),
  ],

  // Robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/login', '/admin', '/api'],
      },
    ],
    additionalSitemaps: [
      // Add additional sitemaps if needed
      // 'https://nevloh-website.onrender.com/my-custom-sitemap.xml',
    ],
  },
}