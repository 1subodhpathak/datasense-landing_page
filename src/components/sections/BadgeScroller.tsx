import React from 'react';

const courses = [
  {
    title: "Advanced Excel Analytics",
    description: "Master enterprise-level spreadsheet automation, advanced formulas, and business intelligence workflows for data-driven decision making.",
    icon: "📊",
    techStack: ["VBA", "Power Query", "Pivot Tables"],
    level: "Professional",
    duration: "12 Hours",
    projects: "8 Real-world Cases",
    specialFeature: "Financial Modeling & Automation"
  },
  {
    title: "Power BI Intelligence",
    description: "Build interactive dashboards and real-time analytics solutions. Master DAX, data modeling, and enterprise reporting systems.",
    icon: "🖥️",
    techStack: ["DAX", "Power Query", "M Language"],
    level: "Advanced",
    duration: "15 Hours",
    projects: "10 Dashboard Projects",
    specialFeature: "Real-time Business Intelligence"
  },
  {
    title: "Tableau Visualization",
    description: "Create compelling data stories with advanced visualizations. Master calculated fields, parameters, and enterprise deployment strategies.",
    icon: "📈",
    techStack: ["Tableau Prep", "LOD Expressions", "APIs"],
    level: "Expert",
    duration: "14 Hours",
    projects: "12 Visualization Studies",
    specialFeature: "Executive Storytelling with Data"
  },
  {
    title: "SQL Database Mastery",
    description: "Advanced database querying, optimization, and analytics. Master complex joins, window functions, and performance tuning techniques.",
    icon: "🗄️",
    techStack: ["PostgreSQL", "MySQL", "T-SQL"],
    level: "Professional",
    duration: "18 Hours",
    projects: "2000+ Practice Queries",
    specialFeature: "Database Architecture & Optimization"
  },
  {
    title: "Python Data Science",
    description: "Complete data science pipeline from analysis to deployment. Master pandas, NumPy, machine learning, and API development.",
    icon: "🐍",
    techStack: ["Pandas", "NumPy", "Scikit-learn"],
    level: "Advanced",
    duration: "25 Hours",
    projects: "15 End-to-end Projects",
    specialFeature: "Production ML Pipelines"
  },
  {
    title: "AI/ML Engineering",
    description: "Build production-ready AI systems. Master deep learning, neural networks, MLOps, and scalable machine learning architectures.",
    icon: "🤖",
    techStack: ["TensorFlow", "PyTorch", "MLOps"],
    level: "Expert",
    duration: "30 Hours",
    projects: "20 AI Applications",
    specialFeature: "Enterprise AI Deployment"
  }
];

const AIParticleBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating AI Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
      
      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1={`${i * 12.5}%`}
            y1="0%"
            x2={`${(i + 1) * 12.5}%`}
            y2="100%"
            stroke="url(#neuralGradient)"
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>
    </div>
  );
};

const CourseCard: React.FC<{ course: typeof courses[0]; index: number }> = ({ course }) => {
  return (
    <div className="shrink-0 w-96 relative group">
      {/* Holographic Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-60 group-hover:opacity-100"></div>
      
      {/* Main Card */}
      <div className="relative backdrop-blur-md bg-slate-900/80 border border-cyan-400/30 rounded-2xl overflow-hidden hover:border-cyan-400/60 transition-all duration-500 hover:transform hover:scale-105 min-h-[450px] flex flex-col">
        
        {/* Status Indicator */}
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-green-400 font-mono">ACTIVE</span>
        </div>
        
        {/* Header Section */}
        <div className="relative p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
          <div className="flex items-center justify-between mb-4">
            <div className="relative">
              {/* Icon Container with Hexagonal Border */}
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64">
                  <polygon 
                    points="32,2 58,17 58,47 32,62 6,47 6,17" 
                    fill="none" 
                    stroke="#06b6d4" 
                    strokeWidth="2"
                    className="animate-pulse"
                  />
                </svg>
                <span className="text-3xl z-10 filter drop-shadow-lg">{course.icon}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full font-mono mb-2">
                {course.level}
              </div>
              <div className="text-xs text-cyan-300/80 font-mono">{course.duration}</div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3 font-mono tracking-wide">
            {course.title}
          </h3>
        </div>
        
        {/* Content Section */}
        <div className="flex-1 p-6 flex flex-col">
          <p className="text-cyan-100/90 text-sm leading-relaxed mb-6 flex-1">
            {course.description}
          </p>
          
          {/* Tech Stack */}
          <div className="mb-6">
            <div className="text-xs text-cyan-400 font-mono mb-2 uppercase tracking-wider">Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              {course.techStack.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="text-xs bg-slate-800/60 text-cyan-300 px-3 py-1 rounded-full border border-cyan-400/20 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Special Feature */}
          <div className="mb-6">
            <div className="text-xs text-purple-400 font-mono mb-2 uppercase tracking-wider">Special Feature</div>
            <div className="text-sm text-purple-300/90 font-medium">
              {course.specialFeature}
            </div>
          </div>
          
          {/* Footer Stats */}
          <div className="border-t border-cyan-400/20 pt-4 mt-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-cyan-400/20 rounded flex items-center justify-center">
                    <svg width="12" height="12" fill="#06b6d4" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-cyan-300/80 font-mono">{course.projects}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-purple-400/20 rounded flex items-center justify-center">
                    <svg width="12" height="12" fill="#a855f7" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-purple-300/80 font-mono">Live Projects</span>
                </div>
              </div>
              
              {/* Neural Network Mini Indicator */}
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1 h-4 bg-gradient-to-t from-cyan-400/40 to-cyan-400 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Scanning Line Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-scan-line"></div>
        </div>
      </div>
    </div>
  );
};

const AIBadgeScroller: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 py-20 relative">
      {/* AI Background */}
      <AIParticleBackground />
      
      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center space-x-3 mb-4">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-mono tracking-wider">
            AI.LEARNING.MODULES
          </h2>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-4"></div>
        <p className="text-cyan-300/80 text-lg font-mono max-w-2xl mx-auto">
          Advanced training programs designed for data professionals seeking mastery in AI-driven analytics
        </p>
      </div>
      
      {/* Infinite Scroller */}
      <div className="relative flex">
        {/* First set of courses */}
        <div className="flex animate-scroll-infinite gap-8 py-4 pr-8">
          {courses.map((course, index) => (
            <CourseCard key={`course-1-${index}`} course={course} index={index} />
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex animate-scroll-infinite gap-8 py-4 pr-8">
          {courses.map((course, index) => (
            <CourseCard key={`course-2-${index}`} course={course} index={index} />
          ))}
        </div>
      </div>
      
      {/* Bottom Neural Network Status */}
      <div className="text-center mt-16 relative z-10">
        <div className="inline-flex items-center space-x-6 text-cyan-400/60 font-mono text-sm">
          <span className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>AI Training: ACTIVE</span>
          </span>
          <span className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span>Neural Processing: OPTIMIZED</span>
          </span>
          <span className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span>Learning Mode: ENHANCED</span>
          </span>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      {/* <style jsx>{`
        @keyframes scroll-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes scan-line {
          0% { top: -2px; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        
        .animate-scroll-infinite {
          animation: scroll-infinite 30s linear infinite;
        }
        
        .animate-scan-line {
          animation: scan-line 3s ease-in-out infinite;
        }
      `}</style> */}
    </div>
  );
};

export default AIBadgeScroller;