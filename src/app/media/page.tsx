'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { Section } from '@/components/section';
import { CTABanner } from '@/components/home/cta-banner';
import { PRESS } from '@/lib/content';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const CATEGORIES = ['All', 'Feature', 'Award', 'Interview', 'Press Release', 'Case Study', 'Forum'];

export default function MediaPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? PRESS : PRESS.filter((p) => p.tag === active);

  return (
    <>
      <PageHeader
        eyebrow="Media & Press"
        title="Media Features & Publications"
        intro="Rachel Foko's thought leadership and achievements have been featured across multiple media platforms — her insights on innovation, leadership, governance, and digital transformation continue to inspire audiences globally."
        image="/images/rachel/rachel-event-3.jpg"
        overlay="strong"
      />

      {/* Filter — cream */}
      <Section variant="cream" className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  'rounded-full px-5 py-2 text-xs uppercase tracking-[0.2em] transition-all',
                  active === c
                    ? 'bg-gradient-to-r from-lavender-night to-ink-900 text-white shadow-lg shadow-lavender-deep/20'
                    : 'bg-white text-ink-700 hover:bg-blush-soft border border-blush-soft/60'
                )}
              >
                {c}
              </button>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* Cards — light */}
      <Section variant="light" className="pt-12 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <motion.article
                layout
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className={cn(
                  'group relative rounded-3xl bg-cream-100 p-8 lift overflow-hidden border border-blush-soft/60 shadow-[0_15px_50px_-20px_rgba(91,75,138,0.18)]',
                  i === 0 && active === 'All' && 'lg:row-span-2 lg:col-start-1 bg-gradient-to-br from-blush-soft via-cream-100 to-white'
                )}
              >
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br from-rose-warm/0 to-gold-warm/0 group-hover:from-rose-warm/30 group-hover:to-gold-warm/20 blur-2xl transition-all duration-500" />
                <div className="relative flex items-center justify-between mb-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold-warm">{item.tag}</span>
                  <span className="text-xs text-ink-500">{item.date}</span>
                </div>
                <div className="relative">
                  <div className="text-xs text-ink-500 mb-3 font-medium">{item.source}</div>
                  <h3 className={cn(
                    'font-display leading-tight text-ink-950 group-hover:text-gold-deep transition',
                    i === 0 && active === 'All' ? 'text-3xl lg:text-4xl' : 'text-xl'
                  )}>
                    {item.title}
                  </h3>
                </div>
                <div className="relative mt-8 inline-flex items-center gap-2 text-xs font-medium text-ink-700 opacity-70 group-hover:opacity-100 transition">
                  Read full story
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
