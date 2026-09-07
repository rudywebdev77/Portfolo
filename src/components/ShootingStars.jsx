import  { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ShootingStars = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      if (!container) return;

      const starCount = 6;
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className =
          'absolute h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none rounded-full';
        star.style.width = `${Math.random() * 140 + 100}px`;
        // Start from Left side (0% to 35%)
        star.style.top = `${Math.random() * 55 + 5}%`;
        star.style.left = `${Math.random() * 35 + 2}%`;
        star.style.opacity = '0';
        star.style.transform = 'rotate(32deg)';
        container.appendChild(star);

        // Slow & smooth motion from Left to Right
        gsap.to(star, {
          x: 450,
          y: 280,
          opacity: 0.85,
          duration: 3.2 + Math.random() * 1.5, // Slower speed
          delay: i * 2.2 + Math.random() * 2,
          repeat: -1,
          repeatDelay: 4 + Math.random() * 4,
          ease: 'power1.inOut',
          onRepeat: () => {
            star.style.top = `${Math.random() * 55 + 5}%`;
            star.style.left = `${Math.random() * 35 + 2}%`;
          },
        });
      }
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
    />
  );
};

export default ShootingStars;
