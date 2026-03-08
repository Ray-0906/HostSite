'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteTransitionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // Instant scroll — no smooth animation delay
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
