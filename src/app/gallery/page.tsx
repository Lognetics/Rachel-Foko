'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import { PortraitImage } from '@/components/portrait-image';
import { GALLERY_IMAGES } from '@/lib/content';
import { CTABanner } from '@/components/home/cta-banner';
import { cn } from '@/lib/utils';

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const next = () => setActive((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length));
  const prev = () => setActive((i) => (i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments of Impact"
        intro="A visual journey through leadership, innovation, speaking engagements, collaborations, and transformational experiences — reflecting Rachel's passion for excellence and meaningful impact across industries and communities."
      />

      <section className="relative py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.button
                key={img.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: (i % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActive(i)}
                className={cn(
                  'group relative block w-full mb-5 break-inside-avoid rounded-2xl overflow-hidden bg-ink-900',
                  img.span === 'tall' ? 'aspect-[3/4]' : img.span === 'wide' ? 'aspect-[4/3]' : 'aspect-square'
                )}
              >
                <PortraitImage src={img.src} alt={img.alt} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.alt}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] grid place-items-center p-4"
            onClick={close}
          >
            <div className="absolute inset-0 bg-ink-950/90 backdrop-blur-xl" />
            <button
              onClick={(e) => { e.stopPropagation(); close(); }}
              aria-label="Close"
              className="absolute top-6 right-6 z-10 h-12 w-12 rounded-full glass-strong grid place-items-center text-white hover:bg-white/20 transition"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
              className="absolute left-6 z-10 h-12 w-12 rounded-full glass-strong grid place-items-center text-white hover:bg-white/20 transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
              className="absolute right-6 z-10 h-12 w-12 rounded-full glass-strong grid place-items-center text-white hover:bg-white/20 transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full aspect-[3/4] sm:aspect-video rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <PortraitImage src={GALLERY_IMAGES[active].src} alt={GALLERY_IMAGES[active].alt} sizes="80vw" />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-ink-950/80 to-transparent text-white">
                <div className="font-display text-xl">{GALLERY_IMAGES[active].alt}</div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/60 mt-1">{active + 1} / {GALLERY_IMAGES.length}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABanner />
    </>
  );
}
