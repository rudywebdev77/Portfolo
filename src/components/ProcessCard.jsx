import 'react';

const ProcessCard = ({ number, icon, title, description, step }) => {
  return (
    <div className="w-[290px] sm:w-[315px] md:w-[330px] lg:w-[340px] shrink-0 rounded-[14px] md:rounded-[18px] bg-[#0c0c0e] border border-white/5
     p-6 md:p-8 flex flex-col justify-between shadow-[0_24px_50px_-12px_rgba(0,0,0,0.85)] ">
      
      {/* Top Header: Icon & Number Badge */}
      <div className="flex items-center justify-between mb-8">
        <div className="w-11 h-11  flex items-center justify-center text-white shrink-0">
          {icon}
        </div>
        <div className="w-9 h-9 rounded-full bg-black/50 border border-white/5 flex items-center justify-center
         text-sm font-sans text-white font-semibold">
          {number}
        </div>
      </div>

      {/* Content */}
      <div className="mb-6 ">
        <h3 className="text-xl md:text-2xl font-normal text-white mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-zinc-300 text-sm leading-relaxed font-normal">
          {description}
        </p>
      </div>

      {/* Footer Divider & Step Indicator Pill */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="px-3 py-1 rounded-full bg-black/[0.05] border border-white/10 text-xs font-mono text-zinc-300">
          {step}
        </span>
      </div>
    </div>
  );
};

export default ProcessCard;
