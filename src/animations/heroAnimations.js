import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const animatePoloHeroEntrance = (refs) => {
  const {
    badgeRef,
    headingRef,
    arrowBtnRef,
    descRef,
    buttonsRef,
    globeRef,
    card1Ref,
    card2Ref,
    projectCardsRef,
  } = refs;

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out', duration: 0.9 },
  });

  if (badgeRef?.current) {
    tl.fromTo(
      badgeRef.current,
      { y: -15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    );
  }

  if (headingRef?.current) {
    tl.fromTo(
      headingRef.current,
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.4'
    );
  }

  if (arrowBtnRef?.current) {
    tl.fromTo(
      arrowBtnRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
      '-=0.6'
    );
  }

  if (descRef?.current) {
    tl.fromTo(
      descRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 },
      '-=0.5'
    );
  }

  if (buttonsRef?.current) {
    tl.fromTo(
      buttonsRef.current?.children ? Array.from(buttonsRef.current.children) : [],
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
      '-=0.4'
    );
  }

  if (globeRef?.current) {
    tl.fromTo(
      globeRef.current,
      { opacity: 0, scale: 0.85 },
      { opacity: 0.5, scale: 1, duration: 1.2, ease: 'power2.out' },
      '-=0.8'
    );
  }

  if (card1Ref?.current) {
    tl.fromTo(
      card1Ref.current,
      { opacity: 0, scale: 0.8, rotate: -12 },
      { opacity: 1, scale: 1, rotate: -6, duration: 0.8, ease: 'back.out(1.2)' },
      '-=0.7'
    );
  }

  if (card2Ref?.current) {
    tl.fromTo(
      card2Ref.current,
      { opacity: 0, scale: 0.8, rotate: 12 },
      { opacity: 1, scale: 1, rotate: 5, duration: 0.8, ease: 'back.out(1.2)' },
      '-=0.6'
    );
  }

  if (projectCardsRef?.current) {
    tl.fromTo(
      projectCardsRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9 },
      '-=0.5'
    );
  }

  return tl;
};

export const animatePoloHeroScroll = (heroRef, refs) => {
  if (!heroRef?.current) return;

  const { card1Ref, card2Ref, globeRef, projectCardsRef } = refs;

  const scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: heroRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });

  if (card1Ref?.current) {
    scrollTl.to(card1Ref.current, { yPercent: -35, rotate: -10 }, 0);
  }

  if (card2Ref?.current) {
    scrollTl.to(card2Ref.current, { yPercent: -45, rotate: 8 }, 0);
  }

  if (globeRef?.current) {
    scrollTl.to(globeRef.current, { yPercent: -15, scale: 1.08 }, 0);
  }

  if (projectCardsRef?.current) {
    scrollTl.to(projectCardsRef.current, { yPercent: -10 }, 0);
  }

  return scrollTl;
};
