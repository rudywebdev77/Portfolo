import 'react';

const BottomBlurOverlay = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed bottom-0 inset-x-0 w-full h-10 sm:h-12 z-50 pointer-events-none backdrop-blur-[8px]"
      style={{
        WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)',
        maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)',
      }}
    />
  );
};

export default BottomBlurOverlay;
