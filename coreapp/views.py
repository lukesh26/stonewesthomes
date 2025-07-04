from django.shortcuts import render, get_object_or_404
from django.core.paginator import Paginator
from .models import Property

# Create your views here.
def index(request):
    # Get featured properties for homepage
    featured_properties = Property.objects.filter(featured=True, is_active=True)[:3]
    context = {
        'featured_properties': featured_properties
    }
    return render(request, 'coreapp/index.html', context)

def about(request):
    return render(request, 'coreapp/about.html')

def forRent(request):
    # Get all rental properties
    properties = Property.objects.filter(listing_type='rent', is_active=True)
    
    # Apply filters
    property_type = request.GET.get('property-type')
    location = request.GET.get('location')
    bedrooms = request.GET.get('bedrooms')
    bathrooms = request.GET.get('bathrooms')
    price_min = request.GET.get('price-min')
    price_max = request.GET.get('price-max')
    sort_by = request.GET.get('sort-by', 'newest')
    
    if property_type:
        properties = properties.filter(property_type=property_type)
    if location:
        properties = properties.filter(location=location)
    if bedrooms:
        properties = properties.filter(bedrooms__gte=int(bedrooms))
    if bathrooms:
        properties = properties.filter(bathrooms__gte=float(bathrooms))
    if price_min:
        properties = properties.filter(price__gte=int(price_min))
    if price_max:
        properties = properties.filter(price__lte=int(price_max))
    
    # Sorting
    if sort_by == 'price-low':
        properties = properties.order_by('price')
    elif sort_by == 'price-high':
        properties = properties.order_by('-price')
    elif sort_by == 'beds':
        properties = properties.order_by('-bedrooms')
    elif sort_by == 'baths':
        properties = properties.order_by('-bathrooms')
    elif sort_by == 'sqft':
        properties = properties.order_by('-square_footage')
    else:  # newest
        properties = properties.order_by('-created_at')
    
    # Pagination
    paginator = Paginator(properties, 9)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    context = {
        'properties': page_obj,
        'total_count': properties.count(),
        'filters': {
            'property_type': property_type,
            'location': location,
            'bedrooms': bedrooms,
            'bathrooms': bathrooms,
            'price_min': price_min,
            'price_max': price_max,
            'sort_by': sort_by,
        }
    }
    return render(request, 'coreapp/rent.html', context)

def forSale(request):
    # Get all sale properties
    properties = Property.objects.filter(listing_type='sale', is_active=True)
    
    # Apply filters (similar to rent view)
    property_type = request.GET.get('property-type')
    location = request.GET.get('location')
    bedrooms = request.GET.get('bedrooms')
    bathrooms = request.GET.get('bathrooms')
    price_min = request.GET.get('price-min')
    price_max = request.GET.get('price-max')
    sort_by = request.GET.get('sort-by', 'newest')
    
    if property_type:
        properties = properties.filter(property_type=property_type)
    if location:
        properties = properties.filter(location=location)
    if bedrooms:
        properties = properties.filter(bedrooms__gte=int(bedrooms))
    if bathrooms:
        properties = properties.filter(bathrooms__gte=float(bathrooms))
    if price_min:
        properties = properties.filter(price__gte=int(price_min))
    if price_max:
        properties = properties.filter(price__lte=int(price_max))
    
    # Sorting
    if sort_by == 'price-low':
        properties = properties.order_by('price')
    elif sort_by == 'price-high':
        properties = properties.order_by('-price')
    elif sort_by == 'beds':
        properties = properties.order_by('-bedrooms')
    elif sort_by == 'baths':
        properties = properties.order_by('-bathrooms')
    elif sort_by == 'sqft':
        properties = properties.order_by('-square_footage')
    else:  # newest
        properties = properties.order_by('-created_at')
    
    # Pagination
    paginator = Paginator(properties, 9)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    context = {
        'properties': page_obj,
        'total_count': properties.count(),
        'filters': {
            'property_type': property_type,
            'location': location,
            'bedrooms': bedrooms,
            'bathrooms': bathrooms,
            'price_min': price_min,
            'price_max': price_max,
            'sort_by': sort_by,
        }
    }
    return render(request, 'coreapp/sale.html', context)

def sold(request):
    # Get all sold properties
    properties = Property.objects.filter(listing_type='sold', is_active=True)
    
    # Pagination
    paginator = Paginator(properties, 9)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    context = {
        'properties': page_obj,
        'total_count': properties.count(),
    }
    return render(request, 'coreapp/sold.html', context)

def contact(request):
    return render(request, 'coreapp/contact.html')

def property_detail(request, pk):
    property = get_object_or_404(Property, pk=pk, is_active=True)
    context = {
        'property': property
    }
    return render(request, 'coreapp/property_detail.html', context)
