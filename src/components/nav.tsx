'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV } from '@/lib/content';
import { cn } from '@/lib/utils';

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Every page opens on a dark image-overlay hero, so at top we use light-on-dark.
  // After scroll, glass-strong background appears and we switch to dark-on-light.
  const onDark = !scrolled;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          scrolled ? 'py-3' : 'py-5'
        )}
      >
        <div
          className={cn(
            'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500 rounded-2xl',
            scrolled
              ? 'bg-white/85 backdrop-blur-xl border border-white/60 shadow-[0_8px_40px_-12px_rgba(91,75,138,0.18)] px-4 py-2'
              : 'bg-ink-950/30 backdrop-blur-md border border-white/15 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.4)] px-4 py-2'
          )}
        >
          <Link href="/" className="group relative flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-rose-warm via-gold-warm to-lavender-deep p-[1.5px]">
              <div
                className={cn(
                  'h-full w-full rounded-full flex items-center justify-center transition-colors duration-500',
                  onDark ? 'bg-ink-950' : 'bg-white'
                )}
              >
                <span className="font-display text-base tracking-wider gradient-text">RF</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <div
                className={cn(
                  'font-display text-lg leading-none transition-colors duration-500',
                  onDark ? 'text-white' : 'text-ink-950'
                )}
              >
                Rachel Foko
              </div>
              <div
                className={cn(
                  'text-[10px] tracking-[0.25em] uppercase mt-1 transition-colors duration-500',
                  onDark ? 'text-white/70' : 'text-ink-500'
                )}
              >
                Visionary · Speaker · CEO
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg',
                    onDark
                      ? active
                        ? 'text-white'
                        : 'text-white/75 hover:text-white'
                      : active
                        ? 'text-ink-950'
                        : 'text-ink-500 hover:text-ink-950'
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-gold-warm to-transparent"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className={cn(
                'hidden lg:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium shimmer transition-all duration-500',
                onDark
                  ? 'text-ink-950 bg-gradient-to-r from-gold-soft via-gold-warm to-gold-deep hover:shadow-lg hover:shadow-gold-warm/30'
                  : 'text-white bg-gradient-to-r from-lavender-night via-ink-900 to-ink-950 hover:shadow-lg hover:shadow-lavender-deep/30'
              )}
            >
              Book Rachel
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className={cn(
                'lg:hidden h-10 w-10 rounded-full grid place-items-center backdrop-blur border transition-colors duration-500',
                onDark
                  ? 'bg-white/10 border-white/20'
                  : 'bg-white/70 border-white/60 shadow'
              )}
            >
              {open ? (
                <X className={cn('h-4 w-4 transition-colors', onDark ? 'text-white' : 'text-ink-950')} />
              ) : (
                <Menu className={cn('h-4 w-4 transition-colors', onDark ? 'text-white' : 'text-ink-950')} />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-x-4 top-24 rounded-2xl bg-white border border-blush-soft shadow-xl p-6"
            >
              <div className="flex flex-col gap-2">
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'block px-4 py-3 rounded-xl text-base font-medium transition',
                        pathname === item.href
                          ? 'bg-blush-soft text-ink-950'
                          : 'text-ink-700 hover:bg-cream-200'
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-lavender-night to-ink-900"
                >
                  Book Rachel to Speak
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
