import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Check, ArrowRight, Info, Zap } from 'lucide-react';

const InteractivePricingCalculator = () => {
  const [projectType, setProjectType] = useState('web');
  const [complexity, setComplexity] = useState('medium');
  const [features, setFeatures] = useState([]);
  const [timeline, setTimeline] = useState('standard');
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const projectTypes = {
    web: { base: 2999, name: 'Web Application', icon: '🌐' },
    mobile: { base: 4999, name: 'Mobile App', icon: '📱' },
    ai: { base: 3999, name: 'AI Solution', icon: '🤖' },
    system: { base: 7999, name: 'Enterprise System', icon: '⚙️' },
    academic: { base: 999, name: 'Academic Project', icon: '🎓' }
  };

  const complexityMultipliers = {
    simple: 0.7,
    medium: 1.0,
    complex: 1.5,
    enterprise: 2.0
  };

  const featurePricing = {
    'user-auth': 500,
    'payment-integration': 800,
    'real-time-chat': 600,
    'admin-dashboard': 700,
    'api-integration': 400,
    'responsive-design': 300,
    'seo-optimization': 400,
    'analytics': 300,
    'multi-language': 500,
    'custom-animations': 600,
    'database-design': 400,
    'security-features': 800
  };

  const timelineMultipliers = {
    'rush': 1.5,
    'standard': 1.0,
    'flexible': 0.9
  };

  const availableFeatures = [
    { id: 'user-auth', name: 'User Authentication', description: 'Login, registration, password reset' },
    { id: 'payment-integration', name: 'Payment Integration', description: 'Stripe, PayPal, or custom payment' },
    { id: 'real-time-chat', name: 'Real-time Chat', description: 'Live messaging and notifications' },
    { id: 'admin-dashboard', name: 'Admin Dashboard', description: 'Content management and analytics' },
    { id: 'api-integration', name: 'API Integration', description: 'Third-party service connections' },
    { id: 'responsive-design', name: 'Responsive Design', description: 'Mobile-first, cross-device' },
    { id: 'seo-optimization', name: 'SEO Optimization', description: 'Search engine optimization' },
    { id: 'analytics', name: 'Analytics Dashboard', description: 'User behavior and performance metrics' },
    { id: 'multi-language', name: 'Multi-language Support', description: 'Internationalization' },
    { id: 'custom-animations', name: 'Custom Animations', description: 'Advanced UI animations' },
    { id: 'database-design', name: 'Database Design', description: 'Custom database architecture' },
    { id: 'security-features', name: 'Security Features', description: 'Advanced security measures' }
  ];

  useEffect(() => {
    calculatePrice();
  }, [projectType, complexity, features, timeline]);

  const calculatePrice = () => {
    const basePrice = projectTypes[projectType].base;
    const complexityMultiplier = complexityMultipliers[complexity];
    const timelineMultiplier = timelineMultipliers[timeline];
    
    const featuresPrice = features.reduce((total, featureId) => {
      return total + (featurePricing[featureId] || 0);
    }, 0);

    const totalPrice = Math.round(
      (basePrice * complexityMultiplier + featuresPrice) * timelineMultiplier
    );

    setEstimatedPrice(totalPrice);
  };

  const toggleFeature = (featureId) => {
    setFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const getTimelineText = () => {
    const baseWeeks = {
      web: { simple: 2, medium: 4, complex: 8, enterprise: 12 },
      mobile: { simple: 3, medium: 6, complex: 10, enterprise: 16 },
      ai: { simple: 4, medium: 8, complex: 12, enterprise: 20 },
      system: { simple: 6, medium: 12, complex: 20, enterprise: 32 },
      academic: { simple: 1, medium: 2, complex: 4, enterprise: 6 }
    };

    const weeks = baseWeeks[projectType][complexity];
    const adjustedWeeks = timeline === 'rush' ? Math.ceil(weeks * 0.7) : 
                         timeline === 'flexible' ? Math.ceil(weeks * 1.3) : weeks;

    return `${adjustedWeeks} weeks`;
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyber-blue/10 border border-cyber-blue/20 rounded-full text-cyber-blue text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            <span>Interactive Calculator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6">
            <span className="text-white">Get Your</span>
            <span className="text-gradient ml-3">Project Estimate</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Configure your project requirements and get an instant, detailed estimate. 
            No hidden costs, transparent pricing.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Configuration Panel */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Type */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <span>1.</span>
                  <span>Project Type</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(projectTypes).map(([key, type]) => (
                    <motion.button
                      key={key}
                      onClick={() => setProjectType(key)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                        projectType === key
                          ? 'border-cyber-blue bg-cyber-blue/10 text-cyber-blue'
                          : 'border-dark-border hover:border-cyber-blue/50 text-text-secondary hover:text-white'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{type.icon}</span>
                        <div>
                          <div className="font-semibold">{type.name}</div>
                          <div className="text-sm opacity-75">Starting at {formatPrice(type.base)}</div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Complexity Level */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <span>2.</span>
                  <span>Complexity Level</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { key: 'simple', name: 'Simple', desc: 'Basic functionality', multiplier: '0.7x' },
                    { key: 'medium', name: 'Medium', desc: 'Standard features', multiplier: '1.0x' },
                    { key: 'complex', name: 'Complex', desc: 'Advanced features', multiplier: '1.5x' },
                    { key: 'enterprise', name: 'Enterprise', desc: 'Full-scale solution', multiplier: '2.0x' }
                  ].map((level) => (
                    <motion.button
                      key={level.key}
                      onClick={() => setComplexity(level.key)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                        complexity === level.key
                          ? 'border-cyber-purple bg-cyber-purple/10 text-cyber-purple'
                          : 'border-dark-border hover:border-cyber-purple/50 text-text-secondary hover:text-white'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="font-semibold mb-1">{level.name}</div>
                      <div className="text-sm opacity-75 mb-2">{level.desc}</div>
                      <div className="text-xs font-mono bg-dark-card px-2 py-1 rounded">
                        {level.multiplier}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <span>3.</span>
                  <span>Additional Features</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {availableFeatures.map((feature) => (
                    <motion.button
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                        features.includes(feature.id)
                          ? 'border-cyber-green bg-cyber-green/10 text-cyber-green'
                          : 'border-dark-border hover:border-cyber-green/50 text-text-secondary hover:text-white'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="font-semibold mb-1">{feature.name}</div>
                          <div className="text-sm opacity-75">{feature.description}</div>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <span className="text-sm font-mono bg-dark-card px-2 py-1 rounded">
                            +{formatPrice(featurePricing[feature.id])}
                          </span>
                          {features.includes(feature.id) && (
                            <Check className="w-5 h-5 text-cyber-green" />
                          )}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <span>4.</span>
                  <span>Timeline Preference</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { key: 'rush', name: 'Rush', desc: 'Faster delivery', multiplier: '+50%' },
                    { key: 'standard', name: 'Standard', desc: 'Normal timeline', multiplier: 'Base' },
                    { key: 'flexible', name: 'Flexible', desc: 'Extended timeline', multiplier: '-10%' }
                  ].map((option) => (
                    <motion.button
                      key={option.key}
                      onClick={() => setTimeline(option.key)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                        timeline === option.key
                          ? 'border-cyber-orange bg-cyber-orange/10 text-cyber-orange'
                          : 'border-dark-border hover:border-cyber-orange/50 text-text-secondary hover:text-white'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="font-semibold mb-1">{option.name}</div>
                      <div className="text-sm opacity-75 mb-2">{option.desc}</div>
                      <div className="text-xs font-mono bg-dark-card px-2 py-1 rounded">
                        {option.multiplier}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Price Estimate Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="sticky top-8">
                <div className="glass-effect-premium rounded-2xl p-8 border border-cyber-blue/20">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Estimated Cost</h3>
                    <p className="text-text-secondary">Based on your selections</p>
                  </div>

                  <motion.div
                    key={estimatedPrice}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="text-center mb-6"
                  >
                    <div className="text-4xl font-bold text-cyber-blue mb-2">
                      {formatPrice(estimatedPrice)}
                    </div>
                    <div className="text-sm text-text-secondary">
                      Estimated timeline: {getTimelineText()}
                    </div>
                  </motion.div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Base Price</span>
                      <span className="text-white">{formatPrice(projectTypes[projectType].base)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Complexity</span>
                      <span className="text-white">{complexityMultipliers[complexity]}x</span>
                    </div>
                    {features.length > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">Features</span>
                        <span className="text-white">
                          +{formatPrice(features.reduce((total, id) => total + featurePricing[id], 0))}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Timeline</span>
                      <span className="text-white">{timelineMultipliers[timeline]}x</span>
                    </div>
                    <div className="border-t border-dark-border pt-2">
                      <div className="flex justify-between font-semibold">
                        <span className="text-white">Total</span>
                        <span className="text-cyber-blue">{formatPrice(estimatedPrice)}</span>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    className="w-full cyber-button bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Get Detailed Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <div className="mt-4 p-3 bg-cyber-blue/5 border border-cyber-blue/20 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Info className="w-4 h-4 text-cyber-blue mt-0.5 flex-shrink-0" />
                      <div className="text-xs text-text-secondary">
                        This is an estimate. Final pricing may vary based on specific requirements and scope changes.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractivePricingCalculator;
