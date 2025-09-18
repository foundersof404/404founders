import React from 'react';
import { motion } from 'framer-motion';
import { Mouse } from 'lucide-react';

// Simple CSS-based 3D effect component
const Hero3D = () => {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{ height: '100vh' }}>
      {/* Animated Grid Background */}
      <div className="absolute inset-0 animated-grid opacity-20" />
      
      {/* Colorful Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-cyber-purple/5 to-cyber-pink/5" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Large floating shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-cyber-blue/70 rounded-lg bg-gradient-to-br from-cyber-blue/40 via-cyber-purple/30 to-cyber-pink/40 shadow-2xl shadow-cyber-blue/50 hidden md:block"
          style={{
            boxShadow: '0 0 40px rgba(0, 245, 255, 0.4), 0 0 80px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(247, 60, 126, 0.2)',
            background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.3) 0%, rgba(139, 92, 246, 0.4) 50%, rgba(247, 60, 126, 0.3) 100%)',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
            boxShadow: [
              '0 0 40px rgba(0, 245, 255, 0.4), 0 0 80px rgba(139, 92, 246, 0.3)',
              '0 0 60px rgba(139, 92, 246, 0.5), 0 0 100px rgba(247, 60, 126, 0.4)',
              '0 0 40px rgba(0, 245, 255, 0.4), 0 0 80px rgba(139, 92, 246, 0.3)'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-cyber-purple/50 rounded-full bg-gradient-to-br from-cyber-purple/20 to-cyber-pink/20 shadow-lg shadow-cyber-purple/30 hidden md:block"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        {/* Small floating particles - Enhanced for mobile */}
        {[...Array(30)].map((_, i) => {
          const colors = ['cyber-blue', 'cyber-purple', 'cyber-pink', 'cyber-green', 'cyber-orange'];
          const color = colors[i % colors.length];
          const isMobile = i < 15; // First 15 particles are mobile-enhanced
          return (
            <motion.div
              key={i}
              className={`absolute ${isMobile ? 'w-3 h-3' : 'w-2 h-2'} bg-${color} rounded-full shadow-lg shadow-${color}/50 ${isMobile ? 'block md:hidden' : ''}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: isMobile ? [0.6, 1, 0.6] : [0.3, 1, 0.3],
                scale: isMobile ? [0.8, 1.2, 0.8] : [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          );
        })}
      </div>

      {/* Mouse Scroll Indicator - Desktop Only */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down indicator"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center bg-transparent">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ 
              y: [0, 15, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Mobile Bottom Animation - Simple Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 block md:hidden"
        animate={{ 
          y: [0, 8, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        aria-label="Mobile scroll indicator"
      >
        <div className="flex flex-col items-center space-y-1">
          {/* Simple animated dots */}
          <div className="flex space-x-1">
            <motion.div
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity,
                delay: 0
              }}
            />
            <motion.div
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity,
                delay: 0.2
              }}
            />
            <motion.div
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity,
                delay: 0.4
              }}
            />
          </div>
          
          {/* Simple down arrow */}
          <motion.div
            className="text-white/50 text-xs"
            animate={{ 
              y: [0, 3, 0]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ↓
          </motion.div>
        </div>
      </motion.div>

      {/* Additional Colorful Elements */}


      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20 md:opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5ff" />
            <stop offset="25%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#f73c7e" />
            <stop offset="75%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {[...Array(20)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="url(#lineGradient)"
            strokeWidth={i < 10 ? "3" : "2"}
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: i < 10 ? 0.8 : 0.6 
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </svg>

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(0, 245, 255, 0.1) 50%, transparent 70%)',
          boxShadow: '0 0 100px rgba(139, 92, 246, 0.3)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(247, 60, 126, 0.2) 0%, rgba(245, 158, 11, 0.1) 50%, transparent 70%)',
          boxShadow: '0 0 80px rgba(247, 60, 126, 0.3)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Additional Glowing Orb */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)',
          boxShadow: '0 0 60px rgba(16, 185, 129, 0.3)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
};

export default Hero3D;