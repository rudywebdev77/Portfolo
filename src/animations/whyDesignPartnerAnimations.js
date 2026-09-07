import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const animateWhyDesignPartner = (sectionRef, refs) => {
  const { introRef, cardRefs } = refs;

  if (!sectionRef || !sectionRef.current || !cardRefs || cardRefs.length === 0) return;

  const validCards = cardRefs.filter(Boolean);
  if (validCards.length === 0) return;

  // Intro Header entrance
  if (introRef && introRef.current) {
    gsap.fromTo(
      introRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }

  // Set initial positions:
  // Card 1 (idx 0) starts at top (y: 0, opacity: 1)
  // Cards 2, 3, 4 start hidden below (y: 400, opacity: 0)
  validCards.forEach((card, idx) => {
    if (idx > 0) {
      gsap.set(card, { y: 400, opacity: 0 });
    }
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'center center',
      end: '+=1600',
      pin: true,
      pinSpacing: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  // 55px top peek offset per stacked card
  const peekStep = 55;

  // Animate cards sequentially ONE BY ONE as user scrolls:
  // Card 2 arrives first -> Card 3 arrives second -> Card 4 arrives third
  validCards.forEach((card, idx) => {
    if (idx === 0) return;

    tl.to(card, {
      y: idx * peekStep,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
    });
  });
};
