'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
  index?: number;
  overlay?: boolean;
  label?: string;
}

export default function ImageCard({
  src,
  alt,
  className,
  index = 0,
  overlay = false,
  label,
}: ImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'group relative overflow-hidden bg-muted',
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
      )}
      {label && (
        <div className="absolute bottom-0 left-0 p-5">
          <span className="text-sm font-heading font-semibold uppercase tracking-wider text-background">
            {label}
          </span>
        </div>
      )}
    </motion.div>
  );
}
