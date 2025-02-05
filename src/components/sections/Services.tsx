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
    image: "/assets/images/sql-code-arena.png", 
  },
  {
    title: "Live Quizzes",
    description: "Interactive quizzes to test your knowledge in real-time",
    icon: BiQuestionMark,
    image: "/assets/images/live-quizes.png", 
  },
  {
    title: "Custom Quiz Section",
    description: "1000+ Questions covering all aspects of data analysis",
    icon: AiOutlineThunderbolt,
    image: "/assets/images/custom-quizes.png", 
  },
  {
    title: "Data Analyst Job Ready Game",
    description: "Gamified learning path to become job-ready",
    icon: BiGame,
    image: "/assets/images/job-ready.png", 
  },
  {
    title: "SQL Game of Clash",
    description: "Compete with peers in SQL challenges",
    icon: AiOutlineThunderbolt,
    image: "/assets/images/sql-game.png", 
  },
  {
    title: "ATS AI Resume Checker",
    description: "AI-powered resume analysis and optimization",
    icon: BsFileEarmarkCheck,
    image: "/assets/images/ats.png",
  },
  {
    title: "JD and Resume Matching",
    description: "Match your resume with job descriptions for better targeting",
    icon: BsFileEarmarkText,
    image: "/assets/images/jd.png",
  },
];

const Services: React.FC = () => {
  const ServiceIcon = services[0].icon;

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
          {/* Featured Service Card (Full Width) */}
          <div className="w-full">
            <div className="group bg-slate-800/30 rounded-xl
              hover:bg-slate-700/40 transition-all duration-300
              border border-cyan-900/20 hover:border-cyan-500/30
              backdrop-blur-sm hover:-translate-y-1
              flex flex-col md:flex-row overflow-hidden">
              <div className="p-8 md:w-1/2">
                <ServiceIcon className="text-6xl text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold text-cyan-100 mb-4">
                  {services[0].title}
                </h3>
                <p className="text-cyan-300 text-lg opacity-80">
                  {services[0].description}
                </p>
                <button className="mt-6 px-6 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 
                  border border-cyan-500/30 hover:border-cyan-500/50
                  rounded-lg text-cyan-300 transition-all duration-300
                  hover:-translate-y-0.5">
                  Learn More
                </button>
              </div>
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <img
                  src={services[0].image}
                  alt={services[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Remaining Service Cards (2 per row) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.slice(1).map((service) => {
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
                  <div className="h-48 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
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