/**
 * Centralized "Why Prime Enterprises" data.
 * Used on the home page.
 */

export interface WhyItem {
  number: string;
  title: string;
  description: string;
}

export const whyPrimeEnterprises: WhyItem[] = [
  {
    number: '01',
    title: 'Quality',
    description:
      'Every product is manufactured to specification and inspected against approved samples before dispatch.',
  },
  {
    number: '02',
    title: 'Customization',
    description:
      'From material and finish to size and shape, every detail is tailored to your brand requirements.',
  },
  {
    number: '03',
    title: 'Reliable Production',
    description:
      'Structured production planning and batch tracking ensure consistent output and dependable timelines.',
  },
  {
    number: '04',
    title: 'Attention to Detail',
    description:
      'We sweat the small things — edge finishes, colour accuracy, alignment, and material consistency.',
  },
  {
    number: '05',
    title: 'B2B Support',
    description:
      'Dedicated communication from enquiry to dispatch, with clear documentation at every stage.',
  },
  {
    number: '06',
    title: 'Consistent Finishing',
    description:
      'Repeat orders match your original approved sample — batch after batch, order after order.',
  },
];

export interface Capability {
  title: string;
  description: string;
}

export const capabilities: Capability[] = [
  {
    title: 'In-House Manufacturing',
    description:
      'Production facilities for woven labels, printed labels, hang tags, leather patches, heat transfers, and packaging — under one roof.',
  },
  {
    title: 'Design & Pre-Press',
    description:
      'An in-house design team handles artwork preparation, colour separation, and technical files for production.',
  },
  {
    title: 'Sampling Before Bulk',
    description:
      'Physical samples are produced and sent for approval before any bulk production begins.',
  },
  {
    title: 'Quality Inspection',
    description:
      'Dedicated quality control at multiple stages — raw material, in-process, and pre-dispatch.',
  },
  {
    title: 'Custom Finishing',
    description:
      'Foil, embossing, debossing, lamination, die-cutting, and speciality finishes applied in-house.',
  },
  {
    title: 'Pan-India Logistics',
    description:
      'Dispatch and delivery network covering major garment manufacturing hubs across India.',
  },
];

export interface WhyClientWork {
  title: string;
  description: string;
}

export const whyClientsWorkWithUs: WhyClientWork[] = [
  {
    title: 'Single-Source Supplier',
    description:
      'Labels, tags, printing, and packaging from one partner — reducing vendor complexity and ensuring brand consistency.',
  },
  {
    title: 'Clear Communication',
    description:
      'Responsive, professional communication from first enquiry to final dispatch — no ambiguity, no surprises.',
  },
  {
    title: 'Scalable Production',
    description:
      'From small boutique runs to large manufacturing volumes — production scales to your demand.',
  },
  {
    title: 'Long-Term Partnership',
    description:
      'We invest in understanding your brand, so repeat orders are seamless and quality stays consistent.',
  },
];
