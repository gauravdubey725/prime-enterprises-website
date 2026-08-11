/**
 * Centralized manufacturing process data.
 * Used on the home page and manufacturing page.
 */

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const manufacturingProcess: ProcessStep[] = [
  {
    step: '01',
    title: 'Requirement',
    description:
      'We start by understanding your specifications — product type, quantity, materials, finishes, and timeline.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Our design team creates or refines your artwork, preparing it for production with technical precision.',
  },
  {
    step: '03',
    title: 'Sampling',
    description:
      'Physical samples are produced for your review and approval before bulk production begins.',
  },
  {
    step: '04',
    title: 'Production',
    description:
      'Approved samples move to bulk manufacturing on our production floor with batch-level tracking.',
  },
  {
    step: '05',
    title: 'Quality Check',
    description:
      'Every batch is inspected against your approved sample for colour, finish, and dimensional accuracy.',
  },
  {
    step: '06',
    title: 'Packaging',
    description:
      'Products are counted, sorted, and packaged according to your labelling and shipping requirements.',
  },
  {
    step: '07',
    title: 'Dispatch',
    description:
      'Finished goods are dispatched through our logistics network with tracking and delivery confirmation.',
  },
];

export interface PrintingService {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
}

import { images } from './images';

export const printingServices: PrintingService[] = [
  {
    title: 'Offset Printing',
    description:
      'High-volume, consistent colour printing ideal for hang tags, catalogues, and packaging inserts.',
    longDescription:
      'Offset printing delivers sharp, consistent colour reproduction at high volumes — making it the preferred choice for hang tags, product catalogues, brochures, and packaging inserts. Our offset capabilities include multi-colour printing with precise Pantone matching, ensuring brand colours are reproduced accurately across every print run.',
    features: [
      'Multi-colour printing (up to 6 colours)',
      'Pantone and brand colour matching',
      'Consistent results across large volumes',
      'Suitable for coated and uncoated stocks',
    ],
    image: images.printingPress,
  },
  {
    title: 'Digital Printing',
    description:
      'Fast, flexible printing for short runs, variable data, and on-demand production.',
    longDescription:
      'Digital printing offers speed and flexibility for short runs, variable data printing, and on-demand production without the setup costs of offset. It is ideal for samples, small-batch orders, personalised packaging, and labels with sequential numbering or QR codes. Our digital printing produces vibrant, high-resolution output on a wide range of substrates.',
    features: [
      'No minimum order quantity',
      'Variable data printing (barcodes, QR codes, numbering)',
      'Fast turnaround for short runs',
      'High-resolution output',
    ],
    image: images.printingMachine,
  },
  {
    title: 'Screen Printing',
    description:
      'Durable, vibrant prints on fabric, garments, and specialty materials.',
    longDescription:
      'Screen printing produces durable, vibrant prints with excellent opacity and wash-fastness — ideal for garment printing, fabric labels, and specialty applications. Our screen printing capabilities include multi-colour printing with precise registration, specialty inks (metallic, fluorescent, puff), and printing on diverse materials from cotton to synthetic blends.',
    features: [
      'Multi-colour printing with precise registration',
      'Specialty inks (metallic, puff, fluorescent)',
      'Excellent wash and abrasion resistance',
      'Printing on fabric, garments, and rigid materials',
    ],
    image: images.printingRollers,
  },
  {
    title: 'Specialty & Custom Printing',
    description:
      'Custom printing solutions for unique requirements and premium finishes.',
    longDescription:
      'For projects that go beyond standard printing, we offer specialty and custom solutions including foil stamping, embossing, debossing, spot UV, and combination finishes. Whether you need a unique hang tag finish, a custom-printed packaging solution, or a printing technique not commonly available, our team works with you to develop the right approach.',
    features: [
      'Foil stamping and hot stamping',
      'Embossing and debossing',
      'Spot UV and combination finishes',
      'Custom printing development',
    ],
    image: images.printingInk,
  },
];
