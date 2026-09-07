import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ShootingStars = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      if (!container) return;

      const starCount = 5;

      for (let i = 0; i < starCount; i++) {
        // Main container element for star + glowing head (initially hidden opacity-0)
        const star = document.createElement('div');
        star.className = 'absolute flex items-center pointer-events-none z-0 opacity-0';
        star.style.opacity = '0';

        // Gradient tail (transparent at back, bright white towards front head)
        const tail = document.createElement('div');
        tail.className =
          'h-[1.5px] w-full bg-gradient-to-r from-transparent via-white/40 to-white rounded-full';

        // Glowing star head at the front leading edge
        const head = document.createElement('div');
        head.className =
          '-ml-1 w-1 h-1 rounded-full bg-white shadow-[0_0_10px_3px_rgba(255,255,255,1),0_0_20px_6px_rgba(255,255,255,0.7)] shrink-0';

        star.appendChild(tail);
        star.appendChild(head);
        container.appendChild(star);

        const shoot = (isFirstRun = false) => {
          const width = container.clientWidth || window.innerWidth || 1400;
          const heroHeight = Math.min(container.clientHeight || 450, 480);

          // Start position in upper-left header region only
          const startX = Math.random() * (width * 0.3) - 180;
          const startY = Math.random() * (heroHeight * 0.35) + 10;

          // Shallower 18-23 degree slope so stars fly across top header without descending vertically
          const angle = 18 + Math.random() * 5;
          const angleRad = (angle * Math.PI) / 180;

          // Target X/Y distance (flies across right screen edge)
          const targetX = width - startX + 300;
          const targetY = targetX * Math.tan(angleRad);

          // Flight duration (smooth glide: ~320px/sec)
          const totalDistance = Math.hypot(targetX, targetY);
          const duration = totalDistance / (320 + Math.random() * 80);

          // Shorter tail length (70px to 130px)
          const starLength = Math.random() * 60 + 70;

          // Instantly set position & keep hidden before delay timer starts
          gsap.set(star, {
            x: 0,
            y: 0,
            left: `${startX}px`,
            top: `${startY}px`,
            width: `${starLength}px`,
            opacity: 0,
            transform: `rotate(${angle}deg)`,
            transformOrigin: 'left center',
          });

          // Shorter delay: stars start almost immediately and repeat more frequently (2s to 5s)
          const delay = isFirstRun
            ? i * 1.2 + Math.random() * 0.8
            : Math.random() * 3 + 2;

          const tl = gsap.timeline({
            delay,
            onComplete: () => shoot(false),
          });

          // 1. Continuous movement across screen (linear speed, no stopping)
          tl.to(
            star,
            {
              x: targetX,
              y: targetY,
              duration: duration,
              ease: 'none',
            },
            0
          );

          // 2. Fade in quickly as it enters
          tl.to(
            star,
            {
              opacity: 1,
              duration: duration * 0.15,
              ease: 'power1.out',
            },
            0
          );

          // 3. Smooth fade out as it exits off screen
          tl.to(
            star,
            {
              opacity: 0,
              duration: duration * 0.35,
              ease: 'power1.in',
            },
            duration * 0.65
          );
        };

        shoot(true);
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
