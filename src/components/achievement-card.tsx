'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Award, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getAccent } from '@/lib/accents';

type Achievement = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  description: string;
  accent: string;
};

export function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  const [open, setOpen] = useState(false);
  const accent = getAccent(index);

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setOpen(true)}
        className={cn(
          'group relative w-full text-left rounded-3xl bg-white/8 backdrop-blur-md border border-white/10 p-8 lift overflow-hidden transition-all duration-500',
          accent.hoverBorder
        )}
      >
        {/* Color halo on hover */}
        <div
          className={cn(
            'absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br from-transparent to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700',
            accent.haloFrom, accent.haloTo
          )}
        />
        {/* Subtle tint sweep */}
        <div className={cn('absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500', accent.hoverTint)} />

        <div className="relative flex items-start justify-between mb-6">
          <div className={cn('h-12 w-12 rounded-2xl flex items-center justify-center text-white shadow-lg', accent.iconBg)}>
            <Award className="h-5 w-5" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">{achievement.year}</span>
        </div>

        <div className="relative">
          <div className={cn('text-[10px] uppercase tracking-[0.3em] mb-2', accent.textAccent)}>{achievement.category}</div>
          <h3 className="font-display text-2xl leading-tight mb-2 text-white group-hover:text-white transition">{achievement.title}</h3>
          <p className="text-sm text-white/65 line-clamp-2 font-light">{achievement.subtitle}</p>
        </div>

        <div className="relative mt-6 inline-flex items-center gap-2 text-xs font-medium text-white opacity-70 group-hover:opacity-100 transition">
          <span>Read story</span>
          <span className="h-px w-6 bg-current transition-all group-hover:w-12" />
        </div>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center p-4"
            onClick={() => setOpen(false)}
          >
            <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-xl" />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-2xl w-full rounded-3xl bg-white border border-blush-soft p-8 sm:p-12 shadow-[0_30px_80px_-20px_rgba(91,75,138,0.35)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-4 right-4 h-10 w-10 rounded-full bg-cream-100 hover:bg-blush-soft grid place-items-center transition"
              >
                <X className="h-4 w-4 text-ink-950" />
              </button>
              <div className={cn('inline-flex h-14 w-14 rounded-2xl items-center justify-center text-white shadow-xl mb-6', accent.iconBg)}>
                <Award className="h-6 w-6" />
              </div>
              <div className={cn('text-[10px] uppercase tracking-[0.3em] mb-3', accent.textAccent)}>{achievement.category} · {achievement.year}</div>
              <h3 className="font-display text-3xl sm:text-4xl leading-tight mb-3 text-ink-950">{achievement.title}</h3>
              <p className="text-base text-ink-500 italic mb-6">{achievement.subtitle}</p>
              <p className="text-base leading-relaxed text-ink-700">{achievement.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
