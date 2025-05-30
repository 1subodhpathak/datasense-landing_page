import { motion } from 'framer-motion';
import { FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useScrollTop } from '../hooks/useScrollTop';

const AvailableSoon = () => {
  useScrollTop();

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-950 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <FiClock className="mx-auto text-cyan-400 text-6xl mb-4" />
        </motion.div>
        
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Coming Soon
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          We're working hard to bring you something amazing. Stay tuned for updates!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
            <Link
              to="/"
              className="relative inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-slate-800 rounded-xl hover:bg-slate-700 transition duration-200"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-cyan-400/60"
        >
          <p className="text-sm">
            Want to be notified when we launch?
          </p>
          <a
            href="mailto:datasense.learning@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
          >
            Contact us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AvailableSoon;