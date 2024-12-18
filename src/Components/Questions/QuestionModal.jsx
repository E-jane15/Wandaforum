import { useState } from 'react';

export default function QuestionModal({ isOpen, onClose, onSubmit }) {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    onSubmit({
      content: question,
      author: 'Current User', // In a real app, get from auth
      username: '@currentuser',
      timestamp: new Date().toISOString(),
      upvotes: 0,
      comments: []
    });
    
    setQuestion('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-[#1a1a2e] rounded-lg w-full max-w-lg p-6">
        <h2 className="text-xl text-white font-semibold mb-4">Ask a Question</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full h-32 p-3 rounded-lg bg-[#2d2d3f] text-white border border-purple-500 focus:outline-none focus:border-purple-600"
            placeholder="What's your question?"
          />
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
            >
              Post Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

