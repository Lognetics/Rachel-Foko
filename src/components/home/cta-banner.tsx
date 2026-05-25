'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] p-12 lg:p-20 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-lavender-night to-ink-950" />
          <div className="absolute inset-0 aurora opacity-80" />
          <div className="absolute inset-0 grid-pattern opacity-20" />

          {/* Decorative orbs */}
          <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-gold-warm/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-lavender-deep/40 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full glass-strong px-4 py-2 mb-6 text-xs uppercase tracking-[0.3em] text-white/80">
              <Sparkles className="h-3 w-3" />
              Let's collaborate
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.05] tracking-tight">
              Let's build the <span className="gradient-text">future</span> together.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Whether you're seeking strategic consulting, innovative partnerships, leadership
              collaboration, or a powerful speaker for your next event — Rachel is ready to drive
              impactful change with you.
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
                className="rounded-full px-7 py-3.5 text-sm font-medium text-white border border-white/20 hover:bg-white/10 transition-all"
              >
                Invite Rachel to Speak
              </Link>
              <Link
                href="/consulting"
                className="rounded-full px-7 py-3.5 text-sm font-medium text-white border border-white/20 hover:bg-white/10 transition-all"
              >
                Contact Rachel Consulting
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
