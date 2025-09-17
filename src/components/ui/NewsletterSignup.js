import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle, Send } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    try {
      // Simulate API call - replace with actual newsletter service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would integrate with your newsletter service (Mailchimp, ConvertKit, etc.)
      console.log('Newsletter signup:', email);
      
      setStatus('success');
      setMessage('Thank you for subscribing! Check your email for confirmation.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 relative premium-edge">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="glass-effect-premium premium-card corner-accent rounded-2xl p-8 md:p-12"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
                <span className="premium-text">Stay Updated</span>
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Get the latest insights on web development, AI trends, and startup tips delivered to your inbox.
              </p>
            </motion.div>

            {/* Newsletter Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 pl-12 bg-dark-card border border-dark-border rounded-lg text-white placeholder-text-secondary focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 transition-all duration-300"
                    disabled={status === 'loading'}
                  />
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="cyber-button cyber-button-primary px-8 py-3 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={status !== 'loading' ? { scale: 1.05 } : {}}
                  whileTap={status !== 'loading' ? { scale: 0.95 } : {}}
                >
                  {status === 'loading' ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Subscribe</span>
                    </>
                  )}
                </motion.button>
              </div>

              {/* Status Message */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center justify-center space-x-2 p-3 rounded-lg text-sm ${
                    status === 'success'
                      ? 'bg-cyber-green/10 text-cyber-green border border-cyber-green/20'
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
                >
                  {status === 'success' ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <AlertCircle className="w-4 h-4" />
                  )}
                  <span>{message}</span>
                </motion.div>
              )}
            </motion.form>

            {/* Benefits */}
            <motion.div
              variants={itemVariants}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: '🚀',
                  title: 'Latest Tech Trends',
                  description: 'Stay ahead with cutting-edge development insights'
                },
                {
                  icon: '💡',
                  title: 'Exclusive Tips',
                  description: 'Get insider knowledge from our development team'
                },
                {
                  icon: '🎯',
                  title: 'No Spam',
                  description: 'Quality content only, unsubscribe anytime'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-text-secondary text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Privacy Note */}
            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-sm mt-6"
            >
              We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
