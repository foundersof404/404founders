import React, { useEffect, useRef, useState } from 'react';

const ScrollProgress = () => {
  const progressRef = useRef(null);
  const circleRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!progressRef.current || !circleRef.current) return;

    const progress = progressRef.current;
    const circle = circleRef.current;
    const circumference = 2 * Math.PI * 45; // radius = 45

    // Set initial stroke-dasharray
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(scrollTop / docHeight, 1);
      const offset = circumference - (scrollPercent * circumference);

      // Use CSS transitions instead of GSAP for better performance
      circle.style.strokeDashoffset = offset;
      progress.style.transform = `rotate(${scrollPercent * 360}deg)`;
      
      setScrollProgress(scrollPercent);
    };

    // Throttled scroll handler for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-6 right-6 z-50 pointer-events-none">
      <div 
        ref={progressRef}
        className="w-16 h-16 transform transition-transform duration-100 ease-out"
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2"
          />
          {/* Progress circle */}
          <circle
            ref={circleRef}
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
            style={{
              transition: 'stroke-dashoffset 0.1s ease-out'
            }}
          />
          {/* Gradient definition */}
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#f73c7e" />
              <stop offset="100%" stopColor="#00f5ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default ScrollProgress;