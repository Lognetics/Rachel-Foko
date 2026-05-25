import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { WorldMap } from '@/components/world-map';
import { CTABanner } from '@/components/home/cta-banner';
import { IMPACT_AREAS } from '@/lib/content';
import { Users, GraduationCap, Cpu, Globe, Crown, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Global Impact — Driving Change Beyond Borders',
  description: 'Rachel Foko\'s global impact: empowering women, mentoring youth, advancing technology, and building international collaborations across continents.',
};

const iconMap: Record<string, any> = {
  Users, GraduationCap, Cpu, Globe, Crown, Sparkles,
};

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Global Impact"
        title="Driving Change Beyond Borders"
        intro="Empowering communities, inspiring innovation, and creating opportunities globally — Rachel's work is driven by a mission to create transformational impact across the world."
      />

      {/* Map */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 aurora opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="Reach"
            title={<>Influence across <span className="gradient-text">three continents</span>.</>}
            description="From Lagos to Stockholm, London to Yaoundé, Rachel's voice and work continue to shape global conversations on innovation, governance, and women's leadership."
          />
          <Reveal delay={0.2} className="mt-16">
            <WorldMap />
          </Reveal>
        </div>
      </section>

      {/* Impact areas */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="Areas of Impact"
            title={<>Where the <span className="gradient-text">work</span> creates change.</>}
            description="Rachel believes sustainable impact begins with empowering people and creating systems that foster long-term growth and opportunity."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMPACT_AREAS.map((a, i) => {
              const Icon = iconMap[a.icon] ?? Sparkles;
              return (
                <Reveal key={a.title} delay={(i % 3) * 0.08} className="group relative rounded-3xl glass-strong p-8 lift overflow-hidden">
                  <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br from-lavender-deep/30 to-gold-warm/30 blur-3xl opacity-40 group-hover:opacity-80 transition" />
                  <div className="relative">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-lavender-deep to-gold-warm grid place-items-center text-white shadow-lg mb-6">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-2xl leading-tight mb-3">{a.title}</h3>
                    <p className="text-sm text-[rgb(var(--muted))] leading-relaxed mb-6">{a.description}</p>
                    <div className="text-xs uppercase tracking-[0.2em] text-gold-warm">{a.metric}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pillars statement */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 aurora opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold-warm mb-4">Our pillars</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Sustainable impact begins with <span className="gradient-text">empowered people</span>.
            </h2>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
