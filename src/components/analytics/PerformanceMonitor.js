import React, { useEffect, useState } from 'react';

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0
  });

  useEffect(() => {
    // Only run in development or for analytics
    if (process.env.NODE_ENV === 'development' || process.env.REACT_APP_ANALYTICS === 'true') {
      const measurePerformance = () => {
        // Get navigation timing
        const navigation = performance.getEntriesByType('navigation')[0];
        if (navigation) {
          setMetrics(prev => ({
            ...prev,
            loadTime: Math.round(navigation.loadEventEnd - navigation.loadEventStart)
          }));
        }

        // Get paint timing
        const paintEntries = performance.getEntriesByType('paint');
        paintEntries.forEach(entry => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({
              ...prev,
              firstContentfulPaint: Math.round(entry.startTime)
            }));
          }
        });

        // Get LCP
        const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
        if (lcpEntries.length > 0) {
          const lcp = lcpEntries[lcpEntries.length - 1];
          setMetrics(prev => ({
            ...prev,
            largestContentfulPaint: Math.round(lcp.startTime)
          }));
        }

        // Get FID
        const fidEntries = performance.getEntriesByType('first-input');
        if (fidEntries.length > 0) {
          const fid = fidEntries[0];
          setMetrics(prev => ({
            ...prev,
            firstInputDelay: Math.round(fid.processingStart - fid.startTime)
          }));
        }

        // Get CLS
        let clsValue = 0;
        const clsEntries = performance.getEntriesByType('layout-shift');
        clsEntries.forEach(entry => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        setMetrics(prev => ({
          ...prev,
          cumulativeLayoutShift: Math.round(clsValue * 1000) / 1000
        }));
      };

      // Wait for page to fully load
      if (document.readyState === 'complete') {
        measurePerformance();
      } else {
        window.addEventListener('load', measurePerformance);
      }

      // Monitor for LCP updates
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({
          ...prev,
          largestContentfulPaint: Math.round(lastEntry.startTime)
        }));
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // LCP not supported
      }

      return () => {
        window.removeEventListener('load', measurePerformance);
        observer.disconnect();
      };
    }
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-dark-card border border-dark-border rounded-lg p-4 text-xs text-white z-50 max-w-xs">
      <h3 className="font-semibold mb-2 text-cyber-blue">Performance Metrics</h3>
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={metrics.loadTime > 3000 ? 'text-error' : 'text-success'}>
            {metrics.loadTime}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={metrics.firstContentfulPaint > 1800 ? 'text-error' : 'text-success'}>
            {metrics.firstContentfulPaint}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={metrics.largestContentfulPaint > 2500 ? 'text-error' : 'text-success'}>
            {metrics.largestContentfulPaint}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={metrics.firstInputDelay > 100 ? 'text-error' : 'text-success'}>
            {metrics.firstInputDelay}ms
          </span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={metrics.cumulativeLayoutShift > 0.1 ? 'text-error' : 'text-success'}>
            {metrics.cumulativeLayoutShift}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;