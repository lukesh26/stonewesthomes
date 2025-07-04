import React from 'react';
import Image from 'next/image';
import { Users, Award, Home, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Home, number: '1500+', label: 'Properties Sold' },
    { icon: Users, number: '3000+', label: 'Happy Clients' },
    { icon: TrendingUp, number: '15+', label: 'Years of Experience' },
    { icon: Award, number: '25+', label: 'Industry Awards' }
  ];

  const team = [
    {
      name: 'John Smith',
      title: 'Founder & CEO',
      bio: 'With over 20 years of experience in real estate, John founded Stonewesthomes with a vision to transform the industry with client-centered services.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sarah Johnson',
      title: 'Sales Director',
      bio: 'Sarah\'s expertise in market analysis and negotiation has helped countless clients get the best value for their properties.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Brown',
      title: 'Property Manager',
      bio: 'Michael ensures that all our managed properties are maintained to the highest standards, providing peace of mind to property owners.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Emily Davis',
      title: 'Client Relations',
      bio: 'Emily\'s dedication to understanding client needs has made her an invaluable asset to our team and to our clients.',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Stonewesthomes</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Your Trusted Real Estate Partner Since 2005
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2005, Stonewesthomes has grown from a small family business to one of the most trusted real estate agencies in the region. Our journey began with a simple mission: to help people find homes they love and investments they can trust.
                </p>
                <p>
                  Over the years, we've helped thousands of families find their dream homes and assisted countless investors in building profitable real estate portfolios. Our deep understanding of the local market, combined with our commitment to personalized service, has made us the go-to agency for all real estate needs.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                At Stonewesthomes, our mission is to provide exceptional real estate services with integrity, expertise, and personalized attention. We strive to exceed our clients' expectations by delivering innovative solutions and maintaining the highest standards of professionalism.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Stonewesthomes Team"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Integrity', description: 'We conduct our business with honesty and transparency.' },
              { title: 'Excellence', description: 'We are committed to delivering the highest quality service.' },
              { title: 'Client-Focused', description: 'Our clients\' needs and satisfaction are our top priority.' },
              { title: 'Innovation', description: 'We continuously seek new ways to improve our services.' },
              { title: 'Community', description: 'We are dedicated to giving back to the communities we serve.' },
              { title: 'Expertise', description: 'Our team brings years of experience and market knowledge.' }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
            <div className="w-24 h-1 bg-white/30 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                  <IconComponent className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;