import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { WorldMap } from '@/components/world-map';

export function GlobalImpactSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 aurora opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          center
          eyebrow="Global Impact"
          title={<>Creating <span className="gradient-text">global impact</span> beyond borders.</>}
          description="Through strategic partnerships, international speaking engagements, mentorship initiatives, and innovative business solutions, Rachel continues to influence organizations and communities globally — from Africa to Europe and beyond."
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
            <Reveal key={stat.label} delay={0.3 + i * 0.1} className="text-center rounded-2xl glass p-6">
              <div className="font-display text-4xl gradient-text">{stat.value}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--muted))] mt-2">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
