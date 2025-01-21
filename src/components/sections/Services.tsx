import { BiGame, BiCode, BiQuestionMark } from 'react-icons/bi';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { BsFileEarmarkCheck, BsFileEarmarkText } from 'react-icons/bs';

const services = [
  {
    title: 'SQL Code Arena',
    description: 'Practice SQL with real-world scenarios and challenges',
    icon: BiCode,
  },
  {
    title: 'Live Quizzes',
    description: 'Interactive quizzes to test your knowledge in real-time',
    icon: BiQuestionMark, // Updated icon
  },
  {
    title: 'Custom Quiz Section',
    description: '1000+ Questions covering all aspects of data analysis',
    icon: AiOutlineThunderbolt,
  },
  {
    title: 'Data Analyst Job Ready Game',
    description: 'Gamified learning path to become job-ready',
    icon: BiGame,
  },
  {
    title: 'SQL Game of Clash',
    description: 'Compete with peers in SQL challenges',
    icon: AiOutlineThunderbolt,
  },
  {
    title: 'ATS AI Resume Checker',
    description: 'AI-powered resume analysis and optimization',
    icon: BsFileEarmarkCheck,
  },
  {
    title: 'JD and Resume Matching',
    description: 'Match your resume with job descriptions for better targeting',
    icon: BsFileEarmarkText,
  },
];

function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-cyan-950 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-100 mb-4">
          Our Services
        </h2>
        <p className="text-center text-cyan-300 mb-16 max-w-2xl mx-auto">
          Comprehensive tools and resources to accelerate your data analytics career
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 bg-slate-800/30 rounded-xl
                hover:bg-slate-700/40 transition-all duration-300
                border border-cyan-900/20 hover:border-cyan-500/30
                backdrop-blur-sm hover:-translate-y-1"
            >
              <service.icon className="text-4xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-cyan-100 mb-2">
                {service.title}
              </h3>
              <p className="text-cyan-300 text-sm opacity-80">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;