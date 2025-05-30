import React from 'react';
import QuizApp from './QuizApp';
import { questions } from './data/questions';
import { useScrollTop } from '../../hooks/useScrollTop';

const QuizWrapper: React.FC = () => {
  const timePerQuestion = 5; // 5 minutes per question

  useScrollTop();

  return (
    <div className="min-h-screen w-full pt-20">
      <QuizApp questions={questions} timePerQuestion={timePerQuestion} />
    </div>
  );
};

export default QuizWrapper; 