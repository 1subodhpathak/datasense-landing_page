import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../animations/AnimatedBackground';
import ScrollingText from "./ScrollingText";

type TabType = 'ats' | 'builder' | 'comparison';

interface ServiceLinks {
  ats: string;
  builder: string;
  comparison: string;
}

const serviceLinks: ServiceLinks = {
  ats: 'https://www.youtube.com/', // Replace with actual link when ready
  builder: '/coming-soon', // Replace with actual link when ready
  comparison: '/coming-soon' // Replace with actual link when ready
};

const AIServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('ats');
  const navigate = useNavigate();

  const TabButton = ({ type, label, isActive }: { type: TabType, label: string, isActive: boolean }) => {
    const handleClick = () => {
      setActiveTab(type); // Only change the active tab, no navigation
    };

    return (
      <button
        onClick={handleClick}
        className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
          isActive 
            ? 'bg-bright-cyan text-slate-900' 
            : 'bg-cyan-900/20 text-cyan-100 hover:bg-cyan-800/30'
        }`}
      >
        {label}
      </button>
    );
  };

  const handleNavigation = (url: string) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      // For external URLs
      window.location.href = url;
      // Or if you want to open in new tab:
      // window.open(url, '_blank');
    } else {
      // For internal routes
      navigate(url);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'ats':
        return (
          <div className="mt-12 relative">
            <AnimatedBackground type="cubes" />
            <div className="flex flex-col md:flex-row items-center">
              {/* Left content */}
              <div className="md:w-1/2 p-6 relative min-h-[500px]">
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-cyan-100 mb-6">AI Resume ATS Score Checking</h3>
                  <p className="text-cyan-300 mb-8">
                    The AI Resume ATS Score Checking tool evaluates resumes against the latest applicant 
                    tracking system (ATS) algorithms to maximize visibility during job applications.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <span>📊</span> ATS SCORE
                    </div>
                    <div className="flex items-center gap-2 text-cyan-300">
                      <span>💡</span> OPTIMIZATION SUGESION
                    </div>
                    <div className="flex items-center gap-2 text-cyan-300">
                      <span>🎯</span> INDUSTRY
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavigation(serviceLinks.ats)}
                    className="px-6 py-2 bg-cyan-400 text-slate-900 rounded-lg 
                       font-semibold hover:bg-cyan-300 hover:scale-105 active:scale-95
                       shadow-[0_0_10px_#00ffff] transition-all duration-300"
                  >
                    CHECK NOW
                  </motion.button>
                </div>
              </div>

              {/* Right side with ATS Interface */}
              <div className="md:w-1/2 relative h-[500px] overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
                <img
                  src="/assets/images/tools/LeaderBoard.png"
                  alt="ATS Score Interface"
                  className="w-full h-full object-cover opacity-30"
                />

                {/* Main ATS Interface */}
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
                      <span className="text-cyan-300/70 text-sm">ATS Score Analysis</span>
                    </div>
                    <div className="p-4">
                      <div className="bg-slate-800/50 p-3 rounded-lg mb-4">
                        <div className="text-cyan-100 mb-2">Resume Score</div>
                        <div className="flex justify-between items-center">
                          <div className="text-4xl font-bold text-cyan-400">85%</div>
                          <div className="text-cyan-300/70">Strong Match</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-700/50 p-3 rounded-lg">
                          <div className="text-cyan-300 text-sm mb-1">Keywords Match</div>
                          <div className="text-xl text-cyan-100">92%</div>
                        </div>
                        <div className="bg-slate-700/50 p-3 rounded-lg">
                          <div className="text-cyan-300 text-sm mb-1">Format Score</div>
                          <div className="text-xl text-cyan-100">88%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Optimization Panel */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute left-4 top-[60px] z-40 w-48"
                >
                  <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-cyan-900/30 p-3">
                    <div className="text-cyan-400 text-sm mb-2">Suggestions</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-cyan-300">
                        <span>✓</span> Add more keywords
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300">
                        <span>✓</span> Improve formatting
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300">
                        <span>○</span> Add certifications
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Industry Insights */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute right-8 bottom-[100px] z-40 w-64"
                >
                  <div className="bg-slate-900/95 backdrop-blur-md rounded-lg border border-cyan-500/20 p-3">
                    <div className="text-cyan-400 text-sm mb-2">Industry Insights</div>
                    <div className="space-y-2">
                      <div className="text-cyan-300/70 text-sm">
                        Your profile matches 85% of successful Data Scientist resumes
                      </div>
                      <div className="h-2 rounded-full bg-slate-700/50">
                        <div className="h-full w-[85%] rounded-full bg-cyan-500"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        );
// Add after the 'ats' case in renderContent
        case 'builder':
          return (
            <div className="mt-12 relative">
              <AnimatedBackground type="cubes" />
              <div className="flex flex-col md:flex-row items-center">
                {/* Left content */}
                <div className="md:w-1/2 p-6 relative min-h-[500px]">
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-cyan-100 mb-6">Build Your Resume Using AI</h3>
                    <p className="text-cyan-300 mb-8">
                      Leverage AI-powered tools to create a professional, ATS-friendly resume. 
                      Our smart builder suggests optimal content and formatting based on your 
                      experience and target role.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="flex items-center gap-2 text-cyan-300">
                        <span>🤖</span> AI WRITING
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300">
                        <span>📝</span> SMART FORMAT
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300">
                        <span>🎯</span> TAILORED
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleNavigation(serviceLinks.builder)}
                      className="px-6 py-2 bg-cyan-400 text-slate-900 rounded-lg 
                       font-semibold hover:bg-cyan-300 hover:scale-105 active:scale-95
                       shadow-[0_0_10px_#00ffff] transition-all duration-300"
                    >
                      BUILD NOW
                    </motion.button>
                  </div>
                </div>

                {/* Right side with Resume Builder Interface */}
                <div className="md:w-1/2 relative h-[500px] overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
                  <img
                    src="/assets/images/tools/LeaderBoard.png"
                    alt="Resume Builder Interface"
                    className="w-full h-full object-cover opacity-30"
                  />

                  {/* Main Builder Interface */}
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
                        <span className="text-cyan-300/70 text-sm">Resume Builder</span>
                      </div>
                      <div className="p-4">
                        <div className="bg-slate-800/50 p-3 rounded-lg mb-4">
                          <div className="text-cyan-100 mb-2">Work Experience</div>
                          <div className="space-y-2">
                            <div className="bg-slate-700/50 p-2 rounded">
                              <input 
                                type="text" 
                                placeholder="Company Name"
                                className="w-full bg-transparent text-cyan-300 outline-none"
                              />
                            </div>
                            <div className="bg-slate-700/50 p-2 rounded">
                              <textarea 
                                placeholder="Describe your role and achievements..."
                                className="w-full bg-transparent text-cyan-300 outline-none resize-none"
                                rows={3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* AI Suggestions */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="absolute left-4 top-[60px] z-40 w-48"
                  >
                    <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-cyan-900/30 p-3">
                      <div className="text-cyan-400 text-sm mb-2">AI Suggestions</div>
                      <div className="space-y-2 text-sm">
                        <div className="text-cyan-300">💡 Add quantifiable achievements</div>
                        <div className="text-cyan-300">💡 Use action verbs</div>
                        <div className="text-cyan-300">💡 Include relevant skills</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
            </div>
          </div>
        );

        case 'comparison':
          return (
            <div className="mt-12 relative">
              <AnimatedBackground type="cubes" />
              <div className="flex flex-col md:flex-row items-center">
                {/* Left content */}
                <div className="md:w-1/2 p-6 relative min-h-[500px]">
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-cyan-100 mb-6">JD and Resume Comparison</h3>
                    <p className="text-cyan-300 mb-8">
                      Compare your resume against job descriptions using AI analysis. Get insights 
                      on matching skills, missing keywords, and suggestions for better alignment 
                      with your target role.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="flex items-center gap-2 text-cyan-300">
                        <span>🎯</span> MATCH SCORE
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300">
                        <span>📊</span> GAP ANALYSIS
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300">
                        <span>💡</span> SUGGESTIONS
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleNavigation(serviceLinks.comparison)}
                      className="px-6 py-2 bg-cyan-400 text-slate-900 rounded-lg 
                       font-semibold hover:bg-cyan-300 hover:scale-105 active:scale-95
                       shadow-[0_0_10px_#00ffff] transition-all duration-300"
                    >
                      COMPARE NOW
                    </motion.button>
                  </div>
                </div>

                {/* Right side with Comparison Interface */}
                <div className="md:w-1/2 relative h-[500px] overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
                  <img
                    src="/assets/images/tools/LeaderBoard.png"
                    alt="Resume Comparison Interface"
                    className="w-full h-full object-cover opacity-30"
                  />

                  {/* Main Comparison Interface */}
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
                        <span className="text-cyan-300/70 text-sm">Skills Match Analysis</span>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-slate-800/50 p-3 rounded-lg">
                            <div className="text-cyan-100 mb-2">Required Skills</div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="text-green-400">✓</span>
                                <span className="text-cyan-300">Python</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-green-400">✓</span>
                                <span className="text-cyan-300">SQL</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-red-400">×</span>
                                <span className="text-cyan-300/50">Tableau</span>
                              </div>
                            </div>
                          </div>
                          <div className="bg-slate-800/50 p-3 rounded-lg">
                            <div className="text-cyan-100 mb-2">Match Score</div>
                            <div className="text-4xl font-bold text-cyan-400">78%</div>
                            <div className="text-cyan-300/70 text-sm">Good Match</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Gap Analysis */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="absolute left-4 top-[60px] z-40 w-48"
                  >
                    <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-cyan-900/30 p-3">
                      <div className="text-cyan-400 text-sm mb-2">Missing Skills</div>
                      <div className="space-y-2 text-sm">
                        <div className="text-cyan-300">• Tableau</div>
                        <div className="text-cyan-300">• AWS</div>
                        <div className="text-cyan-300">• Power BI</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Recommendations */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute right-8 bottom-[100px] z-40 w-64"
                  >
                    <div className="bg-slate-900/95 backdrop-blur-md rounded-lg border border-cyan-500/20 p-3">
                      <div className="text-cyan-400 text-sm mb-2">Recommendations</div>
                      <div className="text-cyan-300/70 text-sm">
                        Consider adding certifications in Tableau and AWS to increase your match score.
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          );
    }
  };

  return (
    <section id="ai-services" className="w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-cyan-950">
      <ScrollingText />
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-bright-cyan mb-6 hover:text-cyan-100">
            AI INTEGRATED SERVICES
          </h2>
          <p className="text-2xl text-cyan-100 mb-4">
            STAY SHARP WITH THE LATEST GENAI SERVICES
          </p>
          <p className="text-lg text-cyan-300 max-w-4xl mx-auto">
            The AI Integrated Services section showcases cutting-edge tools designed to simplify 
            and enhance your job search and career development. These services leverage the power 
            of AI to provide actionable insights, optimize resumes, and align candidates with the 
            right opportunities.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <TabButton 
            type="ats" 
            label="ATS RESUME SCORE CHECKING" 
            isActive={activeTab === 'ats'} 
          />
          <TabButton 
            type="builder" 
            label="BUILD YOUR RESUME USING AI" 
            isActive={activeTab === 'builder'} 
          />
          <TabButton 
            type="comparison" 
            label="JD AND RESUME COMPARISON" 
            isActive={activeTab === 'comparison'} 
          />
        </div>

        {renderContent()}
      </div>
    </section>
  );
};

export default AIServices;