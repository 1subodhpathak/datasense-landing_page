// // FlipCard.tsx
// import React, { useState } from 'react';
// import { VocabularyTerm } from '../../data/vocabularyData';

// interface FlipCardProps {
//   category: string;
//   termOfTheDay: VocabularyTerm;
//   icon: React.ReactNode;
// }

// const FlipCard: React.FC<FlipCardProps> = ({ category, termOfTheDay, icon }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleClick = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <div className="w-[190px] h-[254px] overflow-visible cursor-pointer" onClick={handleClick}>
//       <div className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-300 ${
//         isFlipped ? '[transform:rotateY(180deg)]' : ''
//       } shadow-[0px_0px_10px_1px_#000000ee] rounded-md`}>
//         {/* Front - Shows the Term */}
//         <div className="absolute w-full h-full bg-slate-900 [backface-visibility:hidden] rounded-md overflow-hidden">
//           <div className="relative w-full h-full flex items-center justify-center">
//             <div className="absolute w-40 h-[160%] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-[rotation_5s_linear_infinite]" />
//             <div className="absolute w-[99%] h-[99%] bg-slate-900 rounded-md text-white flex flex-col justify-center items-center gap-4 p-4">
//               {icon}
//               <h3 className="text-xl font-bold text-center">{termOfTheDay.term}</h3>
//               <p className="text-sm text-cyan-400 text-center">Click to see meaning</p>
//             </div>
//           </div>
//         </div>

//         {/* Back - Shows the Meaning */}
//         <div className="absolute w-full h-full bg-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-md overflow-hidden text-white">
//           <div className="absolute w-full h-full">
//             <div className="relative w-full h-full">
//               <div className="w-[90px] h-[90px] rounded-full bg-cyan-500/50 filter blur-md animate-floating" />
//               <div id="right" className="absolute w-[30px] h-[30px] rounded-full bg-cyan-600/50 left-40 -top-20 filter blur-md animate-floating delay-[-1800ms]" />
//               <div id="bottom" className="absolute w-[150px] h-[150px] rounded-full bg-cyan-700/50 left-12 top-0 filter blur-md animate-floating delay-[-800ms]" />
//             </div>
//           </div>
//           <div className="absolute w-full h-full p-3 flex flex-col justify-between">
//             <span className="bg-black/30 px-3 py-1 rounded-xl backdrop-blur-sm w-fit">
//               {category}
//             </span>
//             <div className="w-full p-3 bg-black/60 backdrop-blur-sm rounded-md shadow-[0px_0px_10px_5px_#00000088] flex flex-col h-3/4">
//               <div className="flex justify-between items-center text-xs mb-2">
//                 <p className="font-bold">{termOfTheDay.term}</p>
//                 <svg className="w-4 h-4 fill-cyan-500" viewBox="0 0 256 256">
//                   <g transform="scale(8,8)">
//                     <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
//                   </g>
//                 </svg>
//               </div>
//               <p className="text-sm overflow-auto flex-grow">
//                 {termOfTheDay.meaning}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlipCard;

// FlipCard.tsx
import React, { useState } from 'react';
import { VocabularyTerm } from '../../data/vocabularyData';

interface FlipCardProps {
  category: string;
  termOfTheDay: VocabularyTerm;
  // icon: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ category, termOfTheDay }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-[240px] h-[320px] overflow-visible cursor-pointer" onClick={handleClick}>
      <div className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-500 ${
        isFlipped ? '[transform:rotateY(180deg)]' : ''
      } shadow-[0px_0px_15px_2px_#000000ee] rounded-lg`}>
        {/* Front - Shows the Term */}
        <div className="absolute w-full h-full bg-slate-900 [backface-visibility:hidden] rounded-lg overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-60 h-[160%] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-[rotation_6s_linear_infinite]" />
            <div className="absolute w-[99%] h-[99%] bg-slate-900 rounded-lg text-white flex flex-col justify-center items-center gap-8 p-6">
              {/* <div className="text-cyan-500 mb-2">{icon}</div> */}
              <h1 className="text-cyan-400 mb-2 text-lg">{category}</h1>
              <h3 className="text-2xl font-bold text-center">{termOfTheDay.term}</h3>
              <p className="text-sm text-cyan-400 text-center mt-4">Click to see meaning</p>
            </div>
          </div>
        </div>

        {/* Back - Shows the Meaning */}
        <div className="absolute w-full h-full bg-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-lg overflow-hidden text-white">
          <div className="absolute w-full h-full">
            <div className="relative w-full h-full">
              <div className="w-[120px] h-[120px] rounded-full bg-cyan-500/30 filter blur-md animate-floating" />
              <div id="right" className="absolute w-[40px] h-[40px] rounded-full bg-cyan-600/30 right-10 top-20 filter blur-md animate-floating delay-[-1800ms]" />
              <div id="bottom" className="absolute w-[180px] h-[180px] rounded-full bg-cyan-700/30 left-16 bottom-10 filter blur-md animate-floating delay-[-800ms]" />
            </div>
          </div>
          <div className="absolute w-full h-full p-5 flex flex-col justify-between">
            <span className="bg-black/40 px-3 py-1 rounded-xl backdrop-blur-sm w-fit">
              {category}
            </span>
            <div className="w-full p-4 bg-black/70 backdrop-blur-sm rounded-md shadow-[0px_0px_10px_5px_#00000088]">
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold text-lg text-cyan-300">{termOfTheDay.term}</p>
                <svg className="w-5 h-5 fill-cyan-500" viewBox="0 0 256 256">
                  <g transform="scale(8,8)">
                    <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                  </g>
                </svg>
              </div>
              <p className="text-sm leading-relaxed overflow-auto max-h-32">
                {termOfTheDay.meaning}
              </p>
              <p className="mt-3 text-xs text-cyan-400 text-right italic">Click to flip back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;