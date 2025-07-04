'use client';

import React from 'react';
import { PropertyFilters as FilterType, PROPERTY_TYPES, LOCATIONS } from '@/types/property';

interface PropertyFiltersProps {
  filters: FilterType;
  onFiltersChange: (filters: FilterType) => void;
  listingType?: 'rent' | 'sale' | 'sold';
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({
  filters,
  onFiltersChange,
  listingType
}) => {
  const handleFilterChange = (key: keyof FilterType, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: value || undefined
    });
  };

  const getPriceOptions = () => {
    if (listingType === 'rent') {
      return [
        { value: '', label: 'Any Price' },
        { value: '500-1000', label: '$500 - $1,000' },
        { value: '1000-1500', label: '$1,000 - $1,500' },
        { value: '1500-2000', label: '$1,500 - $2,000' },
        { value: '2000-2500', label: '$2,000 - $2,500' },
        { value: '2500+', label: '$2,500+' },
      ];
    }
    return [
      { value: '', label: 'Any Price' },
      { value: '100000-300000', label: '$100K - $300K' },
      { value: '300000-500000', label: '$300K - $500K' },
      { value: '500000-750000', label: '$500K - $750K' },
      { value: '750000-1000000', label: '$750K - $1M' },
      { value: '1000000+', label: '$1M+' },
    ];
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {/* Property Type */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Property Type
          </label>
          <select
            value={filters.property_type || ''}
            onChange={(e) => handleFilterChange('property_type', e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
          >
            <option value="">All Types</option>
            {PROPERTY_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Location
          </label>
          <select
            value={filters.location || ''}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
          >
            <option value="">All Locations</option>
            {LOCATIONS.map((location) => (
              <option key={location.value} value={location.value}>
                {location.label}
              </option>
            ))}
          </select>
        </div>

        {/* Bedrooms */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Bedrooms
          </label>
          <select
            value={filters.bedrooms || ''}
            onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>

        {/* Bathrooms */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Bathrooms
          </label>
          <select
            value={filters.bathrooms || ''}
            onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Price Range
          </label>
          <select
            value={filters.price_min || ''}
            onChange={(e) => handleFilterChange('price_min', e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
          >
            {getPriceOptions().map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Sort By */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Sort By
          </label>
          <select
            value={filters.sort_by || 'newest'}
            onChange={(e) => handleFilterChange('sort_by', e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price (Low to High)</option>
            <option value="price-high">Price (High to Low)</option>
            <option value="beds">Most Bedrooms</option>
            <option value="baths">Most Bathrooms</option>
            <option value="sqft">Largest Size</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;