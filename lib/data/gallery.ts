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
  | 'Manufacturing';

export const galleryCategories: GalleryCategory[] = [
  'All',
  'Labels',
  'Tags',
  'Printing',
  'Packaging',
  'Manufacturing',
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
    src: images.wovenFabricTexture,
    alt: 'Close-up of white knitted fabric texture',
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
];
