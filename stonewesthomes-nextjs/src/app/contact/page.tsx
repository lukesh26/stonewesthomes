'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const faqs = [
    {
      question: 'How do I schedule a property viewing?',
      answer: 'You can schedule a property viewing by contacting us through our contact form, calling our office, or sending us an email. Our team will get back to you promptly to arrange a convenient time for your visit.'
    },
    {
      question: 'What documents do I need to rent a property?',
      answer: 'Typically, you\'ll need proof of identity (such as a driver\'s license or passport), proof of income (pay stubs or bank statements), employment verification, and references from previous landlords. Our rental team can provide you with a complete list based on your specific situation.'
    },
    {
      question: 'How long does the home buying process take?',
      answer: 'The home buying process varies depending on several factors, including financing, property condition, and negotiation time. On average, it can take anywhere from 30 to 90 days from offer acceptance to closing. Our experienced agents will guide you through each step and keep you informed throughout the process.'
    },
    {
      question: 'What services do you offer for property sellers?',
      answer: 'We offer comprehensive services for property sellers, including market analysis, professional photography, marketing and advertising, open houses, negotiation support, and guidance through the closing process. Our goal is to help you sell your property at the best possible price with minimal stress.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            We're here to help with all your real estate needs
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="buying">Buying a Property</option>
                    <option value="selling">Selling a Property</option>
                    <option value="renting">Renting a Property</option>
                    <option value="management">Property Management</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-vertical"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Our Office</h3>
                    <p className="text-gray-600">
                      123 Real Estate Avenue<br />
                      Cityville, State 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">
                      Main: (555) 123-4567<br />
                      Sales: (555) 123-4568<br />
                      Support: (555) 123-4569
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">
                      info@stonewesthomes.com<br />
                      sales@stonewesthomes.com<br />
                      support@stonewesthomes.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-pink-600 text-white rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-700 text-white rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Find Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>
          
          <div className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl text-gray-600 mb-2">Map will be displayed here</p>
              <p className="text-gray-500">123 Real Estate Avenue, Cityville, State 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;