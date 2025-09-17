import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServicePreview = ({ service, index }) => {
  const { icon: Icon, title, description, gradient } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="group"
    >
      <motion.div
        className="relative h-full glass-effect rounded-xl p-4 sm:p-6 border border-dark-border hover:border-cyber-blue/30 transition-all duration-500 overflow-hidden"
        whileHover={{
          y: -5,
          scale: 1.01,
        }}
      >
        {/* Gradient Background Effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 1 }}
        />

        {/* Animated Border */}
        <motion.div
          className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20`}
          style={{
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            padding: '2px',
          }}
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />

        {/* Content with Icon and Text Side by Side */}
        <div className="relative z-10 flex items-start space-x-3 sm:space-x-4">
          {/* Icon */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${gradient} p-0.5 group-hover:shadow-lg transition-shadow duration-300`}>
              <div className="w-full h-full bg-cyber-dark rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 min-w-0">
            <motion.h3
              className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-gradient transition-all duration-300 leading-tight"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              {title}
            </motion.h3>

            <motion.p
              className="text-text-secondary text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {description}
            </motion.p>

            {/* Learn More Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 text-cyber-blue hover:text-white font-medium text-xs sm:text-sm group-hover:translate-x-2 transition-all duration-300 min-h-[32px]"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Hover Effect Lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        <motion.div
          className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-purple to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {/* Corner accents */}
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyber-blue/20 group-hover:border-cyber-blue/60 transition-colors duration-300"
          whileHover={{ scale: 1.2 }}
        />
        
        <motion.div
          className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyber-purple/20 group-hover:border-cyber-purple/60 transition-colors duration-300"
          whileHover={{ scale: 1.2 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ServicePreview;
