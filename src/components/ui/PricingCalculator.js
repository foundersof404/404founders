import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, CheckCircle, ArrowRight } from 'lucide-react';

const PricingCalculator = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    complexity: '',
    features: [],
    timeline: '',
    design: '',
    backend: '',
    mobile: false,
    ai: false,
    ecommerce: false,
    analytics: false,
    maintenance: false
  });

  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [showEstimate, setShowEstimate] = useState(false);

  const projectTypes = {
    'web-app': { base: 5000, name: 'Web Application' },
    'mobile-app': { base: 8000, name: 'Mobile Application' },
    'ecommerce': { base: 10000, name: 'E-commerce Platform' },
    'ai-solution': { base: 15000, name: 'AI Solution' },
    'enterprise': { base: 25000, name: 'Enterprise System' }
  };

  const complexityMultipliers = {
    'simple': 1,
    'moderate': 1.5,
    'complex': 2.2,
    'enterprise': 3
  };

  const featureCosts = {
    'user-auth': 2000,
    'payment-integration': 3000,
    'real-time-chat': 2500,
    'admin-dashboard': 2000,
    'api-integration': 1500,
    'data-visualization': 3000,
    'search-functionality': 1500,
    'notification-system': 1000
  };

  const timelineMultipliers = {
    'rushed': 1.5,
    'standard': 1,
    'flexible': 0.8
  };

  const calculatePrice = () => {
    let total = 0;

    // Base project cost
    if (formData.projectType && projectTypes[formData.projectType]) {
      total = projectTypes[formData.projectType].base;
    }

    // Complexity multiplier
    if (formData.complexity && complexityMultipliers[formData.complexity]) {
      total *= complexityMultipliers[formData.complexity];
    }

    // Additional features
    formData.features.forEach(feature => {
      if (featureCosts[feature]) {
        total += featureCosts[feature];
      }
    });

    // Timeline multiplier
    if (formData.timeline && timelineMultipliers[formData.timeline]) {
      total *= timelineMultipliers[formData.timeline];
    }

    // Additional services
    if (formData.design === 'custom') total += 3000;
    if (formData.backend === 'custom') total += 5000;
    if (formData.mobile) total += 4000;
    if (formData.ai) total += 8000;
    if (formData.ecommerce) total += 6000;
    if (formData.analytics) total += 2000;
    if (formData.maintenance) total += total * 0.2; // 20% for maintenance

    return Math.round(total);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleCalculate = () => {
    const price = calculatePrice();
    setEstimatedPrice(price);
    setShowEstimate(true);
  };

  const features = [
    { id: 'user-auth', name: 'User Authentication', description: 'Login, registration, password reset' },
    { id: 'payment-integration', name: 'Payment Integration', description: 'Stripe, PayPal, or other payment gateways' },
    { id: 'real-time-chat', name: 'Real-time Chat', description: 'Live messaging and notifications' },
    { id: 'admin-dashboard', name: 'Admin Dashboard', description: 'Content management and analytics' },
    { id: 'api-integration', name: 'API Integration', description: 'Third-party service connections' },
    { id: 'data-visualization', name: 'Data Visualization', description: 'Charts, graphs, and analytics' },
    { id: 'search-functionality', name: 'Advanced Search', description: 'Full-text search and filtering' },
    { id: 'notification-system', name: 'Notification System', description: 'Email, SMS, and push notifications' }
  ];

  return (
    <section className="py-20 relative premium-edge">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6">
            <span className="premium-text">Project Pricing Calculator</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Get an instant estimate for your project. Our transparent pricing calculator helps you understand the investment for your digital solution.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect-premium premium-card rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Project Details</h3>
              </div>

              <div className="space-y-6">
                {/* Project Type */}
                <div>
                  <label className="block text-white font-medium mb-3">Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => handleInputChange('projectType', e.target.value)}
                    className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/20"
                  >
                    <option value="">Select project type</option>
                    {Object.entries(projectTypes).map(([key, type]) => (
                      <option key={key} value={key}>{type.name}</option>
                    ))}
                  </select>
                </div>

                {/* Complexity */}
                <div>
                  <label className="block text-white font-medium mb-3">Complexity Level</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'simple', label: 'Simple', desc: 'Basic functionality' },
                      { value: 'moderate', label: 'Moderate', desc: 'Standard features' },
                      { value: 'complex', label: 'Complex', desc: 'Advanced features' },
                      { value: 'enterprise', label: 'Enterprise', desc: 'Large scale system' }
                    ].map((option) => (
                      <motion.button
                        key={option.value}
                        onClick={() => handleInputChange('complexity', option.value)}
                        className={`p-3 rounded-lg border text-left transition-all duration-300 ${
                          formData.complexity === option.value
                            ? 'border-cyber-blue bg-cyber-blue/10 text-cyber-blue'
                            : 'border-dark-border bg-dark-card text-white hover:border-cyber-blue/50'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="font-medium">{option.label}</div>
                        <div className="text-sm opacity-75">{option.desc}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <label className="block text-white font-medium mb-3">Additional Features</label>
                  <div className="grid grid-cols-1 gap-3">
                    {features.map((feature) => (
                      <motion.button
                        key={feature.id}
                        onClick={() => handleFeatureToggle(feature.id)}
                        className={`p-3 rounded-lg border text-left transition-all duration-300 ${
                          formData.features.includes(feature.id)
                            ? 'border-cyber-green bg-cyber-green/10 text-cyber-green'
                            : 'border-dark-border bg-dark-card text-white hover:border-cyber-green/50'
                        }`}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            formData.features.includes(feature.id)
                              ? 'border-cyber-green bg-cyber-green'
                              : 'border-text-secondary'
                          }`}>
                            {formData.features.includes(feature.id) && (
                              <CheckCircle className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium">{feature.name}</div>
                            <div className="text-sm opacity-75">{feature.description}</div>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-white font-medium mb-3">Timeline</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'rushed', label: 'Rushed', desc: '2-4 weeks' },
                      { value: 'standard', label: 'Standard', desc: '6-12 weeks' },
                      { value: 'flexible', label: 'Flexible', desc: '3+ months' }
                    ].map((option) => (
                      <motion.button
                        key={option.value}
                        onClick={() => handleInputChange('timeline', option.value)}
                        className={`p-3 rounded-lg border text-center transition-all duration-300 ${
                          formData.timeline === option.value
                            ? 'border-cyber-purple bg-cyber-purple/10 text-cyber-purple'
                            : 'border-dark-border bg-dark-card text-white hover:border-cyber-purple/50'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="font-medium">{option.label}</div>
                        <div className="text-sm opacity-75">{option.desc}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Calculate Button */}
                <motion.button
                  onClick={handleCalculate}
                  className="w-full cyber-button cyber-button-primary py-4 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calculator className="w-5 h-5" />
                  <span>Calculate Estimate</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Price Estimate */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect-premium premium-card rounded-2xl p-8"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-8">Price Estimate</h3>
                
                {showEstimate ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-6xl font-bold text-cyber-blue mb-4">
                      ${estimatedPrice.toLocaleString()}
                    </div>
                    <p className="text-text-secondary mb-8">
                      Estimated project cost
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between items-center p-3 bg-dark-card rounded-lg">
                        <span className="text-white">Base Project</span>
                        <span className="text-cyber-blue font-medium">
                          ${projectTypes[formData.projectType]?.base.toLocaleString() || '0'}
                        </span>
                      </div>
                      
                      {formData.complexity && (
                        <div className="flex justify-between items-center p-3 bg-dark-card rounded-lg">
                          <span className="text-white">Complexity ({formData.complexity})</span>
                          <span className="text-cyber-purple font-medium">
                            {complexityMultipliers[formData.complexity]}x
                          </span>
                        </div>
                      )}
                      
                      {formData.features.length > 0 && (
                        <div className="flex justify-between items-center p-3 bg-dark-card rounded-lg">
                          <span className="text-white">Additional Features</span>
                          <span className="text-cyber-green font-medium">
                            {formData.features.length} selected
                          </span>
                        </div>
                      )}
                    </div>

                    <motion.button
                      className="cyber-button cyber-button-accent w-full py-4 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Get Detailed Quote</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-dark-card rounded-full flex items-center justify-center mx-auto mb-6">
                      <Calculator className="w-12 h-12 text-text-secondary" />
                    </div>
                    <p className="text-text-secondary">
                      Fill out the form to get your project estimate
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
