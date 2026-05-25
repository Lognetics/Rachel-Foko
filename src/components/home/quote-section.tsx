'use client';

import { motion } from 'framer-motion';

export function QuoteSection() {
  const words = [
    'Leadership', 'is', 'not', 'about', 'position;', 'it', 'is', 'about',
    'impact,', 'transformation,', 'and', 'empowering', 'others', 'to', 'rise.',
  ];

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 aurora opacity-60" />
      <div className="grid-pattern absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-7xl sm:text-9xl gradient-text leading-none mb-8 select-none"
        >
          “
        </motion.div>

        <p className="font-display text-3xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {w === 'impact,' || w === 'transformation,' || w === 'rise.' ? (
                <span className="gradient-text">{w}</span>
              ) : w}
            </motion.span>
          ))}
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-12 flex items-center justify-center gap-4 text-[rgb(var(--muted))]"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-warm" />
          <span className="text-sm uppercase tracking-[0.4em]">Rachel Foko</span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-warm" />
        </motion.div>
      </div>
    </section>
  );
}
