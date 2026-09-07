import  { useRef, useEffect } from 'react';
import gsap from 'gsap';

const AutomationProjectCard = ({
  children,
  className = '',
  showArrow = true,
  onClick,
  ...props
}) => {
  const cardRef = useRef(null);
  const badgeRef = useRef(null);

  const xTo = useRef(null);
  const yTo = useRef(null);

  useEffect(() => {
    if (!badgeRef.current) return;

    // QuickSetter
    xTo.current = gsap.quickTo(badgeRef.current, 'x', {
      duration: 0.35,
      ease: 'power3.out',
    });
    yTo.current = gsap.quickTo(badgeRef.current, 'y', {
      duration: 0.35,
      ease: 'power3.out',
    });
  }, []);

  const handleMouseEnter = () => {
    if (badgeRef.current) {
      gsap.to(badgeRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.2,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseLeave = () => {
    if (badgeRef.current) {
      gsap.to(badgeRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
      });
    }
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current || !xTo.current || !yTo.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    xTo.current(x);
    yTo.current(y);
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`group relative rounded-3xl bg-[#0c0c0e] border border-white/10 p-6 md:p-8 overflow-hidden shadow-2xl transition-all duration-300 hover:border-white/20 ${className}`}
      {...props}
    >
      {children}

      {/* Circular Arrow Button at lower-left card edge */}
      {showArrow && (
        <div className="absolute bottom-6 left-6 z-20 w-10 h-10 rounded-full bg-black/90 border border-white/15 flex items-center justify-center text-white text-sm shadow-lg group-hover:bg-white group-hover:text-black transition-all duration-300">
          <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
            ↗
          </span>
        </div>
      )}

      {/* Smooth trailing 'View project' hover badge */}
      <div
        ref={badgeRef}
        className="absolute top-0 left-0 z-30 pointer-events-none opacity-0 scale-75 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-xs font-bold shadow-2xl tracking-wide uppercase">
          <span>View project</span>
          <span className="text-sm">↗</span>
        </div>
      </div>
    </div>
  );
};

export default AutomationProjectCard;
