import Link from 'next/link';
import { Instagram, Linkedin, Twitter, Youtube, Mail, ArrowUpRight } from 'lucide-react';
import { NAV, SITE } from '@/lib/content';
import { FlowerMark } from './decorative';

export function Footer() {
  return (
    <footer className="relative dark bg-ink-950 text-white overflow-hidden">
      <div className="absolute inset-0 aurora opacity-30 pointer-events-none" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-rose-warm/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-lavender-deep/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-rose-warm via-gold-warm to-lavender-deep p-[1.5px]">
                <div className="h-full w-full rounded-full bg-ink-950 flex items-center justify-center">
                  <span className="font-display text-lg gradient-text">RF</span>
                </div>
              </div>
              <span className="font-display text-2xl">Rachel Foko</span>
            </Link>
            <p className="mt-6 text-white/70 max-w-md leading-relaxed font-light">
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
                  className="h-10 w-10 rounded-full grid place-items-center bg-white/8 hover:bg-white/15 backdrop-blur-md border border-white/15 transition hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4 text-white/90" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.35em] text-white/60 mb-5">Explore</h4>
            <ul className="space-y-3">
              {NAV.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/80 hover:text-gold-warm transition inline-flex items-center gap-1.5 group">
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.35em] text-white/60 mb-5">Connect</h4>
            <ul className="space-y-3">
              {NAV.slice(5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/80 hover:text-gold-warm transition inline-flex items-center gap-1.5 group">
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.35em] text-white/60 mb-5">Reach</h4>
            <a href={`mailto:${SITE.email}`} className="text-sm block text-white/80 hover:text-gold-warm transition">{SITE.email}</a>
            <a href={SITE.consultingUrl} target="_blank" rel="noopener noreferrer" className="text-sm block mt-3 text-white/80 hover:text-gold-warm transition">
              Rachel Consulting →
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Rachel Foko. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-white/50">
            <FlowerMark size={12} />
            <p className="text-xs italic font-display">
              Empowering Businesses · Transforming Futures
            </p>
            <FlowerMark size={12} />
          </div>
        </div>
      </div>
    </footer>
  );
}
