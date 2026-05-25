'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Award, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type Achievement = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  description: string;
  accent: string;
};

const accentMap: Record<string, string> = {
  gold: 'from-gold-soft via-gold-warm to-gold-deep',
  lavender: 'from-lavender-mist via-lavender-deep to-lavender-night',
  rose: 'from-rose-blush via-rose-dust to-rose-gold',
};

export function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setOpen(true)}
        className="group relative w-full text-left rounded-3xl glass-strong p-8 lift overflow-hidden"
      >
        <div className={cn('absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br opacity-30 blur-2xl transition-opacity group-hover:opacity-60', accentMap[achievement.accent])} />

        <div className="relative flex items-start justify-between mb-6">
          <div className={cn('h-12 w-12 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white shadow-lg', accentMap[achievement.accent])}>
            <Award className="h-5 w-5" />
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--muted))]">{achievement.year}</span>
        </div>

        <div className="relative">
          <div className="text-[10px] uppercase tracking-[0.25em] text-gold-warm mb-2">{achievement.category}</div>
          <h3 className="font-display text-2xl leading-tight mb-2 group-hover:text-gold-warm transition">{achievement.title}</h3>
          <p className="text-sm text-[rgb(var(--muted))] line-clamp-2">{achievement.subtitle}</p>
        </div>

        <div className="relative mt-6 inline-flex items-center gap-2 text-xs font-medium text-[rgb(var(--fg))] opacity-70 group-hover:opacity-100 transition">
          <span>Read story</span>
          <span className="h-px w-6 bg-current transition-all group-hover:w-10" />
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
            <div className="absolute inset-0 bg-ink-950/70 backdrop-blur-xl" />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-2xl w-full rounded-3xl glass-strong p-8 sm:p-12"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-4 right-4 h-10 w-10 rounded-full glass grid place-items-center hover:bg-white/30 transition"
              >
                <X className="h-4 w-4" />
              </button>
              <div className={cn('inline-flex h-14 w-14 rounded-2xl bg-gradient-to-br items-center justify-center text-white shadow-xl mb-6', accentMap[achievement.accent])}>
                <Award className="h-6 w-6" />
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold-warm mb-3">{achievement.category} · {achievement.year}</div>
              <h3 className="font-display text-3xl sm:text-4xl leading-tight mb-3">{achievement.title}</h3>
              <p className="text-base text-[rgb(var(--muted))] italic mb-6">{achievement.subtitle}</p>
              <p className="text-base leading-relaxed">{achievement.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
