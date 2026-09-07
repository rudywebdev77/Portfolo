import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const animateProjectsEntrance = (refs) => {
  const { leftProjectRef, topRightProjectRef, bottomRightProjectRef } = refs;

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out', duration: 0.9 },
  });

  if (leftProjectRef?.current) {
    tl.fromTo(
      leftProjectRef.current,
      { y: 70, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9 }
    );
  }

  if (topRightProjectRef?.current) {
    tl.fromTo(
      topRightProjectRef.current,
      { y: 90, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9 },
      '-=0.7'
    );
  }

  if (bottomRightProjectRef?.current) {
    tl.fromTo(
      bottomRightProjectRef.current,
      { y: 110, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9 },
      '-=0.7'
    );
  }

  return tl;
};

export const animateProjectsScroll = (sectionRef, refs) => {
  if (!sectionRef?.current) return;

  const { leftProjectRef, topRightProjectRef, bottomRightProjectRef } = refs;

  const scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1,
    },
  });

  if (leftProjectRef?.current) {
    scrollTl.to(leftProjectRef.current, { yPercent: -5 }, 0);
  }

  if (topRightProjectRef?.current) {
    scrollTl.to(topRightProjectRef.current, { yPercent: -12 }, 0);
  }

  if (bottomRightProjectRef?.current) {
    scrollTl.to(bottomRightProjectRef.current, { yPercent: -18 }, 0);
  }

  return scrollTl;
};
