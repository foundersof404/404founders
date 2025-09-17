import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Users,
  TrendingUp,
  Clock,
  Award
} from 'lucide-react';
import LazyImage from './LazyImage';

const CaseStudyCard = ({ caseStudy, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    title,
    client,
    category,
    description,
    challenge,
    solution,
    results,
    technologies,
    image,
    links,
    duration,
    teamSize,
    metrics
  } = caseStudy;

  const getCategoryColor = (category) => {
    const colors = {
      'Web Development': 'cyber-blue',
      'Mobile App': 'cyber-purple',
      'AI Solution': 'cyber-pink',
      'Enterprise System': 'cyber-green',
      'Academic Project': 'cyber-orange'
    };
    return colors[category] || 'cyber-blue';
  };

  const colorClass = getCategoryColor(category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <motion.div
        className="glass-effect rounded-2xl overflow-hidden border border-dark-border hover:border-cyber-blue/30 transition-all duration-500 card-enhanced touch-friendly"
        whileHover={{ y: -8, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Header Image */}
        <div className="relative h-64 overflow-hidden">
          <LazyImage
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            fallback={
              <div className="w-full h-full bg-dark-card-light flex items-center justify-center">
                <span className="text-text-secondary">Project Image</span>
              </div>
            }
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-60" />
          
          {/* Category Badge */}
          <motion.div
            className={`absolute top-4 left-4 px-3 py-1 bg-${colorClass}/90 backdrop-blur-sm rounded-full text-white text-sm font-medium`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {category}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {links?.live && (
              <motion.a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cyber-blue/90 rounded-full flex items-center justify-center text-white hover:bg-cyber-blue transition-colors touch-friendly focus-enhanced"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View live project"
              >
                <ExternalLink size={16} />
              </motion.a>
            )}
            
            {links?.github && (
              <motion.a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cyber-purple/90 rounded-full flex items-center justify-center text-white hover:bg-cyber-purple transition-colors touch-friendly focus-enhanced"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View source code"
              >
                <Github size={16} />
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title and Client */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-colors duration-300">
              {title}
            </h3>
            <p className="text-cyber-blue font-medium">{client}</p>
          </div>

          {/* Description */}
          <p className="text-text-secondary leading-relaxed mb-6">
            {description}
          </p>

          {/* Project Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-8 h-8 bg-cyber-blue/20 rounded-full mx-auto mb-2">
                <Clock className="w-4 h-4 text-cyber-blue" />
              </div>
              <div className="text-sm text-text-secondary">Duration</div>
              <div className="text-white font-semibold">{duration}</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-8 h-8 bg-cyber-purple/20 rounded-full mx-auto mb-2">
                <Users className="w-4 h-4 text-cyber-purple" />
              </div>
              <div className="text-sm text-text-secondary">Team Size</div>
              <div className="text-white font-semibold">{teamSize}</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-8 h-8 bg-cyber-green/20 rounded-full mx-auto mb-2">
                <Award className="w-4 h-4 text-cyber-green" />
              </div>
              <div className="text-sm text-text-secondary">Status</div>
              <div className="text-white font-semibold">Completed</div>
            </div>
          </div>

          {/* Key Metrics */}
          {metrics && (
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-cyber-green" />
                <span>Key Results</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {metrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-dark-card-light rounded-lg p-3"
                  >
                    <div className="text-cyber-green font-bold text-lg">{metric.value}</div>
                    <div className="text-text-secondary text-sm">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`px-3 py-1 bg-${colorClass}/10 border border-${colorClass}/20 text-${colorClass} text-xs rounded-full`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Expandable Details */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Challenge */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Challenge</h4>
                  <p className="text-text-secondary leading-relaxed">{challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Solution</h4>
                  <p className="text-text-secondary leading-relaxed">{solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Results</h4>
                  <p className="text-text-secondary leading-relaxed">{results}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expand/Collapse Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center space-x-2 py-3 bg-dark-card-light hover:bg-dark-card border border-dark-border hover:border-cyber-blue/30 text-white font-medium rounded-lg transition-all duration-300 touch-friendly focus-enhanced"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{isExpanded ? 'Show Less' : 'Read Full Case Study'}</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CaseStudyCard;
