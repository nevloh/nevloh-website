import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection'; // Adjusted import path
import ServicesSection from '../components/ServicesSection'; // Adjusted import path
import ProcessSection from '../components/ProcessSection'; // New Process component
import CallToAction from '../components/CallToAction'; // Adjusted import path

export default function Home() {
  return (
    <>
      {/* SEO Meta Tags using React Helmet Async */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Nevloh Limited - Premium Fuel Delivery Services Jamaica | Ultra Low Sulphur Diesel (ULSD) Supplier</title>
        <meta name="title" content="Nevloh Limited - Premium Fuel Delivery Services Jamaica | Ultra Low Sulphur Diesel (ULSD) Supplier" />
        <meta name="description" content="Jamaica's leading Ultra Low Sulphur Diesel (ULSD) supplier and fuel delivery service. Reliable fuel delivery across all 14 parishes with 24/7 emergency service, competitive prices, and eco-friendly solutions." />
        <meta name="keywords" content="fuel delivery Jamaica, ULSD supplier, diesel delivery, ultra low sulphur diesel, fuel services Jamaica, Nevloh Limited, emergency fuel delivery, commercial fuel supplier, Kingston fuel delivery, Spanish Town fuel, Saint Catherine fuel services" />
        <meta name="author" content="Nevloh Limited" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="SNQyeeACmprojKg91nG5N9GEp00a2yV6L5SRpOA1YMc" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://nevloh.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nevloh.com/" />
        <meta property="og:title" content="Nevloh Limited - Premium Fuel Delivery Services Jamaica" />
        <meta property="og:description" content="Jamaica's trusted ULSD supplier with island-wide delivery. 90% cleaner emissions, 25% longer engine life. Serving all 14 parishes with 24/7 emergency service." />
        <meta property="og:image" content="https://nevloh.com/images/nevloh-og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Nevloh Limited Fuel Delivery Truck - Jamaica's Premium ULSD Supplier" />
        <meta property="og:site_name" content="Nevloh Limited" />
        <meta property="og:locale" content="en_JM" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nevloh.com/" />
        <meta property="twitter:title" content="Nevloh Limited - Premium Fuel Delivery Services Jamaica" />
        <meta property="twitter:description" content="Jamaica's trusted ULSD supplier with island-wide delivery. 90% cleaner emissions, 25% longer engine life. 24/7 emergency service across all parishes." />
        <meta property="twitter:image" content="https://nevloh.com/images/nevloh-twitter-image.jpg" />
        <meta property="twitter:image:alt" content="Nevloh Limited - Jamaica's Premium Fuel Delivery Service" />

        {/* Local SEO Meta Tags */}
        <meta name="geo.region" content="JM" />
        <meta name="geo.placename" content="Jamaica" />
        <meta name="geo.position" content="17.9909;-76.9571" />
        <meta name="ICBM" content="17.9909, -76.9571" />

        {/* Mobile and Accessibility */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Hreflang for International SEO */}
        <link rel="alternate" hrefLang="en-jm" href="https://nevloh.com/" />
        <link rel="alternate" hrefLang="en" href="https://nevloh.com/" />

        {/* Additional Business Information */}
        <meta name="business:contact_data:street_address" content="Spanish Town" />
        <meta name="business:contact_data:locality" content="Spanish Town" />
        <meta name="business:contact_data:region" content="Saint Catherine Parish" />
        <meta name="business:contact_data:postal_code" content="" />
        <meta name="business:contact_data:country_name" content="Jamaica" />
        <meta name="business:contact_data:phone_number" content="+1-876-123-4567" />
        <meta name="business:contact_data:website" content="https://nevloh.com" />

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Nevloh Limited",
            "image": "https://nevloh.com/images/nevloh-logo.jpg",
            "description": "Jamaica's leading Ultra Low Sulphur Diesel (ULSD) supplier and fuel delivery service across all 14 parishes.",
            "url": "https://nevloh.com",
            "telephone": "+1-876-123-4567",
            "email": "info@nevloh.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Spanish Town",
              "addressLocality": "Spanish Town",
              "addressRegion": "Saint Catherine Parish",
              "addressCountry": "JM"
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
              "@type": "State",
              "name": "Jamaica"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Fuel Delivery Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Ultra Low Sulphur Diesel (ULSD) Delivery",
                    "description": "Premium ULSD delivery across Jamaica with 90% reduced emissions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Fuel Delivery",
                    "description": "24/7 emergency fuel delivery service across all 14 parishes"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Fuel Supply",
                    "description": "Bulk fuel supply for businesses, construction, and industrial operations"
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
            "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "Advance Payment"],
            "currenciesAccepted": "JMD",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </script>

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nevloh Limited",
            "url": "https://nevloh.com",
            "logo": "https://nevloh.com/images/nevloh-logo.jpg",
            "description": "Leading fuel delivery company in Jamaica specializing in Ultra Low Sulphur Diesel (ULSD) and sustainable energy solutions.",
            "foundingDate": "2018",
            "founder": {
              "@type": "Person",
              "name": "Sashell Cooper-Nevins",
              "jobTitle": "Managing Director & Founder"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-876-123-4567",
              "contactType": "customer service",
              "email": "info@nevloh.com",
              "availableLanguage": "English",
              "areaServed": "JM"
            },
            "sameAs": [
              "https://www.facebook.com/nevlohlimited",
              "https://www.linkedin.com/company/nevloh-limited",
              "https://twitter.com/nevlohlimited"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Spanish Town",
              "addressRegion": "Saint Catherine Parish",
              "addressCountry": "Jamaica"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Energy Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Ultra Low Sulphur Diesel",
                    "category": "Fuel",
                    "description": "Premium ULSD with 90% reduced sulfur content for cleaner emissions"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Fuel Delivery Service",
            "description": "Professional fuel delivery service across Jamaica specializing in Ultra Low Sulphur Diesel (ULSD) for commercial and industrial clients.",
            "provider": {
              "@type": "Organization",
              "name": "Nevloh Limited",
              "url": "https://nevloh.com"
            },
            "serviceType": "Fuel Delivery",
            "areaServed": {
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
                    "name": "ULSD Delivery",
                    "category": "Transportation",
                    "audience": {
                      "@type": "Audience",
                      "audienceType": "Business"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Fuel Service",
                    "category": "Emergency Services",
                    "availability": "24/7"
                  }
                }
              ]
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceRange": "Contact for pricing",
              "priceCurrency": "JMD"
            }
          })}
        </script>
      </Helmet>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 font-inter antialiased">
        {/* Tailwind CSS CDN for global availability (for standalone Canvas preview) */}
        <script src="https://cdn.tailwindcss.com"></script>
        {/*
          Note: The Navbar and Footer are now included in the Layout component.
          This Home component focuses solely on arranging its main sections.
        */}

        {/* Structured Content with Semantic HTML */}
        <main role="main">
          <HeroSection />
          <ServicesSection />
          <ProcessSection />
          <CallToAction />
        </main>
        {/* No Footer here, it's in Layout.js */}
      </div>
    </>
  );
}