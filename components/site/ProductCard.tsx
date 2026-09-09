'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { type Product } from '@/lib/data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
  className?: string;
  featured?: boolean;
  compact?: boolean;
  editorial?: boolean;
}

export default function ProductCard({
  product,
  index = 0,
  className,
  featured = false,
  compact = false,
  editorial = false,
}: ProductCardProps) {
  if (editorial) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        className={cn('group', className)}
      >
        <Link href={product.href} className="block">
          <div className="grid grid-cols-1 items-center gap-6 border-b border-background/15 py-8 transition-colors hover:bg-background/5 md:grid-cols-[60px_1fr_auto_240px] md:gap-8 md:py-10">
            {/* Number */}
            <span className="font-heading text-sm font-bold text-accent">0{index + 1}</span>

            {/* Name */}
            <h3 className="font-heading text-2xl font-bold text-background transition-colors group-hover:text-accent md:text-3xl">
              {product.name}
            </h3>

            {/* Description */}
            <p className="max-w-xs text-sm leading-relaxed text-background/50 md:max-w-[200px]">
              {product.description}
            </p>

            {/* Image thumbnail */}
            <div className="relative aspect-[16/10] overflow-hidden bg-muted/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="flex h-12 w-12 items-center justify-center bg-accent text-accent-foreground">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cn('group', className)}
    >
      <Link href={product.href} className="block">
        <div className={cn('relative overflow-hidden bg-muted', featured ? 'aspect-[0.9]' : compact ? 'aspect-[0.82]' : 'aspect-[4/5]')}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-transparent to-transparent" />
          <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center border border-background/30 text-background/80 transition-colors group-hover:border-accent group-hover:text-accent">
            <ArrowUpRight className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
            <span className="block text-[10px] font-heading font-semibold uppercase tracking-[0.2em] text-accent">{featured ? 'Featured category' : 'Product category'}</span>
            <h3 className={cn('mt-2 font-heading font-bold text-background', featured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl')}>{product.name}</h3>
            {featured && <p className="mt-2 max-w-md text-sm leading-relaxed text-background/70">{product.description}</p>}
          </div>
        </div>
        {!featured && !compact && (
          <div className="mt-5 flex flex-col gap-2">
            <h3 className="font-heading text-xl font-bold text-foreground transition-colors group-hover:text-accent">{product.name}</h3>
            <p className="text-sm leading-relaxed text-foreground-secondary">{product.description}</p>
            <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-accent">Explore <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
          </div>
        )}
      </Link>
    </motion.div>
  );
}
