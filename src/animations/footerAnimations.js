import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const animateFooterReveal = (footerRef) => {
  if (!footerRef.current) return;

  // 1. Exact Framer setup: will-change + 1200px perspective
  gsap.set(footerRef.current, {
    willChange: 'transform',
    transformPerspective: 1200,
  });

  // 2. Exact Framer translateY(-150px) -> translateY(0px) scrubbed with scroll
  gsap.fromTo(
    footerRef.current,
    {
      y: -150,
    },
    {
      y: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
        invalidateOnRefresh: true,
      },
    }
  );
};
