"use client"

import { useState } from "react"
import { ThumbsUp, MessageCircle, Share2, BookmarkPlus, MoreHorizontal, Heart, MoreVertical } from "lucide-react"
import CommentSection from "./CommentSection"

export function PostCard({ post }) {
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [likesCount, setLikesCount] = useState(post.likes)
  const [showComments, setShowComments] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  return (
    <div className="bg-purple3/30 backdrop-blur-lg rounded-xl border border-purple/20 hover:border-purple/40 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src='../../assets/Profile.png'
                alt={post.author.name}
                className="w-12 h-12 rounded-full border-2 border-purple/30"
              />
            </div>
            <div>
              <h3 className="font-semibold text-white">{post.author.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-orange">
                  {new Date(post.timestamp).toLocaleDateString(undefined, {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                <span className="text-sm bg-gradient-to-r from-purple to-orange px-2 py-0.5 rounded-full font-medium">
                  {post.author.domain}
                </span>
              </div>
            </div>
          </div>
          <button className="p-2 hover:bg-purple/10 rounded-full transition-colors">
            <MoreVertical className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <p className="text-white/90 mb-4 leading-relaxed">{post.content}</p>

        {/* {post.image && (
          <div className="relative -mx-6 mb-4">
            <img src={post.image || "/placeholder.svg"} alt="Post content" className="w-full object-cover max-h-96" />
          </div>
        )} */}

        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <div className="flex items-center gap-6">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 transition-colors ${
                isLiked ? "text-orange" : "text-gray-300 hover:text-orange"
              }`}
            >
              {isLiked ? <ThumbsUp className="w-5 h-5 fill-current" /> : <ThumbsUp className="w-5 h-5" />}
              <span className="text-sm font-medium">{likesCount}</span>
            </button>
            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center gap-2 text-white hover:text-orange transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">{post.comments}</span>
            </button>
            <button className="flex items-center gap-2 text-purple/70 hover:text-purple transition-colors">
              <Share2 className="w-5 h-5" />
              <span className="text-sm font-medium">{post.shares}</span>
            </button>
          </div>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className={`p-2 rounded-full transition-colors ${
              isSaved ? "text-purple bg-purple/20" : "text-purple/70 hover:text-purple hover:bg-purple/10"
            }`}
          >
            <BookmarkPlus className="w-5 h-5" />
          </button>
        </div>
        {showComments && <CommentSection postId={post.id} initialComments={post.commentsList || []} />}
      </div>
    </div>
  )
}