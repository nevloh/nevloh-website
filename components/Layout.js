// components/Layout.js
// Tier 1 Institutional — Nevloh Group Bilateral Layout
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, title, description, keywords, noIndex = false, ogImage }) => {
  const router = useRouter();

  // List of paths where the navbar should be hidden
  const hideNavbarRoutes = ['/login', '/admin', '/unauthorized'];

  // Check if current route should hide navbar
  const shouldHideNavbar = hideNavbarRoutes.some(route =>
    router.pathname.startsWith(route)
  );

  // Generate dynamic page title — Tier 1 Bilateral Branding
  const pageTitle = title
    ? `${title} | Nevloh Group - Energy & Commodities`
    : 'Nevloh Group | Fuel Logistics Jamaica & International Commodities Trade';

  // Default meta description — Bilateral positioning
  const pageDescription = description ||
    'Nevloh Group: Regional fuel logistics across Jamaica via Nevloh Limited and structured commodities trade (EN590 Diesel, Urea 46%) via Nevloh LLC (Wyoming, USA). UCP 600 compliant. 24/7 operations.';

  // Default keywords — Regional + International
  const pageKeywords = keywords ||
    'fuel delivery Jamaica, diesel delivery, petroleum haulage, fleet refuelling, bulk fuel supply, international commodities trade, EN590 diesel, Urea 46%, UCP 600, LC at sight, Wyoming trade desk, Caribbean energy, Nevloh Group, Nevloh Limited, Nevloh LLC';

  // Dynamic OG image
  const ogImageUrl = ogImage || 'https://www.nevloh.com/images/og-default.png';

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />

        {/* Robots */}
        <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.nevloh.com${router.pathname}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:site_name" content="Nevloh Group" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_JM" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://www.nevloh.com${router.pathname}`} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={ogImageUrl} />

        {/* Additional Meta Tags */}
        <meta name="author" content="Nevloh Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        {/* Geographic Meta Tags — Primary: Jamaica */}
        <meta name="geo.region" content="JM-13" />
        <meta name="geo.placename" content="Spanish Town, Saint Catherine Parish" />
        <meta name="geo.position" content="17.9909;-76.9564" />
        <meta name="ICBM" content="17.9909, -76.9564" />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://www.nevloh.com${router.pathname}`} />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo512.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />

        {/* Structured Data — Nevloh Group (Bilateral) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nevloh Group",
              "legalName": "Nevloh Group",
              "description": "Bilateral energy group specializing in Jamaica fuel logistics (Nevloh Limited) and international commodities trade (Nevloh LLC). UCP 600 / ISBP 745 compliant.",
              "url": "https://www.nevloh.com",
              "logo": "https://www.nevloh.com/images/logo.png",
              "foundingDate": "2022",
              "address": [
                {
                  "@type": "PostalAddress",
                  "name": "Nevloh LLC — Trade Desk",
                  "streetAddress": "Casper",
                  "addressLocality": "Casper",
                  "addressRegion": "Wyoming",
                  "postalCode": "82601",
                  "addressCountry": "US"
                },
                {
                  "@type": "PostalAddress",
                  "name": "Nevloh Limited — Regional Operations",
                  "addressLocality": "Spanish Town",
                  "addressRegion": "Saint Catherine Parish",
                  "addressCountry": "JM"
                }
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-876-449-5172",
                  "email": "shamar@nevloh.com",
                  "contactType": "customer service",
                  "areaServed": ["JM"],
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-876-449-5172",
                  "email": "shamar@nevloh.com",
                  "contactType": "sales",
                  "areaServed": ["US", "GB", "AE", "SG"],
                  "availableLanguage": "English"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/nevlohltd"
              ],
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Jamaica"
                },
                {
                  "@type": "Place",
                  "name": "Caribbean Basin"
                },
                {
                  "@type": "Place",
                  "name": "International"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Energy & Commodities Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "International Commodities Trade",
                      "description": "Structured procurement of EN590 Diesel and Urea 46% via UCP 600 LC-at-Sight"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Fleet Refuelling Logistics",
                      "description": "On-site refuelling for commercial and industrial fleets across Jamaica"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Critical Power Support",
                      "description": "Generator fuel supply for hospitals, data centers, and critical infrastructure"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Industrial Bulk Supply",
                      "description": "High-volume petroleum distribution for manufacturing and marine operations"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Petroleum Haulage",
                      "description": "Licensed petroleum haulage contractor for oil marketing companies"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Ultra Low Sulphur Diesel Supply",
                      "description": "ULSD delivery for emission-compliant operations"
                    }
                  }
                ]
              },
              "knowsAbout": [
                "Petroleum Logistics",
                "Fuel Delivery",
                "Commodities Trading",
                "UCP 600",
                "ISBP 745",
                "Letter of Credit",
                "EN590 Diesel",
                "Urea 46%",
                "Caribbean Energy"
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col font-inter antialiased bg-white">

        {/* Conditionally render Navbar */}
        {!shouldHideNavbar && (
          <header role="banner">
            <Navbar />
          </header>
        )}

        {/* Main content area */}
        <main
          id="main-content"
          className={`flex-grow ${!shouldHideNavbar ? 'pt-20' : ''}`}
          role="main"
          tabIndex="-1"
        >
          {children}
        </main>

        {/* Footer - always rendered */}
        <Footer />

        {/* Back to top button */}
        <BackToTopButton />
      </div>
    </>
  );
};

// Back to top button component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Navigation',
        event_label: 'Back to Top',
        value: 1
      });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-2xl shadow-lg shadow-blue-900/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300 z-50"
      aria-label="Back to top"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default Layout;

// Usage examples:

// Basic usage (bilateral defaults):
// <Layout>
//   <HomePage />
// </Layout>

// Jamaica-focused page:
// <Layout
//   title="Fleet Refuelling Services"
//   description="Professional on-site refuelling for commercial fleets across all 14 parishes of Jamaica. 24/7 emergency dispatch available."
//   keywords="fleet refuelling Jamaica, on-site diesel delivery, commercial fleet fuel"
// >
//   <FleetRefuellingPage />
// </Layout>

// International trade page:
// <Layout
//   title="International Commodities Trade"
//   description="Structured EN590 Diesel and Urea 46% procurement via Nevloh LLC (Wyoming, USA). UCP 600 LC-at-Sight settlement. SGS/Intertek verified."
//   keywords="EN590 diesel trade, Urea 46% commodities, UCP 600 LC, international trade desk"
//   ogImage="https://www.nevloh.com/images/og-international-trade.png"
// >
//   <InternationalTradePage />
// </Layout>

// For pages that shouldn't be indexed:
// <Layout noIndex={true}>
//   <PrivatePage />
// </Layout>