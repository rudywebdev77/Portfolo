import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const animateExpertDesignerEntrance = (refs) => {
  const {
    badgeRef,
    headingRef,
    subtitleRef,
    profileCardRef,
    infoCardRef,
  } = refs;

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out', duration: 0.8 },
  });

  if (badgeRef?.current) {
    tl.fromTo(
      badgeRef.current,
      { y: -15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );
  }

  if (headingRef?.current) {
    tl.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 },
      '-=0.3'
    );
  }

  if (subtitleRef?.current) {
    tl.fromTo(
      subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      '-=0.4'
    );
  }

  if (profileCardRef?.current) {
    tl.fromTo(
      profileCardRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.4'
    );
  }

  if (infoCardRef?.current) {
    tl.fromTo(
      infoCardRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.6'
    );
  }

  return tl;
};

export const animateExpertDesignerScroll = (sectionRef, refs) => {
  if (!sectionRef?.current) return;

  const { profileCardRef, infoCardRef } = refs;

  const scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1,
    },
  });

  // Both cards move smoothly together with identical top alignment
  if (profileCardRef?.current) {
    scrollTl.to(profileCardRef.current, { y: -15 }, 0);
  }

  if (infoCardRef?.current) {
    scrollTl.to(infoCardRef.current, { y: -15 }, 0);
  }

  return scrollTl;
};
