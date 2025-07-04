import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stonewesthomes - Premium Real Estate',
  description: 'Discover exceptional properties with Stonewesthomes. Your trusted real estate partner for buying, selling, and renting premium properties.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}