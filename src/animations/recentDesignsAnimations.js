import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const animateRecentDesigns = (sectionRef, refs) => {
  const {
    headerRef,
    fadeCardRef,
    oneDayCardRef,
    alterCardRef,
    atomAICardRef,
  } = refs;

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

  // 2. Upper row cards entrance (Fade & One Day We Met)
  const upperCards = [fadeCardRef?.current, oneDayCardRef?.current].filter(Boolean);
  if (upperCards.length > 0) {
    gsap.fromTo(
      upperCards,
      { x: -80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.0,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: upperCards[0],
          start: 'top 85%',
        },
      }
    );
  }

  // 3. Lower row cards entrance (Alter & AtomAI)
  const lowerCards = [alterCardRef?.current, atomAICardRef?.current].filter(Boolean);
  if (lowerCards.length > 0) {
    gsap.fromTo(
      lowerCards,
      { x: -80, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.0,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: lowerCards[0],
          start: 'top 85%',
        },
      }
    );
  }
};
