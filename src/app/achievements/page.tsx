import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { AchievementCard } from '@/components/achievement-card';
import { Reveal } from '@/components/reveal';
import { ACHIEVEMENTS } from '@/lib/content';
import { CTABanner } from '@/components/home/cta-banner';
import { Award, Trophy, Star, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Achievements & Awards — Honors and Recognition',
  description: 'Celebrating Rachel Foko\'s awards, ambassadorial honors, and global recognitions — from the Good Governance Global Award to international speaking engagements.',
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
      />

      {/* Honors strip */}
      <section className="relative py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {honors.map((h, i) => {
              const Icon = h.icon;
              return (
                <Reveal key={h.title} delay={i * 0.08} className="rounded-2xl glass p-6 group hover:bg-white/60 dark:hover:bg-white/5 transition">
                  <Icon className="h-7 w-7 text-gold-warm mb-4" />
                  <div className="font-display text-lg leading-tight">{h.title}</div>
                  <div className="text-xs text-[rgb(var(--muted))] mt-2 leading-relaxed">{h.detail}</div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured award */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 aurora opacity-40" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] p-12 lg:p-20 bg-gradient-to-br from-ink-900 via-lavender-night to-ink-950 text-white">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gold-warm/30 blur-3xl" />
              <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-lavender-deep/40 blur-3xl" />

              <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full glass-strong px-4 py-2 mb-6 text-xs uppercase tracking-[0.3em] text-white/80">
                    <Trophy className="h-3 w-3" /> Flagship Honor · 2024
                  </div>
                  <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                    Good Governance Global Award
                  </h2>
                  <p className="mt-4 text-lg text-white/80 italic">
                    Distinguished Young Female Business Personality of the Year — Consulting
                  </p>
                  <p className="mt-6 text-white/70 leading-relaxed max-w-2xl">
                    Among her most notable recognitions, Rachel was honored with the prestigious Good Governance Global
                    Award — recognizing her outstanding leadership, integrity, and contribution to consulting and global
                    business transformation. The award symbolizes her commitment to driving impactful change, empowering
                    businesses, and inspiring the next generation of leaders.
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
                          <div className="text-[10px] uppercase tracking-[0.3em] text-white/60 mt-1">Honoree</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* All achievements */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))] mb-4">All recognitions</div>
            <h2 className="font-display text-4xl sm:text-5xl leading-tight">
              Awards, honors & <span className="gradient-text">milestones</span>.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((a, i) => (
              <AchievementCard key={a.id} achievement={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
