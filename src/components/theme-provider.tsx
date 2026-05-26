'use client';

import { useEffect } from 'react';

/**
 * Light-only base. Dark/image variants are opt-in per <Section />.
 * Kept as a wrapper so we can re-enable a global toggle later without re-wiring.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);
  return <>{children}</>;
}
