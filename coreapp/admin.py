from django.contrib import admin
from .models import Property

# Register your models here.

@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    list_display = ['title', 'property_type', 'listing_type', 'location', 'price', 'bedrooms', 'bathrooms', 'featured', 'is_active', 'created_at']
    list_filter = ['property_type', 'listing_type', 'location', 'featured', 'is_active', 'created_at']
    search_fields = ['title', 'address', 'description']
    list_editable = ['featured', 'is_active']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'description', 'address', 'price')
        }),
        ('Property Details', {
            'fields': ('property_type', 'listing_type', 'location')
        }),
        ('Specifications', {
            'fields': ('bedrooms', 'bathrooms', 'square_footage')
        }),
        ('Media', {
            'fields': ('image',)
        }),
        ('Settings', {
            'fields': ('featured', 'is_active')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
