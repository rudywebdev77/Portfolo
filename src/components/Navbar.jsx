import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import poloLogoSvg from '../assets/icons/polo_logo.svg';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (!navRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
    }, navRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50 pt-4 px-3 sm:px-4 flex justify-center pointer-events-none w-full max-w-full">
      <nav
        ref={navRef}
        className={`pointer-events-auto w-[calc(100%-0.5rem)] sm:w-full max-w-[800px] bg-[#09090b]/95 border border-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.95)] transition-all duration-700 ease-out overflow-hidden px-4 sm:px-6 ${
          mobileMenuOpen ? 'rounded-[28px]' : 'rounded-[24px] sm:rounded-full'
        }`}
      >
        {/* TOP ROW: 100% Fixed Height & Position — Never shifts or moves when opening */}
        <div className="w-full h-14 md:h-15 flex items-center justify-between shrink-0">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center hover:opacity-90 transition-opacity"
            aria-label="Polo Home"
          >
            <img
              src={poloLogoSvg}
              alt="Polo Logo"
              className="h-[22px] md:h-[24px] w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex items-center gap-6 md:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-zinc-300 hover:text-white text-xs md:text-sm font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action: Desktop CTA Button & Mobile Toggle Button */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 text-xs md:text-sm font-medium text-zinc-200 bg-[#1a1a1e]/80 border border-white/15 rounded-full hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-200 shadow-sm"
            >
              <svg className="w-3.5 h-3.5 fill-current text-zinc-300" viewBox="0 0 24 24">
                <path d="M12 2l2.4 5.6L20 10l-5.6 2.4L12 18l-2.4-5.6L4 10l5.6-2.4L12 2z" />
              </svg>
              <span>Get for Free</span>
            </a>

            {/* Mobile Hamburger / Close Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex sm:hidden items-center justify-center p-1.5 text-white hover:text-zinc-300 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                /* Close Icon (X) */
                <svg className="w-5 h-5 stroke-current stroke-[1.8]" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                /* Hamburger Menu Icon (=) */
                <svg className="w-6 h-6 stroke-current stroke-[1.8]" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* EXPANDED MOBILE MENU CONTENT — Expands downwards below fixed top row */}
        <div
          className={`grid transition-all duration-700 ease-out sm:hidden ${
            mobileMenuOpen
              ? 'grid-rows-[1fr] opacity-100 pointer-events-auto pb-5 pt-1'
              : 'grid-rows-[0fr] opacity-0 pointer-events-none pb-0 pt-0'
          }`}
        >
          <div className="overflow-hidden flex flex-col gap-6">
            {/* Links List */}
            <div className="flex flex-col gap-5 text-left pl-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-300 hover:text-white text-base font-normal tracking-tight transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Bottom CTA Button: "✨ Get for Free" */}
            <div className="pt-1">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-normal text-zinc-300 bg-[#141417] border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-all shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current text-zinc-300" viewBox="0 0 24 24">
                  <path d="M12 2l2.4 5.6L20 10l-5.6 2.4L12 18l-2.4-5.6L4 10l5.6-2.4L12 2z" />
                </svg>
                <span>Get for Free</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
