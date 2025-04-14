import React from 'react';

interface FlipCardProps {
  title: string;
  duration: string;
  servings: string;
  icon: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ title, duration, servings, icon }) => {
  return (
    <div className="w-[190px] h-[254px] overflow-visible">
      <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-300 hover:[transform:rotateY(180deg)] shadow-[0px_0px_10px_1px_#000000ee] rounded-md">
        {/* Back */}
        <div className="absolute w-full h-full bg-slate-900 [backface-visibility:hidden] rounded-md overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-40 h-[160%] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-[rotation_5s_linear_infinite]" />
            <div className="absolute w-[99%] h-[99%] bg-slate-900 rounded-md text-white flex flex-col justify-center items-center gap-8">
              {icon}
              <strong>Hover Me</strong>
            </div>
          </div>
        </div>

        {/* Front */}
        <div className="absolute w-full h-full bg-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-md overflow-hidden text-white">
          <div className="absolute w-full h-full">
            <div className="relative w-full h-full">
              <div className="w-[90px] h-[90px] rounded-full bg-cyan-500/50 filter blur-md animate-floating" />
              <div id="right" className="absolute w-[30px] h-[30px] rounded-full bg-cyan-600/50 left-40 -top-20 filter blur-md animate-floating delay-[-1800ms]" />
              <div id="bottom" className="absolute w-[150px] h-[150px] rounded-full bg-cyan-700/50 left-12 top-0 filter blur-md animate-floating delay-[-800ms]" />
            </div>
          </div>
          <div className="absolute w-full h-full p-3 flex flex-col justify-between">
            <span className="bg-black/30 px-3 py-1 rounded-xl backdrop-blur-sm w-fit">
              {title}
            </span>
            <div className="w-full p-3 bg-black/60 backdrop-blur-sm rounded-md shadow-[0px_0px_10px_5px_#00000088]">
              <div className="flex justify-between items-center text-xs">
                <p className="w-1/2 font-bold">{title}</p>
                <svg className="w-4 h-4 fill-cyan-500" viewBox="0 0 256 256">
                  <g transform="scale(8,8)">
                    <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                  </g>
                </svg>
              </div>
              <p className="mt-1 text-[8px] text-white/50">
                {duration} &nbsp; | &nbsp; {servings}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;