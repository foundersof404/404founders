import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, CheckCircle, ArrowRight, X, FileText, Code, Smartphone, Brain } from 'lucide-react';

const LeadMagnet = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const leadMagnets = [
    {
      id: 1,
      title: "Complete Web Development Checklist",
      description: "A comprehensive 50-point checklist covering everything from planning to deployment",
      icon: FileText,
      downloads: "2,847",
      color: "cyber-blue"
    },
    {
      id: 2,
      title: "Mobile App Development Guide",
      description: "Step-by-step guide to building successful mobile applications",
      icon: Smartphone,
      downloads: "1,923",
      color: "cyber-purple"
    },
    {
      id: 3,
      title: "AI Integration Best Practices",
      description: "Learn how to integrate AI features into your applications effectively",
      icon: Brain,
      downloads: "1,456",
      color: "cyber-pink"
    }
  ];

  const handleDownload = async (magnet) => {
    setIsDownloading(true);
    
    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsDownloading(false);
    setDownloadComplete(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setDownloadComplete(false);
      setIsVisible(false);
    }, 3000);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        className="fixed bottom-6 right-6 z-50 max-w-sm"
      >
        <div className="glass-effect rounded-2xl p-6 border border-cyber-blue/20 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center">
                <Download className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold">Free Resources</span>
            </div>
            <motion.button
              onClick={() => setIsVisible(false)}
              className="text-text-secondary hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-4 h-4" />
            </motion.button>
          </div>

          <AnimatePresence mode="wait">
            {!downloadComplete ? (
              <motion.div
                key="selection"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  Get Your Free Development Guide
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Download one of our comprehensive guides and start building better applications today.
                </p>

                <div className="space-y-3">
                  {leadMagnets.map((magnet) => (
                    <motion.button
                      key={magnet.id}
                      onClick={() => handleDownload(magnet)}
                      disabled={isDownloading}
                      className={`w-full p-3 rounded-lg border border-${magnet.color}/20 hover:border-${magnet.color}/40 bg-${magnet.color}/5 hover:bg-${magnet.color}/10 transition-all duration-300 text-left group`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-${magnet.color}/20 rounded-lg flex items-center justify-center`}>
                          <magnet.icon className={`w-5 h-5 text-${magnet.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-sm group-hover:text-gradient transition-colors">
                            {magnet.title}
                          </h4>
                          <p className="text-text-secondary text-xs">
                            {magnet.downloads} downloads
                          </p>
                        </div>
                        <ArrowRight className={`w-4 h-4 text-${magnet.color} group-hover:translate-x-1 transition-transform`} />
                      </div>
                    </motion.button>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-cyber-green/10 border border-cyber-green/20 rounded-lg">
                  <div className="flex items-center space-x-2 text-cyber-green text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>No spam, unsubscribe anytime</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-16 h-16 bg-cyber-green/20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="w-8 h-8 text-cyber-green" />
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Download Started!
                </h3>
                <p className="text-text-secondary text-sm">
                  Check your email for the download link. 
                  We'll also send you exclusive development tips.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LeadMagnet;
