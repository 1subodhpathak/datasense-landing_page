// // CardSection.tsx - Production Version (No manual testing)
// import React, { useEffect, useState } from 'react';
// import FlipCard from './FlipCard';
// import { FaPython, FaDatabase } from 'react-icons/fa';
// import { BiBrain } from 'react-icons/bi';
// import { vocabularyData, VocabularyTerm } from '../../data/vocabularyData';

// const CardSection: React.FC = () => {
//   const [termOfTheDay, setTermOfTheDay] = useState<{
//     [key: string]: VocabularyTerm
//   }>({
//     SQL: vocabularyData[0].terms[0],
//     Python: vocabularyData[1].terms[0],
//     'AI & ML': vocabularyData[2].terms[0]
//   });

//   useEffect(() => {
//     // Function to get term based on day count
//     const getTermForDay = (category: string) => {
//       const categoryData = vocabularyData.find(item => item.category === category);
//       if (!categoryData) return { term: "Error", meaning: "Category not found" };
      
//       // Calculate days since epoch (Jan 1, 1970)
//       const today = new Date();
//       const daysSinceEpoch = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
      
//       // Use modulo to cycle through terms
//       const termIndex = daysSinceEpoch % categoryData.terms.length;
      
//       return categoryData.terms[termIndex];
//     };

//     // Set terms for all categories
//     setTermOfTheDay({
//       SQL: getTermForDay("SQL"),
//       Python: getTermForDay("Python"),
//       'AI & ML': getTermForDay("AI & ML")
//     });
//   }, []);

//   return (
//     <section className="w-full py-20 bg-gradient-to-b from-slate-900 to-slate-800">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center text-white mb-16">
//           Daily Vocabulary Terms
//         </h2>
//         <div className="flex flex-wrap justify-center gap-16">
//           <FlipCard
//             category="SQL"
//             termOfTheDay={termOfTheDay.SQL}
//             icon={<FaDatabase className="w-16 h-16 text-cyan-500" />}
//           />
//           <FlipCard
//             category="Python"
//             termOfTheDay={termOfTheDay.Python}
//             icon={<FaPython className="w-16 h-16 text-cyan-500" />}
//           />
//           <FlipCard
//             category="AI & ML"
//             termOfTheDay={termOfTheDay['AI & ML']}
//             icon={<BiBrain className="w-16 h-16 text-cyan-500" />}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CardSection;

// CardSection.tsx - With Manual Testing
import React, { useEffect, useState } from 'react';
import FlipCard from './FlipCard';
// import { FaPython, FaDatabase } from 'react-icons/fa';
// import { BiBrain } from 'react-icons/bi';
import { vocabularyData, VocabularyTerm } from '../../data/vocabularyData';

const CardSection: React.FC = () => {
  // Track indices manually for development/testing
  const [indices, setIndices] = useState({
    SQL: 0,
    Python: 0,
    'AI & ML': 0
  });

  const [termOfTheDay, setTermOfTheDay] = useState<{
    [key: string]: VocabularyTerm
  }>({
    SQL: vocabularyData[0].terms[0],
    Python: vocabularyData[1].terms[0],
    'AI & ML': vocabularyData[2].terms[0]
  });

  useEffect(() => {
    // Function to get term based on day count
    const getTermForDay = (category: string) => {
      const categoryData = vocabularyData.find(item => item.category === category);
      if (!categoryData) return { term: "Error", meaning: "Category not found" };
      
      // Calculate days since epoch (Jan 1, 1970)
      const today = new Date();
      const daysSinceEpoch = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
      
      // Use modulo to cycle through terms
      const termIndex = daysSinceEpoch % categoryData.terms.length;
      
      // Update indices state for the manual controls
      setIndices(prev => ({
        ...prev,
        [category]: termIndex
      }));
      
      return categoryData.terms[termIndex];
    };

    // Set terms for all categories
    setTermOfTheDay({
      SQL: getTermForDay("SQL"),
      Python: getTermForDay("Python"),
      'AI & ML': getTermForDay("AI & ML")
    });
  }, []);

  // For testing/development only
  const nextTerm = (category: string) => {
    const categoryData = vocabularyData.find(item => item.category === category);
    if (!categoryData) return;
    
    const nextIndex = (indices[category] + 1) % categoryData.terms.length;
    
    setIndices(prev => ({
      ...prev,
      [category]: nextIndex
    }));
    
    setTermOfTheDay(prev => ({
      ...prev,
      [category]: categoryData.terms[nextIndex]
    }));
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Daily Vocabulary Terms
        </h2>
        <div className="flex flex-wrap justify-center gap-16">
          <div className="flex flex-col items-center mb-8">
            <FlipCard
              category={"SQL"}
              termOfTheDay={termOfTheDay.SQL}
              // icon={<FaDatabase className="w-16 h-16 text-cyan-500" />}
            />
            <button 
              onClick={() => nextTerm("SQL")}
              className="mt-6 bg-cyan-600 hover:bg-cyan-700 transition-colors text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
            >
              Next Term
            </button>
          </div>
          
          <div className="flex flex-col items-center mb-8">
            <FlipCard
              category="Python"
              termOfTheDay={termOfTheDay.Python}
              // icon={<FaPython className="w-16 h-16 text-cyan-500" />}
            />
            <button 
              onClick={() => nextTerm("Python")}
              className="mt-6 bg-cyan-600 hover:bg-cyan-700 transition-colors text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
            >
              Next Term
            </button>
          </div>
          
          <div className="flex flex-col items-center mb-8">
            <FlipCard
              category="AI & ML"
              termOfTheDay={termOfTheDay['AI & ML']}
              // icon={<BiBrain className="w-16 h-16 text-cyan-500" />}
            />
            <button 
              onClick={() => nextTerm("AI & ML")}
              className="mt-6 bg-cyan-600 hover:bg-cyan-700 transition-colors text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
            >
              Next Term
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;