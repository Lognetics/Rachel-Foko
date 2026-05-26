import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { Section } from '@/components/section';
import { CTABanner } from '@/components/home/cta-banner';
import { Eyebrow, FlowerMark, FloralCorner } from '@/components/decorative';
import { TIMELINE, VALUES } from '@/lib/content';
import { getAccent } from '@/lib/accents';
import { cn } from '@/lib/utils';
import { Sparkles, Heart, Compass, Globe, Crown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — The Story Behind the Vision',
  description: 'The full biography, journey, vision, and leadership philosophy of Rachel Foko.',
};

const valueIcons = [Heart, Sparkles, Crown, Compass, Globe];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Rachel"
        title="The Story Behind the Vision"
        intro="Rachel Foko's journey is a remarkable story of resilience, innovation, leadership, and purpose-driven impact — a life dedicated to empowering businesses and inspiring transformational change."
        image="/images/rachel/rachel-portrait-3.jpg"
        overlay="lavender"
      />

      {/* Biography — light */}
      <Section variant="light">
        <FloralCorner position="tl" className="hidden md:block" />
        <FloralCorner position="br" className="hidden md:block" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-8 bg-gradient-to-br from-rose-warm/40 via-blush-soft to-lavender-deep/30 blur-3xl rounded-full" />
              <div className="relative curved-frame aspect-[4/5] bg-gradient-to-br from-gold-soft via-rose-warm to-lavender-deep p-[3px]">
                <div className="relative curved-frame h-full w-full overflow-hidden">
                  <Image src="/images/rachel/rachel-portrait-1.jpg" alt="Rachel Foko" fill sizes="(max-width: 1024px) 80vw, 35vw" className="object-cover" />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow className="text-ink-500 mb-5">Who is Rachel Foko?</Eyebrow>
              <h2 className="font-display text-4xl sm:text-5xl leading-[1.02] tracking-tight">
                A globally recognized <span className="italic-accent">visionary</span> shaping industries and communities.
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="mt-8 space-y-5 text-ink-500 leading-relaxed text-base sm:text-lg">
              <p>
                Rachel Foko is a globally recognized entrepreneur, visionary leader, global speaker, and changemaker
                whose influence continues to shape industries and communities across the world. As the founder and CEO
                of Rachel Consulting, she has built a transformative brand focused on empowering businesses through
                strategic consulting, branding, digital innovation, website and app development, and artificial
                intelligence solutions.
              </p>
              <p>
                Driven by a passion for excellence and innovation, Rachel has become a respected authority in
                entrepreneurship and technology. Her work is rooted in the belief that businesses and individuals
                possess limitless potential when equipped with the right tools, strategies, and opportunities.
              </p>
              <p>
                Over the years, Rachel has collaborated with organizations across different sectors, helping them
                navigate complex challenges, embrace innovation, and achieve measurable growth.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Timeline — dark */}
      <Section variant="dark">
        <div className="absolute inset-0 aurora opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="Journey & Story"
            title={<>A journey of <span className="italic-accent">growth</span> & impact.</>}
            description="Every chapter of Rachel's story has been shaped by purpose, resilience, and an unwavering commitment to lifting others as she rises."
          />

          <div className="mt-20 relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-warm to-transparent" />
            {TIMELINE.map((item, i) => {
              const isRight = i % 2 === 0;
              return (
                <Reveal key={item.title} delay={i * 0.1} className="relative mb-16 last:mb-0">
                  <div className={`flex items-start gap-8 ${isRight ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                    <div className="hidden sm:block sm:w-1/2" />
                    <div className="absolute left-4 sm:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-to-br from-gold-soft to-gold-deep ring-4 ring-ink-950 shadow-lg shadow-gold-warm/50" />
                    <div className={`flex-1 pl-12 sm:pl-0 ${isRight ? 'sm:pl-16' : 'sm:pr-16 sm:text-right'}`}>
                      <div className="text-[10px] uppercase tracking-[0.35em] text-gold-warm mb-2">{item.year}</div>
                      <h3 className="font-display text-2xl sm:text-3xl leading-tight text-white">{item.title}</h3>
                      <p className="mt-3 text-white/70 leading-relaxed font-light">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Vision — cream/light */}
      <Section variant="cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <Eyebrow className="text-ink-500 mb-5">Vision & Mission</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.02] tracking-tight">
              A vision <span className="italic-accent">beyond business</span>.
            </h2>
            <p className="mt-8 text-ink-500 leading-relaxed text-base sm:text-lg">
              Rachel Foko envisions a future where technology, innovation, and leadership work together to solve global
              challenges and empower communities worldwide. Her mission extends beyond business success — it is about
              creating a lasting legacy of transformation, empowerment, and meaningful progress.
            </p>
            <p className="mt-5 text-ink-500 leading-relaxed text-base sm:text-lg">
              She believes leadership is about influence, transformation, and creating opportunities for others to
              thrive. Her philosophy centers around integrity, innovation, empowerment, and impact-driven solutions.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-warm/30 via-blush-soft to-lavender-deep/30 blur-3xl" />
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden bg-white border border-blush-soft/60 shadow-[0_30px_80px_-30px_rgba(91,75,138,0.3)] p-8 flex flex-col justify-between">
                <div className="absolute inset-0 grid-pattern opacity-40" />
                <div className="relative">
                  <Sparkles className="h-8 w-8 text-gold-warm mb-4" />
                  <div className="text-[10px] uppercase tracking-[0.35em] text-ink-500 mb-2">North Star</div>
                  <p className="font-display text-2xl lg:text-3xl leading-tight text-ink-950">
                    Technology, leadership and innovation in service of human potential.
                  </p>
                </div>
                <div className="relative mt-8 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-ink-500">
                  <span>Integrity</span>
                  <FlowerMark size={10} />
                  <span>Innovation</span>
                  <FlowerMark size={10} />
                  <span>Impact</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values — dark */}
      <Section variant="dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="Personal Core Values"
            title={<>The principles that <span className="italic-accent">guide</span> the work.</>}
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {VALUES.map((v, i) => {
              const Icon = valueIcons[i] ?? Sparkles;
              const accent = getAccent(i);
              return (
                <Reveal
                  key={v.title}
                  delay={i * 0.08}
                  className={cn(
                    'group relative rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 lift overflow-hidden transition-all duration-500',
                    accent.hoverBorder
                  )}
                >
                  <div className={cn('absolute -top-16 -right-16 h-48 w-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-transparent to-transparent', accent.haloFrom, accent.haloTo)} />
                  <div className="relative">
                    <div className={cn('h-12 w-12 rounded-2xl flex items-center justify-center text-white shadow-lg mb-5', accent.iconBg)}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl mb-3 text-white">{v.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed font-light">{v.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Legacy — image overlay */}
      <Section variant="image" image="/images/rachel/rachel-event-4.jpg" overlay="lavender">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            center
            eyebrow="The Rachel Foko Legacy"
            title={<>Future vision for <span className="italic-accent">global innovation</span>.</>}
            description="Rachel's legacy is being written in every business empowered, every leader mentored, and every community uplifted. The work continues — building bridges between technology and humanity, between Africa and the world, between the present and a more luminous future."
          />
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
