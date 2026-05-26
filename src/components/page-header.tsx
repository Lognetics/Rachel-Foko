'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FlowerMark } from './decorative';
import { cn } from '@/lib/utils';

type Props = {
  eyebrow?: string;
  title: string;
  intro: string;
  image?: string;
  overlay?: 'soft' | 'strong' | 'lavender' | 'gold';
};

const overlays = {
  soft: 'bg-gradient-to-br from-ink-950/55 via-ink-900/45 to-lavender-night/50',
  strong: 'bg-gradient-to-br from-ink-950/80 via-ink-900/65 to-ink-950/80',
  lavender: 'bg-gradient-to-br from-lavender-night/80 via-ink-900/70 to-ink-950/85',
  gold: 'bg-gradient-to-br from-ink-950/75 via-ink-900/60 to-gold-deep/40',
};

export function PageHeader({ eyebrow, title, intro, image, overlay = 'strong' }: Props) {
  const isImage = !!image;

  return (
    <section
      className={cn(
        'relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden',
        isImage ? 'text-white' : 'bg-cream-100 text-ink-950'
      )}
    >
      {isImage && image && (
        <>
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-center" />
          <div className={cn('absolute inset-0', overlays[overlay])} />
        </>
      )}
      {!isImage && <div className="absolute inset-0 aurora opacity-50" />}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.45em] mb-8 opacity-80"
          >
            <span className="h-px w-10 bg-current" />
            <FlowerMark size={12} />
            <span>{eyebrow}</span>
            <FlowerMark size={12} />
            <span className="h-px w-10 bg-current" />
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] tracking-tight"
        >
          {title.split(' ').map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className={cn(
            'mt-8 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto',
            isImage ? 'text-white/85' : 'text-ink-500'
          )}
        >
          {intro}
        </motion.p>
      </div>
    </section>
  );
}
