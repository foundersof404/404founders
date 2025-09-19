import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face&q=80',
      content: 'Working with Founders of 404 was an exceptional experience. They delivered our e-commerce platform ahead of schedule with 35% better performance than expected. Their attention to detail and technical expertise is unmatched.',
      rating: 5,
      project: 'Aurella Luxe E-Commerce Platform'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO, FashionForward',
      company: 'FashionForward',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face&q=80',
      content: 'The Vlanco Streetwear platform they built for us has revolutionized our online presence. The animations and user experience are incredible, and our conversion rates have increased by 40%. Highly recommended!',
      rating: 5,
      project: 'Vlanco Streetwear Platform'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Product Manager, HealthTech Solutions',
      company: 'HealthTech Solutions',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face&q=80',
      content: 'Founders of 404 transformed our mobile health app concept into reality. Their AI integration and real-time features exceeded our expectations. The team is professional, responsive, and truly understands modern development.',
      rating: 5,
      project: 'HealthSync Mobile App'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Founder, DataInsights Pro',
      company: 'DataInsights Pro',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&q=80',
      content: 'Their AI solutions helped us build a predictive analytics platform that has given us a competitive edge. The machine learning models they implemented are incredibly accurate and the dashboard is beautifully designed.',
      rating: 5,
      project: 'SmartPredict AI Platform'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Director, University Tech',
      company: 'University Tech',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face&q=80',
      content: 'The UniConnect platform they developed for our university has streamlined our academic processes. Students and faculty love the intuitive interface and real-time collaboration features. Outstanding work!',
      rating: 5,
      project: 'UniConnect Academic Platform'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    ));
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

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
            <span className="premium-text">Client Testimonials</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass-effect-premium premium-card rounded-2xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-cyber-blue" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Client Image and Info */}
                <div className="text-center lg:text-left">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative inline-block mb-6"
                  >
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-cyber-blue/30"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cyber-blue rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-cyber-blue font-medium mb-1">
                      {currentTestimonial.role}
                    </p>
                    <p className="text-text-secondary text-sm mb-4">
                      {currentTestimonial.company}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-cyber-orange fill-current" />
                      ))}
                    </div>

                    {/* Project Badge */}
                    <div className="inline-block px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/20 rounded-full text-cyber-blue text-sm">
                      {currentTestimonial.project}
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <motion.blockquote
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg md:text-xl text-text-secondary leading-relaxed italic"
                  >
                    "{currentTestimonial.content}"
                  </motion.blockquote>
                </div>
              </div>
            </motion.div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <motion.button
                onClick={prevTestimonial}
                className="cyber-button cyber-button-secondary w-12 h-12 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-cyber-blue scale-125'
                        : 'bg-text-secondary hover:bg-cyber-blue/50'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="cyber-button cyber-button-secondary w-12 h-12 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Auto-play Toggle */}
            <div className="text-center mt-6">
              <motion.button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                  isAutoPlaying
                    ? 'bg-cyber-green/10 text-cyber-green border border-cyber-green/20'
                    : 'bg-text-secondary/10 text-text-secondary border border-text-secondary/20'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {isAutoPlaying ? 'Auto-playing' : 'Paused'}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
