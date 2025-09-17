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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect py-4' : 'py-4 md:py-6 bg-dark-primary/80 backdrop-blur-md'
      }`}
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
              <span className="text-white ml-1">Founders</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.href
                    ? 'text-cyber-blue'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {location.pathname === item.href && (
                  <motion.div
                    className="absolute inset-0 bg-cyber-blue/20 rounded-lg border border-cyber-blue/30"
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
                  className="absolute inset-0 bg-white/5 rounded-lg opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}
            
            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             <Link
  to="/contact"
  className="bg-cyber-blue/20 backdrop-blur-md border border-cyber-blue/30 text-white hover:bg-cyber-blue/30 px-6 py-3 font-medium rounded-xl flex items-center space-x-2 transition-all duration-300 shadow-lg"
>
  <span>Work With Us</span>
  <ArrowRight className="w-4 h-4" />
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
              className="md:hidden mt-4 glass-effect rounded-xl overflow-hidden border border-dark-border-light"
            >
              <nav className="flex flex-col p-4 space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className={`mobile-nav-item touch-friendly focus-enhanced block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                        location.pathname === item.href
                          ? 'text-cyber-blue bg-cyber-blue/10 border border-cyber-blue/20'
                          : 'text-gray-300 hover:text-white hover:bg-white/5 active:bg-cyber-blue/10'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="flex items-center space-x-3">
                        <span>{item.name}</span>
                        {location.pathname === item.href && (
                          <motion.div
                            className="w-2 h-2 bg-cyber-blue rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                          />
                        )}
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
