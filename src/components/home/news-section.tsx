'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { PRESS } from '@/lib/content';

export function NewsSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="Latest News & Publications"
            title={<>In the <span className="gradient-text">press</span>.</>}
            description="Featured interviews, articles, award announcements, and global media appearances spotlighting Rachel's contributions to innovation, governance and entrepreneurship."
          />
          <Link
            href="/media"
            className="group inline-flex items-center gap-2 text-sm font-medium shrink-0"
          >
            <span className="border-b border-current pb-1">View all media</span>
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
              className={`group relative rounded-3xl glass-strong p-8 lift overflow-hidden ${
                i === 0 ? 'lg:row-span-2 lg:col-start-1' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lavender-mist/0 to-gold-soft/0 group-hover:from-lavender-mist/40 group-hover:to-gold-soft/30 transition-all duration-500 opacity-50" />

              <div className="relative flex items-center justify-between mb-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold-warm">{item.tag}</span>
                <span className="text-xs text-[rgb(var(--muted))]">{item.date}</span>
              </div>

              <div className="relative">
                <div className="text-xs text-[rgb(var(--muted))] mb-3 font-medium">{item.source}</div>
                <h3 className={`font-display leading-tight group-hover:text-gold-warm transition ${
                  i === 0 ? 'text-3xl lg:text-4xl' : 'text-xl'
                }`}>
                  {item.title}
                </h3>
              </div>

              <div className="relative mt-8 inline-flex items-center gap-2 text-xs font-medium opacity-70 group-hover:opacity-100 transition">
                Read story
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
