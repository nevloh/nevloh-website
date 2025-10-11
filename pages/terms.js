// pages/terms.js
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {
  FileText,
  Scale,
  AlertTriangle,
  DollarSign,
  Truck,
  ShieldCheck,
  UserCheck,
  XCircle,
  CheckCircle,
  Gavel,
  Globe,
  Clock,
  Mail,
  Phone,
  ArrowRight,
  Calendar,
  Package,
  CreditCard,
  Ban
} from 'lucide-react';

// Structured Data for Terms of Service
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Terms of Service",
  "description": "Nevloh Limited's terms of service outlining the rules and regulations for using our fuel delivery services",
  "url": "https://www.nevloh.com/terms",
  "inLanguage": "en-JM",
  "publisher": {
    "@type": "Organization",
    "name": "Nevloh Limited",
    "url": "https://www.nevloh.com"
  },
  "datePublished": "2024-01-01",
  "dateModified": "2025-10-10"
};

const TermsPage = () => {
  const lastUpdated = "October 10, 2025";

  const termsSections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      id: "acceptance",
      content: [
        {
          subtitle: "",
          text: "By accessing and using Nevloh Limited's services, including our website (www.nevloh.com), mobile applications, and fuel delivery services, you agree to be bound by these Terms of Service ('Terms'). If you do not agree to these Terms, you must not use our services.",
          points: [
            "These Terms constitute a legally binding agreement between you and Nevloh Limited",
            "Your continued use of our services signifies acceptance of any updated Terms",
            "If you are using our services on behalf of a business, you represent that you have authority to bind that entity",
            "You must be at least 18 years old to use our services"
          ]
        }
      ]
    },
    {
      icon: Truck,
      title: "Fuel Delivery Services",
      id: "services",
      content: [
        {
          subtitle: "Service Description",
          text: "Nevloh Limited provides professional fuel delivery services throughout Jamaica, including but not limited to:",
          points: [
            "Ultra Low Sulphur Diesel (ULSD) delivery",
            "Fleet refuelling services",
            "Generator fuel delivery",
            "On-site fuel delivery to construction sites and remote locations",
            "Bulk fuel supply for commercial and industrial operations",
            "Emergency fuel delivery (24/7 availability)"
          ]
        },
        {
          subtitle: "Service Availability",
          text: "",
          points: [
            "Services are available across all 14 parishes in Jamaica",
            "Delivery times are estimates and may vary due to traffic, weather, or operational constraints",
            "Emergency services are subject to availability and additional fees",
            "We reserve the right to refuse service to any location deemed unsafe or inaccessible",
            "Minimum order quantities may apply for certain services"
          ]
        }
      ]
    },
    {
      icon: UserCheck,
      title: "Account Registration & Use",
      id: "accounts",
      content: [
        {
          subtitle: "Account Requirements",
          text: "",
          points: [
            "You must provide accurate, current, and complete information during registration",
            "You are responsible for maintaining the confidentiality of your account credentials",
            "You must notify us immediately of any unauthorized use of your account",
            "One person or entity may not maintain multiple accounts",
            "We reserve the right to suspend or terminate accounts that violate these Terms"
          ]
        },
        {
          subtitle: "Commercial Accounts",
          text: "Business customers must provide:",
          points: [
            "Valid business registration documents",
            "Tax identification number (TRN)",
            "Authorized signatory information",
            "Valid business address and contact information"
          ]
        }
      ]
    },
    {
      icon: Package,
      title: "Ordering & Delivery",
      id: "ordering",
      content: [
        {
          subtitle: "Placing Orders",
          text: "",
          points: [
            "Orders can be placed via phone, website, mobile app, or email",
            "All orders are subject to acceptance by Nevloh Limited",
            "We reserve the right to refuse or cancel orders at our discretion",
            "Order confirmation does not guarantee delivery on a specific date unless explicitly stated",
            "Changes to orders must be made at least 24 hours before scheduled delivery"
          ]
        },
        {
          subtitle: "Delivery Terms",
          text: "",
          points: [
            "Customer or authorized representative must be present to receive delivery",
            "Valid identification may be required at delivery",
            "Delivery location must be accessible to our fuel delivery vehicles",
            "Customer is responsible for ensuring safe delivery conditions",
            "Fuel will be delivered to the designated tank or equipment",
            "Customer must inspect delivery before signing acceptance documentation"
          ]
        },
        {
          subtitle: "Failed Deliveries",
          text: "",
          points: [
            "If delivery cannot be completed due to customer unavailability, additional fees may apply",
            "Unsafe delivery conditions may result in delivery refusal and rescheduling fees",
            "Inaccessible locations may incur additional charges",
            "We are not liable for delays caused by circumstances beyond our control"
          ]
        }
      ]
    },
    {
      icon: DollarSign,
      title: "Pricing & Payment",
      id: "pricing",
      content: [
        {
          subtitle: "Pricing",
          text: "",
          points: [
            "Fuel prices are subject to change without notice based on market conditions",
            "Prices quoted are valid for 24 hours unless otherwise stated",
            "Additional fees may apply for emergency deliveries, remote locations, or after-hours service",
            "Volume discounts available for bulk orders",
            "All prices are in Jamaican Dollars (JMD) unless otherwise specified"
          ]
        },
        {
          subtitle: "Payment Terms",
          text: "",
          points: [
            "Payment is due upon delivery unless credit terms have been established",
            "Accepted payment methods: Cash, credit/debit cards, bank transfers, company checks",
            "Credit accounts require prior approval and credit application",
            "Late payments may incur interest charges at the legal maximum rate",
            "We reserve the right to suspend services for accounts with outstanding balances"
          ]
        },
        {
          subtitle: "Taxes & Fees",
          text: "",
          points: [
            "All prices exclude applicable taxes unless stated otherwise",
            "General Consumption Tax (GCT) and other applicable taxes will be added to invoices",
            "Environmental fees and surcharges may apply",
            "Delivery fees are non-refundable"
          ]
        }
      ]
    },
    {
      icon: XCircle,
      title: "Cancellations & Refunds",
      id: "cancellations",
      content: [
        {
          subtitle: "Cancellation Policy",
          text: "",
          points: [
            "Orders may be cancelled up to 24 hours before scheduled delivery without penalty",
            "Cancellations within 24 hours of delivery may incur a cancellation fee",
            "Emergency delivery orders cannot be cancelled once dispatch has occurred",
            "Recurring delivery schedules require 48 hours notice for cancellation"
          ]
        },
        {
          subtitle: "Refunds",
          text: "",
          points: [
            "Fuel delivered cannot be returned or refunded",
            "Refunds for delivery errors or quality issues must be reported within 24 hours",
            "Refund requests are reviewed on a case-by-case basis",
            "Processing time for approved refunds is 7-14 business days",
            "Refunds will be issued to the original payment method"
          ]
        }
      ]
    },
    {
      icon: ShieldCheck,
      title: "Safety & Liability",
      id: "safety",
      content: [
        {
          subtitle: "Safety Requirements",
          text: "Customers must:",
          points: [
            "Provide safe and accessible delivery locations",
            "Ensure tanks and equipment are in good working condition",
            "Comply with all applicable safety regulations and fire codes",
            "Keep delivery areas clear of obstacles and hazards",
            "Follow our driver's safety instructions during delivery",
            "Not smoke or use open flames during fuel delivery"
          ]
        },
        {
          subtitle: "Limitation of Liability",
          text: "",
          points: [
            "Nevloh Limited is not liable for damages to tanks, equipment, or property unless caused by our negligence",
            "We are not responsible for fuel quality issues arising from customer's tanks or equipment",
            "Our liability is limited to the cost of fuel delivered",
            "We are not liable for consequential, indirect, or incidental damages",
            "Customer assumes all risk once fuel is delivered and accepted",
            "Force majeure events exempt us from liability"
          ]
        },
        {
          subtitle: "Insurance",
          text: "",
          points: [
            "Nevloh Limited maintains appropriate insurance coverage",
            "Customers are encouraged to maintain their own insurance",
            "Proof of insurance may be provided upon request"
          ]
        }
      ]
    },
    {
      icon: Ban,
      title: "Prohibited Uses",
      id: "prohibited",
      content: [
        {
          subtitle: "You May NOT:",
          text: "",
          points: [
            "Use our services for any illegal purpose or in violation of any laws",
            "Resell fuel delivered by Nevloh Limited without written authorization",
            "Tamper with delivery equipment or interfere with our operations",
            "Provide false information or misrepresent your identity",
            "Use our services to harm, harass, or defraud others",
            "Attempt to gain unauthorized access to our systems",
            "Reverse engineer or copy our proprietary technology or processes",
            "Use automated systems to access our services without permission"
          ]
        }
      ]
    },
    {
      icon: Globe,
      title: "Intellectual Property",
      id: "intellectual-property",
      content: [
        {
          subtitle: "",
          text: "",
          points: [
            "All content on our website and materials is owned by Nevloh Limited",
            "Our trademarks, logos, and brand names are protected intellectual property",
            "You may not use our intellectual property without written permission",
            "Customer may not reproduce, distribute, or create derivative works from our content",
            "Any feedback or suggestions you provide may be used by us without compensation"
          ]
        }
      ]
    },
    {
      icon: AlertTriangle,
      title: "Warranties & Disclaimers",
      id: "warranties",
      content: [
        {
          subtitle: "Product Warranty",
          text: "",
          points: [
            "We warrant that fuel delivered meets industry standards and specifications",
            "Fuel quality claims must be made within 24 hours of delivery with proof",
            "We do not warrant that services will be uninterrupted or error-free",
            "Services are provided 'as is' and 'as available'"
          ]
        },
        {
          subtitle: "Disclaimer",
          text: "",
          points: [
            "TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES",
            "We make no warranties regarding website availability, accuracy, or reliability",
            "We do not guarantee specific results from using our services",
            "Third-party content and links are not endorsed or warranted by us"
          ]
        }
      ]
    },
    {
      icon: Gavel,
      title: "Governing Law & Disputes",
      id: "governing-law",
      content: [
        {
          subtitle: "Governing Law",
          text: "",
          points: [
            "These Terms are governed by the laws of Jamaica",
            "Any disputes will be subject to the exclusive jurisdiction of Jamaican courts",
            "Legal proceedings must be brought in Saint Catherine Parish or Kingston, Jamaica"
          ]
        },
        {
          subtitle: "Dispute Resolution",
          text: "",
          points: [
            "We encourage resolution of disputes through direct communication",
            "Mediation may be pursued before litigation",
            "Both parties agree to act in good faith to resolve disputes",
            "Legal action must be commenced within one year of the dispute arising"
          ]
        }
      ]
    },
    {
      icon: Clock,
      title: "Term & Termination",
      id: "termination",
      content: [
        {
          subtitle: "Term",
          text: "",
          points: [
            "These Terms remain in effect while you use our services",
            "Service agreements continue until cancelled by either party",
            "Recurring delivery schedules require written cancellation notice"
          ]
        },
        {
          subtitle: "Termination",
          text: "We may terminate or suspend your access immediately if:",
          points: [
            "You violate these Terms",
            "You fail to pay for services",
            "You engage in fraudulent activity",
            "Your account poses a security risk",
            "Required by law or regulatory authority"
          ]
        },
        {
          subtitle: "Effect of Termination",
          text: "",
          points: [
            "Outstanding balances become immediately due",
            "You must cease all use of our services",
            "Provisions that should survive termination will remain in effect",
            "We may retain your information as required by law"
          ]
        }
      ]
    }
  ];

  const quickLinks = [
    { title: "Acceptance", id: "acceptance" },
    { title: "Services", id: "services" },
    { title: "Accounts", id: "accounts" },
    { title: "Ordering & Delivery", id: "ordering" },
    { title: "Pricing & Payment", id: "pricing" },
    { title: "Cancellations", id: "cancellations" },
    { title: "Safety & Liability", id: "safety" },
    { title: "Prohibited Uses", id: "prohibited" },
    { title: "Intellectual Property", id: "intellectual-property" },
    { title: "Warranties", id: "warranties" },
    { title: "Governing Law", id: "governing-law" },
    { title: "Termination", id: "termination" }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Head>
        <title>Terms of Service | Nevloh Limited - Fuel Delivery Terms & Conditions</title>
        <meta
          name="description"
          content="Nevloh Limited's terms of service. Read our terms and conditions for fuel delivery services in Jamaica. Legal agreements and customer obligations."
        />
        <meta
          name="keywords"
          content="terms of service, terms and conditions, fuel delivery terms, Nevloh Limited, Jamaica, legal agreement, service terms"
        />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nevloh.com/terms" />
        <meta property="og:title" content="Terms of Service | Nevloh Limited" />
        <meta property="og:description" content="Read Nevloh Limited's terms and conditions for our fuel delivery services in Jamaica." />
        <meta property="og:site_name" content="Nevloh Limited" />
        <meta property="og:locale" content="en_JM" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://www.nevloh.com/terms" />
        <meta property="twitter:title" content="Terms of Service | Nevloh Limited" />
        <meta property="twitter:description" content="Terms and conditions for Nevloh Limited fuel delivery services." />

        <link rel="canonical" href="https://www.nevloh.com/terms" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-4">
                <Scale size={40} className="text-blue-600" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Please read these terms carefully before using Nevloh Limited's fuel delivery services.
                By using our services, you agree to be bound by these terms.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <Calendar size={16} />
                <span>Last Updated: {lastUpdated}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-8 px-4 bg-white border-y border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
              <span className="text-sm font-semibold text-gray-700 whitespace-nowrap mr-2">Quick Links:</span>
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-blue-600 hover:text-blue-800 whitespace-nowrap px-3 py-1 rounded-full hover:bg-blue-50 transition-colors"
                >
                  {link.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-3xl p-8 shadow-lg mb-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to Nevloh Limited. These Terms of Service ("Terms") govern your access to and use of our
                  fuel delivery services, website (www.nevloh.com), mobile applications, and any related services
                  (collectively, the "Services").
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms constitute a legally binding agreement between you ("you," "your," or "Customer") and
                  Nevloh Limited ("we," "us," "our," or "Company"). Please read these Terms carefully.
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                    <div className="text-sm text-gray-700">
                      <p className="font-semibold mb-1">IMPORTANT LEGAL NOTICE:</p>
                      <p>
                        By accessing or using our Services, you acknowledge that you have read, understood, and agree
                        to be bound by these Terms. If you do not agree to these Terms, you must not use our Services.
                        These Terms include important information about your legal rights, including limitations on
                        liability and a requirement to arbitrate disputes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms Sections */}
            <div className="space-y-8">
              {termsSections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <div key={index} id={section.id} className="bg-white rounded-3xl p-8 shadow-lg scroll-mt-32">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <IconComponent size={24} className="text-blue-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-800">{section.title}</h2>
                    </div>

                    <div className="space-y-6">
                      {section.content.map((subsection, subIndex) => (
                        <div key={subIndex}>
                          {subsection.subtitle && (
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                              {subsection.subtitle}
                            </h3>
                          )}
                          {subsection.text && (
                            <p className="text-gray-700 leading-relaxed mb-3">
                              {subsection.text}
                            </p>
                          )}
                          <ul className="space-y-3">
                            {subsection.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start space-x-3">
                                <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Severability */}
            <div className="bg-white rounded-3xl p-8 shadow-lg mt-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <FileText size={24} className="text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Severability & Entire Agreement</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Severability</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will be
                  limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in
                  full force and effect.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Entire Agreement</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms, together with our Privacy Policy and any other agreements expressly incorporated by
                  reference, constitute the entire agreement between you and Nevloh Limited regarding the use of our
                  Services and supersede all prior agreements and understandings.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Waiver</h3>
                <p className="text-gray-700 leading-relaxed">
                  No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term
                  or any other term, and our failure to assert any right or provision under these Terms shall not
                  constitute a waiver of such right or provision.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="bg-white rounded-3xl p-8 shadow-lg mt-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Clock size={24} className="text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Changes to Terms of Service</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We reserve the right to modify these Terms at any time. When we make changes, we will:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Update the "Last Updated" date at the top of this page</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Post the revised Terms on our website</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Notify registered users via email for material changes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Display a prominent notice on our website</span>
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Your continued use of our Services after changes become effective constitutes acceptance of the
                  revised Terms. If you do not agree to the new Terms, you must stop using our Services.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-8 shadow-lg mt-8 text-white">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Questions About Our Terms?</h2>
                <p className="text-lg opacity-90">
                  If you have questions about these Terms of Service or need assistance with our services,
                  please contact us.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Mail size={32} className="mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:info@nevloh.com" className="hover:underline">
                    info@nevloh.com
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Phone size={32} className="mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a href="tel:+18764495172" className="hover:underline">
                    (876) 449-5172
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Globe size={32} className="mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-sm">
                    Caymanas Bay<br />
                    Spanish Town<br />
                    Saint Catherine, Jamaica
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  Contact Us <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="bg-white rounded-3xl p-8 shadow-lg mt-8">
              <div className="prose prose-lg max-w-none text-center">
                <p className="text-gray-700 leading-relaxed font-semibold">
                  BY USING NEVLOH LIMITED'S SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE,
                  UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM.
                </p>
                <p className="text-gray-600 text-sm mt-4">
                  For questions about our Privacy Policy, please visit our{' '}
                  <Link href="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Top */}
        <section className="py-8 px-4 bg-white border-t border-gray-200">
          <div className="max-w-5xl mx-auto text-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              Back to Top <ArrowRight className="ml-2 rotate-[-90deg]" size={20} />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsPage;