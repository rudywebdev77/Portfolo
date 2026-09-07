import  'react';

const HeroButton = ({ children, variant = 'secondary', href = '#', className = '', ...props }) => {
  const isPrimary = variant === 'primary';
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-200';
  const variantStyles = isPrimary
    ? 'bg-white text-black hover:bg-zinc-200 shadow-md'
    : 'bg-[#121215] text-zinc-200 border border-white/10 hover:bg-white/10 hover:text-white';

  return (
    <a href={href} className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </a>
  );
};

export default HeroButton;
