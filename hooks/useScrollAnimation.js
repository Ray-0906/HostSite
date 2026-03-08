'use client';
import { useEffect, useRef } from 'react';

export function useScrollAnimation(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ctx;
    const initGSAP = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const elements = el.querySelectorAll('.animate-on-scroll');
        if (elements.length === 0) {
          gsap.from(el, {
            y: options.y ?? 40,
            opacity: 0,
            duration: options.duration ?? 0.8,
            ease: options.ease ?? 'power2.out',
            delay: options.delay ?? 0,
            scrollTrigger: {
              trigger: el,
              start: options.start ?? 'top 85%',
              toggleActions: 'play none none none',
            },
          });
        } else {
          elements.forEach((element, i) => {
            gsap.from(element, {
              y: options.y ?? 40,
              opacity: 0,
              duration: options.duration ?? 0.8,
              ease: options.ease ?? 'power2.out',
              delay: (options.stagger ?? 0.1) * i,
              scrollTrigger: {
                trigger: element,
                start: options.start ?? 'top 85%',
                toggleActions: 'play none none none',
              },
            });
          });
        }
      }, el);
    };

    initGSAP();
    return () => ctx?.revert();
  }, [options.y, options.duration, options.ease, options.delay, options.start, options.stagger]);

  return ref;
}
