import React, { useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Quest/Sidebar';
import { useQuestions } from '../../Components/Quest/QuestionProvider';
import QuestionCard from '../../Components/Quest/QuestionCard';

const AskedQuestions = () => {
  const { askedQuestions } = useQuestions();

  useEffect(() => {
    console.log("Asked Questions State in Component:", askedQuestions); // Debugging
  }, [askedQuestions]);

  return (
    <div className="min-h-screen bg-[#281b32]">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-72 mr-8 py-8">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-4xl bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent font-bold mb-8">
              Asked Questions
            </h1>
            <div className="grid grid-cols-1 gap-6">
              {askedQuestions.length > 0 ? (
                askedQuestions.map(question => (
                  <QuestionCard key={question.id} question={question} />
                ))
              ) : (
                <div className="text-center py-12 bg-slate-800/30 rounded-lg">
                  <p className="text-gray-400 text-lg mb-2">No questions asked yet</p>
                  <p className="text-gray-500">Ask a question to see it here</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AskedQuestions;