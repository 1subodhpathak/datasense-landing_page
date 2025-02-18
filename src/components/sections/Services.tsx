import { BiGame, BiCode, BiQuestionMark } from "react-icons/bi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsFileEarmarkCheck, BsFileEarmarkText } from "react-icons/bs";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import CeoMessage from "./CeoMessage";
import ScrollingText from "./ScrollingText";

interface ServiceItem {
  title: string;
  description: string;
  icon: IconType;
  image: string;
}

const services: ServiceItem[] = [
  {
    title: "Interactive Coding Playground",
    description: "Practice, experiment, and build real-world skills with DataSense's seamless online coderpad. Write, test, and debug directly in your browser — no setup required. Real world schenarios to sharpen your skills",
    icon: BiCode,
    image: "/assets/images/tools/SQL Coding Arena.png",
  },
  {
    title: "Live Quizzes",
    description: "Join real-time quizzes, challenge your knowledge, and compete with peers in an engaging, interactive format",
    icon: BiQuestionMark,
    image: "/assets/gifs/Live Quiz.gif",
  },
  {
    title: "Custom Quiz Creation",
    description: "Design personalized quizzes tailored to your learning needs — perfect for practice, revision, and skill assessment with our 2000+ Questions Library",
    icon: AiOutlineThunderbolt,
    image: "/assets/gifs/Create Quiz.gif",
  },
  {
    title: "Mock Quizzes",
    description: "Simulate real exam conditions with our mock quizzes with time assigments. Test your knowledge, track your progress, and build confidence",
    icon: BiQuestionMark,
    image: "/assets/gifs/Mock Quiz.gif",
  },
  {
    title: "Get JobReady Roadmap",
    description: "The Data Analytics Job Ready Roadmap turns career preparation into an interactive adventure, guiding you step-by-step through the essential skills and concepts needed for a successful data analytics career.",
    icon: BiGame,
    image: "/assets/images/tools/data-analyst.jpg",
  },
  // {
  //   title: "Mini Learning Games",
  //   description: "Fun, bite-sized games to reinforce data concepts",
  //   icon: BiGame,
  //   image: "/assets/gifs/Mini Games.gif",
  // },
  {
    title: "Game of Clash",
    description: "The Game of Clash is an innovative, competitive learning game designed to test and improve your SQL and Python skills through head-to-head challenges with friends and peers.",
    icon: AiOutlineThunderbolt,
    image: "/assets/images/tools/LeaderBoard.png",
  },
  {
    title: "ATS AI Resume Checker",
    description: "AI-powered resume analysis and optimization",
    icon: BsFileEarmarkCheck,
    image: "/assets/gifs/ats.gif",
  },
  {
    title: "JD and Resume Matching",
    description: "Match your resume with job descriptions for better targeting",
    icon: BsFileEarmarkText,
    image: "/assets/gifs/jdd.gif",
  },
];

const SectionHeader: React.FC<{
  title: string;
  subtitle: string;
  description: string;
}> = ({ title, subtitle, description }) => (
  <>
    <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-center text-cyan-100 mb-4"
    >
      {title}
    </motion.h2>
    
    <motion.p 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-2xl text-center text-cyan-300 mb-16 mx-auto"
    >
      {subtitle}
    </motion.p>

    <motion.p 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="text-lg text-center text-cyan-100 mb-16 mx-auto max-w-3xl"
    >
      {description}
    </motion.p>
  </>
);

