import { SectionHeading } from '@/components/section-heading';
import { AchievementCard } from '@/components/achievement-card';
import { ACHIEVEMENTS } from '@/lib/content';

export function AchievementsGrid({ limit }: { limit?: number }) {
  const items = limit ? ACHIEVEMENTS.slice(0, limit) : ACHIEVEMENTS;
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          center
          eyebrow="Achievements & Recognition"
          title={<>Honored across <span className="gradient-text">stages</span> & continents.</>}
          description="Rachel Foko's journey has been marked by excellence, innovation, and international recognition — dedicated to empowering businesses and advancing global conversations on leadership, technology, and governance."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((a, i) => (
            <AchievementCard key={a.id} achievement={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
