import React, { useState } from 'react';
import { ThumbsUp, MessageCircle, MoreVertical, Bookmark } from 'lucide-react';
import { useQuestions } from './QuestionProvider';

const QuestionCard = ({ question }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [replyText, setReplyText] = useState('');

  const { saveQuestion, removeSavedQuestion, savedQuestions, addReply, likeQuestion } = useQuestions();

  const handleLike = () => {
    likeQuestion(question.id);
  };

  const handleSave = () => {
    console.log("Saving question:", question.id); // Debugging
    const isSaved = savedQuestions.some(q => q.id === question.id);
    isSaved 
      ? removeSavedQuestion(question.id)
      : saveQuestion(question);
  };

  const handleReply = () => {
    if (replyText.trim()) {
      addReply(question.id, replyText);
      setReplyText('');
      setIsReplyOpen(false);
    }
  };

  const isSaved = savedQuestions.some(q => q.id === question.id);

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-lg p-4 relative border border-gray-800">
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
      >
        <MoreVertical size={20} />
      </button>
      {isMenuOpen && (
        <div className="absolute top-10 right-2 bg-gray-900 border border-gray-800 rounded shadow-xl z-10">
          <button 
            onClick={handleSave}
            className="flex items-center p-2 hover:bg-gray-800 w-full text-left text-gray-300"
          >
            <Bookmark 
              size={16} 
              className={`mr-2 ${isSaved ? 'text-purple-400' : ''}`} 
            /> 
            {isSaved ? 'Unsave Question' : 'Save Question'}
          </button>
        </div>
      )}

      <h3 className="font-bold text-lg mb-2 text-gray-100">{question.title}</h3>
      <p className="text-gray-300 mb-4">{question.content}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {question.tags?.map(tag => (
          <span 
            key={tag} 
            className="bg-purple-900/50 text-purple-200 text-xs text-white px-2 py-1 rounded-full border border-purple-800/50"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleLike}
            className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ThumbsUp size={16} className="mr-2" />
            {question.likes || 0}
          </button>
          <button 
            onClick={() => setIsReplyOpen(!isReplyOpen)}
            className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
          >
            <MessageCircle size={16} className="mr-2" />
            Reply
          </button>
        </div>
        <span className="text-xs text-gray-500">
          {new Date(question.timestamp).toLocaleString()}
        </span>
      </div>

      {isReplyOpen && (
        <div className="mt-4">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write your reply..."
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          />
          <button 
            onClick={handleReply}
            className="mt-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors"
          >
            Submit Reply
          </button>
        </div>
      )}

      {question.replies?.length > 0 && (
        <div className="mt-4 border-t border-gray-800 pt-2">
          <h4 className="font-semibold mb-2 text-gray-200">Replies</h4>
          {question.replies.map(reply => (
            <div key={reply.id} className="bg-gray-800/50 p-2 rounded mb-2 border border-gray-700">
              <p className="text-gray-300">{reply.text}</p>
              <span className="text-xs text-gray-500">
                {new Date(reply.timestamp).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;