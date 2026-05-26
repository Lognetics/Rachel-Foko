'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/section-heading';
import { Section } from '@/components/section';

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <Section variant="dark">
      <div className="absolute inset-0 aurora opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          center
          eyebrow="Featured Video"
          title={<>Voices of <span className="italic-accent">vision</span> & transformation.</>}
          description="Explore moments from Rachel's global speaking engagements, leadership forums, interviews, and innovation conferences."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 relative aspect-video rounded-3xl overflow-hidden shadow-[0_30px_90px_-20px_rgba(91,75,138,0.6)] ring-1 ring-white/10"
        >
          {playing ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/owMSadN_HvA?autoplay=1&rel=0"
              title="Rachel Consulting"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              aria-label="Play video"
              className="absolute inset-0 group"
            >
              <Image
                src="/images/rachel/rachel-event-2.jpg"
                alt="Rachel speaking"
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-900/30 to-transparent" />

              <div className="absolute inset-0 grid place-items-center">
                <div className="relative flex flex-col items-center gap-6 z-10">
                  <div className="relative">
                    <span className="absolute inset-0 -m-3 rounded-full bg-gold-warm/30 animate-ping" />
                    <span className="relative h-20 w-20 rounded-full bg-gradient-to-br from-gold-soft to-gold-deep grid place-items-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="h-7 w-7 text-ink-950 fill-ink-950 ml-1" />
                    </span>
                  </div>
                  <div className="text-center text-white">
                    <div className="font-display text-2xl sm:text-3xl">A Personal Message from Rachel</div>
                    <div className="text-xs uppercase tracking-[0.3em] text-white/70 mt-2">Watch · 3 min</div>
                  </div>
                </div>
              </div>
            </button>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
