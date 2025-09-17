import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, ArrowRight, Users, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FreeConsultationCTA = ({ variant = 'default' }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const consultationBenefits = [
    {
      icon: CheckCircle,
      text: "Free project assessment and timeline estimation",
      color: "cyber-green"
    },
    {
      icon: CheckCircle,
      text: "Custom solution recommendations for your needs",
      color: "cyber-blue"
    },
    {
      icon: CheckCircle,
      text: "No obligation - just valuable insights",
      color: "cyber-purple"
    }
  ];

  const timeSlots = [
    { time: "9:00 AM", available: true },
    { time: "11:00 AM", available: true },
    { time: "2:00 PM", available: false },
    { time: "4:00 PM", available: true },
    { time: "6:00 PM", available: true }
  ];

  const stats = [
    { icon: Users, value: "25+", label: "Clients Helped" },
    { icon: Award, value: "100%", label: "Satisfaction Rate" },
    { icon: Clock, value: "30min", label: "Free Session" }
  ];

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass-effect rounded-xl p-6 border border-cyber-blue/20"
      >
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Free Consultation</h3>
          <p className="text-text-secondary text-sm mb-4">
            Get expert advice on your project in just 30 minutes
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-effect-premium rounded-2xl p-8 md:p-12 border border-cyber-blue/20">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Zap className="w-10 h-10 text-white" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
                <span className="text-white">Get Your</span>
                <span className="text-gradient ml-3">Free Consultation</span>
              </h2>
              
              <p className="text-xl text-text-secondary mb-6">
                Book a 30-minute call with our experts and get personalized advice 
                on your project - completely free, no strings attached.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-cyber-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-text-secondary text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                What You'll Get:
              </h3>
              <div className="space-y-3">
                {consultationBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-6 h-6 bg-${benefit.color}/20 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <benefit.icon className={`w-4 h-4 text-${benefit.color}`} />
                    </div>
                    <span className="text-text-secondary">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">
                Available Time Slots (Today):
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {timeSlots.map((slot, index) => (
                  <motion.button
                    key={slot.time}
                    onClick={() => setSelectedSlot(slot.time)}
                    disabled={!slot.available}
                    className={`p-3 rounded-lg border transition-all duration-300 ${
                      selectedSlot === slot.time
                        ? 'border-cyber-blue bg-cyber-blue/10 text-cyber-blue'
                        : slot.available
                        ? 'border-dark-border hover:border-cyber-blue/50 text-white hover:bg-cyber-blue/5'
                        : 'border-dark-border/50 text-text-tertiary cursor-not-allowed opacity-50'
                    }`}
                    whileHover={slot.available ? { scale: 1.05 } : {}}
                    whileTap={slot.available ? { scale: 0.95 } : {}}
                  >
                    <div className="text-sm font-medium">{slot.time}</div>
                    <div className="text-xs">
                      {slot.available ? 'Available' : 'Booked'}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center space-x-2 px-6 py-3 glass-effect border border-cyber-blue/30 text-white font-medium rounded-lg hover:border-cyber-blue/50 hover:bg-cyber-blue/10 transition-all duration-300"
                >
                  <span>View Our Work First</span>
                </Link>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-dark-border">
              <div className="flex items-center justify-center space-x-6 text-text-secondary text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-cyber-green" />
                  <span>No obligation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-cyber-green" />
                  <span>30 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-cyber-green" />
                  <span>Expert advice</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeConsultationCTA;
