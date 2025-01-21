import { BsTelephone, BsFileText, BsPeople } from 'react-icons/bs';
import { MdOutlineWork, MdSupport } from 'react-icons/md';

const topMateServices = [
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

function TopMate() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-cyan-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-100 mb-4">
          TopMate Services
        </h2>
        <p className="text-center text-cyan-300 mb-16 max-w-2xl mx-auto">
          Personalized support to accelerate your data analytics career journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {topMateServices.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-slate-800/30 rounded-xl
                hover:bg-slate-700/40 transition-all duration-300
                border border-cyan-900/20 hover:border-cyan-500/30
                backdrop-blur-sm hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <service.icon className="text-3xl text-cyan-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-cyan-100 ml-4">
                  {service.title}
                </h3>
              </div>
              <p className="text-cyan-300 text-sm opacity-80 ml-10">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopMate;