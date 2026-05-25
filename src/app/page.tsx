import { HomeHero } from '@/components/home/hero';
import { AboutPreview } from '@/components/home/about-preview';
import { AchievementsGrid } from '@/components/home/achievements-grid';
import { GlobalImpactSection } from '@/components/home/global-impact';
import { VideoSection } from '@/components/home/video-section';
import { QuoteSection } from '@/components/home/quote-section';
import { NewsSection } from '@/components/home/news-section';
import { CTABanner } from '@/components/home/cta-banner';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutPreview />
      <AchievementsGrid />
      <GlobalImpactSection />
      <VideoSection />
      <QuoteSection />
      <NewsSection />
      <CTABanner />
    </>
  );
}
