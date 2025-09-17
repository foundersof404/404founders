import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics configuration
const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 tracking ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_title: document.title,
        page_location: window.location.href,
      });
    `;
    document.head.appendChild(script2);
  }
};

// Track page views
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('form_submit', 'engagement', formName);
};

// Track button clicks
export const trackButtonClick = (buttonName, location) => {
  trackEvent('click', 'button', `${buttonName}_${location}`);
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
  trackEvent('scroll', 'engagement', 'scroll_depth', depth);
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds) => {
  trackEvent('timing_complete', 'engagement', 'time_on_page', timeInSeconds);
};

// Google Analytics Provider Component
export const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA on component mount
    initGA();
  }, []);

  useEffect(() => {
    // Track page views on route changes
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null; // This component doesn't render anything
};

// Hook for tracking custom events
export const useAnalytics = () => {
  return {
    trackEvent,
    trackFormSubmission,
    trackButtonClick,
    trackScrollDepth,
    trackTimeOnPage,
  };
};

export default GoogleAnalytics;
