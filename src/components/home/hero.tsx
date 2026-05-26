'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Sparkles, Globe, Crown, Users } from 'lucide-react';
import { HERO_BADGES } from '@/lib/content';
import { FlowerMark } from '@/components/decorative';

const badgeIcons = [Award, Globe, Sparkles, Crown, Users];

export function HomeHero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden dark text-white">
      {/* Full-bleed backdrop portrait */}
      <Image
        src="/images/rachel/rachel-portrait-3.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center scale-105"
      />
      {/* Deep, romantic gradient — keeps text legible without dulling the portrait */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/80 to-ink-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Decorative blooms */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-rose-warm/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-lavender-deep/30 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Copy */}
        <div className="lg:col-span-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gold-warm opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-warm" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-white/90">
              Rachel Foko · The Woman of Impact
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-3 mb-6 text-[11px] uppercase tracking-[0.4em] text-white/70"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-gold-warm to-transparent" />
            <FlowerMark size={12} />
            <span>Rachel Foko</span>
          </motion.div>

          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-[7rem] leading-[0.98] tracking-tight">
            {['Visionary.', 'Speaker.', 'Changemaker.'].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
                transition={{ duration: 0.9, delay: 0.25 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                {i === 0 ? (
                  <span className="italic-accent">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-8 text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl font-light"
          >
            A globally recognized entrepreneur, strategic consultant, and technology
            advocate empowering businesses, inspiring innovation, and shaping the future
            through leadership and transformational impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-ink-950 bg-gradient-to-r from-gold-soft via-gold-warm to-gold-deep shimmer hover:shadow-2xl hover:shadow-gold-warm/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore My Journey
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/global-impact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white bg-white/8 backdrop-blur-md border border-white/25 hover:bg-white/15 transition-all"
            >
              View Global Impact
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white border border-white/30 hover:border-gold-warm hover:bg-white/10 transition-all"
            >
              Book Rachel to Speak
            </Link>
          </motion.div>
        </div>

        {/* Floating badges column */}
        <div className="lg:col-span-4 relative">
          <div className="hidden lg:flex flex-col gap-4 items-end">
            {HERO_BADGES.map((label, i) => {
              const Icon = badgeIcons[i] ?? Sparkles;
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + i * 0.12, type: 'spring', stiffness: 200, damping: 22 }}
                  className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2.5 shadow-xl"
                  style={{ animation: `float 6s ease-in-out infinite ${i * 0.4}s` }}
                >
                  <span className="h-7 w-7 rounded-full bg-gradient-to-br from-gold-soft to-gold-deep grid place-items-center">
                    <Icon className="h-3.5 w-3.5 text-ink-950" />
                  </span>
                  <span className="text-xs font-medium whitespace-nowrap text-white/95">{label}</span>
                </motion.div>
              );
            })}
          </div>

          {/* mobile inline badge row */}
          <div className="lg:hidden mt-12 flex flex-wrap gap-2">
            {HERO_BADGES.map((label, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.08 }}
                className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 text-[10px] text-white/90"
              >
                {label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-gold-warm to-transparent" />
      </motion.div>
    </section>
  );
}
