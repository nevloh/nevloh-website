import React from 'react';
import { Truck, Users, Fuel } from 'lucide-react'; // Import icons

export default function ServicesSection() {
  const services = [
    {
      title: 'Mobile Fuel Delivery',
      description: 'On-demand refuelling directly at your location — for equipment, vehicles, and generators. Minimize downtime and maximize productivity.',
      icon: <Truck size={48} className="text-blue-600 mb-4" />,
    },
    {
      title: 'Fleet Refueling Programs',
      description: 'Scheduled and efficient fueling services for your commercial fleets, ensuring your vehicles are always ready to go.',
      icon: <Users size={48} className="text-blue-600 mb-4" />,
    },
    {
      title: 'Bulk Fuel Supply',
      description: 'Reliable bulk delivery of various fuel types to your storage tanks at construction sites, farms, industrial facilities, and more.',
      icon: <Fuel size={48} className="text-blue-600 mb-4" />,
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-6 bg-white shadow-inner">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Our Comprehensive Services</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide a range of tailored fuel delivery solutions to meet the diverse needs of your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-50 shadow-lg rounded-xl p-8 transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center border border-blue-200"
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-3 text-blue-800">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
