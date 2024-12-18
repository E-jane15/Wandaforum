import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import DropdownMenu from './DropdownMenu';

export default function QuestionDetail({
  post,
  onComment,
  onLikeComment,
  onEditPost,
  onDeletePost,
  onEditComment,
  onDeleteComment,
  onSaveQuestion,
  onReportQuestion,
  editingPost,
  setEditingPost,
  editingComment,
  setEditingComment,
}) {
  const [editedPostContent, setEditedPostContent] = useState('');
  const [editedCommentContent, setEditedCommentContent] = useState('');

  return (
    <div className="bg-[#1a1a2e] p-6 rounded-lg">
      {/* Post Section */}
      <div className="flex items-start gap-4 mb-6">
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${post.author}`}
          alt={post.author}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-white font-semibold">{post.author}</h2>
            <span className="text-gray-400 text-sm">{post.username}</span>
            <span className="text-gray-400 text-sm">
              {formatDistanceToNow(new Date(post.timestamp))} ago
            </span>
            <div className="ml-auto">
              <DropdownMenu
                onSave={() => onSaveQuestion(post.id)}
                onReport={() => onReportQuestion(post.id)}
              />
            </div>
          </div>
          {editingPost === post.id ? (
            <div className="mt-2">
              <textarea
                value={editedPostContent}
                onChange={(e) => setEditedPostContent(e.target.value)}
                className="w-full bg-[#2d2d3f] text-white rounded-md p-2 mb-2"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => {
                    onEditPost(post.id, editedPostContent);
                    setEditingPost(null);
                  }}
                  className="px-3 py-1 bg-purple-600 text-white rounded-md"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingPost(null)}
                  className="px-3 py-1 bg-gray-600 text-white rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <p className="text-white mt-2">{post.content}</p>
          )}
          {!editingPost && (
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => {
                  setEditingPost(post.id);
                  setEditedPostContent(post.content);
                }}
                className="text-sm text-purple-400 hover:text-purple-300"
              >
                Edit
              </button>
              <button
                onClick={() => onDeletePost(post.id)}
                className="text-sm text-red-400 hover:text-red-300"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Comments Section */}
      <div className="space-y-4">
        <h3 className="text-white font-semibold">Comments</h3>
        {post.comments.map((comment) => (
          <div
            key={comment.id}
            className="flex items-start gap-4 pl-8 border-l border-purple-500"
          >
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${comment.author}`}
              alt={comment.author}
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">{comment.author}</span>
                <span className="text-gray-400 text-sm">
                  {formatDistanceToNow(new Date(comment.timestamp))} ago
                </span>
              </div>
              {editingComment === comment.id ? (
                <div className="mt-2">
                  <textarea
                    value={editedCommentContent}
                    onChange={(e) => setEditedCommentContent(e.target.value)}
                    className="w-full bg-[#2d2d3f] text-white rounded-md p-2 mb-2"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => {
                        onEditComment(post.id, comment.id, editedCommentContent);
                        setEditingComment(null);
                      }}
                      className="px-3 py-1 bg-purple-600 text-white rounded-md"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingComment(null)}
                      className="px-3 py-1 bg-gray-600 text-white rounded-md"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-white mt-1">{comment.content}</p>
              )}
              {!editingComment && (
                <div className="mt-2 flex gap-2">
                  <button
                    onClick={() => onLikeComment(post.id, comment.id)}
                    className="text-sm text-purple-400 hover:text-purple-300"
                  >
                    Like ({comment.likes || 0})
                  </button>
                  <button
                    onClick={() => {
                      setEditingComment(comment.id);
                      setEditedCommentContent(comment.content);
                    }}
                    className="text-sm text-purple-400 hover:text-purple-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDeleteComment(post.id, comment.id)}
                    className="text-sm text-red-400 hover:text-red-300"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        <button
          onClick={onComment}
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}

