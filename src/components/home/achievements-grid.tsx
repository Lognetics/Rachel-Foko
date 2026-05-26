import { SectionHeading } from '@/components/section-heading';
import { AchievementCard } from '@/components/achievement-card';
import { ACHIEVEMENTS } from '@/lib/content';
import { Section } from '@/components/section';

export function AchievementsGrid({ limit }: { limit?: number }) {
  const items = limit ? ACHIEVEMENTS.slice(0, limit) : ACHIEVEMENTS;
  return (
    <Section variant="dark">
      <div className="absolute inset-0 aurora opacity-50 pointer-events-none" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-rose-warm/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-lavender-deep/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          center
          eyebrow="Achievements & Recognition"
          title={<>Honored across <span className="italic-accent">stages</span> & continents.</>}
          description="Rachel Foko's journey has been marked by excellence, innovation, and international recognition — dedicated to empowering businesses and advancing global conversations on leadership, technology, and governance."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((a, i) => (
            <AchievementCard key={a.id} achievement={a} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}
