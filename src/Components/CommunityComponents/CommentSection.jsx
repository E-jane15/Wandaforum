import React, { useState } from 'react';
import { Send } from 'lucide-react';

const CommentSection = ({ postId, comments: initialComments = [] }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      author: {
        id: 'currentUser',
        name: 'You',
        avatar: '/placeholder.jpg',
      },
      content: newComment,
      timestamp: 'Just now',
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <div className="mt-4 space-y-4">
      <div className="space-y-3">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-3">
            <img 
              src={comment.author.avatar} 
              alt={comment.author.name} 
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1 bg-purple/10 rounded-xl p-3">
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm">{comment.author.name}</span>
                <span className="text-xs text-gray-400">{comment.timestamp}</span>
              </div>
              <p className="text-sm mt-1">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmitComment} className="flex space-x-3">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 bg-purple/10 border border-purple/20 rounded-xl px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple/50"
        />
        <button
          type="submit"
          disabled={!newComment.trim()}
          className="bg-purple/20 text-purple p-2 rounded-xl disabled:opacity-50 hover:bg-purple/30 transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

export default CommentSection;