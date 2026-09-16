import type { Metadata } from 'next';
import Container from '@/components/site/Container';
import SectionHeading from '@/components/site/SectionHeading';
import ButtonLink from '@/components/site/ButtonLink';
import PageHero from '@/components/site/PageHero';
import CTA from '@/components/site/CTA';
import { FadeUp } from '@/components/site/Motion';
import { images } from '@/lib/data/images';
import { capabilities, whyClientsWorkWithUs } from '@/lib/data/why';
import { ArrowRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Prime Enterprises',
  description:
    'Learn about Prime Enterprises — a B2B manufacturer of garment accessories, labels, printing and packaging solutions for fashion brands and apparel businesses.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A manufacturing partner built on quality and trust"
        description="Prime Enterprises is a B2B manufacturer and supplier of garment accessories, garment branding products, labels, tags, printing solutions and packaging solutions — serving fashion brands, clothing manufacturers, and apparel businesses."
        image={images.heroAlt}
      />

      {/* Company Introduction */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <FadeUp>
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images.factoryWorkers}
                  alt="Factory workers operating sewing machines in a textile factory"
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <SectionHeading
                eyebrow="Who We Are"
                title="Garment branding, manufactured with precision"
                description="We produce the details that define garments — hang tags, woven labels, leather patches, printed labels, heat transfers, and custom packaging. Our role is to manufacture these components to your exact specifications, so your brand presentation is consistent, professional, and reliable across every production run."
              />
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="border-y border-border bg-background-secondary py-20 md:py-28">
        <Container>
          <FadeUp>
            <SectionHeading
              eyebrow="Our Story"
              title="Built to serve the garment industry"
              align="center"
              className="mb-10"
            />
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="space-y-6 text-center">
              <p className="text-base leading-relaxed text-foreground-secondary md:text-lg text-pretty">
                Prime Enterprises was established to address a clear need in the
                garment industry — a reliable, quality-focused manufacturer that
                could supply the full range of garment accessories and branding
                products under one roof.
              </p>
              <p className="text-base leading-relaxed text-foreground-secondary md:text-lg text-pretty">
                Over the years, we have grown our capabilities across woven
                labels, printed labels, hang tags, leather patches, heat
                transfers, and packaging — building long-term relationships with
                fashion brands, clothing manufacturers, and apparel exporters
                who value consistency and clear communication.
              </p>
              <p className="text-base leading-relaxed text-foreground-secondary md:text-lg text-pretty">
                Today, we serve businesses across India with a structured
                production process, in-house design and quality control, and a
                commitment to delivering products that match approved samples —
                batch after batch.
              </p>
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-28">
        <Container>
          <FadeUp>
            <SectionHeading
              eyebrow="What We Do"
              title="Six product categories, one manufacturing partner"
              description="From labels and tags to printing and packaging — we cover the full spectrum of garment accessories and branding products."
              align="center"
              className="mb-16"
            />
          </FadeUp>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Hang Tags',
                desc: 'Custom-designed tags in a range of papers, finishes, and die-cut shapes.',
                image: images.hangTagsFeatured,
                href: '/products/hang-tags',
              },
              {
                title: 'Woven Labels',
                desc: 'High-density damask, satin, and taffeta labels with fine detail.',
                image: images.wovenLabelsApproved,
                href: '/products/woven-labels',
              },
              {
                title: 'Leather Labels',
                desc: 'Genuine and PU leather patches with debossing and foil stamping.',
                image: images.leatherPatchDenim,
                href: '/products/leather-labels',
              },
              {
                title: 'Printed Labels',
                desc: 'Care labels, size labels, and brand identifiers on satin and polyester.',
                image: images.printedLabelsApproved,
                href: '/products/printed-labels',
              },
              {
                title: 'Heat Transfer',
                desc: 'Tagless, seamless branding for activewear and innerwear.',
                image: images.heatTransferPress,
                href: '/products/heat-transfer',
              },
              {
                title: 'Packaging',
                desc: 'Custom poly bags, boxes, mailers, and branded inserts.',
                image: images.packagingApproved,
                href: '/products/packaging',
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="group">
                  <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        {item.desc}
                      </p>
                    </div>
                    <ButtonLink
                      href={item.href}
                      variant="ghost"
                      className="shrink-0 text-accent"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </ButtonLink>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="border-y border-border bg-background-secondary py-20 md:py-28">
        <Container>
          <FadeUp>
            <SectionHeading
              eyebrow="Capabilities"
              title="What we can do for your brand"
              align="center"
              className="mb-16"
            />
          </FadeUp>
          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="flex h-full flex-col gap-3 bg-background p-8">
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground-secondary">
                    {cap.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <FadeUp>
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images.inspectionQuality}
                  alt="Factory worker inspecting textiles for quality control"
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div>
                <SectionHeading
                  eyebrow="Quality Commitment"
                  title="Every product inspected against your approved sample"
                />
                <ul className="mt-8 space-y-4">
                  {[
                    'Raw material inspection before production begins',
                    'In-process quality checks at each manufacturing stage',
                    'Pre-dispatch inspection against approved samples',
                    'Colour, dimension, and finish consistency across batches',
                    'Documentation and traceability for every order',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed text-foreground-secondary md:text-base"
                    >
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* Why Clients Work With Us */}
      <section className="border-t border-border bg-background-secondary py-20 md:py-28">
        <Container>
          <FadeUp>
            <SectionHeading
              eyebrow="Why Clients Work With Us"
              title="Partnership, not just supply"
              align="center"
              className="mb-16"
            />
          </FadeUp>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {whyClientsWorkWithUs.map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="flex flex-col gap-3 border-l-2 border-accent pl-6">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground-secondary md:text-base">
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTA
        title="Let's build something together."
        description="Whether you need a single product category or a full range of garment accessories, we're ready to help."
        primaryLabel="Request a Quote"
        primaryHref="/contact"
        secondaryLabel="View Products"
        secondaryHref="/products"
      />
    </>
  );
}
