import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Clock, Users, Star, CheckCircle } from 'lucide-react';

const TrustBadges = ({ variant = 'default' }) => {
  const badges = [
    {
      icon: Shield,
      label: 'Secure & Reliable',
      description: 'Enterprise-grade security',
      color: 'cyber-green'
    },
    {
      icon: Award,
      label: '5-Star Rated',
      description: '100% client satisfaction',
      color: 'cyber-orange'
    },
    {
      icon: Clock,
      label: '24/7 Support',
      description: 'Always here to help',
      color: 'cyber-blue'
    },
    {
      icon: Users,
      label: '50+ Projects',
      description: 'Proven track record',
      color: 'cyber-purple'
    }
  ];

  const stats = [
    { number: '100%', label: 'Client Satisfaction', icon: Star },
    { number: '50+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '3+', label: 'Years Experience', icon: Award }
  ];

  if (variant === 'stats') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <stat.icon className="w-8 h-8 text-cyber-blue" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
            <div className="text-text-secondary text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge, index) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center p-4 rounded-lg bg-dark-card/50 border border-dark-border hover:border-cyber-blue/30 transition-all duration-300"
        >
          <div className={`w-12 h-12 bg-${badge.color}/20 rounded-full flex items-center justify-center mx-auto mb-3`}>
            <badge.icon className={`w-6 h-6 text-${badge.color}`} />
          </div>
          <h3 className="text-white font-semibold text-sm mb-1">{badge.label}</h3>
          <p className="text-text-secondary text-xs">{badge.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default TrustBadges;
