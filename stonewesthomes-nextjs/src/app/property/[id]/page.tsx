import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockProperties } from '@/data/properties';
import { formatPrice, formatDate } from '@/lib/utils';
import { Bed, Bath, Square, MapPin, Calendar, Home as HomeIcon } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface PropertyDetailPageProps {
  params: {
    id: string;
  };
}

const PropertyDetailPage = ({ params }: PropertyDetailPageProps) => {
  const property = mockProperties.find(p => p.id === parseInt(params.id));

  if (!property) {
    notFound();
  }

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

  const getLocationLabel = (location: string) => {
    const locationMap: { [key: string]: string } = {
      downtown: 'Downtown',
      suburbs: 'Suburbs',
      countryside: 'Countryside',
      beachfront: 'Beachfront'
    };
    return locationMap[location] || location;
  };

  const getPropertyTypeLabel = (type: string) => {
    const typeMap: { [key: string]: string } = {
      house: 'House',
      apartment: 'Apartment',
      condo: 'Condo',
      townhouse: 'Townhouse',
      studio: 'Studio'
    };
    return typeMap[type] || type;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Property Hero */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Property Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src={property.image || '/api/placeholder/800/600'}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 left-6">
                  <span className={`px-4 py-2 rounded-full text-white font-semibold ${getBadgeColor(property.listing_type)}`}>
                    {getListingTypeLabel(property.listing_type)}
                  </span>
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {property.title}
                </h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-lg">{property.address}</span>
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-blue-600">
                  {formatPrice(property.price, property.listing_type)}
                </p>
              </div>

              {/* Property Features Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center p-4 bg-gray-100 rounded-xl">
                  <Bed className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Bedrooms</p>
                    <p className="font-semibold">
                      {property.bedrooms === 0 ? 'Studio' : property.bedrooms}
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-100 rounded-xl">
                  <Bath className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Bathrooms</p>
                    <p className="font-semibold">{property.bathrooms}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-100 rounded-xl">
                  <Square className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Square Feet</p>
                    <p className="font-semibold">{property.square_footage.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-100 rounded-xl">
                  <HomeIcon className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Type</p>
                    <p className="font-semibold">{getPropertyTypeLabel(property.property_type)}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-100 rounded-xl">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-semibold">{getLocationLabel(property.location)}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-100 rounded-xl">
                  <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">
                      {property.listing_type === 'sold' ? 'Date Sold' : 'Listed'}
                    </p>
                    <p className="font-semibold">
                      {formatDate(property.listing_type === 'sold' ? property.updated_at : property.created_at)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {property.listing_type !== 'sold' ? (
                  <>
                    <Button size="lg" className="flex-1">
                      Contact Agent
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1">
                      Schedule Viewing
                    </Button>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-xl font-semibold text-red-600">This property has been sold</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Description</h2>
              <div className="prose prose-lg text-gray-600">
                <p>{property.description}</p>
              </div>
            </div>

            {/* Property Info & Contact */}
            <div className="space-y-8">
              {/* Property Details Card */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Property Details</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Property Type:</span>
                    <span className="font-semibold">{getPropertyTypeLabel(property.property_type)}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Listing Type:</span>
                    <span className="font-semibold">{getListingTypeLabel(property.listing_type)}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-semibold">{getLocationLabel(property.location)}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Square Footage:</span>
                    <span className="font-semibold">{property.square_footage.toLocaleString()} sqft</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Bedrooms:</span>
                    <span className="font-semibold">
                      {property.bedrooms === 0 ? 'Studio' : property.bedrooms}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Bathrooms:</span>
                    <span className="font-semibold">{property.bathrooms}</span>
                  </li>
                </ul>
              </div>

              {/* Contact Card */}
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <p className="text-gray-600 mb-4">
                  Interested in this property? Get in touch with our experienced team.
                </p>
                <div className="space-y-2 mb-6">
                  <p><strong>Email:</strong> info@stonewesthomes.com</p>
                  <p><strong>Phone:</strong> (555) 123-4567</p>
                  <p><strong>Office Hours:</strong> Mon-Fri 9AM-6PM</p>
                </div>
                <Link href="/contact">
                  <Button className="w-full">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Similar Properties</h2>
            <p className="text-gray-600">Explore other properties that might interest you</p>
          </div>
          
          <div className="text-center">
            <Link href={`/${property.listing_type === 'rent' ? 'for-rent' : property.listing_type === 'sale' ? 'for-sale' : 'sold'}`}>
              <Button variant="outline" size="lg">
                View All {getListingTypeLabel(property.listing_type)} Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetailPage;