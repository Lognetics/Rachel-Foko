'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ReactNode } from 'react';

type Variant = 'light' | 'cream' | 'dark' | 'image';

type Props = {
  variant?: Variant;
  image?: string;
  imageAlt?: string;
  overlay?: 'soft' | 'strong' | 'lavender' | 'gold';
  children: ReactNode;
  className?: string;
  id?: string;
  /** Disable default padding (use when you need full bleed inside) */
  flush?: boolean;
};

const overlays: Record<NonNullable<Props['overlay']>, string> = {
  soft: 'bg-gradient-to-br from-ink-950/60 via-ink-900/45 to-lavender-night/40',
  strong: 'bg-gradient-to-br from-ink-950/85 via-ink-900/70 to-ink-950/85',
  lavender: 'bg-gradient-to-br from-lavender-night/85 via-ink-900/70 to-ink-950/85',
  gold: 'bg-gradient-to-br from-ink-950/80 via-ink-900/65 to-gold-deep/40',
};

export function Section({
  variant = 'light',
  image,
  imageAlt = '',
  overlay = 'strong',
  children,
  className,
  id,
  flush,
}: Props) {
  const padding = flush ? '' : 'py-20 sm:py-24 lg:py-32';

  if (variant === 'image' && image) {
    return (
      <section id={id} className={cn('relative overflow-hidden dark text-white', padding, className)}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />
        <div className={cn('absolute inset-0', overlays[overlay])} />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative">{children}</div>
      </section>
    );
  }

  if (variant === 'dark') {
    return (
      <section
        id={id}
        className={cn('relative overflow-hidden dark bg-ink-950 text-white', padding, className)}
      >
        {children}
      </section>
    );
  }

  if (variant === 'cream') {
    return (
      <section id={id} className={cn('relative overflow-hidden bg-cream-100 text-ink-950', padding, className)}>
        {children}
      </section>
    );
  }

  return (
    <section id={id} className={cn('relative overflow-hidden bg-white text-ink-950', padding, className)}>
      {children}
    </section>
  );
}
