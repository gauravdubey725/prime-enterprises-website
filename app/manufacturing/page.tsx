import type { Metadata } from 'next';
import Container from '@/components/site/Container';
import SectionHeading from '@/components/site/SectionHeading';
import PageHero from '@/components/site/PageHero';
import ProcessTimeline from '@/components/site/ProcessTimeline';
import CTA from '@/components/site/CTA';
import { FadeUp } from '@/components/site/Motion';
import { images } from '@/lib/data/images';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Manufacturing',
  description:
    'Inside the Prime Enterprises manufacturing process — production, quality control, customization, packaging, and dispatch for garment accessories.',
};

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title="Inside our production process"
        description="A structured manufacturing workflow designed for B2B reliability — from requirement gathering to dispatch, with quality control at every stage."
        image={images.factorySewingMachines}
      />

      {/* Overview */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <FadeUp>
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images.factorySewing}
                  alt="Workers sewing textiles in an Indian factory"
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <SectionHeading
                eyebrow="Manufacturing Overview"
                title="In-house production across six product categories"
                description="Our manufacturing facility produces woven labels, printed labels, hang tags, leather patches, heat transfers, and packaging — all under one roof. This allows us to maintain quality control at every stage, offer custom finishes without external dependencies, and ensure consistent results across repeat orders."
              />
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* Production Process */}
      <section className="border-y border-border bg-background-secondary py-20 md:py-28">
        <Container>
          <FadeUp>
            <SectionHeading
              eyebrow="Production Process"
              title="Seven stages, zero shortcuts"
              description="Every order moves through the same structured process — ensuring consistency, traceability, and quality at every step."
              align="center"
              className="mb-16"
            />
          </FadeUp>
          <ProcessTimeline />
        </Container>
      </section>

      {/* Quality Control */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <FadeUp delay={0.1}>
              <div className="lg:order-2">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={images.inspectionLabels}
                    alt="Female textile worker inspecting labels in a factory"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </FadeUp>
            <FadeUp>
              <div>
                <SectionHeading
                  eyebrow="Quality Control"
                  title="Multi-stage inspection, every order"
                />
                <ul className="mt-8 space-y-4">
                  {[
                    'Raw material verification before production begins',
                    'In-process checks during weaving, printing, and finishing',
                    'Colour matching against approved samples and brand guidelines',
                    'Dimensional accuracy and edge-finish inspection',
                    'Final pre-dispatch quality audit with documentation',
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

      {/* Customization */}
      <section className="border-y border-border bg-background-secondary py-20 md:py-28">
        <Container>
          <FadeUp>
            <SectionHeading
              eyebrow="Customization"
              title="Every detail, tailored to your brand"
              description="Customization is not an add-on — it is the core of what we do. From material and finish to size, shape, and packaging, every element is produced to your specification."
              align="center"
              className="mb-16"
            />
          </FadeUp>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {[
              {
                title: 'Materials',
                desc: 'Choose from a range of papers, yarns, leathers, films, and packaging materials — including eco-friendly and recycled options.',
              },
              {
                title: 'Finishes',
                desc: 'Foil stamping, embossing, debossing, spot UV, lamination, and speciality finishes applied in-house.',
              },
              {
                title: 'Sizes & Shapes',
                desc: 'Custom die-cut shapes, specific widths, and exact dimensions — produced to your technical drawings.',
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="flex h-full flex-col gap-4 border border-border bg-background p-8 md:p-10">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground-secondary md:text-base">
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Packaging & Dispatch */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <FadeUp>
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images.packagingShipping}
                  alt="Cardboard boxes ready for shipping"
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div>
                <SectionHeading
                  eyebrow="Packaging & Dispatch"
                  title="Counted, sorted, and shipped to your requirements"
                />
                <ul className="mt-8 space-y-4">
                  {[
                    'Products counted and bundled to your specified quantities',
                    'Custom labelling and barcoding for easy receiving',
                    'Protective packaging to prevent damage in transit',
                    'Dispatch through our pan-India logistics network',
                    'Tracking and delivery confirmation for every shipment',
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

      <CTA
        title="Ready to start production?"
        description="Share your specifications with us. We'll guide you through sampling, production, and delivery."
        primaryLabel="Request a Quote"
        primaryHref="/contact"
        secondaryLabel="View Products"
        secondaryHref="/products"
      />
    </>
  );
}
