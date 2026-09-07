import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHiddenByBadge, setIsHiddenByBadge] = useState(false);

  useEffect(() => {
    // Only activate custom cursor on non-touch desktop screens
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      targetPos.current = { x, y };
      setIsVisible(true);

      // Hide white dot cursor when hovering over elements that have custom cursor badges (e.g. project cards)
      const target = e.target;
      const isOverBadgeElement = target && target.closest && !!target.closest('[data-hide-cursor="true"]');

      setIsHiddenByBadge((prevHidden) => {
        // When exiting image card boundary, instantly snap position to exact mouse point
        if (prevHidden && !isOverBadgeElement) {
          currentPos.current = { x, y };
          if (dotRef.current) {
            dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
          }
        }
        return isOverBadgeElement;
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      targetPos.current = { x, y };
      currentPos.current = { x, y };
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Ultra-smooth 120fps LERP Animation Loop
    let animId;
    const loop = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.22;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.22;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className={`fixed top-0 left-0 z-50 pointer-events-none transition-opacity duration-200 ease-out ${
        isVisible && !isHiddenByBadge ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
      }`}
      style={{
        willChange: 'transform',
        transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
      }}
    >
      {/* Crisp White Dot Cursor matching reference image */}
      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]" />
    </div>
  );
};

export default CustomCursor;
