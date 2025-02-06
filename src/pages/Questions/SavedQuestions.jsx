import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';

export default function SavedQuestionsPage() {
  const [savedQuestions, setSavedQuestions] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedQuestions') || '[]');
    setSavedQuestions(saved);
  }, []);

  return (
    <div className="min-h-screen bg-[#281b32] text-white p-8">
      <h1 className="text-5xl md:text-5xl bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent font-bold mb-6 leading-tight">Saved Questions</h1>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
            Saved Questions
          </h1>
        </div>

        {savedQuestions.length === 0 ? (
          <div className="bg-[#2d2d3f] p-8 rounded-lg text-center">
            <p className="text-gray-400 text-lg">You haven't saved any questions yet.</p>
            <Link to="/community" className="mt-4 inline-block px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
              Browse Community Questions
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {savedQuestions.map((question) => (
              <div
                key={question.id}
                className="bg-[#281b32] border-gray-300 p-6 rounded-lg hover:shadow-2xl  transition-all shadow-2xl"
              >
                <Link to={`/discussion/${question.id}`} className="block">
                  <div className="flex items-start gap-4">
                    <img
                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${question.author}`}
                      alt={question.author}
                      className="w-12 h-12 rounded-full ring-2 ring-purple-500"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-purple-300">
                          {question.author}
                        </span>
                        <span className="text-gray-400 text-sm">
                          @{question.username}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {formatDistanceToNow(new Date(question.timestamp))} ago
                        </span>
                      </div>
                      <p className="text-gray-200">{question.content}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
