'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/** Elegant horizontal divider with center floral motif — feminine and minimal */
export function SectionDivider({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.6 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={cn('flex items-center justify-center gap-4', className)}
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-warm" />
      <FlowerMark />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-warm" />
    </motion.div>
  );
}

/** Tiny 4-petal mark used in dividers and ornaments */
export function FlowerMark({ size = 14, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="petal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d79f98" />
          <stop offset="50%" stopColor="#c9a96e" />
          <stop offset="100%" stopColor="#9e86c8" />
        </linearGradient>
      </defs>
      <g fill="url(#petal)">
        <ellipse cx="12" cy="5" rx="2.6" ry="4.5" />
        <ellipse cx="12" cy="19" rx="2.6" ry="4.5" />
        <ellipse cx="5" cy="12" rx="4.5" ry="2.6" />
        <ellipse cx="19" cy="12" rx="4.5" ry="2.6" />
        <circle cx="12" cy="12" r="1.6" fill="#fffaf5" />
      </g>
    </svg>
  );
}

/** Subtle floral corner ornament — sits in section corners */
export function FloralCorner({
  position = 'tl',
  className,
}: {
  position?: 'tl' | 'tr' | 'bl' | 'br';
  className?: string;
}) {
  const rotation = { tl: 0, tr: 90, br: 180, bl: 270 }[position];
  const pos = {
    tl: 'top-6 left-6',
    tr: 'top-6 right-6',
    bl: 'bottom-6 left-6',
    br: 'bottom-6 right-6',
  }[position];

  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      className={cn('absolute opacity-50 pointer-events-none', pos, className)}
      style={{ transform: `rotate(${rotation}deg)` }}
      aria-hidden
    >
      <defs>
        <linearGradient id={`fc-${position}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c9a96e" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#d79f98" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <g fill="none" stroke={`url(#fc-${position})`} strokeWidth="1" strokeLinecap="round">
        <path d="M2 2 L24 2" />
        <path d="M2 2 L2 24" />
        <path d="M2 2 Q 12 4, 18 14 Q 20 18, 26 22" />
        <path d="M22 8 Q 26 12, 28 18" />
        <circle cx="22" cy="8" r="1.4" fill="#c9a96e" stroke="none" />
        <circle cx="28" cy="18" r="1" fill="#d79f98" stroke="none" />
      </g>
    </svg>
  );
}

/** Soft eyebrow label with gold lines either side */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={cn('inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em]', className)}
    >
      <span className="h-px w-6 bg-current opacity-50" />
      <span>{children}</span>
      <span className="h-px w-6 bg-current opacity-50" />
    </motion.div>
  );
}

/** Decorative blooms — large background ornaments for image-overlay or dark sections */
export function BackdropBlooms() {
  return (
    <>
      <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-rose-warm/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-lavender-deep/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 h-40 w-40 rounded-full bg-gold-warm/20 blur-3xl pointer-events-none" />
    </>
  );
}
