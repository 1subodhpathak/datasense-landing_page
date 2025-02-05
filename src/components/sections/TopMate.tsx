import React, { useState } from 'react';
import { BsTelephone, BsFileText, BsPeople } from 'react-icons/bs';
import { MdOutlineWork, MdSupport } from 'react-icons/md';
import { motion } from 'framer-motion';

interface TopMateService {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const topMateServices: TopMateService[] = [
  {
    title: '1:1 Calls',
    description: 'Personal mentoring sessions for focused guidance',
    icon: BsTelephone
  },
  {
    title: 'Resume Preparation Support',
    description: 'Expert help in crafting ATS-friendly resumes',
    icon: BsFileText
  },
  {
    title: 'Mock Interviews',
    description: 'Practice interviews with industry scenarios',
    icon: BsPeople
  },
  {
    title: 'Interview Support',
    description: 'Comprehensive interview preparation and guidance',
    icon: MdSupport
  },
  {
    title: 'Career Guidance',
    description: 'Strategic career planning and development',
    icon: MdOutlineWork
  }
];

const TopMate: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-cyan-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-cyan-100 mb-4">
          TopMate Services
        </h2>
        <p className="text-center text-cyan-300 mb-16 max-w-2xl mx-auto">
          Personalized support to accelerate your data analytics career journey
        </p>

        <div className="space-y-8">
          {/* First Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topMateServices.slice(0, 2).map((service, index) => (
              <motion.div
                key={service.title}
                className="relative h-full"
                onHoverStart={() => setActiveCard(index)}
                onHoverEnd={() => setActiveCard(null)}
              >
                <motion.div
                  initial={{ opacity: 0.7, scale: 0.95 }}
                  animate={{ 
                    opacity: activeCard === null || activeCard === index ? 1 : 0.7,
                    scale: activeCard === index ? 1.05 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className={`group p-10 h-full bg-slate-800/30 rounded-xl
                    hover:bg-slate-700/40 transition-all duration-300
                    border border-cyan-900/20 hover:border-cyan-500/30
                    backdrop-blur-sm 
                    relative overflow-hidden
                    ${activeCard === index ? 'ring-2 ring-cyan-400' : ''}`}
                >
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ 
                      width: activeCard === index ? '100%' : '0%'
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-cyan-500/10 z-0"
                  ></motion.div>

                  <div className="relative z-10 flex items-center mb-6">
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ 
                        rotate: activeCard === index ? 360 : 0,
                        scale: activeCard === index ? 1.2 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon 
                        className="text-4xl text-cyan-400 
                        group-hover:scale-110 transition-transform"
                      />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-cyan-100 ml-6">
                      {service.title}
                    </h3>
                  </div>
                  
                  <motion.p
                    initial={{ opacity: 0.7 }}
                    animate={{ 
                      opacity: activeCard === index ? 1 : 0.7,
                      y: activeCard === index ? -10 : 0
                    }}
                    className="text-cyan-300 text-base opacity-80 ml-16"
                  >
                    {service.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topMateServices.slice(2).map((service, index) => (
              <motion.div
                key={service.title}
                className="relative h-full"
                onHoverStart={() => setActiveCard(index + 2)}
                onHoverEnd={() => setActiveCard(null)}
              >
                <motion.div
                  initial={{ opacity: 0.7, scale: 0.95 }}
                  animate={{ 
                    opacity: activeCard === null || activeCard === index + 2 ? 1 : 0.7,
                    scale: activeCard === index + 2 ? 1.05 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className={`group p-8 h-full bg-slate-800/30 rounded-xl
                    hover:bg-slate-700/40 transition-all duration-300
                    border border-cyan-900/20 hover:border-cyan-500/30
                    backdrop-blur-sm 
                    relative overflow-hidden
                    ${activeCard === index + 2 ? 'ring-2 ring-cyan-400' : ''}`}
                >
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ 
                      width: activeCard === index + 2 ? '100%' : '0%'
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-cyan-500/10 z-0"
                  ></motion.div>

                  <div className="relative z-10 flex items-center mb-4">
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ 
                        rotate: activeCard === index + 2 ? 360 : 0,
                        scale: activeCard === index + 2 ? 1.2 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon 
                        className="text-3xl text-cyan-400 
                        group-hover:scale-110 transition-transform"
                      />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-cyan-100 ml-4">
                      {service.title}
                    </h3>
                  </div>
                  
                  <motion.p
                    initial={{ opacity: 0.7 }}
                    animate={{ 
                      opacity: activeCard === index + 2 ? 1 : 0.7,
                      y: activeCard === index + 2 ? -10 : 0
                    }}
                    className="text-cyan-300 text-sm opacity-80 ml-10"
                  >
                    {service.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopMate;