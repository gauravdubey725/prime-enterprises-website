import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold leading-[1.1] text-foreground md:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-foreground-secondary md:text-lg text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
