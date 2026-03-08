'use client';
import { useEffect, useRef } from 'react';

export function useScrollAnimation(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const y = options.y ?? 40;
    const duration = options.duration ?? 0.8;
    const stagger = options.stagger ?? 0.1;
    const delay = options.delay ?? 0;

    const targets = el.querySelectorAll('.animate-on-scroll');
    const elements = targets.length > 0 ? Array.from(targets) : [el];

    // Set initial hidden state
    elements.forEach((element, i) => {
      element.style.opacity = '0';
      element.style.transform = `translateY(${y}px)`;
      element.style.transition = `opacity ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
      element.style.transitionDelay = targets.length > 0
        ? `${stagger * i}s`
        : `${delay}s`;
    });

    // Trigger animation when element scrolls into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -15% 0px' }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [options.y, options.duration, options.ease, options.delay, options.start, options.stagger]);

  return ref;
}
