import React, { useState } from 'react';
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
  Shield,
  Zap,
  Heart
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    whatsapp: '',

    // Business Information
    companyName: '',
    position: '',
    businessType: '',

    // Service Preferences
    fuelTypes: [],
    deliveryFrequency: '',
    averageVolume: '',
    preferredDeliveryTime: '',

    // Location & Contact Preferences
    address: '',
    parish: '',
    preferredContact: '',

    // Newsletter & Marketing
    newsletter: true,
    whatsappUpdates: true,
    smsAlerts: false,

    // Additional Information
    message: '',
    hearAboutUs: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (876) 123-4567", "+1 (876) 765-4321"],
      action: "tel:+18761234567"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: ["+1 (876) 123-4567"],
      action: "https://wa.me/18761234567"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@nevloh.com", "orders@nevloh.com"],
      action: "mailto:info@nevloh.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Spanish Town", "Saint Catherine Parish, JM"],
      action: "#"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Emergency Only" }
  ];

  const fuelTypes = [
    "Gasoline/Petrol", "Diesel", "Kerosene", "Cooking Gas (LPG)",
    "Industrial Fuel", "Aviation Fuel"
  ];

  const parishes = [
    "Kingston", "Saint Andrew", "Saint Catherine", "Clarendon",
    "Manchester", "Saint Elizabeth", "Westmoreland", "Hanover",
    "Saint James", "Trelawny", "Saint Ann", "Saint Mary",
    "Portland", "Saint Thomas"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Welcome to the Nevloh Limited family! Your information has been received and you've been subscribed to our newsletter.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-blue-800 mb-2">What's Next?</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• You'll receive our welcome newsletter within 24 hours</li>
                <li>• Our team will contact you within 1 business day</li>
                <li>• Get exclusive offers and fuel delivery updates</li>
              </ul>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Another Form
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join thousands of satisfied customers who trust Nevloh Limited for reliable fuel delivery.
            Subscribe to our newsletter for exclusive offers and updates!
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Shield size={16} className="text-blue-600 mr-2" />
              Secure & Confidential
            </div>
            <div className="flex items-center">
              <Zap size={16} className="text-green-600 mr-2" />
              Quick Response
            </div>
            <div className="flex items-center">
              <Heart size={16} className="text-red-600 mr-2" />
              Customer Focused
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Clock size={24} className="text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Business Hours</h3>
              </div>

              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-700">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-700 font-medium">
                  🚨 Emergency fuel delivery available 24/7
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-8">
                <Send size={28} className="text-blue-600 mr-3" />
                <h3 className="text-3xl font-bold text-gray-800">Join Our Newsletter</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <User size={20} className="mr-2" />
                    Personal Information
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="WhatsApp Number"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Business Information */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Building2 size={20} className="mr-2" />
                    Business Information
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company/Business Name"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      name="position"
                      placeholder="Your Position/Title"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Business Type</option>
                      <option value="individual">Individual/Personal</option>
                      <option value="small-business">Small Business</option>
                      <option value="corporation">Corporation</option>
                      <option value="government">Government</option>
                      <option value="ngo">NGO/Non-Profit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Service Preferences */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Truck size={20} className="mr-2" />
                    Service Preferences
                  </h4>

                  {/* Fuel Types */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fuel Types Needed (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {fuelTypes.map((fuelType) => (
                        <label key={fuelType} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.fuelTypes.includes(fuelType)}
                            onChange={() => handleFuelTypeChange(fuelType)}
                            className="mr-2 text-blue-600"
                          />
                          <span className="text-sm text-gray-700">{fuelType}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <select
                      name="deliveryFrequency"
                      value={formData.deliveryFrequency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Delivery Frequency</option>
                      <option value="one-time">One-time</option>
                      <option value="weekly">Weekly</option>
                      <option value="bi-weekly">Bi-weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="as-needed">As Needed</option>
                    </select>
                    <select
                      name="averageVolume"
                      value={formData.averageVolume}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Average Volume per Delivery</option>
                      <option value="under-50">Under 50 gallons</option>
                      <option value="50-100">50-100 gallons</option>
                      <option value="100-500">100-500 gallons</option>
                      <option value="500-1000">500-1000 gallons</option>
                      <option value="over-1000">Over 1000 gallons</option>
                    </select>
                    <select
                      name="preferredDeliveryTime"
                      value={formData.preferredDeliveryTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Preferred Delivery Time</option>
                      <option value="morning">Morning (7AM-12PM)</option>
                      <option value="afternoon">Afternoon (12PM-5PM)</option>
                      <option value="evening">Evening (5PM-7PM)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Location Information */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <MapPin size={20} className="mr-2" />
                    Location & Contact Preferences
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <textarea
                      name="address"
                      placeholder="Delivery Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="space-y-4">
                      <select
                        name="parish"
                        value={formData.parish}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Parish</option>
                        {parishes.map((parish) => (
                          <option key={parish} value={parish}>{parish}</option>
                        ))}
                      </select>
                      <select
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Preferred Contact Method</option>
                        <option value="phone">Phone Call</option>
                        <option value="whatsapp">WhatsApp</option>
                        <option value="email">Email</option>
                        <option value="sms">SMS</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Newsletter & Marketing Preferences */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Star size={20} className="mr-2" />
                    Newsletter & Updates
                  </h4>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                        className="mr-3 text-blue-600"
                      />
                      <span className="text-gray-700">
                        <strong>Subscribe to our Newsletter</strong> - Get exclusive offers, fuel price updates, and industry insights
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="whatsappUpdates"
                        checked={formData.whatsappUpdates}
                        onChange={handleInputChange}
                        className="mr-3 text-blue-600"
                      />
                      <span className="text-gray-700">
                        <strong>WhatsApp Updates</strong> - Receive delivery confirmations and special promotions
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="smsAlerts"
                        checked={formData.smsAlerts}
                        onChange={handleInputChange}
                        className="mr-3 text-blue-600"
                      />
                      <span className="text-gray-700">
                        <strong>SMS Alerts</strong> - Emergency fuel availability and urgent updates
                      </span>
                    </label>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <textarea
                    name="message"
                    placeholder="Additional Message or Special Requirements"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <select
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">How did you hear about us?</option>
                    <option value="google">Google Search</option>
                    <option value="social-media">Social Media</option>
                    <option value="referral">Friend/Business Referral</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="website">Direct Website Visit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105'
                    } text-white shadow-lg`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Subscribing...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send size={20} className="mr-3" />
                        Subscribe & Get Newsletter
                      </div>
                    )}
                  </button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    By subscribing, you agree to receive marketing communications from Nevloh Limited.
                    You can unsubscribe at any time.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;