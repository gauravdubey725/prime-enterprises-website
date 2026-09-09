import Container from './Container';
import ButtonLink from './ButtonLink';
import { ArrowRight } from 'lucide-react';
import { FadeUp } from './Motion';
import { type ReactNode } from 'react';

interface CTAProps {
  title: ReactNode;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTA({
  title,
  description,
  primaryLabel = 'Request a Quote',
  primaryHref = '/contact',
  secondaryLabel = 'Contact Us',
  secondaryHref = '/contact',
}: CTAProps) {
  return (
    <section className="relative overflow-hidden bg-accent text-accent-foreground">
      {/* Decorative large text */}
      <div className="absolute -right-4 top-0 select-none font-heading text-[12rem] font-bold leading-none text-accent-foreground/5 md:text-[18rem]">
        PE
      </div>

      <Container className="relative py-24 md:py-36">
        <FadeUp>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.5fr] lg:items-end lg:gap-20">
            <div>
              <span className="inline-flex items-center gap-3 text-xs font-heading font-semibold uppercase tracking-[0.25em] text-accent-foreground/70">
                <span className="h-px w-10 bg-accent-foreground/50" />
                Start a conversation
              </span>
              <h2 className="mt-7 max-w-4xl font-heading text-5xl font-bold leading-[0.88] tracking-[-0.05em] md:text-7xl">
                {title}
              </h2>
            </div>
            <div>
              <p className="max-w-sm text-base leading-relaxed text-accent-foreground/70 md:text-lg">{description}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
                <ButtonLink
                  href={primaryHref}
                  variant="secondary"
                  size="large"
                  icon={<ArrowRight className="h-4 w-4" />}
                  className="bg-foreground text-background hover:bg-foreground/90"
                >
                  {primaryLabel}
                </ButtonLink>
                <ButtonLink
                  href={secondaryHref}
                  variant="outline"
                  size="large"
                  className="border-accent-foreground/30 text-accent-foreground hover:border-accent-foreground hover:text-accent-foreground"
                >
                  {secondaryLabel}
                </ButtonLink>
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
