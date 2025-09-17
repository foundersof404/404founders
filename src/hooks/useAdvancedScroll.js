import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const useAdvancedScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Set up advanced scroll configurations
    const setupAdvancedScroll = () => {
      // Advanced scroll-triggered animations
      gsap.utils.toArray('.scroll-reveal').forEach(element => {
        gsap.fromTo(element, 
          {
            y: 100,
            opacity: 0,
            scale: 0.8,
            rotationX: 45
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Stagger animations for cards
      gsap.utils.toArray('.stagger-reveal').forEach((container, index) => {
        const elements = container.querySelectorAll('.stagger-item');
        gsap.fromTo(elements,
          {
            y: 60,
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Parallax effects for different elements
      gsap.utils.toArray('.parallax-slow').forEach(element => {
        gsap.to(element, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      gsap.utils.toArray('.parallax-fast').forEach(element => {
        gsap.to(element, {
          yPercent: -100,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      // Magnetic hover effects
      gsap.utils.toArray('.magnetic').forEach(element => {
        element.addEventListener('mousemove', (e) => {
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(element, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        element.addEventListener('mouseleave', () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
          });
        });
      });

      // Section transitions
      gsap.utils.toArray('.section-transition').forEach(section => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to(section, {
              backgroundColor: "rgba(0, 245, 255, 0.02)",
              duration: 0.5
            });
          },
          onLeave: () => {
            gsap.to(section, {
              backgroundColor: "transparent",
              duration: 0.5
            });
          },
          onEnterBack: () => {
            gsap.to(section, {
              backgroundColor: "rgba(0, 245, 255, 0.02)",
              duration: 0.5
            });
          },
          onLeaveBack: () => {
            gsap.to(section, {
              backgroundColor: "transparent",
              duration: 0.5
            });
          }
        });
      });
    };

    // Initialize scroll effects
    setupAdvancedScroll();

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return scrollRef;
};

export default useAdvancedScroll;
