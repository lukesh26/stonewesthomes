'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PROPERTY_TYPES, LOCATIONS } from '@/types/property';

const HeroSection = () => {
  const [searchForm, setSearchForm] = useState({
    property_type: '',
    location: '',
    price_range: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setSearchForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search form:', searchForm);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.8) 100%), url("https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920")'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Find Your
          <span className="block bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            Dream Home
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
          Discover exceptional properties with Stonewesthomes - where luxury meets comfort
        </p>

        {/* Search Form */}
        <div className="bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl mb-12 max-w-4xl mx-auto">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Property Type
              </label>
              <select
                value={searchForm.property_type}
                onChange={(e) => handleInputChange('property_type', e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-700"
              >
                <option value="">All Types</option>
                {PROPERTY_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Location
              </label>
              <select
                value={searchForm.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-700"
              >
                <option value="">All Locations</option>
                {LOCATIONS.map((location) => (
                  <option key={location.value} value={location.value}>
                    {location.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Price Range
              </label>
              <select
                value={searchForm.price_range}
                onChange={(e) => handleInputChange('price_range', e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-700"
              >
                <option value="">Any Price</option>
                <option value="100-300">$100k - $300k</option>
                <option value="300-500">$300k - $500k</option>
                <option value="500-800">$500k - $800k</option>
                <option value="800+">$800k+</option>
              </select>
            </div>

            <Button type="submit" size="lg" className="w-full">
              <Search className="w-5 h-5 mr-2" />
              Search Properties
            </Button>
          </form>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" className="px-10 py-4">
            Browse Properties
          </Button>
          <Button variant="outline" size="lg" className="px-10 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-gray-900">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;