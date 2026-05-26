/**
 * Rotating accent palette for cards — gives each card a distinct color signature
 * that animates richly on hover. Pick by index: `getAccent(i)`.
 */
export type Accent = {
  name: 'rose' | 'gold' | 'lavender' | 'blush' | 'champagne' | 'mauve';
  /** Tailwind class for icon background gradient */
  iconBg: string;
  /** Hover halo background gradient (placed in an absolute blur element) */
  haloFrom: string;
  haloTo: string;
  /** Card subtle tint on hover */
  hoverTint: string;
  /** Hover border tint */
  hoverBorder: string;
  /** Text accent (eyebrows, metrics) */
  textAccent: string;
};

export const ACCENTS: Accent[] = [
  {
    name: 'rose',
    iconBg: 'bg-gradient-to-br from-rose-warm via-rose-gold to-blush-deep',
    haloFrom: 'group-hover:from-rose-warm/40',
    haloTo: 'group-hover:to-blush/40',
    hoverTint: 'group-hover:bg-blush-soft/40',
    hoverBorder: 'group-hover:border-rose-warm/50',
    textAccent: 'text-rose-warm',
  },
  {
    name: 'gold',
    iconBg: 'bg-gradient-to-br from-gold-soft via-gold-warm to-gold-deep',
    haloFrom: 'group-hover:from-gold-soft/40',
    haloTo: 'group-hover:to-rose-gold/40',
    hoverTint: 'group-hover:bg-gold-soft/20',
    hoverBorder: 'group-hover:border-gold-warm/50',
    textAccent: 'text-gold-warm',
  },
  {
    name: 'lavender',
    iconBg: 'bg-gradient-to-br from-lavender-warm via-lavender-deep to-lavender-night',
    haloFrom: 'group-hover:from-lavender-deep/40',
    haloTo: 'group-hover:to-lavender-mist/40',
    hoverTint: 'group-hover:bg-lavender-mist/30',
    hoverBorder: 'group-hover:border-lavender-deep/50',
    textAccent: 'text-lavender-warm',
  },
  {
    name: 'blush',
    iconBg: 'bg-gradient-to-br from-blush-soft via-rose-warm to-rose-gold',
    haloFrom: 'group-hover:from-blush-deep/40',
    haloTo: 'group-hover:to-rose-warm/40',
    hoverTint: 'group-hover:bg-blush/40',
    hoverBorder: 'group-hover:border-blush-deep/60',
    textAccent: 'text-rose-gold',
  },
  {
    name: 'champagne',
    iconBg: 'bg-gradient-to-br from-cream-200 via-gold-soft to-rose-gold',
    haloFrom: 'group-hover:from-gold-soft/40',
    haloTo: 'group-hover:to-cream-200/60',
    hoverTint: 'group-hover:bg-cream-200/50',
    hoverBorder: 'group-hover:border-gold-soft/60',
    textAccent: 'text-gold-deep',
  },
  {
    name: 'mauve',
    iconBg: 'bg-gradient-to-br from-lavender-mist via-rose-warm to-lavender-warm',
    haloFrom: 'group-hover:from-lavender-warm/40',
    haloTo: 'group-hover:to-rose-warm/30',
    hoverTint: 'group-hover:bg-lavender-mist/40',
    hoverBorder: 'group-hover:border-lavender-warm/50',
    textAccent: 'text-lavender-night',
  },
];

export function getAccent(i: number): Accent {
  return ACCENTS[i % ACCENTS.length];
}
