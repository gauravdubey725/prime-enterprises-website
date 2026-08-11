import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetailLayout from '@/components/site/ProductDetailLayout';
import { products, getProduct } from '@/lib/data/products';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProduct(params.slug);
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }
  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProduct(params.slug);
  if (!product) {
    notFound();
  }
  return <ProductDetailLayout product={product} />;
}
