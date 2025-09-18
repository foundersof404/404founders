import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-4 md:py-6'
      }`}
      style={{
        background: isScrolled 
          ? 'linear-gradient(135deg, rgba(0, 245, 255, 0.15) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(247, 60, 126, 0.05) 100%)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        boxShadow: isScrolled 
          ? '0 8px 32px rgba(0, 245, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0, 245, 255, 0.2)' : 'none'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-neon rounded-lg flex items-center justify-center cyber-glow">
                <img 
                  src="/images/logo.png" 
                  alt="404 Founders Logo" 
                  className="w-full h-full object-cover scale-100"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <Code2 className="w-4 h-4 md:w-6 md:h-6 text-white" style={{ display: 'none' }} />
              </div>
              <motion.div
                className="absolute -inset-1 bg-gradient-neon rounded-lg opacity-75 blur"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
            <div className="text-lg md:text-xl font-cyber font-bold">
              <span className="text-gradient">404</span>
              <span className="text-white ml-1" style={{ textShadow: '0 0 10px rgba(0, 0, 0, 0.8)' }}>Founders</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                    location.pathname === item.href
                      ? 'text-cyber-blue'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="relative z-10 group-hover:text-cyber-blue transition-colors duration-300" style={{ textShadow: '0 0 8px rgba(0, 0, 0, 0.6)' }}>
                    {item.name}
                  </span>
                  {location.pathname === item.href && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 rounded-lg border border-cyber-blue/30 shadow-lg shadow-cyber-blue/20"
                      layoutId="navbar"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 rounded-lg opacity-0 group-hover:opacity-100"
                    whileHover={{ 
                      opacity: 1,
                      scale: 1.02
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyber-blue to-cyber-purple group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
             <Link
  to="/contact"
  className="group relative overflow-hidden px-6 py-3 font-medium rounded-xl flex items-center space-x-2 transition-all duration-300 text-white"
  style={{
    background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.2) 0%, rgba(139, 92, 246, 0.15) 50%, rgba(247, 60, 126, 0.1) 100%)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(0, 245, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 245, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
  }}
>
  <span className="relative z-10 group-hover:text-cyber-blue transition-colors duration-300">Work With Us</span>
  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 opacity-0 group-hover:opacity-100"
    whileHover={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  />
</Link>
            </motion.div>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            className="md:hidden p-3 text-gray-300 hover:text-white transition-colors touch-friendly focus-enhanced"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <motion.div
              animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-4 rounded-xl overflow-hidden border border-cyber-blue/30 shadow-2xl shadow-cyber-blue/20"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.15) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(247, 60, 126, 0.05) 100%)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 245, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              <nav className="flex flex-col p-4 space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={item.href}
                      className={`mobile-nav-item touch-friendly focus-enhanced block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 group ${
                        location.pathname === item.href
                          ? 'text-cyber-blue bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/10 border border-cyber-blue/30 shadow-lg shadow-cyber-blue/20'
                          : 'text-gray-300 hover:text-cyber-blue hover:bg-gradient-to-r hover:from-cyber-blue/10 hover:to-cyber-purple/5 active:bg-cyber-blue/10'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="flex items-center space-x-3">
                        <span className="group-hover:text-cyber-blue transition-colors duration-300">
                          {item.name}
                        </span>
                        {location.pathname === item.href && (
                          <motion.div
                            className="w-2 h-2 bg-cyber-blue rounded-full shadow-lg shadow-cyber-blue/50"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                          />
                        )}
                        <motion.div
                          className="ml-auto w-0 h-0.5 bg-gradient-to-r from-cyber-blue to-cyber-purple group-hover:w-8 transition-all duration-300"
                          whileHover={{ width: "2rem" }}
                        />
                      </span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.1 }}
                  className="pt-2"
                >
                  <Link
                    to="/contact"
                    className="mobile-nav-item touch-friendly focus-enhanced block bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 backdrop-blur-md border border-cyber-blue/30 text-white hover:from-cyber-blue/30 hover:to-cyber-purple/30 px-4 py-3 font-medium rounded-lg text-center flex items-center justify-center space-x-2 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>Work With Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
