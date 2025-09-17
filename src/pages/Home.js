import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Code, Smartphone, Brain, GraduationCap, Settings, Sparkles, Rocket, CheckCircle } from 'lucide-react';
import Hero3D from '../components/3d/Hero3D';
import StatsCounter from '../components/ui/StatsCounter';
import ServicePreview from '../components/ui/ServicePreview';
import TestimonialsCarousel from '../components/ui/TestimonialsCarousel';
import NewsletterSignup from '../components/ui/NewsletterSignup';
import BlogPreview from '../components/ui/BlogPreview';
import CaseStudyCard from '../components/ui/CaseStudyCard';
import UrgencyBanner from '../components/ui/UrgencyBanner';
import TrustBadges from '../components/ui/TrustBadges';
import SocialProof from '../components/ui/SocialProof';
import FreeConsultationCTA from '../components/ui/FreeConsultationCTA';

// Animation variants moved outside component to prevent recreation
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

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8 }
  }
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8 }
  }
};

// Memoized components for better performance
const ScrollIndicator = memo(() => (
  <motion.div
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
    aria-label="Scroll down indicator"
  >
    <div className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center">
      <motion.div
        className="w-1 h-3 bg-cyber-blue rounded-full mt-2"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  </motion.div>
));

const CTAButton = memo(({ to, children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "professional-button professional-hover magnetic group px-6 py-3 font-semibold rounded-lg flex items-center space-x-2 transition-all duration-300 professional-focus";
  
  const variants = {
    primary: "professional-button",
    secondary: "cyber-button-secondary professional-hover",
    accent: "professional-button",
    ghost: "cyber-button-ghost professional-hover",
    purplePink: "professional-button"
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.05, rotateY: 5 }} 
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link
        to={to}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </Link>
    </motion.div>
  );
});

const HeroSection = memo(() => (
  <section className="relative h-screen md:h-screen flex items-center justify-center overflow-hidden scroll-snap-section parallax-container">
    {/* 3D Background */}
    <div className="absolute inset-0" role="presentation">
      <Hero3D />
    </div>

    {/* Hero Content */}
    <div className="relative z-10 container mx-auto px-4 text-center py-16 md:py-0">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-cyber-blue/10 border border-cyber-blue/20 rounded-full text-cyber-blue text-xs sm:text-sm font-medium mb-4">
            ✨ Welcome to the Future of Development
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-hero font-display font-bold mb-4 md:mb-6 leading-tight text-reveal"
        >
          <span className="text-white">Founders of <span className="text-gradient">404</span></span>
          <br />
          <span className="text-white opacity-60 text-section font-body">Building the Future</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed px-4 mt-6 md:mt-0 mobile-text-responsive"
        >
          We specialize in creating complete solutions including{' '}
          <span className="text-cyber-blue-400 font-semibold">Web Applications</span>,{' '}
          <span className="text-cyber-purple-400 font-semibold">Mobile Apps</span>,{' '}
          <span className="text-cyber-pink-400 font-semibold">AI Solutions</span>,{' '}
          <span className="text-cyber-green-400 font-semibold">Senior Projects</span>, and{' '}
          <span className="text-cyber-orange-400 font-semibold">Full Systems Development</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-4"
        >
          <CTAButton to="/contact" variant="primary" className="!px-6 !py-4 !font-medium w-full sm:w-auto !text-base touch-target">
            <span>Work With Us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </CTAButton>

          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/services"
              className="bg-gradient-to-r from-emerald-400/20 to-blue-500/20 sm:bg-transparent border-2 border-emerald-400/50 sm:border-white/30 text-white hover:bg-gradient-to-r hover:from-emerald-400 hover:to-blue-500 hover:border-transparent hover:text-white px-6 py-4 font-medium rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 w-full sm:w-auto text-base touch-target touch-friendly focus-enhanced"
              style={{color: 'white !important'}}
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore Services</span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>

    <ScrollIndicator />
  </section>
));

const StatsSection = memo(({ stats }) => (
  <section className="professional-section relative section-transition scroll-snap-section" aria-labelledby="stats-heading">
    <div className="container mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUpVariants}
        viewport={{ once: true, margin: "-10%" }}
        className="professional-grid stagger-reveal"
      >
        {stats.map((stat, index) => (
          <StatsCounter key={stat.label} stat={stat} index={index} />
        ))}
      </motion.div>
    </div>
  </section>
));

const ServicesSection = memo(({ services }) => (
  <section className="py-12 sm:py-16 md:py-20 relative premium-edge" aria-labelledby="services-heading">
    <div className="container mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUpVariants}
        viewport={{ once: true, margin: "-10%" }}
        className="text-center mb-8 sm:mb-12 md:mb-16"
      >
        <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cyber font-bold mb-4 sm:mb-6">
          <span className="premium-text">Our Expertise</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto px-4 sm:px-0">
          We deliver comprehensive solutions across multiple domains, 
          combining cutting-edge technology with creative innovation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
        {services.map((service, index) => (
          <ServicePreview key={service.title} service={service} index={index} />
        ))}
      </div>

    </div>
  </section>
));

