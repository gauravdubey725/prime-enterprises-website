import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Request a Quote',
  description:
    'Get in touch with Prime Enterprises to request a quote for garment accessories, labels, printing, and packaging solutions.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
