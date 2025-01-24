import { SiPowers, SiTableau } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { TbFileSpreadsheet } from 'react-icons/tb';
import { FaPython } from 'react-icons/fa';

const tools = [
  { 
    name: 'Excel', 
    icon: TbFileSpreadsheet, 
    color: 'text-cyan-400',
    description: 'Advanced data analysis & reporting'
  },
  { 
    name: 'Python', 
    icon: FaPython, 
    color: 'text-cyan-400',
    description: 'Data processing & automation'
  },
  { 
    name: 'Power BI', 
    icon: SiPowers, 
    color: 'text-cyan-500',
    description: 'Interactive data visualization'
  },
  { 
    name: 'SQL', 
    icon: BiLogoPostgresql, 
    color: 'text-cyan-600',
    description: 'Database management & querying'
  },
  { 
    name: 'Tableau', 
    icon: SiTableau, 
    color: 'text-cyan-500',
    description: 'Business intelligence solutions'
  }
];

function TollScroller() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-cyan-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-100 mb-4">
          Our Tech Stack
        </h2>
        <p className="text-center text-cyan-300 mb-16 max-w-2xl mx-auto">
          Transforming complex data into actionable insights with industry-leading tools
        </p>
        
        <div className="relative w-full">
          <div className="flex animate-infinite-scroll">
            {[...tools, ...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="shrink-0 group flex flex-col items-center justify-center p-6 bg-slate-800/30 rounded-xl 
                  hover:bg-slate-700/40 transition-all duration-300 cursor-pointer 
                  border border-cyan-900/20 hover:border-cyan-500/30 hover:-translate-y-1
                  backdrop-blur-sm min-w-[200px] mx-4"
              >
                <tool.icon className={`text-5xl md:text-6xl ${tool.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-semibold text-cyan-100 mb-2">{tool.name}</h3>
                <p className="text-sm text-cyan-300 text-center opacity-80">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TollScroller;