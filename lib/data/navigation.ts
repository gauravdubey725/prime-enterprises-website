/**
 * Centralized navigation configuration.
 * Update links here to change navigation across the entire website.
 */

import { products } from './products';

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products', children: products },
  { label: 'Printing', href: '/printing' },
  { label: 'Manufacturing', href: '/manufacturing' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
] as const;

export const footerNav = [
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Manufacturing', href: '/manufacturing' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Products',
    links: products.map((p) => ({
      label: p.name,
      href: p.href,
    })),
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Printing Solutions', href: '/printing' },
      { label: 'Manufacturing', href: '/manufacturing' },
      { label: 'Request a Quote', href: '/contact' },
    ],
  },
] as const;
