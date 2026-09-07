import React from 'react';
import { motion } from 'framer-motion';

const defaultText = "I'm a versatile designer specializing in graphic, web, and product design to help grow your business. Let's build something great!";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.022,
      delayChildren: 0.2,
    },
  },
};

const charVariants = {
  hidden: {
    opacity: 0,
    y: 4,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
      ease: 'easeOut',
    },
  },
};

const AnimatedTypewriterText = ({ text = defaultText, className = '', style = {} }) => {
  // Split into characters for exact letter-by-letter reveal
  const characters = Array.from(text);

  return (
    <motion.p
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
      style={style}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={charVariants}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default AnimatedTypewriterText;
