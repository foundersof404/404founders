import React, { memo } from 'react';
import { motion } from 'framer-motion';

// Optimized 3D effect component with better performance
const Hero3D = memo(() => {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{ height: '100vh' }}>
      {/* Optimized Grid Background - CSS only for better performance */}
      <div className="absolute inset-0 animated-grid opacity-15" />
      
      {/* Static Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-cyber-purple/5 to-cyber-pink/5" />
      
      {/* Enhanced Floating Elements - Restored Visual Appeal */}
      <div className="absolute inset-0">
        {/* Main floating shapes with elegant styling */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-elegant-violet-400/60 rounded-lg bg-gradient-to-br from-elegant-violet-400/40 via-elegant-rose-400/30 to-elegant-gold-400/40 shadow-xl shadow-elegant-violet-400/40 hidden md:block"
          style={{
            willChange: 'transform',
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.3), 0 0 60px rgba(244, 63, 94, 0.2)',
          }}
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.15, 1],
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-elegant-emerald-400/50 rounded-full bg-gradient-to-br from-elegant-emerald-400/25 to-elegant-rose-400/25 shadow-lg shadow-elegant-emerald-400/30 hidden md:block"
          style={{
            willChange: 'transform',
          }}
          animate={{
            rotate: [360, 0],
            scale: [1, 1.1, 1],
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Additional floating shapes for more visual interest */}
        <motion.div
          className="absolute top-1/2 right-1/3 w-20 h-20 border-2 border-cyber-pink/40 rounded-lg bg-gradient-to-br from-cyber-pink/20 to-cyber-orange/20 shadow-md shadow-cyber-pink/25 hidden md:block"
          style={{
            willChange: 'transform',
          }}
          animate={{
            rotate: [0, -180, -360],
            scale: [1, 1.08, 1],
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* More floating shapes for enhanced visual depth */}
        <motion.div
          className="absolute top-3/4 left-1/3 w-16 h-16 border-2 border-cyber-green/50 rounded-full bg-gradient-to-br from-cyber-green/25 to-cyber-blue/20 shadow-lg shadow-cyber-green/30 hidden md:block"
          style={{
            willChange: 'transform',
          }}
          animate={{
            rotate: [360, 0],
            scale: [1, 1.12, 1],
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/5 w-14 h-14 border-2 border-cyber-orange/45 rounded-lg bg-gradient-to-br from-cyber-orange/20 to-cyber-pink/15 shadow-md shadow-cyber-orange/25 hidden md:block"
          style={{
            willChange: 'transform',
          }}
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.06, 1],
            y: [0, 12, 0],
            x: [0, -12, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute top-1/6 right-1/6 w-18 h-18 border-2 border-cyber-purple/40 rounded-full bg-gradient-to-br from-cyber-purple/20 to-cyber-green/15 shadow-lg shadow-cyber-purple/25 hidden md:block"
          style={{
            willChange: 'transform',
          }}
          animate={{
            rotate: [0, -90, -180, -270, -360],
            scale: [1, 1.1, 1],
            y: [0, -15, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Enhanced particles - more visual but still optimized */}
        {[...Array(18)].map((_, i) => {
          const colors = ['elegant-violet-400', 'elegant-rose-400', 'elegant-emerald-400', 'elegant-gold-400', 'elegant-slate-400'];
          const color = colors[i % colors.length];
          const isMobile = i < 8; // Mobile gets fewer particles
          return (
            <motion.div
              key={i}
              className={`absolute ${isMobile ? 'w-2 h-2' : 'w-1.5 h-1.5'} bg-${color} rounded-full shadow-sm shadow-${color}/50 ${isMobile ? 'block md:hidden' : 'hidden md:block'}`}
              style={{
                left: `${10 + (i * 5)}%`,
                top: `${10 + (i * 4)}%`,
                willChange: 'transform, opacity',
              }}
              animate={{
                y: [0, -100, 0],
                opacity: isMobile ? [0.5, 1, 0.5] : [0.3, 0.9, 0.3],
                scale: isMobile ? [0.8, 1.2, 0.8] : [0.6, 1.1, 0.6],
                x: [0, Math.sin(i) * 20, 0],
              }}
              transition={{
                duration: 4 + (i * 0.2),
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Additional floating micro-particles for more depth */}
        {[...Array(10)].map((_, i) => {
          const colors = ['elegant-violet-300', 'elegant-rose-300', 'elegant-emerald-300'];
          const color = colors[i % colors.length];
          return (
            <motion.div
              key={`micro-${i}`}
              className={`absolute w-1 h-1 bg-${color} rounded-full shadow-sm shadow-${color}/40 hidden md:block`}
              style={{
                left: `${5 + (i * 9)}%`,
                top: `${5 + (i * 8)}%`,
                willChange: 'transform, opacity',
              }}
              animate={{
                y: [0, -60, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.2, 0.5],
                x: [0, Math.cos(i) * 15, 0],
              }}
              transition={{
                duration: 6 + (i * 0.4),
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Optimized Scroll Indicators */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll down indicator"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center bg-transparent">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.4, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Mobile Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 block md:hidden"
        animate={{ 
          y: [0, 6, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        aria-label="Mobile scroll indicator"
      >
        <div className="flex flex-col items-center space-y-1">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 bg-white/60 rounded-full"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
          <motion.div
            className="text-white/50 text-xs"
            animate={{ y: [0, 2, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ↓
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Neural Network Lines - More Visual Impact */}
      <svg className="absolute inset-0 w-full h-full opacity-15 md:opacity-20" style={{ pointerEvents: 'none' }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5ff" />
            <stop offset="25%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#f73c7e" />
            <stop offset="75%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#f73c7e" />
            <stop offset="100%" stopColor="#00f5ff" />
          </linearGradient>
        </defs>
        {[...Array(10)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${15 + (i * 8)}%`}
            y1={`${15 + (i * 8)}%`}
            x2={`${70 + (i * 3)}%`}
            y2={`${75 + (i * 2)}%`}
            stroke={i % 2 === 0 ? "url(#lineGradient)" : "url(#lineGradient2)"}
            strokeWidth={i < 5 ? "2" : "1.5"}
            opacity="0.6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.6 
            }}
            transition={{
              duration: 3 + (i * 0.3),
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.6,
            }}
          />
        ))}
        
        {/* Additional connecting lines for more network feel */}
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={`connector-${i}`}
            x1={`${25 + (i * 12)}%`}
            y1={`${30 + (i * 10)}%`}
            x2={`${45 + (i * 8)}%`}
            y2={`${60 + (i * 6)}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            opacity="0.4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.4 
            }}
            transition={{
              duration: 5 + (i * 0.4),
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.9,
            }}
          />
        ))}
      </svg>

      {/* Additional floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className={`absolute w-8 h-8 border border-cyber-blue/30 rounded-lg bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10 shadow-sm shadow-cyber-blue/20 hidden md:block`}
            style={{
              left: `${20 + (i * 20)}%`,
              top: `${30 + (i * 15)}%`,
              willChange: 'transform',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              y: [0, -10, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 8 + (i * 2),
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Enhanced Glowing Orbs - More Visual Impact */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(0, 245, 255, 0.1) 50%, transparent 70%)',
          boxShadow: '0 0 80px rgba(139, 92, 246, 0.3)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(247, 60, 126, 0.2) 0%, rgba(245, 158, 11, 0.1) 50%, transparent 70%)',
          boxShadow: '0 0 60px rgba(247, 60, 126, 0.3)',
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Additional smaller glowing orb for more depth */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 70%)',
          boxShadow: '0 0 40px rgba(16, 185, 129, 0.2)',
        }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Additional glowing orbs for more atmosphere */}
      <motion.div
        className="absolute bottom-1/6 left-1/6 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, rgba(247, 60, 126, 0.06) 50%, transparent 70%)',
          boxShadow: '0 0 30px rgba(245, 158, 11, 0.15)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.35, 0.15],
          x: [0, -8, 0],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />

      <motion.div
        className="absolute top-1/6 left-1/2 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(0, 245, 255, 0.05) 50%, transparent 70%)',
          boxShadow: '0 0 25px rgba(139, 92, 246, 0.1)',
        }}
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, 12, 0],
          y: [0, -12, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />

      {/* Floating data streams for tech feel */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute w-1 h-16 bg-gradient-to-b from-cyber-blue/60 to-transparent rounded-full hidden md:block"
            style={{
              left: `${15 + (i * 18)}%`,
              top: `${20 + (i * 12)}%`,
              willChange: 'transform, opacity',
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8 + (i * 1),
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
});

export default Hero3D;