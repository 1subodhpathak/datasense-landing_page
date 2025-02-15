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
    color: "text-gray-800",
    description: "Interactive data visualization",
  },
  {
    name: "SQL",
    icon: BiLogoPostgresql,
    color: "text-gray-800",
    description: "Database management & querying",
  },
  {
    name: "Tableau",
    icon: SiTableau,
    color: "text-gray-800",
    description: "Business intelligence solutions",
  },
  {
    name: "Excel",
    icon: TbFileSpreadsheet,
    color: "text-gray-800",
    description: "Advanced data analysis & reporting",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "text-gray-800",
    description: "Data processing & automation",
  },
];

const toolsRow2 = [
  {
    name: "ChatGPT",
    icon: SiChatbot,
    color: "text-gray-800",
    description: "AI-powered conversation & analysis",
  },
  {
    name: "GitHub Copilot",
    icon: VscGithubAction,
    color: "text-gray-800",
    description: "AI code completion & assistance",
  },
  {
    name: "Google Sheets",
    icon: SiGooglesheets,
    color: "text-gray-800",
    description: "Cloud-based data management",
  },
  {
    name: "Gemini",
    icon: BsGem,
    color: "text-gray-800",
    description: "Advanced AI language model",
  },
  {
    name: "Alteryx",
    icon: SiAlteryx,
    color: "text-gray-800",
    description: "Data analytics automation",
  },
];

function ToolScroller() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-16">
      {/* Top curved border */}
      <div className="absolute top-0 left-0 w-full h-16">
        <div className="w-full h-full bg-dark-cyan/90 rounded-b-[100%]" />
      </div>
      
      {/* Bottom curved border */}
      <div className="absolute bottom-0 left-0 w-full h-16">
        <div className="w-full h-full bg-dark-cyan/90 rounded-t-[100%]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
              From Excel to AI:<br />
              Your All-in-One<br />
              Learning Hub
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Practical Skills, Real-World Scenarios, and<br />
              Expert Guidance for Your Success
            </p>
          </div>

          {/* Right side - Scrolling Tools */}
          <div className="space-y-12">
            {/* First Row - Right to Left */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-rtl gap-16">
                {[...toolsRow1, ...toolsRow1].map((tool, index) => (
                  <div
                    key={`row1-${index}`}
                    className="shrink-0 flex items-center justify-center"
                  >
                    <tool.icon className="w-12 h-12 text-gray-800" />
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Left to Right */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-ltr gap-16">
                {[...toolsRow2, ...toolsRow2].map((tool, index) => (
                  <div
                    key={`row2-${index}`}
                    className="shrink-0 flex items-center justify-center"
                  >
                    <tool.icon className="w-12 h-12 text-gray-800" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToolScroller;