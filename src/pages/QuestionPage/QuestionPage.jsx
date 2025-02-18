import { useState } from "react";
import { useQuestions } from "../../Components/Quest/QuestionProvider";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Quest/Sidebar";
import AddQuestionModal from '../../Components/Quest/AddQuestionModal';
import QuestionCard from "../../Components/Quest/QuestionCard";
import SearchAndFilter from '../../Components/Quest/SearchAndFilter';
import AddInterviewButton from '../../Components/Quest/AddInterviewButton';



const QuestionPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const { questions, addQuestion, filterQuestions, isLoading } = useQuestions();
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#281b32] flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  const handleAddQuestion = (newQuestion) => {
    addQuestion(newQuestion);
    setIsModalOpen(false);
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredQuestions([]);
      return;
    }
    const filtered = questions.filter(q => 
      q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
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
        <Sidebar onCollapsedChange={setIsSidebarCollapsed} />
       
        <main className={`
          flex-1 
          transition-all 
          duration-300
          py-8
          ${isSidebarCollapsed ? 'ml-28' : 'ml-72'} 
          mr-8
          md:px-4
        `}>
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

export default QuestionPage