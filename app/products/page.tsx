import type { Metadata } from 'next';
import Container from '@/components/site/Container';
import SectionHeading from '@/components/site/SectionHeading';
import ProductCard from '@/components/site/ProductCard';
import PageHero from '@/components/site/PageHero';
import CTA from '@/components/site/CTA';
import { FadeUp } from '@/components/site/Motion';
import { products } from '@/lib/data/products';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore our full range of garment accessories — hang tags, woven labels, leather labels, printed labels, heat transfer labels, and packaging solutions.',
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Catalogue"
        title="Garment accessories, labels & packaging"
        description="Six core product categories, each manufactured to your specifications. Explore our range and request a quote for the products that fit your brand."
        image={products[0].image}
      />

      {/* Product Grid */}
      <section className="py-20 md:py-28">
        <Container>
          <FadeUp>
            <SectionHeading
              eyebrow="Categories"
              title="Browse by category"
              description="Each category links to a detailed product page with customization options, materials, applications, and specifications."
              className="mb-16"
            />
          </FadeUp>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {products.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities strip */}
      <section className="border-y border-border bg-background-secondary py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: 'Custom Manufacturing', value: 'Every order to spec' },
              { label: 'Sampling', value: 'Before bulk production' },
              { label: 'Quality Control', value: 'Multi-stage inspection' },
              { label: 'Pan-India Delivery', value: 'Reliable logistics' },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="flex flex-col gap-1">
                  <span className="font-heading text-lg font-bold text-foreground">
                    {item.value}
                  </span>
                  <span className="text-xs font-heading uppercase tracking-wider text-foreground-secondary">
                    {item.label}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Need a custom product?"
        description="If you need something outside our standard categories, our team can work with you to develop a solution. Tell us your requirements."
        primaryLabel="Request a Quote"
        primaryHref="/contact"
        secondaryLabel="View Manufacturing"
        secondaryHref="/manufacturing"
      />
    </>
  );
}
