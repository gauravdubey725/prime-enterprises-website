'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import Container from './Container';
import ButtonLink from './ButtonLink';
import PageHero from './PageHero';
import { FadeUp } from './Motion';
import { type Product } from '@/lib/data/products';
import { getRelatedProducts } from '@/lib/data/products';
import ProductCard from './ProductCard';
import SectionHeading from './SectionHeading';

interface ProductDetailLayoutProps {
  product: Product;
}

export default function ProductDetailLayout({
  product,
}: ProductDetailLayoutProps) {
  const related = getRelatedProducts(product.slug, 3);

  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Products"
        title={product.name}
        description={product.tagline}
        image={product.image}
      />

      {/* Product Overview */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <FadeUp>
              <div className="relative aspect-[4/3] overflow-hidden bg-muted lg:aspect-square">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeUp>

            {/* Content */}
            <FadeUp delay={0.1}>
              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent">
                    Product Overview
                  </span>
                  <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
                    {product.name}
                  </h2>
                </div>
                <p className="text-base leading-relaxed text-foreground-secondary md:text-lg">
                  {product.longDescription}
                </p>
                <div className="mt-2">
                  <ButtonLink
                    href="/contact"
                    variant="primary"
                    size="large"
                    icon={<ArrowRight className="h-4 w-4" />}
                  >
                    Request a Quote
                  </ButtonLink>
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* Customization & Materials */}
      <section className="border-y border-border bg-background-secondary py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            {/* Customization */}
            <FadeUp>
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Available Customization
                </h3>
                <ul className="mt-6 space-y-3">
                  {product.customization.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed text-foreground-secondary"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* Materials */}
            <FadeUp delay={0.1}>
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Materials & Finishing
                </h3>
                <ul className="mt-6 space-y-3">
                  {product.materials.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed text-foreground-secondary"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* Applications */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeUp>
              <SectionHeading
                title="Applications"
                description="Where this product fits in your garment production and brand presentation."
              />
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {product.applications.map((item, i) => (
                  <div
                    key={i}
                    className="border border-border bg-background-secondary p-5"
                  >
                    <p className="text-sm font-heading font-medium text-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* Why Choose This Product */}
      <section className="border-y border-border bg-background-secondary py-20 md:py-28">
        <Container>
          <FadeUp>
            <SectionHeading
              eyebrow="Why Choose This Product"
              title={`What makes our ${product.name} different`}
              align="center"
              className="mb-12"
            />
          </FadeUp>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {product.whyChoose.map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="flex flex-col gap-3">
                  <span className="font-heading text-3xl font-bold text-accent/20">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground-secondary">
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery Images */}
      {product.galleryImages.length > 0 && (
        <section className="py-20 md:py-28">
          <Container>
            <FadeUp>
              <SectionHeading
                eyebrow="Gallery"
                title={`${product.name} in detail`}
                className="mb-12"
              />
            </FadeUp>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {product.galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative aspect-square overflow-hidden bg-muted"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img}
                    alt={`${product.name} detail ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Related Products */}
      <section className="border-t border-border bg-background-secondary py-20 md:py-28">
        <Container>
          <FadeUp>
            <div className="flex items-end justify-between">
              <SectionHeading title="Related Products" />
              <Link
                href="/products"
                className="hidden items-center gap-1.5 text-sm font-heading font-semibold text-accent transition-colors hover:text-accent-dark sm:flex"
              >
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
