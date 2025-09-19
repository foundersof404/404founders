import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ui/ServiceCard';
import ProcessStep from '../components/ui/ProcessStep';
import PricingCalculator from '../components/ui/PricingCalculator';
import InteractivePricingCalculator from '../components/ui/InteractivePricingCalculator';
import TrustBadges from '../components/ui/TrustBadges';
import FreeConsultationCTA from '../components/ui/FreeConsultationCTA';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Application Development',
      subtitle: 'Modern, Scalable Web Solutions',
      description: 'Create powerful web applications using cutting-edge technologies like React, Next.js, and Node.js. From simple websites to complex enterprise applications.',
      features: [
        'Responsive Design',
        'Progressive Web Apps',
        'Real-time Features',
        'API Integration',
        'Database Design',
        'Performance Optimization'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
      price: 'Starting at $2,999',
      color: 'cyber-blue',
      gradient: 'from-cyber-blue to-cyber-purple',
      icon: 'Code',
    },
    {
      id: 2,
      title: 'Mobile Application Development',
      subtitle: 'Native & Cross-Platform Apps',
      description: 'Build stunning mobile applications for iOS and Android using React Native, Flutter, or native development. Optimized for performance and user experience.',
      features: [
        'Cross-Platform Development',
        'Native Performance',
        'Push Notifications',
        'Offline Functionality',
        'App Store Deployment',
        'Analytics Integration'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
      price: 'Starting at $4,999',
      color: 'cyber-purple',
      gradient: 'from-cyber-purple to-cyber-pink',
      icon: 'Smartphone',
    },
    {
      id: 3,
      title: 'AI Solutions & Automation',
      subtitle: 'Intelligent Business Automation',
      description: 'Integrate AI and machine learning capabilities into your applications. From chatbots to predictive analytics, make your systems smarter.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Automated Workflows',
        'Data Processing'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'AWS SageMaker', 'Docker'],
      price: 'Starting at $3,999',
      color: 'cyber-pink',
      gradient: 'from-cyber-pink to-cyber-orange',
      icon: 'Brain',
    },
    {
      id: 4,
      title: 'Senior Projects & Academic Support',
      subtitle: 'Student Project Mentorship',
      description: 'Comprehensive support for computer science students working on capstone projects, thesis work, and complex academic assignments.',
      features: [
        'Project Planning',
        'Technical Mentoring',
        'Code Reviews',
        'Research Assistance',
        'Presentation Support',
        'Documentation Help'
      ],
      technologies: ['Various', 'Research', 'Documentation', 'Git', 'Academic Tools'],
      price: 'Starting at $999',
      color: 'cyber-green',
      gradient: 'from-cyber-green to-cyber-blue',
      icon: 'GraduationCap',
    },
    {
      id: 5,
      title: 'Systems Development',
      subtitle: 'Enterprise & Custom Solutions',
      description: 'Design and develop complex systems, enterprise platforms, and custom software solutions tailored to your specific business needs.',
      features: [
        'System Architecture',
        'Microservices Design',
        'Database Optimization',
        'Security Implementation',
        'Scalability Planning',
        'Integration Services'
      ],
      technologies: ['Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'Nginx', 'Jenkins'],
      price: 'Custom Pricing',
      color: 'cyber-orange',
      gradient: 'from-cyber-orange to-cyber-purple',
      icon: 'Settings',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your vision, requirements, and goals. Together, we create a detailed project roadmap.',
      icon: 'Search',
      color: 'cyber-blue',
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs the user experience and technical architecture, ensuring scalability and optimal performance.',
      icon: 'Palette',
      color: 'cyber-purple',
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution using agile methodologies, with continuous testing and regular progress updates.',
      icon: 'Code',
      color: 'cyber-pink',
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing maintenance, updates, and technical support as needed.',
      icon: 'Rocket',
      color: 'cyber-green',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Unique animation variants for each service section
  const serviceSectionVariants = {
    webDev: {
      hidden: { opacity: 0, x: -100, rotateY: -15 },
      visible: {
        opacity: 1,
        x: 0,
        rotateY: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    },
    mobileDev: {
      hidden: { opacity: 0, x: 100, rotateY: 15 },
      visible: {
        opacity: 1,
        x: 0,
        rotateY: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    },
    aiSolutions: {
      hidden: { opacity: 0, y: 100, scale: 0.8 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: [0.34, 1.56, 0.64, 1],
        },
      },
    },
    consulting: {
      hidden: { opacity: 0, scale: 0.5, rotate: -10 },
      visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          duration: 0.8,
          ease: [0.68, -0.55, 0.265, 1.55],
        },
      },
    },
  };

  // Stable hover animations for service cards
  const cardHoverVariants = {
    webDev: {
      hover: {
        y: -5,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      },
    },
    mobileDev: {
      hover: {
        y: -5,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      },
    },
    aiSolutions: {
      hover: {
        y: -5,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      },
    },
    consulting: {
      hover: {
        y: -5,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      },
    },
  };

  // Stable background animations (removed to prevent quality loss)
  const backgroundAnimations = {
    webDev: {
      animate: {
        opacity: [0.3, 0.6, 0.3],
      },
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    mobileDev: {
      animate: {
        opacity: [0.3, 0.6, 0.3],
      },
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    aiSolutions: {
      animate: {
        opacity: [0.3, 0.6, 0.3],
      },
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    consulting: {
      animate: {
        opacity: [0.3, 0.6, 0.3],
      },
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-cyber-dark/50 to-cyber-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 border border-cyber-blue/30 rounded-full text-cyber-blue text-sm font-medium mb-4 shadow-lg shadow-cyber-blue/20">
                🚀 Our Services
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-cyber font-bold mb-6 leading-tight"
            >
              <span className="premium-text-gradient premium-text-glow">Complete Digital Solutions</span>
              <br />
              <span className="text-white">For Every Need</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-text-secondary mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              From web applications to AI solutions, we provide comprehensive 
              development services that drive innovation and business growth. 
              Choose the service that fits your vision.
            </motion.p>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 border border-cyber-purple/20 rounded-lg"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-16 h-16 border border-cyber-pink/20 rounded-full"
            animate={{
              rotate: -360,
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative bg-gradient-to-b from-cyber-dark/30 to-cyber-dark/50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 border border-cyber-blue/10 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-24 h-24 border border-cyber-purple/10 rounded-lg"
            animate={{
              rotate: -360,
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-16 h-16 border border-cyber-pink/10 rounded-full"
            animate={{
              rotate: 180,
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyber-purple/20 to-cyber-pink/20 border border-cyber-purple/30 rounded-full text-cyber-purple text-sm font-medium mb-6 shadow-lg shadow-cyber-purple/20">
              <Check className="w-4 h-4" />
              <span>Our Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-6">
              Choose Your <span className="bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent">Perfect Solution</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Each service is designed to meet specific needs and deliver exceptional results.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              // Determine animation type based on service
              const getAnimationType = (serviceId) => {
                switch (serviceId) {
                  case 1: return 'webDev';
                  case 2: return 'mobileDev';
                  case 3: return 'aiSolutions';
                  case 4: return 'consulting';
                  default: return 'webDev';
                }
              };

              const animationType = getAnimationType(service.id);
              const sectionVariants = serviceSectionVariants[animationType];
              const hoverVariants = cardHoverVariants[animationType];
              const backgroundAnimation = backgroundAnimations[animationType];

              return (
                <motion.div
                  key={service.id}
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative group"
                  style={{ perspective: "1000px" }}
                >
                  {/* Stable Background */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, 
                        ${service.color === 'cyber-blue' ? '#3b82f6' : 
                          service.color === 'cyber-purple' ? '#8b5cf6' :
                          service.color === 'cyber-pink' ? '#ec4899' :
                          service.color === 'cyber-green' ? '#10b981' :
                          service.color === 'cyber-orange' ? '#f59e0b' : '#3b82f6'
                        }15, 
                        ${service.color === 'cyber-blue' ? '#1d4ed8' : 
                          service.color === 'cyber-purple' ? '#7c3aed' :
                          service.color === 'cyber-pink' ? '#db2777' :
                          service.color === 'cyber-green' ? '#059669' :
                          service.color === 'cyber-orange' ? '#d97706' : '#1d4ed8'
                        }15)`,
                    }}
                    animate={backgroundAnimation.animate}
                    transition={backgroundAnimation.transition}
                  />

                  {/* Subtle Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-6 h-6 border border-cyber-blue/20 rounded-full opacity-0 group-hover:opacity-60"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-4 h-4 border border-cyber-purple/20 rounded-full opacity-0 group-hover:opacity-60"
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Service Card with Enhanced Animations */}
                  <motion.div
                    variants={hoverVariants}
                    className="relative z-10"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <ServiceCard service={service} index={index} />
                  </motion.div>

                  {/* Subtle Section-specific decorative elements */}
                  {animationType === 'webDev' && (
                    <motion.div
                      className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyber-blue/50 to-cyber-purple/50 opacity-0 group-hover:opacity-100"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {animationType === 'mobileDev' && (
                    <motion.div
                      className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-cyber-purple/50 to-cyber-pink/50 opacity-0 group-hover:opacity-100"
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {animationType === 'aiSolutions' && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl border border-cyber-pink/20 opacity-0 group-hover:opacity-100"
                    />
                  )}
                  
                  {animationType === 'consulting' && (
                    <motion.div
                      className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyber-orange/10 to-cyber-purple/10 opacity-0 group-hover:opacity-100"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative bg-gradient-to-b from-cyber-dark/50 to-cyber-dark/30">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 via-cyber-purple/5 to-cyber-pink/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyber-green/20 to-cyber-blue/20 border border-cyber-green/30 rounded-full text-cyber-green text-sm font-medium mb-6 shadow-lg shadow-cyber-green/20">
              <ArrowRight className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-6">
              Our <span className="bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent">Development Process</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We follow a proven methodology that ensures quality, efficiency, 
              and successful project delivery every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.step} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-6">
                Why Choose <span className="bg-gradient-to-r from-cyber-purple via-cyber-pink to-cyber-orange bg-clip-text text-transparent">Founders of 404?</span>
              </h2>
              <p className="text-xl text-text-secondary mb-8">
                We're not just developers – we're problem solvers, innovators, 
                and partners in your success.
              </p>

              <div className="space-y-4">
                {[
                  'Expert team with diverse technical backgrounds',
                  'Agile development methodology with regular updates',
                  'Cutting-edge technologies and best practices',
                  'Comprehensive testing and quality assurance',
                  'Ongoing support and maintenance services',
                  'Transparent pricing with no hidden costs',
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center shadow-lg shadow-cyber-blue/30">
                      <Check size={14} className="text-white" />
                    </div>
                    <p className="text-text-secondary">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-effect rounded-2xl p-8 border border-cyber-blue/20">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-cyber-orange fill-current" />
                    ))}
                  </div>
                  <span className="text-white font-semibold">5.0 Client Rating</span>
                </div>
                
                <blockquote className="text-text-secondary italic text-lg leading-relaxed mb-6">
                  "Working with Founders of 404 was an exceptional experience. 
                  They delivered a complex web application that exceeded our 
                  expectations in both functionality and design."
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">JS</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">John Smith</p>
                    <p className="text-text-secondary text-sm">CEO, TechCorp</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-cyber-purple rounded-full opacity-20"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyber-pink rounded-full opacity-30"
                animate={{
                  y: [0, 10, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center glass-effect rounded-2xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6">
              Ready to Start <span className="bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-purple bg-clip-text text-transparent">Your Project?</span>
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Let's discuss your needs and create something amazing together. 
              Get in touch for a free consultation and project estimate.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="cyber-button group px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-lg flex items-center space-x-2 hover:shadow-2xl hover:shadow-cyber-blue/25 transition-all duration-300"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/portfolio"
                  className="cyber-button group px-8 py-4 glass-effect border border-cyber-purple/30 text-white font-semibold rounded-lg flex items-center space-x-2 hover:border-cyber-purple/50 transition-all duration-300"
                >
                  <span>View Our Work</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
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
              <span className="text-white">Why Choose</span>
              <span className="bg-gradient-to-r from-cyber-orange via-cyber-pink to-cyber-purple bg-clip-text text-transparent ml-3">Founders of 404?</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We're committed to delivering exceptional results with every project.
            </p>
          </motion.div>
          <TrustBadges variant="stats" />
        </div>
      </section>

      {/* Interactive Pricing Calculator */}
      <InteractivePricingCalculator />
      
      {/* Free Consultation CTA */}
      <FreeConsultationCTA />
      
      {/* Original Pricing Calculator */}
      <PricingCalculator />
    </div>
  );
};

export default Services;