const Services: React.FC = () => {
  const renderFullWidthCard = (service: ServiceItem, reverse: boolean = false) => {
    const ServiceIcon = service.icon;
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <div className={`group bg-slate-800/30 rounded-xl
          hover:bg-slate-700/40 transition-all duration-500
          border border-cyan-900/20 hover:border-cyan-500/30
          backdrop-blur-sm hover:-translate-y-2
          flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} 
          overflow-hidden relative min-h-[400px]`}>
          
          <div className="p-10 md:w-1/2 flex flex-col justify-center z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ServiceIcon className="text-7xl text-cyan-400 mb-8 
                group-hover:scale-110 group-hover:text-cyan-300 
                transition-all duration-500" />
            </motion.div>

            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-cyan-100 mb-6"
            >
              {service.title}
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-cyan-300 text-xl opacity-90 mb-8 leading-relaxed"
            >
              {service.description}
            </motion.p>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 px-8 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 
                border border-cyan-500/30 hover:border-cyan-500/50
                rounded-lg text-cyan-300 text-lg font-semibold transition-all duration-300
                hover:-translate-y-0.5 w-fit"
            >
              Learn More
            </motion.button>
          </div>

          <div className="md:w-1/2 relative h-64 md:h-auto flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-cyan-500/5 rounded-xl 
              group-hover:bg-cyan-500/10 transition-colors duration-500" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full h-full max-w-[1000px] max-h-[480px] relative mx-auto
                group-hover:scale-105 transition-transform duration-500"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-contain rounded-xl shadow-lg"
              />
            </motion.div>
          </div>

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
            transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 
              via-transparent to-cyan-500/10" />
          </div>
        </div>
      </motion.div>
    );
  };

  const renderGridCard = (service: ServiceItem) => {
    const Icon = service.icon;
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        key={service.title}
        className="group bg-slate-800/30 rounded-xl
          hover:bg-slate-700/40 transition-all duration-300
          border border-cyan-900/20 hover:border-cyan-500/30
          backdrop-blur-sm hover:-translate-y-1
          overflow-hidden flex flex-col"
      >
        <div className="h-40 md:h-48 relative flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full h-full max-w-[400px] max-h-[280px] relative mx-auto"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
        <div className="p-6 mt-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Icon className="text-4xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl font-semibold text-cyan-100 mb-2"
          >
            {service.title}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-cyan-300 text-sm opacity-80 mb-4"
          >
            {service.description}
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-1.5 bg-cyan-500/20 hover:bg-cyan-500/30
              border border-cyan-500/30 hover:border-cyan-500/50
              rounded-lg text-cyan-300 text-sm transition-all duration-300
              hover:-translate-y-0.5"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-cyan-950 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Main Section Header */}
        <SectionHeader 
          title="WHY CHOOSE DATASENSE"
          subtitle="THE SMARTEST PATH TO KICKSTART OR ELEVATE YOUR DATA CAREER"
          description="At DataSense, we equip aspiring and seasoned professionals with practical, in-demand Data & AI skills. Join thousands of learners who've transformed their careers — and this is just the beginning."
        />

        <div className="flex flex-col gap-12">
          {/* SQL Code Arena - Full Width */}
          {renderFullWidthCard(services[0])}

          {/* Quiz Section - 3 cards per row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(1, 4).map(renderGridCard)}
          </div>

          {/* CEO Message */}
          <CeoMessage />
          
          {/* Gaming Section Header */}
          <div className="mt-20">
            <SectionHeader 
              title="DATASENSE GAMING ARENA"
              subtitle="LEARN, PLAY, AND COMPETE IN THE WORLD OF DATA"
              description="The DataSense Gaming Arena transforms learning into an engaging and competitive experience. It features interactive games that challenge your data skills, helping you master SQL, Python, and essential analytics concepts while having fun."
            />
          </div>

          {/* Data Analyst Game - Full Width */}
          {renderFullWidthCard(services[4], true)}

          {/* Games Section - 2 cards per row */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.slice(5, 7).map(renderGridCard)}
          </div> */}

          {/* Game of Clash - Full Width */}
          {renderFullWidthCard(services[5])}

          {/* Scrolling Text */}
          <ScrollingText />

          {/* AI Section Header */}
          <div className="mt-20">
            <SectionHeader 
              title="AI INTEGRATED SERVICES"
              subtitle="STAY SHARP WITH THE LATEST GENAI SERVICES"
              description="The AI Integrated Services section showcases cutting-edge tools designed to simplify and enhance your job search and career development. These services leverage the power of AI to provide actionable insights, optimize resumes, and align candidates with the right opportunities."
            />
          </div>

          {/* Resume Section - 2 cards per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.slice(6).map(renderGridCard)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;