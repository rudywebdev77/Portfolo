import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const animateDesignServices = (sectionRefOrRefs, refsArg) => {
  const refs = (refsArg || sectionRefOrRefs) || {};

  const {
    headerRef,
    websiteCardRef,
    logoCardRef,
    framerCardRef,
    graphicCardRef,
    tagsRef,
    topTagsRef,
    bottomTagsRef,
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
          start: 'top 80%',
        },
      }
    );
  }

  // 2. Top 2 Cards entrance (Website Design & Logo Design)
  const topCards = [websiteCardRef?.current, logoCardRef?.current].filter(Boolean);
  if (topCards.length > 0) {
    gsap.fromTo(
      topCards,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.0,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: topCards[0],
          start: 'top 82%',
        },
      }
    );
  }

  // 3. Bottom 2 Cards entrance (Framer Design & Graphic Design)
  const bottomCards = [framerCardRef?.current, graphicCardRef?.current].filter(Boolean);
  if (bottomCards.length > 0) {
    gsap.fromTo(
      bottomCards,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.0,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bottomCards[0],
          start: 'top 85%',
        },
      }
    );
  }

  // 4. Service Tag Rows horizontal scroll scrub
  if (tagsRef && tagsRef.current && topTagsRef?.current && bottomTagsRef?.current) {
    gsap.fromTo(
      topTagsRef.current,
      { xPercent: -10 },
      {
        xPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: tagsRef.current,
          start: 'top 90%',
          end: 'bottom 20%',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      bottomTagsRef.current,
      { xPercent: 10 },
      {
        xPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: tagsRef.current,
          start: 'top 90%',
          end: 'bottom 20%',
          scrub: 1,
        },
      }
    );
  }
};
