import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroBadge from '../components/HeroBadge';
import AnimatedButton from '../components/AnimatedButton';
import ServiceCard from '../components/ServiceCard';
import ServiceTags from '../components/ServiceTags';

//  Image for Service Cards
import websiteDesignImg from '../assets/images/IwwlXF60xjgLFBH3Sj6kzl9eXs.png';
import framerDesignImg from '../assets/images/B6zI6nUrHNwrRM7ASHmAUUgXW0c.png';
import framerDesignImg2 from '../assets/images/qaXP9CBTkpCNVvyTQ6Uxc8kN5ts.png';
import framerDesignImg3 from '../assets/images/Uh4eI5tuS1UcMjPLwFeqxnXBJKQ.png';

import { animateDesignServices } from '../animations/designServicesAnimations';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Exact Service Card Icons
const websiteIcon = (
  <svg className="w-5 h-5 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

// Vector Crop Tool Icon
const vectorCurveIcon = (
  <svg className="w-5 h-5 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7h5M7 3v14h14" />
    <path d="M7 11a6 6 0 0 1 6 6H7v-6z" fill="currentColor" fillOpacity="0.35" />
  </svg>
);

const logoIcon = vectorCurveIcon;
const graphicIcon = vectorCurveIcon;

const framerIcon = (
  <svg className="w-4 h-5 text-white shrink-0" viewBox="0 0 12 18" fill="currentColor">
    <path d="M0 0h12v6H6L0 0z" />
    <path d="M0 6h6l6 6H0V6z" />
    <path d="M0 12h6v6L0 12z" />
  </svg>
);

const DesignServicesSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const websiteCardRef = useRef(null);
  const logoCardRef = useRef(null);
  const framerCardRef = useRef(null);
  const graphicCardRef = useRef(null);
  const tagsRef = useRef(null);
  const topTagsRef = useRef(null);
  const bottomTagsRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Run GSAP Entrance Animation
      animateDesignServices(sectionRef, {
        headerRef,
        websiteCardRef,
        logoCardRef,
        framerCardRef,
        graphicCardRef,
        tagsRef,
        topTagsRef,
        bottomTagsRef,
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative min-h-screen bg-[#070709] text-white pt-2 md:pt-4 pb-12 md:pb-20 px-0 overflow-hidden"
    >
      {/* Outer Contained Dark Container */}
      <div className="w-full rounded-[28px] md:rounded-[36px] bg-[#09090c] border border-white/10 border-b-0
       px-5 sm:px-10 md:px-16 lg:px-22 py-8 sm:py-10 md:py-14 lg:py-16 shadow-2xl relative">

        {/* SECTION HEADER: Left Title/Badge/Desc + Right Contact Button */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          {/* Left Header Content */}
          <div className="flex flex-col items-start">

            {/* Top Pill Badge */}
            <div className="mb-6">
              <HeroBadge text="⊙ Design services" />
            </div>

            {/* Main Heading + Arrow */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-none flex items-center gap-3 mb-4">
              <span>Design </span>
              <span className="text-zinc-400 font-normal">Services</span>
            </h2>

            {/* Description */}
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
              Explore a suite of design services to elevate your brand.
            </p>
          </div>

          {/* Right Upper-Right Contact Button */}
          <div className="shrink-0">
            <AnimatedButton href="#contact" variant="light">
              Contact Now
            </AnimatedButton>
          </div>
        </div>

        {/* SERVICE CARDS ASYMMETRIC 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">

          {/* LEFT COLUMN*/}
          <div className="flex flex-col gap-4 md:gap-6">
            <ServiceCard
              ref={websiteCardRef}
              title="Website Design"
              description="Designing breathtaking, user-centric websites that boost engagement, conversions, and growth, perfectly aligned with your brand"
              icon={websiteIcon}
              image={websiteDesignImg}
            />
            <ServiceCard
              ref={graphicCardRef}
              title="Graphic Design"
              description="Crafting bold, engaging, and versatile graphic designs that elevate your brand and captivate your audience"
              icon={graphicIcon}
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4 md:gap-6">
            <ServiceCard
              ref={logoCardRef}
              title="Logo Design"
              description="Crafting distinctive, scalable, and impactful logos that embody your brand's identity and vision"
              icon={logoIcon}
            />
            <ServiceCard
              ref={framerCardRef}
              title="Framer Design"
              description="Bringing ideas to life with interactive, user-centered Framer designs that simplify complexity and elevate user experience"
              icon={framerIcon}
              scrollImages={[framerDesignImg, framerDesignImg2, framerDesignImg3]}
            />
          </div>

        </div>

        {/* SERVICE TAGS AREA */}
        <ServiceTags
          ref={tagsRef}
          topRowRef={topTagsRef}
          bottomRowRef={bottomTagsRef}
        />

      </div>
    </section>
  );
};

export default DesignServicesSection;
