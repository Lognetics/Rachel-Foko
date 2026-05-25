import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { PortraitImage } from '@/components/portrait-image';
import { SPEAKING_TOPICS, EVENTS } from '@/lib/content';
import { BookingForm } from '@/components/booking-form';
import { Crown, Sparkles, Users, Cpu, Rocket, Globe, MapPin, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Speaking & Events — Global Speaking Engagements',
  description: 'Book Rachel Foko to speak at your conference, leadership summit, or innovation forum. Topics include AI, leadership, women in business, and digital transformation.',
};

const iconMap: Record<string, any> = {
  Crown, Sparkles, Users, Cpu, Rocket, Globe,
};

export default function SpeakingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Speaking & Events"
        title="Global Speaking Engagements"
        intro="Inspiring audiences around the world through innovation, leadership, and transformational conversations on entrepreneurship, technology, AI, governance, and women empowerment."
      />

      {/* Stats strip */}
      <section className="relative py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { v: '15+', l: 'Global Engagements' },
              { v: '7+', l: 'Countries' },
              { v: '6', l: 'Core Topics' },
              { v: '10k+', l: 'Audience Reached' },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl glass p-6 text-center">
                <div className="font-display text-3xl sm:text-4xl gradient-text">{s.v}</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-[rgb(var(--muted))] mt-2">{s.l}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Featured events */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="Featured Engagements"
            title={<>Where Rachel has <span className="gradient-text">taken the stage</span>.</>}
            description="From XPLORE Nigeria and Sweden to the Global Reputation Forum UK — Rachel's voice continues to shape global conversations."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENTS.map((e, i) => (
              <Reveal key={e.name} delay={(i % 3) * 0.1} className="group relative rounded-3xl glass-strong overflow-hidden lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <PortraitImage src={e.image} alt={e.name} sizes="(max-width: 768px) 100vw, 33vw" className="group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full glass-strong px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-white">
                    {e.role}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display text-xl sm:text-2xl leading-tight">{e.name}</h3>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-[rgb(var(--muted))]">
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-3 w-3" /> {e.location}</span>
                    <span className="inline-flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {e.year}</span>
                  </div>
                  <p className="text-sm leading-relaxed">{e.topic}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 aurora opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="Speaking Topics"
            title={<>Conversations that <span className="gradient-text">move</span> the world forward.</>}
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPEAKING_TOPICS.map((t, i) => {
              const Icon = iconMap[t.icon] ?? Sparkles;
              return (
                <Reveal key={t.title} delay={(i % 3) * 0.08} className="group relative rounded-3xl glass p-8 lift overflow-hidden">
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-lavender-deep/20 to-gold-warm/20 blur-2xl group-hover:opacity-70 opacity-30 transition" />
                  <div className="relative">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-lavender-deep to-gold-warm grid place-items-center text-white mb-6 shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl">{t.title}</h3>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="Book Rachel"
            title={<>Invite Rachel to <span className="gradient-text">your stage</span>.</>}
            description="Share details about your event and Rachel's team will respond within 2 business days."
          />
          <Reveal delay={0.2} className="mt-12">
            <BookingForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
