import type { Metadata } from 'next';
import Container from '@/components/site/Container';
import SectionHeading from '@/components/site/SectionHeading';
import PageHero from '@/components/site/PageHero';
import CTA from '@/components/site/CTA';
import { FadeUp } from '@/components/site/Motion';
import { printingServices } from '@/lib/data/manufacturing';
import { images } from '@/lib/data/images';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Printing Solutions',
  description:
    'Offset printing, digital printing, screen printing, and specialty custom printing solutions for garment accessories, labels, and packaging.',
};

export default function PrintingPage() {
  return (
    <>
      <PageHero
        eyebrow="Printing Solutions"
        title="Printing capabilities for every requirement"
        description="From high-volume offset printing to flexible digital and durable screen printing — we provide printing solutions for hang tags, labels, packaging, and custom applications."
        image={images.printingPress}
      />

      {/* Printing Services */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-col gap-16 md:gap-20">
            {printingServices.map((service, i) => (
              <FadeUp key={i}>
                <div
                  className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center ${
                    i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Content */}
                  <div>
                    <span className="font-heading text-5xl font-bold text-accent/15">
                      0{i + 1}
                    </span>
                    <h2 className="mt-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-foreground-secondary md:text-lg">
                      {service.longDescription}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm leading-relaxed text-foreground-secondary"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTA
        title="Discuss Your Printing Requirement"
        description="Tell us about your printing project — volume, materials, finishes, and timeline. We'll recommend the right approach and provide a quote."
        primaryLabel="Request a Quote"
        primaryHref="/contact"
        secondaryLabel="View Products"
        secondaryHref="/products"
      />
    </>
  );
}
