import 'react';

// Exact match to reference card style
const TestimonialCard = ({ quote, author, className = '', style = {} }) => {
  return (
    <div
      style={style}
      className={`
        rounded-xl
        bg-[#0c0c0f]
        border border-white/10
        p-4 md:p-5
        shadow-[0_15px_40px_rgba(0,0,0,0.85)]
        backdrop-blur-md
        w-[170px] md:w-[200px]
        transition-transform duration-300
        hover:scale-[1.02]
        ${className}
      `}
    >
      {/* Quote — crisp white text */}
      <p className="text-[14px] md:text-[15px] font-normal text-white leading-snug mb-3 tracking-normal">
        {quote}
      </p>
      {/* Author — right aligned mono zinc-400 */}
      <p className="text-[11px] md:text-[12px] font-mono text-zinc-400 text-right">
        {author}
      </p>
    </div>
  );
};

export default TestimonialCard;