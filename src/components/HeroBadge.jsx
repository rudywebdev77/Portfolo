import 'react';

// Reference: dark pill badge with clean ⊙ symbol, pure white text & larger size
const HeroBadge = ({ text = 'UI/UX & Graphic Designer', className = '' }) => {
  return (
    <div
      className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#111113] border border-white/5 text-base
         font-medium text-white shadow-md transition-all duration-200 ${className}`}
    >
      <span>{text}</span>
    </div>
  );
};

export default HeroBadge;
