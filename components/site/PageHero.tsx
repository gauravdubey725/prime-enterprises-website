import Container from './Container';
import { FadeUp } from './Motion';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  image?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  align = 'left',
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-border',
        image ? 'bg-foreground' : 'bg-background',
        className
      )}
    >
      {image && (
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover"
          />
          {/* Multi-layer overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
        </div>
      )}
      {/* Accent line */}
      {image && <div className="absolute left-0 top-0 hidden h-full w-1 bg-accent md:block" />}
      <Container
        className={cn(
          'relative py-24 md:py-32 lg:py-36',
          align === 'center' && 'flex flex-col items-center text-center'
        )}
      >
        <FadeUp>
          {eyebrow && (
            <span
              className={cn(
                'mb-4 inline-flex items-center gap-3 text-xs font-heading font-semibold uppercase tracking-[0.2em]',
                image ? 'text-accent' : 'text-accent'
              )}
            >
              {image && <span className="h-px w-8 bg-accent" />}
              {eyebrow}
            </span>
          )}
          <h1
            className={cn(
              'max-w-4xl font-heading text-4xl font-bold leading-[1.05] text-balance',
              image ? 'text-background' : 'text-foreground',
              'md:text-5xl lg:text-6xl'
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                'mt-6 max-w-2xl text-base leading-relaxed text-pretty md:text-lg',
                image ? 'text-background/80' : 'text-foreground-secondary',
                align === 'center' && 'mx-auto'
              )}
            >
              {description}
            </p>
          )}
        </FadeUp>
      </Container>
    </section>
  );
}
