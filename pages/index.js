import { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { Globe, X } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import CallToAction from '../components/CallToAction';

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);

  // Define structured data as constants for better performance
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    // PRIMARY FIX: "Nevloh" as main name, with full legal name as alternate
    "name": "Nevloh",
    "legalName": "Nevloh Limited",
    "alternateName": ["Nevloh Limited", "Nevloh Fuel", "Nevloh Jamaica", "Nevloh Fuel Services", "Nevloh Diesel", "Nevloh Group"],
    "image": [
      "https://www.nevloh.com/images/nevloh-logo.webp",
      "https://www.nevloh.com/images/fuel-truck-delivery.jpg",
      "https://www.nevloh.com/images/ulsd-diesel-tank.webp"
    ],
    "description": "Nevloh is Jamaica's premier Ultra Low Sulphur Diesel supplier and professional fuel delivery service. Serving all 14 parishes with 24/7 emergency service, competitive prices, and eco-friendly solutions.",
    "url": "https://www.nevloh.com",
    "logo": "https://www.nevloh.com/images/nevloh-logo.webp",
    "telephone": "+1-876-449-5172",
    "email": "info@nevloh.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Caymanas Bay",
      "addressLocality": "Spanish Town",
      "addressRegion": "Saint Catherine Parish",
      "addressCountry": "Jamaica"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.9909",
      "longitude": "-76.9571"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "16:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "00:00",
        "closes": "23:59",
        "description": "Emergency service only"
      }
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Jamaica"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Nevloh Professional Fuel Delivery Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ultra Low Sulphur Diesel Delivery",
            "description": "Premium ULSD delivery with 90% reduced emissions and 25% longer engine life"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Emergency Fuel Delivery",
            "description": "Round-the-clock emergency fuel service across all 14 parishes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Bulk Supply",
            "description": "Large volume fuel supply for businesses and industrial operations"
          }
        }
      ]
    },
    "areaServed": [
      "Kingston", "Saint Andrew", "Saint Catherine", "Clarendon", "Manchester",
      "Saint Elizabeth", "Westmoreland", "Hanover", "Saint James", "Trelawny",
      "Saint Ann", "Saint Mary", "Portland", "Saint Thomas"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "JMD",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Nevloh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nevloh is Jamaica's leading fuel delivery company, officially registered as Nevloh Limited. We specialize in Ultra Low Sulphur Diesel (ULSD) delivery, serving all 14 parishes with professional fuel services including emergency delivery, commercial bulk supply, and construction site refueling."
        }
      },
      {
        "@type": "Question",
        "name": "Does Nevloh deliver fuel to all parishes in Jamaica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Nevloh provides professional fuel delivery to all 14 parishes in Jamaica including Kingston, Spanish Town, Saint Catherine, and across the island with our modern fleet."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Ultra Low Sulphur Diesel better?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ULSD has 90% reduced sulfur content, producing cleaner emissions and extending engine life by up to 25%. It's environmentally friendly and better for modern diesel engines. Nevloh is Jamaica's premier ULSD supplier."
        }
      },
      {
        "@type": "Question",
        "name": "Does Nevloh provide emergency fuel delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Nevloh offers 24/7 emergency fuel delivery across Jamaica. Call +1-876-449-5172 for immediate assistance with urgent fuel needs."
        }
      },
      {
        "@type": "Question",
        "name": "How do I contact Nevloh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reach Nevloh at +1-876-449-5172, email info@nevloh.com, or visit our website at nevloh.com. Our team is available for fuel delivery inquiries across Jamaica."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    // PRIMARY FIX: "Nevloh" as main name
    "name": "Nevloh",
    "legalName": "Nevloh Limited",
    "alternateName": ["Nevloh Limited", "Nevloh Fuel", "Nevloh Jamaica", "Nevloh Group", "Nevloh Diesel"],
    "url": "https://www.nevloh.com",
    "logo": "https://www.nevloh.com/images/nevloh-logo.webp",
    "description": "Nevloh is a leading fuel delivery company in Jamaica specializing in Ultra Low Sulphur Diesel and sustainable energy solutions. Part of the Nevloh Group.",
    "foundingDate": "2022",
    "founder": {
      "@type": "Person",
      "name": "Sashell Cooper-Nevins",
      "jobTitle": "Managing Director"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-876-449-5172",
      "contactType": "customer service",
      "email": "info@nevloh.com",
      "availableLanguage": "English",
      "areaServed": "Jamaica"
    },
    "sameAs": [
      "https://www.facebook.com/nevlohlimited",
      "https://www.linkedin.com/company/nevloh-limited",
      "https://twitter.com/nevlohlimited",
      "https://www.instagram.com/nevlohltd"
    ]
  };

  // NEW: Brand/WebSite schema for brand recognition
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nevloh",
    "alternateName": ["Nevloh Limited", "Nevloh Fuel", "Nevloh Jamaica"],
    "url": "https://www.nevloh.com",
    "description": "Nevloh - Jamaica's premier fuel delivery service. ULSD diesel, emergency delivery, commercial supply.",
    "publisher": {
      "@type": "Organization",
      "name": "Nevloh",
      "legalName": "Nevloh Limited"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.nevloh.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // NEW: Brand schema for direct brand searches
  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "Nevloh",
    "alternateName": ["Nevloh Limited", "Nevloh Fuel", "Nevloh Jamaica", "Nevloh Group"],
    "logo": "https://www.nevloh.com/images/nevloh-logo.webp",
    "url": "https://www.nevloh.com",
    "description": "Nevloh is Jamaica's trusted fuel delivery brand, providing professional diesel services island-wide.",
    "slogan": "Jamaica's Premier Fuel Delivery Service"
  };

  return (
    <>
      <Head>
        {/* PRIMARY FIX: Title now leads with "Nevloh" brand */}
        <title>Nevloh | Jamaica's #1 Fuel Delivery Service | ULSD Diesel & Emergency 24/7</title>

        {/* UPDATED: Description starts with "Nevloh" for brand association */}
        <meta name="description" content="Nevloh - Jamaica's premier fuel delivery service. Professional Ultra Low Sulphur Diesel (ULSD) delivery across all 14 parishes. 24/7 emergency service, commercial bulk supply, construction refueling. 90% cleaner emissions. Call +1-876-449-5172" />

        {/* CRITICAL FIX: Keywords now include standalone "Nevloh" variations */}
        <meta name="keywords" content="Nevloh, Nevloh Limited, Nevloh Jamaica, Nevloh fuel, Nevloh diesel, fuel delivery Jamaica, diesel delivery Jamaica, ULSD supplier Jamaica, emergency fuel delivery, commercial diesel supply, Kingston fuel delivery, Spanish Town fuel service, construction fuel delivery, 24/7 fuel service, Nevloh Group, rapid onsite, generator refuelling, bulk fuel" />

        {/* Essential Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Nevloh" />
        <meta name="publisher" content="Nevloh Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1e40af" />

        {/* Google Verification */}
        <meta name="google-site-verification" content="SNQyeeACmprojKg91nG5N9GEp00a2yV6L5SRpOA1YMc" />

        {/* UPDATED: Open Graph with "Nevloh" brand focus */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nevloh.com/" />
        <meta property="og:title" content="Nevloh | Jamaica's Premier ULSD Fuel Delivery Service" />
        <meta property="og:description" content="Nevloh provides professional fuel delivery across all 14 Jamaican parishes. Emergency service, commercial supply, eco-friendly ULSD. Fast, reliable, competitive pricing." />
        <meta property="og:image" content="https://www.nevloh.com/images/nevloh-og-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Nevloh Professional Fuel Delivery Service in Jamaica" />
        <meta property="og:site_name" content="Nevloh" />
        <meta property="og:locale" content="en_JM" />

        {/* UPDATED: Twitter with "Nevloh" brand focus */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nevlohlimited" />
        <meta name="twitter:creator" content="@nevlohlimited" />
        <meta name="twitter:title" content="Nevloh | Jamaica's #1 Fuel Delivery Service" />
        <meta name="twitter:description" content="Nevloh - Professional diesel delivery across Jamaica. 24/7 emergency service, commercial supply, eco-friendly ULSD. Call +1-876-449-5172" />
        <meta name="twitter:image" content="https://www.nevloh.com/images/nevloh-twitter-image.webp" />

        {/* Local SEO */}
        <meta name="geo.region" content="JM" />
        <meta name="geo.placename" content="Jamaica" />
        <meta name="geo.position" content="17.9909;-76.9571" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.nevloh.com/" />

        {/* Performance Optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo512.png" />
      </Head>

      {/* Structured Data - Server-Side Rendered */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />

      {/* NEW: Website schema for brand searches */}
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />

      {/* NEW: Brand schema for direct brand recognition */}
      <Script
        id="brand-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(brandSchema)
        }}
      />

      {/* Main Content with Semantic HTML */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 font-inter antialiased">
        {/* International Trade Announcement Banner */}
        {showBanner && (
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white relative">
            <div className="max-w-7xl mx-auto px-4 py-2.5 sm:py-3">
              <div className="flex items-center justify-center text-center">
                <Link
                  href="/international-trade"
                  className="flex items-center text-xs sm:text-sm hover:text-blue-300 transition-colors group"
                >
                  <Globe size={16} className="mr-2 flex-shrink-0 text-blue-400" aria-hidden="true" />
                  <span className="mr-1">
                    <span className="font-medium">New:</span>
                    <span className="hidden sm:inline"> International Commodities Trading</span>
                    <span className="sm:hidden"> Int'l Trade</span>
                  </span>
                  <span className="text-blue-400 group-hover:text-blue-300">
                    — Diesel & Fertilizer Supply via Nevloh LLC
                    <span className="hidden sm:inline"> (Wyoming, USA)</span>
                  </span>
                  <span className="ml-2 text-blue-400 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </Link>
                <button
                  onClick={() => setShowBanner(false)}
                  className="absolute right-2 sm:right-4 p-1 hover:bg-slate-700 rounded transition-colors"
                  aria-label="Dismiss announcement"
                >
                  <X size={16} className="text-slate-400 hover:text-white" />
                </button>
              </div>
            </div>
          </div>
        )}

        <main role="main" itemScope itemType="https://schema.org/LocalBusiness">
          {/* UPDATED: Hidden semantic content with "Nevloh" brand emphasis */}
          <div className="sr-only">
            <h1>Nevloh - Professional Fuel Delivery Services in Jamaica</h1>
            <p>Nevloh (Nevloh Limited) provides Ultra Low Sulphur Diesel delivery across all 14 Jamaican parishes with 24/7 emergency service, commercial supply, and eco-friendly solutions.</p>
            <span itemProp="name">Nevloh</span>
            <span itemProp="alternateName">Nevloh Limited</span>
            <span itemProp="alternateName">Nevloh Jamaica</span>
            <span itemProp="alternateName">Nevloh Fuel</span>
          </div>

          <HeroSection />
          <ServicesSection />
          <ProcessSection />
          <CallToAction />
        </main>
      </div>
    </>
  );
}

// Optional: Add getStaticProps for additional SEO benefits
export async function getStaticProps() {
  return {
    props: {
      // You can add any props your components need
    },
    // Regenerate the page at most once per day
    revalidate: 86400
  };
}