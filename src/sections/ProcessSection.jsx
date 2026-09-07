import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroBadge from '../components/HeroBadge';
import ProcessCard from '../components/ProcessCard';
import ProcessCTA from '../components/ProcessCTA';
import AnimatedTypewriterText from '../components/AnimatedTypewriterText';
import { animateProcessHorizontalScroll } from '../animations/processAnimations';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const processSteps = [
  {
    number: '1',
    title: "Let's Get In Touch",
    description:
      'Reach out through the contact form or book a call to discuss your project, vision, goals, and initial ideas.',
    step: 'Step 1',
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l7 17 2.5-6.5L20 12 4 4z" />
        <path d="M13.5 13.5L19 19" />
        <path d="M4 1.5v3M1.5 4h3" />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'Grab Your Designs',
    description:
      'Tell me your unique vision, and I’ll create stunning, functional designs that perfectly align with your goals',
    step: 'Step 2',
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.5 5.5L5.5 7.5L9.5 3.5" />
        <path d="M3.5 14.5L5.5 16.5L9.5 12.5" />
        <line x1="12.5" y1="5.5" x2="20.5" y2="5.5" />
        <line x1="12.5" y1="14.5" x2="20.5" y2="14.5" />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Kickstart Development',
    description:
      'I expertly transform your designs into a powerful, scalable solution, fully ready to launch',
    step: 'Step 3',
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 4l5 5" />
        <path d="M3 21l12.5-12.5" />
        <path d="M18 2v3m-1.5-1.5h3" />
        <path d="M21 8v2.5m-1.25-1.25h2.5" />
      </svg>
    ),
  },
  {
    number: '4',
    title: 'And Hand Over',
    description:
      'Receive a fully tested, high-quality product tailored to your project with smooth deployment and ongoing support.',
    step: 'Step 4',
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13.5 3c-2.5 0-6 2.5-8 7l4.5 4.5c4.5-2 7-5.5 7-8v-3.5h-3.5z" />
        <path d="M10 14.5L5 19.5" />
        <path d="M15 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
        <path d="M4.5 10c-1 1.5-2 4.5-2 4.5s3-1 4.5-2" />
        <path d="M14 19.5c1.5 1 4.5 2 4.5 2s-1-3-2-4.5" />
      </svg>
    ),
  },
];

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      animateProcessHorizontalScroll(sectionRef, trackRef);
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative min-h-screen bg-[#070709] text-white pt-2 md:pt-4 pb-12 md:pb-20 px-0 overflow-hidden"
    >
      {/* Main Outer Container */}
      <div className="w-full rounded-[28px] md:rounded-[36px] bg-[#09090c] border border-white/10 border-b-0 p-6 sm:p-8 md:p-12 lg:p-14 shadow-2xl relative">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-16">
          {/* Badge */}
          <div className="mb-6">
            <HeroBadge text="⊙ How it works" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight mb-4">
            Process Is <span className="text-zinc-400">Everything</span>
          </h2>

          {/* Subtitle — Letter-by-letter character reveal animation */}
          <AnimatedTypewriterText
            text="Simple, streamlined process is what get's you results"
            className="text-zinc-400 text-sm sm:text-base max-w-xl font-normal leading-relaxed"
          />
        </div>

        {/* Scroll-Driven Horizontal Cards Track Viewport */}
        <div className="relative w-full overflow-hidden py-4">
          <div
            ref={trackRef}
            className="flex items-stretch gap-4 sm:gap-5 md:gap-6 w-max"
          >
            {processSteps.map((step) => (
              <ProcessCard
                key={step.number}
                number={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
                step={step.step}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <ProcessCTA />
      </div>

     
    </section>
  );
};

export default ProcessSection;
