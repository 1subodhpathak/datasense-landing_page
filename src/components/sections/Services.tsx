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
  working_link?: string;
  features?: string[];
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
    working_link: "https://practice.datasenseai.com/live-events" 
  },
  {
    title: "Custom Quiz Creation",
    description: "Design personalized quizzes tailored to your learning needs — perfect for practice, revision, and skill assessment with our 2000+ Questions Library",
    icon: AiOutlineThunderbolt,
    image: "/assets/gifs/Create Quiz.gif",
    working_link: "https://assessment.datasenseai.com/" 
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
    title: "AI Resume ATS Score Checking",
    description: " The AI Resume ATS Score Checking tool evaluates resumes against the latest applicant tracking system (ATS) algorithms to maximize visibility during job applications.",
    icon: BsFileEarmarkCheck,
    image: "/assets/gifs/ats.gif",
    features: [
      "ATS SCORE",
      "OPTIMIZATION SUGGESTIONS",
      "INDUSTRY-SPECIFIC INSIGHTS",
      "USER-FRIENDLY INTERFACE"
    ]
  },
  {
    title: "JD and Resume Comparison",
    description: " The JD and Resume Comparison feature helps candidates identify how well their resume aligns with specific job descriptions and makes a more informed hiring decision.",
    icon: BsFileEarmarkText,
    image: "/assets/gifs/jdd.gif",
    features: [
      "MATCH ANALYSIS",
      "GAP IDENTIFICATION",
      "SUCCESS PROBABILITY",
      "CAREER RECOMMENDATIONS"
    ]
  },
];

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  isMain?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, description, isMain = false }) => (
  <>
    {isMain ? (
      // Enhanced main heading with new styling
      <div className="relative mb-8">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
          <span className="text-cyan-100">WHY CHOOSE </span>
          <span className="text-bright-cyan">DATASENSE</span>
        </h1>
      </div>
    ) : (
      // Regular section heading (unchanged)
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
              onClick={() => {
                if (service.title === "Get JobReady Roadmap") {
                  window.open("/unity-games/index.html", "_blank");
                } else if (service.title === "Game of Clash") {
                  window.open("https://battleground.datasenseai.com/game-modes", "_blank");
                }
              }}
            >
              {service.title === "Get JobReady Roadmap" ? "Play Now" : 
               service.title === "Game of Clash" ? "Challenge Now" : 
               "Learn More"}
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

  // Modify the renderGridCard function to handle the new button behavior
  const renderGridCard = (service: ServiceItem) => {
    const Icon = service.icon;

    const getButtonText = (title: string) => {
      switch (title) {
        case "Live Quizzes":
          return "Join Live Quizzes";
        case "Custom Quiz Creation":
          return "Custom Test";
        case "Get JobReady Roadmap":
          return "Play Now";
        case "Game of Clash":
          return "Challenge Now";
        default:
          return "Learn More";
      }
    };

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
            onClick={() => {
              if (service.working_link) {
                window.open(service.working_link, "_blank");
              } else if (service.title === "Get JobReady Roadmap") {
                window.open("/unity-games/index.html", "_blank");
              } else if (service.title === "Game of Clash") {
                window.open("https://battleground.datasenseai.com/game-modes", "_blank");
              }
            }}
          >
            {getButtonText(service.title)}
          </motion.button>
        </div>
      </motion.div>
    );
  };

  const renderAIServiceCard = (service: ServiceItem) => {
    const ServiceIcon = service.icon;
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        key={service.title}
        className="group bg-slate-800/30 rounded-xl
          hover:bg-slate-700/40 transition-all duration-500
          border border-cyan-900/20 hover:border-cyan-500/30
          backdrop-blur-sm hover:-translate-y-2
          overflow-hidden flex flex-col min-h-[600px]"
      >
        <div className="h-64 md:h-72 relative flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent 
            group-hover:from-cyan-500/10 transition-all duration-500"/>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full h-full max-w-[500px] max-h-[400px] relative mx-auto"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-contain rounded-lg
                group-hover:scale-105 transition-transform duration-500
                drop-shadow-[0_0_15px_rgba(34,211,238,0.1)]"
            />
          </motion.div>
        </div>
        
        <div className="p-8 flex-grow bg-gradient-to-t from-slate-900/50 to-transparent">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 mb-4"
          >
            <ServiceIcon className="text-5xl text-cyan-400 
              group-hover:scale-110 group-hover:text-cyan-300 
              transition-all duration-500" />
            <h3 className="text-2xl font-bold text-cyan-100">{service.title}</h3>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-cyan-300 text-lg opacity-90 mb-6 leading-relaxed"
          >
            {service.description}
          </motion.p>

          {/* Features Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 gap-3 mb-6"
          >
            {service.features?.map((feature, index) => (
              <div
                key={index}
                className="bg-cyan-500/10 border border-cyan-500/20 
                  rounded-lg px-3 py-2 text-cyan-300 text-sm
                  hover:bg-cyan-500/20 hover:border-cyan-500/30 
                  transition-all duration-300 text-center
                  flex items-center justify-center"
              >
                {feature}
              </div>
            ))}
          </motion.div>

          <motion.button 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-cyan-500/20 hover:bg-cyan-500/30
              border border-cyan-500/30 hover:border-cyan-500/50
              rounded-lg text-cyan-300 text-lg font-medium
              transition-all duration-300 hover:-translate-y-0.5
              hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-cyan-950">
      <div className="container mx-auto py-12">
        {/* Main Section Header */}
        <SectionHeader 
          title="WHY CHOOSE DATASENSE"
          subtitle="The Smartest Path to Kickstart or Elevate Your Data Career"
          description="At DataSense, we equip aspiring and seasoned professionals with practical, in-demand Data & AI skills. Join thousands of learners who've transformed their careers — and this is just the beginning."
          isMain={true}
        />
  
        <div className="flex flex-col gap-12">
          {/* SQL Code Arena - Full Width */}
          <div className="px-4">
            {renderFullWidthCard(services[0])}
          </div>
  
          {/* Quiz Section - 3 cards per row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {services.slice(1, 4).map(renderGridCard)}
          </div>
        </div>
      </div>
      
      {/* CEO Message - MOVED OUTSIDE THE CONTAINER */}
      <CeoMessage />
      
      <div className="container mx-auto py-12">
        <div className="flex flex-col gap-12">
          {/* Gaming Section Header */}
          <div className="mt-0">
            <SectionHeader 
              title="DataSense Gaming Arena"
              subtitle="Learn, Play, and Compete in the World of Data"
              description="The DataSense Gaming Arena transforms learning into an engaging and competitive experience. It features interactive games that challenge your data skills, helping you master SQL, Python, and essential analytics concepts while having fun."
            />
          </div>
  
          <div className="px-4">
            {/* Data Analyst Game - Full Width */}
            {renderFullWidthCard(services[5], true)}
  
            {/* Game of Clash - Full Width */}
            {renderFullWidthCard(services[4])}
          </div>
        </div>
      </div>
      
      {/* Scrolling Text - MOVED OUTSIDE THE CONTAINER */}
      <ScrollingText />
      
      <div className="container mx-auto py-12">
        <div className="flex flex-col gap-12">
          {/* AI Section Header */}
          <div className="mt-5">
            <SectionHeader 
              title="AI INTEGRATED SERVICES"
              subtitle="Stay Sharp with the Latest GenAI Services"
              description="The AI Integrated Services section showcases cutting-edge tools designed to simplify and enhance your job search and career development. These services leverage the power of AI to provide actionable insights, optimize resumes, and align candidates with the right opportunities."
            />
          </div>
  
          {/* AI Services Section - 2 cards per row with new rendering */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {services.slice(6).map(renderAIServiceCard)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;