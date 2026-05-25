'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';
import { SectionHeading } from '@/components/section-heading';

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          center
          eyebrow="Featured Video"
          title={<>Voices of <span className="gradient-text">vision</span> & transformation.</>}
          description="Explore moments from Rachel's global speaking engagements, leadership forums, interviews, and innovation conferences — reflecting her passion for creating meaningful global change."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-ink-900 via-lavender-night to-ink-950 shadow-2xl shadow-lavender-deep/30"
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
              className="absolute inset-0 group flex items-center justify-center"
            >
              <div className="absolute inset-0 aurora opacity-40" />
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />

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
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
