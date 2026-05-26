'use client';

import { motion } from 'framer-motion';

type Props = {
  count?: number;
  tone?: 'rose' | 'lavender' | 'gold' | 'mixed';
};

const TONES = {
  rose: ['#d79f98', '#f5dcdc', '#e8c7c0'],
  lavender: ['#9e86c8', '#b9a4e0', '#e8e0f5'],
  gold: ['#c9a96e', '#e8d4a8', '#d4a574'],
  mixed: ['#d79f98', '#9e86c8', '#c9a96e', '#f5dcdc'],
};

/**
 * Drifting petal silhouettes — used in hero, image-overlay sections, and CTA backdrops.
 * Animated with framer-motion: each petal slowly translates + rotates over a long loop.
 */
export function FloatingPetals({ count = 16, tone = 'mixed' }: Props) {
  const colors = TONES[tone];

  const petals = Array.from({ length: count }, (_, i) => {
    const color = colors[i % colors.length];
    const size = 14 + Math.random() * 22;
    const startX = Math.random() * 100;
    const startY = -10 - Math.random() * 20;
    const endY = 110 + Math.random() * 10;
    const drift = (Math.random() - 0.5) * 30;
    const duration = 22 + Math.random() * 18;
    const delay = -Math.random() * duration;
    const rotation = Math.random() * 720 - 360;
    const opacity = 0.18 + Math.random() * 0.18;

    return { i, color, size, startX, startY, endY, drift, duration, delay, rotation, opacity };
  });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {petals.map((p) => (
        <motion.div
          key={p.i}
          initial={{ x: `${p.startX}vw`, y: `${p.startY}%`, rotate: 0, opacity: 0 }}
          animate={{
            x: [`${p.startX}vw`, `${p.startX + p.drift}vw`, `${p.startX + p.drift * 1.5}vw`],
            y: [`${p.startY}%`, `${50}%`, `${p.endY}%`],
            rotate: [0, p.rotation / 2, p.rotation],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
            times: [0, 0.1, 0.9, 1],
          }}
          className="absolute"
          style={{ width: p.size, height: p.size }}
        >
          <svg viewBox="0 0 24 24" width="100%" height="100%">
            <path
              d="M12 2 C 16 4, 20 9, 18 14 C 16 19, 12 21, 12 22 C 12 21, 8 19, 6 14 C 4 9, 8 4, 12 2 Z"
              fill={p.color}
              opacity="0.85"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
