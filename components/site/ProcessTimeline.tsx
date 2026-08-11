'use client';

import { motion } from 'framer-motion';
import { manufacturingProcess } from '@/lib/data/manufacturing';

export default function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Desktop: horizontal 7-column grid with connecting line */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-7 lg:gap-x-5">
        {manufacturingProcess.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative"
          >
            <div className="flex h-full flex-col gap-4 border-l-2 border-border pl-5 lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-12">
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-accent font-heading text-base font-bold text-accent-foreground lg:h-14 lg:w-14 lg:text-lg">
                  {step.step}
                </span>
                <h3 className="font-heading text-base font-bold text-foreground lg:text-lg">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-foreground-secondary lg:text-[0.95rem]">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
