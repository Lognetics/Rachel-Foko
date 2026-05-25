'use client';

import { motion } from 'framer-motion';

type Props = {
  eyebrow?: string;
  title: string;
  intro: string;
};

export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden aurora noise">
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-[rgb(var(--muted))] mb-6"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-warm" />
            {eyebrow}
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-warm" />
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight"
        >
          {title.split(' ').map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 text-lg sm:text-xl leading-relaxed text-[rgb(var(--muted))] max-w-3xl mx-auto"
        >
          {intro}
        </motion.p>
      </div>
    </section>
  );
}
