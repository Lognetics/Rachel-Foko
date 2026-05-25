'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { STATS } from '@/lib/content';
import { Reveal } from '@/components/reveal';
import { PortraitImage } from '@/components/portrait-image';

export function AboutPreview() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <Reveal className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-lavender-mist to-rose-blush dark:from-lavender-night/30 dark:to-ink-800 p-1">
              <div className="relative h-full w-full rounded-3xl overflow-hidden">
                <PortraitImage
                  src="/images/rachel/rachel-portrait-2.jpg"
                  alt="Rachel Foko"
                  sizes="(max-width: 1024px) 80vw, 35vw"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 lg:-right-12 rounded-2xl glass-strong p-6 max-w-[240px] shadow-2xl">
              <div className="text-xs uppercase tracking-[0.25em] text-gold-warm mb-2">Founder & CEO</div>
              <div className="font-display text-xl leading-tight">Rachel Consulting</div>
              <div className="text-xs text-[rgb(var(--muted))] mt-2">Building businesses for the future.</div>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))] mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold-warm" />
              About Rachel
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              A legacy of <span className="gradient-text">leadership</span> and innovation.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 space-y-5 text-[rgb(var(--muted))] leading-relaxed text-base sm:text-lg">
              <p>
                Rachel Foko is more than a consultant or entrepreneur — she is a visionary committed
                to creating sustainable impact across industries and nations. As the founder and CEO
                of Rachel Consulting, Rachel has empowered businesses through strategic innovation,
                branding, technology solutions, and AI-driven transformation.
              </p>
              <p>
                Her influence spans entrepreneurship, governance, women empowerment, leadership
                development, and global technology advocacy. Through partnerships with organizations
                worldwide, Rachel continues to drive meaningful change while helping businesses and
                individuals unlock their full potential.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium"
            >
              <span className="border-b border-current pb-1">Read full biography</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-center sm:text-left"
              >
                <div className="font-display text-3xl sm:text-4xl gradient-text">{s.value}</div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-[rgb(var(--muted))] mt-2">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
