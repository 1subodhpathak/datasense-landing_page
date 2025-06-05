import React, { useState } from 'react';
import { VocabularyTerm } from '../../data/vocabularyData';

interface FlipCardProps {
  category: string;
  termOfTheDay: VocabularyTerm;
  colorScheme?: 'cyan' | 'purple' | 'green';
}

const borderGradients: Record<string, string> = {
  cyan: 'from-cyan-400 via-cyan-300 to-blue-400',
  purple: 'from-purple-400 via-pink-400 to-purple-600',
  green: 'from-green-400 via-teal-400 to-green-600',
};
const headingColors: Record<string, string> = {
  cyan: 'text-cyan-400',
  purple: 'text-purple-400',
  green: 'text-green-400',
};

const FlipCard: React.FC<FlipCardProps> = ({ category, termOfTheDay, colorScheme = 'cyan' }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-[320px] h-[140px] overflow-visible cursor-pointer relative"
      style={{ perspective: '1000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Rotating border wrapper */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        {/* Rotating gradient border */}
        <div className={`absolute inset-0 w-[200%] h-[200%] top-[-50%] left-[-50%] bg-gradient-to-r ${borderGradients[colorScheme]} animate-[rotation_3s_linear_infinite]`} />
      </div>
      
      {/* Card content wrapper */}
      <div className="absolute inset-[2px] rounded-lg overflow-hidden">
        <div 
          className={`relative w-full h-full [transform-style:preserve-3d] transition-all duration-700 ease-in-out ${
            isFlipped ? '[transform:rotateY(180deg)]' : isHovered ? '[transform:rotateY(15deg)]' : ''
          } rounded-lg`}
        >
          {/* Front - Shows the Term */}
          <div className="absolute w-full h-full bg-gradient-to-b from-slate-900 to-slate-800 [backface-visibility:hidden] rounded-lg overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Background Elements */}
              <div className="absolute w-full h-full">
                <div className="absolute w-24 h-24 rounded-full bg-primary-cyan/10 filter blur-md animate-pulse-slow top-2 left-2" />
                <div className="absolute w-16 h-16 rounded-full bg-bright-cyan/10 filter blur-md animate-floating bottom-4 right-4" />
              </div>
              
              <div className="absolute w-full h-full bg-gradient-to-b from-slate-900 to-slate-800 rounded-lg text-white flex flex-col justify-center items-center gap-2 p-4">
                <h1 className={`text-white text-base font-bold transition-all duration-300 ${isHovered ? 'scale-110' : ''} ${headingColors[colorScheme]}`}>
                  {category}
                </h1>
                <h3 className={`text-xl font-bold text-center ${headingColors[colorScheme]} transition-all duration-500`}>
                  {termOfTheDay.term}
                </h3>
                <p className={`text-xs text-white text-center transition-all duration-300 ${isHovered ? 'text-primary-cyan' : ''}`}>
                  Click to see meaning
                </p>
              </div>
            </div>
          </div>

          {/* Back - Shows the Meaning */}
          <div className="absolute w-full h-full bg-gradient-to-b from-slate-900 to-slate-800 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-lg overflow-hidden text-white">
            <div className="absolute w-full h-full">
              <div className="relative w-full h-full">
                <div className="w-[120px] h-[120px] rounded-full bg-cyan-500/20 filter blur-md animate-floating" />
                <div id="right" className="absolute w-[40px] h-[40px] rounded-full bg-bright-cyan/20 right-10 top-20 filter blur-md animate-float" />
                <div id="bottom" className="absolute w-[180px] h-[180px] rounded-full bg-primary-cyan/20 left-16 bottom-10 filter blur-md animate-float-slow" />
              </div>
            </div>
            <div className="absolute w-full h-full p-4 flex flex-col justify-between">
              <div 
                className={`w-full p-3 bg-black/70 backdrop-blur-sm rounded-md shadow-[0px_0px_10px_5px_rgba(6,182,212,0.1)] transition-opacity duration-700 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}
                style={{ 
                  animation: isFlipped ? 'fadeIn 0.7s ease-out forwards' : 'none',
                  transform: isFlipped ? 'translateY(0)' : 'translateY(10px)'
                }}
              >
                <div className="flex justify-between items-center mb-2">
                  <p className={`font-bold text-base ${headingColors[colorScheme]}`}>
                    {termOfTheDay.term}
                  </p>
                  <svg className={`w-4 h-4 ${headingColors[colorScheme]} transition-transform duration-300 ${isHovered ? 'scale-125' : ''}`} viewBox="0 0 256 256" fill="currentColor">
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                    </g>
                  </svg>
                </div>
                <p className="text-xs leading-relaxed overflow-auto max-h-32 text-gray-300">
                  {termOfTheDay.meaning}
                </p>
                <p className={`mt-2 text-xs ${headingColors[colorScheme]} text-right italic transition-colors`}>
                  Click to flip back
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;