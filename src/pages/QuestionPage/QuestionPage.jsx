import React, { useState } from 'react';
import { QuestionProvider, useQuestions } from '../../Components/Quest/QuestionProvider';
import AddInterviewButton from '../../Components/Quest/AddInterviewButton';
import QuestionCard from '../../Components/Quest/QuestionCard';
import Sidebar from '../../Components/Quest/Sidebar';
import SearchAndFilter from '../../Components/Quest/SearchAndFilter';
import AddQuestionModal from '../../Components/Quest/AddQuestionModal';
import PrePostedQuestions from '../../Components/Quest/PrePostedQuestions';
import Navbar from '../../Components/Navbar/Navbar';

const QuestionPageContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { questions, addQuestion, filterQuestions } = useQuestions();
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const handleAddQuestion = (newQuestion) => {
    addQuestion(newQuestion);
    setIsModalOpen(false);
  };

  const handleSearch = (searchTerm) => {
    console.log("Search term received:", searchTerm); // Debugging
    if (!searchTerm.trim()) {
      setFilteredQuestions([]); // Reset filtered questions
      return;
    }

    const filtered = questions.filter(q => 
      q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Filtered questions:", filtered); // Debugging
    setFilteredQuestions(filtered);
  };

  const handleFilter = (filterOptions) => {
    const filtered = filterQuestions(filterOptions);
    setFilteredQuestions(filtered);
  };

  const displayQuestions = filteredQuestions.length > 0 
    ? filteredQuestions 
    : questions;

  return (
    <div className="min-h-screen bg-[#281b32]">
      <Navbar />
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 ml-72 mr-8 py-8">
          <div className="max-w-5xl mx-auto px-4">
            <header className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-4xl bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent font-bold mb-2">
                  Interview Questions
                </h1>
                <p className="text-gray-400">Share and explore technical interview questions</p>
              </div>
              <AddInterviewButton onClick={() => setIsModalOpen(true)} />
            </header>

            <SearchAndFilter 
              onSearch={handleSearch}
              onFilter={handleFilter}
              className="mb-8"
            />

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {displayQuestions.map(question => (
                  <div 
                    key={question.id} 
                    className="transform transition-all duration-200 hover:-translate-y-1"
                  >
                    <QuestionCard question={question} />
                  </div>
                ))}
              </div>

              {displayQuestions.length === 0 && (
                <div className="text-center py-12 bg-slate-800/30 rounded-lg">
                  <p className="text-gray-400 text-lg mb-2">No questions found</p>
                  <p className="text-gray-500">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {isModalOpen && (
        <AddQuestionModal 
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddQuestion}
        />
      )}
    </div>
  );
};

const QuestionPage = () => {
  return (
    <QuestionProvider>
      <QuestionPageContent />
    </QuestionProvider>
  );
};

export default QuestionPage;