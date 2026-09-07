import { forwardRef } from 'react';

const CheckIcon = () => (
  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 p-[9px] text-white">
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
    </svg>
  </div>
);

const CrossIcon = () => (
  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 p-[9px] text-white">
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="currentColor">
      <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,1,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" />
    </svg>
  </div>
);

const ComparisonRow = forwardRef(({ positive, negative, className = '' }, ref) => {
  return (
    <div
      ref={ref}
      className={`min-h-[230px] md:h-[230px] w-full overflow-hidden rounded-[20px] bg-[#111113] ${className}`}
      style={{ boxShadow: 'rgba(92, 92, 92, 0.08) 0px 2px 0px 0px inset' }}
    >
      <div className="flex h-full w-full flex-col md:flex-row">
        {/* Positive / Why Choose Me */}
        <div className="flex flex-1 flex-col items-start p-[40px]">
          <CheckIcon />
          <h4 className="mt-5 font-jakarta text-[20px] leading-[1.25] tracking-[-0.02em] text-white sm:text-[25px]">
            {positive.title}
          </h4>
          <p className="mt-3 max-w-[430px] font-inter text-[15px] leading-[1.6] text-white/70">
            {positive.description}
          </p>
        </div>

        {/* Divider Line */}
        <div className="mx-6 h-px bg-white/10 md:my-[40px] md:mx-0 md:h-auto md:w-px" />

        {/* Negative / Alternative */}
        <div className="flex flex-1 flex-col items-start p-[40px]">
          <CrossIcon />
          <h4 className="mt-5 font-jakarta text-[20px] leading-[1.25] tracking-[-0.02em] text-white sm:text-[25px]">
            {negative.title}
          </h4>
          <p className="mt-3 max-w-[430px] font-inter text-[15px] leading-[1.6] text-white/70">
            {negative.description}
          </p>
        </div>
      </div>
    </div>
  );
});

ComparisonRow.displayName = 'ComparisonRow';

export default ComparisonRow;