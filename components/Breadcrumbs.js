// components/Breadcrumbs.js
import Link from 'next/link';
import Script from 'next/script';
import { ChevronRight, Home } from 'lucide-react';

// Breadcrumb configurations for all pages
export const breadcrumbConfigs = {
  // Main pages
  about: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' }
  ],
  services: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' }
  ],
  contact: [
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/contact' }
  ],
  blog: [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' }
  ],
  sustainability: [
    { name: 'Home', href: '/' },
    { name: 'Sustainability', href: '/sustainability' }
  ],
  industries: [
    { name: 'Home', href: '/' },
    { name: 'Industries', href: '/industries' }
  ],
  privacy: [
    { name: 'Home', href: '/' },
    { name: 'Privacy Policy', href: '/privacy' }
  ],
  terms: [
    { name: 'Home', href: '/' },
    { name: 'Terms of Service', href: '/terms' }
  ],

  // International Trade
  internationalTrade: [
    { name: 'Home', href: '/' },
    { name: 'International Trade', href: '/international-trade' }
  ],

  // Service pages
  fleetRefuelling: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Fleet Refuelling', href: '/services/fleet-refuelling' }
  ],
  generatorRefuelling: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Generator Refuelling', href: '/services/generator-refuelling' }
  ],
  onSiteFuelDelivery: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'On-Site Fuel Delivery', href: '/services/on-site-fuel-delivery' }
  ],
  bulkFuel: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Bulk Fuel Supply', href: '/services/bulk-fuel' }
  ],
  haulage: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Haulage Services', href: '/services/haulage' }
  ],
  ulsd: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Ultra Low Sulphur Diesel', href: '/services/ulsd' }
  ]
};

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) {
    return null;
  }

  // Generate structured data for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.nevloh.com${item.href}`
    }))
  };

  return (
    <>
      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="py-2">
        <ol className="flex flex-wrap items-center text-sm text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isFirst = index === 0;

            return (
              <li
                key={item.href}
                className="flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {!isFirst && (
                  <ChevronRight
                    size={16}
                    className="mx-2 text-gray-400 flex-shrink-0"
                    aria-hidden="true"
                  />
                )}

                {isLast ? (
                  <span
                    className="text-blue-600 font-medium"
                    itemProp="name"
                    aria-current="page"
                  >
                    {isFirst && (
                      <Home size={14} className="inline mr-1 -mt-0.5" aria-hidden="true" />
                    )}
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-blue-600 transition-colors flex items-center"
                    itemProp="item"
                  >
                    {isFirst && (
                      <Home size={14} className="mr-1 -mt-0.5" aria-hidden="true" />
                    )}
                    <span itemProp="name">{item.name}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}