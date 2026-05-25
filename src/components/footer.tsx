import Link from 'next/link';
import { Instagram, Linkedin, Twitter, Youtube, Mail, ArrowUpRight } from 'lucide-react';
import { NAV, SITE } from '@/lib/content';

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[rgb(var(--border))] overflow-hidden">
      <div className="absolute inset-0 aurora opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-lavender-deep via-gold-warm to-rose-dust p-[1.5px]">
                <div className="h-full w-full rounded-full bg-[rgb(var(--bg))] flex items-center justify-center">
                  <span className="font-display text-lg gradient-text">RF</span>
                </div>
              </div>
              <span className="font-display text-2xl">Rachel Foko</span>
            </Link>
            <p className="mt-6 text-[rgb(var(--muted))] max-w-md leading-relaxed">
              Visionary leader, global speaker and changemaker dedicated to empowering businesses and transforming futures through innovation, AI, and purposeful leadership.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[
                { href: SITE.socials.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: SITE.socials.instagram, icon: Instagram, label: 'Instagram' },
                { href: SITE.socials.twitter, icon: Twitter, label: 'Twitter' },
                { href: SITE.socials.youtube, icon: Youtube, label: 'YouTube' },
                { href: `mailto:${SITE.email}`, icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full grid place-items-center glass hover:bg-white/30 dark:hover:bg-white/10 transition hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[rgb(var(--muted))] mb-5">Explore</h4>
            <ul className="space-y-3">
              {NAV.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-gold-warm transition inline-flex items-center gap-1.5 group">
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[rgb(var(--muted))] mb-5">Connect</h4>
            <ul className="space-y-3">
              {NAV.slice(5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-gold-warm transition inline-flex items-center gap-1.5 group">
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[rgb(var(--muted))] mb-5">Reach</h4>
            <a href={`mailto:${SITE.email}`} className="text-sm block hover:text-gold-warm transition">{SITE.email}</a>
            <a href={SITE.consultingUrl} target="_blank" rel="noopener noreferrer" className="text-sm block mt-3 hover:text-gold-warm transition">
              Rachel Consulting →
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[rgb(var(--border))] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[rgb(var(--muted))]">
            © {new Date().getFullYear()} Rachel Foko. All rights reserved.
          </p>
          <p className="text-xs text-[rgb(var(--muted))] italic font-display">
            Empowering Businesses · Transforming Futures
          </p>
        </div>
      </div>
    </footer>
  );
}