const CTASection = memo(() => (
  <section className="py-20 relative premium-edge" aria-labelledby="cta-heading">
    <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 via-cyber-purple/10 to-cyber-pink/10" />
    <div className="container mx-auto px-4 relative z-10">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={scaleVariants}
                    viewport={{ once: true, margin: "-10%" }}
                    className="max-w-4xl mx-auto text-center glass-effect-premium premium-card corner-accent premium-card-3d premium-glow-pulse rounded-2xl p-12"
                  >
        <h2 id="cta-heading" className="text-4xl md:text-5xl font-cyber font-bold mb-6">
          Ready to <span className="premium-text">Build Something Amazing?</span>
        </h2>
        <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
          Let's discuss your project and turn your ideas into reality. 
          We're here to help you succeed in the digital world.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <CTAButton to="/contact" variant="accent">
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </CTAButton>

          <CTAButton to="/portfolio" variant="ghost">
            <Rocket className="w-5 h-5" />
            <span>View Our Work</span>
          </CTAButton>
        </div>
      </motion.div>
    </div>
  </section>
));

const Home = () => {
  // Memoize static data to prevent recreation on every render
  const stats = useMemo(() => [
    { number: 8, suffix: '+', label: 'Projects Completed', color: 'cyber-blue' },
    { number: 2, suffix: '', label: 'Expert Founders', color: 'cyber-purple' },
    { number: 25, suffix: '+', label: 'Happy Clients', color: 'cyber-pink' },
    { number: 2, suffix: '', label: 'Years Experience', color: 'cyber-green' },
  ], []);

  const services = useMemo(() => [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      gradient: 'from-cyber-blue to-cyber-purple',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions for iOS and Android.',
      gradient: 'from-cyber-purple to-cyber-pink',
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Intelligent automation and AI-powered features to enhance your business.',
      gradient: 'from-cyber-pink to-cyber-orange',
    },
    {
      icon: GraduationCap,
      title: 'Senior Projects',
      description: 'Academic project support and mentorship for computer science students.',
      gradient: 'from-cyber-green to-cyber-blue',
    },
    {
      icon: Settings,
      title: 'Systems Development',
      description: 'Enterprise platforms and custom software solutions for complex business needs.',
      gradient: 'from-cyber-orange to-cyber-purple',
    },
  ], []);

  const caseStudies = useMemo(() => [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      client: "TechStart Inc.",
      category: "Web Development",
      description: "Complete redesign and optimization of a high-traffic e-commerce platform resulting in 40% increase in conversion rates.",
      challenge: "The existing platform had poor user experience, slow loading times, and low mobile conversion rates.",
      solution: "Implemented a modern React-based architecture with server-side rendering, optimized images, and mobile-first design principles.",
      results: "Achieved 40% increase in conversion rates, 60% faster page load times, and 85% improvement in mobile user experience scores.",
      technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      links: {
        live: "https://example.com",
        github: "https://github.com/example"
      },
      duration: "3 months",
      teamSize: "4 developers",
      metrics: [
        { value: "40%", label: "Conversion Increase" },
        { value: "60%", label: "Faster Load Times" },
        { value: "85%", label: "Mobile UX Score" }
      ]
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      client: "DataCorp Solutions",
      category: "AI Solution",
      description: "Built an intelligent analytics platform that processes millions of data points and provides actionable insights in real-time.",
      challenge: "Client needed to process large volumes of data and generate insights without technical expertise.",
      solution: "Developed a machine learning pipeline with automated data processing and intuitive visualization dashboard.",
      results: "Reduced data analysis time by 90%, improved decision-making speed by 70%, and increased user engagement by 150%.",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      links: {
        live: "https://example.com",
        github: "https://github.com/example"
      },
      duration: "4 months",
      teamSize: "3 developers",
      metrics: [
        { value: "90%", label: "Time Reduction" },
        { value: "70%", label: "Faster Decisions" },
        { value: "150%", label: "User Engagement" }
      ]
    }
  ], []);

  return (
    <main className="min-h-screen">
      <UrgencyBanner />
      <HeroSection />
      <StatsSection stats={stats} />
      <ServicesSection services={services} />
      <SocialProof />
      <TestimonialsCarousel />
      
      {/* Case Studies Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyber-purple/10 border border-cyber-purple/20 rounded-full text-cyber-purple text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              <span>Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6">
              <span className="text-white">Featured</span>
              <span className="text-gradient ml-3">Case Studies</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Discover how we've helped businesses transform their digital presence 
              and achieve remarkable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <BlogPreview maxPosts={3} showAll={false} />
      
      {/* Free Consultation CTA */}
      <FreeConsultationCTA />
      
      <NewsletterSignup />
      <CTASection />
    </main>
  );
};

// Export memoized component for better performance
export default memo(Home);