'use client';

import { cn } from '@/lib/utils';

type Props = {
  /** Color of the section ABOVE this divider — divider fills with the section BELOW's color */
  fillTop?: string;
  /** Color of the section BELOW */
  fillBottom?: string;
  flip?: boolean;
  className?: string;
};

/**
 * Soft botanical wave divider — sits between sections to create a flowing transition.
 * Bottom color visually merges with the next section.
 */
export function WaveDivider({
  fillTop = 'transparent',
  fillBottom = '#fcf8f5',
  flip,
  className,
}: Props) {
  return (
    <div className={cn('relative h-16 sm:h-24 overflow-hidden', flip && 'rotate-180', className)} style={{ background: fillTop }}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,20 1440,50 L1440,100 L0,100 Z"
          fill={fillBottom}
        />
      </svg>
      {/* Floating bloom accents along the wave */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-around opacity-60 pointer-events-none">
        {[0, 1, 2, 3, 4].map((i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" aria-hidden>
            <g fill="#c9a96e" opacity="0.7">
              <ellipse cx="12" cy="6" rx="2.5" ry="4.5" />
              <ellipse cx="12" cy="18" rx="2.5" ry="4.5" />
              <ellipse cx="6" cy="12" rx="4.5" ry="2.5" />
              <ellipse cx="18" cy="12" rx="4.5" ry="2.5" />
              <circle cx="12" cy="12" r="1.5" fill="#fffaf5" />
            </g>
          </svg>
        ))}
      </div>
    </div>
  );
}
