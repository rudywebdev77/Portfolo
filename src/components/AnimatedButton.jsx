import { useRef } from 'react';
import gsap from 'gsap';

const AnimatedButton = ({ href = '#', children, variant = 'dark', className = '', ...props }) => {
  const buttonRef = useRef(null);
  const bgRef = useRef(null);

  const isDark = variant === 'dark';

  const handleMouseEnter = (e) => {
    if (!buttonRef.current || !bgRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.set(bgRef.current, {
      transformOrigin: `${x}px ${y}px`,
    });

    gsap.to(bgRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.45,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  };

  const handleMouseLeave = (e) => {
    if (!buttonRef.current || !bgRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.set(bgRef.current, {
      transformOrigin: `${x}px ${y}px`,
    });

    gsap.to(bgRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.inOut',
      overwrite: 'auto',
    });
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center justify-center px-7 py-3 rounded-full overflow-hidden text-sm font-semibold shadow-md cursor-pointer ${isDark
          ? 'bg-gradient-to-b from-[#242429] to-[#121215] border border-white/10 text-white'
          : 'bg-white text-black border border-transparent'
        } ${className}`}
      {...props}
    >
      {/* Expanding Background  Layer */}
      <span
        ref={bgRef}
        className={`absolute inset-0 rounded-full z-0 pointer-events-none opacity-0 scale-0 ${isDark ? 'bg-[#1c1c22]' : 'bg-zinc-200'
          }`}
      />

      {/* Static Foreground Content */}
      <span className="relative z-10 block pointer-events-none">
        {children}
      </span>
    </a>
  );
};

export default AnimatedButton;
