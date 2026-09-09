'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import Container from '@/components/site/Container';
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

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomeClient() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 6);
  const galleryPreview = galleryItems.slice(0, 8);

  return (
    <>
      {/* ===== HERO — full-bleed image, asymmetric content overlay ===== */}
      <section className="relative flex min-h-[100vh] items-end overflow-hidden bg-foreground">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images.heroMain} alt="Industrial textile factory producing garments with precision" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-foreground/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent" />
        </div>

        <Container className="relative z-10 pb-16 pt-32 md:pb-24 md:pt-40">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }} className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3 text-xs font-heading font-semibold uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-12 bg-accent" />
              Garment Accessories · Labels · Printing · Packaging
            </div>
            <h1 className="font-heading text-[clamp(2.8rem,9vw,8rem)] font-bold leading-[0.85] tracking-[-0.06em] text-background">
              The details<br />
              <span className="text-accent">behind</span> the brand.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-background/70 md:text-lg">
              Premium garment accessories, labels, printing and packaging solutions built around your brand.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/products" variant="primary" size="large" icon={<ArrowRight className="h-4 w-4" />}>Explore Products</ButtonLink>
              <ButtonLink href="/contact" variant="outline" size="large" className="border-background/30 text-background hover:border-background hover:text-background">Request a Quote</ButtonLink>
            </div>
          </motion.div>
        </Container>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }} className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.25em] text-background/40 lg:flex">
          <ArrowDown className="h-4 w-4 text-accent" /> Scroll
        </motion.div>
      </section>

      {/* ===== STATS — horizontal band with large numbers ===== */}
      <section className="border-b border-border bg-background-secondary">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-border md:grid-cols-4">
            {company.stats.map((stat, index) => (
              <FadeUp key={stat.label} delay={index * 0.08}>
                <div className="px-4 py-8 first:pl-0 last:pr-0 md:px-8 md:py-12">
                  <span className="block font-heading text-2xl font-bold tracking-tight text-foreground md:text-4xl">{stat.value}</span>
                  <span className="mt-2 block text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-foreground-secondary md:text-xs">{stat.label}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== ABOUT — editorial split with overlapping image ===== */}
      <section className="overflow-hidden py-24 md:py-36">
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <FadeUp>
              <div className="relative mx-auto max-w-md lg:mx-0">
                <div className="absolute -bottom-8 -left-8 h-40 w-40 bg-accent/10" />
                <div className="relative aspect-[0.82] overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={images.aboutStory} alt="Factory worker operating a sewing machine in a textile factory" className="h-full w-full object-cover" />
                </div>
                <div className="absolute -right-8 top-10 hidden w-44 bg-foreground p-5 text-background sm:block">
                  <span className="font-heading text-4xl font-bold text-accent">01</span>
                  <p className="mt-3 text-xs leading-relaxed text-background/60">One partner for every garment detail.</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div>
                <span className="text-xs font-heading font-semibold uppercase tracking-[0.25em] text-accent">About Prime Enterprises</span>
                <h2 className="mt-6 max-w-2xl font-heading text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-foreground md:text-6xl">Your brand is built in the details.</h2>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground-secondary md:text-lg">We produce the details that define garments — hang tags, woven labels, leather patches, printed labels, heat transfers, and custom packaging.</p>
                <div className="mt-10 grid max-w-lg grid-cols-2 gap-y-5 border-t border-border pt-6">
                  {['Quality', 'Customization', 'Reliable Production', 'B2B Support'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-heading font-semibold text-foreground">
                      <span className="h-2 w-2 bg-accent" />{item}
                    </div>
                  ))}
                </div>
                <div className="mt-10"><ButtonLink href="/about" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>Discover Prime Enterprises</ButtonLink></div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* ===== PRODUCTS — editorial list with large numbers ===== */}
      <section className="relative overflow-hidden bg-foreground py-24 text-background md:py-36">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-heading font-semibold uppercase tracking-[0.25em] text-accent">The collection</span>
              <h2 className="mt-5 max-w-2xl font-heading text-4xl font-bold leading-[0.95] tracking-[-0.04em] md:text-6xl">What we make<br /><span className="text-background/35">makes a difference.</span></h2>
            </div>
            <Link href="/products" className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-accent transition-transform hover:translate-x-1">View all products <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-16">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} editorial />
            ))}
          </div>
        </Container>
      </section>

      {/* ===== WHY PRIME — bold accent color block ===== */}
      <section className="bg-accent py-24 text-accent-foreground md:py-36">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <FadeUp>
              <div className="lg:sticky lg:top-32">
                <span className="text-xs font-heading font-semibold uppercase tracking-[0.25em] text-accent-foreground/70">Why Prime Enterprises</span>
                <h2 className="mt-6 font-heading text-5xl font-bold leading-[0.88] tracking-[-0.05em] md:text-7xl">The difference is in the details.</h2>
                <p className="mt-8 max-w-sm text-base leading-relaxed text-accent-foreground/70">A dependable manufacturing partner from the first enquiry to the final dispatch.</p>
              </div>
            </FadeUp>
            <div className="border-t border-accent-foreground/20">
              {whyPrimeEnterprises.map((item, index) => (
                <FadeUp key={item.number} delay={index * 0.05}>
                  <div className="group grid grid-cols-[48px_1fr] gap-5 border-b border-accent-foreground/20 py-6 transition-colors hover:bg-accent-foreground/5 md:grid-cols-[72px_1fr] md:gap-8 md:py-8">
                    <span className="font-heading text-sm font-bold text-accent-foreground/60">{item.number}</span>
                    <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-8">
                      <h3 className="font-heading text-xl font-bold md:text-2xl">{item.title}</h3>
                      <p className="max-w-md text-sm leading-relaxed text-accent-foreground/70">{item.description}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== MANUFACTURING — industrial process with large imagery ===== */}
      <section className="overflow-hidden py-24 md:py-36">
        <Container>
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-heading font-semibold uppercase tracking-[0.25em] text-accent">Manufacturing process</span>
              <h2 className="mt-5 max-w-2xl font-heading text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-foreground md:text-6xl">From requirement<br />to dispatch.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-foreground-secondary">A structured workflow designed for B2B reliability, with quality control at every stage.</p>
          </div>
          <ProcessTimeline />
          <div className="mt-14"><ButtonLink href="/manufacturing" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>Learn More About Manufacturing</ButtonLink></div>
        </Container>
      </section>

      {/* ===== GALLERY — curated masonry with varied sizes ===== */}
      <section className="py-24 md:py-36">
        <Container>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-heading font-semibold uppercase tracking-[0.25em] text-accent">Inside our production</span>
              <h2 className="mt-5 font-heading text-4xl font-bold leading-none tracking-[-0.04em] text-foreground md:text-6xl">Made to be seen.</h2>
            </div>
            <ButtonLink href="/gallery" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>View Full Gallery</ButtonLink>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {galleryPreview.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative overflow-hidden bg-muted ${
                  index === 0 ? 'col-span-2 row-span-2 aspect-square md:col-span-2 md:row-span-2' : 
                  index === 3 ? 'row-span-2 aspect-[0.72] md:aspect-auto' : 
                  index === 6 ? 'col-span-2 aspect-[2/1]' : 'aspect-square'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 translate-y-2 text-xs font-heading font-semibold uppercase tracking-wider text-background opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">{item.category}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTA title="Let's build something together." description="Tell us what you need. We'll help turn your specifications into a finished product." primaryLabel="Request a Quote" primaryHref="/contact" secondaryLabel="View Products" secondaryHref="/products" />
    </>
  );
}
