import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroBadge from '../components/HeroBadge';
import HeroButton from '../components/HeroButton';
import TestimonialCard from '../components/TestimonalCard';
import ShootingStars from '../components/ShootingStars';
import HeroAboutAction from '../components/HeroAboutAction';
import AnimatedTypewriterText from '../components/AnimatedTypewriterText';
import ProjectsSection from './ProjectsSection';

import heroVideo from '../assets/video/7UD0cQYVifWCo0HolmUKnCWLuO4.mp4';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroSection = () => {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const btnsRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const arrow1Ref = useRef(null);
  const arrow2Ref = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(badgeRef.current, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
        .fromTo(headingRef.current, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.3')
        .fromTo(descRef.current, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.35')
        .fromTo(btnsRef.current, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
        .fromTo(card1Ref.current, { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9 }, '-=0.5')
        .fromTo(card2Ref.current, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9 }, '-=0.6');

      // Continuous subtle floating animation for Card 1 + Arrow 1
      gsap.to([card1Ref.current, arrow1Ref.current], {
        y: -10,
        duration: 2.8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      //  animation for Card 2 + Arrow 2
      gsap.to([card2Ref.current, arrow2Ref.current], {
        y: 10,
        duration: 3.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 0.3,
      });
    }, heroRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative bg-[#070709] text-white overflow-hidden pb-12"
    >
      {/* = BACKGROUND: Looping Video (Top Hero Area Only) — */}
      <div
        className="absolute top-0 inset-x-0 h-[650px] md:h-[750px] z-0 overflow-hidden pointer-events-none"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: 0.5,
            filter: 'grayscale(100%) contrast(1.15) brightness(1.3)',
            objectPosition: 'center 18%',
            transform: 'scale(1.35)',
            transformOrigin: 'center 18%',
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay layers */}
        <div className="absolute inset-0 bg-[#070709]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709]/80 via-[#070709]/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#070709] via-[#070709] to-transparent" />
      </div>

      {/* ===== Shooting Stars over top video hero area only ===== */}
      <div className="absolute top-0 inset-x-0 h-[650px] md:h-[750px] z-10 pointer-events-none overflow-hidden">
        <ShootingStars />
      </div>

      {/* ===== FOREGROUND CONTENT ===== */}
      <div className="relative z-20 w-full pt-28 md:pt-36">

        {/* TOP HERO ROW: Text Content + Floating Testimonial Cards*/}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-0">
          {/* LEFT: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start">

            {/* Badge */}
            <div ref={badgeRef} className="mb-7">
              <HeroBadge text="⊙ UI/UX & Graphic Designer" />
            </div>

            {/* Heading + Arrow INLINE */}
            <div ref={headingRef} className="flex items-center gap-2 mb-6 flex-wrap">
              <h1 className="text-6xl sm:text-7xl md:text-8xl tracking-tight leading-none flex items-center gap-4 flex-wrap">
                <span className="text-white font-normal">Johan</span>
                <span className="text-zinc-400 font-light">Beker</span>
              </h1>

              <HeroAboutAction />
            </div>

            {/* Description — Letter-by-letter character reveal animation */}
            <div ref={descRef} className="mb-9">
              <AnimatedTypewriterText
                className="text-base md:text-lg leading-relaxed max-w-lg"
                style={{ color: '#a1a1aa' }}
              />
            </div>

            {/* Buttons — Vertical full-width */}
            <div ref={btnsRef} className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-3 sm:gap-4">
              <HeroButton variant="secondary" href="#projects" className="w-full sm:w-auto text-center py-3.5">See All Projects</HeroButton>
              <HeroButton variant="primary" href="#contact" className="w-full sm:w-auto text-center py-3.5">Contact Now</HeroButton>
            </div>
          </div>

          {/* RIGHT: Floating Testimonial Cards*/}
          <div className="lg:col-span-5 relative min-h-[360px] hidden lg:block">

            {/* Card 1 — upper left */}
            <div
              ref={card1Ref}
              className="absolute z-20 "
              style={{ top: '60px', left: '0px', transform: 'rotate(-8deg)' }}
            >
              <TestimonialCard
                quote='" Working with him was a game changer! "'
                author="-pranavnb"
              />
            </div>

            {/* Card 2 — lower right */}
            <div
              ref={card2Ref}
              className="absolute z-20"
              style={{ top: '140px', right: '0px', transform: 'rotate(-3deg)' }}
            >
              <TestimonialCard
                quote='" We Increased our conversions by 200% "'
                author="-vijaynb"
              />
            </div>

            {/* EXACT 2 CURSOR ARROWS */}

            {/* Cursor 1: Pointing top-right */}
            <div
              ref={arrow1Ref}
              className="absolute z-30 pointer-events-none"
              style={{ top: '165px', left: '190px' }}
            >
              <svg width="18" height="24" viewBox="0 0 18 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" style={{ transform: 'scaleX(-1)' }}>
                <path d="M1 1L1 18.5L5 14L7.5 21L10 20L7.5 13H13L1 1Z" />
              </svg>
            </div>

            {/* Cursor 2: Pointing top-left*/}
            <div
              ref={arrow2Ref}
              className="absolute z-30 pointer-events-none"
              style={{ top: '155px', left: '228px' }}
            >
              <svg width="18" height="24" viewBox="0 0 18 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
                <path d="M1 1L1 18.5L5 14L7.5 21L10 20L7.5 13H13L1 1Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* BOTTOM: Projects Section */}
        <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 mt-5 md:mt-6">
          <ProjectsSection />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
