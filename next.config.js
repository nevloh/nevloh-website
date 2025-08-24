/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Image optimization for Nevloh Limited
  images: {
    domains: [
      'nevloh.com',
      'www.nevloh.com',
      // Add other external image domains if needed
      'images.unsplash.com', // If you use Unsplash images
      'via.placeholder.com', // For placeholder images
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // Cache images for 60 seconds
  },

  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Compiler optimizations
  compiler: {
    // Remove console logs in production for better performance
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'], // Keep error and warn logs
    } : false,
  },

  // Server components external packages
  serverExternalPackages: [
    'firebase',
    'firebase-admin',
  ],

  // Security and performance headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      // Font optimization
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Image optimization
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // URL rewrites for clean URLs
  async rewrites() {
    return [
      // Example: Rewrite for cleaner URLs
      // {
      //   source: '/fuel-delivery',
      //   destination: '/services/fuel-delivery',
      // },
      // Add any URL rewrites here for Nevloh specific routes
    ];
  },

  // Redirects for SEO and URL management
  async redirects() {
    return [
      // Example redirects for Nevloh Limited
      // {
      //   source: '/home',
      //   destination: '/',
      //   permanent: true,
      // },
      // {
      //   source: '/about-us',
      //   destination: '/about',
      //   permanent: true,
      // },
      // Add any redirects here for old URLs or URL consolidation
    ];
  },

  // Performance optimizations
  experimental: {
    // Modern optimizations
    optimizeCss: true,
    esmExternals: true,
  },

  // Remove powered by header for security
  poweredByHeader: false,

  // Enable compression
  compress: true,

  // Output configuration (good for deployment)
  output: 'standalone',

  // Webpack customizations
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimize for Firebase
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      };
    }

    // SVG support (if needed)
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  // Development optimizations
  ...(process.env.NODE_ENV === 'development' && {
    onDemandEntries: {
      maxInactiveAge: 25 * 1000,
      pagesBufferLength: 2,
    },
  }),

  // Production optimizations
  ...(process.env.NODE_ENV === 'production' && {
    // Additional production-only configurations
    generateEtags: false,
    httpAgentOptions: {
      keepAlive: true,
    },
  }),
};

module.exports = nextConfig;