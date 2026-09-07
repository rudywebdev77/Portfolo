import AnimatedButton from '../components/AnimatedButton';
import HeroBadge from '../components/HeroBadge';

// Testimonial Avatar Assets
import avatar1 from '../assets/images/eFraHAe16muHsBuOQT8J7PtnM.png';
import avatar2 from '../assets/images/54tqpXnovhmg1DaaTUMYucwnE.png';
import avatar3 from '../assets/images/8vljaI1ESGZN8BSOxNQ8nHJdCw.png';
import avatar4 from '../assets/images/hmr5CgOg36xVV5pHu3aQPFGu9U.png';

const testimonialsData = [
  {
    id: 'test-1',
    avatar: avatar1,
    name: 'Will smith',
    role: 'Harper education',
    quote:
      'The designs exceeded our expectations! Every element felt purposeful, creating a seamless and visually stunning brand identity.',
    rating: 4.7,
  },
  {
    id: 'test-2',
    avatar: avatar2,
    name: 'Ikta Sollork',
    role: 'PARAL CEO',
    quote:
      'Working with this process was effortless. The vision was understood perfectly, and the designs truly represent my brand.',
    rating: 4.7,
  },
  {
    id: 'test-3',
    avatar: avatar3,
    name: 'Liloch',
    role: 'AIO Founder',
    quote:
      'Polo delivered an exceptional design that transformed our brand presence. The attention to detail and creative execution were world-class.',
    rating: 5.0,
  },
  {
    id: 'test-4',
    avatar: avatar4,
    name: 'Diane swag',
    role: 'Swag Studio',
    quote:
      'A game-changing experience! The design process was smooth, collaborative, and resulted in a brand presence we\'re proud of.',
    rating: 5.0,
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#070709] text-white py-12 md:py-20 px-0"
    >
      {/* Outer Contained Dark Container */}
      <div className="w-full max-w-full mx-auto rounded-[28px] md:rounded-[36px] bg-[#09090c] border border-white/10 border-b-0 p-6 sm:p-12 md:p-18 lg:p-20
       shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* LEFT COLUMN: Heading, Subtitle, Stats & Action Buttons (Sticky Header) */}
          <div className="lg:col-span-6 flex flex-col justify-between lg:sticky lg:top-28">
            <div>
              {/* Top Pill Badge: "⊙ Happy Clients" */}
              <div className="mb-5">
                <HeroBadge text="⊙ Happy Clients" />
              </div>

              {/* Main Heading: "Clients Love me" */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4 flex items-center gap-3 flex-wrap">
                <span className="text-white font-normal">Clients</span>
                <span className="text-zinc-400 font-normal">Love me</span>
              </h2>

              {/* Subtitle */}
              <p className="text-zinc-300 text-sm sm:text-base md:text-lg font-normal mb-8 max-w-md leading-relaxed">
                Trusted by 100+ happy clients, adding $250M+ in revenue.
              </p>

              {/* Stats Row (100+, $250m, 4.8) */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
                <div className="bg-[#0c0c0e] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 rounded-[8px] p-4 sm:p-5 flex flex-col items-center justify-center text-center">
                  <span className="text-2xl sm:text-3xl font-medium text-white mb-1">100+</span>
                  <span className="text-xs sm:text-sm text-zinc-400 font-normal">Happy clients</span>
                </div>

                <div className="bg-[#0c0c0e] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 rounded-[8px] p-4 sm:p-5 flex flex-col items-center justify-center text-center">
                  <span className="text-2xl sm:text-3xl font-medium text-white mb-1">$250m</span>
                  <span className="text-xs sm:text-sm text-zinc-400 font-normal leading-tight">revenue added</span>
                </div>

                <div className="bg-[#0c0c0e] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 rounded-[8px] p-4 sm:p-5 flex flex-col items-center justify-center text-center">
                  <span className="text-2xl sm:text-3xl font-medium text-white mb-1">4.8</span>
                  <span className="text-xs sm:text-sm text-zinc-400 font-normal leading-tight">Average Rating</span>
                </div>
              </div>

              {/* Divider Line */}
              <div className="h-px w-full bg-white/10 my-6" />

              {/* Action Buttons */}
              <div className="flex items-center gap-4 flex-wrap">
                <AnimatedButton href="#projects" variant="dark">
                  See All Projects
                </AnimatedButton>

                <AnimatedButton href="#contact" variant="light">
                  Contact Now
                </AnimatedButton>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Pure Tailwind Sticky Cards Stacking Area */}
          <div className="lg:col-span-6 flex flex-col relative gap-4 lg:gap-0">
            {testimonialsData.map((item, index) => {
              const isLastCard = index === testimonialsData.length - 1;
              const cardTop = isLastCard ? 140 : 140 + index * 28;

              return (
                <div
                  key={item.id}
                  className="lg:sticky w-full pb-4 lg:pb-[20px]"
                  style={{
                    zIndex: 10 + index,
                    top: `${cardTop}px`,
                  }}
                >
                  <div className={`rounded-[24px] bg-[#0d0d0f] border border-white/5 p-6 md:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col gap-4
                   ${isLastCard ? 'min-h-[268px]' : ''
                    }`}>
                    {/* Header: Avatar + Name & Role */}
                    <div className="flex items-center gap-4">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-16 h-16 rounded-[8px] object-cover border border-white/10 shrink-0"
                      />
                      <div className="flex flex-col">
                        <h3 className="font-jakarta text-[22px] font-semibold text-white tracking-[-0.02em]">
                          {item.name}
                        </h3>
                        <span className="font-inter text-[15px] text-white/70 font-normal mt-0.5">
                          {item.role}
                        </span>
                      </div>
                    </div>

                    <div className="h-px w-full bg-white/10 my-1" />

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <span className="font-inter text-[15px] text-zinc-400 font-normal">{item.rating}</span>
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="font-inter text-[15px] leading-[1.65] font-normal text-white/80">
                      {item.quote}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;