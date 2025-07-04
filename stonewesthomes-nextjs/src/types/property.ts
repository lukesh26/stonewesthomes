export interface Property {
  id: number;
  title: string;
  description: string;
  address: string;
  price: number;
  property_type: 'house' | 'apartment' | 'condo' | 'townhouse' | 'studio';
  listing_type: 'rent' | 'sale' | 'sold';
  location: 'downtown' | 'suburbs' | 'countryside' | 'beachfront';
  bedrooms: number;
  bathrooms: number;
  square_footage: number;
  image?: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
  is_active: boolean;
}

export interface PropertyFilters {
  property_type?: string;
  location?: string;
  bedrooms?: string;
  bathrooms?: string;
  price_min?: string;
  price_max?: string;
  sort_by?: string;
}

export const PROPERTY_TYPES = [
  { value: 'house', label: 'House' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'condo', label: 'Condo' },
  { value: 'townhouse', label: 'Townhouse' },
  { value: 'studio', label: 'Studio' },
];

export const LISTING_TYPES = [
  { value: 'rent', label: 'For Rent' },
  { value: 'sale', label: 'For Sale' },
  { value: 'sold', label: 'Sold' },
];

export const LOCATIONS = [
  { value: 'downtown', label: 'Downtown' },
  { value: 'suburbs', label: 'Suburbs' },
  { value: 'countryside', label: 'Countryside' },
  { value: 'beachfront', label: 'Beachfront' },
];