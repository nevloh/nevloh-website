// pages/privacy.js
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {
  Shield,
  Lock,
  Eye,
  FileText,
  User,
  Globe,
  Mail,
  Phone,
  CheckCircle,
  AlertCircle,
  Cookie,
  Database,
  Settings,
  ArrowRight,
  Calendar
} from 'lucide-react';

// Structured Data for Privacy Policy
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy",
  "description": "Nevloh Limited's privacy policy outlining how we collect, use, and protect your personal information",
  "url": "https://www.nevloh.com/privacy",
  "inLanguage": "en-JM",
  "publisher": {
    "@type": "Organization",
    "name": "Nevloh Limited",
    "url": "https://www.nevloh.com"
  },
  "datePublished": "2024-01-01",
  "dateModified": "2025-10-10"
};

const PrivacyPage = () => {
  const lastUpdated = "October 10, 2025";

  const privacySections = [
    {
      icon: FileText,
      title: "Information We Collect",
      id: "information-collection",
      content: [
        {
          subtitle: "Personal Information",
          items: [
            "Name and contact details (email, phone number, address)",
            "Business name and tax identification number (for commercial clients)",
            "Delivery address and location information",
            "Payment and billing information",
            "Account credentials for our online services"
          ]
        },
        {
          subtitle: "Automatic Information",
          items: [
            "IP address and device information",
            "Browser type and operating system",
            "Pages visited and time spent on our website",
            "Cookies and similar tracking technologies",
            "Location data when you use our mobile services"
          ]
        },
        {
          subtitle: "Business Information",
          items: [
            "Fuel delivery history and preferences",
            "Vehicle or equipment information",
            "Delivery schedule and frequency",
            "Communication preferences"
          ]
        }
      ]
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      id: "information-use",
      content: [
        {
          subtitle: "Service Delivery",
          items: [
            "Processing and fulfilling fuel delivery orders",
            "Managing your account and preferences",
            "Scheduling deliveries and route optimization",
            "Providing customer support and responding to inquiries",
            "Processing payments and managing billing"
          ]
        },
        {
          subtitle: "Business Operations",
          items: [
            "Improving our services and website functionality",
            "Analyzing usage patterns and customer preferences",
            "Conducting market research and customer satisfaction surveys",
            "Complying with legal and regulatory requirements",
            "Preventing fraud and ensuring security"
          ]
        },
        {
          subtitle: "Communication",
          items: [
            "Sending order confirmations and delivery notifications",
            "Providing service updates and important information",
            "Marketing communications (with your consent)",
            "Emergency alerts and service interruptions"
          ]
        }
      ]
    },
    {
      icon: Lock,
      title: "Information Sharing & Disclosure",
      id: "information-sharing",
      content: [
        {
          subtitle: "We Share Information With:",
          items: [
            "Service providers who help us deliver fuel and manage operations",
            "Payment processors for secure transaction handling",
            "Regulatory authorities as required by Jamaican law",
            "Business partners for joint marketing initiatives (with consent)",
            "Legal authorities when required by law or to protect our rights"
          ]
        },
        {
          subtitle: "We Do NOT:",
          items: [
            "Sell your personal information to third parties",
            "Share your data for unrelated marketing purposes",
            "Disclose your information without legal basis or consent"
          ]
        }
      ]
    },
    {
      icon: Cookie,
      title: "Cookies & Tracking Technologies",
      id: "cookies",
      content: [
        {
          subtitle: "We Use Cookies For:",
          items: [
            "Essential functions: Authentication, security, and basic site functionality",
            "Performance: Analyzing how visitors use our website",
            "Functionality: Remembering your preferences and settings",
            "Marketing: Delivering relevant advertisements (with consent)"
          ]
        },
        {
          subtitle: "Managing Cookies",
          items: [
            "You can control cookies through your browser settings",
            "Disabling cookies may limit website functionality",
            "Third-party cookies are subject to their own privacy policies"
          ]
        }
      ]
    },
    {
      icon: Shield,
      title: "Data Security",
      id: "data-security",
      content: [
        {
          subtitle: "Security Measures",
          items: [
            "Encryption of sensitive data in transit and at rest",
            "Secure servers and regular security audits",
            "Access controls and authentication protocols",
            "Employee training on data protection",
            "Regular backup and disaster recovery procedures"
          ]
        },
        {
          subtitle: "Your Responsibility",
          items: [
            "Keep your account credentials confidential",
            "Use strong, unique passwords",
            "Report any security concerns immediately",
            "Be cautious of phishing attempts"
          ]
        }
      ]
    },
    {
      icon: User,
      title: "Your Rights",
      id: "your-rights",
      content: [
        {
          subtitle: "You Have the Right To:",
          items: [
            "Access: Request a copy of your personal information",
            "Correction: Update or correct inaccurate information",
            "Deletion: Request deletion of your data (subject to legal requirements)",
            "Objection: Opt-out of marketing communications",
            "Portability: Receive your data in a portable format",
            "Restriction: Request limitation of data processing"
          ]
        },
        {
          subtitle: "Exercising Your Rights",
          items: [
            "Contact us at info@nevloh.com or call (876) 449-5172",
            "We'll respond to requests within 30 days",
            "Identity verification may be required",
            "Some requests may be subject to legal limitations"
          ]
        }
      ]
    },
    {
      icon: Globe,
      title: "International Data Transfers",
      id: "data-transfers",
      content: [
        {
          subtitle: "",
          items: [
            "Our services primarily operate within Jamaica",
            "Some service providers may be located outside Jamaica",
            "We ensure appropriate safeguards for international transfers",
            "Data transfers comply with applicable Jamaican data protection laws"
          ]
        }
      ]
    },
    {
      icon: Calendar,
      title: "Data Retention",
      id: "data-retention",
      content: [
        {
          subtitle: "",
          items: [
            "We retain personal data only as long as necessary",
            "Account information: Duration of business relationship plus 7 years",
            "Transaction records: As required by Jamaican tax and business laws",
            "Marketing data: Until you opt-out or request deletion",
            "Inactive accounts may be deleted after 3 years of inactivity"
          ]
        }
      ]
    },
    {
      icon: Settings,
      title: "Third-Party Services",
      id: "third-party",
      content: [
        {
          subtitle: "We Use Third-Party Services For:",
          items: [
            "Payment processing (secure payment gateways)",
            "Analytics (Google Analytics, website performance)",
            "Customer support (email and communication tools)",
            "Marketing platforms (email marketing, social media)",
            "Cloud storage and hosting services"
          ]
        },
        {
          subtitle: "",
          items: [
            "Third-party services have their own privacy policies",
            "We carefully select partners with strong privacy practices",
            "Links to third-party policies are provided where applicable"
          ]
        }
      ]
    }
  ];

  const quickLinks = [
    { title: "Information We Collect", id: "information-collection" },
    { title: "How We Use Your Information", id: "information-use" },
    { title: "Information Sharing", id: "information-sharing" },
    { title: "Cookies & Tracking", id: "cookies" },
    { title: "Data Security", id: "data-security" },
    { title: "Your Rights", id: "your-rights" },
    { title: "Data Transfers", id: "data-transfers" },
    { title: "Data Retention", id: "data-retention" },
    { title: "Third-Party Services", id: "third-party" }
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
        <title>Privacy Policy | Nevloh Limited - Your Data Protection Rights</title>
        <meta
          name="description"
          content="Nevloh Limited's privacy policy. Learn how we collect, use, and protect your personal information. Your privacy and data security are our priorities."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, personal information, Nevloh Limited, Jamaica privacy, GDPR, data security"
        />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nevloh.com/privacy" />
        <meta property="og:title" content="Privacy Policy | Nevloh Limited" />
        <meta property="og:description" content="Learn how Nevloh Limited protects your privacy and handles your personal information." />
        <meta property="og:site_name" content="Nevloh Limited" />
        <meta property="og:locale" content="en_JM" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://www.nevloh.com/privacy" />
        <meta property="twitter:title" content="Privacy Policy | Nevloh Limited" />
        <meta property="twitter:description" content="Your privacy and data security are our priorities." />

        <link rel="canonical" href="https://www.nevloh.com/privacy" />

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
                <Shield size={40} className="text-blue-600" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                At Nevloh Limited, we take your privacy seriously. This policy explains how we collect,
                use, and protect your personal information.
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
                  Nevloh Limited ("we," "us," or "our") is committed to protecting your privacy and personal information.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                  use our fuel delivery services, visit our website at www.nevloh.com, or interact with us.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By using our services, you agree to the collection and use of information in accordance with this policy.
                  If you do not agree with our policies and practices, please do not use our services.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <p className="text-sm text-gray-700">
                      <strong>Important:</strong> This policy may be updated periodically. We will notify you of any
                      significant changes via email or through our website. Your continued use of our services after
                      changes constitutes acceptance of the updated policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Sections */}
            <div className="space-y-8">
              {privacySections.map((section, index) => {
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
                          <ul className="space-y-3">
                            {subsection.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start space-x-3">
                                <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 leading-relaxed">{item}</span>
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

            {/* Children's Privacy */}
            <div className="bg-white rounded-3xl p-8 shadow-lg mt-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <AlertCircle size={24} className="text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Children's Privacy</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect
                  personal information from children under 18. If you are a parent or guardian and believe your
                  child has provided us with personal information, please contact us immediately.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If we become aware that we have collected personal information from a child under 18 without
                  parental consent, we will take steps to delete that information from our servers.
                </p>
              </div>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="bg-white rounded-3xl p-8 shadow-lg mt-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <FileText size={24} className="text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Changes to This Privacy Policy</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may update our Privacy Policy from time to time to reflect changes in our practices,
                  technology, legal requirements, or other factors. We will notify you of any material changes by:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Posting the updated policy on this page</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Updating the "Last Updated" date at the top of this policy</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Sending you an email notification (for significant changes)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Displaying a prominent notice on our website</span>
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We encourage you to review this Privacy Policy periodically. Your continued use of our services
                  after changes are posted constitutes your acceptance of the updated policy.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-8 shadow-lg mt-8 text-white">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Questions About Our Privacy Policy?</h2>
                <p className="text-lg opacity-90">
                  If you have questions, concerns, or would like to exercise your privacy rights,
                  please contact us using any of the methods below.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Mail size={32} className="mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:shamar@nevloh.com" className="hover:underline">
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
                <p className="text-sm opacity-90 mb-4">
                  We aim to respond to all privacy-related inquiries within 30 days.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  Contact Us <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>

            {/* Consent */}
            <div className="bg-white rounded-3xl p-8 shadow-lg mt-8">
              <div className="prose prose-lg max-w-none text-center">
                <p className="text-gray-700 leading-relaxed">
                  By using Nevloh Limited's services, you acknowledge that you have read and understood
                  this Privacy Policy and agree to its terms. If you do not agree, please discontinue use
                  of our services immediately.
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

export default PrivacyPage;