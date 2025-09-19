import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const GSAPProvider = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Set up GSAP defaults for better performance
    gsap.defaults({
      ease: "power2.out",
      duration: 0.6, // Reduced duration for better performance
    });

    // Configure ScrollTrigger for better performance
    ScrollTrigger.config({
      ignoreMobileResize: true,
      syncInterval: 16, // 60fps
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    });

    // Optimized scroll-triggered animations
    const setupScrollAnimations = () => {
      // Hero section animations - simplified for better performance
      gsap.fromTo('.hero-title', 
        { 
          y: 50, 
          opacity: 0,
          scale: 0.95
        },
        { 
          y: 0, 
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.hero-title',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            once: true // Only animate once for better performance
          }
        }
      );

      // Card animations - simplified
      gsap.fromTo('.card-animate', 
        { 
          y: 30, 
          opacity: 0
        },
        { 
          y: 0, 
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.card-animate',
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
            once: true
          }
        }
      );

      // Text reveal animations - simplified
      gsap.fromTo('.text-reveal', 
        { 
          y: 30, 
          opacity: 0
        },
        { 
          y: 0, 
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.text-reveal',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            once: true
          }
        }
      );

      // Section transitions - simplified
      gsap.fromTo('.section-transition', 
        { 
          y: 40, 
          opacity: 0
        },
        { 
          y: 0, 
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.section-transition',
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
            once: true
          }
        }
      );

      // Button hover animations - optimized
      const buttons = document.querySelectorAll('.gsap-button');
      buttons.forEach(button => {
        const handleMouseEnter = () => {
          gsap.to(button, {
            scale: 1.02,
            duration: 0.2,
            ease: "power2.out"
          });
        };
        
        const handleMouseLeave = () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out"
          });
        };

        button.addEventListener('mouseenter', handleMouseEnter);
        button.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Initialize animations with debounce
    const timer = setTimeout(setupScrollAnimations, 200);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="gsap-provider">
      {children}
    </div>
  );
};

export default GSAPProvider;
