import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { CTABanner } from '@/components/home/cta-banner';
import { Marquee } from '@/components/marquee';
import { PortraitImage } from '@/components/portrait-image';
import { SERVICES, CLIENT_LOGOS, SITE } from '@/lib/content';
import { Target, Palette, Globe, Smartphone, Sparkles, Cpu, BarChart3, Crown, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Rachel Consulting — Building Businesses for the Future',
  description: 'Rachel Consulting is a modern advisory firm specializing in business strategy, branding, AI, digital transformation, and app development.',
};

const iconMap: Record<string, any> = {
  Target, Palette, Globe, Smartphone, Sparkles, Cpu, BarChart3, Crown,
};

export default function ConsultingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rachel Consulting"
        title="Building Businesses for the Future"
        intro="A modern consulting firm focused on innovation, digital transformation, and sustainable business growth — helping organizations unlock measurable results through strategic solutions tailored to modern market demands."
      />

      {/* Intro split */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))] mb-4">Our approach</div>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              Creativity meets <span className="gradient-text">technology</span>.
            </h2>
            <p className="mt-8 text-[rgb(var(--muted))] leading-relaxed text-base sm:text-lg">
              Founded by Rachel Foko, Rachel Consulting helps businesses and organizations unlock growth through
              strategic solutions tailored to modern market demands. The company combines creativity, innovation, and
              technology to help businesses stay competitive and future-ready.
            </p>
            <Link
              href={SITE.consultingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white bg-gradient-to-r from-lavender-night via-ink-900 to-ink-950 shimmer hover:shadow-2xl hover:shadow-lavender-deep/40 hover:-translate-y-0.5 transition-all"
            >
              Visit Rachel Consulting
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-br from-lavender-deep/30 via-rose-dust/20 to-gold-warm/30 blur-3xl" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden bg-gradient-to-br from-lavender-deep via-ink-900 to-ink-950 p-[1.5px]">
                <div className="h-full w-full rounded-3xl overflow-hidden">
                  <PortraitImage src="/images/rachel/rachel-portrait-4.jpg" alt="Rachel at work" sizes="(max-width: 1024px) 80vw, 35vw" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 aurora opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="What we do"
            title={<>Services built for the <span className="gradient-text">modern era</span>.</>}
            description="A full-spectrum offering, from foundational strategy to bespoke AI integration — tailored to the ambitions of forward-thinking organizations."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => {
              const Icon = iconMap[s.icon] ?? Sparkles;
              return (
                <Reveal key={s.title} delay={(i % 4) * 0.08} className="group relative rounded-3xl glass-strong p-7 lift overflow-hidden">
                  <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br from-lavender-deep/30 to-gold-warm/30 blur-2xl opacity-40 group-hover:opacity-80 transition" />
                  <div className="relative">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-lavender-deep to-gold-warm grid place-items-center text-white shadow-lg mb-6">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl leading-tight mb-3">{s.title}</h3>
                    <p className="text-sm text-[rgb(var(--muted))] leading-relaxed">{s.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission / vision */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <Reveal className="rounded-3xl glass-strong p-10 lg:p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br from-gold-soft to-gold-deep opacity-30 blur-3xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.3em] text-gold-warm mb-4">Mission</div>
              <h3 className="font-display text-3xl sm:text-4xl leading-tight mb-5">
                Empower businesses to thrive in the future of work.
              </h3>
              <p className="text-[rgb(var(--muted))] leading-relaxed">
                We partner with organizations to design strategies, brands, and digital products that compete on a
                global stage — uniting human-centered design, rigorous strategy, and intelligent technology.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl glass-strong p-10 lg:p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br from-lavender-deep to-lavender-night opacity-30 blur-3xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.3em] text-lavender-deep mb-4">Vision</div>
              <h3 className="font-display text-3xl sm:text-4xl leading-tight mb-5">
                A world where innovation lifts every community.
              </h3>
              <p className="text-[rgb(var(--muted))] leading-relaxed">
                Rachel Consulting envisions a future where AI, design, and entrepreneurship become accessible tools for
                transformation — bridging continents, generations, and industries.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Clients marquee */}
      <section className="relative py-20 overflow-hidden border-y border-[rgb(var(--border))]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-xs uppercase tracking-[0.4em] text-[rgb(var(--muted))] mb-10">
            Trusted by forward-thinking organizations
          </div>
          <Marquee speed={28}>
            {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((logo, i) => (
              <div key={i} className="h-14 px-6 grid place-items-center opacity-60 hover:opacity-100 transition">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} className="max-h-12 w-auto object-contain" />
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
