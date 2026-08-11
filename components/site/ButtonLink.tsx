import { cn } from '@/lib/utils';
import Link from 'next/link';
import { type ReactNode } from 'react';

interface ButtonLinkProps {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'default' | 'large';
  className?: string;
  icon?: ReactNode;
}

export default function ButtonLink({
  children,
  href,
  variant = 'primary',
  size = 'default',
  className,
  icon,
}: ButtonLinkProps) {
  const base =
    'group inline-flex items-center justify-center gap-2 font-heading font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background';

  const variants = {
    primary:
      'bg-accent text-accent-foreground hover:bg-accent-dark',
    secondary:
      'bg-foreground text-background hover:bg-foreground/90 shadow-sm',
    outline:
      'border border-border bg-transparent text-foreground hover:border-accent hover:text-accent',
    ghost: 'text-foreground hover:text-accent',
  };

  const sizes = {
    default: 'px-6 py-3 text-sm',
    large: 'px-8 py-4 text-base',
  };

  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </Link>
  );
}
