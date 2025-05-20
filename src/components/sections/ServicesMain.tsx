import { motion } from "framer-motion";
import CeoMessage from "./CeoMessage";
import AnimatedIcon from "./AnimatedIcon";
import ScrollingText from './ScrollingText';


interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  isMain?: boolean;
}

interface ServiceCardProps {
  title: string;
  description: string;
  iconType: 'learn' | 'practice' | 'compete' | 'ai' | 'expert';
  buttonText?: string;
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

  const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, iconType, buttonText = "LEARN MORE" }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-5 rounded-xl bg-gradient-to-b from-cyan-900/40 to-slate-900/40 backdrop-blur-sm border border-cyan-800/30 hover:border-cyan-600/50 transition-all duration-300 max-w-xs mx-auto w-full"
    >
      <div className="mb-4">
        <AnimatedIcon type={iconType} />
      </div>
      <h3 className="text-xl font-bold text-cyan-100 mb-3 text-center">{title}</h3>
      <p className="text-sm text-cyan-200 text-center mb-4">{description}</p>
      <button className="px-4 py-1.5 bg-bright-cyan text-slate-900 font-semibold rounded-full hover:bg-cyan-300 transition-colors duration-300 text-sm">
        {buttonText}
      </button>
    </motion.div>
  );

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
              title="Learn Data Skills"
              description="Build job-ready skills with award-winning courses and personalized, goal-oriented learning plans"
              iconType="learn"
            />
            <ServiceCard
              title="Practice Real Time"
              description="Practice on our Interactive Coderpad, Go through everyday challenges, Create YOUR Own Quiz, Mock Quiz"
              iconType="practice"
            />
            <ServiceCard
              title="Play & Compete"
              description="Play and compete with your friends and colleges using our own Datasense Gaming Arena"
              iconType="compete"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto lg:px-8">
            <ServiceCard
              title="AI Integrated Services"
              description="Build job-ready skills with award-winning courses and personalized, goal-oriented learning plans"
              iconType="ai"
            />
            <ServiceCard
              title="Expert Services"
              description="Build job-ready skills with award-winning courses and personalized, goal-oriented learning plans"
              iconType="expert"
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