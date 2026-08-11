import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

export default function Container({
  children,
  className,
  size = 'default',
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6 md:px-8 lg:px-12',
        size === 'default' && 'max-w-7xl',
        size === 'narrow' && 'max-w-5xl',
        size === 'wide' && 'max-w-8xl',
        className
      )}
    >
      {children}
    </div>
  );
}
