'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  initials?: string;
};

/**
 * Image with elegant gradient fallback if the source fails to load.
 * Ensures the site looks polished even before photos are wired up.
 */
export function PortraitImage({ src, alt, priority, className, sizes, initials = 'RF' }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={cn('relative grid place-items-center bg-gradient-to-br from-lavender-deep via-ink-800 to-gold-warm overflow-hidden', className)}>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 noise" />
        <div className="relative">
          <span className="font-display text-7xl text-white/80 tracking-widest">{initials}</span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? '(max-width: 768px) 100vw, 50vw'}
      priority={priority}
      onError={() => setFailed(true)}
      className={cn('object-cover', className)}
    />
  );
}
