// FlipCard.tsx
import React, { useState } from 'react';
import { VocabularyTerm } from '../../data/vocabularyData';

interface FlipCardProps {
  category: string;
  termOfTheDay: VocabularyTerm;
}

const FlipCard: React.FC<FlipCardProps> = ({ category, termOfTheDay }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-[320px] h-[140px] overflow-visible cursor-pointer" onClick={handleClick}>
      <div className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-500 ${
        isFlipped ? '[transform:rotateY(180deg)]' : ''
      } shadow-[0px_0px_15px_2px_rgba(6,182,212,0.15)] rounded-lg`}>
        {/* Front - Shows the Term */}
        <div className="absolute w-full h-full bg-gradient-to-b from-slate-900 to-slate-800 [backface-visibility:hidden] rounded-lg overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-full h-full bg-gradient-to-b from-slate-900 to-slate-800 rounded-lg text-white flex flex-col justify-center items-center gap-2 p-4">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white text-base font-bold">
                {category}
              </h1>
              <h3 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
                {termOfTheDay.term}
              </h3>
              <p className="text-xs text-white text-center hover:text-cyan-300 transition-colors">
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
              <div id="right" className="absolute w-[40px] h-[40px] rounded-full bg-cyan-600/20 right-10 top-20 filter blur-md animate-floating delay-[-1800ms]" />
              <div id="bottom" className="absolute w-[180px] h-[180px] rounded-full bg-cyan-700/20 left-16 bottom-10 filter blur-md animate-floating delay-[-800ms]" />
            </div>
          </div>
          <div className="absolute w-full h-full p-4 flex flex-col justify-between">
            {/* <span className="bg-black/40 px-3 py-1 rounded-xl backdrop-blur-sm w-fit text-primary-cyan">
              {category}
            </span> */}
            <div className="w-full p-3 bg-black/70 backdrop-blur-sm rounded-md shadow-[0px_0px_10px_5px_rgba(6,182,212,0.1)]">
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
                  {termOfTheDay.term}
                </p>
                <svg className="w-4 h-4 text-primary-cyan" viewBox="0 0 256 256" fill="currentColor">
                  <g transform="scale(8,8)">
                    <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                  </g>
                </svg>
              </div>
              <p className="text-xs leading-relaxed overflow-auto max-h-32 text-gray-300">
                {termOfTheDay.meaning}
              </p>
              <p className="mt-2 text-xs text-primary-cyan text-right italic hover:text-cyan-300 transition-colors">
                Click to flip back
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;