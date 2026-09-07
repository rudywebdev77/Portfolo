import { motion,  } from 'framer-motion';

const FaqItem = ({ question, answer, isOpen, onClick, className = '' }) => {
  return (
    <motion.div
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`group relative rounded-[14px] md:rounded-[18px] bg-[#0c0c0e] shadow-[0_20px_50px_rgba(0,0,0,0.8)]
         p-4 sm:p-5 mb-3 w-full max-w-full lg:max-w-[600px] overflow-hidden ${className}`}
    >
      {/* Question Row: Title on Left, Icon on Right */}
      <div className="flex items-center justify-between gap-4 select-none">
        <h3 className="text-sm md:text-base font-normal tracking-tight text-white/90">
          {question}
        </h3>
        
        {/* + / × Icon: Smooth 45-degree rotation */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-7 h-7 rounded-full  flex items-center justify-center text-zinc-300 shrink-0"
        >
          <span className=" text-[24px] text-base font-normal leading-none text-white/90">+</span>
        </motion.div>
      </div>

      {/* Answer Panel: CSS Grid 0fr -> 1fr smooth continuous expansion (Zero stutter) */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-7 ">
            <p className="text-zinc-400 text-[16px] font-normal leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FaqItem;

