// components/Breadcrumbs.js
// Ready-to-use breadcrumb component with Schema.org structured data
// for improved Google search display

import Link from 'next/link';
import Head from 'next/head';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Breadcrumbs Component
 *
 * Usage:
 * <Breadcrumbs items={[
 *   { name: "Home", url: "/" },
 *   { name: "Services", url: "/services" },
 *   { name: "Fleet Refuelling" }  // Current page - no URL
 * ]} />
 *
 * Props:
 * @param {Array} items - Array of breadcrumb items with name and optional url
 * @param {string} className - Optional additional CSS classes
 */
export default function Breadcrumbs({ items, className = '' }) {
  // Generate BreadcrumbList schema for Google
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      // Only add item URL if it's not the current page
      ...(item.url && index < items.length - 1 && {
        "item": `https://www.nevloh.com${item.url}`
      })
    }))
  };

  return (
    <>
      {/* Structured Data for Google Rich Results */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      {/* Visual Breadcrumbs with Microdata */}
      <nav
        aria-label="Breadcrumb"
        className={`py-4 ${className}`}
      >
        <ol
          className="flex items-center flex-wrap gap-1 text-sm"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {/* Separator (not for first item) */}
              {index > 0 && (
                <ChevronRight
                  className="w-4 h-4 text-gray-400 mx-1 flex-shrink-0"
                  aria-hidden="true"
                />
              )}

              {/* Home icon for first item */}
              {index === 0 && (
                <Home
                  className="w-4 h-4 mr-1 text-gray-500 flex-shrink-0"
                  aria-hidden="true"
                />
              )}

              {/* Link or text based on whether it's current page */}
              {item.url && index < items.length - 1 ? (
                <Link
                  href={item.url}
                  itemProp="item"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              ) : (
                <span
                  itemProp="name"
                  className="text-gray-700 font-medium"
                  aria-current={index === items.length - 1 ? "page" : undefined}
                >
                  {item.name}
                </span>
              )}

              {/* Position metadata for structured data */}
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

/**
 * Pre-configured breadcrumb configurations for common pages
 * Import and use these for consistency across your site
 */
export const breadcrumbConfigs = {
  // Service pages
  services: [
    { name: "Home", url: "/" },
    { name: "Services" }
  ],
  fleetRefuelling: [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Fleet Refuelling" }
  ],
  generatorRefuelling: [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Generator Refuelling" }
  ],
  onSiteFuelDelivery: [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "On-Site Fuel Delivery" }
  ],
  bulkFuel: [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Bulk Fuel Supply" }
  ],
  haulage: [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Haulage Services" }
  ],
  ulsd: [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "ULSD Supply" }
  ],

  // Other pages
  about: [
    { name: "Home", url: "/" },
    { name: "About Us" }
  ],
  blog: [
    { name: "Home", url: "/" },
    { name: "Blog" }
  ],
  contact: [
    { name: "Home", url: "/" },
    { name: "Contact" }
  ],
  industries: [
    { name: "Home", url: "/" },
    { name: "Industries" }
  ],
  sustainability: [
    { name: "Home", url: "/" },
    { name: "Sustainability" }
  ],
  privacy: [
    { name: "Home", url: "/" },
    { name: "Privacy Policy" }
  ],
  terms: [
    { name: "Home", url: "/" },
    { name: "Terms of Service" }
  ]
};

/**
 * Helper function to create blog post breadcrumb
 * @param {string} postTitle - The title of the blog post
 * @returns {Array} Breadcrumb items array
 */
export function getBlogPostBreadcrumb(postTitle) {
  return [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: postTitle }
  ];
}