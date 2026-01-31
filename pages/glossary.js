// pages/glossary.js
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import {
  BookOpen,
  Search,
  ArrowLeft,
  Landmark,
  FileCheck,
  Shield,
  Ship,
  Fuel,
  Scale,
  Globe,
  Building2,
  AlertCircle,
  ChevronRight
} from 'lucide-react';
import Breadcrumbs, { breadcrumbConfigs } from '../components/Breadcrumbs';

export default function Glossary() {
  const router = useRouter();
  const termRefs = useRef({});

  // Scroll to term if defined in URL hash
  useEffect(() => {
    if (router.asPath.includes('#')) {
      const termId = router.asPath.split('#')[1];
      setTimeout(() => {
        const element = document.getElementById(termId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('highlight-term');
          setTimeout(() => element.classList.remove('highlight-term'), 2000);
        }
      }, 100);
    }
  }, [router.asPath]);

  // Schema for glossary page
  const glossarySchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "International Trade Glossary",
    "description": "Definitions of key terms used in international commodities trading, including Letters of Credit, trade finance, and shipping terminology.",
    "url": "https://www.nevloh.com/glossary",
    "hasPart": [
      {
        "@type": "DefinedTerm",
        "name": "Letter of Credit (LC)",
        "description": "A bank guarantee ensuring payment to a seller once specific documentary conditions are met."
      },
      {
        "@type": "DefinedTerm",
        "name": "UCP 600",
        "description": "Uniform Customs and Practice for Documentary Credits, the international standard governing Letters of Credit."
      },
      {
        "@type": "DefinedTerm",
        "name": "ISBP 745",
        "description": "International Standard Banking Practice for the Examination of Documents under Documentary Credits."
      }
    ]
  };

  // Glossary terms organized by category
  const glossaryTerms = {
    "Trade Finance": [
      {
        id: "lc",
        term: "Letter of Credit (LC)",
        abbrev: "LC",
        icon: Landmark,
        definition: "A financial instrument issued by a bank that guarantees payment to a seller once specific documentary conditions are met. In international trade, LCs eliminate counterparty risk by ensuring the buyer's bank will pay upon presentation of compliant shipping documents.",
        example: "When Nevloh ships diesel to a buyer in Trinidad, the buyer's bank issues an LC guaranteeing payment once Nevloh presents the bill of lading, inspection certificate, and other required documents.",
        relatedTerms: ["ucp-600", "isbp-745", "confirming-bank"]
      },
      {
        id: "lc-at-sight",
        term: "LC at Sight",
        abbrev: null,
        icon: Landmark,
        definition: "A Letter of Credit that requires the issuing bank to make payment immediately upon presentation and verification of compliant documents. This is the most secure payment method for sellers.",
        example: "Nevloh requires LC at sight for all transactions, meaning payment is received within days of document presentation rather than waiting 30, 60, or 90 days.",
        relatedTerms: ["lc", "document-presentation"]
      },
      {
        id: "ucp-600",
        term: "UCP 600",
        abbrev: "UCP 600",
        icon: FileCheck,
        definition: "Uniform Customs and Practice for Documentary Credits (Publication 600). Published by the International Chamber of Commerce (ICC), this is the global standard that governs how Letters of Credit are issued, used, and interpreted. Most LCs worldwide are subject to UCP 600.",
        example: "All Nevloh trade contracts specify that the LC must be 'subject to UCP 600' to ensure standardized handling across all banks involved.",
        relatedTerms: ["lc", "isbp-745", "icc"]
      },
      {
        id: "isbp-745",
        term: "ISBP 745",
        abbrev: "ISBP 745",
        icon: FileCheck,
        definition: "International Standard Banking Practice for the Examination of Documents under Documentary Credits (Publication 745). This ICC publication provides detailed guidance on how banks should examine documents presented under LCs, reducing discrepancies and disputes.",
        example: "Nevloh's documentation team uses ISBP 745 guidelines to ensure all shipping documents meet banking standards before presentation.",
        relatedTerms: ["ucp-600", "document-presentation", "discrepancy"]
      },
      {
        id: "confirming-bank",
        term: "Confirming Bank",
        abbrev: null,
        icon: Building2,
        definition: "A bank (usually in the seller's country or a major financial center) that adds its own guarantee to an LC, promising to pay the seller even if the issuing bank fails to do so. Confirmation is often required when the issuing bank has lower credit standing.",
        example: "If a buyer's bank in a smaller market issues the LC, Nevloh may require a major international bank to confirm it, adding an extra layer of payment security.",
        relatedTerms: ["lc", "issuing-bank"]
      },
      {
        id: "issuing-bank",
        term: "Issuing Bank",
        abbrev: null,
        icon: Building2,
        definition: "The bank that issues the Letter of Credit on behalf of the buyer. The issuing bank is responsible for examining documents and making payment to the seller when conditions are met.",
        example: "The buyer applies to their bank (the issuing bank) to open an LC in favor of Nevloh LLC.",
        relatedTerms: ["lc", "confirming-bank"]
      },
      {
        id: "document-presentation",
        term: "Document Presentation",
        abbrev: null,
        icon: FileCheck,
        definition: "The formal submission of required shipping and trade documents to the bank for examination under an LC. Documents typically include the bill of lading, commercial invoice, packing list, inspection certificate, and certificate of origin.",
        example: "After the vessel sails, Nevloh's team compiles all documents and presents them to the bank within the LC's specified timeframe.",
        relatedTerms: ["lc", "bill-of-lading", "discrepancy"]
      },
      {
        id: "discrepancy",
        term: "Discrepancy",
        abbrev: null,
        icon: AlertCircle,
        definition: "Any inconsistency between presented documents and the LC terms. Even minor errors (typos, missing signatures, date mismatches) can cause banks to reject documents, delaying payment until resolved.",
        example: "If the LC specifies 'EN590 Diesel' but the invoice says 'EN 590 Diesel' (with a space), this could be flagged as a discrepancy.",
        relatedTerms: ["document-presentation", "isbp-745"]
      }
    ],
    "Shipping & Logistics": [
      {
        id: "bill-of-lading",
        term: "Bill of Lading (B/L)",
        abbrev: "B/L",
        icon: Ship,
        definition: "A legal document issued by a carrier (ship owner or operator) that serves three functions: (1) receipt for goods loaded, (2) evidence of the contract of carriage, and (3) document of title that allows the holder to claim the cargo.",
        example: "The original bill of lading is a key LC document. Nevloh presents the B/L to the bank, which forwards it to the buyer who needs it to claim the cargo at the destination port.",
        relatedTerms: ["document-presentation", "load-port"]
      },
      {
        id: "load-port",
        term: "Load Port",
        abbrev: null,
        icon: Ship,
        definition: "The port where cargo is loaded onto the vessel. This is where quality and quantity inspections typically occur before shipment.",
        example: "SGS inspection at the load port confirms the diesel meets EN590 specifications before the vessel departs.",
        relatedTerms: ["discharge-port", "sgs", "intertek"]
      },
      {
        id: "discharge-port",
        term: "Discharge Port",
        abbrev: null,
        icon: Ship,
        definition: "The destination port where cargo is unloaded from the vessel. Also called the port of destination.",
        example: "Kingston, Jamaica is a common discharge port for Caribbean fuel shipments.",
        relatedTerms: ["load-port", "bill-of-lading"]
      },
      {
        id: "mt",
        term: "Metric Ton (MT)",
        abbrev: "MT",
        icon: Scale,
        definition: "A unit of mass equal to 1,000 kilograms (approximately 2,205 pounds). This is the standard unit for measuring bulk commodities in international trade.",
        example: "Minimum diesel orders typically align with vessel parcel sizes of 2,000+ MT.",
        relatedTerms: ["parcel-size"]
      },
      {
        id: "parcel-size",
        term: "Parcel Size",
        abbrev: null,
        icon: Ship,
        definition: "The quantity of cargo assigned to a specific shipment or portion of a vessel's capacity. Minimum parcel sizes are determined by vessel economics and route viability.",
        example: "A 5,000 MT parcel might be loaded onto a Medium Range (MR) tanker serving Caribbean routes.",
        relatedTerms: ["mt", "vessel-economics"]
      },
      {
        id: "laycan",
        term: "Laycan",
        abbrev: null,
        icon: Ship,
        definition: "Short for 'Laydays/Cancelling Date' — the window of time during which a vessel must arrive at the load port. If the vessel arrives before laydays, loading may not begin. If it arrives after the cancelling date, the charterer may cancel the contract.",
        example: "The SPA specifies a laycan of March 15-20, meaning the vessel must arrive at the load port within this 5-day window.",
        relatedTerms: ["spa", "load-port"]
      }
    ],
    "Inspection & Quality": [
      {
        id: "sgs",
        term: "SGS",
        abbrev: "SGS",
        icon: Shield,
        definition: "SGS S.A. is a Swiss multinational company and the world's leading inspection, verification, testing, and certification company. In commodities trading, SGS provides independent quality and quantity inspection at load and discharge ports.",
        example: "SGS inspectors sample and test the diesel at the load port, issuing a certificate that becomes part of the LC document package.",
        relatedTerms: ["intertek", "inspection-certificate", "load-port"]
      },
      {
        id: "intertek",
        term: "Intertek",
        abbrev: null,
        icon: Shield,
        definition: "A multinational assurance, inspection, product testing, and certification company. Like SGS, Intertek provides independent third-party inspection services for commodities trading.",
        example: "Nevloh accepts inspection certificates from either SGS or Intertek, both being internationally recognized.",
        relatedTerms: ["sgs", "inspection-certificate"]
      },
      {
        id: "inspection-certificate",
        term: "Inspection Certificate",
        abbrev: null,
        icon: Shield,
        definition: "An official document issued by an independent inspection company (like SGS or Intertek) certifying the quality, quantity, and specifications of goods. This certificate is typically required for LC document presentation.",
        example: "The inspection certificate confirms the diesel meets EN590 specs with sulfur content ≤10 ppm.",
        relatedTerms: ["sgs", "intertek", "document-presentation"]
      }
    ],
    "Product Specifications": [
      {
        id: "en590",
        term: "EN590",
        abbrev: "EN590",
        icon: Fuel,
        definition: "A European standard that describes the physical properties that automotive diesel fuel must meet for sale in the European Union and other countries. EN590 diesel is a high-quality fuel suitable for modern engines with emission control systems.",
        example: "EN590 diesel has a maximum sulfur content of 10 ppm, making it compatible with modern diesel particulate filters.",
        relatedTerms: ["ulsd", "ppm"]
      },
      {
        id: "ulsd",
        term: "Ultra Low Sulfur Diesel (ULSD)",
        abbrev: "ULSD",
        icon: Fuel,
        definition: "Diesel fuel with sulfur content of 15 parts per million (ppm) or less. ULSD is required for use with advanced emission control devices and is the standard for road diesel in most developed countries.",
        example: "Nevloh supplies EN590/ULSD with ≤10 ppm sulfur content, exceeding even ULSD requirements.",
        relatedTerms: ["en590", "ppm"]
      },
      {
        id: "ppm",
        term: "Parts Per Million (ppm)",
        abbrev: "ppm",
        icon: Fuel,
        definition: "A measurement unit expressing concentration. In diesel fuel, ppm typically refers to sulfur content. Lower ppm means cleaner fuel with fewer emissions.",
        example: "EN590 diesel must have ≤10 ppm sulfur (that's 0.001% by weight).",
        relatedTerms: ["ulsd", "en590"]
      },
      {
        id: "urea-46",
        term: "Urea 46%",
        abbrev: null,
        icon: Fuel,
        definition: "Agricultural-grade urea fertilizer containing 46% nitrogen by weight. It's the most widely used solid nitrogen fertilizer in the world due to its high nitrogen content and relatively low cost per unit of nitrogen.",
        example: "Nevloh supplies prilled and granular urea 46% for agricultural applications across the Caribbean.",
        relatedTerms: ["prilled", "granular"]
      },
      {
        id: "prilled",
        term: "Prilled",
        abbrev: null,
        icon: Fuel,
        definition: "A form of urea fertilizer produced by spraying molten urea from the top of a tower, forming small spherical particles as it falls and cools. Prills are smaller and less uniform than granules.",
        example: "Prilled urea is often preferred for certain spreading equipment and soil types.",
        relatedTerms: ["urea-46", "granular"]
      },
      {
        id: "granular",
        term: "Granular",
        abbrev: null,
        icon: Fuel,
        definition: "A form of urea fertilizer with larger, more uniform particles than prills. Granular urea has better storage properties and is easier to blend with other fertilizers.",
        example: "Granular urea is typically preferred for large-scale agricultural applications.",
        relatedTerms: ["urea-46", "prilled"]
      }
    ],
    "Trade Contracts": [
      {
        id: "spa",
        term: "Sales & Purchase Agreement (SPA)",
        abbrev: "SPA",
        icon: FileCheck,
        definition: "The legally binding contract between buyer and seller that defines all terms of the transaction including product specifications, quantity, price, delivery terms, payment terms, and other conditions.",
        example: "Once terms are agreed, Nevloh and the buyer sign an SPA that specifies exact LC requirements, inspection protocols, and delivery schedule.",
        relatedTerms: ["lc", "incoterms"]
      },
      {
        id: "incoterms",
        term: "Incoterms",
        abbrev: null,
        icon: Globe,
        definition: "International Commercial Terms published by the ICC that define responsibilities between buyers and sellers for the delivery of goods. Common terms include FOB (Free on Board), CIF (Cost, Insurance, Freight), and CFR (Cost and Freight).",
        example: "A CFR Kingston contract means Nevloh is responsible for costs and freight to Kingston, but the buyer bears risk once goods are loaded.",
        relatedTerms: ["spa", "fob", "cif"]
      },
      {
        id: "fob",
        term: "Free on Board (FOB)",
        abbrev: "FOB",
        icon: Ship,
        definition: "An Incoterm where the seller delivers goods on board the vessel at the named port of shipment. Risk transfers from seller to buyer once goods pass the ship's rail.",
        example: "Under FOB terms, Nevloh's responsibility ends once the diesel is loaded onto the vessel at the load port.",
        relatedTerms: ["incoterms", "cif", "cfr"]
      },
      {
        id: "cif",
        term: "Cost, Insurance, Freight (CIF)",
        abbrev: "CIF",
        icon: Ship,
        definition: "An Incoterm where the seller pays for cost of goods, insurance, and freight to the named destination port. However, risk transfers to buyer once goods are loaded at the origin port.",
        example: "CIF Kingston means Nevloh arranges and pays for shipping and insurance to Kingston, but the buyer assumes risk once loaded.",
        relatedTerms: ["incoterms", "fob", "cfr"]
      },
      {
        id: "cfr",
        term: "Cost and Freight (CFR)",
        abbrev: "CFR",
        icon: Ship,
        definition: "Similar to CIF, but the seller does not arrange insurance. The seller pays for cost of goods and freight to destination, but the buyer must arrange their own cargo insurance.",
        example: "CFR is common when buyers prefer to arrange their own insurance through local providers.",
        relatedTerms: ["incoterms", "cif", "fob"]
      }
    ],
    "Market Participants": [
      {
        id: "ipp",
        term: "Independent Power Producer (IPP)",
        abbrev: "IPP",
        icon: Building2,
        definition: "A private company that generates electricity and sells it to utilities, governments, or end users. IPPs often operate diesel or heavy fuel oil generators, particularly in regions without reliable grid power.",
        example: "IPPs in the Caribbean are key buyers of diesel fuel for power generation.",
        relatedTerms: ["off-taker"]
      },
      {
        id: "off-taker",
        term: "Off-Taker",
        abbrev: null,
        icon: Building2,
        definition: "The party who purchases and takes delivery of goods. In commodities trading, off-takers are typically end users or distributors who have agreed to purchase specified quantities.",
        example: "A power utility serving as an off-taker might sign a 12-month supply contract for monthly diesel deliveries.",
        relatedTerms: ["ipp", "spa"]
      },
      {
        id: "counterparty",
        term: "Counterparty",
        abbrev: null,
        icon: Building2,
        definition: "The other party in a financial or commercial transaction. In trade, the counterparty is the entity on the other side of the deal. Counterparty risk is the risk that the other party fails to meet their obligations.",
        example: "LC-based settlement eliminates counterparty risk because the bank guarantees payment.",
        relatedTerms: ["lc", "counterparty-risk"]
      },
      {
        id: "kyc",
        term: "Know Your Customer (KYC)",
        abbrev: "KYC",
        icon: Shield,
        definition: "The process of verifying the identity, suitability, and risks of a potential business relationship. KYC includes checking company registration, ownership, regulatory compliance, and financial standing.",
        example: "Before engaging in trade, Nevloh conducts KYC verification to ensure counterparties meet qualification criteria.",
        relatedTerms: ["counterparty", "compliance"]
      }
    ]
  };

  // Flatten terms for search and navigation
  const allTerms = Object.values(glossaryTerms).flat();

  return (
    <>
      <Head>
        <title>Trade Glossary | International Trade Terms | Nevloh LLC</title>
        <meta name="description" content="Glossary of international commodities trading terms including Letters of Credit, UCP 600, ISBP 745, Incoterms, and shipping terminology. Learn the language of structured trade." />
        <meta name="keywords" content="trade glossary, letter of credit terms, LC glossary, UCP 600 explained, ISBP 745, international trade terminology, commodities trading terms" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.nevloh.com/glossary" />

        <meta property="og:title" content="International Trade Glossary | Nevloh LLC" />
        <meta property="og:description" content="Clear definitions of Letters of Credit, trade finance, and shipping terminology." />
        <meta property="og:url" content="https://www.nevloh.com/glossary" />
      </Head>

      <Script id="glossary-schema" type="application/ld+json" strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }} />

      <style jsx global>{`
        .highlight-term {
          animation: highlight-pulse 2s ease-out;
        }
        @keyframes highlight-pulse {
          0% { background-color: rgb(191 219 254); }
          100% { background-color: transparent; }
        }
      `}</style>

      <div className="bg-[#f8fafc] min-h-screen">
        {/* Header */}
        <div className="bg-slate-900 text-white py-3 px-4 text-center">
          <p className="text-sm">
            <BookOpen size={14} className="inline mr-2" />
            Reference guide for{' '}
            <Link href="/international-trade" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
              International Trade
            </Link>
            {' '}terminology
          </p>
        </div>

        <div className="pt-20">
          {/* Breadcrumbs */}
          <div className="max-w-7xl mx-auto px-4 pt-6">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-slate-500 hover:text-blue-600 transition-colors">Home</Link>
              <ChevronRight size={14} className="text-slate-400" />
              <Link href="/international-trade" className="text-slate-500 hover:text-blue-600 transition-colors">International Trade</Link>
              <ChevronRight size={14} className="text-slate-400" />
              <span className="text-slate-900 font-medium">Glossary</span>
            </nav>
          </div>

          {/* Page Header */}
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                <BookOpen size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900">Trade Glossary</h1>
                <p className="text-slate-500 mt-1">Understanding international commodities terminology</p>
              </div>
            </div>

            <p className="text-lg text-slate-600 max-w-3xl">
              This glossary explains key terms used in international commodities trading.
              Click any highlighted term on our{' '}
              <Link href="/international-trade" className="text-blue-600 hover:underline">
                International Trade page
              </Link>
              {' '}to jump directly to its definition.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="max-w-7xl mx-auto px-4 mb-12">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h2 className="font-bold text-slate-800 mb-4">Jump to Category</h2>
              <div className="flex flex-wrap gap-3">
                {Object.keys(glossaryTerms).map((category) => (
                  <a
                    key={category}
                    href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-4 py-2 bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 rounded-lg text-sm font-medium transition-colors"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Glossary Content */}
          <div className="max-w-7xl mx-auto px-4 pb-20">
            {Object.entries(glossaryTerms).map(([category, terms]) => (
              <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-16">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-200">
                  {category}
                </h2>

                <div className="space-y-6">
                  {terms.map((item) => (
                    <div
                      key={item.id}
                      id={item.id}
                      className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <item.icon size={24} className="text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">
                            {item.term}
                          </h3>
                          {item.abbrev && (
                            <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-mono font-bold">
                              {item.abbrev}
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-slate-700 leading-relaxed mb-4">
                        {item.definition}
                      </p>

                      {item.example && (
                        <div className="bg-slate-50 rounded-xl p-4 mb-4">
                          <p className="text-sm text-slate-600">
                            <strong className="text-slate-800">Example:</strong> {item.example}
                          </p>
                        </div>
                      )}

                      {item.relatedTerms && item.relatedTerms.length > 0 && (
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs text-slate-500 font-medium">Related:</span>
                          {item.relatedTerms.map((relatedId) => {
                            const relatedTerm = allTerms.find(t => t.id === relatedId);
                            return relatedTerm ? (
                              <a
                                key={relatedId}
                                href={`#${relatedId}`}
                                className="text-xs bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-700 px-2 py-1 rounded transition-colors"
                              >
                                {relatedTerm.abbrev || relatedTerm.term.split('(')[0].trim()}
                              </a>
                            ) : null;
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Back to Trade Page CTA */}
          <div className="bg-slate-900 py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Explore Our Trade Services?
              </h2>
              <p className="text-slate-400 mb-8">
                Now that you understand the terminology, learn how Nevloh LLC facilitates
                bank-secured commodities trading for the Caribbean.
              </p>
              <Link
                href="/international-trade"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to International Trade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}