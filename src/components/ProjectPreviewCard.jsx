import  { forwardRef, useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const CardArrowButton = ({ isHovered }) => {
  return (
    <div className="absolute bottom-4 left-4 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#111113] border border-white/10 overflow-hidden flex items-center justify-center text-white backdrop-blur-md shadow-lg">
      {/* Arrow 1: Slides straight UP on hover */}
      <motion.span
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          y: isHovered ? '-100%' : '0%',
          opacity: isHovered ? 0 : 1,
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 1, 0.5, 1],
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </motion.span>

      {/* Arrow 2: Enters straight from BOTTOM on hover */}
      <motion.span
        className="absolute inset-0 flex items-center justify-center"
        initial={{ y: '100%', opacity: 0 }}
        animate={{
          y: isHovered ? '0%' : '100%',
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 1, 0.5, 1],
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </motion.span>
    </div>
  );
};

const ProjectPreviewCard = forwardRef(
  (
    {
      image,
      name,
      heightClass = 'h-[400px]',
      showHoverBadge = true,
      className = '',
    },
    ref
  ) => {
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
        // Ultra-smooth 0.12 LERP fluid trailing follow
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
        ref={ref}
        data-hide-cursor="true"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className={`group relative rounded-[20px] md:rounded-[28px] bg-[#0c0c0e] border border-white/10 p-2.5 md:p-3
           overflow-hidden shadow-2xl transition-all duration-300 w-full ${className}`}
      >
        {/* Project Image Container */}
        <div
          className={`relative w-full rounded-[16px] md:rounded-[22px] overflow-hidden bg-zinc-950 ${heightClass}`}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full "
          />

          {/* Bottom Left Circular Arrow Button */}
          <CardArrowButton isHovered={isHovered} />

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
      </div>
    );
  }
);

ProjectPreviewCard.displayName = 'ProjectPreviewCard';

export default ProjectPreviewCard;
