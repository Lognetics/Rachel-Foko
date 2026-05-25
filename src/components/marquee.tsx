'use client';

import { ReactNode } from 'react';

export function Marquee({ children, speed = 30 }: { children: ReactNode; speed?: number }) {
  return (
    <div className="relative overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}>
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        <div className="flex gap-12 items-center shrink-0">{children}</div>
        <div className="flex gap-12 items-center shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
