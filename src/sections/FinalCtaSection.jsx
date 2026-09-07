import HeroBadge from '../components/HeroBadge';
import AnimatedButton from '../components/AnimatedButton';
import showcaseImage from '../assets/images/polo_showcase_frame.png';

const FinalCtaSection = () => {
  return (
    <section
      id="contact"
      className="relative z-10 w-full bg-[#070709] text-white pt-12 md:pt-16 pb-4 md:pb-6 px-0"
    >
      {/* Outer Container*/}
      <div className="w-full max-w-full mx-auto rounded-[28px] md:rounded-[36px] bg-[#09090c] border border-white/10 
      border border-b-white/5 p-6 sm:p-10 md:p-14 lg:p-16 shadow-2xl">

        {/* Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT COLUMN + Vertical Services + Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-between">

            {/* Header: Badge + Heading */}
            <div className="flex flex-col items-start mb-8">
              {/* Section Label */}
              <div className="mb-6">
                <HeroBadge text="⊙ Let's Connect" />
              </div>

              {/* Main Heading: */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight">
                Let's Grow <span className="text-zinc-400 font-normal">Together</span>
              </h2>
            </div>

            {/* SERVICES LIST  */}
            <div className="flex flex-col mb-10">
              {/*  Web Design */}
              <div className="py-5 border-t border-white/10">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
                    Web Design
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs text-zinc-300 font-medium">
                    Starting from $1,999
                  </span>
                </div>
                <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed max-w-lg">
                  Showcasing sleek, high-performance designs tailored for impact
                </p>
              </div>

              {/* Framer Developmen */}
              <div className="py-5 border-t border-b border-white/10">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
                    Framer Development
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs text-zinc-300 font-medium">
                    Starting from $4,999
                  </span>
                </div>
                <p className="text-zinc-400 text-sm md:text-base font-normal leading-relaxed max-w-lg">
                  Building visually stunning, user-focused websites that elevate brands.
                </p>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex items-center gap-4 flex-wrap">
              <AnimatedButton href="#projects" variant="dark">
                See All Projects
              </AnimatedButton>

              <AnimatedButton href="#contact" variant="light">
                Get Started Now
              </AnimatedButton>
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="lg:col-span-6 w-full">
            <div
              className="relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden "
            >
              <img
                src={showcaseImage}
                alt="Polo Showcase Template"
                className="w-full h-full object-cover "
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FinalCtaSection;
