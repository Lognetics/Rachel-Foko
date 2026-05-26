'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { PRESS } from '@/lib/content';
import { Section } from '@/components/section';
import { cn } from '@/lib/utils';

export function NewsSection() {
  return (
    <Section variant="light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="Latest News & Publications"
            title={<>In the <span className="italic-accent">press</span>.</>}
            description="Featured interviews, articles, award announcements, and global media appearances spotlighting Rachel's contributions to innovation, governance and entrepreneurship."
          />
          <Link
            href="/media"
            className="group inline-flex items-center gap-2 text-sm font-medium shrink-0 text-ink-950"
          >
            <span className="border-b border-gold-warm pb-1">View all media</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {PRESS.slice(0, 6).map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                'group relative rounded-3xl bg-cream-100 p-8 lift overflow-hidden border border-blush-soft/60 shadow-[0_15px_50px_-20px_rgba(91,75,138,0.2)]',
                i === 0 && 'lg:row-span-2 lg:col-start-1 bg-gradient-to-br from-blush-soft via-cream-100 to-white'
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-rose-warm/0 group-hover:to-rose-warm/15 transition-all duration-500" />
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br from-rose-warm/0 to-gold-warm/0 group-hover:from-rose-warm/30 group-hover:to-gold-warm/20 blur-2xl transition-all duration-500" />

              <div className="relative flex items-center justify-between mb-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold-warm">{item.tag}</span>
                <span className="text-xs text-ink-500">{item.date}</span>
              </div>

              <div className="relative">
                <div className="text-xs text-ink-500 mb-3 font-medium">{item.source}</div>
                <h3 className={cn(
                  'font-display leading-tight text-ink-950 group-hover:text-gold-deep transition',
                  i === 0 ? 'text-3xl lg:text-4xl' : 'text-xl'
                )}>
                  {item.title}
                </h3>
              </div>

              <div className="relative mt-8 inline-flex items-center gap-2 text-xs font-medium text-ink-700 opacity-70 group-hover:opacity-100 transition">
                Read story
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
