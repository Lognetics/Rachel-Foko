'use client';

import { cn } from '@/lib/utils';

type Variant = 'rose' | 'lavender' | 'gold' | 'mixed';
type Density = 'sparse' | 'medium' | 'dense';

const palettes: Record<Variant, { primary: string; secondary: string; opacity: number }> = {
  rose:     { primary: '#d79f98', secondary: '#f5dcdc', opacity: 0.18 },
  lavender: { primary: '#9e86c8', secondary: '#e8e0f5', opacity: 0.16 },
  gold:     { primary: '#c9a96e', secondary: '#e8d4a8', opacity: 0.18 },
  mixed:    { primary: '#d79f98', secondary: '#9e86c8', opacity: 0.18 },
};

const sizes: Record<Density, number> = { sparse: 280, medium: 200, dense: 140 };

/**
 * Tileable SVG floral pattern used as a subtle wallpaper on light/cream sections.
 * Small 4-petal blooms + curving stems + dots, all in soft gradient tones.
 */
export function FloralPattern({
  variant = 'mixed',
  density = 'medium',
  className,
}: {
  variant?: Variant;
  density?: Density;
  className?: string;
}) {
  const p = palettes[variant];
  const size = sizes[density];
  const id = `flrl-${variant}-${density}`;

  const svg = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${size} ${size}' width='${size}' height='${size}'>
  <defs>
    <linearGradient id='${id}-g1' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0%' stop-color='${p.primary}' stop-opacity='${p.opacity}'/>
      <stop offset='100%' stop-color='${p.secondary}' stop-opacity='${p.opacity * 0.6}'/>
    </linearGradient>
    <linearGradient id='${id}-g2' x1='0' y1='1' x2='1' y2='0'>
      <stop offset='0%' stop-color='${p.secondary}' stop-opacity='${p.opacity * 0.7}'/>
      <stop offset='100%' stop-color='${p.primary}' stop-opacity='${p.opacity}'/>
    </linearGradient>
  </defs>
  <g fill='url(#${id}-g1)'>
    <g transform='translate(${size * 0.18},${size * 0.22})'>
      <ellipse cx='0' cy='-9' rx='3.5' ry='7'/>
      <ellipse cx='0' cy='9' rx='3.5' ry='7'/>
      <ellipse cx='-9' cy='0' rx='7' ry='3.5'/>
      <ellipse cx='9' cy='0' rx='7' ry='3.5'/>
      <circle cx='0' cy='0' r='2.2' fill='${p.primary}' fill-opacity='${p.opacity * 1.5}'/>
    </g>
    <g transform='translate(${size * 0.72},${size * 0.78})'>
      <ellipse cx='0' cy='-7' rx='3' ry='6'/>
      <ellipse cx='0' cy='7' rx='3' ry='6'/>
      <ellipse cx='-7' cy='0' rx='6' ry='3'/>
      <ellipse cx='7' cy='0' rx='6' ry='3'/>
      <circle cx='0' cy='0' r='1.8' fill='${p.primary}' fill-opacity='${p.opacity * 1.5}'/>
    </g>
  </g>
  <g fill='url(#${id}-g2)'>
    <g transform='translate(${size * 0.82},${size * 0.22})'>
      <ellipse cx='0' cy='-6' rx='2.6' ry='5'/>
      <ellipse cx='0' cy='6' rx='2.6' ry='5'/>
      <ellipse cx='-6' cy='0' rx='5' ry='2.6'/>
      <ellipse cx='6' cy='0' rx='5' ry='2.6'/>
      <circle cx='0' cy='0' r='1.5' fill='${p.secondary}' fill-opacity='${p.opacity * 1.5}'/>
    </g>
    <g transform='translate(${size * 0.28},${size * 0.78})'>
      <ellipse cx='0' cy='-8' rx='3' ry='6'/>
      <ellipse cx='0' cy='8' rx='3' ry='6'/>
      <ellipse cx='-8' cy='0' rx='6' ry='3'/>
      <ellipse cx='8' cy='0' rx='6' ry='3'/>
      <circle cx='0' cy='0' r='1.8' fill='${p.secondary}' fill-opacity='${p.opacity * 1.5}'/>
    </g>
  </g>
  <g stroke='${p.primary}' stroke-opacity='${p.opacity * 0.5}' stroke-width='0.6' fill='none'>
    <path d='M${size * 0.18} ${size * 0.4} Q ${size * 0.3} ${size * 0.5}, ${size * 0.28} ${size * 0.7}'/>
    <path d='M${size * 0.72} ${size * 0.6} Q ${size * 0.6} ${size * 0.5}, ${size * 0.55} ${size * 0.35}'/>
  </g>
  <g fill='${p.primary}' fill-opacity='${p.opacity * 0.6}'>
    <circle cx='${size * 0.5}' cy='${size * 0.5}' r='1'/>
    <circle cx='${size * 0.35}' cy='${size * 0.6}' r='0.8'/>
    <circle cx='${size * 0.65}' cy='${size * 0.4}' r='0.8'/>
    <circle cx='${size * 0.92}' cy='${size * 0.55}' r='0.8'/>
    <circle cx='${size * 0.08}' cy='${size * 0.45}' r='0.8'/>
  </g>
</svg>`.trim().replace(/\n\s*/g, '');

  const encoded = encodeURIComponent(svg);

  return (
    <div
      aria-hidden
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{
        backgroundImage: `url("data:image/svg+xml,${encoded}")`,
        backgroundSize: `${size}px ${size}px`,
        backgroundRepeat: 'repeat',
      }}
    />
  );
}
