import React, { useState } from 'react';
import { X } from 'lucide-react';

const PREDEFINED_TAGS = [
  'Web Development', 'DevOps', 'Backend', 
  'Frontend', 'Cloud', 'Databases', 
  'Machine Learning', 'Cybersecurity'
];

const AddQuestionModal = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagToggle = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    onSubmit({
      title,
      content,
      tags: selectedTags
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-900/50 bg-opacity-80 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-gray-900/50 border border-purple-300/20 rounded-lg w-full max-w-lg mx-4 p-6 relative shadow-xl">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent">Add New Interview Question</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent text-xl">
              Question Title
            </label>
            <input 
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter question title"
              className="w-full px-3 py-2 bg-gray-900/50 border border-purple-300/20 rounded-md text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent  text-xl">
              Question Content
            </label>
            <textarea 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Provide detailed context for your question"
              className="w-full px-3 py-2 bg-gray-900/50 border border-purple-300/20 rounded-md h-32 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className=" bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent  block mb-2 font-semibold text-purple-100 text-xl">
              Tags (Select Relevant Categories)
            </label>
            <div className="flex flex-wrap gap-2">
              {PREDEFINED_TAGS.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors
                    ${selectedTags.includes(tag) 
                      ? 'bg-purple text-white' 
                      : 'bg-purple-900 border border-gray-300 text-white hover:bg-purple hover:border-purple'
                    }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-purple-500 border border-white  text-white py-2 rounded-md hover:bg-gradient-to-r from-purple2 to-orange/80 hover:border-purple transition-colors font-semibold"
          >
            Post Question
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddQuestionModal;