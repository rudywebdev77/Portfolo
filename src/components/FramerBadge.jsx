import 'react';

const FramerBadge = () => {
  return (
    <a
      href="https://www.framer.com"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-[60] inline-flex items-center gap-2 px-2 py-2.5 rounded-[8px] bg-white text-black text-xs font-semibold "
    >
      <svg className="w-3.5 h-4.5 fill-black shrink-0" viewBox="0 0 24 24">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
      <span>Made in Framer</span>
    </a>
  );
};

export default FramerBadge;
