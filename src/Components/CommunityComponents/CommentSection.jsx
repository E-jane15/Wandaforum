"use client"

import React, { useState } from 'react'
import { Send, ThumbsUp, Edit, Trash, MoreVertical } from 'lucide-react'

const CommentSection = ({ postId, initialComments = [] }) => {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState('')
  const [editingCommentId, setEditingCommentId] = useState(null)
  const [editedCommentText, setEditedCommentText] = useState('')
  const [visibleComments, setVisibleComments] = useState(5)
  const [replyingToCommentId, setReplyingToCommentId] = useState(null)
  const [replyText, setReplyText] = useState('')

  // Add a new comment
  const handleSubmitComment = (e) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment = {
      id: Date.now(),
      author: {
        id: 'currentUser',
        name: 'You',
        avatar: '/placeholder.jpg',
      },
      content: newComment,
      timestamp: 'Just now',
      likes: 0,
      likedByUser: false,
      replies: [],
    }

    setComments([comment, ...comments])
    setNewComment('')
  }

  // Add a reply to a comment
  const handleSubmitReply = (commentId) => {
    if (!replyText.trim()) return

    const reply = {
      id: Date.now(),
      author: {
        id: 'currentUser',
        name: 'You',
        avatar: '/placeholder.jpg',
      },
      content: replyText,
      timestamp: 'Just now',
      likes: 0,
      likedByUser: false,
    }

    setComments((prev) =>
      prev.map((comment) =>
        comment.id === commentId
          ? { ...comment, replies: [reply, ...comment.replies] }
          : comment
      )
    )
    setReplyText('')
    setReplyingToCommentId(null)
  }

  // Delete a comment or reply
  const handleDeleteComment = (commentId, parentCommentId = null) => {
    if (parentCommentId) {
      // Delete a reply
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === parentCommentId
            ? {
                ...comment,
                replies: comment.replies.filter((reply) => reply.id !== commentId),
              }
            : comment
        )
      )
    } else {
      // Delete a top-level comment
      setComments((prev) => prev.filter((comment) => comment.id !== commentId))
    }
  }

  // Edit a comment or reply
  const handleEditComment = (commentId, newText, parentCommentId = null) => {
    if (parentCommentId) {
      // Edit a reply
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === parentCommentId
            ? {
                ...comment,
                replies: comment.replies.map((reply) =>
                  reply.id === commentId ? { ...reply, content: newText } : reply
                ),
              }
            : comment
        )
      )
    } else {
      // Edit a top-level comment
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === commentId ? { ...comment, content: newText } : comment
        )
      )
    }
    setEditingCommentId(null)
  }

  // Render a single comment (including its replies)
  const renderComment = (comment, parentCommentId = null) => (
    <div key={comment.id} className="space-y-3">
      <div className="flex space-x-3">
        <img
          src={comment.author.avatar}
          alt={comment.author.name}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 bg-purple/10 rounded-xl p-3 relative">
          <div className="flex justify-between items-center">
            <span className="font-medium text-sm">{comment.author.name}</span>
            <span className="text-xs text-gray-400">{comment.timestamp}</span>
          </div>

          {/* Edit mode */}
          {editingCommentId === comment.id ? (
            <textarea
              value={editedCommentText}
              onChange={(e) => setEditedCommentText(e.target.value)}
              className="w-full bg-purple/20 border border-purple/30 rounded-lg p-2 mt-2 text-white focus:outline-none"
            />
          ) : (
            <p className="text-sm mt-1">{comment.content}</p>
          )}

          {/* Comment actions */}
          <div className="flex items-center justify-between mt-2">
            <button
              onClick={() => handleLikeComment(comment.id)}
              className={`flex items-center gap-1 text-sm ${
                comment.likedByUser ? 'text-orange' : 'text-gray-300 hover:text-orange'
              }`}
            >
              <ThumbsUp className="w-4 h-4" />
              <span>{comment.likes}</span>
            </button>

            {/* Reply button */}
            <button
              onClick={() => setReplyingToCommentId(comment.id)}
              className="text-sm text-gray-400 hover:text-gray-300"
            >
              Reply
            </button>

            {/* Edit/Delete menu (only for the current user's comments) */}
            {comment.author.id === 'currentUser' && (
              <div className="flex items-center gap-2">
                {editingCommentId === comment.id ? (
                  <>
                    <button
                      onClick={() => handleEditComment(comment.id, editedCommentText, parentCommentId)}
                      className="text-sm text-green-500 hover:text-green-400"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingCommentId(null)}
                      className="text-sm text-gray-400 hover:text-gray-300"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setEditingCommentId(comment.id)
                        setEditedCommentText(comment.content)
                      }}
                      className="text-sm text-gray-400 hover:text-gray-300"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteComment(comment.id, parentCommentId)}
                      className="text-sm text-red-500 hover:text-red-400"
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Reply input */}
          {replyingToCommentId === comment.id && (
            <div className="mt-4">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
                className="w-full bg-purple/20 border border-purple/30 rounded-lg p-2 text-white focus:outline-none"
              />
              <button
                onClick={() => handleSubmitReply(comment.id)}
                className="mt-2 bg-purple/20 text-purple px-4 py-2 rounded-lg hover:bg-purple/30 transition-colors"
              >
                Submit Reply
              </button>
            </div>
          )}

          {/* Render nested replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-4 pl-6 border-l-2 border-purple/20">
              {comment.replies.map((reply) => renderComment(reply, comment.id))}
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className="mt-4 space-y-4">
      <div className="space-y-3">
        {comments.slice(0, visibleComments).map((comment) => renderComment(comment))}
      </div>

      {/* Load more button */}
      {comments.length > visibleComments && (
        <button
          onClick={() => setVisibleComments((prev) => prev + 5)}
          className="text-sm text-purple hover:text-purple/80"
        >
          Load more comments...
        </button>
      )}

      {/* Add a new comment */}
      <form onSubmit={handleSubmitComment} className="flex space-x-3">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 bg-purple3/30 border border-white/20 rounded-xl px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white/20"
        />
        <button
          type="submit"
          disabled={!newComment.trim()}
          className="bg-orange text-white p-2 rounded-xl  hover:bg-purple/30 transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  )
}

export default CommentSection