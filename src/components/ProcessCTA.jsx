import 'react';
import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

const ProcessCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className="w-full max-w-[860px] mx-auto rounded-[22px] md:rounded-[28px] bg-[#0c0c0e] border border-white/5 p-5 sm:p-6 px-6 sm:px-8 md:px-9 flex flex-col sm:flex-row items-center justify-between 
      gap-5 md:gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] mt-12 md:mt-16"
    >
      {/* Left: Smile Icon + Text */}
      <div className="flex flex-col items-start text-left">
        <div className="flex items-center gap-2.5 mb-3">
          {/*  Smiley Face Icon  */}
          <svg className="w-5 h-5 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
            <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
          </svg>
          <h4 className="text-base md:text-xl font-semibold text-white tracking-tight">
            I am with you in every step
          </h4>
        </div>
        <p className="text-sm md:text-md text-zinc-300 font-normal ">
          alongside you at each step for seamless experience
        </p>
      </div>

      {/* Right: Dual CTA Buttons */}
      <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-end">
        <AnimatedButton href="#projects" variant="dark">
          See All Projects
        </AnimatedButton>
        <AnimatedButton href="#contact" variant="light">
          Contact Now
        </AnimatedButton>
      </div>
    </motion.div>
  );
};

export default ProcessCTA;
