import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/content';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { PageTransition } from '@/components/page-transition';
import { Loader } from '@/components/loader';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: SITE.title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: 'website',
    images: [{ url: '/images/rachel/rachel-portrait-1.jpg', width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: ['/images/rachel/rachel-portrait-1.jpg'],
  },
  keywords: [
    'Rachel Foko', 'Rachel Consulting', 'global speaker', 'entrepreneur',
    'AI consulting', 'leadership', 'women in business', 'XPLORE Nigeria',
    'XPLORE Sweden', 'Good Governance Award', 'changemaker', 'visionary leader',
  ],
  authors: [{ name: 'Rachel Foko' }],
  creator: 'Rachel Foko',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans antialiased bg-white text-ink-950">
        <ThemeProvider>
          <Loader />
          <Nav />
          <PageTransition>
            <main className="relative">{children}</main>
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
