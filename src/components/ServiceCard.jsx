import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const ServiceCard = forwardRef(
  (
    {
      title,
      description,
      icon,
      image,
      dualImages,
      scrollImages,
      className = '',
      children,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`group relative rounded-[24px] md:rounded-[28px] bg-[#0c0c0e] border border-white/5 p-5 sm:p-6 md:p-7
          shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between ${className}`}
      >
        {/* Top Header: Icon + Title & Description */}
        <div>
          {/* Icon + Title Inline */}
          <div className="flex items-center gap-3 mb-3">
            {icon}
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-zinc-300 text-sm sm:text-base font-normal leading-relaxed">
            {description}
          </p>
        </div>

        {/* Single Image Preview Container (e.g. Website Design) */}
        {image && (
          <div className="relative w-full rounded-[16px] md:rounded-[20px] overflow-hidden aspect-[16/8.2] border border-white/5 mt-6">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            {/* Subtle dark gradient overlay */}
            <div className="absolute inset-0" />
          </div>
        )}

        {/* Infinite Auto-Scrolling Images Track (e.g. Framer Design - 3 Images Right to Left) */}
        {scrollImages && scrollImages.length > 0 && (
          <div className="relative w-full  rounded-[18px] md:rounded-[22px] overflow-hidden h-[210px] sm:h-[240px] md:h-[265px] mt-6 bg-[#08080a] flex items-center">
            {/* Left & Right Soft Fade Overlay Gradients */}
            <div className="absolute inset-y-0 left-0 w-12 z-10 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/80 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 z-10 bg-gradient-to-l from-[#0c0c0e] via-[#0c0c0e]/80 to-transparent pointer-events-none" />

            {/* Seamless Infinite Marquee Track */}
            <motion.div
              className="flex items-center gap-3.5 shrink-0 py-1"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 16,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              {[...scrollImages, ...scrollImages].map((img, idx) => (
                <div
                  key={idx}
                  className="w-[210px] sm:w-[245px] md:w-[270px] h-[200px] sm:h-[230px] md:h-[255px] shrink-0 
                  rounded-[18px] sm:rounded-[22px] overflow-hidden bg-zinc-900 border border-white/5 shadow-xl"
                >
                  <img
                    src={img}
                    alt={`Framer preview ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Dual Side-by-Side Images (fallback) */}
        {dualImages && dualImages.length >= 2 && !scrollImages && (
          <div className="grid grid-cols-2 gap-3 relative w-full rounded-[16px] md:rounded-[20px] overflow-hidden aspect-[16/9] mt-6">
            <div className="relative h-full rounded-[14px] overflow-hidden bg-zinc-900 border border-white/5">
              <img
                src={dualImages[0]}
                alt={`${title} 1`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-full rounded-[14px] overflow-hidden bg-zinc-900 border border-white/5">
              <img
                src={dualImages[1]}
                alt={`${title} 2`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {children}
      </div>
    );
  }
);

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
