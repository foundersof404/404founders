import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

const SmoothScrollProvider = ({ children }) => {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis with optimized settings for smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.0, // Reduced duration for better performance
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic ease-out for smoother feel
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.8, // Reduced for better control
      smoothTouch: false, // Disabled for better mobile performance
      touchMultiplier: 1.5, // Reduced for better mobile performance
      infinite: false,
      lerp: 0.1, // Added lerp for smoother interpolation
    });

    // Optimized scroll handling
    const handleScroll = (e) => {
      // Only update CSS custom properties if needed
      if (Math.abs(e.velocity) > 0.5) {
        document.documentElement.style.setProperty('--scroll-velocity', Math.abs(e.velocity));
      }
    };

    lenisRef.current.on('scroll', handleScroll);

    // Optimized RAF loop
    const raf = (time) => {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="smooth-scroll-container">
      {children}
    </div>
  );
};

export default SmoothScrollProvider;
