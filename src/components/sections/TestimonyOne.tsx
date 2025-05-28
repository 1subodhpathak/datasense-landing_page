import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TestimonyOne = () => {
  return (
    <div className="w-full bg-gradient-to-br from-dark-cyan via-caribbean to-bright-cyan py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ backgroundPosition: '100% 100%' }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 50%)',
          backgroundSize: '100% 100%',
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div 
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated quote icon */}
          <motion.div 
            className="absolute -left-6 -top-6 text-black/50"
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "backOut" }}
          >
            <FaQuoteLeft size={60} />
          </motion.div>
          
          {/* Testimony card with hover effect */}
          <motion.div 
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10 relative z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.p 
              className="text-gray-800 text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              "I wanted to switch into data analytics but didn't know where to start. 
              DataSense gave me the structure I needed. Their learning roadmap is 
              beginner-friendly, and the Practice Arena—with over 2,000 SQL and Python 
              questions—really helped me build confidence through consistent practice. 
              It changed the way I approached learning."
            </motion.p>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -z-10 w-64 h-64 bg-cyan-300/10 rounded-full blur-3xl"
            style={{ top: '-20%', right: '-10%' }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonyOne;