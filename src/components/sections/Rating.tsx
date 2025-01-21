import { BsPeopleFill, BsStarFill, BsTrophyFill } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';

const stats = [
  {
    title: 'Students Trained',
    value: '5000+',
    icon: BsPeopleFill,
    description: 'Aspiring data analysts mentored'
  },
  {
    title: 'Average Rating',
    value: '4.8/5',
    icon: BsStarFill,
    description: 'Based on student feedback'
  },
  {
    title: 'Success Rate',
    value: '92%',
    icon: BsTrophyFill,
    description: 'Students placed in top companies'
  },
  {
    title: 'Course Completion',
    value: '95%',
    icon: FaGraduationCap,
    description: 'Strong student engagement'
  }
];

const achievements = [
  'Featured on Analytics India Magazine',
  'Top Data Science Educator 2023',
  'Best SQL Training Platform',
  'Excellence in Career Guidance'
];

function Rating() {
  return (
    <section className="py-20 bg-gradient-to-b from-cyan-950 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-100 mb-4">
          Our Impact & Achievements
        </h2>
        <p className="text-center text-cyan-300 mb-16 max-w-2xl mx-auto">
          Empowering data enthusiasts with quality education and career guidance
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div 
              key={stat.title}
              className="p-6 bg-slate-800/30 rounded-xl border border-cyan-900/20 
                hover:border-cyan-500/30 transition-all duration-300"
            >
              <stat.icon className="text-3xl text-cyan-400 mb-4" />
              <div className="text-3xl font-bold text-cyan-100 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-cyan-200 mb-1">
                {stat.title}
              </div>
              <p className="text-sm text-cyan-300 opacity-80">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements Scroller */}
        <div className="flex flex-wrap justify-center gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement}
              className="px-6 py-3 bg-slate-800/30 rounded-full border border-cyan-900/20 
                hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-cyan-200">{achievement}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rating;