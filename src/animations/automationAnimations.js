import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const animateAutomationEntrance = (refs) => {
  const { portraitCardRef, automationCardRef, downArrowRef } = refs;

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out', duration: 0.9 },
  });

  if (portraitCardRef?.current) {
    tl.fromTo(
      portraitCardRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9 }
    );
  }

  if (automationCardRef?.current) {
    tl.fromTo(
      automationCardRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9 },
      '-=0.7'
    );
  }

  if (downArrowRef?.current) {
    tl.fromTo(
      downArrowRef.current,
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      '-=0.4'
    );
  }

  return tl;
};

export const animateAutomationScroll = (sectionRef, refs) => {
  if (!sectionRef?.current) return;

  const { portraitCardRef, automationCardRef } = refs;

  const scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1,
    },
  });

  if (portraitCardRef?.current) {
    scrollTl.to(portraitCardRef.current, { yPercent: -8 }, 0);
  }

  if (automationCardRef?.current) {
    scrollTl.to(automationCardRef.current, { yPercent: -14 }, 0);
  }

  return scrollTl;
};
