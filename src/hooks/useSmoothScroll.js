import { useEffect, useRef } from 'react';

export const useSmoothScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new (window.LocomotiveScroll || class {
      constructor() {
        console.log('LocomotiveScroll not available, using fallback');
      }
      init() {}
      update() {}
      destroy() {}
    })({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
      scrollbarContainer: false,
      lerp: 0.1,
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    });

    // Fallback smooth scroll behavior
    if (!window.LocomotiveScroll) {
      document.documentElement.style.scrollBehavior = 'smooth';
      document.body.style.scrollBehavior = 'smooth';
    }

    return () => {
      if (scroll && scroll.destroy) {
        scroll.destroy();
      }
    };
  }, []);

  return scrollRef;
};
