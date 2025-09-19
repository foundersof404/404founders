import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Check, 
  Code, 
  Smartphone, 
  Brain, 
  GraduationCap, 
  Settings,
  Star,
  Zap,
  Shield,
  Rocket
} from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  const {
    title,
    subtitle,
    description,
    features,
    technologies,
    price,
    color,
    gradient,
    icon: iconName,
  } = service;

  const getIcon = (iconName) => {
    const icons = {
      Code,
      Smartphone,
      Brain,
      GraduationCap,
      Settings,
    };
    return icons[iconName] || Code;
  };

  const Icon = getIcon(iconName);

  // Framework and technology logos mapping
  const getFrameworkLogo = (tech) => {
    const logos = {
      'React': '⚛️',
      'Next.js': '▲',
      'Node.js': '🟢',
      'TypeScript': '🔷',
      'JavaScript': '🟨',
      'Python': '🐍',
      'PostgreSQL': '🐘',
      'MongoDB': '🍃',
      'AWS': '☁️',
      'Docker': '🐳',
      'Kubernetes': '⚙️',
      'Redis': '🔴',
      'GraphQL': '🔷',
      'Firebase': '🔥',
      'TensorFlow': '🧠',
      'PyTorch': '🔥',
      'Flutter': '🦋',
      'React Native': '📱',
      'Swift': '🍎',
      'Kotlin': '🟣',
      'HTML': '🌐',
      'CSS': '🎨',
      'Git': '📦',
      'Nginx': '🌐',
      'Jenkins': '🔧',
      'Various': '🔧',
      'Research': '🔬',
      'Documentation': '📚',
      'Academic Tools': '🎓'
    };
    return logos[tech] || '💻';
  };

  const getFrameworkColor = (tech) => {
    const colors = {
      'React': 'text-blue-400',
      'Next.js': 'text-gray-100',
      'Node.js': 'text-green-400',
      'TypeScript': 'text-blue-500',
      'JavaScript': 'text-yellow-400',
      'Python': 'text-yellow-500',
      'PostgreSQL': 'text-blue-300',
      'MongoDB': 'text-green-300',
      'AWS': 'text-orange-400',
      'Docker': 'text-blue-300',
      'Kubernetes': 'text-blue-400',
      'Redis': 'text-red-400',
      'GraphQL': 'text-pink-400',
      'Firebase': 'text-orange-400',
      'TensorFlow': 'text-orange-500',
      'PyTorch': 'text-red-500',
      'Flutter': 'text-blue-400',
      'React Native': 'text-blue-500',
      'Swift': 'text-orange-400',
      'Kotlin': 'text-purple-400',
      'HTML': 'text-orange-500',
      'CSS': 'text-blue-400',
      'Git': 'text-orange-500',
      'Nginx': 'text-green-400',
      'Jenkins': 'text-blue-500',
      'Various': 'text-gray-400',
      'Research': 'text-purple-400',
      'Documentation': 'text-blue-400',
      'Academic Tools': 'text-green-400'
    };
    return colors[tech] || 'text-gray-400';
  };

  const getColorClass = (colorName) => {
    const colors = {
      'cyber-blue': 'text-cyber-blue border-cyber-blue/30 hover:border-cyber-blue/50',
      'cyber-purple': 'text-cyber-purple border-cyber-purple/30 hover:border-cyber-purple/50',
      'cyber-pink': 'text-cyber-pink border-cyber-pink/30 hover:border-cyber-pink/50',
      'cyber-green': 'text-cyber-green border-cyber-green/30 hover:border-cyber-green/50',
      'cyber-orange': 'text-cyber-orange border-cyber-orange/30 hover:border-cyber-orange/50',
    };
    return colors[colorName] || colors['cyber-blue'];
  };

  const getGlowClass = (colorName) => {
    const glows = {
      'cyber-blue': 'hover:shadow-cyber-blue/20',
      'cyber-purple': 'hover:shadow-cyber-purple/20',
      'cyber-pink': 'hover:shadow-cyber-pink/20',
      'cyber-green': 'hover:shadow-cyber-green/20',
      'cyber-orange': 'hover:shadow-cyber-orange/20',
    };
    return glows[colorName] || glows['cyber-blue'];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 45 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="group perspective-1000"
    >
      <motion.div
        className={`relative glass-effect rounded-2xl p-6 md:p-8 border ${getColorClass(color)} ${getGlowClass(color)} hover:shadow-2xl transition-all duration-500 overflow-hidden h-full card-enhanced touch-friendly`}
        whileHover={{
          y: -10,
          rotateX: 2,
          rotateY: 2,
          scale: 1.01,
        }}
        whileTap={{ scale: 0.98 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Background gradient effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
          initial={{ scale: 0.8, rotate: -45 }}
          whileHover={{ scale: 1.2, rotate: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Header Section */}
        <div className="relative z-10 mb-8">
          {/* Icon and Premium Badge */}
          <div className="flex items-center justify-between mb-6">
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ 
                scale: 1.05,
              }}
              transition={{ 
                duration: 0.3,
                type: "spring",
                stiffness: 200,
              }}
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} p-0.5 group-hover:shadow-lg transition-shadow duration-300`}>
                <div className="w-full h-full bg-cyber-dark rounded-2xl flex items-center justify-center">
                  <Icon className="w-10 h-10 text-white" />
                </div>
              </div>
              
              {/* Premium Badge */}
              <motion.div
                className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-elegant-gold/20 to-elegant-rose/20 border border-elegant-gold/30 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <Star className="w-3 h-3 text-elegant-gold" />
                <span className="text-xs font-medium text-elegant-gold">Premium</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating particles around icon */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 bg-${color} rounded-full opacity-0 group-hover:opacity-100`}
                style={{
                  left: `${40 + Math.cos(i * 45 * Math.PI / 180) * 35}px`,
                  top: `${40 + Math.sin(i * 45 * Math.PI / 180) * 35}px`,
                }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Title and Subtitle */}
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
              {title}
            </h3>
            <p className={`text-sm font-medium mb-4 ${getColorClass(color).split(' ')[0]}`}>
              {subtitle}
            </p>
          </motion.div>

          {/* Description */}
          <p className="text-text-secondary leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>

          {/* Price */}
          <motion.div
            className={`inline-block px-4 py-2 bg-${color}/10 border border-${color}/20 rounded-full text-${color} text-sm font-semibold mb-6`}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            {price}
          </motion.div>
        </div>

        {/* Features List */}
        <div className="relative z-10 mb-8">
          <h4 className="text-white font-semibold mb-4">Key Features:</h4>
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, featureIndex) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2 + featureIndex * 0.1,
                }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-sm"
              >
                <div className={`flex-shrink-0 w-4 h-4 bg-${color} rounded-full flex items-center justify-center`}>
                  <Check size={10} className="text-white" />
                </div>
                <span className="text-text-secondary group-hover:text-gray-300 transition-colors duration-300">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="relative z-10 mb-8">
          <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
            <Zap className="w-4 h-4 text-cyber-blue" />
            <span>Technologies & Frameworks:</span>
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {technologies.map((tech, techIndex) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.2 + techIndex * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center space-x-2 px-3 py-2 bg-dark-card border border-dark-border rounded-lg hover:border-cyber-blue/30 hover:bg-cyber-blue/5 transition-all duration-300"
              >
                <span className="text-lg">{getFrameworkLogo(tech)}</span>
                <span className={`text-sm font-medium ${getFrameworkColor(tech)}`}>
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Demo Button */}
        <motion.div
          className="relative z-10 mb-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.button
            className={`w-full flex items-center justify-center space-x-2 px-4 py-2 bg-${color}/10 border border-${color}/30 text-${color} font-medium rounded-lg hover:bg-${color}/20 hover:border-${color}/50 transition-all duration-300 touch-friendly`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View Demo</span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ▶️
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Pricing and CTA Section */}
        <div className="relative z-10 mt-auto space-y-4">
          {/* Pricing */}
          <motion.div
            className="flex items-center justify-between p-4 bg-gradient-to-r from-cyber-dark/50 to-cyber-dark/30 border border-dark-border rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-cyber-green" />
              <span className="text-text-secondary text-sm">Starting at</span>
            </div>
            <span className="text-2xl font-bold text-elegant-gold">{price}</span>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/contact"
              className={`cyber-button group w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r ${gradient} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 touch-friendly`}
            >
              <Rocket className="w-4 h-4" />
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* 3D Depth Lines */}
        <motion.div
          className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          className={`absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Corner Elements */}
        <motion.div
          className={`absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-${color}/30 group-hover:border-${color}/60 transition-colors duration-300`}
          whileHover={{ scale: 1.2, rotate: 45 }}
        />

        <motion.div
          className={`absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-${color}/30 group-hover:border-${color}/60 transition-colors duration-300`}
          whileHover={{ scale: 1.2, rotate: -45 }}
        />

        {/* Floating background elements */}
        <motion.div
          className={`absolute -top-10 -right-10 w-20 h-20 bg-${color}/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className={`absolute -bottom-10 -left-10 w-16 h-16 bg-${color}/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          animate={{
            rotate: -360,
            y: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
