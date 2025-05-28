import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedBackground from '../animations/AnimatedBackground';
import ScrollingText from "./ScrollingText";

type TabType = 'battleground' | 'investigation' | 'analytics' | 'aijourney';

const GamingArena: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('battleground');

  const TabButton = ({ type, label, isActive }: { type: TabType, label: string, isActive: boolean }) => (
    <button
      onClick={() => setActiveTab(type)}
      className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap
        ${isActive 
          ? 'bg-bright-cyan text-slate-900' 
          : 'bg-cyan-900/20 text-cyan-100 hover:bg-cyan-800/30'
        }`}
    >
      {label}
    </button>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'battleground':
        return (
          <div className="mt-12 relative">
            <AnimatedBackground type="cubes" />
            <div className="flex flex-col md:flex-row items-center">
              {/* Left content */}
              <div className="md:w-1/2 p-6 relative min-h-[500px]">
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-cyan-100 mb-6">DataSense Battleground</h3>
                  <p className="text-cyan-300 mb-8">
                    The Game of Clash is an innovative, competitive learning game designed to test 
                    and improve your SQL and Python skills through head-to-head challenges with 
                    friends and peers.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <span>🏆</span> Compete and Conquer
                    </div>
                    <div className="flex items-center gap-2 text-cyan-300">
                      <span>⚡</span> Real-time Challenges
                    </div>
                    <div className="flex items-center gap-2 text-cyan-300">
                      <span>🎯</span> Reward System
                    </div>
                    <div className="flex items-center gap-2 text-cyan-300">
                      <span>📚</span> Everyday Learning
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-bright-cyan text-slate-900 font-bold rounded-full 
                      hover:bg-cyan-300 transition-all duration-300"
                  >
                    START CHALLENGE
                  </motion.button>
                </div>
              </div>

              {/* Right side with Battleground Interface */}
              <div className="md:w-1/2 relative h-[500px] overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
                <img
                  src="/assets/images/tools/LeaderBoard.png"
                  alt="Battleground Interface"
                  className="w-full h-full object-cover opacity-30"
                />

                {/* Main Game Interface */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-8 right-4 z-30 w-[90%] max-w-2xl"
                >
                  <div className="bg-slate-900/90 backdrop-blur-md rounded-xl overflow-hidden border border-cyan-900/30">
                    <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                      </div>
                      <span className="text-cyan-300/70 text-sm">Battle Arena</span>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-cyan-400">Current Battle</div>
                        <div className="text-cyan-300 text-sm">🔴 Live Match</div>
                      </div>
                      <div className="bg-slate-800/50 p-3 rounded-lg mb-4">
                        <div className="text-cyan-100 mb-2">Challenge: Optimize the Query</div>
                        <div className="font-mono text-sm text-cyan-300/90 bg-slate-700/50 p-3 rounded">
                          -- Optimize this query for better performance
                          SELECT * FROM orders 
                          WHERE customer_id IN (
                            SELECT id FROM customers
                            WHERE country = 'USA'
                          )
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Players Panel */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute left-4 top-[60px] z-40 w-48"
                >
                  <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-cyan-900/30 p-3">
                    <div className="text-cyan-400 text-sm mb-2">Players</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between text-cyan-300">
                        <span>👤 You</span>
                        <span>850 pts</span>
                      </div>
                      <div className="flex items-center justify-between text-cyan-300/80">
                        <span>👤 Opponent</span>
                        <span>820 pts</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Battle Stats */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute right-8 bottom-[100px] z-40 w-64"
                >
                  <div className="bg-slate-900/95 backdrop-blur-md rounded-lg border border-cyan-500/20 p-3">
                    <div className="text-cyan-400 text-sm mb-2">Battle Stats</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-cyan-300/70 text-xs">
                        <span>Time Left: 05:00</span>
                        <span>Round 2/3</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-700/50">
                        <div className="h-full w-2/3 rounded-full bg-cyan-500"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        );

        case 'investigation':
          return (
            <div className="mt-12 relative">
              <AnimatedBackground type="cubes" />
              <div className="flex flex-col md:flex-row items-center">
                {/* Left content */}
                <div className="md:w-1/2 p-6 relative min-h-[500px]">
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-cyan-100 mb-6">SQL Bureau of Investigation</h3>
                    <p className="text-cyan-300 mb-8">
                      Join the SQL Bureau of Investigation and solve complex data mysteries. 
                      Analyze evidence, query databases, and uncover insights to crack cases 
                      while mastering advanced SQL concepts.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-2 text-cyan-300">
                        <span>🔍</span> Investigate Cases
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300">
                        <span>💡</span> Solve Mysteries
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300">
                        <span>📊</span> Analyze Data
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300">
                        <span>🎓</span> Learn SQL
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-bright-cyan text-slate-900 font-bold rounded-full 
                        hover:bg-cyan-300 transition-all duration-300"
                    >
                      START INVESTIGATION
                    </motion.button>
                  </div>
                </div>

                {/* Right side with Investigation Interface */}
                <div className="md:w-1/2 relative h-[500px] overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
                  <img
                    src="/assets/images/tools/LeaderBoard.png"
                    alt="Investigation Interface"
                    className="w-full h-full object-cover opacity-30"
                  />

                  {/* Main Investigation Interface */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-8 right-4 z-30 w-[90%] max-w-2xl"
                  >
                    <div className="bg-slate-900/90 backdrop-blur-md rounded-xl overflow-hidden border border-cyan-900/30">
                      <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <span className="text-cyan-300/70 text-sm">Case #238: Data Breach</span>
                      </div>
                      <div className="p-4">
                        <div className="bg-slate-800/50 p-3 rounded-lg mb-4">
                          <div className="text-cyan-100 mb-2">Investigation Task</div>
                          <div className="text-cyan-300/70 text-sm mb-3">
                            Find all suspicious login attempts from the last 24 hours
                          </div>
                          <div className="font-mono text-sm text-cyan-300/90 bg-slate-700/50 p-3 rounded">
                            SELECT ip_address, COUNT(*) as attempts
                            FROM login_logs
                            WHERE success = false
                            AND timestamp {">"} NOW() - INTERVAL '24 hours'
                            GROUP BY ip_address
                            HAVING COUNT(*) {">"} 5;
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Evidence Panel */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="absolute left-4 top-[60px] z-40 w-48"
                  >
                    <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-cyan-900/30 p-3">
                      <div className="text-cyan-400 text-sm mb-2">Evidence</div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-cyan-300">
                          <span>📄</span> Login Logs
                        </div>
                        <div className="flex items-center gap-2 text-cyan-300">
                          <span>📄</span> User Data
                        </div>
                        <div className="flex items-center gap-2 text-cyan-300">
                          <span>📄</span> IP Records
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Case Progress */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute right-8 bottom-[100px] z-40 w-64"
                  >
                    <div className="bg-slate-900/95 backdrop-blur-md rounded-lg border border-cyan-500/20 p-3">
                      <div className="text-cyan-400 text-sm mb-2">Case Progress</div>
                      <div className="space-y-2">
                        <div className="h-2 rounded-full bg-slate-700/50">
                          <div className="h-full w-1/2 rounded-full bg-cyan-500"></div>
                        </div>
                        <div className="flex justify-between text-cyan-300/70 text-xs">
                          <span>Evidence Analyzed: 2/4</span>
                          <span>50% Complete</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          );

          case 'analytics':
            return (
              <div className="mt-12 relative">
                <AnimatedBackground type="cubes" />
                <div className="flex flex-col md:flex-row items-center">
                  {/* Left content */}
                  <div className="md:w-1/2 p-6 relative min-h-[500px]">
                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold text-cyan-100 mb-6">Data Analytics Job Ready Roadmap</h3>
                      <p className="text-cyan-300 mb-8">
                        Follow a structured learning path designed to prepare you for a career in data analytics. 
                        Master essential tools, techniques, and best practices through hands-on projects and 
                        real-world scenarios.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center gap-2 text-cyan-300">
                          <span>📊</span> Data Visualization
                        </div>
                        <div className="flex items-center gap-2 text-cyan-300">
                          <span>📈</span> Statistical Analysis
                        </div>
                        <div className="flex items-center gap-2 text-cyan-300">
                          <span>🔄</span> ETL Processes
                        </div>
                        <div className="flex items-center gap-2 text-cyan-300">
                          <span>📋</span> Industry Projects
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-bright-cyan text-slate-900 font-bold rounded-full 
                          hover:bg-cyan-300 transition-all duration-300"
                      >
                        START JOURNEY
                      </motion.button>
                    </div>
                  </div>

                  {/* Right side with Analytics Interface */}
                  <div className="md:w-1/2 relative h-[500px] overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
                    <img
                      src="/assets/images/tools/LeaderBoard.png"
                      alt="Analytics Dashboard"
                      className="w-full h-full object-cover opacity-30"
                    />

                    {/* Main Analytics Interface */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute top-8 right-4 z-30 w-[90%] max-w-2xl"
                    >
                      <div className="bg-slate-900/90 backdrop-blur-md rounded-xl overflow-hidden border border-cyan-900/30">
                        <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                          </div>
                          <span className="text-cyan-300/70 text-sm">Analytics Project</span>
                        </div>
                        <div className="p-4">
                          <div className="bg-slate-800/50 p-3 rounded-lg mb-4">
                            <div className="text-cyan-100 mb-2">E-Commerce Data Analysis</div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-slate-700/50 p-3 rounded-lg">
                                <div className="text-cyan-300 text-sm mb-1">Revenue Growth</div>
                                <div className="text-2xl text-cyan-100">+24.5%</div>
                              </div>
                              <div className="bg-slate-700/50 p-3 rounded-lg">
                                <div className="text-cyan-300 text-sm mb-1">Customer Retention</div>
                                <div className="text-2xl text-cyan-100">82%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Skills Progress */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="absolute left-4 top-[60px] z-40 w-48"
                    >
                      <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-cyan-900/30 p-3">
                        <div className="text-cyan-400 text-sm mb-2">Skills Progress</div>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-cyan-300/70 text-xs mb-1">
                              <span>SQL</span>
                              <span>85%</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-slate-700/50">
                              <div className="h-full w-[85%] rounded-full bg-cyan-500"></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-cyan-300/70 text-xs mb-1">
                              <span>Python</span>
                              <span>70%</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-slate-700/50">
                              <div className="h-full w-[70%] rounded-full bg-cyan-500"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            );

          case 'aijourney':
            return (
              <div className="mt-12 relative">
                <AnimatedBackground type="cubes" />
                <div className="flex flex-col md:flex-row items-center">
                  {/* Left content */}
                  <div className="md:w-1/2 p-6 relative min-h-[500px]">
                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold text-cyan-100 mb-6">AI/ML Learning Journey</h3>
                      <p className="text-cyan-300 mb-8">
                        Embark on a comprehensive journey into Artificial Intelligence and Machine Learning. 
                        Learn from fundamentals to advanced concepts through interactive lessons and 
                        practical implementations.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center gap-2 text-cyan-300">
                          <span>🤖</span> Machine Learning
                        </div>
                        <div className="flex items-center gap-2 text-cyan-300">
                          <span>🧠</span> Deep Learning
                        </div>
                        <div className="flex items-center gap-2 text-cyan-300">
                          <span>📱</span> Neural Networks
                        </div>
                        <div className="flex items-center gap-2 text-cyan-300">
                          <span>🔮</span> Model Deployment
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-bright-cyan text-slate-900 font-bold rounded-full 
                          hover:bg-cyan-300 transition-all duration-300"
                      >
                        EXPLORE AI
                      </motion.button>
                    </div>
                  </div>

                  {/* Right side with AI/ML Interface */}
                  <div className="md:w-1/2 relative h-[500px] overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
                    <img
                      src="/assets/images/tools/LeaderBoard.png"
                      alt="AI/ML Interface"
                      className="w-full h-full object-cover opacity-30"
                    />

                    {/* Main AI/ML Interface */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute top-8 right-4 z-30 w-[90%] max-w-2xl"
                    >
                      <div className="bg-slate-900/90 backdrop-blur-md rounded-xl overflow-hidden border border-cyan-900/30">
                        <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                          </div>
                          <span className="text-cyan-300/70 text-sm">Model Training</span>
                        </div>
                        <div className="p-4">
                          <div className="bg-slate-800/50 p-3 rounded-lg mb-4">
                            <div className="text-cyan-100 mb-2">Image Classification Model</div>
                            <div className="font-mono text-sm text-cyan-300/90 bg-slate-700/50 p-3 rounded">
                              model = Sequential([
                                Conv2D(32, 3, activation='relu'),
                                MaxPooling2D(),
                                Dense(10, activation='softmax')
                              ])
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Learning Path */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="absolute left-4 top-[60px] z-40 w-48"
                    >
                      <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-cyan-900/30 p-3">
                        <div className="text-cyan-400 text-sm mb-2">Learning Path</div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-cyan-300">
                            <span>✓</span> Python Basics
                          </div>
                          <div className="flex items-center gap-2 text-cyan-300">
                            <span>✓</span> Data Preprocessing
                          </div>
                          <div className="flex items-center gap-2 text-cyan-300/70">
                            <span>▶</span> Neural Networks
                          </div>
                          <div className="flex items-center gap-2 text-cyan-300/50">
                            <span>○</span> Deep Learning
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Training Progress */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="absolute right-8 bottom-[100px] z-40 w-64"
                    >
                      <div className="bg-slate-900/95 backdrop-blur-md rounded-lg border border-cyan-500/20 p-3">
                        <div className="text-cyan-400 text-sm mb-2">Model Training</div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-cyan-300/70 text-xs">
                            <span>Epoch 15/50</span>
                            <span>Accuracy: 92.5%</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-700/50">
                            <div className="h-full w-[30%] rounded-full bg-cyan-500"></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            );
      default:
        return null;
    }
  };

  return (

    <section id="gaming-arena" className="w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-cyan-950">
      <ScrollingText />
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-bright-cyan mb-6">
            DATASENSE GAMING ARENA
          </h2>
          <p className="text-2xl text-cyan-100 mb-4">
            LEARN, PLAY, AND COMPETE IN THE WORLD OF DATA
          </p>
          <p className="text-lg text-cyan-300 max-w-4xl mx-auto">
            The DataSense Gaming Arena transforms learning into an engaging and competitive experience. 
            It features interactive games that challenge your data skills, helping you master SQL, Python, 
            and essential analytics concepts while having fun.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <TabButton 
            type="battleground" 
            label="DATASENSE BATTLEGROUND" 
            isActive={activeTab === 'battleground'} 
          />
          <TabButton 
            type="investigation" 
            label="SQL BUREAU OF INVESTIGATION" 
            isActive={activeTab === 'investigation'} 
          />
          <TabButton 
            type="analytics" 
            label="DATA ANALYTICS JOB READY ROADMAP" 
            isActive={activeTab === 'analytics'} 
          />
          <TabButton 
            type="aijourney" 
            label="AI/ML LEARNING JOURNEY" 
            isActive={activeTab === 'aijourney'} 
          />
        </div>

        {renderContent()}
      </div>
    </section>
  );
};

export default GamingArena;