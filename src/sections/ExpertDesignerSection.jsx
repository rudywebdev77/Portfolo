import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroBadge from '../components/HeroBadge';
import ProfileCard from '../components/ProfileCard';
import SkillTags from '../components/SkillTags';
import ExperienceList from '../components/ExperienceList';

import {
  animateExpertDesignerEntrance,
  animateExpertDesignerScroll,
} from '../animations/expertDesignerAnimations';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ExpertDesignerSection = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const profileCardRef = useRef(null);
  const infoCardRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Run GSAP Entrance Animation
      animateExpertDesignerEntrance({
        badgeRef,
        headingRef,
        subtitleRef,
        profileCardRef,
        infoCardRef,
      });

      // Run GSAP ScrollTrigger Scrub
      animateExpertDesignerScroll(sectionRef, {
        profileCardRef,
        infoCardRef,
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen bg-[#070709] text-white pt-2 md:pt-4 pb-12 md:pb-20 px-0 overflow-hidden"
    >
      {/* Outer Large Container  */}
      <div className="w-full rounded-[28px] md:rounded-[36px] bg-[#09090c] border border-white/10 border-b-0 p-6 sm:p-8 md:p-12 lg:p-14 shadow-2xl relative">

        {/* Section Top Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-16">
          {/* Badge — Same as HeroSection */}
          <div ref={badgeRef} className="mb-6 ">
            <HeroBadge text="⊙ Expert Designer" />
          </div>

          {/* Heading */}
          <h2
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl font-light font-normal tracking-tight text-white leading-tight mb-4"
          >
            Johan Beker, <span className="text-zinc-500">Your Designer</span>
          </h2>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-zinc-400 text-sm sm:text-base max-w-xl font-normal leading-relaxed"
          >
            Brief initial presentation of myself and my previous experiences.
          </p>
        </div>

        {/* Two-Column Card Layout — Compact Left Card + Taller Right Card */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-6 md:gap-7 max-w-[1040px] mx-auto">

          {/* Left Profile Card Column */}
          <div ref={profileCardRef} className="w-full lg:w-[440px] shrink-0">
            <ProfileCard />
          </div>

          {/* Right Information Card Column — Taller Height */}
          <div ref={infoCardRef} className="w-full lg:w-[600px] shrink-0">
            <div className="rounded-2xl bg-[#0c0c0f]  p-7 md:p-9 flex flex-col justify-between shadow-[0_24px_50px_-12px_rgba(0,0,0,0.85)] w-full min-h-[720px]">

              {/* Top Introduction Paragraph */}
              <div>
                <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed tracking-[-0.02em] font-normal mb-6">
                  I'm Johan Beker, a dedicated Web Designer & Developer based in the
                  vibrant city of Berlin, Germany. I specialize in creative design with
                  seamless technical execution to craft exceptional digital experiences.
                </p>

                {/* Divider 1 */}
                <div className="w-full h-px bg-white/10 my-9" />

                {/* Skill Tags */}
                <SkillTags />

                {/* Divider 2 */}
                <div className="w-full h-px bg-white/10 my-6" />

                {/* Experience History */}
                <ExperienceList />
              </div>

            </div>
          </div>
        </div>

      </div>


    </section>
  );
};

export default ExpertDesignerSection;
