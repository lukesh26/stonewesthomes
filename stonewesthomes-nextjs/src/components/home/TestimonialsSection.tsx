import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'John & Sarah Thompson',
      text: 'Stonewesthomes helped us find our perfect family home. Their team was professional, knowledgeable, and made the entire process smooth and stress-free. Highly recommended!',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      text: 'As a first-time homebuyer, I was nervous about the process. The team at Stonewesthomes guided me every step of the way and found me a property that exceeded my expectations.',
      rating: 5
    },
    {
      name: 'Emily & David Wilson',
      text: 'We\'ve worked with Stonewesthomes for both buying and selling properties. Their market knowledge and negotiation skills are unmatched. Truly exceptional service!',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-white/30 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-white/90 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
              <cite className="text-white font-semibold not-italic">
                - {testimonial.name}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;