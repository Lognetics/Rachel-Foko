'use client';

import { motion } from 'framer-motion';
import { Award, Sparkles, Globe, Crown, Users } from 'lucide-react';
import Link from 'next/link';
import { HERO_BADGES } from '@/lib/content';
import { PortraitImage } from '@/components/portrait-image';

const badgeIcons = [Award, Globe, Sparkles, Crown, Users];

export function HomeHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-[100svh] flex items-center overflow-hidden aurora noise">
      <div className="grid-pattern absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left: copy */}
        <div className="lg:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 mb-8 rounded-full glass px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gold-warm opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-warm" />
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))]">
              Now: XPLORE Sweden 2024
            </span>
          </motion.div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] tracking-tight">
            {['Visionary', 'Leader.', 'Global', 'Speaker.', 'Changemaker.'].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-[0.2em]"
              >
                {i === 0 || i === 2 || i === 4 ? (
                  <span className="gradient-text">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 text-lg sm:text-xl text-[rgb(var(--muted))] leading-relaxed max-w-2xl"
          >
            Rachel Foko is a globally recognized entrepreneur, strategic consultant, and technology
            advocate empowering businesses, inspiring global innovation, and shaping the future
            through leadership and transformational impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white bg-gradient-to-r from-lavender-night via-ink-900 to-ink-950 shimmer hover:shadow-2xl hover:shadow-lavender-deep/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore My Journey
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/global-impact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium glass-strong hover:bg-white/60 dark:hover:bg-white/10 transition-all"
            >
              View Global Impact
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium border border-[rgb(var(--border))] hover:border-gold-warm transition-all"
            >
              Book Rachel to Speak
            </Link>
          </motion.div>
        </div>

        {/* Right: portrait + floating badges */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto max-w-md aspect-[4/5]"
          >
            {/* Glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-lavender-deep/40 via-rose-dust/30 to-gold-warm/40 blur-3xl rounded-full opacity-60" />

            {/* Frame */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-gold-soft via-lavender-deep to-rose-gold p-[2px]">
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden bg-ink-950">
                <PortraitImage
                  src="/images/rachel/rachel-portrait-1.jpg"
                  alt="Rachel Foko — visionary leader and global speaker"
                  priority
                  sizes="(max-width: 1024px) 80vw, 35vw"
                />
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating badges */}
            {HERO_BADGES.map((label, i) => {
              const Icon = badgeIcons[i] ?? Sparkles;
              const positions = [
                'top-4 -left-8 lg:-left-16',
                '-top-6 right-2',
                'top-1/2 -right-10 lg:-right-20',
                'bottom-16 -left-12 lg:-left-20',
                '-bottom-4 right-4',
              ];
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.15, type: 'spring', stiffness: 200, damping: 18 }}
                  className={`absolute ${positions[i]} hidden sm:flex items-center gap-2 rounded-full glass-strong px-3.5 py-2 shadow-xl shadow-lavender-deep/20`}
                  style={{ animation: `float 6s ease-in-out infinite ${i * 0.5}s` }}
                >
                  <Icon className="h-3.5 w-3.5 text-gold-warm" />
                  <span className="text-[11px] font-medium whitespace-nowrap">{label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-[rgb(var(--muted))]">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-gold-warm to-transparent" />
      </motion.div>
    </section>
  );
}
