// components/Layout.js
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, title, description, keywords, noIndex = false }) => {
  const router = useRouter();

  // List of paths where the navbar should be hidden
  const hideNavbarRoutes = ['/login', '/admin', '/unauthorized'];

  // Check if current route should hide navbar
  const shouldHideNavbar = hideNavbarRoutes.some(route => 
    router.pathname.startsWith(route)
  );

  // Generate dynamic page title
  const pageTitle = title 
    ? `${title} | Nevloh Limited - Premium Fuel Delivery Jamaica`
    : 'Nevloh Limited - Premium Fuel Delivery Services in Jamaica';

  // Default meta description
  const pageDescription = description || 
    'Nevloh Limited provides reliable on-site fuel delivery services across Jamaica. Fast, safe, and professional fuel solutions for businesses. Contact us for a free quote.';

  // Default keywords
  const pageKeywords = keywords || 
    'fuel delivery Jamaica, on-site fuel, diesel delivery, gasoline delivery, fuel services Jamaica, Spanish Town fuel, emergency fuel delivery';

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
        <meta property="og:image" content="https://www.nevloh.com/og-image.jpg" />
        <meta property="og:site_name" content="Nevloh Limited" />
        <meta property="og:locale" content="en_JM" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://www.nevloh.com${router.pathname}`} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content="https://www.nevloh.com/twitter-image.jpg" />

        {/* Additional Meta Tags */}
        <meta name="author" content="Nevloh Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        
        {/* Geographic Meta Tags for Jamaica */}
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

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Font optimization */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nevloh Limited",
              "description": "Premium fuel delivery services across Jamaica",
              "url": "https://www.nevloh.com",
              "logo": "https://www.nevloh.com/logo.png",
              "foundingDate": "2022",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Spanish Town",
                "addressRegion": "Saint Catherine Parish",
                "addressCountry": "Jamaica"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-876-449-5172",
                "email": "shamar@nevloh.com",
                "contactType": "customer service",
                "areaServed": "JM"
              },
              "sameAs": [
                "https://www.instagram.com/nevlohltd"
              ],
              "serviceArea": {
                "@type": "Country",
                "name": "Jamaica"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Fuel Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "On-Site Fuel Delivery"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Ultra Low Sulphur Diesel"
                    }
                  }
                ]
              }
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
      className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 z-50"
      aria-label="Back to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default Layout;

// Alternative export for App Router (Next.js 13+)
// If using app directory, create app/layout.js instead:
/*
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-inter antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
*/

// Usage examples:

// Basic usage:
// <Layout>
//   <HomePage />
// </Layout>

// With custom meta data:
// <Layout 
//   title="About Us"
//   description="Learn about Nevloh Limited's mission to provide premium fuel delivery services across Jamaica"
//   keywords="about nevloh, fuel company jamaica, fuel delivery history"
// >
//   <AboutPage />
// </Layout>

// For pages that shouldn't be indexed:
// <Layout noIndex={true}>
//   <PrivatePage />
// </Layout>