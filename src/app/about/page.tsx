import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { PortraitImage } from '@/components/portrait-image';
import { CTABanner } from '@/components/home/cta-banner';
import { TIMELINE, VALUES } from '@/lib/content';
import { Sparkles, Heart, Compass, Globe, Crown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — The Story Behind the Vision',
  description: 'The full biography, journey, vision, and leadership philosophy of Rachel Foko — visionary entrepreneur, global speaker, and changemaker.',
};

const valueIcons = [Heart, Sparkles, Crown, Compass, Globe];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Rachel"
        title="The Story Behind the Vision"
        intro="Rachel Foko's journey is a remarkable story of resilience, innovation, leadership, and purpose-driven impact — a life dedicated to empowering businesses and inspiring transformational change across the world."
      />

      {/* Biography */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-lavender-deep/40 via-rose-dust/30 to-gold-warm/40 blur-3xl rounded-full opacity-60" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden bg-gradient-to-br from-gold-soft to-lavender-deep p-[2px]">
                <div className="h-full w-full rounded-3xl overflow-hidden">
                  <PortraitImage src="/images/rachel/rachel-portrait-3.jpg" alt="Rachel Foko" sizes="(max-width: 1024px) 80vw, 35vw" />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))] mb-4">Who is Rachel Foko?</div>
              <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight">
                A globally recognized <span className="gradient-text">visionary</span> shaping industries and communities.
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="mt-8 space-y-5 text-[rgb(var(--muted))] leading-relaxed text-base sm:text-lg">
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
                navigate complex challenges, embrace innovation, and achieve measurable growth. Her leadership style
                combines strategic thinking, creativity, and human-centered impact — making her one of the emerging
                voices redefining the future of leadership and business transformation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 aurora opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="Journey & Story"
            title={<>A journey of <span className="gradient-text">growth</span> & impact.</>}
            description="Every chapter of Rachel's story has been shaped by purpose, resilience, and an unwavering commitment to lifting others as she rises."
          />

          <div className="mt-20 relative">
            {/* Spine */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-warm to-transparent" />
            {TIMELINE.map((item, i) => {
              const isRight = i % 2 === 0;
              return (
                <Reveal key={item.title} delay={i * 0.1} className="relative mb-16 last:mb-0">
                  <div className={`flex items-start gap-8 ${isRight ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                    <div className="hidden sm:block sm:w-1/2" />
                    <div className="absolute left-4 sm:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-to-br from-gold-soft to-gold-deep ring-4 ring-[rgb(var(--bg))] shadow-lg shadow-gold-warm/50" />
                    <div className={`flex-1 pl-12 sm:pl-0 ${isRight ? 'sm:pl-16' : 'sm:pr-16 sm:text-right'}`}>
                      <div className="text-xs uppercase tracking-[0.3em] text-gold-warm mb-2">{item.year}</div>
                      <h3 className="font-display text-2xl sm:text-3xl leading-tight">{item.title}</h3>
                      <p className="mt-3 text-[rgb(var(--muted))] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))] mb-4">Vision & Mission</div>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              A vision <span className="gradient-text">beyond business</span>.
            </h2>
            <p className="mt-8 text-[rgb(var(--muted))] leading-relaxed text-base sm:text-lg">
              Rachel Foko envisions a future where technology, innovation, and leadership work together to solve global
              challenges and empower communities worldwide. Her mission extends beyond business success — it is about
              creating a lasting legacy of transformation, empowerment, and meaningful progress.
            </p>
            <p className="mt-5 text-[rgb(var(--muted))] leading-relaxed text-base sm:text-lg">
              She believes leadership is about influence, transformation, and creating opportunities for others to
              thrive. Her philosophy centers around integrity, innovation, empowerment, and impact-driven solutions.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lavender-deep/30 via-rose-dust/20 to-gold-warm/30 blur-3xl" />
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden glass-strong p-8 flex flex-col justify-between">
                <div className="absolute inset-0 grid-pattern opacity-50" />
                <div className="relative">
                  <Sparkles className="h-8 w-8 text-gold-warm mb-4" />
                  <div className="text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))] mb-2">North Star</div>
                  <p className="font-display text-2xl lg:text-3xl leading-tight">
                    Technology, leadership and innovation in service of human potential.
                  </p>
                </div>
                <div className="relative mt-8 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))]">
                  <span>Integrity</span>
                  <span>·</span>
                  <span>Innovation</span>
                  <span>·</span>
                  <span>Impact</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            center
            eyebrow="Personal Core Values"
            title={<>The principles that <span className="gradient-text">guide</span> the work.</>}
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {VALUES.map((v, i) => {
              const Icon = valueIcons[i] ?? Sparkles;
              return (
                <Reveal key={v.title} delay={i * 0.08} className="rounded-3xl glass p-8 lift">
                  <Icon className="h-7 w-7 text-gold-warm mb-5" />
                  <h3 className="font-display text-xl mb-3">{v.title}</h3>
                  <p className="text-sm text-[rgb(var(--muted))] leading-relaxed">{v.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            center
            eyebrow="The Rachel Foko Legacy"
            title={<>Future vision for <span className="gradient-text">global innovation</span>.</>}
            description="Rachel's legacy is being written in every business empowered, every leader mentored, and every community uplifted. The work continues — building bridges between technology and humanity, between Africa and the world, between the present and a more luminous future."
          />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
