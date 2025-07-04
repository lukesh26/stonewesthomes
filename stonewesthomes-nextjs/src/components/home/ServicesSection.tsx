import React from 'react';
import { Home, Key, BarChart3, FileText } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: 'Property Sales',
      description: 'Find your dream home with our extensive listings of premium properties for sale. Expert guidance throughout your buying journey.'
    },
    {
      icon: Key,
      title: 'Luxury Rentals',
      description: 'Discover exceptional rental properties that suit your lifestyle and budget. From downtown apartments to suburban homes.'
    },
    {
      icon: BarChart3,
      title: 'Property Management',
      description: 'Professional management services for your investment properties. Maximize returns with our comprehensive solutions.'
    },
    {
      icon: FileText,
      title: 'Real Estate Consultation',
      description: 'Expert advice on real estate investments, market analysis, and property decisions from our experienced team.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Premium Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-gray-100 hover:border-blue-200"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;