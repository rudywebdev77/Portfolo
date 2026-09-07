import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import poloLogoSvg from '../assets/icons/polo_logo.svg';
import { animateFooterReveal } from '../animations/footerAnimations';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;
    const ctx = gsap.context(() => {
      animateFooterReveal(footerRef);
    }, footerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="relative w-full bg-[#070709] z-0 text-white pt-8 md:pt-12 pb-20 md:pb-24 px-6 sm:px-10 md:px-16 lg:px-20 "
    >
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-10">

        {/* TOP ROW: Left  Right */}
        <div className="flex items-center justify-between py-6 md:py-8">
          {/* Polo Logo */}
          <a href="#" className="flex items-center hover:opacity-90 transition-opacity">
            <img
              src={poloLogoSvg}
              alt="Polo Logo"
              className="h-[22px] md:h-[26px] w-auto object-contain"
            />
          </a>


          {/* Social Media Icons  */}
          <div className="hidden sm:flex items-center gap-6 sm:gap-8 text-zinc-300">
            {/* X / Twitter */}
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <svg className="w-6 h-6 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Dribbble / Globe */}
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <svg className="w-6 h-6 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72m-12.14-6c7.6-1.5 12-1.5 18.15 0m-14.73-8.8c4.27 3.5 8 7 12 12.8" />
              </svg>
            </a>
          </div>
        </div>

        {/* MIDDLE ROW: Navigation Links  */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 text-base sm:text-lg font-medium text-zinc-400">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#profile" >Profile</a>
          <a href="#testimonials" >Reviews</a>
          <a href="#contact">Contact</a>
        </div>

        {/* BOTTOM ROW: */}
        <div className="flex items-center justify-between flex-wrap gap-4 text-md text-zinc-400 font-normal pt-6">
          <span>© 2026 Polo</span>

          <div className="flex items-center gap-6 text-lg">
            <span className="text-white font-medium">Made by Pranav</span>
            <span className="text-zinc-300 font-medium">Built in Framer</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
