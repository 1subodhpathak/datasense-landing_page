import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedBackground from '../animations/AnimatedBackground';
import ScrollingText from "./ScrollingText";

// Type for tab content
type TabType = 'coderpad' | 'custom' | 'live' | 'mock';

const PracticeArea: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('coderpad');

  const TabButton = ({ type, label, isActive }: { type: TabType, label: string, isActive: boolean }) => (
    <button
      onClick={() => setActiveTab(type)}
      className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
        isActive 
          ? 'bg-bright-cyan text-slate-900' 
          : 'bg-cyan-900/20 text-cyan-100 hover:bg-cyan-800/30'
      }`}
    >
      {label}
    </button>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'coderpad':
        return (
          <div className="mt-12 relative">
            <div className="flex flex-col md:flex-row items-center">
              {/* Left side with content and animation */}
              <div className="md:w-1/2 p-6 relative min-h-[500px]"> {/* Added relative and min-height */}
                <AnimatedBackground type="cubes" />
                <div className="relative z-10"> {/* Added to keep content above animation */}
                  <h3 className="text-3xl font-bold text-cyan-100 mb-6">Interactive Coderpad</h3>
                  <p className="text-cyan-300 mb-8">
                    Practice, experiment, and build real-world skills with DataSense's seamless online 
                    coderpad. Write, test, and debug directly in your browser — no setup required. Real-world 
                    scenarios to sharpen your skills.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-bright-cyan text-slate-900 font-bold rounded-full 
                      hover:bg-cyan-300 transition-all duration-300"
                  >
                    EXPLORE
                  </motion.button>
                </div>
              </div>

              {/* Right side with interface preview */}
              <div className="md:w-1/2 relative h-[500px] overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
                <img
                  src="/assets/images/tools/SQL Coding Arena.png"
                  alt="Coderpad Interface"
                  className="w-full h-full object-cover opacity-30"
                />
                
                {/* Main Coderpad Interface */}
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
                      <span className="text-cyan-300/70 text-sm">Coderpad Platform</span>
                    </div>
                    <div className="p-4">
                      <div className="text-cyan-400 text-sm mb-2">SQL Practice</div>
                      <div className="bg-slate-800/50 p-3 rounded-lg text-cyan-100 text-sm">
                        <div className="mb-2">Module 3: Advanced Queries</div>
                        <div className="text-cyan-300/70">Learn how to optimize complex queries and improve database performance</div>
                      </div>
                      
                      <div className="mt-4">
                        <div className="bg-slate-800/50 p-3 rounded-lg font-mono text-sm">
                          <div className="text-cyan-300">SELECT u.name, COUNT(o.id) as order_count</div>
                          <div className="text-cyan-300">FROM users u</div>
                          <div className="text-cyan-300">LEFT JOIN orders o ON u.id = o.user_id</div>
                          <div className="text-cyan-300">GROUP BY u.id</div>
                          <div className="text-cyan-300">HAVING COUNT(o.id) {'>'} 5;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Modules Panel */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute left-4 top-[60px] z-40 w-48"
                >
                  <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-cyan-900/30 p-3
                    shadow-lg shadow-slate-900/20">
                    <div className="text-cyan-400/90 text-sm font-medium mb-2">Modules</div>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2 text-cyan-300 hover:bg-slate-700/50 px-2 py-1 rounded transition-all">
                        <span>✓</span> Basic Queries
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300 hover:bg-slate-700/50 px-2 py-1 rounded transition-all">
                        <span>✓</span> Joins & Subqueries
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300/90 bg-slate-700/50 px-2 py-1 rounded transition-all">
                        <span>▶</span> Advanced Queries
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300/70 hover:bg-slate-700/50 px-2 py-1 rounded transition-all">
                        <span>○</span> Optimization
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Progress Bar */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute right-8 bottom-[100px] z-40 w-64"
                >
                  <div className="bg-slate-900/95 backdrop-blur-md rounded-lg border border-cyan-500/20 p-3">
                    <div className="text-cyan-400 text-sm mb-2">Progress</div>
                    <div className="h-2 rounded-full bg-slate-700/50 mb-2">
                      <div className="h-full w-3/4 rounded-full bg-cyan-500"></div>
                    </div>
                    <div className="text-cyan-300/70 text-xs">75% Complete - 3 of 4 modules</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        );
      case 'custom':
        return (
          <div className="mt-12 relative">
            <AnimatedBackground type="cubes" />
            <div className="flex flex-col md:flex-row items-center">
              {/* Left content */}
              <div className="md:w-1/2 p-6">
                <h3 className="text-3xl font-bold text-cyan-100 mb-6">Custom Quiz Creation</h3>
                <p className="text-cyan-300 mb-8">
                  Create personalized quizzes tailored to your learning needs. Test your knowledge, 
                  challenge yourself, and track your progress with custom quizzes designed to help you 
                  master key concepts.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-bright-cyan text-slate-900 font-bold rounded-full 
                    hover:bg-cyan-300 transition-all duration-300"
                >
                  CREATE QUIZ
                </motion.button>
              </div>

              {/* Right side with Quiz Creator Interface */}
              <div className="md:w-1/2 relative h-[500px] overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
                
                {/* Main Quiz Creator Interface */}
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
                      <span className="text-cyan-300/70 text-sm">Quiz Creator</span>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-slate-800/50 p-3 rounded-lg">
                          <div className="text-cyan-400 text-sm mb-2">Question Type</div>
                          <select className="w-full bg-slate-700/50 text-cyan-100 rounded p-2 border border-cyan-900/30">
                            <option>Multiple Choice</option>
                            <option>Code Implementation</option>
                            <option>Database Query</option>
                          </select>
                        </div>
                        <div className="bg-slate-800/50 p-3 rounded-lg">
                          <div className="text-cyan-400 text-sm mb-2">Difficulty Level</div>
                          <div className="flex gap-2">
                            <button className="px-3 py-1 rounded bg-green-500/20 text-green-300">Easy</button>
                            <button className="px-3 py-1 rounded bg-yellow-500/20 text-yellow-300">Medium</button>
                            <button className="px-3 py-1 rounded bg-red-500/20 text-red-300">Hard</button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-slate-800/50 p-3 rounded-lg mb-4">
                        <div className="text-cyan-400 text-sm mb-2">Question</div>
                        <textarea 
                          className="w-full bg-slate-700/50 text-cyan-100 rounded p-2 border border-cyan-900/30"
                          placeholder="Enter your question here..."
                          rows={3}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Options Panel */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute left-4 top-[60px] z-40 w-48"
                >
                  <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-cyan-900/30 p-3">
                    <div className="text-cyan-400 text-sm mb-2">Quiz Options</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-cyan-300 hover:bg-slate-700/50 px-2 py-1 rounded">
                        <span>📝</span> Add Question
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300 hover:bg-slate-700/50 px-2 py-1 rounded">
                        <span>⏱️</span> Set Timer
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300 hover:bg-slate-700/50 px-2 py-1 rounded">
                        <span>🎯</span> Set Points
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Preview Section */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute right-8 bottom-[100px] z-40 w-64"
                >
                  <div className="bg-slate-900/95 backdrop-blur-md rounded-lg border border-cyan-500/20 p-3">
                    <div className="text-cyan-400 text-sm mb-2">Quiz Preview</div>
                    <div className="space-y-2">
                      <div className="bg-slate-800/50 px-3 py-2 rounded text-cyan-300 text-sm">
                        Total Questions: 5
                      </div>
                      <div className="bg-slate-800/50 px-3 py-2 rounded text-cyan-300 text-sm">
                        Duration: 15 mins
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        );
      case 'live':
        return (
          <div className="mt-12 relative">
            <AnimatedBackground type="cubes" />
            <div className="flex flex-col md:flex-row items-center">
              {/* Left content remains the same */}
              <div className="md:w-1/2 p-6">
                <h3 className="text-3xl font-bold text-cyan-100 mb-6">Everyday Live Quizzes</h3>
                <p className="text-cyan-300 mb-8">
                  Participate in live quizzes every day to test your skills against others. 
                  Compete, learn, and improve in real-time with interactive challenges designed 
                  to keep you engaged and motivated.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-bright-cyan text-slate-900 font-bold rounded-full 
                    hover:bg-cyan-300 transition-all duration-300"
                >
                  JOIN QUIZ
                </motion.button>
              </div>

              {/* Right side with Live Quiz Interface */}
              <div className="md:w-1/2 relative h-[500px] overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
                <img
                  src="/assets/images/tools/LiveQuiz.png"
                  alt="Live Quiz Interface"
                  className="w-full h-full object-cover opacity-30"
                />

                {/* Main Quiz Interface */}
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
                      <span className="text-cyan-300/70 text-sm">Live Quiz Arena</span>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-cyan-400">SQL Challenge #42</div>
                        <div className="text-cyan-300 text-sm">🔴 Live Now</div>
                      </div>
                      <div className="bg-slate-800/50 p-3 rounded-lg mb-4">
                        <div className="text-cyan-100 mb-2">Which query will efficiently find duplicate records?</div>
                        <div className="space-y-2">
                          <div className="bg-slate-700/50 p-2 rounded border border-cyan-500/30 text-cyan-300">
                            SELECT * FROM users GROUP BY email HAVING COUNT(*) `{">"}` 1
                          </div>
                          <div className="bg-slate-700/50 p-2 rounded border border-cyan-900/30 text-cyan-300/70">
                            SELECT DISTINCT * FROM users WHERE email IN...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Leaderboard Panel */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute left-4 top-[60px] z-40 w-48"
                >
                  <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-cyan-900/30 p-3">
                    <div className="text-cyan-400 text-sm mb-2">Leaderboard</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between text-cyan-300">
                        <span>🥇 Alex S.</span>
                        <span>520</span>
                      </div>
                      <div className="flex items-center justify-between text-cyan-300/90">
                        <span>🥈 Maria K.</span>
                        <span>480</span>
                      </div>
                      <div className="flex items-center justify-between text-cyan-300/80">
                        <span>🥉 John D.</span>
                        <span>450</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Timer */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute right-8 bottom-[100px] z-40 w-64"
                >
                  <div className="bg-slate-900/95 backdrop-blur-md rounded-lg border border-cyan-500/20 p-3">
                    <div className="text-cyan-400 text-sm mb-2">Time Remaining</div>
                    <div className="text-2xl text-cyan-300 font-mono">00:45</div>
                    <div className="text-cyan-300/70 text-xs">Question 3 of 10</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        );
      case 'mock':
        return (
          <div className="mt-12 relative">
            <AnimatedBackground type="cubes" />
            <div className="flex flex-col md:flex-row items-center">
              {/* Left content remains the same */}
              <div className="md:w-1/2 p-6">
                <h3 className="text-3xl font-bold text-cyan-100 mb-6">Mock Quizzes</h3>
                <p className="text-cyan-300 mb-8">
                  Prepare for real-world challenges with mock quizzes. Simulate exam conditions, 
                  test your knowledge, and identify areas for improvement to ensure you're ready 
                  for success.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-bright-cyan text-slate-900 font-bold rounded-full 
                    hover:bg-cyan-300 transition-all duration-300"
                >
                  START MOCK QUIZ
                </motion.button>
              </div>

              {/* Right side with Mock Quiz Interface */}
              <div className="md:w-1/2 relative h-[500px] overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
                <img
                  src="/assets/images/tools/MockQuiz.png"
                  alt="Mock Quiz Interface"
                  className="w-full h-full object-cover opacity-30"
                />

                {/* Main Quiz Interface */}
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
                      <span className="text-cyan-300/70 text-sm">Mock Exam</span>
                    </div>
                    <div className="p-4">
                      <div className="bg-slate-800/50 p-3 rounded-lg mb-4">
                        <div className="text-cyan-400 text-sm mb-2">Data Analysis Certification Mock</div>
                        <div className="text-cyan-100 mb-4">Design a query to analyze customer behavior:</div>
                        <div className="font-mono text-sm text-cyan-300/90 bg-slate-700/50 p-3 rounded">
                          -- Write a query to find the top 5 customers
                          -- by total order value in the last month
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Question Navigator */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute left-4 top-[60px] z-40 w-48"
                >
                  <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-cyan-900/30 p-3">
                    <div className="text-cyan-400 text-sm mb-2">Questions</div>
                    <div className="grid grid-cols-5 gap-2">
                      {[...Array(15)].map((_, i) => (
                        <div 
                          key={i}
                          className={`w-8 h-8 flex items-center justify-center rounded
                            ${i < 5 ? 'bg-cyan-500/20 text-cyan-300' : 
                              i === 5 ? 'bg-cyan-500/40 border border-cyan-500' : 
                              'bg-slate-700/50 text-cyan-300/50'}`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Exam Progress */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute right-8 bottom-[100px] z-40 w-64"
                >
                  <div className="bg-slate-900/95 backdrop-blur-md rounded-lg border border-cyan-500/20 p-3">
                    <div className="text-cyan-400 text-sm mb-2">Exam Progress</div>
                    <div className="h-2 rounded-full bg-slate-700/50 mb-2">
                      <div className="h-full w-1/3 rounded-full bg-cyan-500"></div>
                    </div>
                    <div className="flex justify-between text-cyan-300/70 text-xs">
                      <span>Time: 45:00</span>
                      <span>5/15 Questions</span>
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
    <section id ="practice" className="w-full overflow-hidden bg-gradient-to-b from-cyan-950 via-slate-800 to-slate-900">
      <ScrollingText />
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-bright-cyan mb-6">
            PRACTICE REAL TIME
          </h2>
          <p className="text-2xl text-cyan-100 mb-4">
            THE SMARTEST PATH TO KICKSTART OR ELEVATE YOUR DATA CAREER
          </p>
          <p className="text-lg text-cyan-300 max-w-4xl mx-auto">
            At DataSense, we equip aspiring and seasoned professionals with practical, in-demand Data & AI skills. 
            Join thousands of learners who've transformed their careers — and this is just the beginning.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <TabButton 
            type="coderpad" 
            label="INTERACTIVE CODERPAD" 
            isActive={activeTab === 'coderpad'} 
          />
          <TabButton 
            type="custom" 
            label="CUSTOM QUIZ CREATION" 
            isActive={activeTab === 'custom'} 
          />
          <TabButton 
            type="live" 
            label="EVERYDAY LIVE QUIZZES" 
            isActive={activeTab === 'live'} 
          />
          <TabButton 
            type="mock" 
            label="MOCK QUIZZES" 
            isActive={activeTab === 'mock'} 
          />
        </div>

        {renderContent()}
      </div>
    </section>
  );
};

export default PracticeArea;
