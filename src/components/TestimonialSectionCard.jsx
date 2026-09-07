import { forwardRef } from 'react';

const TestimonialSectionCard = forwardRef(
  ({ avatar, quote, name, role, rating = 5, className = '' }, ref) => {
    return (
      <div
        ref={ref}
        className={`group relative rounded-[22px] md:rounded-[28px] bg-[#0c0c0e] border border-white/10 p-6 md:p-8 flex flex-col
           justify-between shadow-xl  ${className}`}
      >
        {/* Top: 5-Star Rating & Quote */}
        <div className="mb-6">
          {/* 5-Star Rating */}
          <div className="flex items-center gap-1 text-amber-400 mb-4">
            {[...Array(rating)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote Text */}
          <p className="text-zinc-300 text-sm md:text-base font-normal leading-relaxed">
            "{quote}"
          </p>
        </div>

        {/* Bottom: Author Info (Avatar, Name, Role) */}
        <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
          <img
            src={avatar}
            alt={name}
            className="w-11 h-11 rounded-[8px] object-cover border border-white/10 shrink-0"
          />
          <div className="flex flex-col">
            <h4 className="text-white text-sm md:text-base font-medium tracking-tight">
              {name}
            </h4>
            <span className="text-zinc-400 text-xs md:text-sm font-normal">
              {role}
            </span>
          </div>
        </div>
      </div>
    );
  }
);

TestimonialSectionCard.displayName = 'TestimonialSectionCard';

export default TestimonialSectionCard;
