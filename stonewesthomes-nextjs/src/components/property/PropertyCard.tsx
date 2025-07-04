import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/types/property';
import { formatPrice } from '@/lib/utils';
import { Bed, Bath, Square, MapPin } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const getBadgeColor = (listingType: string) => {
    switch (listingType) {
      case 'rent':
        return 'bg-green-500';
      case 'sale':
        return 'bg-blue-500';
      case 'sold':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getListingTypeLabel = (listingType: string) => {
    switch (listingType) {
      case 'rent':
        return 'For Rent';
      case 'sale':
        return 'For Sale';
      case 'sold':
        return 'Sold';
      default:
        return listingType;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.image || '/api/placeholder/400/300'}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${getBadgeColor(property.listing_type)}`}>
            {getListingTypeLabel(property.listing_type)}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full font-bold">
          {formatPrice(property.price, property.listing_type)}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {property.title}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.address}</span>
        </div>

        <div className="flex items-center justify-between mb-4 text-gray-600">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span className="text-sm">
                {property.bedrooms === 0 ? 'Studio' : `${property.bedrooms} Bed${property.bedrooms > 1 ? 's' : ''}`}
              </span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span className="text-sm">{property.bathrooms} Bath{property.bathrooms !== 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1" />
              <span className="text-sm">{property.square_footage.toLocaleString()} sqft</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        <Link
          href={`/property/${property.id}`}
          className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;