import Head from 'next/head';
import Script from 'next/script';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import CallToAction from '../components/CallToAction';

export default function Home() {
  // Define structured data as constants for better performance
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nevloh Limited",
    "alternateName": ["Nevloh", "Nevloh Fuel Services"],
    "image": [
      "https://nevloh.com/images/nevloh-logo.webp",
      "https://nevloh.com/images/fuel-truck-delivery.webp",
      "https://nevloh.com/images/ulsd-diesel-tank.webp"
    ],
    "description": "Jamaica's premier Ultra Low Sulphur Diesel supplier and professional fuel delivery service. Serving all 14 parishes with 24/7 emergency service, competitive prices, and eco-friendly solutions since 2018.",
    "url": "https://nevloh.com",
    "logo": "https://nevloh.com/images/nevloh-logo.webp",
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
      "name": "Professional Fuel Delivery Services",
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
        "name": "Do you deliver fuel to all parishes in Jamaica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Nevloh Limited provides professional fuel delivery to all 14 parishes in Jamaica including Kingston, Spanish Town, Saint Catherine, and across the island with our modern fleet."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Ultra Low Sulphur Diesel better?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ULSD has 90% reduced sulfur content, producing cleaner emissions and extending engine life by up to 25%. It's environmentally friendly and better for modern diesel engines."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide emergency fuel delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer 24/7 emergency fuel delivery across Jamaica. Call +1-876-449-5172 for immediate assistance with urgent fuel needs."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nevloh Limited",
    "url": "https://nevloh.com",
    "logo": "https://nevloh.com/images/nevloh-logo.webp",
    "description": "Leading fuel delivery company in Jamaica specializing in Ultra Low Sulphur Diesel and sustainable energy solutions.",
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
      "https://twitter.com/nevlohlimited"
    ]
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags - Server-Side Rendered */}
        <title>Nevloh Limited - Jamaica's #1 ULSD Fuel Delivery | Emergency Diesel Service 24/7</title>
        <meta name="description" content="Professional Ultra Low Sulphur Diesel delivery across Jamaica. 24/7 emergency service, commercial bulk supply, construction refueling. 90% cleaner emissions, 25% longer engine life. Call +1-876-449-5172" />

        {/* Refined Keywords - Focus on High-Value Terms */}
        <meta name="keywords" content="fuel delivery Jamaica, diesel delivery Jamaica, ULSD supplier, emergency fuel delivery, commercial diesel supply, Kingston fuel delivery, Spanish Town fuel service, construction fuel delivery, 24/7 fuel service, Nevloh Limited" />

        {/* Essential Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="Nevloh Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1e40af" />

        {/* Google Verification */}
        <meta name="google-site-verification" content="SNQyeeACmprojKg91nG5N9GEp00a2yV6L5SRpOA1YMc" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nevloh.com/" />
        <meta property="og:title" content="Jamaica's Premier ULSD Fuel Delivery Service | Nevloh Limited" />
        <meta property="og:description" content="Professional fuel delivery across all 14 Jamaican parishes. Emergency service, commercial supply, eco-friendly ULSD. Fast, reliable, competitive pricing." />
        <meta property="og:image" content="https://nevloh.com/images/nevloh-og-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Nevloh Limited Professional Fuel Delivery Service in Jamaica" />
        <meta property="og:site_name" content="Nevloh Limited" />
        <meta property="og:locale" content="en_JM" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nevlohlimited" />
        <meta name="twitter:title" content="Jamaica's #1 ULSD Fuel Delivery | Nevloh Limited" />
        <meta name="twitter:description" content="Professional diesel delivery across Jamaica. 24/7 emergency service, commercial supply, eco-friendly ULSD. Call +1-876-449-5172" />
        <meta name="twitter:image" content="https://nevloh.com/images/nevloh-twitter-image.webp" />

        {/* Local SEO */}
        <meta name="geo.region" content="JM" />
        <meta name="geo.placename" content="Jamaica" />
        <meta name="geo.position" content="17.9909;-76.9571" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://nevloh.com/" />

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

      {/* Main Content with Semantic HTML */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 font-inter antialiased">
        <main role="main" itemScope itemType="https://schema.org/LocalBusiness">
          {/* Hidden semantic content for accessibility and SEO context */}
          <div className="sr-only">
            <h1>Professional Fuel Delivery Services in Jamaica</h1>
            <p>Nevloh Limited provides Ultra Low Sulphur Diesel delivery across all 14 Jamaican parishes with 24/7 emergency service, commercial supply, and eco-friendly solutions.</p>
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