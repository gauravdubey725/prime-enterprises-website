'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Clock, ArrowRight, Check, Loader2 } from 'lucide-react';
import Container from '@/components/site/Container';
import PageHero from '@/components/site/PageHero';
import { FadeUp } from '@/components/site/Motion';
import { company } from '@/lib/data/company';
import { products } from '@/lib/data/products';

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  product: '',
  quantity: '',
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      next.name = 'Please enter your name';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Please enter a valid email address';
    if (!form.message.trim() || form.message.trim().length < 5)
      next.message = 'Please tell us what you need';
    if (form.quantity && !/^\d[\d,]*$/.test(form.quantity.trim()))
      next.quantity = 'Please enter a valid quantity (numbers only)';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Frontend-only submission — connect a form service (Formspree, Netlify Forms, Supabase, etc.) here
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass = (field: keyof FormState) =>
    `mt-2 w-full border bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors focus:border-accent ${
      errors[field] ? 'border-destructive' : 'border-input'
    }`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a Quote"
        description="Tell us what you need. We'll get back to you with samples, pricing, and production timelines."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left: Contact Info */}
            <FadeUp className="lg:col-span-2">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Get in touch
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                    Share your product requirements and we'll guide you through
                    sampling, pricing, and production.
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent/10">
                      <Phone className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-heading uppercase tracking-wider text-foreground-secondary">
                        Phone
                      </p>
                      <a href={`tel:${company.contact.phone}`} className="mt-1 block text-sm font-medium text-foreground transition-colors hover:text-accent">
                        {company.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent/10">
                      <Mail className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-heading uppercase tracking-wider text-foreground-secondary">
                        Email
                      </p>
                      <a href={`mailto:${company.contact.email}`} className="mt-1 block text-sm font-medium text-foreground transition-colors hover:text-accent break-all">
                        {company.contact.emailDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent/10">
                      <MapPin className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-heading uppercase tracking-wider text-foreground-secondary">
                        Address
                      </p>
                      <p className="mt-1 text-sm font-medium leading-relaxed text-foreground">
                        {company.contact.addressLine1}
                        {company.contact.addressLine2 && <><br />{company.contact.addressLine2}</>}
                        {company.contact.addressLine3 && <><br />{company.contact.addressLine3}</>}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent/10">
                      <Clock className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-heading uppercase tracking-wider text-foreground-secondary">
                        Business Hours
                      </p>
                      <p className="mt-1 text-sm font-medium text-foreground">
                        {company.contact.hours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                {company.contact.whatsapp ? (
                  <a
                    href={`https://wa.me/${company.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-foreground px-5 py-3.5 text-sm font-heading font-semibold text-background transition-colors hover:bg-foreground/90"
                  >
                  <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                ) : (
                  <p className="text-sm text-foreground-secondary">WhatsApp details available on request.</p>
                )}

                {/* Google Maps embed */}
                <div className="aspect-[4/3] w-full overflow-hidden border border-border bg-muted">
                  <iframe
                    src={company.contact.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Prime Enterprises Location"
                  />
                </div>
              </div>
            </FadeUp>

            {/* Right: Quote Form */}
            <FadeUp delay={0.1} className="lg:col-span-3">
              <div className="border border-border bg-background-secondary p-8 md:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                      <Check className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="mt-6 font-heading text-2xl font-bold text-foreground">
                      Enquiry Submitted
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground-secondary">
                      Thank you for sharing your requirements. This enquiry form is currently prepared for your preferred email or CRM connection; no message has been sent yet.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm(initialForm);
                      }}
                      className="mt-8 text-sm font-heading font-semibold text-accent transition-colors hover:text-accent-dark"
                    >
                      Submit another enquiry
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="font-heading text-2xl font-bold text-foreground">
                      Request a Quote
                    </h2>
                    <p className="mt-2 text-sm text-foreground-secondary">
                      Fill in the details below and we'll get back to you.
                    </p>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="block text-xs font-heading font-semibold uppercase tracking-wider text-foreground-secondary">
                            Name *
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            className={inputClass('name')}
                            placeholder="Your name"
                          />
                          {errors.name && (
                            <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-xs font-heading font-semibold uppercase tracking-wider text-foreground-secondary">
                            Company
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={form.company}
                            onChange={handleChange}
                            className={inputClass('company')}
                            placeholder="Company name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="email" className="block text-xs font-heading font-semibold uppercase tracking-wider text-foreground-secondary">
                            Email *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            className={inputClass('email')}
                            placeholder="you@company.com"
                          />
                          {errors.email && (
                            <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-xs font-heading font-semibold uppercase tracking-wider text-foreground-secondary">
                            Phone
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            className={inputClass('phone')}
                            placeholder="Phone number"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="product" className="block text-xs font-heading font-semibold uppercase tracking-wider text-foreground-secondary">
                            Product Required
                          </label>
                          <select
                            id="product"
                            name="product"
                            value={form.product}
                            onChange={handleChange}
                            className={inputClass('product')}
                          >
                            <option value="" disabled>Select a product</option>
                            {products.map((p) => (
                              <option key={p.slug} value={p.name}>
                                {p.name}
                              </option>
                            ))}
                            <option value="other">Other / Not sure</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="quantity" className="block text-xs font-heading font-semibold uppercase tracking-wider text-foreground-secondary">
                            Quantity
                          </label>
                          <input
                            id="quantity"
                            name="quantity"
                            type="text"
                            value={form.quantity}
                            onChange={handleChange}
                            className={inputClass('quantity')}
                            placeholder="e.g. 10,000 units"
                          />
                          {errors.quantity && (
                            <p className="mt-1 text-xs text-destructive">{errors.quantity}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-heading font-semibold uppercase tracking-wider text-foreground-secondary">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          className={inputClass('message')}
                          placeholder="Tell us about your requirements — materials, finishes, timeline, etc."
                        />
                        {errors.message && (
                          <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex w-full items-center justify-center gap-2 bg-accent px-6 py-4 text-sm font-heading font-semibold text-accent-foreground transition-all hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Enquiry
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>
    </>
  );
}
