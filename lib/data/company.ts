/**
 * Centralized company information.
 * Update these values to change company details across the entire website.
 * Used by the Footer, Contact page, CTA sections, and anywhere company info appears.
 */

export const company = {
  name: 'Prime Enterprises',
  tagline: 'Garment Accessories & Printing Solutions',
  description:
    'Prime Enterprises is a B2B manufacturer and supplier of garment accessories, garment branding products, labels, tags, printing solutions and packaging solutions — built for fashion brands and apparel businesses.',
  shortDescription:
    'Premium garment accessories, labels, printing and packaging solutions for fashion brands and apparel businesses.',

  contact: {
    phone: '+919892707356',
    phoneDisplay: '+91 98927 07356',
    email: 'primeent16@gmail.com',
    emailDisplay: 'primeent16@gmail.com',
    addressLine1: 'A/21, Dahisar Alaknanada CHS,',
    addressLine2: 'Shiv Vallabh Road, Rawalpada,',
    addressLine3: 'Dahisar E, Mumbai 400068',
    hours: 'Mon–Sat: 9:30 AM – 7:00 PM IST',
    whatsapp: '919892707356',
    whatsappDisplay: '+91 98927 07356',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Dahisar+East,+Mumbai+400068&output=embed',
    mapLink: 'https://maps.google.com/?q=Dahisar+East,+Mumbai+400068',
  },

  social: {
    instagram: '#',
    linkedin: '#',
    facebook: '#',
    whatsapp: 'https://wa.me/919892707356',
  },

  stats: [
    { value: 'Custom', label: 'Manufacturing' },
    { value: 'In-House', label: 'Quality Control' },
    { value: 'Pan India', label: 'Delivery Network' },
    { value: 'B2B', label: 'Focused' },
  ],
} as const;
