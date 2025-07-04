'use client';

import React, { useState, useMemo } from 'react';
import PropertyCard from '@/components/property/PropertyCard';
import PropertyFilters from '@/components/property/PropertyFilters';
import { mockProperties } from '@/data/properties';
import { PropertyFilters as FilterType } from '@/types/property';

const ForRentPage = () => {
  const [filters, setFilters] = useState<FilterType>({});

  const filteredProperties = useMemo(() => {
    return mockProperties.filter(property => {
      if (property.listing_type !== 'rent') return false;
      
      if (filters.property_type && property.property_type !== filters.property_type) return false;
      if (filters.location && property.location !== filters.location) return false;
      if (filters.bedrooms && property.bedrooms < parseInt(filters.bedrooms)) return false;
      if (filters.bathrooms && property.bathrooms < parseFloat(filters.bathrooms)) return false;
      
      if (filters.price_min) {
        const [min, max] = filters.price_min.split('-').map(p => parseInt(p.replace(/\D/g, '')));
        if (max && (property.price < min || property.price > max)) return false;
        if (!max && property.price < min) return false;
      }
      
      return true;
    }).sort((a, b) => {
      switch (filters.sort_by) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'beds':
          return b.bedrooms - a.bedrooms;
        case 'baths':
          return b.bathrooms - a.bathrooms;
        case 'sqft':
          return b.square_footage - a.square_footage;
        default:
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      }
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Properties For Rent</h1>
          <p className="text-xl md:text-2xl text-green-100">
            Find your perfect rental property
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PropertyFilters
            filters={filters}
            onFiltersChange={setFilters}
            listingType="rent"
          />
        </div>
      </section>

      {/* Properties Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Available Rentals</h2>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">No properties found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ForRentPage;