'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/site/Container';
import SectionHeading from '@/components/site/SectionHeading';
import ButtonLink from '@/components/site/ButtonLink';
import ProductCard from '@/components/site/ProductCard';
import ProcessTimeline from '@/components/site/ProcessTimeline';
import CTA from '@/components/site/CTA';
import { FadeUp } from '@/components/site/Motion';
import { products } from '@/lib/data/products';
import { company } from '@/lib/data/company';
import { images } from '@/lib/data/images';
import { whyPrimeEnterprises } from '@/lib/data/why';
import { galleryItems } from '@/lib/data/gallery';

export default function HomeClient() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 6);
  const galleryPreview = galleryItems.slice(0, 6);

  return (
    <>
      {/* ===== HERO — full-bleed image with overlay ===== */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-foreground">
        {/* Background image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images.heroMain}
            alt="Industrial textile factory producing garments with precision"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/20" />
        </div>

        <Container className="relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="text-xs font-heading font-semibold uppercase tracking-[0.25em] text-accent">
              Garment Accessories · Labels · Printing · Packaging
            </span>
            <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.05] text-background md:text-5xl lg:text-6xl xl:text-7xl text-balance">
              Crafting the Details Behind Great Brands.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-background/70 md:text-lg text-pretty">
              Premium garment accessories, labels, printing and packaging
              solutions built around your brand.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink
                href="/products"
                variant="primary"
                size="large"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Explore Products
              </ButtonLink>
              <ButtonLink
                href="/contact"
                variant="outline"
                size="large"
                className="border-background/40 text-background hover:border-background hover:text-background"
              >
                Request a Quote
              </ButtonLink>
            </div>
          </motion.div>
        </Container>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-background/40 p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="h-2 w-1 rounded-full bg-background/60"
            />
          </div>
        </motion.div>
      </section>

      {/* ===== TRUST / STATS — clean strip ===== */}
      <section className="border-b border-border bg-background-secondary py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {company.stats.map((stat, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="flex flex-col">
                  <span className="font-heading text-2xl font-bold text-accent md:text-3xl lg:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 text-xs font-heading uppercase tracking-wider text-foreground-secondary">
                    {stat.label}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== ABOUT PREVIEW — image + short text ===== */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <FadeUp>
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images.aboutStory}
                  alt="Factory worker operating a sewing machine in a textile factory"
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div>
                <SectionHeading
                  eyebrow="About Prime Enterprises"
                  title="Your B2B manufacturing partner for garment branding"
                />
                <p className="mt-5 text-base leading-relaxed text-foreground-secondary text-pretty">
                  We produce the details that define garments — hang tags,
                  woven labels, leather patches, printed labels, heat transfers,
                  and custom packaging.
                </p>
                {/* Key strengths as compact items */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {['Quality', 'Customization', 'Reliable Production', 'B2B Support'].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 shrink-0 bg-accent" />
                      <span className="text-sm font-heading font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <ButtonLink
                    href="/about"
                    variant="outline"
                    icon={<ArrowRight className="h-4 w-4" />}
                  >
                    Discover Prime Enterprises
                  </ButtonLink>
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* ===== FEATURED PRODUCTS — large visual cards ===== */}
      <section className="border-y border-border bg-background-secondary py-20 md:py-28">
        <Container>
          <FadeUp>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Products"
                title="What we manufacture"
              />
              <Link
                href="/products"
                className="hidden shrink-0 items-center gap-1.5 text-sm font-heading font-semibold text-accent transition-colors hover:text-accent-dark md:flex"
              >
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
          <div className="mt-10 flex justify-center md:hidden">
            <ButtonLink href="/products" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
              View All Products
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* ===== WHY PRIME — editorial layout, not identical cards ===== */}
      <section className="py-20 md:py-28">
        <Container>
          <FadeUp>
            <SectionHeading
              eyebrow="Why Prime Enterprises"
              title="The difference is in the details"
              align="center"
              className="mb-16"
            />
          </FadeUp>
          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {whyPrimeEnterprises.map((item, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="group flex h-full flex-col gap-3 bg-background p-8 transition-colors hover:bg-background-secondary">
                  <span className="font-heading text-2xl font-bold text-accent/30 transition-colors group-hover:text-accent">
                    {item.number}
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

      {/* ===== MANUFACTURING PROCESS ===== */}
      <section className="border-y border-border bg-background-secondary py-20 md:py-28">
        <Container>
          <FadeUp>
            <SectionHeading
              eyebrow="Manufacturing Process"
              title="From requirement to dispatch"
              align="center"
              className="mb-16"
            />
          </FadeUp>
          <ProcessTimeline />
          <FadeUp delay={0.2}>
            <div className="mt-12 flex justify-center">
              <ButtonLink
                href="/manufacturing"
                variant="outline"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Learn More About Manufacturing
              </ButtonLink>
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* ===== GALLERY PREVIEW — asymmetric grid ===== */}
      <section className="py-20 md:py-28">
        <Container>
          <FadeUp>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Gallery"
                title="Inside our production"
              />
              <ButtonLink
                href="/gallery"
                variant="outline"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                View Full Gallery
              </ButtonLink>
            </div>
          </FadeUp>
          <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[260px] md:grid-cols-4">
            {galleryPreview.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group relative overflow-hidden bg-muted ${
                  item.span === 'large'
                    ? 'col-span-2 row-span-2'
                    : item.span === 'wide'
                    ? 'col-span-2'
                    : item.span === 'tall'
                    ? 'row-span-2'
                    : ''
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== FINAL CTA ===== */}
      <CTA
        title="Let's Build Your Brand's Next Detail."
        description="Tell us what you need. We'll help turn your specifications into a finished product."
        primaryLabel="Request a Quote"
        primaryHref="/contact"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
