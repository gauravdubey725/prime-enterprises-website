'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/site/Container';
import PageHero from '@/components/site/PageHero';
import CTA from '@/components/site/CTA';
import { FadeUp } from '@/components/site/Motion';
import { galleryItems, galleryCategories, type GalleryCategory } from '@/lib/data/gallery';
import { images } from '@/lib/data/images';
import { cn } from '@/lib/utils';

export default function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory>('All');

  const filteredItems = useMemo(() => {
    if (filter === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside Prime Enterprises"
        description="A visual look at our manufacturing, products, and processes — from labels and tags to printing, packaging, and quality inspection."
        image={images.wovenLabelCloseup}
      />

      {/* Filters + Grid */}
      <section className="py-20 md:py-28">
        <Container>
          {/* Filters */}
          <FadeUp>
            <div className="mb-12 flex flex-wrap gap-2 md:gap-3">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    'px-5 py-2.5 text-sm font-heading font-medium transition-all duration-300',
                    filter === cat
                      ? 'bg-accent text-accent-foreground'
                      : 'border border-border text-foreground hover:border-accent hover:text-accent'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Balanced Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, i) => {
                // Controlled spans for a balanced, intentional layout
                const spanClass =
                  item.span === 'large'
                    ? 'col-span-2 row-span-2'
                    : item.span === 'wide'
                    ? 'col-span-2'
                    : item.span === 'tall'
                    ? 'row-span-2'
                    : '';

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      'group relative overflow-hidden bg-muted',
                      'aspect-[4/3] sm:aspect-square',
                      spanClass
                    )}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 p-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <span className="text-xs font-heading font-semibold uppercase tracking-wider text-background">
                        {item.category}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      <CTA
        title="Like what you see?"
        description="These are just examples of what we produce. Every order is custom-manufactured to your brand's specifications."
        primaryLabel="Request a Quote"
        primaryHref="/contact"
        secondaryLabel="View Products"
        secondaryHref="/products"
      />
    </>
  );
}
