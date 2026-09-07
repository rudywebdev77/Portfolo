import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

import ProjectCard from '../components/ProjectCard';
import poloProjectBuildingBrands from '../assets/images/polo_project_building_brands.jpg';
import poloProject1Img from '../assets/images/polo_project_1.jpg';
import poloProject2Img from '../assets/images/polo_project_2.jpg';
import sy0b9tueImg from '../assets/images/sy0b9tueLscYoe1Yckd5M2kdM.jpeg';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CardArrowButton = ({ isHovered }) => {
  return (
    <div className="absolute bottom-4 left-4 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#111113] border border-white/10 overflow-hidden flex items-center justify-center text-white backdrop-blur-md shadow-lg">
      {/* Arrow 1: Slides  UP on hover */}
      <motion.span
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          y: isHovered ? '-100%' : '0%',
          opacity: isHovered ? 0 : 1,
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 1, 0.5, 1],
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </motion.span>

      {/* Arrow 2: Enters  from BOTTOM on hover */}
      <motion.span
        className="absolute inset-0 flex items-center justify-center"
        initial={{ y: '100%', opacity: 0 }}
        animate={{
          y: isHovered ? '0%' : '100%',
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 1, 0.5, 1],
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </motion.span>
    </div>
  );
};

const ProjectCardItem = ({ project, idx, cardsRef }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      key={project.id}
      ref={(el) => (cardsRef.current[idx] = el)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full cursor-pointer"
    >
      <ProjectCard
        showHoverBadge={project.showViewBadge}
        className="p-2 md:p-2.5 bg-[#0b0b0e] border border-white/10 rounded-[10px] md:rounded-[18px] overflow-hidden"
      >
        {/* Main Project Image Display */}
        <div className={`relative w-full rounded-[14px] md:rounded-[18px] overflow-hidden ${project.aspectRatio || 'aspect-[16/10]'} bg-zinc-950`}>
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover filter grayscale contrast-105"
          />

          {/* Animated Circular Arrow Button */}
          <CardArrowButton isHovered={isHovered} />
        </div>
      </ProjectCard>
    </div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const topCards = [cardsRef.current[0], cardsRef.current[1]].filter(Boolean);
      const bottomCards = [cardsRef.current[2], cardsRef.current[3]].filter(Boolean);

      // Top 2 Cards: Animate from left
      if (topCards.length > 0) {
        gsap.fromTo(
          topCards,
          { x: -80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.0,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.35,
          }
        );
      }

      // Bottom 2 Cards: Animate from LEFT side on scroll
      if (bottomCards.length > 0) {
        gsap.fromTo(
          bottomCards,
          { x: -80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.0,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bottomCards[0],
              start: 'top 85%',
            },
          }
        );
      }
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Building brands to drive Results',
      img: poloProjectBuildingBrands,
      showViewBadge: true,
      aspectRatio: 'h-[520px]', 
    },
    {
      id: 2,
      title: 'ONE DAY, WE MET',
      img: poloProject1Img,
      showViewBadge: true,
      aspectRatio: 'h-[250px]', 
    },
    {
      id: 3,
      title: 'Futuristic Portrait',
      img: sy0b9tueImg,
      showViewBadge: true,
      aspectRatio: 'h-[250px]', 
    },
    {
      id: 4,
      title: 'Scale Business with Automation',
      img: poloProject2Img,
      showViewBadge: true,
      aspectRatio: 'h-[520px]', 
    },
  ];

  return (
    <div
      ref={sectionRef}
      id="projects"
      className="relative text-white w-full overflow-hidden pt-0 pb-6"
    >
      <div className="w-full">
        {/* 2-Column  Grid*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-start">
          {/* Left Column: Card 1 & Card 3 */}
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            <ProjectCardItem project={projects[0]} idx={0} cardsRef={cardsRef} />
            <ProjectCardItem project={projects[2]} idx={2} cardsRef={cardsRef} />
          </div>

          {/* Right Column: Card 2 & Card 4 */}
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            <ProjectCardItem project={projects[1]} idx={1} cardsRef={cardsRef} />
            <ProjectCardItem project={projects[3]} idx={3} cardsRef={cardsRef} />
          </div>
        </div>

        {/*  Arrow with  smooth  animation */}
        <div className="flex justify-center mt-6 mb-2">
          <div className="animate-float-slow text-white/90 p-1">
            <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
