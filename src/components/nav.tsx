'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { NAV } from '@/lib/content';
import { useTheme } from './theme-provider';
import { cn } from '@/lib/utils';

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          scrolled ? 'py-3' : 'py-6'
        )}
      >
        <div
          className={cn(
            'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500 rounded-2xl',
            scrolled && 'glass-strong shadow-[0_8px_40px_-12px_rgba(91,75,138,0.25)] px-4 py-2'
          )}
        >
          <Link href="/" className="group relative flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-lavender-deep via-gold-warm to-rose-dust p-[1.5px]">
              <div className="h-full w-full rounded-full bg-[rgb(var(--bg))] flex items-center justify-center">
                <span className="font-display text-base tracking-wider gradient-text">RF</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-lg leading-none">Rachel Foko</div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[rgb(var(--muted))] mt-1">
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
                    'relative px-3 py-2 text-sm font-medium transition-colors rounded-lg',
                    active
                      ? 'text-[rgb(var(--fg))]'
                      : 'text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]'
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
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="h-10 w-10 rounded-full grid place-items-center glass hover:bg-white/20 transition"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-lavender-night to-ink-900 shimmer hover:shadow-lg hover:shadow-lavender-deep/30 transition"
            >
              Book Rachel
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="lg:hidden h-10 w-10 rounded-full grid place-items-center glass"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
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
            <div className="absolute inset-0 bg-[rgb(var(--bg))]/90 backdrop-blur-xl" />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-x-4 top-24 rounded-2xl glass-strong p-6"
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
                          ? 'bg-white/40 dark:bg-white/5 text-[rgb(var(--fg))]'
                          : 'text-[rgb(var(--muted))] hover:bg-white/30 dark:hover:bg-white/5'
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
