from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about', views.about, name='about'),
    path('for-sale', views.forSale, name='for-sale'),
    path('for-rent', views.forRent, name='for-rent'),
    path('sold', views.sold, name='sold'),
    path('contact', views.contact, name='contact'),
    path('property/<int:pk>/', views.property_detail, name='property_detail'),
]
