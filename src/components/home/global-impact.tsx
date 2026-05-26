import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { WorldMap } from '@/components/world-map';
import { Section } from '@/components/section';

export function GlobalImpactSection() {
  return (
    <Section variant="cream">
      <div className="absolute inset-0 aurora opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          center
          eyebrow="Global Impact"
          title={<>Creating <span className="italic-accent">global impact</span> beyond borders.</>}
          description="Through strategic partnerships, international speaking engagements, mentorship initiatives, and innovative business solutions — from Africa to Europe and beyond."
        />
        <Reveal delay={0.2} className="mt-16">
          <WorldMap />
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { value: '7+', label: 'Countries influenced' },
            { value: '15+', label: 'International engagements' },
            { value: '3', label: 'Continents reached' },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={0.3 + i * 0.1} className="text-center rounded-2xl bg-white p-6 shadow-[0_10px_40px_-15px_rgba(91,75,138,0.2)] border border-blush-soft/60">
              <div className="font-display text-4xl gradient-text">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-ink-500 mt-2">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
