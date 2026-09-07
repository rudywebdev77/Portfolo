import  { useState } from 'react';
import { motion } from 'framer-motion';

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const HeroAboutAction = ({ href = '#about', label = '(about me)' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="hidden sm:inline-flex relative items-center">
      {/* Circular Button — Fixed dark background (#111113), overflow hidden */}
      <motion.a
        href={href}
        aria-label={label}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-10 h-10 rounded-full bg-[#111113] border border-white/10 relative overflow-hidden flex items-center justify-center text-white shadow-md shrink-0 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Arrow 1: Slides straight UP and fades out on hover */}
        <motion.span
          className="absolute inset-0 flex items-center justify-center text-white"
          animate={{
            x: 0,
            y: isHovered ? '-100%' : '0%',
            opacity: isHovered ? 0 : 1,
          }}
          transition={{
            duration: 0.5,
            ease: [0.25, 1, 0.5, 1],
          }}
        >
          <ArrowIcon />
        </motion.span>

        {/* Arrow 2: Enters straight from BOTTOM on hover, exits to bottom on leave */}
        <motion.span
          className="absolute inset-0 flex items-center justify-center text-white"
          initial={{ x: 0, y: '100%', opacity: 0 }}
          animate={{
            x: 0,
            y: isHovered ? '0%' : '100%',
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.25, 1, 0.5, 1],
          }}
        >
          <ArrowIcon />
        </motion.span>
      </motion.a>

      {/* Floating '(about me)' text — positioned at bottom-right of button with smooth slow rotation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -25, y: -4 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5,
          rotate: isHovered ? -14 : -25,
          y: isHovered ? 0 : -4,
        }}
        transition={{
          duration: 0.5,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="pointer-events-none absolute -bottom-5 left-7 text-[11px] font-mono text-zinc-300 whitespace-nowrap opacity-90"
      >
        {label}
      </motion.div>
    </div>
  );
};

export default HeroAboutAction;
