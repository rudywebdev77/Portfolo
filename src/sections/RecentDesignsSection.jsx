import  { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroBadge from '../components/HeroBadge';
import HeroAboutAction from '../components/HeroAboutAction';
import AnimatedButton from '../components/AnimatedButton';
import ProjectPreviewCard from '../components/ProjectPreviewCard';

// Exact Project Image Assets
import fadeImage from '../assets/images/1q1n0UavD6GRCdPoosEQxM5TmpQ.png';
import oneDayImage from '../assets/images/B46VnW80N88dC2fK7yW0nsm1Fw.png';
import alterImage from '../assets/images/polo_project_building_brands.jpg';
import atomAIImage from '../assets/images/wonjYFYHeebnK8WRvO1qondtAh4.png';

import { animateRecentDesigns } from '../animations/recentDesignsAnimations';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const projectsData = [
  {
    id: 'fade',
    name: 'Fade',
    image: fadeImage,
    heightClass: 'h-[500px] md:h-[540px]',
  },
  {
    id: 'one-day-we-met',
    name: 'One Day We Met',
    image: oneDayImage,
    heightClass: 'h-[250px] md:h-[270px]',
  },
  {
    id: 'alter',
    name: 'Alter',
    image: alterImage,
    heightClass: 'h-[250px] md:h-[270px]',
  },
  {
    id: 'atomai',
    name: 'AtomAI',
    image: atomAIImage,
    heightClass: 'h-[500px] md:h-[540px]',
  },
];

const RecentDesignsSection = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headerRef = useRef(null);
  const fadeCardRef = useRef(null);
  const oneDayCardRef = useRef(null);
  const alterCardRef = useRef(null);
  const atomAICardRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      animateRecentDesigns(sectionRef, {
        badgeRef,
        headerRef,
        fadeCardRef,
        oneDayCardRef,
        alterCardRef,
        atomAICardRef,
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="recent-designs"
      className="relative min-h-screen bg-[#070709] text-white pt-2 md:pt-4 pb-12 md:pb-20 px-0 overflow-hidden"
    >
      {/* Outer Contained Dark Container */}
      <div className="w-full rounded-[28px] md:rounded-[36px] bg-[#09090c] border border-white/10 border-b-0 px-5 sm:px-10 md:px-16 lg:px-22
       py-8 sm:py-10 md:py-14 lg:py-16 shadow-2xl relative">

        {/* SECTION HEADER */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          {/* Left Header Content */}
          <div className="flex flex-col items-start">

            {/* Top Pill Badge */}
            <div ref={badgeRef} className="mb-6 ">
            <HeroBadge text="⊙ Recent Projects" />
          </div>

            {/* Main Heading: Two-tone "Recent Designs" + Arrow Action */}
            <div className="flex items-center gap-3.5 mb-4 flex-wrap">
              <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none flex items-center gap-3">
                <span className="text-white font-normal">Recent</span>
                <span className="text-zinc-500 font-normal">Designs</span>
              </h2>
              <HeroAboutAction href="#recent-designs" label="(see all)" />
            </div>

            {/* Description */}
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
              Showcase of some of my recent sleek websites
            </p>
          </div>

          {/* Right Header Buttons */}
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <AnimatedButton href="#projects" variant="dark">
              See All Projects
            </AnimatedButton>
            <AnimatedButton href="#contact" variant="light">
              Contact Now
            </AnimatedButton>
          </div>
        </div>

        {/* STAGGERED / MASONRY PROJECT COMPOSITION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 items-start">

          {/* LEFT COLUMN: Fade (Tall) → Alter (Short) */}
          <div className="flex flex-col gap-4 md:gap-6 w-full">
            {/* Fade Card */}
            <ProjectPreviewCard
              ref={fadeCardRef}
              name={projectsData[0].name}
              image={projectsData[0].image}
              heightClass={projectsData[0].heightClass}
              showHoverBadge={true}
            />

            {/* Alter Card */}
            <ProjectPreviewCard
              ref={alterCardRef}
              name={projectsData[2].name}
              image={projectsData[2].image}
              heightClass={projectsData[2].heightClass}
              showHoverBadge={true}
            />
          </div>

          {/* RIGHT COLUMN: One Day We Met (Short) → AtomAI (Tall) */}
          <div className="flex flex-col gap-4 md:gap-6 w-full">
            {/* One Day We Met Card */}
            <ProjectPreviewCard
              ref={oneDayCardRef}
              name={projectsData[1].name}
              image={projectsData[1].image}
              heightClass={projectsData[1].heightClass}
              showHoverBadge={true}
            />

            {/* AtomAI Card */}
            <ProjectPreviewCard
              ref={atomAICardRef}
              name={projectsData[3].name}
              image={projectsData[3].image}
              heightClass={projectsData[3].heightClass}
              showHoverBadge={true}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default RecentDesignsSection;
