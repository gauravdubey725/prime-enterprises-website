import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: {
    default: 'Prime Enterprises | Garment Accessories & Printing Solutions',
    template: '%s | Prime Enterprises',
  },
  description:
    'Prime Enterprises provides premium garment accessories, labels, printing and packaging solutions for fashion brands and apparel businesses.',
  keywords: [
    'garment accessories',
    'hang tags',
    'woven labels',
    'leather labels',
    'printed labels',
    'heat transfer labels',
    'packaging solutions',
    'garment branding',
    'textile printing',
    'B2B manufacturer India',
  ],
  metadataBase: new URL('https://primeenterprises.in'),
  openGraph: {
    title: 'Prime Enterprises | Garment Accessories & Printing Solutions',
    description:
      'Premium garment accessories, labels, printing and packaging solutions built for fashion brands and apparel businesses.',
    type: 'website',
    siteName: 'Prime Enterprises',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prime Enterprises | Garment Accessories & Printing Solutions',
    description:
      'Premium garment accessories, labels, printing and packaging solutions built for fashion brands and apparel businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jakarta.variable} font-body`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
