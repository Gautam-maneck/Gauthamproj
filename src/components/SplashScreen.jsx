import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/hero/Logo.png';
import './SplashScreen.css';

const SplashScreen = ({ finishLoading }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    // Simulate loading for 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsAnimatingOut(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Panel variants
  const leftPanelVariants = {
    initial: { x: 0 },
    animate: isAnimatingOut ? { x: '-100%', transition: { duration: 1, ease: 'easeInOut', delay: 0.8 } } : { x: 0 },
  };

  const rightPanelVariants = {
    initial: { x: 0 },
    animate: isAnimatingOut ? { x: '100%', transition: { duration: 1, ease: 'easeInOut', delay: 0.8 } } : { x: 0 },
  };

  // Logo variants
  const logoVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      y: 0
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: isAnimatingOut ? '-100vh' : [0, -15, 0],
      transition: isAnimatingOut
        ? { duration: 1, ease: 'easeInOut' }
        : {
          opacity: { duration: 0.5 },
          scale: { duration: 0.5 },
          y: { repeat: Infinity, duration: 3, ease: 'easeInOut' }
        }
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="splash-overlay">
      {/* Curtain Panels */}
      <motion.div
        className="panel left-panel"
        variants={leftPanelVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="panel right-panel"
        variants={rightPanelVariants}
        initial="initial"
        animate="animate"
        onAnimationComplete={() => {
          if (isAnimatingOut) {
            // Give a tiny extra buffer for the split to feel complete
            setTimeout(finishLoading, 200);
          }
        }}
      />

      {/* Logo Container */}
      <div className="logo-container">
        <motion.img
          src={logo}
          alt="Logo"
          className="splash-logo"
          variants={logoVariants}
          initial="initial"
          animate="animate"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
