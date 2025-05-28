import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { FaDatabase, FaPython, FaRobot } from 'react-icons/fa';
import { useScrollTop } from '../../hooks/useScrollTop';
import SQLCourse from './SQLCourse';
import PythonCourse from './PythonCourse';
import AIMLCourse from './AIMLCourse';

const courseTypeMap = {
  'sql': 'sql',
  'python': 'python',
  'aiml': 'aiml'
} as const;

const CoursePage = () => {
  useScrollTop();
  const { courseType } = useParams();
  const navigate = useNavigate();

  // Set initial active tab based on URL parameter
  const initialTab = courseType ? courseTypeMap[courseType as keyof typeof courseTypeMap] || 'sql' : 'sql';
  const [activeTab, setActiveTab] = useState<'sql' | 'python' | 'aiml'>(initialTab);

  // Update URL when tab changes
  const handleTabChange = (type: typeof activeTab) => {
    setActiveTab(type);
    navigate(`/courses/${type}`);
  };

  // Update active tab when URL changes
  useEffect(() => {
    if (courseType && courseTypeMap[courseType as keyof typeof courseTypeMap]) {
      setActiveTab(courseTypeMap[courseType as keyof typeof courseTypeMap]);
    }
  }, [courseType]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-950 via-slate-800 to-slate-900 pt-20">
      {/* Hero Section with Course Navigation */}
      <div className="container mx-auto px-4 pt-20 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
            Our Courses
          </span>
        </h1>
        <p className="text-xl text-center text-bubbles opacity-90 max-w-2xl mx-auto mb-12">
          Master the most in-demand skills with our comprehensive courses
        </p>

        {/* Course Type Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { type: 'sql', icon: FaDatabase, label: 'SQL' },
            { type: 'python', icon: FaPython, label: 'Python' },
            { type: 'aiml', icon: FaRobot, label: 'AI & ML' }
          ].map(({ type, icon: Icon, label }) => (
            <motion.button
              key={type}
              onClick={() => handleTabChange(type as typeof activeTab)}
              className={`flex items-center gap-3 px-8 py-4 rounded-lg transition-all duration-300 text-lg
                ${activeTab === type
                  ? 'bg-caribbean text-white transform scale-105'
                  : 'bg-dark-cyan/50 text-light-cyan hover:bg-primary-cyan/20'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-6 h-6" />
              <span>{label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Course Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {activeTab === 'sql' && <SQLCourse />}
        {activeTab === 'python' && <PythonCourse />}
        {activeTab === 'aiml' && <AIMLCourse />}
      </motion.div>
    </div>
  );
};

export default CoursePage;