/**
 * Centralized testimonials data.
 * Replace with approved customer feedback before publishing.
 */

export interface Testimonial {
  quote: string;
  attribution: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'The quality of the woven labels and hang tags has been consistently excellent across all our repeat orders. Sampling was quick and production was delivered on schedule.',
    attribution: 'Production Manager',
    role: 'Apparel Brand, Mumbai',
  },
  {
    quote:
      'Having a single supplier for our labels, tags, and packaging simplified our sourcing significantly. The finishing quality on the leather patches stood out.',
    attribution: 'Sourcing Lead',
    role: 'Denim Brand, Bangalore',
  },
  {
    quote:
      'Responsive communication from enquiry to dispatch. The heat transfer labels we ordered passed all our wash and stretch tests without any issues.',
    attribution: 'Operations Head',
    role: 'Activewear Brand, Mumbai',
  },
];
