'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { type Product } from '@/lib/data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
  className?: string;
}

export default function ProductCard({
  product,
  index = 0,
  className,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={cn('group', className)}
    >
      <Link href={product.href} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/0 to-foreground/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-background">
              Explore
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-2">
          <h3 className="font-heading text-xl font-bold text-foreground transition-colors group-hover:text-accent">
            {product.name}
          </h3>
          <p className="text-sm leading-relaxed text-foreground-secondary">
            {product.description}
          </p>
          <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-accent">
            Explore
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
