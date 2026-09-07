import  { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AutomationProjectCard from '../components/AutomationProjectCard';
import officialAutomationPortrait from '../assets/portfolio/sy0b9tueLscYoe1Yckd5M2kdM.jpeg';

import { animateAutomationEntrance, animateAutomationScroll } from '../animations/automationAnimations';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const logoItems = ['Asterisk', 'Eooks', 'Opal', 'Dune', 'Oasis'];

const AutomationSection = () => {
  const sectionRef = useRef(null);
  const portraitCardRef = useRef(null);
  const automationCardRef = useRef(null);
  const downArrowRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Run GSAP Entrance Animation
      animateAutomationEntrance({
        portraitCardRef,
        automationCardRef,
        downArrowRef,
      });

      // Run GSAP ScrollTrigger Scrub
      animateAutomationScroll(sectionRef, {
        portraitCardRef,
        automationCardRef,
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="automation"
      className="relative min-h-screen bg-[#070709] text-white py-20 md:py-28 px-4 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Monochrome Portrait Card */}
        <div ref={portraitCardRef} className="lg:col-span-6 w-full flex">
          <AutomationProjectCard className="w-full min-h-[540px] flex flex-col justify-between relative">
            <div className="relative w-full h-full min-h-[460px] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5">
              <img
                src={officialAutomationPortrait}
                alt="Official Monochrome Portrait Visual"
                className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50 pointer-events-none" />
            </div>
          </AutomationProjectCard>
        </div>

        {/* Right Column: Scale Business with Automation Card */}
        <div ref={automationCardRef} className="lg:col-span-6 w-full flex">
          <AutomationProjectCard className="w-full min-h-[540px] flex flex-col justify-between bg-[#0b0b0d]">
            
            {/* Top Badge & Content */}
            <div className="mb-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-zinc-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Atom AI - Automation Partner</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.1] mb-4">
                Scale Business <br />
                <span className="font-semibold">with Automation</span>
              </h2>

              {/* Description */}
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-normal">
                Manage all your data and workflows in one place. Automate processes,
                gain insights, and optimize your strategy with AI-powered intelligence.
              </p>

              {/* Horizontally Aligned Buttons */}
              <div className="flex items-center gap-3 flex-wrap mb-10">
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-full bg-white text-black text-xs md:text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-md"
                >
                  Get Started Now
                </a>
                <a
                  href="#services"
                  className="px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/15 text-zinc-200 text-xs md:text-sm font-medium hover:bg-white/10 hover:text-white transition-colors"
                >
                  View Services
                </a>
              </div>
            </div>

            {/* Bottom Client / Brand Logos Row */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap text-xs md:text-sm font-mono text-zinc-500 uppercase tracking-widest">
              {logoItems.map((logo) => (
                <span key={logo} className="hover:text-zinc-300 transition-colors">
                  {logo}
                </span>
              ))}
            </div>

          </AutomationProjectCard>
        </div>
      </div>

      {/* Downward Arrow & Made in Framer Footer Elements */}
      <div className="max-w-7xl mx-auto mt-16 flex items-center justify-between px-4">
        {/* Centered Down Arrow */}
        <div ref={downArrowRef} className="mx-auto flex flex-col items-center gap-1 text-zinc-500 animate-bounce">
          <span className="text-xs font-mono">SCROLL</span>
          <svg className="w-4 h-4 fill-current text-zinc-400" viewBox="0 0 24 24">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
          </svg>
        </div>

        {/* 'Made in Framer' Badge */}
        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-black text-xs font-semibold shadow-xl">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 0h12v8h-6l-6-8zm0 8h6v8h-6v-8zm0 8l-6 8v-8h6z" />
          </svg>
          <span>Made in Framer</span>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
