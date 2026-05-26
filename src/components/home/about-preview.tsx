'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { STATS } from '@/lib/content';
import { Reveal } from '@/components/reveal';
import { Section } from '@/components/section';
import { Eyebrow, FlowerMark, FloralCorner } from '@/components/decorative';

export function AboutPreview() {
  return (
    <Section variant="light" className="bg-white">
      <FloralCorner position="tl" className="hidden md:block" />
      <FloralCorner position="br" className="hidden md:block" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <Reveal className="lg:col-span-5 relative">
          <div className="relative max-w-md mx-auto lg:mx-0">
            {/* Halo */}
            <div className="absolute -inset-8 bg-gradient-to-br from-rose-warm/40 via-blush-soft to-lavender-deep/30 blur-3xl rounded-full" />

            {/* Curved feminine frame */}
            <div className="relative curved-frame aspect-[4/5] bg-gradient-to-br from-gold-soft via-rose-warm to-lavender-deep p-[3px]">
              <div className="relative curved-frame h-full w-full overflow-hidden">
                <Image
                  src="/images/rachel/rachel-portrait-2.jpg"
                  alt="Rachel Foko"
                  fill
                  sizes="(max-width: 1024px) 80vw, 35vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating credential card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 lg:-right-12 rounded-2xl bg-white p-6 max-w-[240px] shadow-[0_20px_60px_-15px_rgba(91,75,138,0.25)] border border-blush-soft"
            >
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold-warm mb-2">
                <FlowerMark size={10} />
                Founder & CEO
              </div>
              <div className="font-display text-xl leading-tight text-ink-950">Rachel Consulting</div>
              <div className="text-xs text-ink-500 mt-2">Building businesses for the future.</div>
            </motion.div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow className="text-ink-500 mb-5">About Rachel</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
              A legacy of <span className="italic-accent">leadership</span> & innovation.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 space-y-5 text-ink-500 leading-relaxed text-base sm:text-lg">
              <p>
                Rachel Foko is more than a consultant or entrepreneur — she is a visionary committed
                to creating sustainable impact across industries and nations. As the founder and CEO
                of Rachel Consulting, Rachel has empowered businesses through strategic innovation,
                branding, technology solutions, and AI-driven transformation.
              </p>
              <p>
                Her influence spans entrepreneurship, governance, women empowerment, leadership
                development, and global technology advocacy.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink-950"
            >
              <span className="border-b border-gold-warm pb-1">Read full biography</span>
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
                <div className="text-[10px] uppercase tracking-[0.25em] text-ink-500 mt-2">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
