'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950"
        >
          <div className="absolute inset-0 aurora opacity-60" />
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute inset-0 -m-4 rounded-full bg-gradient-to-br from-lavender-deep/40 to-gold-warm/40 blur-2xl" />
              <div className="relative h-20 w-20 rounded-full border border-white/20 bg-gradient-to-br from-lavender-deep/20 to-gold-warm/20 backdrop-blur-md flex items-center justify-center">
                <span className="font-display text-3xl text-white tracking-wider">RF</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-display text-white/80 text-sm tracking-[0.4em] uppercase"
            >
              Rachel Foko
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 0.6, duration: 0.9, ease: 'easeOut' }}
              className="h-px bg-gradient-to-r from-transparent via-gold-warm to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
