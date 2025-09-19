import React, { useEffect } from 'react';

const SimpleScrollProvider = ({ children }) => {
  useEffect(() => {
    // Simple CSS-based smooth scrolling as fallback
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add performance optimizations
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
        scroll-padding-top: 0;
      }
      
      body {
        overscroll-behavior: none;
        -webkit-overflow-scrolling: touch;
      }
      
      * {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="simple-scroll-container">
      {children}
    </div>
  );
};

export default SimpleScrollProvider;
