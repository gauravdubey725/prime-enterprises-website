'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { navLinks } from '@/lib/data/navigation';
import { cn } from '@/lib/utils';
import Container from './Container';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const productsLink = navLinks.find((l) => l.label === 'Products');

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/95 backdrop-blur-md'
          : 'border-b border-transparent bg-background'
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex min-w-0 flex-1 items-center gap-2 whitespace-nowrap font-heading text-[clamp(0.875rem,4.8vw,1.125rem)] font-bold tracking-tight text-foreground sm:text-lg"
          >
            <span className="text-accent">PRIME</span>
            <span>ENTERPRISES</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              if (link.label === 'Products' && link.children) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 text-sm font-heading font-medium transition-colors',
                        isActive(link.href)
                          ? 'text-accent'
                          : 'text-foreground hover:text-accent'
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform duration-200',
                          productsOpen && 'rotate-180'
                        )}
                      />
                    </Link>
                    <AnimatePresence>
                      {productsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="absolute left-0 top-full pt-2"
                        >
                          <div className="w-64 overflow-hidden border border-border bg-background-secondary shadow-xl">
                            {link.children.map((product) => (
                              <Link
                                key={product.slug}
                                href={product.href}
                                className="group flex items-center justify-between px-5 py-3.5 text-sm transition-colors hover:bg-muted"
                              >
                                <span className="font-heading font-medium text-foreground transition-colors group-hover:text-accent">
                                  {product.name}
                                </span>
                                <ArrowRight className="h-3.5 w-3.5 text-foreground-secondary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-accent" />
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 text-sm font-heading font-medium transition-colors',
                    isActive(link.href)
                      ? 'text-accent'
                      : 'text-foreground hover:text-accent'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent px-5 py-2.5 text-sm font-heading font-semibold text-accent-foreground transition-all hover:bg-accent-dark"
            >
              Request a Quote
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="flex shrink-0 items-center justify-center p-2 text-foreground lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-background lg:hidden"
          >
            <Container className="flex h-full flex-col overflow-y-auto pb-8 pt-4">
              {navLinks.map((link, i) => {
                if (link.label === 'Products' && link.children) {
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <button
                        className="flex w-full items-center justify-between py-3.5 text-base font-heading font-medium text-foreground"
                        onClick={() =>
                          setMobileProductsOpen(!mobileProductsOpen)
                        }
                      >
                        <span
                          className={
                            isActive(link.href) ? 'text-accent' : ''
                          }
                        >
                          {link.label}
                        </span>
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 transition-transform',
                            mobileProductsOpen && 'rotate-180'
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col pl-4">
                              {link.children.map((product) => (
                                <Link
                                  key={product.slug}
                                  href={product.href}
                                  className={cn(
                                    'py-2.5 text-sm font-heading transition-colors',
                                    pathname === product.href
                                      ? 'text-accent'
                                      : 'text-foreground-secondary hover:text-accent'
                                  )}
                                >
                                  {product.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'block py-3.5 text-base font-heading font-medium transition-colors',
                        isActive(link.href)
                          ? 'text-accent'
                          : 'text-foreground hover:text-accent'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-6"
              >
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-accent px-6 py-3.5 text-sm font-heading font-semibold text-accent-foreground transition-colors hover:bg-accent-dark"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
