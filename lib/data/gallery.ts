/**
 * Centralized gallery data.
 * Add or replace images here to update the gallery.
 */

import { images } from './images';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  span?: 'tall' | 'wide' | 'large' | 'normal';
}

export type GalleryCategory =
  | 'All'
  | 'Labels'
  | 'Tags'
  | 'Printing'
  | 'Packaging'
  | 'Manufacturing'
  | 'Gifting';

export const galleryCategories: GalleryCategory[] = [
  'All',
  'Labels',
  'Tags',
  'Printing',
  'Packaging',
  'Manufacturing',
  'Gifting',
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    src: images.hangTagsMain,
    alt: 'Blank hang tags hanging on strings',
    category: 'Tags',
    span: 'large',
  },
  {
    id: 'g2',
    src: images.wovenLabelCloseup,
    alt: 'Close-up of woven fabric label with logo',
    category: 'Labels',
    span: 'tall',
  },
  {
    id: 'g3',
    src: images.printingPress,
    alt: 'Industrial offset printing press',
    category: 'Printing',
    span: 'normal',
  },
  {
    id: 'g4',
    src: images.packagingBoxes,
    alt: 'Assorted packaged boxes ready for shipment',
    category: 'Packaging',
    span: 'normal',
  },
  {
    id: 'g5',
    src: images.factorySewingMachines,
    alt: 'Row of industrial sewing machines in a textile factory',
    category: 'Manufacturing',
    span: 'wide',
  },
  {
    id: 'g6',
    src: images.leatherPatchDenim,
    alt: 'Leather patch on denim jeans with brand label',
    category: 'Labels',
    span: 'normal',
  },
  {
    id: 'g7',
    src: images.hangTagsStyled,
    alt: 'Stylish clothing tag on a muted background',
    category: 'Tags',
    span: 'tall',
  },
  {
    id: 'g8',
    src: images.printingRollers,
    alt: 'Industrial printing machine rollers in action',
    category: 'Printing',
    span: 'normal',
  },
  {
    id: 'g9',
    src: images.inspectionRedFabric,
    alt: 'Textile workers inspecting red fabric in a factory',
    category: 'Manufacturing',
    span: 'normal',
  },
  {
    id: 'g10',
    src: images.packagingWarehouse,
    alt: 'Stacks of cardboard boxes organized in a warehouse',
    category: 'Packaging',
    span: 'wide',
  },
  {
    id: 'g11',
    src: images.wovenLabelPortugal,
    alt: 'Scattered textile labels on white background',
    category: 'Labels',
    span: 'normal',
  },
  {
    id: 'g12',
    src: images.hangTagsFlatlay,
    alt: 'Flat lay of colorful clothing tags',
    category: 'Tags',
    span: 'normal',
  },
  {
    id: 'g13',
    src: images.printingInk,
    alt: 'Hand applying ink to a printing press roller',
    category: 'Printing',
    span: 'tall',
  },
  {
    id: 'g14',
    src: images.factoryPackagingLine,
    alt: 'Factory workers packaging products on an assembly line',
    category: 'Manufacturing',
    span: 'normal',
  },
  {
    id: 'g15',
    src: images.fabricRolls,
    alt: 'Vibrant display of rolled fabrics in various colors',
    category: 'Manufacturing',
    span: 'large',
  },
  {
    id: 'g16',
    src: images.leatherPatchBlank,
    alt: 'Macro shot of denim with a blank leather patch',
    category: 'Labels',
    span: 'normal',
  },
  {
    id: 'g17',
    src: images.hangTagsCardboard,
    alt: 'Elegant cardboard packaging with clothing labels',
    category: 'Tags',
    span: 'normal',
  },
  {
    id: 'g18',
    src: images.printingProcess,
    alt: 'Industrial printing machine processing paper sheets',
    category: 'Printing',
    span: 'wide',
  },
  {
    id: 'g19',
    src: images.hangTagsColorful,
    alt: 'Bright paper card tags arranged on a white surface',
    category: 'Tags',
    span: 'normal',
  },
  {
    id: 'g20',
    src: images.hangTagsOnHanger,
    alt: 'Green shirt on a hanger with label tag on a clothing rack',
    category: 'Tags',
    span: 'tall',
  },
  {
    id: 'g21',
    src: images.leatherPatchEmbossed,
    alt: 'Handmade leather card holder with embossed logo',
    category: 'Labels',
    span: 'normal',
  },
  {
    id: 'g22',
    src: images.leatherPatchJeansStack,
    alt: 'Stack of blue, dark, and black denim jeans folded on a dark surface',
    category: 'Labels',
    span: 'wide',
  },
  {
    id: 'g23',
    src: images.packagingGarmentBox,
    alt: 'Minimalist garment folded inside a cardboard packaging box',
    category: 'Packaging',
    span: 'normal',
  },
  {
    id: 'g24',
    src: images.packagingTissue,
    alt: 'Folded green knit garment in eco-friendly packaging with tissue paper',
    category: 'Packaging',
    span: 'tall',
  },
  {
    id: 'g25',
    src: images.giftingBox,
    alt: 'Elegant gift box with red leather accessory and keychain',
    category: 'Gifting',
    span: 'tall',
  },
  {
    id: 'g26',
    src: images.giftingUnboxing,
    alt: 'Hands holding a branded gift box on a wooden table',
    category: 'Gifting',
    span: 'normal',
  },
  {
    id: 'g27',
    src: images.giftingRibbon,
    alt: 'Gift box wrapped in golden ribbon on a wooden surface',
    category: 'Gifting',
    span: 'normal',
  },
  {
    id: 'g28',
    src: images.giftingArranged,
    alt: 'Stylish branded gift boxes arranged on a wooden table',
    category: 'Gifting',
    span: 'large',
  },
  {
    id: 'g29',
    src: images.heatTransferScreen,
    alt: 'Artist screen printing a t-shirt in a workshop',
    category: 'Printing',
    span: 'normal',
  },
  {
    id: 'g30',
    src: images.wovenLabelSweatshirt,
    alt: 'Minimalist beige sweatshirt with clothing tags on yellow background',
    category: 'Labels',
    span: 'normal',
  },
];
