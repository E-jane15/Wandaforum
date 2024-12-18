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
    <div className="p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Saved Questions</h1>
        {savedQuestions.length === 0 ? (
          <p className="text-gray-400">You haven't saved any questions yet.</p>
        ) : (
          <div className="space-y-4">
            {savedQuestions.map((question) => (
              <div key={question.id} className="bg-[#1a1a2e] p-4 rounded-lg">
                <Link to={`/discussion/${question.id}`} className="block hover:bg-[#2d2d3f]">
                  <div className="flex items-start gap-4">
                    <img
                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${question.author}`}
                      alt={question.author}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">{question.author}</span>
                        <span className="text-gray-400 text-sm">{question.username}</span>
                        <span className="text-gray-400 text-sm">
                          {formatDistanceToNow(new Date(question.timestamp))} ago
                        </span>
                      </div>
                      <p className="mt-2 text-gray-300">{question.content}</p>
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

