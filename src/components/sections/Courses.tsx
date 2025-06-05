import { motion } from "framer-motion";
import { BsDatabase } from "react-icons/bs";
import { FaPython } from "react-icons/fa";
import { MdOutlineSmartToy } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { FaRoad } from "react-icons/fa";
import { AiOutlineTrophy } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../animations/AnimatedBackground';
import ScrollingText from "./ScrollingText";

// Type for tab content
type TabType = 'courses' | 'dashboard' | 'roadmap' | 'badges';

// Add service links interface and constant
interface CourseLinks {
  courses: string;
  dashboard: string;
  roadmap: string;
  badges: string;
}

const courseLinks: CourseLinks = {
  courses: '/courses', // Replace with actual link when ready
  dashboard: 'https://www.youtube.com/', // Example external link
  roadmap: '/coming-soon',
  badges: '/coming-soon'
};

const Courses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('courses');
  const navigate = useNavigate();

  // Add navigation handler
  const handleNavigation = (url: string) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      window.location.href = url;
    } else {
      navigate(url);
    }
  };

  const TabButton = ({ type, label, isActive }: { type: TabType, label: string, isActive: boolean }) => (
    <button
      onClick={() => setActiveTab(type)}
      className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
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
      case 'courses':
        return (
          <div className="mt-12 relative">
            <div className="flex flex-col md:flex-row items-center">
              {/* Left content (updated for consistency) */}
              <div className="md:w-1/2 p-6">
                <h3 className="text-3xl font-bold text-cyan-100 mb-6">Self Placed Courses</h3>
                <p className="text-cyan-300 mb-8">
                  Practice, experiment, and build real-world skills with DataSense's seamless online 
                  coderpad. Write, test, and debug directly in your browser — no setup required. Real-world 
                  scenarios to sharpen your skills.
                </p>
                <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl 
                  border border-cyan-900/20 hover:border-cyan-500/30
                  hover:bg-slate-700/40 transition-all duration-300 mb-8">
                  <div className="flex items-center">
                    <div className="mr-4 transform hover:scale-110 transition-all duration-500">
                      <BsDatabase className="text-5xl text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-cyan-100 mb-2">Real-World Coding Arena</h4>
                      <p className="text-cyan-300 opacity-90">
                        Write, test, and debug SQL, Python, and more directly in your browser. No setup, just learning.
                      </p>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation(courseLinks.courses)}
                  className="px-6 py-2 bg-cyan-400 text-slate-900 rounded-lg 
                     font-semibold hover:bg-cyan-300 hover:scale-105 active:scale-95
                     shadow-[0_0_10px_#00ffff] transition-all duration-300"
                >
                  EXPLORE
                </motion.button>
                <AnimatedBackground type="cubes" />
              </div>

              {/* Right side with interface preview (unchanged) */}
              <div className="md:w-1/2 relative h-[500px] overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
                <img
                  src="/assets/images/tools/SQL Coding Arena.png"
                  alt="Course Interface"
                  className="w-full h-full object-cover opacity-30"
                />
                {/* Main Course Interface */}
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
                      <span className="text-cyan-300/70 text-sm">Course Platform</span>
                    </div>
                    <div className="p-4">
                      <div className="text-cyan-400 text-sm mb-2">SQL Course</div>
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
                {/* Course Modules Panel */}
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
                    <div className="text-cyan-400 text-sm mb-2">Course Progress</div>
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
      case 'dashboard':
        return (
          <div className="mt-12 relative">
            <AnimatedBackground type="cubes" />
            <div className="flex flex-col md:flex-row items-center">
              {/* Left content */}
              <div className="md:w-1/2 p-6">
                <h3 className="text-3xl font-bold text-cyan-100 mb-6">Interactive Dashboard</h3>
                <p className="text-cyan-300 mb-8">
                  Track your progress, visualize your learning journey, and get personalized insights 
                  with DataSense's comprehensive analytics dashboard. Monitor your course completion, 
                  skill development, and performance metrics all in one place.
                </p>
                <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl 
                  border border-cyan-900/20 hover:border-cyan-500/30
                  hover:bg-slate-700/40 transition-all duration-300 mb-8">
                  <div className="flex items-center">
                    <div className="mr-4 transform hover:scale-110 transition-all duration-500">
                      <IoMdAnalytics className="text-5xl text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-cyan-100 mb-2">Performance Analytics</h4>
                      <p className="text-cyan-300 opacity-90">
                        Get detailed insights into your learning patterns, strengths, and areas for improvement. 
                        Our analytics engine provides actionable recommendations to accelerate your progress.
                      </p>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation(courseLinks.dashboard)}
                  className="px-6 py-2 bg-cyan-400 text-slate-900 rounded-lg 
                       font-semibold hover:bg-cyan-300 hover:scale-105 active:scale-95
                       shadow-[0_0_10px_#00ffff] transition-all duration-300"
                >
                  VIEW DASHBOARD
                </motion.button>
              </div>
              
              {/* Right image */}
              <div className="md:w-1/2 relative h-[500px] overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
                <img
                  src="/assets/images/tools/LeaderBoard.png"
                  alt="Dashboard Interface"
                  className="w-full h-full object-cover opacity-30"
                />
                
                {/* Main Dashboard */}
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
                      <span className="text-cyan-300/70 text-sm">Analytics Dashboard</span>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between mb-4">
                        <div className="bg-slate-800/50 p-3 rounded-lg w-[48%] text-center">
                          <div className="text-cyan-300 text-sm mb-1">Total Hours</div>
                          <div className="text-cyan-100 text-2xl font-bold">42.5</div>
                        </div>
                        <div className="bg-slate-800/50 p-3 rounded-lg w-[48%] text-center">
                          <div className="text-cyan-300 text-sm mb-1">Exercises Completed</div>
                          <div className="text-cyan-100 text-2xl font-bold">87</div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-800/50 p-3 rounded-lg mb-4">
                        <div className="text-cyan-400 text-sm mb-2">Skill Proficiency</div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="text-cyan-300 text-sm">SQL</div>
                          <div className="w-2/3 h-2 bg-slate-700 rounded-full">
                            <div className="h-full w-4/5 bg-cyan-500 rounded-full"></div>
                          </div>
                          <div className="text-cyan-300 text-sm">80%</div>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="text-cyan-300 text-sm">Python</div>
                          <div className="w-2/3 h-2 bg-slate-700 rounded-full">
                            <div className="h-full w-3/5 bg-cyan-500 rounded-full"></div>
                          </div>
                          <div className="text-cyan-300 text-sm">60%</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-cyan-300 text-sm">AI/ML</div>
                          <div className="w-2/3 h-2 bg-slate-700 rounded-full">
                            <div className="h-full w-2/5 bg-cyan-500 rounded-full"></div>
                          </div>
                          <div className="text-cyan-300 text-sm">40%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Weekly Progress */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute left-8 bottom-[100px] z-40 w-[80%]"
                >
                  <div className="bg-slate-900/95 backdrop-blur-md rounded-lg border border-cyan-500/20 p-3">
                    <div className="text-cyan-400 text-sm mb-2">Weekly Progress</div>
                    <div className="flex justify-between h-24">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                        <div key={i} className="flex flex-col items-center justify-end w-8">
                          <div 
                            className="w-4 bg-cyan-500/80 rounded-t-sm" 
                            style={{ height: `${Math.floor(Math.random() * 70) + 10}%` }}
                          ></div>
                          <div className="text-cyan-300/70 text-xs mt-1">{day}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        );
      case 'roadmap':
        return (
          <div className="mt-12 relative">
            <AnimatedBackground type="cubes" />
            <div className="flex flex-col md:flex-row items-center">
              {/* Left content */}
              <div className="md:w-1/2 p-6">
                <h3 className="text-3xl font-bold text-cyan-100 mb-6">Personalized Roadmap</h3>
                <p className="text-cyan-300 mb-8">
                  Navigate your learning journey with a custom-tailored career path. Our AI-powered 
                  roadmap adapts to your goals, skills, and progress to provide a clear path forward. 
                  Stay focused on what matters most for your career growth.
                </p>
                <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl 
                  border border-cyan-900/20 hover:border-cyan-500/30
                  hover:bg-slate-700/40 transition-all duration-300 mb-8">
                  <div className="flex items-center">
                    <div className="mr-4 transform hover:scale-110 transition-all duration-500">
                      <FaRoad className="text-5xl text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-cyan-100 mb-2">Career Path Guidance</h4>
                      <p className="text-cyan-300 opacity-90">
                        Get expert guidance on your journey to becoming a data professional. 
                        Our roadmap suggests the right courses, projects, and learning milestones 
                        to help you reach your career goals faster.
                      </p>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation(courseLinks.roadmap)}
                  className="px-6 py-2 bg-cyan-400 text-slate-900 rounded-lg 
                       font-semibold hover:bg-cyan-300 hover:scale-105 active:scale-95
                       shadow-[0_0_10px_#00ffff] transition-all duration-300"
                >
                  VIEW ROADMAP
                </motion.button>
              </div>
              
              {/* Right image */}
              <div className="md:w-1/2 relative h-[500px] overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
                <img
                  src="/assets/images/tools/LeaderBoard.png"
                  alt="Roadmap Interface"
                  className="w-full h-full object-cover opacity-30"
                />
                
                {/* Main Roadmap */}
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
                      <span className="text-cyan-300/70 text-sm">Career Roadmap - Data Scientist</span>
                    </div>
                    <div className="p-4">
                      <div className="flex mb-4 items-center">
                        <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-xs font-bold">1</div>
                        <div className="h-1 w-full bg-cyan-500"></div>
                        <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-xs font-bold">2</div>
                        <div className="h-1 w-full bg-cyan-500"></div>
                        <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-xs font-bold">3</div>
                        <div className="h-1 w-full bg-slate-700"></div>
                        <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">4</div>
                      </div>
                      
                      <div className="bg-slate-800/50 p-3 rounded-lg mb-4">
                        <div className="text-cyan-400 text-sm mb-2">Current Focus: Data Analysis & Visualization</div>
                        <div className="text-cyan-100 text-sm">
                          Build proficiency in manipulating and visualizing complex datasets. Master tools and 
                          techniques for extracting meaningful insights from data.
                        </div>
                      </div>
                      
                      <div className="bg-slate-800/50 p-3 rounded-lg">
                        <div className="text-cyan-400 text-sm mb-2">Recommended Next Steps</div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center text-cyan-300">
                            <span className="mr-2">•</span> Complete Python for Data Analysis course
                          </div>
                          <div className="flex items-center text-cyan-300">
                            <span className="mr-2">•</span> Practice SQL advanced queries project
                          </div>
                          <div className="flex items-center text-cyan-300">
                            <span className="mr-2">•</span> Start Introduction to Machine Learning
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Skill Tree */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute left-4 bottom-[120px] z-40 w-[40%]"
                >
                  <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-cyan-900/30 p-3
                    shadow-lg shadow-slate-900/20">
                    <div className="text-cyan-400/90 text-sm font-medium mb-2">Your Learning Path</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-cyan-300 px-2 py-1 rounded">
                        <span className="w-4 h-4 rounded-full bg-green-500/80 flex items-center justify-center text-xs">✓</span> 
                        <span>SQL Fundamentals</span>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300 px-2 py-1 rounded">
                        <span className="w-4 h-4 rounded-full bg-green-500/80 flex items-center justify-center text-xs">✓</span> 
                        <span>Python Basics</span>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded">
                        <span className="w-4 h-4 rounded-full bg-cyan-500/80 flex items-center justify-center text-xs">▶</span> 
                        <span>Data Visualization</span>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300/70 px-2 py-1 rounded">
                        <span className="w-4 h-4 rounded-full bg-slate-700 flex items-center justify-center text-xs">○</span> 
                        <span>Machine Learning</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        );
      case 'badges':
        return (
          <div className="mt-12 relative">
            <AnimatedBackground type="cubes" />
            <div className="flex flex-col md:flex-row items-center">
              {/* Left content */}
              <div className="md:w-1/2 p-6">
                <h3 className="text-3xl font-bold text-cyan-100 mb-6">Achievement Badges</h3>
                <p className="text-cyan-300 mb-8">
                  Showcase your accomplishments with DataSense's recognition system. Earn badges as you 
                  complete courses, master skills, and hit important milestones. Build your digital portfolio 
                  of credentials to share with potential employers.
                </p>
                <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl 
                  border border-cyan-900/20 hover:border-cyan-500/30
                  hover:bg-slate-700/40 transition-all duration-300 mb-8">
                  <div className="flex items-center">
                    <div className="mr-4 transform hover:scale-110 transition-all duration-500">
                      <AiOutlineTrophy className="text-5xl text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-cyan-100 mb-2">Verified Credentials</h4>
                      <p className="text-cyan-300 opacity-90">
                        Each badge represents verified skills and knowledge that you've demonstrated. 
                        Our certification system ensures your achievements are recognized and respected 
                        in the industry.
                      </p>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation(courseLinks.badges)}
                  className="px-6 py-2 bg-cyan-400 text-slate-900 rounded-lg 
                       font-semibold hover:bg-cyan-300 hover:scale-105 active:scale-95
                       shadow-[0_0_10px_#00ffff] transition-all duration-300"
                >
                  VIEW BADGES
                </motion.button>
              </div>
              
              {/* Right image */}
              <div className="md:w-1/2 relative h-[500px] overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
                <img
                  src="/assets/images/tools/LeaderBoard.png"
                  alt="Badges Interface"
                  className="w-full h-full object-cover opacity-30"
                />
                
                {/* Main Badges Display */}
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
                      <span className="text-cyan-300/70 text-sm">Achievement Badges</span>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="bg-slate-800/50 p-4 rounded-lg flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center mb-2">
                            <BsDatabase className="text-3xl text-cyan-400" />
                          </div>
                          <div className="text-cyan-100 text-sm font-medium text-center">SQL Master</div>
                          <div className="text-cyan-300/70 text-xs text-center mt-1">Advanced Level</div>
                        </div>
                        <div className="bg-slate-800/50 p-4 rounded-lg flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center mb-2">
                            <FaPython className="text-3xl text-cyan-400" />
                          </div>
                          <div className="text-cyan-100 text-sm font-medium text-center">Python Pro</div>
                          <div className="text-cyan-300/70 text-xs text-center mt-1">Intermediate</div>
                        </div>
                        <div className="bg-slate-800/50 p-4 rounded-lg flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full bg-slate-700/50 border-2 border-slate-600 flex items-center justify-center mb-2">
                            <MdOutlineSmartToy className="text-3xl text-slate-400" />
                          </div>
                          <div className="text-slate-400 text-sm font-medium text-center">AI Expert</div>
                          <div className="text-slate-500 text-xs text-center mt-1">Locked</div>
                        </div>
                      </div>

                      {/* Recent Achievements */}
                      <div className="bg-slate-800/50 p-3 rounded-lg">
                        <div className="text-cyan-400 text-sm mb-3">Recent Achievements</div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                <BsDatabase className="text-lg text-cyan-400" />
                              </div>
                              <div>
                                <div className="text-cyan-100 text-sm">Advanced SQL Queries</div>
                                <div className="text-cyan-300/70 text-xs">Completed module with 95%</div>
                              </div>
                            </div>
                            <div className="text-cyan-300/70 text-xs">2 days ago</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                <FaPython className="text-lg text-cyan-400" />
                              </div>
                              <div>
                                <div className="text-cyan-100 text-sm">Data Structures</div>
                                <div className="text-cyan-300/70 text-xs">Completed all exercises</div>
                              </div>
                            </div>
                            <div className="text-cyan-300/70 text-xs">1 week ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Progress Overview */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute left-8 bottom-[100px] z-40 w-64"
                >
                  <div className="bg-slate-900/95 backdrop-blur-md rounded-lg border border-cyan-500/20 p-3">
                    <div className="text-cyan-400 text-sm mb-2">Badge Progress</div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-cyan-300">Total Badges</span>
                        <span className="text-cyan-100">12/25</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-700/50">
                        <div className="h-full w-[48%] rounded-full bg-cyan-500"></div>
                      </div>
                      <div className="text-cyan-300/70 text-xs">48% to next rank</div>
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
    <section id="courses" className="w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-cyan-950">
      <ScrollingText />
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-mono tracking-wider">
            LEARN ON YOUR TERMS
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
          <TabButton type="courses" label="SELF PLACED COURSES" isActive={activeTab === 'courses'} />
          <TabButton type="dashboard" label="INTERACTIVE DASHBOARD" isActive={activeTab === 'dashboard'} />
          <TabButton type="roadmap" label="PERSONALIZED ROADMAP" isActive={activeTab === 'roadmap'} />
          <TabButton type="badges" label="BADGES" isActive={activeTab === 'badges'} />
        </div>

        {renderContent()}
      </div>
    </section>
  );
};

export default Courses;
