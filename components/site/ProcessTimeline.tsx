'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { manufacturingProcess } from '@/lib/data/manufacturing';

export default function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Connecting line */}
      <div className="absolute left-0 right-0 top-[28px] hidden h-px bg-border lg:block" />

      <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-7 lg:gap-0">
        {manufacturingProcess.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="group relative border-b border-border pb-8 pt-0 sm:border-r sm:border-border sm:pr-6 sm:last:border-r-0 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-5 lg:last:pr-0"
          >
            {/* Number circle */}
            <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center bg-foreground font-heading text-lg font-bold text-background transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
              {step.step}
            </div>

            {/* Content */}
            <h3 className="font-heading text-base font-bold text-foreground md:text-lg">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">{step.description}</p>

            {/* Arrow between steps (desktop) */}
            {index < manufacturingProcess.length - 1 && (
              <ArrowRight className="absolute -right-3 top-5 hidden h-5 w-5 text-border lg:block" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
