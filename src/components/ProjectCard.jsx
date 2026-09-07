import { useState, useRef, useEffect } from 'react';

const ProjectCard = ({
  children,
  className = '',
  showHoverBadge = true,
  onClick,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const badgeRef = useRef(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const animFrameId = useRef(null);

  const handleMouseMove = (e) => {
    if (!showHoverBadge) return;
    const rect = e.currentTarget.getBoundingClientRect();
    targetPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    targetPos.current = { x, y };
    currentPos.current = { x, y };
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const loop = () => {
      // 0.12 Lerp factor gives ultra-smooth fluid trailing follow
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.12;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.12;

      if (badgeRef.current) {
        badgeRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  return (
    <div
      data-hide-cursor="true"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`group relative rounded-3xl bg-[#0c0c0e] border border-white/10 p-3 md:p-4 overflow-hidden shadow-2xl ${className}`}
      {...props}
    >
      {children}

      {/* Floating 'View project' hover badge — Ultra-smooth LERP fluid trailing animation */}
      {showHoverBadge && (
        <div
          ref={badgeRef}
          className={`absolute top-0 left-0 z-30 pointer-events-none transition-opacity duration-300 ease-out ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0) translate(-50%, -50%)',
          }}
        >
          <div className="px-4 py-1.5 rounded-full bg-black/80 border border-white/60 text-white text-xs md:text-sm font-normal tracking-wide backdrop-blur-md shadow-xl whitespace-nowrap">
            View project
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
