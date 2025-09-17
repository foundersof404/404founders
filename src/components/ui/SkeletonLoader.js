import React from 'react';
import { motion } from 'framer-motion';

const SkeletonLoader = ({ 
  variant = 'text', 
  lines = 1, 
  width = '100%', 
  height = '1rem',
  className = '',
  animate = true 
}) => {
  const baseClasses = 'skeleton-loader bg-dark-card-light rounded';
  
  if (variant === 'text') {
    return (
      <div className={className}>
        {Array.from({ length: lines }).map((_, index) => (
          <motion.div
            key={index}
            className={`skeleton-text ${baseClasses}`}
            style={{ 
              width: index === lines - 1 ? '60%' : width,
              height 
            }}
            animate={animate ? {
              opacity: [0.5, 1, 0.5]
            } : {}}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'avatar') {
    return (
      <motion.div
        className={`skeleton-avatar ${baseClasses} ${className}`}
        animate={animate ? {
          opacity: [0.5, 1, 0.5]
        } : {}}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    );
  }

  if (variant === 'card') {
    return (
      <motion.div
        className={`skeleton-card ${className}`}
        animate={animate ? {
          opacity: [0.5, 1, 0.5]
        } : {}}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="skeleton-avatar skeleton-loader bg-dark-card-light" />
          <div className="flex-1">
            <div className="skeleton-text skeleton-loader bg-dark-card-light h-4 w-3/4 mb-2" />
            <div className="skeleton-text skeleton-loader bg-dark-card-light h-3 w-1/2" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="skeleton-text skeleton-loader bg-dark-card-light h-3 w-full" />
          <div className="skeleton-text skeleton-loader bg-dark-card-light h-3 w-5/6" />
          <div className="skeleton-text skeleton-loader bg-dark-card-light h-3 w-4/6" />
        </div>
      </motion.div>
    );
  }

  if (variant === 'image') {
    return (
      <motion.div
        className={`skeleton-loader bg-dark-card-light rounded-lg ${className}`}
        style={{ width, height }}
        animate={animate ? {
          opacity: [0.5, 1, 0.5]
        } : {}}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    );
  }

  if (variant === 'button') {
    return (
      <motion.div
        className={`skeleton-loader bg-dark-card-light rounded-lg h-12 ${className}`}
        style={{ width }}
        animate={animate ? {
          opacity: [0.5, 1, 0.5]
        } : {}}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    );
  }

  // Custom variant
  return (
    <motion.div
      className={`skeleton-loader bg-dark-card-light ${className}`}
      style={{ width, height }}
      animate={animate ? {
        opacity: [0.5, 1, 0.5]
      } : {}}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

// Predefined skeleton layouts
export const SkeletonCard = ({ className = '' }) => (
  <div className={`skeleton-card ${className}`}>
    <SkeletonLoader variant="image" height="200px" className="mb-4" />
    <SkeletonLoader variant="text" lines={2} className="mb-4" />
    <div className="flex space-x-2">
      <SkeletonLoader variant="button" width="80px" />
      <SkeletonLoader variant="button" width="100px" />
    </div>
  </div>
);

export const SkeletonProfile = ({ className = '' }) => (
  <div className={`skeleton-card ${className}`}>
    <div className="flex items-center space-x-4 mb-6">
      <SkeletonLoader variant="avatar" />
      <div className="flex-1">
        <SkeletonLoader variant="text" lines={1} width="60%" className="mb-2" />
        <SkeletonLoader variant="text" lines={1} width="40%" />
      </div>
    </div>
    <SkeletonLoader variant="text" lines={3} />
  </div>
);

export const SkeletonList = ({ items = 3, className = '' }) => (
  <div className={className}>
    {Array.from({ length: items }).map((_, index) => (
      <div key={index} className="flex items-center space-x-3 mb-4">
        <SkeletonLoader variant="avatar" />
        <div className="flex-1">
          <SkeletonLoader variant="text" lines={1} width="70%" className="mb-1" />
          <SkeletonLoader variant="text" lines={1} width="50%" />
        </div>
      </div>
    ))}
  </div>
);

export default SkeletonLoader;
