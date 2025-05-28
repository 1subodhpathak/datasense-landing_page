import { motion } from "framer-motion";
import CeoMessage from "./CeoMessage";
import AnimatedIcon from "./AnimatedIcon";
import ScrollingText from './ScrollingText';
import { useState } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  isMain?: boolean;
}

const serviceLinks = {
  'Learn Data Skills': '#courses',
  'Practice Real Time': '#practice',
  'Play & Compete': '#gaming-arena',
  'AI Integrated Services': '#ai-services',
  'Expert Services': '#expert-services'
} as const;

interface ServiceCardProps {
  title: string;
  description: string;
  iconType: 'learn' | 'practice' | 'compete' | 'ai' | 'expert';
  buttonText?: string;
  gifSrc?: string;
}

const ServicesMain: React.FC = () => {
  const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, description, isMain = false }) => (
    <>
      {isMain ? (
        <div className="relative mb-8">
          <h1 className="text-5xl font-bold text-center mb-6">
            <span className="text-cyan-100">WHY CHOOSE </span>
            <span className="text-bright-cyan">DATASENSE</span>
          </h1>
        </div>
      ) : (
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-cyan-100 mb-4"
        >
          {title}
        </motion.h2>
      )}
      
      <motion.p 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`text-2xl text-center text-cyan-300 mb-4 mx-auto ${isMain ? 'md:text-3xl' : ''}`}
      >
        {subtitle}
      </motion.p>
  
      <motion.p 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className={`text-lg text-center text-cyan-100 mb-16 mx-auto max-w-3xl ${isMain ? 'md:text-xl' : ''}`}
      >
        {description}
      </motion.p>
    </>
  );

  const ServiceCard: React.FC<ServiceCardProps & { index: number }> = ({ 
    title, 
    description, 
    iconType, 
    buttonText = "LEARN MORE",
    gifSrc,
    index
  }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleNavigation = () => {
      const targetSection = serviceLinks[title as keyof typeof serviceLinks];
      if (targetSection) {
        const element = document.querySelector(targetSection);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="relative w-full max-w-sm mx-auto group"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Subtle Highlight Effect */}
        <motion.div
          className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100"
          animate={{
            boxShadow: isHovered 
              ? '0 0 25px 2px rgba(0, 245, 255, 0.2)' 
              : '0 0 0 0 rgba(0, 245, 255, 0)',
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Main Card Container */}
        <motion.div
          className="relative h-[520px] bg-slate-900/95 backdrop-blur-xl rounded-3xl 
                     border border-slate-700/50 overflow-hidden cursor-pointer"
          animate={{
            y: isHovered ? -8 : 0,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Neural Network Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="neural-bg w-full h-full"></div>
          </div>

          {/* Animated Grid Overlay */}
          <div className="absolute inset-0 grid-pattern opacity-20"></div>

          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-col p-8">
            {/* Icon Section */}
            <motion.div 
              className="mb-8 flex justify-center"
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                y: isHovered ? -5 : 0,
              }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative">
                {/* Icon/GIF Container with Glow */}
                <div className="relative">
                  {gifSrc ? (
                    <div className="relative">
                      <motion.div
                        className="absolute -inset-4 rounded-xl opacity-50 blur-xl"
                        animate={{
                          backgroundColor: isHovered ? 'rgba(0, 245, 255, 0.2)' : 'rgba(0, 245, 255, 0)',
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <img src={gifSrc} alt={title} className="w-48 h-48 object-cover rounded-lg relative z-10" />
                    </div>
                  ) : (
                    <div className="text-cyan-400 scale-125 relative">
                      <motion.div
                        className="absolute -inset-4 rounded-xl opacity-50 blur-xl"
                        animate={{
                          backgroundColor: isHovered ? 'rgba(0, 245, 255, 0.2)' : 'rgba(0, 245, 255, 0)',
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="relative z-10">
                        <AnimatedIcon type={iconType} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h3 
              className="text-2xl font-bold text-white text-center mb-4 tracking-wide"
              animate={{ 
                scale: isHovered ? 1.05 : 1,
                color: isHovered ? "#00f5ff" : "#ffffff"
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>

            {/* Description */}
            <motion.p 
              className="text-slate-300 text-center mb-8 leading-relaxed flex-grow 
                         text-sm font-medium"
              animate={{ 
                opacity: isHovered ? 1 : 0.8,
                y: isHovered ? -2 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.p>

            {/* Button */}
            <motion.button
              onClick={handleNavigation}
              className="relative w-full py-3 rounded-xl font-bold text-sm tracking-wider
                         bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600/50
                         text-white overflow-hidden group/btn shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"
                initial={{ x: '-100%', opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Button Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-transparent"
                style={{
                  background: 'linear-gradient(90deg, transparent, #00f5ff, transparent) border-box',
                  WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'source-out',
                }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              
              <span className="relative z-10 flex items-center justify-center gap-2">
                {buttonText}
                <motion.span
                  animate={{ x: isHovered ? 4 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </div>

          {/* Corner Accents with Animation */}
          <motion.div
            className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50 rounded-tl-lg"
            animate={{
              opacity: isHovered ? 1 : 0.5,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50 rounded-br-lg"
            animate={{
              opacity: isHovered ? 1 : 0.5,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-cyan-950 via-slate-800 to-slate-900">
      <div className="container mx-auto py-12 px-6">
        <SectionHeader
          title="WHY CHOOSE DATASENSE"
          subtitle="The Smartest Path to Kickstart or Elevate Your Data Career"
          description="At DataSense, we equip aspiring and seasoned professionals with practical, in-demand Data & AI skills. Join thousands of learners who've transformed their careers — and this is just the beginning."
          isMain={true}
        />
        
        <div className="grid grid-cols-1 gap-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 lg:px-8">
            <ServiceCard
              index={0}
              title="Learn Data Skills"
              description="Build job-ready skills with award-winning courses and personalized, goal-oriented learning plans"
              iconType="learn"
              gifSrc="/assets/gifs/1.gif" 
            />
            <ServiceCard
              index={1}
              title="Practice Real Time"
              description="Practice on our Interactive Coderpad, Go through everyday challenges, Create YOUR Own Quiz, Mock Quiz"
              iconType="practice"
              gifSrc="/assets/gifs/17.gif"
            />
            <ServiceCard
              index={2}
              title="Play & Compete"
              description="Play and compete with your friends and colleges using our own Datasense Gaming Arena"
              iconType="compete"
              gifSrc="/assets/gifs/18.gif"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto lg:px-8">
            <ServiceCard
              index={3}
              title="AI Integrated Services"
              description="Build job-ready skills with award-winning courses and personalized, goal-oriented learning plans"
              iconType="ai"
              gifSrc="/assets/gifs/20.gif"
            />
            <ServiceCard
              index={4}
              title="Expert Services"
              description="Build job-ready skills with award-winning courses and personalized, goal-oriented learning plans"
              iconType="expert"
              gifSrc="/assets/gifs/23.gif"
            />
          </div>
        </div>
      </div>
      <CeoMessage />
      <ScrollingText />
    </section>
  );
};

export default ServicesMain;