import Container from './Container';
import { FadeUp } from './Motion';
import ButtonLink from './ButtonLink';
import { ArrowRight } from 'lucide-react';
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
    <section className="bg-foreground py-20 md:py-28">
      <Container className="relative">
        <FadeUp className="flex flex-col items-center text-center">
          <h2 className="max-w-3xl font-heading text-3xl font-bold leading-[1.1] text-background md:text-4xl lg:text-5xl text-balance">
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/70 md:text-lg text-pretty">
            {description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink
              href={primaryHref}
              variant="primary"
              size="large"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              {primaryLabel}
            </ButtonLink>
            <ButtonLink
              href={secondaryHref}
              variant="outline"
              size="large"
              className="border-background/30 text-background hover:border-background hover:text-background"
            >
              {secondaryLabel}
            </ButtonLink>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
