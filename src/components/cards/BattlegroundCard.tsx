import { motion } from "framer-motion";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { ServiceCardProps } from "./types";

const BattlegroundCard = () => {
  const serviceData: ServiceCardProps = {
    title: "DataSense Battleground",
    description: "The DataSense Battleground is an innovative, competitive learning game designed to test and improve your SQL and Python skills through head-to-head challenges with friends and peers",
    icon: AiOutlineThunderbolt,
    image: "/assets/images/tools/LeaderBoard.png",
    buttonText: "Challenge Now",
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
          <div className="relative w-full h-full p-4">
            {/* Leaderboard Stats Panel */}
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
                  <span className="text-cyan-300/70 text-sm">Top Performers</span>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center bg-slate-800/50 rounded-lg p-3">
                      <span className="text-yellow-500 text-2xl mb-1">🏆</span>
                      <span className="text-cyan-300 text-sm">1st Place</span>
                      <span className="text-cyan-400 text-xs mt-1">2400 pts</span>
                    </div>
                    <div className="flex flex-col items-center bg-slate-800/50 rounded-lg p-3">
                      <span className="text-slate-300 text-2xl mb-1">🥈</span>
                      <span className="text-cyan-300 text-sm">2nd Place</span>
                      <span className="text-cyan-400 text-xs mt-1">2100 pts</span>
                    </div>
                    <div className="flex flex-col items-center bg-slate-800/50 rounded-lg p-3">
                      <span className="text-amber-700 text-2xl mb-1">🥉</span>
                      <span className="text-cyan-300 text-sm">3rd Place</span>
                      <span className="text-cyan-400 text-xs mt-1">1950 pts</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Battleground Interface */}
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
                  <span className="text-cyan-300/70 text-sm">Live Battle</span>
                </div>
                <div className="p-4">
                  <img 
                    src={serviceData.image}
                    alt="Battleground Leaderboard"
                    className="w-full h-[280px] object-cover object-center rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </motion.div>

            {/* Live Challenge Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute right-8 top-[220px] z-30 w-64
                group-hover:translate-y-0.5 transition-all duration-500"
            >
              <div className="bg-slate-900/95 backdrop-blur-md rounded-lg border border-cyan-500/20 p-3">
                <div className="text-cyan-400 text-sm mb-2">Current Battle</div>
                <div className="space-y-2">
                  <div className="bg-cyan-500/10 px-3 py-1.5 rounded text-cyan-300 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    12 Players Online
                  </div>
                  <div className="bg-cyan-500/5 px-3 py-1.5 rounded text-cyan-300/70 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    Advanced SQL Challenge
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Battle Status */}
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
                  <span className="text-cyan-300/70 text-xs">Battle Status</span>
                </div>
                <div className="p-3 text-sm">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <span className="text-green-400">⚡</span> 
                    Round 3 of 5
                  </div>
                  <div className="flex items-center gap-2 text-cyan-300/70">
                    <span className="text-yellow-400">🎯</span> 
                    Time Remaining: 5:00
                  </div>
                  <div className="text-cyan-400/50 mt-1">
                    Next Challenge: Python Arrays
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

export default BattlegroundCard;