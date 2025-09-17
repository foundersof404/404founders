import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import BackgroundElements from './components/ui/BackgroundElements';
// import { useSimpleScroll } from './hooks/useSimpleScroll';
import GoogleAnalytics from './components/analytics/GoogleAnalytics';
import PremiumParticles from './components/ui/PremiumParticles';
import ScrollProgress from './components/ui/ScrollProgress';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Enhanced scroll behavior with performance optimization
    const handleScroll = () => {
      document.body.classList.add('smooth-scroll');
    };

    // Initialize smooth scrolling
    handleScroll();

    // Add scroll event listener for performance optimization
    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Any scroll-based optimizations can go here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', optimizedScroll);
    };
  }, []);

  return (
    <Router>
      <GoogleAnalytics />
      <div ref={scrollRef} className="relative min-h-screen bg-gradient-cyber overflow-x-hidden scroll-smooth-advanced">
        {/* Scroll Progress */}
        <ScrollProgress />
        
        {/* Premium Particles Background */}
        <PremiumParticles count={10} />
        
        {/* Background Elements */}
        <BackgroundElements />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Header />
          
          <AnimatePresence mode="wait">
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/about" element={<About />} />
                          <Route path="/services" element={<Services />} />
                          <Route path="/portfolio" element={<Portfolio />} />
                          <Route path="/contact" element={<Contact />} />
                          <Route path="/admin/login" element={<AdminLogin />} />
                          <Route path="/admin/dashboard" element={<AdminDashboard />} />
                        </Routes>
          </AnimatePresence>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
