import HeroSection from '@/components/home/HeroSection';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProperties />
      <ServicesSection />
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Contact our team of experts today and let us help you find the perfect property that matches your lifestyle and budget.
          </p>
          <Button size="lg" className="px-12 py-4 text-lg">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}