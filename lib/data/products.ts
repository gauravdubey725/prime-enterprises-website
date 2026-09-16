/**
 * Centralized product data.
 * Add or edit products here — all product pages and catalogues update automatically.
 */

import { images } from './images';

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  href: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  galleryImages: string[];
  customization: string[];
  materials: string[];
  applications: string[];
  whyChoose: { title: string; description: string }[];
  featured: boolean;
}

export const products: Product[] = [
  {
    slug: 'hang-tags',
    name: 'Hang Tags',
    shortName: 'Hang Tags',
    href: '/products/hang-tags',
    tagline: 'Brand-defining tags that make the first impression',
    description:
      'Custom-designed hang tags in a wide range of papers, finishes and shapes — crafted to communicate your brand identity at the point of sale.',
    longDescription:
      'Hang tags are the first physical touchpoint between your brand and your customer. We manufacture premium hang tags in a wide range of materials — from textured kraft and uncoated cardstock to high-gloss coated stocks — with finishing options including foil stamping, embossing, debossing, spot UV, and die-cut shapes. Every tag is designed and produced to match your brand specifications precisely.',
    image: images.hangTagsBanner,
    galleryImages: [
      images.hangTagsFeatured,
      images.hangTagsOnFabric,
      images.hangTagsColorful,
      images.hangTagsKraft,
      images.hangTagsFlatlay,
      images.hangTagsOnHanger,
      images.hangTagsAssorted,
    ],
    customization: [
      'Custom shapes and sizes (die-cut available)',
      'Foil stamping (gold, silver, copper, rose gold)',
      'Embossing and debossing',
      'Spot UV coating',
      'Matte, gloss, or soft-touch lamination',
      'Multiple paper stocks (kraft, cardstock, coated, recycled)',
      'String and attachment options (twine, ribbon, plastic fasteners, safety pins)',
      'Double-sided printing',
    ],
    materials: [
      'Kraft paper (180–350 GSM)',
      'Coated cardstock (250–400 GSM)',
      'Uncoated textured cardstock',
      'Recycled eco-friendly paper',
      'Specialty stocks (metallic, pearlescent)',
    ],
    applications: [
      'Fashion apparel brands',
      'Denim and casualwear',
      'Premium and luxury garments',
      'Footwear and accessories',
      'Corporate uniforms',
      'Boutique and designer labels',
    ],
    whyChoose: [
      {
        title: 'Precision Die-Cutting',
        description:
          'Every shape — from standard rectangles to intricate custom dies — is cut with clean, consistent edges.',
      },
      {
        title: 'Premium Finishes',
        description:
          'Foil, embossing, and lamination applied with exacting standards for a tactile, premium feel.',
      },
      {
        title: 'Brand-True Colour',
        description:
          'Colour matching to your brand guidelines with consistent results across production runs.',
      },
    ],
    featured: true,
  },
  {
    slug: 'woven-labels',
    name: 'Woven Labels',
    shortName: 'Woven Labels',
    href: '/products/woven-labels',
    tagline: 'Durable, fine-detail woven branding for every garment',
    description:
      'High-density woven labels with crisp detail and soft texture — available in damask, satin, and taffeta weaves with custom designs and edge finishes.',
    longDescription:
      'Woven labels are the industry standard for durable garment branding. We produce high-density woven labels using advanced needle looms, offering damask, satin, and taffeta weaves to suit different detail and texture requirements. With fine yarn counts and precise colour matching, our woven labels deliver sharp text, clean logos, and a soft hand-feel that stands up to repeated washing and wear.',
    image: images.wovenLabelsApproved,
    galleryImages: [
      images.wovenLabelPortugal,
      images.wovenLabelCloth,
      images.wovenLabelDenim,
      images.wovenLabelScattered,
      images.wovenLabelSweatshirt,
      images.wovenLabelStriped,
    ],
    customization: [
      'Damask, satin, or taffeta weave',
      'Custom widths (10mm to 100mm)',
      'Up to 12 colours per design',
      'Iron-on, sew-on, or self-adhesive backing',
      'Folded ends, centre fold, or straight cut',
      'Custom border styles',
      'Metallic yarn options',
    ],
    materials: [
      'Polyester yarn (standard)',
      'Cotton yarn (natural feel)',
      'Metallic thread accents',
      'Recycled polyester (eco option)',
    ],
    applications: [
      'Apparel and fashion brands',
      'Denim and outerwear',
      'Activewear and sportswear',
      'Childrenswear',
      'Home textiles',
      'Bags and accessories',
    ],
    whyChoose: [
      {
        title: 'High-Density Weaving',
        description:
          'Fine yarn counts produce sharp, detailed logos and small text that stays legible after washing.',
      },
      {
        title: 'Soft Hand-Feel',
        description:
          'Carefully selected yarns and weaves ensure labels are comfortable against skin without scratching.',
      },
      {
        title: 'Wash-Tested Durability',
        description:
          'Labels are tested for colour fastness and structural integrity through repeated industrial wash cycles.',
      },
    ],
    featured: true,
  },
  {
    slug: 'leather-labels',
    name: 'Leather Labels',
    shortName: 'Leather Labels',
    href: '/products/leather-labels',
    tagline: 'Authentic leather and faux-leather patches with a premium feel',
    description:
      'Genuine leather, PU leather, and microfibre labels with debossed, embossed, or foil-stamped branding — ideal for denim, outerwear, and premium brands.',
    longDescription:
      'Leather labels add a tactile, premium quality to garments that paper and woven labels cannot match. We offer genuine leather, PU (vegan) leather, and microfibre alternatives, with branding applied through debossing, embossing, hot foil stamping, or laser engraving. Each patch is cut to your exact shape and size, with options for stitching holes, adhesive backing, or heat-seal backing for easy application.',
    image: images.leatherPatchDenim,
    galleryImages: [
      images.leatherPatchDetail,
      images.leatherPatchJacron,
      images.leatherPatchEmbossed,
      images.leatherPatchBrown,
      images.leatherPatchJeansStack,
      images.leatherPatchNoir,
    ],
    customization: [
      'Genuine leather, PU leather, or microfibre',
      'Debossing and embossing',
      'Foil stamping (gold, silver, copper)',
      'Laser engraving',
      'Custom shapes and sizes',
      'Pre-punched stitching holes',
      'Heat-seal or adhesive backing',
      'Edge painting and finishing',
    ],
    materials: [
      'Genuine leather',
      'PU leather (vegan)',
      'Microfibre leather alternative',
      'Suede finish options',
    ],
    applications: [
      'Denim and jeans brands',
      'Outerwear and jackets',
      'Bags and leather goods',
      'Premium and heritage brands',
      'Workwear and uniforms',
      'Caps and headwear',
    ],
    whyChoose: [
      {
        title: 'Authentic Materials',
        description:
          'Sourced genuine leather and high-quality PU alternatives that look and feel premium.',
      },
      {
        title: 'Precise Branding',
        description:
          'Debossing and foil stamping applied with consistent pressure for clean, repeatable results.',
      },
      {
        title: 'Application Ready',
        description:
          'Backing options — heat-seal, adhesive, or stitched — make integration into your production seamless.',
      },
    ],
    featured: true,
  },
  {
    slug: 'printed-labels',
    name: 'Printed Labels',
    shortName: 'Printed Labels',
    href: '/products/printed-labels',
    tagline: 'Crisp, cost-effective care and brand labels',
    description:
      'High-resolution printed labels on satin, cotton, or polyester tape — perfect for care labels, size labels, and brand identifiers with fine text and multi-colour printing.',
    longDescription:
      'Printed labels offer an efficient, versatile solution for care instructions, size information, and brand identification. We print on satin, cotton, and polyester tapes using high-resolution printing that delivers crisp, legible text — even at very small sizes. Available in single or multi-colour, with options for sequential sizing, barcodes, and QR codes, our printed labels are soft, wash-durable, and cost-effective for high-volume production.',
    image: images.printedLabelsApproved,
    galleryImages: [
      images.printedLabelSizeTag,
      images.printedLabelCollar,
      images.printedLabelStriped,
      images.printedLabelDress,
      images.printedLabelScattered,
      images.printedLabelGreen,
    ],
    customization: [
      'Satin, cotton, or polyester tape',
      'Single to multi-colour printing',
      'Care instructions and compliance text',
      'Size labels (S, M, L, XL or numeric)',
      'Barcode and QR code printing',
      'Sequential numbering',
      'Custom widths and lengths',
      'Cold-cut or ultrasonic-cut edges',
    ],
    materials: [
      'Satin tape (soft, glossy)',
      'Cotton tape (natural, matte)',
      'Polyester tape (durable, wash-resistant)',
      'Recycled satin (eco option)',
    ],
    applications: [
      'Care and composition labels',
      'Size and fit labels',
      'Brand identifiers',
      'Compliance and regulatory labels',
      'High-volume apparel production',
      'Fast-fashion garments',
    ],
    whyChoose: [
      {
        title: 'High-Resolution Print',
        description:
          'Fine text and small care symbols stay legible through printing technology designed for detail.',
      },
      {
        title: 'Wash-Durable',
        description:
          'Printed with wash-fast inks tested to withstand industrial laundering and domestic washing.',
      },
      {
        title: 'Cost-Effective at Volume',
        description:
          'Efficient production process makes printed labels the economical choice for large runs.',
      },
    ],
    featured: true,
  },
  {
    slug: 'heat-transfer',
    name: 'Heat Transfer Labels',
    shortName: 'Heat Transfer',
    href: '/products/heat-transfer',
    tagline: 'Seamless, tagless branding applied directly to fabric',
    description:
      'Heat transfer labels and tags that fuse directly into garments for a tagless, lightweight finish — ideal for activewear, innerwear, and babywear.',
    longDescription:
      'Heat transfer labels provide a tagless branding solution that fuses directly into the fabric, eliminating the bulk and itch of traditional sewn labels. We produce high-quality heat transfers using durable, stretchable, and skin-safe materials that bond permanently to cotton, polyester, blends, and performance fabrics. Our transfers are wash-tested, stretch-resistant, and certified skin-safe — making them the preferred choice for activewear, innerwear, and babywear brands.',
    image: images.heatTransferPress,
    galleryImages: [
      images.heatTransferIron,
      images.heatTransferPrinting,
      images.heatTransferMachine,
      images.heatTransferTagless,
      images.heatTransferWorkshop,
      images.heatTransferScreen,
    ],
    customization: [
      'Stretchable transfers for performance fabrics',
      'Skin-safe, OEKO-TEX certified materials',
      'Multi-colour designs',
      'Matte or gloss finish',
      'Custom sizes and shapes',
      'Care and size information in one transfer',
      'Metallic and reflective effects',
    ],
    materials: [
      'Polyurethane (PU) film',
      'Silicone-based transfers',
      'Water-based ink transfers',
      'Stretch film for activewear',
    ],
    applications: [
      'Activewear and sportswear',
      'Innerwear and lingerie',
      'Babywear and childrenswear',
      'Performance and technical apparel',
      'Seamless garments',
      'Swimwear',
    ],
    whyChoose: [
      {
        title: 'Tagless Comfort',
        description:
          'No sewn label means no scratching or irritation — ideal for sensitive skin and performance wear.',
      },
      {
        title: 'Stretch and Wash Tested',
        description:
          'Transfers maintain adhesion and appearance through stretching and repeated washing.',
      },
      {
        title: 'Skin-Safe Materials',
        description:
          'Certified materials ensure safety for direct-skin applications including babywear.',
      },
    ],
    featured: true,
  },
  {
    slug: 'packaging',
    name: 'Packaging',
    shortName: 'Packaging',
    href: '/products/packaging',
    tagline: 'Custom packaging that completes your brand presentation',
    description:
      'Custom garment packaging — poly bags, boxes, mailers, tissue paper, and branded inserts — designed to protect products and elevate the unboxing experience.',
    longDescription:
      'Packaging is the final brand touchpoint in your supply chain and the first your customer experiences. We manufacture custom garment packaging solutions including poly bags with custom printing, corrugated shipping boxes, branded mailers, tissue paper, and inserts. Every packaging solution is designed to protect garments through transit while reinforcing your brand identity at every layer of the unboxing experience.',
    image: images.packagingApproved,
    galleryImages: [
      images.packagingApprovedSecondary,
      images.packagingShipping,
      images.packagingWarehouse,
      images.packagingOrganized,
      images.packagingBoxesStack,
      images.packagingGarmentBox,
      images.packagingTissue,
    ],
    customization: [
      'Custom-printed poly bags and sleeves',
      'Corrugated boxes and mailers',
      'Branded tissue paper and inserts',
      'Custom sizes and dimensions',
      'Foil and spot UV on packaging',
      'Eco-friendly and recyclable materials',
      'FSC-certified paper options',
      'Custom die-cut windows',
    ],
    materials: [
      'Corrugated board (single and double wall)',
      'Kraft and coated paper',
      'Poly bags (LDPE, biodegradable options)',
      'Tissue paper (acid-free, recycled)',
    ],
    applications: [
      'E-commerce and D2C brands',
      'Retail packaging',
      'Garment export packaging',
      'Boutique and gifting packaging',
      'Subscription boxes',
      'Wholesale and bulk shipping',
    ],
    whyChoose: [
      {
        title: 'Brand-Integrated Design',
        description:
          'Packaging designed as part of your brand system — from tissue print to box exterior.',
      },
      {
        title: 'Transit-Tested Protection',
        description:
          'Materials and construction tested to protect garments through domestic and international shipping.',
      },
      {
        title: 'Eco-Conscious Options',
        description:
          'Biodegradable, recycled, and FSC-certified materials available for brands prioritising sustainability.',
      },
    ],
    featured: true,
  },
  {
    slug: 'corporate-gifting',
    name: 'Corporate Gifting',
    shortName: 'Gifting',
    href: '/products/corporate-gifting',
    tagline: 'Premium branded gift boxes for clients, teams, and events',
    description:
      'Custom corporate gift boxes with branded packaging, inserts, and personalized accessories — designed to make a memorable impression for client gifting, employee onboarding, and event giveaways.',
    longDescription:
      'Corporate gifting is a powerful way to strengthen business relationships and reinforce brand identity. We design and assemble premium corporate gift boxes with custom-branded packaging, tailored inserts, and a curated selection of accessories. From executive gift sets to employee welcome kits and event giveaways, every box is designed to reflect your brand values and create a memorable unboxing experience.',
    image: images.giftingApprovedMain,
    galleryImages: [
      images.giftingApprovedGallery1,
      images.giftingApprovedGallery2,
      images.giftingApprovedGallery3,
    ],
    customization: [
      'Custom-branded gift boxes and sleeves',
      'Personalized inserts and dividers',
      'Foil stamping and embossing on packaging',
      'Custom tissue paper and wrapping',
      'Branded notebooks, mugs, and accessories',
      'Handwritten note cards',
      'Variable data printing for recipient names',
      'Eco-friendly and recyclable materials',
    ],
    materials: [
      'Rigid board gift boxes',
      'Kraft and coated paper',
      'Recycled and FSC-certified paper',
      'Fabric-lined interiors',
    ],
    applications: [
      'Client appreciation gifts',
      'Employee onboarding kits',
      'Event and conference giveaways',
      'Festive and seasonal gifting',
      'VIP and executive gifts',
      'Trade show and promotional kits',
    ],
    whyChoose: [
      {
        title: 'End-to-End Curation',
        description:
          'From box design to accessory sourcing, we manage the entire gifting package so you don\'t have to coordinate multiple vendors.',
      },
      {
        title: 'Brand-Forward Presentation',
        description:
          'Every element — box, tissue, insert, and card — is designed to reinforce your brand identity at the moment of unboxing.',
      },
      {
        title: 'Scalable Fulfilment',
        description:
          'Whether it is 50 boxes or 5,000, we handle assembly, personalization, and dispatch with consistent quality.',
      },
    ],
    featured: false,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, count);
}
