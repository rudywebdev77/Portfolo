import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const animateTestimonials = (sectionRef, refs) => {
  const { headerRef, cardRefs } = refs;

  // 1. Header entrance animation
  if (headerRef && headerRef.current) {
    gsap.fromTo(
      headerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 82%',
        },
      }
    );
  }

  // 2. Testimonial Cards entrance
  const validCardRefs = (cardRefs || []).map((r) => r.current).filter(Boolean);
  if (validCardRefs.length > 0) {
    gsap.fromTo(
      validCardRefs,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.0,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: validCardRefs[0],
          start: 'top 85%',
        },
      }
    );
  }
};
