import { useState } from 'react';
import AnimatedButton from '../components/AnimatedButton';
import HeroBadge from '../components/HeroBadge';
import FaqItem from '../components/FaqItem';
import ryanHarperPortrait from '../assets/images/DeANEXSHfUPawiwrcmj8Tkiib1o.jpg';

const faqItems = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer:
      'I specialize in web design, branding, UI/UX, and Framer development, creating modern, user-friendly experiences tailored to your needs',
  },
  {
    id: 2,
    question: 'How do I start working with you?',
    answer:
      'Simply reach out through the contact form or book a call. We will discuss your project goals, timeline, and deliverables to get started seamlessly.',
  },
  {
    id: 3,
    question: 'What design tools do you use?',
    answer:
      'I primarily use Figma for UI/UX design and prototyping, Framer for interactive web development, and Adobe Creative Suite for branding assets.',
  },
  {
    id: 4,
    question: 'How long does a project take?',
    answer:
      'Project timelines depend on scope. Typical web design and Framer projects take between 2 to 4 weeks from initial concept to final launch.',
  },
  {
    id: 5,
    question: 'Do you provide revisions?',
    answer:
      'Yes, all projects include dedicated revision rounds during both design and development stages to ensure complete satisfaction.',
  },
  {
    id: 6,
    question: 'What industries do you work with?',
    answer:
      'I work with tech startups, SaaS companies, e-commerce brands, creative agencies, and ambitious founders across diverse industries.',
  },
  {
    id: 7,
    question: 'Do you offer development services?',
    answer:
      'Yes, I build fully responsive, animated, and CMS-ready websites natively in Framer, Webflow, and modern React frameworks.',
  },
  {
    id: 8,
    question: 'What is your pricing structure?',
    answer:
      'Projects are priced on a fixed-scope basis tailored to your project deliverables, ensuring full transparency with no hidden fees.',
  },
  {
    id: 9,
    question: 'Can you redesign my existing website?',
    answer:
      'Absolutely. I can audit your existing site, revamp the user experience and visual design, and rebuild it into a high-converting platform.',
  },
];

const FaqSection = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const handleToggle = (idx) => {
    setActiveFaq(activeFaq === idx ? -1 : idx);
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-[#070709] text-white py-12 md:py-20 px-0"
    >
      {/* Outer Container */}
      <div className="w-full max-w-full mx-auto rounded-[28px] md:rounded-[36px] bg-[#09090c] border border-white/10 p-6 sm:p-10 md:p-14 lg:p-16 shadow-2xl">

        {/*  grid setup */}
        <div className="ml-0 lg:ml-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* LEFT COLUMN: Sticky formula ) */}
          <div className="lg:col-span-5 min-w-0 lg:sticky lg:top-[105px] lg:self-start flex flex-col justify-between">
            <div>
              {/* Top Pill Badge */}
              <div className="mb-5">
                <HeroBadge text="⊙ FAQ Section" />
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4 flex items-center gap-3 flex-wrap">
                <span className="text-white font-normal">Questions,</span>
                <span className="text-zinc-400 font-normal">Answers</span>
              </h2>

              {/* Subtitle */}
              <p className="text-zinc-400 text-sm sm:text-base md:text-lg font-normal mb-8 max-w-md leading-relaxed">
                Get quick answers to your most pressing questions
              </p>

              {/* Review Card*/}
              <div
                className="w-full rounded-[20px]  p-7 md:p-8 mb-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                style={{
                  background: "linear-gradient(121deg, #787878 -52%, #111111 19%, #0a0a0a 100%)",
                  boxShadow: "rgba(184,180,180,0.08) 0px 2px 0px 0px inset, rgba(0,0,0,0.4) 0px 20px 40px",
                }}
              >
                {/* Header: Photo + Name + Company */}
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    src={ryanHarperPortrait}
                    alt="Ryan harper"
                    className="w-20 h-20 rounded-[8px] object-cover border border-white/10  "
                  />
                  <div className="flex flex-col gap-3">
                    <h4 className="font-jakarta text-[26px] font-medium text-white tracking-tight mb-">
                      Ryan harper
                    </h4>
                    <span className="font-inter text-[14px] text-zinc-300 font-normal mt-0.5">
                      Harper education
                    </span>
                  </div>
                </div>

                {/* Rating: 5.0 + Stars */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-inter text-[16px] font-semibold text-zinc-400">5.0</span>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="  font-inter text-[14px] md:text-[15px] font-normal leading-relaxed text-zinc-400">
                  Exceptional creativity and attention to detail! The final product not only looks great but also enhances user engagement
                </p>
              </div>

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

          {/* RIGHT COLUMN: FAQ List */}
          <div className="lg:col-span-7 w-full flex flex-col gap-[8px] pb-6 mt-3">
            {faqItems.map((item, idx) => (
              <FaqItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={activeFaq === idx}
                onClick={() => handleToggle(idx)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;