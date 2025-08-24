// components/ProcessSection.js
import React from 'react';
import { Phone, Truck, CreditCard, Banknote, Building2, Wallet, CheckCircle, ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      title: "Contact & Order",
      description: "Call or message us with your fuel requirements and delivery location. Get instant quote and schedule delivery.",
      icon: Phone,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100"
    },
    {
      id: 2,
      title: "We Deliver",
      description: "Our professional team delivers quality fuel directly to your location with proper safety protocols and documentation.",
      icon: Truck,
      color: "text-green-600",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100"
    },
    {
      id: 3,
      title: "Make Payment",
      description: "Choose your preferred payment method. All transactions are secure with instant confirmation and receipts.",
      icon: CreditCard,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100"
    }
  ];

  const paymentMethods = [
    {
      name: "Card Payment",
      icon: CreditCard,
      description: "Credit & Debit Cards",
      color: "blue"
    },
    {
      name: "Cash Payment",
      icon: Banknote,
      description: "Pay on Delivery",
      color: "green"
    },
    {
      name: "Bank Transfer",
      icon: Building2,
      description: "Direct Transfer",
      color: "purple"
    },
    {
      name: "Advance Payment",
      icon: Wallet,
      description: "Pre-payment Options",
      color: "orange"
    }
  ];

  // Analytics tracking
  const handleStepClick = (stepTitle) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Process Steps',
        event_label: stepTitle,
        value: 1
      });
    }
  };

  return (
    <>
      {/* Structured Data for How-To Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Order Fuel Delivery from Nevloh Limited",
            "description": "Simple 3-step process for ordering fuel delivery services in Jamaica",
            "totalTime": "PT30M",
            "step": processSteps.map((step, index) => ({
              "@type": "HowToStep",
              "position": index + 1,
              "name": step.title,
              "text": step.description
            }))
          })
        }}
      />

      <section
        className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100"
        aria-labelledby="process-heading"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              id="process-heading"
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, reliable fuel delivery in three easy steps
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  className="relative group"
                  onClick={() => handleStepClick(step.title)}
                >
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-blue-200 z-0 transform translate-x-4">
                      <ArrowRight
                        size={16}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-400"
                      />
                    </div>
                  )}

                  {/* Step Card */}
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative z-10">
                    {/* Step Number */}
                    <div className="absolute -top-3 left-6 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {step.id}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-4 ${step.color} ${step.bgColor} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      <IconComponent size={28} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Payment Methods Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Payment Options
              </h3>
              <p className="text-gray-600">
                Flexible and secure payment methods for your convenience
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              {paymentMethods.map((method, index) => {
                const IconComponent = method.icon;
                const colorMap = {
                  blue: 'text-blue-600 bg-blue-50 hover:bg-blue-100',
                  green: 'text-green-600 bg-green-50 hover:bg-green-100',
                  purple: 'text-purple-600 bg-purple-50 hover:bg-purple-100',
                  orange: 'text-orange-600 bg-orange-50 hover:bg-orange-100'
                };

                return (
                  <div
                    key={index}
                    className="text-center group cursor-pointer p-4 rounded-lg hover:transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className={`w-14 h-14 mx-auto mb-3 rounded-xl flex items-center justify-center transition-all duration-300 ${colorMap[method.color]}`}>
                      <IconComponent size={24} />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">
                      {method.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {method.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-6 pt-6 border-t border-gray-100">
              <div className="flex items-center text-sm text-gray-500">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                <span>Secure Processing</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                <span>Instant Receipts</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessSection;