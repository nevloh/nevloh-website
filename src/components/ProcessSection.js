import React from 'react';
import { Phone, Truck, CreditCard, Banknote, Building2, Wallet, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      title: "Make Contact & Order Fuel",
      description: "Call or message us with your fuel requirements and delivery location",
      icon: Phone,
      color: "text-blue-600"
    },
    {
      id: 2,
      title: "Fuel Delivered & Receipts Provided",
      description: "Our professional team delivers quality fuel directly to your location with proper documentation",
      icon: Truck,
      color: "text-green-600"
    },
    {
      id: 3,
      title: "Make Payment",
      description: "Complete your payment using your preferred method from our flexible options",
      icon: CreditCard,
      color: "text-purple-600"
    }
  ];

  const paymentMethods = [
    {
      name: "Card Payment",
      icon: CreditCard,
      description: "Credit & Debit Cards"
    },
    {
      name: "Cash Payment",
      icon: Banknote,
      description: "Cash on Delivery"
    },
    {
      name: "Bank Transfer",
      icon: Building2,
      description: "Direct Bank Transfer"
    },
    {
      name: "Advance Card Payment",
      icon: Wallet,
      description: "Pre-payment Options"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How Our Process Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, reliable, and efficient fuel delivery in just three easy steps
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.id}
                className="relative group"
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-blue-200 z-0 transform translate-x-4">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                )}

                {/* Step Card */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 ${step.color} bg-gray-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
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
              Accepted Payment Methods
            </h3>
            <p className="text-gray-600">
              Choose from our flexible payment options for your convenience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-100 transition-all duration-300 group-hover:scale-105">
                    <IconComponent size={28} className="text-blue-600" />
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

          {/* Trust Badge */}
          <div className="flex items-center justify-center mt-8 pt-6 border-t border-gray-100">
            <CheckCircle size={20} className="text-green-500 mr-2" />
            <span className="text-sm text-gray-600 font-medium">
              Secure and reliable payment processing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;