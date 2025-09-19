import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PageTransition = ({ children, isVisible = true }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline();

    if (isVisible) {
      // Page enter animation
      tl.fromTo(containerRef.current, 
        {
          opacity: 0,
          y: 30,
          scale: 0.98,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out"
        }
      );
    } else {
      // Page exit animation
      tl.to(containerRef.current, 
        {
          opacity: 0,
          y: -30,
          scale: 1.02,
          filter: "blur(5px)",
          duration: 0.6,
          ease: "power2.in"
        }
      );
    }

    return () => {
      tl.kill();
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className="page-transition">
      {children}
    </div>
  );
};

export default PageTransition;
