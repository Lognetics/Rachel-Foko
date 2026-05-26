import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { Section } from '@/components/section';
import { BookingForm } from '@/components/booking-form';
import { Eyebrow, FlowerMark } from '@/components/decorative';
import { Mail, MapPin, Globe, Linkedin, Instagram, Twitter, Youtube, Sparkles } from 'lucide-react';
import { SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact — Let\'s Connect',
  description: 'Reach Rachel Foko for speaking invitations, partnerships, media interviews, brand collaborations, consulting, and mentorship.',
};

const opportunities = [
  'Speaking Invitations',
  'Strategic Partnerships',
  'Media Interviews',
  'Brand Collaborations',
  'Consulting Opportunities',
  'Mentorship Initiatives',
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Connect"
        title="Let's Connect"
        intro="Whether for partnerships, speaking engagements, consulting, media inquiries, or collaborations — Rachel Foko would love to hear from you."
        image="/images/rachel/rachel-portrait-2.jpg"
        overlay="gold"
      />

      {/* Form + info — light */}
      <Section variant="light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow className="text-ink-500 mb-5">Open to</Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl leading-tight">
                Bring your <span className="italic-accent">vision</span> to the conversation.
              </h2>
              <p className="mt-6 text-ink-500 leading-relaxed">
                Rachel is open to a range of collaborations — from boardroom advisory to global keynotes. Share your
                story and intention; her team will respond within 2 business days.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="mt-8 space-y-3">
                {opportunities.map((o) => (
                  <li key={o} className="flex items-center gap-3 text-sm text-ink-700">
                    <FlowerMark size={10} />
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.25} className="mt-12 rounded-3xl bg-cream-100 border border-blush-soft/60 p-8 space-y-5 shadow-[0_15px_50px_-20px_rgba(91,75,138,0.15)]">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 group">
                <span className="h-11 w-11 rounded-2xl bg-gradient-to-br from-rose-warm via-gold-warm to-lavender-deep grid place-items-center text-white shadow-lg">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-ink-500">Email</div>
                  <div className="font-medium text-ink-950 group-hover:text-gold-warm transition">{SITE.email}</div>
                </div>
              </a>
              <a href={SITE.consultingUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <span className="h-11 w-11 rounded-2xl bg-gradient-to-br from-rose-warm via-gold-warm to-lavender-deep grid place-items-center text-white shadow-lg">
                  <Globe className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-ink-500">Rachel Consulting</div>
                  <div className="font-medium text-ink-950 group-hover:text-gold-warm transition">rachelconsultings.com</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <span className="h-11 w-11 rounded-2xl bg-gradient-to-br from-rose-warm via-gold-warm to-lavender-deep grid place-items-center text-white shadow-lg">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-ink-500">Reach</div>
                  <div className="font-medium text-ink-950">Global · Available worldwide</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.35} className="mt-8 flex items-center gap-3">
              {[
                { href: SITE.socials.linkedin, icon: Linkedin },
                { href: SITE.socials.instagram, icon: Instagram },
                { href: SITE.socials.twitter, icon: Twitter },
                { href: SITE.socials.youtube, icon: Youtube },
              ].map(({ href, icon: Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 rounded-full grid place-items-center bg-white border border-blush-soft hover:border-gold-warm hover:-translate-y-0.5 transition shadow-sm"
                >
                  <Icon className="h-4 w-4 text-ink-700" />
                </a>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <BookingForm />
          </Reveal>
        </div>
      </Section>

      {/* Closing — image overlay */}
      <Section variant="image" image="/images/rachel/rachel-event-8.jpg" overlay="lavender">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <Sparkles className="h-8 w-8 text-gold-warm mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-white">
              Together, let's create <span className="italic-accent">innovation, transformation</span>, and global impact that inspires generations to come.
            </h2>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
