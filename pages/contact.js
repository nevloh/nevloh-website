// pages/contact.js
import React, { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  Building2,
  Truck,
  MessageSquare,
  CheckCircle,
  Star,
  Fuel,
  ArrowRight,
  Users
} from 'lucide-react';
import Breadcrumbs, { breadcrumbConfigs } from '../components/Breadcrumbs';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    whatsapp: '',
    companyName: '',
    position: '',
    businessType: 'individual',
    fuelTypes: [],
    deliveryFrequency: '',
    averageVolume: '',
    preferredDeliveryTime: '',
    address: '',
    parish: '',
    preferredContact: 'email',
    message: '',
    hearAboutUs: '',
    newsletter: false,
    whatsappUpdates: false,
    smsAlerts: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submissionMessage, setSubmissionMessage] = useState('');

  // Schema Markup
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Nevloh Limited",
    "description": "Contact Nevloh Limited for professional fuel delivery services across Jamaica. Get quotes, schedule deliveries, and speak with our team.",
    "url": "https://www.nevloh.com/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://www.nevloh.com/#organization"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.nevloh.com/#organization",
    "name": "Nevloh Limited",
    "image": "https://www.nevloh.com/images/logo.png",
    "logo": "https://www.nevloh.com/images/logo.png",
    "telephone": "+1-876-449-5172",
    "email": "shamar@nevloh.com",
    "url": "https://www.nevloh.com",
    "description": "Professional fuel delivery services across Jamaica. Fleet refuelling, generator refuelling, bulk fuel supply, and petroleum haulage.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Caymanas Bay",
      "addressLocality": "Spanish Town",
      "addressRegion": "Saint Catherine",
      "addressCountry": "JM"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.9909,
      "longitude": -76.9571
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
      }
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Jamaica"
    },
    "serviceType": [
      "Fleet Refuelling",
      "Generator Refuelling",
      "On-Site Fuel Delivery",
      "Bulk Fuel Supply",
      "Petroleum Haulage"
    ],
    "priceRange": "$$",
    "paymentAccepted": "Cash, Bank Transfer, Credit Card",
    "currenciesAccepted": "JMD, USD",
    "sameAs": [
      "https://www.facebook.com/nevlohlimited",
      "https://www.instagram.com/nevlohlimited"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I get a fuel delivery quote from Nevloh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get a quote by calling +1-876-449-5172, emailing shamar@nevloh.com, messaging us on WhatsApp, or filling out our contact form. We respond within 24 hours with personalized pricing based on your volume, location, and delivery frequency."
        }
      },
      {
        "@type": "Question",
        "name": "Does Nevloh deliver fuel to all parishes in Jamaica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Nevloh Limited provides fuel delivery services to all 14 parishes across Jamaica, including Kingston, St. Andrew, St. Thomas, Portland, St. Mary, St. Ann, Trelawny, St. James, Hanover, Westmoreland, St. Elizabeth, Manchester, Clarendon, and St. Catherine."
        }
      },
      {
        "@type": "Question",
        "name": "What are Nevloh's business hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our regular business hours are Monday to Friday 7:00 AM to 6:00 PM, and Saturday 8:00 AM to 4:00 PM. However, we offer 24/7 emergency fuel delivery services for urgent situations."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can I get fuel delivered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For scheduled deliveries, we typically deliver within 24-48 hours. For emergency services, we offer priority response within 2 hours across Jamaica. Same-day delivery is available in most areas."
        }
      }
    ]
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFuelTypeChange = (fuelType) => {
    setFormData(prev => ({
      ...prev,
      fuelTypes: prev.fuelTypes.includes(fuelType)
        ? prev.fuelTypes.filter(type => type !== fuelType)
        : [...prev.fuelTypes, fuelType]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmissionMessage('');

    try {
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timeout - please try again or contact us directly.')), 30000)
      );

      const fetchPromise = fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, source: 'contact_page' }),
      }).then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || 'Failed to send message');
        }
        return data;
      });

      const result = await Promise.race([fetchPromise, timeoutPromise]);

      if (result && result.success) {
        setSubmitStatus('success');
        setSubmissionMessage(result.message || 'Customer information saved successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          whatsapp: '',
          companyName: '',
          position: '',
          businessType: 'individual',
          fuelTypes: [],
          deliveryFrequency: '',
          averageVolume: '',
          preferredDeliveryTime: '',
          address: '',
          parish: '',
          preferredContact: 'email',
          message: '',
          hearAboutUs: '',
          newsletter: false,
          whatsappUpdates: false,
          smsAlerts: false
        });
      } else {
        setSubmitStatus('error');
        setSubmissionMessage(result?.error || 'An unexpected error occurred.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmissionMessage(error.message || 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const businessTypes = [
    { value: 'individual', label: 'Individual/Personal' },
    { value: 'small_business', label: 'Small Business' },
    { value: 'corporation', label: 'Corporation' },
    { value: 'government', label: 'Government/Public Sector' },
    { value: 'ngo', label: 'NGO/Non-Profit' },
    { value: 'other', label: 'Other' }
  ];

  const fuelTypeOptions = [
    { value: 'ulsd', label: 'Ultra Low Sulphur Diesel (ULSD)' },
    { value: 'ado', label: 'Automotive Diesel Oil (ADO)' }
  ];

  const deliveryFrequencies = [
    { value: 'as_needed', label: 'As Needed' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'bi_weekly', label: 'Bi-Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' }
  ];

  const volumeRanges = [
    { value: 'under_100', label: 'Under 100 gallons' },
    { value: '100_500', label: '100-500 gallons' },
    { value: '500_1000', label: '500-1,000 gallons' },
    { value: '1000_5000', label: '1,000-5,000 gallons' },
    { value: 'over_5000', label: 'Over 5,000 gallons' }
  ];

  const parishes = [
    'Kingston', 'St. Andrew', 'St. Thomas', 'Portland', 'St. Mary',
    'St. Ann', 'Trelawny', 'St. James', 'Hanover', 'Westmoreland',
    'St. Elizabeth', 'Manchester', 'Clarendon', 'St. Catherine'
  ];

  const hearAboutOptions = [
    { value: 'google_search', label: 'Google Search' },
    { value: 'social_media', label: 'Social Media' },
    { value: 'referral', label: 'Word of Mouth/Referral' },
    { value: 'advertisement', label: 'Advertisement' },
    { value: 'existing_customer', label: 'Existing Customer' },
    { value: 'other', label: 'Other' }
  ];

  // Success message component
  if (submitStatus === 'success') {
    return (
      <>
        <Head>
          <title>Thank You - Message Sent | Nevloh Limited</title>
          <meta name="description" content="Thank you for contacting Nevloh Limited. We'll get back to you within 24 hours." />
          <meta name="robots" content="noindex, follow" />
        </Head>

        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pt-20 py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-green-600" aria-hidden="true" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Message Sent Successfully!</h1>
              <p className="text-lg text-gray-600 max-w-lg mx-auto mb-8">
                {submissionMessage}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Another Message
                </button>
                <Link
                  href="/"
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Contact Us - Get Your Fuel Delivery Quote | Nevloh Limited</title>
        <meta name="description" content="Contact Nevloh Limited for professional fuel delivery services across Jamaica. Get your quote today! Call +1-876-449-5172, WhatsApp us, or fill out our contact form. We respond within 24 hours." />
        <meta name="keywords" content="contact nevloh, fuel delivery quote jamaica, fuel service contact, diesel delivery contact, nevloh phone number, fuel delivery jamaica contact" />

        {/* Robots and indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Geographic targeting */}
        <meta name="geo.region" content="JM" />
        <meta name="geo.placename" content="Spanish Town, Jamaica" />
        <meta name="geo.position" content="17.9909;-76.9571" />
        <meta name="ICBM" content="17.9909, -76.9571" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Nevloh Limited - Fuel Delivery Services Jamaica" />
        <meta property="og:description" content="Get in touch for professional fuel delivery across Jamaica. Fast quotes, reliable service. Call +1-876-449-5172 or WhatsApp us." />
        <meta property="og:url" content="https://www.nevloh.com/contact" />
        <meta property="og:image" content="https://www.nevloh.com/images/logo.png" />
        <meta property="og:site_name" content="Nevloh Limited" />
        <meta property="og:locale" content="en_JM" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Nevloh Limited - Fuel Delivery Jamaica" />
        <meta name="twitter:description" content="Get in touch for professional fuel delivery across Jamaica. Fast quotes, reliable service." />
        <meta name="twitter:image" content="https://www.nevloh.com/images/logo.png" />

        <link rel="canonical" href="https://www.nevloh.com/contact" />
      </Head>

      {/* ContactPage Schema */}
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema)
        }}
      />

      {/* LocalBusiness Schema */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />

      {/* FAQ Schema */}
      <Script
        id="contact-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pt-20">
        
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 pt-4">
          <Breadcrumbs items={breadcrumbConfigs.contact} />
        </div>

        <div className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Get Your Fuel Delivery Quote
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Ready to experience Jamaica's most reliable fuel delivery service?
                Contact us today for competitive pricing and exceptional service.
              </p>

              {/* Quick Contact Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+18764495172"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                  aria-label="Call Nevloh Limited at +1-876-449-5172"
                >
                  <Phone size={20} className="mr-2" aria-hidden="true" />
                  Call Now: +1-876-449-5172
                </a>
                <a
                  href="https://wa.me/18764495172?text=Hi%20Nevloh%2C%20I%27d%20like%20a%20fuel%20delivery%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                  aria-label="Message Nevloh Limited on WhatsApp"
                >
                  <MessageSquare size={20} className="mr-2" aria-hidden="true" />
                  WhatsApp Us
                </a>
                <a
                  href="mailto:shamar@nevloh.com"
                  className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                  aria-label="Email Nevloh Limited"
                >
                  <Mail size={20} className="mr-2" aria-hidden="true" />
                  Email Us
                </a>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-8 shadow-xl h-fit">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>

                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone size={24} className="text-blue-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Phone</h3>
                        <a href="tel:+18764495172" className="text-blue-600 hover:underline">
                          +1-876-449-5172
                        </a>
                        <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageSquare size={24} className="text-green-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                        <a 
                          href="https://wa.me/18764495172?text=Hi%20Nevloh%2C%20I%27d%20like%20a%20fuel%20delivery%20quote"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:underline"
                        >
                          +1-876-449-5172
                        </a>
                        <p className="text-sm text-gray-500">Quick responses during business hours</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail size={24} className="text-orange-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Email</h3>
                        <a href="mailto:shamar@nevloh.com" className="text-orange-600 hover:underline">
                          shamar@nevloh.com
                        </a>
                        <p className="text-sm text-gray-500">We respond within 24 hours</p>
                      </div>
                    </div>

                    {/* Office Location */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin size={24} className="text-red-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Office Location</h3>
                        <p className="text-gray-600">Caymanas Bay</p>
                        <p className="text-gray-600">Spanish Town, St. Catherine</p>
                        <p className="text-sm text-gray-500">Jamaica, West Indies</p>
                      </div>
                    </div>

                    {/* Service Area */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Truck size={24} className="text-purple-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Service Area</h3>
                        <p className="text-gray-600">All 14 Parishes of Jamaica</p>
                        <p className="text-sm text-gray-500">Island-wide delivery coverage</p>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock size={24} className="text-indigo-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Business Hours</h3>
                        <p className="text-gray-600">Mon-Fri: 7:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Sat: 8:00 AM - 4:00 PM</p>
                        <p className="text-sm text-gray-500">Emergency service available 24/7</p>
                      </div>
                    </div>
                  </div>

                  {/* Why Choose Us */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-800 mb-4">Why Choose Nevloh?</h3>
                    <div className="space-y-3">
                      {[
                        { icon: Fuel, text: "Ultra Low Sulphur Diesel" },
                        { icon: Truck, text: "Island-wide Delivery" },
                        { icon: Star, text: "5-Star Customer Service" },
                        { icon: CheckCircle, text: "Licensed & Insured" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <item.icon size={16} className="text-blue-600" aria-hidden="true" />
                          <span className="text-sm text-gray-600">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you with a personalized quote within 24 hours.
                  </p>

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6" role="alert">
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <span className="text-red-600 text-sm font-bold" aria-hidden="true">!</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-red-700 font-medium mb-2">Message Failed to Send</p>
                          <p className="text-red-600 text-sm mb-3">
                            {submissionMessage || 'There was an error sending your message. Please try again.'}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <button
                              onClick={() => setSubmitStatus(null)}
                              className="text-red-700 bg-red-100 hover:bg-red-200 px-3 py-1 rounded text-sm transition-colors"
                            >
                              Try Again
                            </button>
                            <a
                              href="tel:+18764495172"
                              className="text-red-700 bg-red-100 hover:bg-red-200 px-3 py-1 rounded text-sm transition-colors inline-flex items-center"
                            >
                              <Phone size={14} className="mr-1" aria-hidden="true" />
                              Call Instead: +1-876-449-5172
                            </a>
                            <a
                              href="https://wa.me/18764495172"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-red-700 bg-red-100 hover:bg-red-200 px-3 py-1 rounded text-sm transition-colors inline-flex items-center"
                            >
                              <MessageSquare size={14} className="mr-1" aria-hidden="true" />
                              WhatsApp Instead
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User size={20} className="absolute left-3 top-3 text-gray-400" aria-hidden="true" />
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            autoComplete="given-name"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="Your first name"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User size={20} className="absolute left-3 top-3 text-gray-400" aria-hidden="true" />
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            autoComplete="family-name"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail size={20} className="absolute left-3 top-3 text-gray-400" aria-hidden="true" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            autoComplete="email"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone size={20} className="absolute left-3 top-3 text-gray-400" aria-hidden="true" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            autoComplete="tel"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="+1-876-XXX-XXXX"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                          WhatsApp Number
                        </label>
                        <div className="relative">
                          <MessageSquare size={20} className="absolute left-3 top-3 text-gray-400" aria-hidden="true" />
                          <input
                            type="tel"
                            id="whatsapp"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleInputChange}
                            autoComplete="tel"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="+1-876-XXX-XXXX"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="parish" className="block text-sm font-medium text-gray-700 mb-2">
                          Parish
                        </label>
                        <div className="relative">
                          <MapPin size={20} className="absolute left-3 top-3 text-gray-400" aria-hidden="true" />
                          <select
                            id="parish"
                            name="parish"
                            value={formData.parish}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
                          >
                            <option value="">Select parish...</option>
                            {parishes.map(parish => (
                              <option key={parish} value={parish}>
                                {parish}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Business Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <div className="relative">
                          <Building2 size={20} className="absolute left-3 top-3 text-gray-400" aria-hidden="true" />
                          <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            autoComplete="organization"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="Your company (optional)"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                          Business Type
                        </label>
                        <div className="relative">
                          <Users size={20} className="absolute left-3 top-3 text-gray-400" aria-hidden="true" />
                          <select
                            id="businessType"
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
                          >
                            {businessTypes.map(type => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Fuel Types */}
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-700 mb-3">
                        Fuel Types Needed (Select all that apply)
                      </legend>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {fuelTypeOptions.map(fuel => (
                          <div key={fuel.value} className="flex items-center">
                            <input
                              type="checkbox"
                              id={fuel.value}
                              checked={formData.fuelTypes.includes(fuel.value)}
                              onChange={() => handleFuelTypeChange(fuel.value)}
                              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor={fuel.value} className="ml-3 text-sm text-gray-600">
                              {fuel.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>

                    {/* Service Details */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="deliveryFrequency" className="block text-sm font-medium text-gray-700 mb-2">
                          Delivery Frequency
                        </label>
                        <select
                          id="deliveryFrequency"
                          name="deliveryFrequency"
                          value={formData.deliveryFrequency}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
                        >
                          <option value="">Select frequency...</option>
                          {deliveryFrequencies.map(freq => (
                            <option key={freq.value} value={freq.value}>
                              {freq.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="averageVolume" className="block text-sm font-medium text-gray-700 mb-2">
                          Average Volume per Delivery
                        </label>
                        <select
                          id="averageVolume"
                          name="averageVolume"
                          value={formData.averageVolume}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
                        >
                          <option value="">Select volume...</option>
                          {volumeRanges.map(volume => (
                            <option key={volume.value} value={volume.value}>
                              {volume.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                        Delivery Address
                      </label>
                      <div className="relative">
                        <MapPin size={20} className="absolute left-3 top-3 text-gray-400" aria-hidden="true" />
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          autoComplete="street-address"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Full delivery address"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Information <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MessageSquare size={20} className="absolute left-3 top-3 text-gray-400" aria-hidden="true" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                          placeholder="Tell us about your fuel delivery needs, specific requirements, or any questions you have..."
                        />
                      </div>
                    </div>

                    {/* How did you hear about us */}
                    <div>
                      <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700 mb-2">
                        How did you hear about us?
                      </label>
                      <select
                        id="hearAboutUs"
                        name="hearAboutUs"
                        value={formData.hearAboutUs}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
                      >
                        <option value="">Select an option...</option>
                        {hearAboutOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Communication Preferences */}
                    <fieldset className="space-y-3">
                      <legend className="text-sm font-medium text-gray-700">Communication Preferences</legend>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="newsletter"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="newsletter" className="ml-3 text-sm text-gray-600">
                          Subscribe to our newsletter for exclusive offers and fuel industry updates
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="whatsappUpdates"
                          name="whatsappUpdates"
                          checked={formData.whatsappUpdates}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="whatsappUpdates" className="ml-3 text-sm text-gray-600">
                          Receive updates via WhatsApp
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="smsAlerts"
                          name="smsAlerts"
                          checked={formData.smsAlerts}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="smsAlerts" className="ml-3 text-sm text-gray-600">
                          Receive SMS alerts for deliveries and updates
                        </label>
                      </div>
                    </fieldset>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:bg-blue-600 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" aria-hidden="true"></div>
                          <span>Sending Message...</span>
                          <span className="ml-2 text-blue-200 text-sm">(This may take a moment)</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" aria-hidden="true" />
                          Send Message
                          <ArrowRight size={20} className="ml-2" aria-hidden="true" />
                        </>
                      )}
                    </button>

                    {/* Connection issues notice */}
                    {isSubmitting && (
                      <div className="text-center mt-3">
                        <p className="text-sm text-gray-500">
                          If this takes too long, please try calling us directly at{' '}
                          <a href="tel:+18764495172" className="text-blue-600 hover:underline">
                            +1-876-449-5172
                          </a>
                          {' '}or{' '}
                          <a 
                            href="https://wa.me/18764495172" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-green-600 hover:underline"
                          >
                            WhatsApp us
                          </a>
                        </p>
                      </div>
                    )}

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our{' '}
                      <Link href="/privacy" className="text-blue-600 hover:underline">
                        privacy policy
                      </Link>
                      {' '}and{' '}
                      <Link href="/terms" className="text-blue-600 hover:underline">
                        terms of service
                      </Link>.
                    </p>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;