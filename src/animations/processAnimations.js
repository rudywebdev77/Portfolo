import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const animateProcessHorizontalScroll = (sectionRef, trackRef) => {
  if (!sectionRef?.current || !trackRef?.current) return;

  const track = trackRef.current;
  const container = track.parentElement;

  const getScrollAmount = () => {
    const trackWidth = track.scrollWidth;
    const containerWidth = container ? container.clientWidth : window.innerWidth;
    return -(trackWidth - containerWidth + 24);
  };

  const anim = gsap.to(track, {
    x: getScrollAmount,
    ease: 'none',
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 35%',
      end: 'bottom top+=150',
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });

  return anim;
};
