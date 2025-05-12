import { motion } from "framer-motion";
import { BiCode } from "react-icons/bi";
import { ServiceCardProps } from "./types";

const CodingPlaygroundCard = () => {
  const serviceData: ServiceCardProps = {
    title: "Interactive Coding Playground",
    description: "Practice, experiment, and build real-world skills with DataSense's seamless online coderpad. Write, test, and debug directly in your browser — no setup required. Real world schenarios to sharpen your skills",
    icon: BiCode,
    image: "/assets/images/tools/SQL Coding Arena.png", // Main image
    buttonText: "Code Now",
  };

  const ServiceIcon = serviceData.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="group bg-slate-800/30 rounded-xl
        hover:bg-slate-700/40 transition-all duration-500
        border border-cyan-900/20 hover:border-cyan-500/30
        backdrop-blur-sm hover:-translate-y-2
        flex flex-col md:flex-row 
        overflow-hidden relative min-h-[400px]">
        
        <div className="p-10 md:w-1/2 flex flex-col justify-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ServiceIcon className="text-7xl text-cyan-400 mb-8 
              group-hover:scale-110 group-hover:text-cyan-300 
              transition-all duration-500" />
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-cyan-100 mb-6"
          >
            {serviceData.title}
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-cyan-300 text-xl opacity-90 mb-8 leading-relaxed"
          >
            {serviceData.description}
          </motion.p>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 px-8 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 
              border border-cyan-500/30 hover:border-cyan-500/50
              rounded-lg text-cyan-300 text-lg font-semibold transition-all duration-300
              hover:-translate-y-0.5 w-fit"
          >
            {serviceData.buttonText}
          </motion.button>
        </div>

        <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
          {/* Background Arena Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="absolute inset-0 z-10 pointer-events-none"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
            <img
              src={serviceData.image}
              alt="SQL Coding Arena"
              className="w-full h-full object-cover opacity-20"
            />
          </motion.div>

          <div className="relative w-full h-full p-4">
            {/* Main SQL Quiz Interface */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-0 right-0 z-30 w-[95%] max-w-2xl
                group-hover:translate-y-1 transition-all duration-500"
            >
              <div className="bg-slate-900/90 backdrop-blur-md rounded-xl overflow-hidden border border-cyan-900/30">
                <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-cyan-300/70 text-sm">SQL Query Editor</span>
                </div>
                <div className="p-4">
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <div className="text-cyan-400 text-sm mb-2">Question</div>
                      <div className="bg-slate-800/50 p-3 rounded-lg text-cyan-100 text-sm">
                        Write a query to find all users who have made orders in the last 30 days.
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className="text-cyan-400 text-sm mb-2">Schema</div>
                      <img src="/assets/images/playground/main.png" alt="Schema" className="w-full rounded-lg" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="bg-slate-800/50 p-3 rounded-lg font-mono text-sm">
                      <div className="text-cyan-300">SELECT * FROM users</div>
                      <div className="text-cyan-300">JOIN orders ON users.id = orders.user_id</div>
                      <div className="text-cyan-300">WHERE order_date = DATE_SUB(NOW(), INTERVAL 30 DAY);</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Data Explorer Panel */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute left-0 top-[60px] z-40 w-48
                group-hover:-translate-x-1 transition-all duration-500"
            >
              <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-cyan-900/30 p-3
                shadow-lg shadow-slate-900/20">
                <div className="text-cyan-400/90 text-sm font-medium mb-2">Tables</div>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2 text-cyan-300 hover:bg-slate-700/50 px-2 py-1 rounded transition-all">
                    <span>📊</span> users
                  </div>
                  <div className="flex items-center gap-2 text-cyan-300 hover:bg-slate-700/50 px-2 py-1 rounded transition-all">
                    <span>📦</span> orders
                  </div>
                  <div className="flex items-center gap-2 text-cyan-300 hover:bg-slate-700/50 px-2 py-1 rounded transition-all">
                    <span>🏷️</span> products
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Query Suggestions */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute right-8 top-[280px] z-40 w-64
                group-hover:translate-y-0.5 transition-all duration-500"
            >
              <div className="bg-slate-900/95 backdrop-blur-md rounded-lg border border-cyan-500/20 p-3">
                <div className="text-cyan-400 text-sm mb-2">Query Helper</div>
                <div className="space-y-2">
                  <div className="bg-cyan-500/10 px-3 py-1.5 rounded text-cyan-300 text-sm">
                    SELECT * FROM users WHERE...
                  </div>
                  <div className="bg-cyan-500/5 px-3 py-1.5 rounded text-cyan-300/70 text-sm">
                    JOIN orders ON users.id =...
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Terminal Output */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute left-4 bottom-4 z-30 w-[90%]
                group-hover:translate-y-1 transition-all duration-500"
            >
              <div className="bg-slate-900/95 rounded-lg overflow-hidden shadow-xl border border-cyan-900/20">
                <div className="bg-slate-800/50 px-2 py-1 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-cyan-300/70 text-xs">Query Output</span>
                </div>
                <div className="p-3 font-mono text-sm">
                  <div className="text-green-400">$ Executing query...</div>
                  <div className="text-cyan-300">✓ Query optimized</div>
                  <div className="text-cyan-300/70">→ Found 15 matching records</div>
                  <div className="text-cyan-400/50">← Execution time: 0.023s</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CodingPlaygroundCard;