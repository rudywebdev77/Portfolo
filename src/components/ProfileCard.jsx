import 'react';
import officialPortraitImg from '../assets/images/bS5yI534QrgZ6plEFuXPt84TkA.png';

const ProfileCard = () => {
  return (
    <div className="rounded-2xl bg-[#0c0c0f]  p-4 md:p-5 flex flex-col justify-between shadow-[0_24px_50px_-12px_rgba(0,0,0,0.85)] h-full w-full">
      <div>
        {/* Portrait Image Container */}
        <div className="relative rounded-2xl overflow-hidden aspect-[5/5.2] bg-zinc-900 border border-white/5 mb-6">
          <img
            src={officialPortraitImg}
            alt="Johan Beker Official Portrait"
            className="w-full h-full object-cover filter grayscale contrast-110 object-center"
          />

          {/* Available for work Indicator — Centered at bottom */}
          <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-2
           px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-xs font-normal text-white shadow-lg whitespace-nowrap">
            {/* Live Signal Transmitter Ping Dot */}
            <div className="relative flex items-center justify-center w-2 h-2 shrink-0">
              {/* Expanding Signal Wave Ring */}
              <span className="absolute inset-0 rounded-full bg-[#4ade80] animate-signal-ping" />
              {/* Soft Ambient Core Glow */}
              <span className="absolute inset-0 rounded-full bg-[#22c55e] blur-[2px] opacity-70" />
              {/* Core 3D Diode Light */}
              <span
                className="relative w-1.5 h-1.5 rounded-full shadow-[0_0_4px_rgba(74,222,128,0.9)]"
                style={{
                  background: 'radial-gradient(circle at 35% 35%, #dcfce7 0%, #15803d 45%, #15803d 100%)',
                }}
              />
            </div>
            <span>Available for work</span>
          </div>
        </div>

        {/* Profile Details */}
        <div className="mb-5">
          <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-1.5">
            Hello I am Johan Beker
          </h3>
          <p className="text-xs md:text-sm text-white font-normal leading-relaxed">
            UI/UX Interaction Designer Based in Berlin.
          </p>
        </div>

        {/* Social Icons Row with Dividers */}
        <div className="flex items-center gap-4 py-3.5 my-4 border-b border-white/10 text-xs text-zinc-300 font-medium">
          {/* X / Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8  flex items-center justify-center text-white "
          >
            <span className="text-xs font-bold font-sans">𝕏</span>
          </a>
          <span className="text-zinc-700">|</span>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8  flex items-center justify-center text-white "
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <span className="text-zinc-700">|</span>

          {/* Dribbble / Website */}
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center text-white "
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <line x1="2" y1="12" x2="22" y2="12" />
            </svg>
          </a>
        </div>
      </div>

      {/* Connect Button */}
      <div className="pt-2">
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-gradient-to-b from-[#242429] to-[#121215] border border-white/10 text-white
           text-sm font-medium "
        >
          Connect with me
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
