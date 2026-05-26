import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { AchievementCard } from '@/components/achievement-card';
import { Reveal } from '@/components/reveal';
import { Section } from '@/components/section';
import { ACHIEVEMENTS } from '@/lib/content';
import { CTABanner } from '@/components/home/cta-banner';
import { Eyebrow } from '@/components/decorative';
import { getAccent } from '@/lib/accents';
import { cn } from '@/lib/utils';
import { Award, Trophy, Star, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Achievements & Awards — Honors and Recognition',
  description: 'Awards, ambassadorial honors, and global recognitions earned by Rachel Foko.',
};

const honors = [
  { icon: Trophy, title: 'Good Governance Global Award', detail: 'Distinguished Young Female Business Personality — Consulting' },
  { icon: Award, title: 'Ambassadorial Honors', detail: 'Multiple International Recognitions' },
  { icon: Star, title: 'Leadership & Innovation Awards', detail: 'Across consulting and technology sectors' },
  { icon: Globe, title: 'Entrepreneurship Excellence', detail: 'Society of Global Women Entrepreneurs & Changemakers' },
];

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Honors & Awards"
        title="A Legacy Defined by Excellence"
        intro="Rachel Foko's achievements reflect years of dedication, resilience, and visionary leadership — her work recognized by respected institutions and global platforms across consulting, governance, innovation, and women empowerment."
        image="/images/rachel/rachel-event-4.jpg"
        overlay="gold"
      />

      {/* Honors strip — cream */}
      <Section variant="cream" className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {honors.map((h, i) => {
              const Icon = h.icon;
              const accent = getAccent(i);
              return (
                <Reveal
                  key={h.title}
                  delay={i * 0.08}
                  className={cn(
                    'group relative rounded-2xl bg-white p-6 hover:shadow-[0_15px_50px_-20px_rgba(91,75,138,0.3)] transition-all duration-500 border border-blush-soft/60 overflow-hidden',
                    accent.hoverBorder
                  )}
                >
                  <div className={cn('absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-transparent to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700', accent.haloFrom, accent.haloTo)} />
                  <div className="relative">
                    <div className={cn('inline-flex h-11 w-11 rounded-2xl items-center justify-center text-white shadow-lg mb-4', accent.iconBg)}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="font-display text-lg leading-tight text-ink-950">{h.title}</div>
                    <div className="text-xs text-ink-500 mt-2 leading-relaxed">{h.detail}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Featured award — dark */}
      <Section variant="dark">
        <div className="absolute inset-0 aurora opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] p-12 lg:p-20 bg-gradient-to-br from-ink-900 via-lavender-night to-ink-950 text-white border border-white/10">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gold-warm/30 blur-3xl" />
              <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-rose-warm/30 blur-3xl" />

              <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 mb-6 text-[10px] uppercase tracking-[0.35em] text-white/90">
                    <Trophy className="h-3 w-3 text-gold-warm" /> Flagship Honor · 2024
                  </div>
                  <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
                    Good Governance Global Award
                  </h2>
                  <p className="mt-4 text-lg italic-accent">
                    Distinguished Young Female Business Personality of the Year — Consulting
                  </p>
                  <p className="mt-6 text-white/75 leading-relaxed max-w-2xl font-light">
                    Honored at the Good Governance Global Awards for outstanding leadership, integrity, and contribution
                    to consulting and global business transformation. A symbol of her commitment to driving impactful
                    change, empowering businesses, and inspiring the next generation of leaders.
                  </p>
                </div>
                <div className="lg:col-span-5 grid place-items-center">
                  <div className="relative aspect-square w-full max-w-xs">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-soft via-gold-warm to-gold-deep blur-2xl opacity-60" />
                    <div className="relative h-full w-full rounded-full bg-gradient-to-br from-gold-soft via-gold-warm to-gold-deep p-1 grid place-items-center">
                      <div className="h-[92%] w-[92%] rounded-full bg-ink-950 grid place-items-center">
                        <div className="text-center">
                          <Trophy className="h-12 w-12 text-gold-warm mx-auto mb-3" />
                          <div className="font-display text-2xl text-white">2024</div>
                          <div className="text-[10px] uppercase tracking-[0.35em] text-white/60 mt-1">Honoree</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* All achievements — light */}
      <Section variant="light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow className="text-ink-500 mb-5">All recognitions</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl leading-tight">
              Awards, honors & <span className="italic-accent">milestones</span>.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((a, i) => (
              <AchievementCard key={a.id} achievement={a} index={i} />
            ))}
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
