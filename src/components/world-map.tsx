'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { COUNTRIES } from '@/lib/content';

export function WorldMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-[2/1] max-w-5xl mx-auto">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-lavender-mist/30 via-transparent to-rose-blush/20 dark:from-lavender-night/20 dark:to-ink-800/40" />
      <div className="absolute inset-0 grid-pattern rounded-3xl opacity-50" />

      {/* Continents as soft shapes (abstract world map) */}
      <svg
        viewBox="0 0 1000 500"
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="land" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(185,164,224,0.18)" />
            <stop offset="100%" stopColor="rgba(201,169,110,0.12)" />
          </linearGradient>
          <filter id="soft">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>
        {/* North America */}
        <path d="M120,120 Q160,90 230,110 Q280,130 280,200 Q260,260 200,260 Q140,260 100,220 Q90,170 120,120 Z" fill="url(#land)" filter="url(#soft)" />
        {/* South America */}
        <path d="M250,300 Q290,280 310,330 Q320,400 280,440 Q240,460 230,400 Q230,340 250,300 Z" fill="url(#land)" filter="url(#soft)" />
        {/* Europe */}
        <path d="M460,110 Q500,90 540,110 Q560,140 530,170 Q480,180 460,150 Q450,130 460,110 Z" fill="url(#land)" filter="url(#soft)" />
        {/* Africa */}
        <path d="M480,200 Q540,180 570,230 Q580,310 540,380 Q510,420 480,400 Q450,360 460,290 Q470,240 480,200 Z" fill="url(#land)" filter="url(#soft)" />
        {/* Asia */}
        <path d="M580,100 Q700,80 800,130 Q830,180 800,230 Q740,260 660,240 Q580,220 560,170 Q560,130 580,100 Z" fill="url(#land)" filter="url(#soft)" />
        {/* Australia */}
        <path d="M800,340 Q860,320 890,360 Q890,400 840,410 Q800,400 790,370 Q790,350 800,340 Z" fill="url(#land)" filter="url(#soft)" />
      </svg>

      {/* Pins */}
      {COUNTRIES.map((c, i) => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 200, damping: 15 }}
          className="absolute"
          style={{ left: c.x, top: c.y, transform: 'translate(-50%, -50%)' }}
          onMouseEnter={() => setHovered(c.name)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="relative cursor-pointer group">
            <span className="absolute inset-0 -m-2 rounded-full bg-gold-warm/40 animate-ping" />
            <span className="relative block h-3 w-3 rounded-full bg-gradient-to-br from-gold-soft to-gold-deep ring-2 ring-white/40 shadow-lg shadow-gold-warm/50" />
            <div
              className={`absolute left-1/2 -translate-x-1/2 -translate-y-full -top-3 px-3 py-1.5 rounded-lg glass-strong text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                hovered === c.name ? 'opacity-100 translate-y-[-12px]' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="font-display">{c.name}</div>
              <div className="text-[10px] text-[rgb(var(--muted))]">{c.engagements} engagement{c.engagements > 1 ? 's' : ''}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
