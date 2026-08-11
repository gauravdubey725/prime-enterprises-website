import Link from 'next/link';
import Container from './Container';
import { company } from '@/lib/data/company';
import { footerNav } from '@/lib/data/navigation';
import { Instagram, Linkedin, Facebook, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-foreground">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-heading text-xl font-bold tracking-tight text-background"
            >
              <span className="text-accent">PRIME</span> ENTERPRISES
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/60">
              {company.shortDescription}
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  {company.contact.addressLine1}
                  {company.contact.addressLine2 && <><br />{company.contact.addressLine2}</>}
                  {company.contact.addressLine3 && <><br />{company.contact.addressLine3}</>}
                </span>
              </div>
              <a href={`tel:${company.contact.phone}`} className="flex items-center gap-3 text-sm text-background/70 transition-colors hover:text-accent">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span>{company.contact.phoneDisplay}</span>
              </a>
              <a href={`mailto:${company.contact.email}`} className="flex items-center gap-3 text-sm text-background/70 transition-colors hover:text-accent">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <span>{company.contact.emailDisplay}</span>
              </a>
            </div>
            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Instagram, href: company.social.instagram, label: 'Instagram' },
                { icon: Linkedin, href: company.social.linkedin, label: 'LinkedIn' },
                { icon: Facebook, href: company.social.facebook, label: 'Facebook' },
                { icon: MessageCircle, href: company.social.whatsapp, label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center border border-background/20 text-background/60 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          {footerNav.map((section) => (
            <div key={section.title}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-background">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/60 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="text-xs text-background/50">
            {company.tagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}
