import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { Section } from '@/components/section';
import { CTABanner } from '@/components/home/cta-banner';
import { Marquee } from '@/components/marquee';
import { Eyebrow, FlowerMark } from '@/components/decorative';
import { SERVICES, CLIENT_LOGOS, SITE } from '@/lib/content';
import { getAccent } from '@/lib/accents';
import { cn } from '@/lib/utils';
import { Target, Palette, Globe, Smartphone, Sparkles, Cpu, BarChart3, Crown, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Rachel Consulting — Building Businesses for the Future',
  description: 'Rachel Consulting: business strategy, branding, AI, digital transformation, web & app development.',
};

const iconMap: Record<string, any> = { Target, Palette, Globe, Smartphone, Sparkles, Cpu, BarChart3, Crown };

export default function ConsultingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rachel Consulting"
        title="Building Businesses for the Future"
        intro="A modern consulting firm focused on innovation, digital transformation, and sustainable business growth — helping organizations unlock measurable results through strategic solutions."
        image="/images/rachel/rachel-portrait-4.jpg"
        overlay="lavender"
      />

      {/* Intro split — light */}
      <Section variant="light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <Eyebrow className="text-ink-500 mb-5">Our approach</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.02] tracking-tight">
              Creativity meets <span className="italic-accent">technology</span>.
            </h2>
            <p className="mt-8 text-ink-500 leading-relaxed text-base sm:text-lg">
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
              <div className="absolute -inset-6 bg-gradient-to-br from-rose-warm/40 via-blush-soft to-lavender-deep/30 blur-3xl rounded-full" />
              <div className="relative curved-frame-soft h-full w-full bg-gradient-to-br from-lavender-deep via-gold-warm to-rose-warm p-[3px]">
                <div className="h-full w-full curved-frame-soft overflow-hidden">
                  <Image src="/images/rachel/rachel-portrait-4.jpg" alt="Rachel at work" fill sizes="(max-width: 1024px) 80vw, 35vw" className="object-cover" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Services grid — dark */}
      <Section variant="dark">
        <div className="absolute inset-0 aurora opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="What we do"
            title={<>Services built for the <span className="italic-accent">modern era</span>.</>}
            description="A full-spectrum offering, from foundational strategy to bespoke AI integration — tailored to forward-thinking organizations."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => {
              const Icon = iconMap[s.icon] ?? Sparkles;
              const accent = getAccent(i);
              return (
                <Reveal
                  key={s.title}
                  delay={(i % 4) * 0.08}
                  className={cn(
                    'group relative rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-7 lift overflow-hidden transition-all duration-500',
                    accent.hoverBorder
                  )}
                >
                  <div className={cn('absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br from-transparent to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700', accent.haloFrom, accent.haloTo)} />
                  <div className="relative">
                    <div className={cn('h-12 w-12 rounded-2xl grid place-items-center text-white shadow-lg mb-6', accent.iconBg)}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl leading-tight mb-3 text-white">{s.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed font-light">{s.description}</p>
                    <div className={cn('mt-4 h-px w-10 transition-all duration-500 group-hover:w-16', 'bg-current', accent.textAccent)} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Mission / Vision — cream */}
      <Section variant="cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <Reveal className="rounded-3xl bg-white p-10 lg:p-12 relative overflow-hidden border border-blush-soft/60 shadow-[0_20px_60px_-20px_rgba(91,75,138,0.18)]">
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br from-gold-soft to-gold-deep opacity-25 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-gold-warm mb-4">
                <FlowerMark size={12} /> Mission
              </div>
              <h3 className="font-display text-3xl sm:text-4xl leading-tight mb-5 text-ink-950">
                Empower businesses to thrive in the future of work.
              </h3>
              <p className="text-ink-500 leading-relaxed">
                We partner with organizations to design strategies, brands, and digital products that compete on a
                global stage — uniting human-centered design, rigorous strategy, and intelligent technology.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl bg-white p-10 lg:p-12 relative overflow-hidden border border-blush-soft/60 shadow-[0_20px_60px_-20px_rgba(91,75,138,0.18)]">
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br from-rose-warm to-lavender-deep opacity-25 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-lavender-night mb-4">
                <FlowerMark size={12} /> Vision
              </div>
              <h3 className="font-display text-3xl sm:text-4xl leading-tight mb-5 text-ink-950">
                A world where innovation lifts every community.
              </h3>
              <p className="text-ink-500 leading-relaxed">
                Rachel Consulting envisions a future where AI, design, and entrepreneurship become accessible tools for
                transformation — bridging continents, generations, and industries.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Clients marquee — light */}
      <Section variant="light" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-[10px] uppercase tracking-[0.45em] text-ink-500 mb-10">
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
      </Section>

      <CTABanner />
    </>
  );
}
