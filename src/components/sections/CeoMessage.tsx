import { motion } from "framer-motion";

const CeoMessage: React.FC = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="w-full my-20"
  >
    <div className="group bg-slate-800/30 rounded-xl
      hover:bg-slate-700/40 transition-all duration-500
      border border-cyan-900/20 hover:border-cyan-500/30
      backdrop-blur-sm
      flex flex-col md:flex-row 
      overflow-hidden relative min-h-[300px]">
      
      <div className="md:w-1/3 relative h-64 md:h-auto flex items-center justify-center p-8">
        <div className="absolute inset-0 bg-cyan-500/5 rounded-xl 
          group-hover:bg-cyan-500/10 transition-colors duration-500" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full h-full max-w-[400px] relative mx-auto"
        >
          <img
            src="/assets/images/ceo/ceo.png"
            alt="CEO Shagun Nagpal"
            className="w-full h-full object-contain rounded-xl"
          />
        </motion.div>
      </div>

      <div className="p-10 md:w-2/3 flex flex-col justify-center z-10">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold text-cyan-100 mb-6"
        >
          Message from Our CEO, Shagun Nagpal
        </motion.h3>

        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="text-cyan-300 text-lg opacity-90 leading-relaxed"
        >
          As the CEO of DataSense, I am proud to share our vision with you. We founded this platform 
          with a mission to make data learning accessible, practical, and engaging for everyone. In 
          today's fast-evolving world, knowledge alone is not enough; you need real-world practice to 
          stand out. DataSense is more than just a learning platform – it's a community, a playground, 
          and a launchpad for aspiring data professionals. Join us, and let's build a future where 
          learning knows no bounds.
        </motion.p>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
        transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 
          via-transparent to-cyan-500/10" />
      </div>
    </div>
  </motion.div>
);

export default CeoMessage;