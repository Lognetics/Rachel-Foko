import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { Section } from '@/components/section';
import { SPEAKING_TOPICS, EVENTS } from '@/lib/content';
import { BookingForm } from '@/components/booking-form';
import { Crown, Sparkles, Users, Cpu, Rocket, Globe, MapPin, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Speaking & Events — Global Engagements',
  description: 'Book Rachel Foko to speak at your conference, leadership summit, or innovation forum.',
};

const iconMap: Record<string, any> = { Crown, Sparkles, Users, Cpu, Rocket, Globe };

export default function SpeakingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Speaking & Events"
        title="Global Speaking Engagements"
        intro="Inspiring audiences around the world through innovation, leadership, and transformational conversations on entrepreneurship, technology, AI, governance, and women empowerment."
        image="/images/rachel/rachel-event-2.jpg"
        overlay="strong"
      />

      {/* Stats strip — light */}
      <Section variant="light" className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { v: '15+', l: 'Global Engagements' },
              { v: '7+', l: 'Countries' },
              { v: '6', l: 'Core Topics' },
              { v: '10k+', l: 'Audience Reached' },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl bg-cream-100 border border-blush-soft/60 p-6 text-center">
                <div className="font-display text-3xl sm:text-4xl gradient-text">{s.v}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-ink-500 mt-2">{s.l}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* Featured events — dark */}
      <Section variant="dark">
        <div className="absolute inset-0 aurora opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="Featured Engagements"
            title={<>Where Rachel has <span className="italic-accent">taken the stage</span>.</>}
            description="From XPLORE Nigeria and Sweden to the Global Reputation Forum UK — Rachel's voice continues to shape global conversations."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENTS.map((e, i) => (
              <Reveal key={e.name} delay={(i % 3) * 0.1} className="group relative rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={e.image} alt={e.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/25 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-white">
                    {e.role}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display text-xl sm:text-2xl leading-tight">{e.name}</h3>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-white/60">
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-3 w-3" /> {e.location}</span>
                    <span className="inline-flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {e.year}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/85">{e.topic}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Topics — cream */}
      <Section variant="cream">
        <div className="absolute inset-0 aurora opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="Speaking Topics"
            title={<>Conversations that <span className="italic-accent">move</span> the world forward.</>}
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPEAKING_TOPICS.map((t, i) => {
              const Icon = iconMap[t.icon] ?? Sparkles;
              return (
                <Reveal key={t.title} delay={(i % 3) * 0.08} className="group relative rounded-3xl bg-white p-8 lift overflow-hidden border border-blush-soft/60 shadow-[0_10px_40px_-15px_rgba(91,75,138,0.18)]">
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-rose-warm/0 to-gold-warm/0 group-hover:from-rose-warm/40 group-hover:to-gold-warm/30 blur-2xl transition" />
                  <div className="relative">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-rose-warm via-gold-warm to-lavender-deep grid place-items-center text-white mb-6 shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl text-ink-950">{t.title}</h3>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Booking — dark */}
      <Section variant="dark">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="Book Rachel"
            title={<>Invite Rachel to <span className="italic-accent">your stage</span>.</>}
            description="Share details about your event and Rachel's team will respond within 2 business days."
          />
          <Reveal delay={0.2} className="mt-12">
            <BookingForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
