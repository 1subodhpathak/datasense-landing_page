import {
  SiPowers,
  SiTableau,
  SiChatbot,
  SiGooglesheets,
  SiAlteryx,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbFileSpreadsheet } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { BsGem } from "react-icons/bs";
import { VscGithubAction } from "react-icons/vsc";

const toolsRow1 = [
  {
    name: "Power BI",
    icon: SiPowers,
    color: "text-cyan-400",
    description: "Interactive data visualization",
  },
  {
    name: "SQL",
    icon: BiLogoPostgresql,
    color: "text-cyan-400",
    description: "Database management & querying",
  },
  {
    name: "Tableau",
    icon: SiTableau,
    color: "text-cyan-400",
    description: "Business intelligence solutions",
  },
  {
    name: "Excel",
    icon: TbFileSpreadsheet,
    color: "text-cyan-400",
    description: "Advanced data analysis & reporting",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "text-cyan-400",
    description: "Data processing & automation",
  },
];

const toolsRow2 = [
  {
    name: "ChatGPT",
    icon: SiChatbot,
    color: "text-cyan-400",
    description: "AI-powered conversation & analysis",
  },
  {
    name: "GitHub Copilot",
    icon: VscGithubAction,
    color: "text-cyan-400",
    description: "AI code completion & assistance",
  },
  {
    name: "Google Sheets",
    icon: SiGooglesheets,
    color: "text-cyan-400",
    description: "Cloud-based data management",
  },
  {
    name: "Gemini",
    icon: BsGem,
    color: "text-cyan-400",
    description: "Advanced AI language model",
  },
  {
    name: "Alteryx",
    icon: SiAlteryx,
    color: "text-cyan-400",
    description: "Data analytics automation",
  },
];

function ToolScroller() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-cyan-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left side - Text */}
          <div className="w-full md:w-1/3 flex flex-col justify-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-cyan-100 mb-4 leading-tight">
                From Excel to AI:<br />
                Your All-in-One<br />
                Learning Hub
              </h2>
              <p className="text-base sm:text-lg text-cyan-300/80 mb-8 md:mb-6">
                Practical Skills, Real-World Scenarios, and<br className="hidden md:block" />
                Expert Guidance for Your Success
              </p>
            </div>
          </div>

          {/* Right side - Double Scroller */}
          <div className="w-full md:w-2/3 flex flex-col gap-6 md:gap-8">
            {/* First row - Right to Left */}
            <div className="relative overflow-hidden py-4">
              <div className="flex animate-scroll-rtl gap-8 sm:gap-12 md:gap-16">
                {[...toolsRow1, ...toolsRow1].map((tool, index) => (
                  <div
                    key={`row1-${index}`}
                    className="shrink-0 flex flex-col items-center justify-center space-y-3 sm:space-y-4 min-w-[140px] sm:min-w-[160px] md:min-w-[180px]"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <tool.icon
                        className={`text-4xl sm:text-4xl md:text-5xl ${tool.color} transition-transform hover:scale-110`}
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-base sm:text-lg font-medium text-cyan-100">
                        {tool.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-cyan-300/80 mt-1">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute top-0 left-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-r from-slate-900 to-transparent"></div>
              <div className="absolute top-0 right-0 w-16 sm:w-24 md:w-32 h-full bg-transparent"></div>
            </div>

            {/* Second row - Left to Right */}
            <div className="relative overflow-hidden py-4">
              <div className="flex animate-scroll-ltr gap-8 sm:gap-12 md:gap-16">
                {[...toolsRow2, ...toolsRow2].map((tool, index) => (
                  <div
                    key={`row2-${index}`}
                    className="shrink-0 flex flex-col items-center justify-center space-y-3 sm:space-y-4 min-w-[140px] sm:min-w-[160px] md:min-w-[180px]"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <tool.icon
                        className={`text-4xl sm:text-4xl md:text-5xl ${tool.color} transition-transform hover:scale-110`}
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-base sm:text-lg font-medium text-cyan-100">
                        {tool.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-cyan-300/80 mt-1">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute top-0 left-0 w-16 sm:w-24 md:w-32 h-full bg-transparent"></div>
              <div className="absolute top-0 right-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-l from-slate-900 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToolScroller;