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
import GoogleAnalytics from './components/analytics/GoogleAnalytics';
import PremiumParticles from './components/ui/PremiumParticles';
import ScrollProgress from './components/ui/ScrollProgress';
import SimpleScrollProvider from './components/ui/SimpleScrollProvider';
import GSAPProvider from './components/ui/GSAPProvider';
import PageTransition from './components/ui/PageTransition';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Enhanced scroll behavior with performance optimization
    const handleScroll = () => {
      document.body.classList.add('smooth-scroll');
    };

    // Initialize smooth scrolling
    handleScroll();

    // Scroll to top on page load/change
    window.scrollTo(0, 0);

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

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  return (
    <Router>
      <ScrollToTop />
      <GoogleAnalytics />
      <SimpleScrollProvider>
        <GSAPProvider>
          <div ref={scrollRef} className="relative min-h-screen bg-gradient-cyber overflow-x-hidden">
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
                  <Route path="/" element={
                    <PageTransition>
                      <Home />
                    </PageTransition>
                  } />
                  <Route path="/about" element={
                    <PageTransition>
                      <About />
                    </PageTransition>
                  } />
                  <Route path="/services" element={
                    <PageTransition>
                      <Services />
                    </PageTransition>
                  } />
                  <Route path="/portfolio" element={
                    <PageTransition>
                      <Portfolio />
                    </PageTransition>
                  } />
                  <Route path="/contact" element={
                    <PageTransition>
                      <Contact />
                    </PageTransition>
                  } />
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                </Routes>
              </AnimatePresence>
              
              <Footer />
            </div>
          </div>
        </GSAPProvider>
      </SimpleScrollProvider>
    </Router>
  );
}

export default App;
