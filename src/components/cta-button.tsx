import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  external?: boolean;
};

export function CTAButton({ href, children, variant = 'primary', className, external }: Props) {
  const base = 'group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300';

  const styles = {
    primary:
      'text-white bg-gradient-to-r from-lavender-night via-ink-900 to-ink-950 shimmer hover:shadow-2xl hover:shadow-lavender-deep/40 hover:-translate-y-0.5',
    secondary:
      'text-[rgb(var(--fg))] glass-strong hover:bg-white/60 dark:hover:bg-white/10 hover:-translate-y-0.5',
    ghost:
      'text-[rgb(var(--fg))] border border-[rgb(var(--border))] hover:border-gold-warm hover:bg-white/30 dark:hover:bg-white/5',
  };

  const props = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Link href={href} className={cn(base, styles[variant], className)} {...props}>
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
