'use client';

import React, { useState, useMemo } from 'react';
import PropertyCard from '@/components/property/PropertyCard';
import PropertyFilters from '@/components/property/PropertyFilters';
import { mockProperties } from '@/data/properties';
import { PropertyFilters as FilterType } from '@/types/property';
import { TrendingUp, Award, Clock } from 'lucide-react';

const SoldPage = () => {
  const [filters, setFilters] = useState<FilterType>({});

  const filteredProperties = useMemo(() => {
    return mockProperties.filter(property => {
      if (property.listing_type !== 'sold') return false;
      
      if (filters.property_type && property.property_type !== filters.property_type) return false;
      if (filters.location && property.location !== filters.location) return false;
      
      return true;
    }).sort((a, b) => {
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });
  }, [filters]);

  const stats = [
    { icon: TrendingUp, number: '98%', label: 'List-to-Sale Price Ratio' },
    { icon: Clock, number: '21', label: 'Average Days on Market' },
    { icon: Award, number: '150+', label: 'Properties Sold in 2024' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Recently Sold Properties</h1>
          <p className="text-xl md:text-2xl text-red-100">
            Explore our successfully closed transactions
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Recent Success Stories</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            At Stonewesthomes, we take pride in our track record of successful property sales. Browse through our recently sold properties to get an idea of our market presence and the types of properties we handle. Each sale represents a satisfied client and our commitment to achieving the best possible outcomes.
          </p>
          <p className="text-lg text-gray-600">
            Thinking about selling your property? <a href="/contact" className="text-blue-600 hover:underline font-semibold">Contact us</a> for a free property valuation and market analysis.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PropertyFilters
            filters={filters}
            onFiltersChange={setFilters}
            listingType="sold"
          />
        </div>
      </section>

      {/* Properties Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Sold Properties</h2>
            <p className="text-gray-600">Showing {filteredProperties.length} properties</p>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">No sold properties found</h3>
              <p className="text-gray-600">No properties have been marked as sold yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Market Performance</h2>
            <div className="w-24 h-1 bg-white/30 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                  <IconComponent className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoldPage;