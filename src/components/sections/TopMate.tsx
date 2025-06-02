import React, { useState } from 'react';
import { BsTelephone, BsFileText, BsPeople } from 'react-icons/bs';
import { MdOutlineWork, MdSupport } from 'react-icons/md';
import { motion } from 'framer-motion';

interface TopMateService {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
}

const topMateServices: TopMateService[] = [
  {
    title: '1:1 Calls',
    description: 'Personal mentoring sessions for focused guidance',
    icon: BsTelephone,
    link: 'https://topmate.io/datasense/1380078?utm_source=public_profile&utm_campaign=datasense'
  },
  {
    title: 'Resume Preparation Support',
    description: 'Expert help in crafting ATS-friendly resumes',
    icon: BsFileText,
    link: 'https://topmate.io/datasense/1403753?utm_source=public_profile&utm_campaign=datasense'
  },
  {
    title: 'Mock Interviews',
    description: 'Practice interviews with industry scenarios',
    icon: BsPeople,
    link: 'https://topmate.io/datasense/1380075?utm_source=public_profile&utm_campaign=datasense'
  },
  {
    title: 'Interview Support',
    description: 'Comprehensive interview preparation and guidance',
    icon: MdSupport,
    link: 'https://topmate.io/datasense/1380074?utm_source=public_profile&utm_campaign=datasense'
  },
  {
    title: 'Career Guidance',
    description: 'Strategic career planning and development',
    icon: MdOutlineWork,
    link: 'https://topmate.io/datasense/1380077?utm_source=public_profile&utm_campaign=datasense'
  }
];

const TopMate: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="expert-services" className="py-20 bg-gradient-to-b from-cyan-950 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-bright-cyan mb-6 hover:text-cyan-100">
            EXPERT SERVICES
          </h2>
          <p className="text-2xl text-cyan-100 mb-4">
            ACCELERATE YOUR CAREER WITH PERSONALIZED GUIDANCE
          </p>
          <p className="text-lg text-cyan-300 max-w-4xl mx-auto">
            Personalized support to accelerate your data analytics career journey with Expert Mentors and Career Coaches.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* First Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topMateServices.slice(0, 2).map((service, index) => (
              <a 
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full cursor-pointer"
                key={service.title}
              >
                <motion.div
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
                      backdrop-blur-sm cursor-pointer
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

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: activeCard === index ? 1 : 0
                      }}
                      className="absolute bottom-4 right-4 text-cyan-400"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M14 5l7 7m0 0l-7 7m7-7H3" 
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </a>
            ))}
          </div>

          {/* Second Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topMateServices.slice(2).map((service, index) => (
              <a 
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full cursor-pointer"
                key={service.title}
              >
                <motion.div
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
                      backdrop-blur-sm cursor-pointer
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

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: activeCard === index + 2 ? 1 : 0
                      }}
                      className="absolute bottom-4 right-4 text-cyan-400"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M14 5l7 7m0 0l-7 7m7-7H3" 
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopMate;