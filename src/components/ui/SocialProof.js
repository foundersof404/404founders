import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, TrendingUp, Users, Award } from 'lucide-react';

const SocialProof = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Founders of 404 delivered our project 2 weeks ahead of schedule with exceptional quality.",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      name: "Michael Chen",
      role: "CTO, DataCorp",
      content: "Their AI integration increased our efficiency by 40%. Highly professional team.",
      rating: 5,
      project: "AI Analytics Dashboard"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, HealthTech",
      content: "The mobile app they built has 4.8 stars on app stores. Outstanding work!",
      rating: 5,
      project: "HealthSync Mobile App"
    }
  ];

  const liveStats = [
    { label: "Active Projects", value: 8, trend: "+2 this week" },
    { label: "Happy Clients", value: 25, trend: "+3 this month" },
    { label: "Success Rate", value: "100%", trend: "Perfect record" },
    { label: "Response Time", value: "<2hrs", trend: "Average" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
            <span className="text-white">Trusted by</span>
            <span className="text-gradient ml-3">Industry Leaders</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our solutions.
          </p>
        </motion.div>

        {/* Live Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {liveStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 glass-effect rounded-xl border border-dark-border hover:border-cyber-blue/30 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-cyber-blue mb-2">{stat.value}</div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-cyber-green text-sm flex items-center justify-center space-x-1">
                <TrendingUp className="w-3 h-3" />
                <span>{stat.trend}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rotating Testimonials */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 border border-cyber-blue/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cyber-orange fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl text-text-secondary italic mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold">{testimonials[currentTestimonial].name}</div>
                    <div className="text-text-secondary text-sm">{testimonials[currentTestimonial].role}</div>
                    <div className="text-cyber-blue text-sm">{testimonials[currentTestimonial].project}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-cyber-blue w-8' 
                      : 'bg-text-secondary hover:bg-cyber-blue/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <p className="text-center text-text-secondary text-sm mb-6">
            Trusted by companies worldwide
          </p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            {['TechStart', 'DataCorp', 'HealthTech', 'FashionForward', 'UniConnect'].map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-text-secondary font-semibold text-lg"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
