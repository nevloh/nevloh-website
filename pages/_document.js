// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Essential Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />

        {/* Favicons and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Performance: Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Fonts - Inter Font Family */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* REMOVED: Problematic local font preload that was causing syntax error */}
        {/* Only include local fonts if you actually have the font files in public/fonts/ */}

        {/* Security Headers */}
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

        {/* DNS Prefetch for better performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Nevloh Limited Brand Meta */}
        <meta name="application-name" content="Nevloh Limited" />
        <meta name="apple-mobile-web-app-title" content="Nevloh Limited" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Open Graph Default Image (for pages without specific OG images) */}
        <meta property="og:site_name" content="Nevloh Limited" />
        <meta property="og:locale" content="en_JM" />
        <meta property="og:type" content="website" />

        {/* Twitter Default */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nevlohltd" />
        <meta name="twitter:creator" content="@nevlohltd" />

        {/* Structured Data for Organization (appears on all pages) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nevloh Limited",
              "alternateName": "Nevloh Ltd",
              "description": "Jamaica's premier energy solutions company specializing in Ultra Low Sulphur Diesel delivery, solar energy systems, and comprehensive energy storage solutions.",
              "url": "https://nevloh.com",
              "logo": "https://nevloh.com/images/nevloh-logo.webp",
              "foundingDate": "2022",
              "founder": {
                "@type": "Person",
                "name": "Sashell Cooper-Nevins"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Caymanas Bay",
                "addressLocality": "Spanish Town",
                "addressRegion": "Saint Catherine Parish",
                "addressCountry": "Jamaica",
                "postalCode": ""
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "17.9909",
                "longitude": "-76.9564"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-876-449-5172",
                  "contactType": "customer service",
                  "areaServed": "JM",
                  "availableLanguage": "English"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/nevlohltd",
                "https://www.facebook.com/nevlohltd",
                "https://www.linkedin.com/company/nevloh-limited"
              ],
              "serviceArea": {
                "@type": "Country",
                "name": "Jamaica"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Energy Solutions",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Ultra Low Sulphur Diesel Delivery",
                      "description": "Professional ULSD fuel delivery across Jamaica"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Solar Energy Systems",
                      "description": "Complete solar panel installation and maintenance"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Energy Storage Solutions",
                      "description": "Advanced battery backup and energy storage systems"
                    }
                  }
                ]
              },
              "areaServed": [
                "Kingston", "Saint Andrew", "Saint Catherine", "Clarendon",
                "Manchester", "Saint Elizabeth", "Westmoreland", "Hanover",
                "Saint James", "Trelawny", "Saint Ann", "Saint Mary",
                "Portland", "Saint Thomas"
              ]
            })
          }}
        />

        {/* Prevent FOUC (Flash of Unstyled Content) */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Prevent FOUC by hiding content until fonts load */
            .font-loading {
              visibility: hidden;
            }
            
            /* Show content once fonts are ready */
            .fonts-loaded {
              visibility: visible;
            }
            
            /* Ensure Inter font is applied correctly */
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            }
          `
        }} />
      </Head>

      <body className="font-inter antialiased bg-white text-gray-900">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <Main />
        <NextScript />

        {/* Font loading optimization script - FIXED */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Add fonts-loaded class to prevent FOUC
              document.documentElement.classList.add('fonts-loaded');
              
              // Check if fonts are ready (modern browsers)
              if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(function() {
                  document.documentElement.classList.add('fonts-loaded');
                  document.documentElement.classList.remove('font-loading');
                  console.log('Fonts loaded successfully');
                });
              }
            })();
          `
        }} />

        {/* Optional: Service Worker registration - IMPROVED */}
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator && location.protocol === 'https:') {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('SW registered: ', registration);
                  })
                  .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
              });
            }
          `
        }} />
      </body>
    </Html>
  )
}