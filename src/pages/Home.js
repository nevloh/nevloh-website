import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection'; // Adjusted import path
import ServicesSection from '../components/ServicesSection'; // Adjusted import path
import ProcessSection from '../components/ProcessSection'; // New Process component
import CallToAction from '../components/CallToAction'; // Adjusted import path

export default function Home() {
  // Use React 19's built-in document head management
  useEffect(() => {
    // Set document title
    document.title = "Nevloh Limited - Premium Fuel Delivery Services Jamaica | Ultra Low Sulphur Diesel (ULSD) Supplier";

    // Function to set or update meta tags
    const setMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Function to set link tags
    const setLinkTag = (rel, href, attributes = {}) => {
      let link = document.querySelector(`link[rel="${rel}"][href="${href}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        link.setAttribute('href', href);
        Object.keys(attributes).forEach(key => {
          link.setAttribute(key, attributes[key]);
        });
        document.head.appendChild(link);
      }
    };

    // Function to set JSON-LD schema
    const setJsonLdSchema = (id, schema) => {
      let script = document.querySelector(`script[id="${id}"]`);
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('id', id);
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    };

    // Google Search Console Verification
    setMetaTag('google-site-verification', 'SNQyeeACmprojKg91nG5N9GEp00a2yV6L5SRpOA1YMc');

    // Primary Meta Tags
    setMetaTag('description', 'Jamaica\'s leading Ultra Low Sulphur Diesel (ULSD) supplier and fuel delivery service. Reliable fuel delivery across all 14 parishes with 24/7 emergency service, competitive prices, and eco-friendly solutions.');
    setMetaTag('keywords', 'fuel delivery Jamaica, ULSD supplier, diesel delivery, ultra low sulphur diesel, fuel services Jamaica, Nevloh Limited, emergency fuel delivery, commercial fuel supplier, Kingston fuel delivery, Spanish Town fuel, Saint Catherine fuel services');
    setMetaTag('author', 'Nevloh Limited');
    setMetaTag('robots', 'index, follow');
    setMetaTag('language', 'English');
    setMetaTag('revisit-after', '7 days');

    // Open Graph Meta Tags
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', 'https://nevloh.com/', true);
    setMetaTag('og:title', 'Nevloh Limited - Premium Fuel Delivery Services Jamaica', true);
    setMetaTag('og:description', 'Jamaica\'s trusted ULSD supplier with island-wide delivery. 90% cleaner emissions, 25% longer engine life. Serving all 14 parishes with 24/7 emergency service.', true);
    setMetaTag('og:image', 'https://nevloh.com/images/nevloh-og-image.jpg', true);
    setMetaTag('og:image:width', '1200', true);
    setMetaTag('og:image:height', '630', true);
    setMetaTag('og:image:alt', 'Nevloh Limited Fuel Delivery Truck - Jamaica\'s Premium ULSD Supplier', true);
    setMetaTag('og:site_name', 'Nevloh Limited', true);
    setMetaTag('og:locale', 'en_JM', true);

    // Twitter Meta Tags
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:url', 'https://nevloh.com/', true);
    setMetaTag('twitter:title', 'Nevloh Limited - Premium Fuel Delivery Services Jamaica', true);
    setMetaTag('twitter:description', 'Jamaica\'s trusted ULSD supplier with island-wide delivery. 90% cleaner emissions, 25% longer engine life. 24/7 emergency service across all parishes.', true);
    setMetaTag('twitter:image', 'https://nevloh.com/images/nevloh-twitter-image.jpg', true);
    setMetaTag('twitter:image:alt', 'Nevloh Limited - Jamaica\'s Premium Fuel Delivery Service', true);

    // Local SEO Meta Tags
    setMetaTag('geo.region', 'JM');
    setMetaTag('geo.placename', 'Jamaica');
    setMetaTag('geo.position', '17.9909;-76.9571');
    setMetaTag('ICBM', '17.9909, -76.9571');

    // Business Information Meta Tags
    setMetaTag('business:contact_data:street_address', 'Spanish Town');
    setMetaTag('business:contact_data:locality', 'Spanish Town');
    setMetaTag('business:contact_data:region', 'Saint Catherine Parish');
    setMetaTag('business:contact_data:country_name', 'Jamaica');
    setMetaTag('business:contact_data:phone_number', '+1-876-123-4567');
    setMetaTag('business:contact_data:website', 'https://nevloh.com');

    // Canonical Link
    setLinkTag('canonical', 'https://nevloh.com/');

    // Hreflang Links
    setLinkTag('alternate', 'https://nevloh.com/', { hreflang: 'en-jm' });
    setLinkTag('alternate', 'https://nevloh.com/', { hreflang: 'en' });

    // Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Nevloh Limited",
      "image": "https://nevloh.com/images/nevloh-logo.jpg",
      "description": "Jamaica's leading Ultra Low Sulphur Diesel (ULSD) supplier and fuel delivery service across all 14 parishes.",
      "url": "https://nevloh.com",
      "telephone": "+1-876-449-5172",
      "email": "info@nevloh.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Caymanas Bay",
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
    };

    // Organization Schema
    const organizationSchema = {
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
        "jobTitle": "Managing Director"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-876-449-5172",
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
    };

    // Service Schema
    const serviceSchema = {
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
    };

    // Set JSON-LD Schemas
    setJsonLdSchema('local-business-schema', localBusinessSchema);
    setJsonLdSchema('organization-schema', organizationSchema);
    setJsonLdSchema('service-schema', serviceSchema);

  }, []); // Empty dependency array means this runs once when component mounts

  return (
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
  );
}