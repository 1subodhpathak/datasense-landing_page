import CeoMessage from "./CeoMessage";
import AnimatedIcon from "./AnimatedIcon";
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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
  gifSrc?: string;
}

const ServicesMain: React.FC = () => {
  const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, description, isMain = false }) => (
    <>
      {isMain ? (
        <div className="relative mb-8">
          <h1 className="text-5xl font-bold text-center mb-6 group">
            <span className="text-cyan-100 group-hover:text-bright-cyan transition-colors duration-300">
              WHY CHOOSE{" "}
            </span>
            <span className="text-bright-cyan group-hover:text-cyan-100 transition-colors duration-300">
              DATASENSE
            </span>
          </h1>
        </div>

      ) : (
        <h2 
          className="text-4xl font-bold text-center text-cyan-100 mb-4"
        >
          {title}
        </h2>
      )}
      
      <p 
        className={`text-2xl text-center text-cyan-300 mb-4 mx-auto ${isMain ? 'md:text-3xl' : ''}`}
      >
        {subtitle}
      </p>
  
      <p 
        className={`text-lg text-center text-cyan-100 mb-16 mx-auto max-w-3xl ${isMain ? 'md:text-xl' : ''}`}
      >
        {description}
      </p>
    </>
  );

  const serviceLinks = {
    'Learn Data Skills': '#courses',
    'Practice Real Time': '#practice',
    'Play & Compete': '#gaming-arena',
    'AI Integrated Services': '#ai-services',
    'Expert Services': '#expert-services'
  } as const;

  const ServiceCard: React.FC<ServiceCardProps & { index: number }> = ({ 
    title, 
    description, 
    iconType, 
    buttonText = "LEARN MORE",
    gifSrc,
    index
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = () => {
      const targetSection = serviceLinks[title as keyof typeof serviceLinks];
      if (targetSection) {
        navigate(`${location.pathname}${targetSection}`);
        const element = document.querySelector(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    return (
      <div 
        className={`opacity-0 translate-y-12 animate-[fadeIn_0.6s_ease-out_forwards] 
                    [animation-delay:${index * 0.1}s] relative w-full max-w-sm mx-auto`}
      >
        {/* Book Container */}
        <div 
          className="book-container relative h-[400px] w-[300px] mx-auto 
                     transform-gpu preserve-3d flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Book Cover */}
          <div 
            className={`absolute inset-0 bg-gradient-to-r from-cyan-950 to-cyan-800 
                       rounded-xl cursor-pointer border-2 border-cyan-400 
                       flex flex-col items-center justify-center gap-6 p-8
                       origin-left book-cover ${isHovered ? 'book-open' : ''}`}
          >
            {/* GIF/Icon Container */}
            <div className="book-content-front">
              {gifSrc ? (
                <img 
                  src={gifSrc} 
                  alt={title} 
                  className="w-54 h-54 object-contain" 
                />
              ) : (
                <div className="text-cyan-400 scale-150">
                  <AnimatedIcon type={iconType} />
                </div>
              )}

              <h3 className="text-xl font-bold text-cyan-400 text-center 
                           text-shadow-[0_0_4px_#00ffff] tracking-wide mt-4">
                {title}
              </h3>
            </div>
          </div>

          {/* Book Content (Inside Pages) */}
          <div className="absolute inset-0 p-8 pl-16 flex flex-col items-center 
                        justify-between text-center book-content-back">
            <p className="text-cyan-400 text-sm leading-relaxed mt-12">
              {description}
            </p>
            <button
              onClick={handleNavigation}
              className="px-6 py-2 bg-cyan-400 text-slate-900 rounded-lg 
                       font-semibold hover:bg-cyan-300 hover:scale-105 active:scale-95
                       shadow-[0_0_10px_#00ffff] transition-all duration-300"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
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
    </section>
  );
};

export default ServicesMain;