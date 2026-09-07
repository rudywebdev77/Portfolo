import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const tagIcons = {
  Copywriting: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  Posters: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  ),
  'Framer Migration': (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  ),
  'Video & Motion Graphics': (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" />
    </svg>
  ),
  'Landing Pages': (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <line x1="2" y1="8" x2="22" y2="8" />
      <circle cx="5" cy="5.5" r="0.75" />
      <circle cx="8" cy="5.5" r="0.75" />
      <circle cx="11" cy="5.5" r="0.75" />
    </svg>
  ),
  Optimization: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  'Custom Code': (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  SEO: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  Icons: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
    </svg>
  ),
  'Social Media': (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  ),
};

const topRowTags = [
  'Video & Motion Graphics',
  'Copywriting',
  'Posters',
  'Framer Migration',
  'Landing Pages',
  'Optimization',
];

const bottomRowTags = [
  'Landing Pages',
  'Optimization',
  'Custom Code',
  'SEO',
  'Icons',
  'Social Media',
];

const ServiceTags = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="relative mt-10 md:mt-14 overflow-hidden py-2 w-full">
      {/* Soft Fade Overlay Gradients on Left and Right Edges */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-28 z-10 bg-gradient-to-r from-[#070709] via-[#070709]/90 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-28 z-10 bg-gradient-to-l from-[#070709] via-[#070709]/90 to-transparent pointer-events-none" />

      {/* Row 1: Right to Left Auto-Scroll Marquee */}
      <div className="overflow-hidden mb-3 md:mb-4 flex">
        <motion.div
          className="flex items-center gap-3 shrink-0"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 28,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {[...topRowTags, ...topRowTags, ...topRowTags].map((tag, idx) => (
            <div
              key={`top-${tag}-${idx}`}
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-[#121216] border border-white/5 text-sm sm:text-md font-normal text-zinc-300
               cursor-pointer shrink-0 shadow-sm"
            >
              <span className="text-zinc-400">{tagIcons[tag] || null}</span>
              <span>{tag}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Left to Right Auto-Scroll Marquee */}
      <div className="overflow-hidden flex">
        <motion.div
          className="flex items-center gap-3 shrink-0"
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            duration: 28,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {[...bottomRowTags, ...bottomRowTags, ...bottomRowTags].map((tag, idx) => (
            <div
              key={`bottom-${tag}-${idx}`}
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-[#121216]  text-sm sm:text-md font-normal text-zinc-200
               cursor-pointer shrink-0 shadow-sm"
            >
              <span className="text-zinc-400">{tagIcons[tag] || null}</span>
              <span>{tag}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
});

ServiceTags.displayName = 'ServiceTags';

export default ServiceTags;
