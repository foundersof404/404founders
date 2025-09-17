import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';

const BlogPreview = ({ 
  posts = [], 
  title = "Latest Insights", 
  showAll = true,
  maxPosts = 3 
}) => {
  const blogPosts = posts.length > 0 ? posts : [
    {
      id: 1,
      title: "Building Scalable React Applications: Best Practices for 2024",
      excerpt: "Learn the latest techniques for creating maintainable and performant React applications that can handle millions of users.",
      author: "Mohammad Abbas",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      slug: "scalable-react-applications-2024"
    },
    {
      id: 2,
      title: "AI Integration in Modern Web Applications: A Complete Guide",
      excerpt: "Discover how to seamlessly integrate AI capabilities into your web applications using modern frameworks and APIs.",
      author: "Mohammad Alashkar",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "AI & Machine Learning",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      slug: "ai-integration-web-applications"
    },
    {
      id: 3,
      title: "Mobile-First Design: Creating Exceptional User Experiences",
      excerpt: "Master the art of mobile-first design with practical tips and real-world examples from our latest projects.",
      author: "Founders of 404",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      slug: "mobile-first-design-guide"
    }
  ];

  const displayedPosts = showAll ? blogPosts : blogPosts.slice(0, maxPosts);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyber-green/10 border border-cyber-green/20 rounded-full text-cyber-green text-sm font-medium mb-6">
            <Tag className="w-4 h-4" />
            <span>Latest Articles</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6">
            <span className="text-white">{title}</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Stay updated with the latest insights, tutorials, and industry trends 
            from our development team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="glass-effect rounded-2xl overflow-hidden border border-dark-border hover:border-cyber-blue/30 transition-all duration-500 h-full card-enhanced touch-friendly"
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <LazyImage
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    fallback={
                      <div className="w-full h-full bg-dark-card-light flex items-center justify-center">
                        <span className="text-text-secondary">No image</span>
                      </div>
                    }
                  />
                  
                  {/* Category Badge */}
                  <motion.div
                    className="absolute top-4 left-4 px-3 py-1 bg-cyber-blue/90 backdrop-blur-sm rounded-full text-white text-xs font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {post.category}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-xs text-text-tertiary mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-2 text-cyber-blue hover:text-cyber-purple transition-colors duration-300 font-medium text-sm group"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 touch-target touch-friendly focus-enhanced"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogPreview;
