import { motion } from "framer-motion";
import { BiGame } from "react-icons/bi";
import { ServiceCardProps } from "./types";

const JobReadyRoadmapCard = () => {
  const serviceData: ServiceCardProps = {
    title: "Get JobReady Roadmap",
    description: "The Data Analytics Job Ready Roadmap turns career preparation into an interactive adventure, guiding you step-by-step through the essential skills and concepts needed for a successful data analytics career.",
    icon: BiGame,
    image: "/assets/images/tools/data-analyst.jpg",
    buttonText: "Play Now",
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
        flex flex-col md:flex-row-reverse 
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

        <div className="md:w-1/2 relative h-[420px] md:h-auto overflow-hidden">
          <div className="relative w-full h-full p-4">
            {/* Top Rankings Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-0 right-0 z-30 w-[95%] max-w-2xl
                group-hover:translate-y-1 transition-all duration-500"
            >
              <div className="bg-slate-900/90 backdrop-blur-md rounded-xl overflow-hidden border border-cyan-900/30 mb-4">
                <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-cyan-300/70 text-sm">Skills Overview</span>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center bg-slate-800/50 rounded-lg p-3">
                      <span className="text-cyan-400 text-2xl mb-1">💻</span>
                      <span className="text-cyan-300 text-sm">Technical</span>
                      <span className="text-cyan-400 text-xs mt-1">85% Ready</span>
                    </div>
                    <div className="flex flex-col items-center bg-slate-800/50 rounded-lg p-3">
                      <span className="text-cyan-400 text-2xl mb-1">📊</span>
                      <span className="text-cyan-300 text-sm">Analytics</span>
                      <span className="text-cyan-400 text-xs mt-1">90% Ready</span>
                    </div>
                    <div className="flex flex-col items-center bg-slate-800/50 rounded-lg p-3">
                      <span className="text-cyan-400 text-2xl mb-1">🤝</span>
                      <span className="text-cyan-300 text-sm">Soft Skills</span>
                      <span className="text-cyan-400 text-xs mt-1">75% Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Roadmap Interface */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute top-[120px] right-0 z-20 w-[95%] max-w-2xl
                group-hover:translate-y-1 transition-all duration-500"
            >
              <div className="bg-slate-900/90 backdrop-blur-md rounded-xl overflow-hidden border border-cyan-900/30">
                <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-cyan-300/70 text-sm">Career Roadmap</span>
                </div>
                <div className="p-4">
                  <img 
                    src={serviceData.image} 
                    alt="Data Analyst Roadmap" 
                    className="w-full h-[200px] md:h-[280px] object-cover object-center rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </motion.div>

            {/* Career Progress Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute right-8 top-[220px] z-30 w-64
                group-hover:translate-y-0.5 transition-all duration-500"
            >
              <div className="bg-slate-900/95 backdrop-blur-md rounded-lg border border-cyan-500/20 p-3">
                <div className="text-cyan-400 text-sm mb-2">Role Progress</div>
                <div className="space-y-2">
                  <div className="bg-cyan-500/10 px-3 py-1.5 rounded text-cyan-300 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Current: Entry Level
                  </div>
                  <div className="bg-cyan-500/5 px-3 py-1.5 rounded text-cyan-300/70 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    Target: Mid Level
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Learning Progress */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute left-4 bottom-8 z-30 w-[90%]
                group-hover:translate-y-1 transition-all duration-500"
            >
              <div className="bg-slate-900/95 rounded-lg overflow-hidden shadow-xl border border-cyan-900/20">
                <div className="bg-slate-800/50 px-2 py-1 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-cyan-300/70 text-xs">Learning Progress</span>
                </div>
                <div className="p-3 text-sm">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <span className="text-green-400">✓</span> 
                    SQL & Database: Complete
                  </div>
                  <div className="flex items-center gap-2 text-cyan-300/70">
                    <span className="text-yellow-400">→</span> 
                    Data Visualization: 75%
                  </div>
                  <div className="text-cyan-400/50 mt-1">
                    Next: Machine Learning Basics
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobReadyRoadmapCard;