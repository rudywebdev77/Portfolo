import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const animateFaq = (sectionRef, refs) => {
  const { leftContentRef, faqListRef } = refs;

  // 1. Left Content entrance (Badge, Heading, Testimonial Card, Buttons)
  if (leftContentRef && leftContentRef.current) {
    gsap.fromTo(
      leftContentRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftContentRef.current,
          start: 'top 82%',
        },
      }
    );
  }

  // 2. Right FAQ List Accordion entrance
  if (faqListRef && faqListRef.current) {
    gsap.fromTo(
      faqListRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: faqListRef.current,
          start: 'top 85%',
        },
      }
    );
  }
};
