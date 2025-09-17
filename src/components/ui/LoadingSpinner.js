import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ 
  size = 'medium', 
  variant = 'spinner', 
  color = 'cyber-blue',
  className = '' 
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    'cyber-blue': 'border-cyber-blue-500',
    'cyber-purple': 'border-cyber-purple-500',
    'cyber-pink': 'border-cyber-pink-500',
    'cyber-green': 'border-cyber-green-500',
    'cyber-orange': 'border-cyber-orange-500',
    'white': 'border-white'
  };

  if (variant === 'dots') {
    return (
      <div className={`spinner-dots ${className}`}>
        <motion.div
          className={`spinner-dot bg-${color}-500`}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: 0
          }}
        />
        <motion.div
          className={`spinner-dot bg-${color}-500`}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: 0.2
          }}
        />
        <motion.div
          className={`spinner-dot bg-${color}-500`}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            delay: 0.4
          }}
        />
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <motion.div
        className={`${sizeClasses[size]} bg-${color}-500 rounded-full ${className}`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    );
  }

  if (variant === 'bars') {
    return (
      <div className={`flex space-x-1 ${className}`}>
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={`w-1 bg-${color}-500 rounded-full`}
            animate={{
              height: ['8px', '24px', '8px']
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  }

  // Default spinner
  return (
    <motion.div
      className={`spinner-enhanced ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

export default LoadingSpinner;
