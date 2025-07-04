from django.db import models
from django.urls import reverse

# Create your models here.

class Property(models.Model):
    PROPERTY_TYPES = [
        ('house', 'House'),
        ('apartment', 'Apartment'),
        ('condo', 'Condo'),
        ('townhouse', 'Townhouse'),
        ('studio', 'Studio'),
    ]
    
    LISTING_TYPES = [
        ('rent', 'For Rent'),
        ('sale', 'For Sale'),
        ('sold', 'Sold'),
    ]
    
    LOCATIONS = [
        ('downtown', 'Downtown'),
        ('suburbs', 'Suburbs'),
        ('countryside', 'Countryside'),
        ('beachfront', 'Beachfront'),
    ]
    
    # Basic Information
    title = models.CharField(max_length=200)
    description = models.TextField()
    address = models.CharField(max_length=300)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    
    # Property Details
    property_type = models.CharField(max_length=20, choices=PROPERTY_TYPES)
    listing_type = models.CharField(max_length=10, choices=LISTING_TYPES)
    location = models.CharField(max_length=20, choices=LOCATIONS)
    
    # Specifications
    bedrooms = models.PositiveIntegerField()
    bathrooms = models.DecimalField(max_digits=3, decimal_places=1)  # Allows for half baths
    square_footage = models.PositiveIntegerField()
    
    # Media
    image = models.ImageField(upload_to='properties/', blank=True, null=True)
    
    # Metadata
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        verbose_name_plural = "Properties"
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse('property_detail', kwargs={'pk': self.pk})
    
    def get_price_display(self):
        if self.listing_type == 'rent':
            return f"${self.price:,.0f}/mo"
        else:
            return f"${self.price:,.0f}"
