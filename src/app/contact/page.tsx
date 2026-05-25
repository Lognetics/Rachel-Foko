import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { BookingForm } from '@/components/booking-form';
import { Mail, MapPin, Globe, Linkedin, Instagram, Twitter, Youtube, Sparkles } from 'lucide-react';
import { SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact — Let\'s Connect',
  description: 'Reach Rachel Foko for speaking invitations, strategic partnerships, media interviews, brand collaborations, consulting opportunities, and mentorship initiatives.',
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
      />

      <section className="relative py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))] mb-4">Open to</div>
              <h2 className="font-display text-3xl sm:text-4xl leading-tight">
                Bring your <span className="gradient-text">vision</span> to the conversation.
              </h2>
              <p className="mt-6 text-[rgb(var(--muted))] leading-relaxed">
                Rachel is open to a range of collaborations — from boardroom advisory to global keynotes. Share your
                story and intention; her team will respond within 2 business days.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="mt-8 space-y-3">
                {opportunities.map((o) => (
                  <li key={o} className="flex items-center gap-3 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-gold-warm to-lavender-deep" />
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.25} className="mt-12 rounded-3xl glass-strong p-8 space-y-5">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 group">
                <span className="h-11 w-11 rounded-2xl bg-gradient-to-br from-lavender-deep to-gold-warm grid place-items-center text-white shadow-lg">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--muted))]">Email</div>
                  <div className="font-medium group-hover:text-gold-warm transition">{SITE.email}</div>
                </div>
              </a>
              <a href={SITE.consultingUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <span className="h-11 w-11 rounded-2xl bg-gradient-to-br from-lavender-deep to-gold-warm grid place-items-center text-white shadow-lg">
                  <Globe className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--muted))]">Rachel Consulting</div>
                  <div className="font-medium group-hover:text-gold-warm transition">rachelconsultings.com</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <span className="h-11 w-11 rounded-2xl bg-gradient-to-br from-lavender-deep to-gold-warm grid place-items-center text-white shadow-lg">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--muted))]">Reach</div>
                  <div className="font-medium">Global · Available worldwide</div>
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
                  className="h-11 w-11 rounded-full grid place-items-center glass hover:bg-white/40 dark:hover:bg-white/10 transition hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <BookingForm />
          </Reveal>
        </div>
      </section>

      {/* Closing statement */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 aurora opacity-50" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <Sparkles className="h-8 w-8 text-gold-warm mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight">
              Together, let's create <span className="gradient-text">innovation, transformation</span>, and global impact that inspires generations to come.
            </h2>
          </Reveal>
        </div>
      </section>
    </>
  );
}
