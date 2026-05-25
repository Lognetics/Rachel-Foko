'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Props = {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  center?: boolean;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, center, className }: Props) {
  return (
    <div className={cn(center && 'text-center mx-auto', 'max-w-3xl', className)}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))] mb-4"
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold-warm" />
          {eyebrow}
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold-warm" />
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg leading-relaxed text-[rgb(var(--muted))]"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
