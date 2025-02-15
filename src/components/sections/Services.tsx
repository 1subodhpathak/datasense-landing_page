import { BiGame, BiCode, BiQuestionMark } from "react-icons/bi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsFileEarmarkCheck, BsFileEarmarkText } from "react-icons/bs";
import { IconType } from "react-icons";

interface ServiceItem {
  title: string;
  description: string;
  icon: IconType;
  image: string;
}

const services: ServiceItem[] = [
  {
    title: "SQL Code Arena",
    description: "Practice SQL with real-world scenarios and challenges",
    icon: BiCode,
    image: "/assets/gifs/sql.gif", 
  },
  {
    title: "Live Quizzes",
    description: "Interactive quizzes to test your knowledge in real-time",
    icon: BiQuestionMark,
    image: "/assets/gifs/live-quiz.gif", 
  },
  {
    title: "Custom Quiz Section",
    description: "1000+ Questions covering all aspects of data analysis",
    icon: AiOutlineThunderbolt,
    image: "/assets/gifs/custom-quiz.gif", 
  },
  {
    title: "Mock Quiz",
    description: "Simulate real interview scenarios with timed assessments",
    icon: BiQuestionMark,
    image: "/assets/gifs/mock.gif", 
  },
  {
    title: "Data Analyst Job Ready Game",
    description: "Gamified learning path to become job-ready",
    icon: BiGame,
    image: "/assets/gifs/data-analyst.gif", 
  },
  {
    title: "Mini Learning Games",
    description: "Fun, bite-sized games to reinforce data concepts",
    icon: BiGame,
    image: "/assets/gifs/mini.gif", 
  },
  {
    title: "SQL Game of Clash",
    description: "Compete with peers in SQL challenges",
    icon: AiOutlineThunderbolt,
    image: "/assets/gifs/game.gif", 
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

const Services: React.FC = () => {
  // Helper function to render full width card
  const renderFullWidthCard = (service: ServiceItem, reverse: boolean = false) => {
    const ServiceIcon = service.icon;
    return (
      <div className="w-full">
        <div className={`group bg-slate-800/30 rounded-xl
          hover:bg-slate-700/40 transition-all duration-300
          border border-cyan-900/20 hover:border-cyan-500/30
          backdrop-blur-sm hover:-translate-y-1
          flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} overflow-hidden`}>
          <div className="p-8 md:w-1/2">
            <ServiceIcon className="text-6xl text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-semibold text-cyan-100 mb-4">
              {service.title}
            </h3>
            <p className="text-cyan-300 text-lg opacity-80">
              {service.description}
            </p>
            <button className="mt-6 px-6 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 
              border border-cyan-500/30 hover:border-cyan-500/50
              rounded-lg text-cyan-300 transition-all duration-300
              hover:-translate-y-0.5">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2 relative h-40 md:h-72 flex items-center justify-center p-4">
            <div className="w-full h-full max-w-[400px] max-h-[260px] relative mx-auto">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-cyan-950 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-100 mb-4">
          Your Roadmap to Data Mastery
        </h2>
        <p className="text-center text-cyan-300 mb-16 max-w-2xl mx-auto">
          Comprehensive tools and resources to accelerate your data analytics career
        </p>

        <div className="flex flex-col gap-8">
          {/* SQL Code Arena - Full Width */}
          {renderFullWidthCard(services[0])}

          {/* Quiz Section - 3 cards per row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(1, 4).map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-slate-800/30 rounded-xl
                    hover:bg-slate-700/40 transition-all duration-300
                    border border-cyan-900/20 hover:border-cyan-500/30
                    backdrop-blur-sm hover:-translate-y-1
                    overflow-hidden"
                >
                  {/* Regular card content */}
                  <div className="p-6">
                    <Icon className="text-4xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-cyan-100 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-cyan-300 text-sm opacity-80 mb-4">
                      {service.description}
                    </p>
                    <button className="px-4 py-1.5 bg-cyan-500/20 hover:bg-cyan-500/30
                      border border-cyan-500/30 hover:border-cyan-500/50
                      rounded-lg text-cyan-300 text-sm transition-all duration-300
                      hover:-translate-y-0.5">
                      Learn More
                    </button>
                  </div>
                  <div className="h-40 md:h-48 relative flex items-center justify-center p-4">
                    <div className="w-full h-full max-w-[240px] max-h-[180px] relative mx-auto">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Games Section - 2 cards per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.slice(4, 6).map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-slate-800/30 rounded-xl
                    hover:bg-slate-700/40 transition-all duration-300
                    border border-cyan-900/20 hover:border-cyan-500/30
                    backdrop-blur-sm hover:-translate-y-1
                    overflow-hidden"
                >
                  {/* Regular card content */}
                  <div className="p-6">
                    <Icon className="text-4xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-cyan-100 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-cyan-300 text-sm opacity-80 mb-4">
                      {service.description}
                    </p>
                    <button className="px-4 py-1.5 bg-cyan-500/20 hover:bg-cyan-500/30
                      border border-cyan-500/30 hover:border-cyan-500/50
                      rounded-lg text-cyan-300 text-sm transition-all duration-300
                      hover:-translate-y-0.5">
                      Learn More
                    </button>
                  </div>
                  <div className="h-40 md:h-56 relative flex items-center justify-center p-4">
                    <div className="w-full h-full max-w-[280px] max-h-[200px] relative mx-auto">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SQL Game of Clash - Full Width */}
          {renderFullWidthCard(services[6], true)}

          {/* Resume Section - 2 cards per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.slice(7).map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-slate-800/30 rounded-xl
                    hover:bg-slate-700/40 transition-all duration-300
                    border border-cyan-900/20 hover:border-cyan-500/30
                    backdrop-blur-sm hover:-translate-y-1
                    overflow-hidden"
                >
                  {/* Regular card content */}
                  <div className="p-6">
                    <Icon className="text-4xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-cyan-100 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-cyan-300 text-sm opacity-80 mb-4">
                      {service.description}
                    </p>
                    <button className="px-4 py-1.5 bg-cyan-500/20 hover:bg-cyan-500/30
                      border border-cyan-500/30 hover:border-cyan-500/50
                      rounded-lg text-cyan-300 text-sm transition-all duration-300
                      hover:-translate-y-0.5">
                      Learn More
                    </button>
                  </div>
                  <div className="h-40 md:h-56 relative flex items-center justify-center p-4">
                    <div className="w-full h-full max-w-[280px] max-h-[200px] relative mx-auto">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;