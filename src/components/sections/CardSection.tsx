import React from 'react';
import FlipCard from './FlipCard';
import { FaPython, FaDatabase } from 'react-icons/fa';
import { BiBrain } from 'react-icons/bi';

const CardSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Our Featured Courses
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <FlipCard
            title="SQL"
            duration="12 Weeks"
            servings="Beginner Friendly"
            icon={<FaDatabase className="w-12 h-12 text-cyan-500" />}
          />
          <FlipCard
            title="Python"
            duration="16 Weeks"
            servings="All Levels"
            icon={<FaPython className="w-12 h-12 text-cyan-500" />}
          />
          <FlipCard
            title="AI & ML"
            duration="24 Weeks"
            servings="Advanced"
            icon={<BiBrain className="w-12 h-12 text-cyan-500" />}
          />
        </div>
      </div>
    </section>
  );
};

export default CardSection;