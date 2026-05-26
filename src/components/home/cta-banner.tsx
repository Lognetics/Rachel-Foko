'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { FlowerMark } from '@/components/decorative';

export function CTABanner() {
  return (
    <section className="relative overflow-hidden dark text-white">
      <Image
        src="/images/rachel/rachel-event-3.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ink-950/95 via-lavender-night/85 to-ink-950/95" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-rose-warm/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gold-warm/25 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24 lg:py-36 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 mb-6 text-[10px] uppercase tracking-[0.35em] text-white/90">
          <Sparkles className="h-3 w-3 text-gold-warm" />
          Let's collaborate
        </div>
        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.02] tracking-tight">
          Let's build the <span className="italic-accent">future</span> together.
        </h2>
        <div className="mt-6 flex justify-center">
          <FlowerMark size={28} />
        </div>
        <p className="mt-6 text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed font-light">
          Whether you're seeking strategic consulting, innovative partnerships, leadership
          collaboration, or a powerful speaker for your next event — Rachel is ready.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Link
            href="/consulting"
            className="rounded-full px-7 py-3.5 text-sm font-medium bg-gradient-to-r from-gold-soft via-gold-warm to-gold-deep text-ink-950 hover:shadow-2xl hover:shadow-gold-warm/40 hover:-translate-y-0.5 transition-all"
          >
            Partner With Rachel
          </Link>
          <Link
            href="/contact"
            className="rounded-full px-7 py-3.5 text-sm font-medium text-white border border-white/30 hover:bg-white/10 transition-all"
          >
            Invite Rachel to Speak
          </Link>
          <Link
            href="/consulting"
            className="rounded-full px-7 py-3.5 text-sm font-medium text-white border border-white/30 hover:bg-white/10 transition-all"
          >
            Contact Rachel Consulting
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
